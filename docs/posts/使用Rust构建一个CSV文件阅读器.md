---
date: 2024-05-15
category: 
   - "Rust练习"
tag:
   - Rust
   - CSV
excerpt: <p style="color:gray;">X-CSV-Reader:一个使用Rust实现CSV命令行读取器，直接命令行读取CSV，方便快捷，主要学习csv这个crate!</p>
---

# 使用Rust实现一个CSV命令行读取器

## 成品展示

![csv](https://images.waer.ltd/notes/csv.gif)

## 快速上手

- 依赖导入：

```toml
cargo add csv
```

- 读取实现：

```rust
use std::error::Error;
use std::fs::File;
use std::path::Path;

fn read_csv<P: AsRef<Path>>(filename: P) -> Result<(), Box<dyn Error>> {
    let file = File::open(filename)?;
    let mut rdr = csv::Reader::from_reader(file);

    for result in rdr.records() {
        let record = result?;
        println!("{:?}", record);
    }

    Ok(())
}

fn main() -> Result<(), Box<dyn Error>> {
    let filename = "src/email.csv";
    read_csv(filename)
}
```

> 这是一段简单的`Rust`程序，演示了如何使用`csv``crate`中的读取`API`,通过指定`csv`路径进行`csv`数据的读取。

1. `use std::error::Error;`, `use std::fs::File;`, `use std::path::Path;`：
    - 这些是Rust语言中用于导入标准库中的错误处理、文件操作和路径相关模块的语句。

2. `fn read_csv<P: AsRef<Path>>(filename: P) -> Result<(), Box<dyn Error>>`：
    - 这是一个函数定义，名为`read_csv`，它接受一个实现了`AsRef<Path>` trait 的泛型参数`P`，表示文件名。函数返回一个`Result`枚举类型，其中`Ok(())`表示成功，`Err`包含一个实现了`Error` trait 的错误对象的`Box`指针。
    - 函数打开指定的CSV文件，创建一个CSV读取器（`csv::Reader`），然后遍历文件中的每一行记录并打印出来。

3. `fn main() -> Result<(), Box<dyn Error>>`：
    - 这是程序的入口点，也是主函数。它也返回一个`Result`枚举类型，用于处理可能出现的错误。
    - 在`main`函数中，指定了要读取的CSV文件的文件名为`"src/email.csv"`，然后调用`read_csv`函数来处理这个文件。

4. `let file = File::open(filename)?;`：
    - 在`read_csv`函数中，这行代码尝试打开指定的文件，`?`操作符用于处理可能出现的错误，如果出现错误，则会将错误传播到调用方。

5. `let mut rdr = csv::Reader::from_reader(file);`：
    - 创建一个CSV读取器`rdr`，并从打开的文件中读取数据。

6. `for result in rdr.records() { ... }`：
    - 使用`for`循环遍历CSV文件中的每一行记录。

7. `let record = result?;`：
    - 在循环中，尝试将每一行记录解析为`csv::StringRecord`类型的`record`，`?`操作符用于处理可能的解析错误。

8. `println!("{:?}", record);`：
    - 打印每一行记录的内容。

9. `Ok(())`：
    - 在函数末尾，返回一个`Ok(())`表示函数执行成功。

---

- 读取结果：

![image-20240526192615414](https://images.waer.ltd/notes/image-20240526192615414.png)

`csv`文件的读取功能基本实现了，但是每次读取需要我们手动修改代码，指定要读取的`csv`文件路径，相对还是不够实用和灵活，特别是对于非程序猿来说。下面将对代码进行进一步提取和优化，将读取的功能封装为命令行程序，提升使用体验。

----

## 命令行程序封装

关于命令行，`Rust`的`crate`中有很多不错的库，在之前我的文章中也提及了部分，这里选择使用`clap`这个`crate`来实现。

```toml
[dependencies]
ansi_term = "0.12.1"
clap = { version = "4.5.4", features = ["derive"] }
csv = "1.3.0"
prettytable-rs = "0.10.0"
```

- 结构分离，为了利于维护，将读取`CSV`文件的方法独立在`lib.rs`中，命令行参数处理等内容依旧在`main.rs`

- lib.rs

```rust
pub fn read_csv<P: AsRef<Path>>(filename: P) -> Result<(), Box<dyn Error>> {
    let file = File::open(filename)?;
    let mut rdr = csv::Reader::from_reader(file);

    let mut table = Table::new();

    // 添加表头
    let headers = rdr
        .headers()?
        .iter()
        .map(|h| Cell::new(h).style_spec("Fg=green"))
        .collect();
    table.add_row(Row::new(headers));

    // 添加记录
    for result in rdr.records() {
        let record = result?;
        let cells: Vec<Cell> = record.iter().map(|field| Cell::new(field)).collect();
        table.add_row(Row::new(cells));
    }

    table.printstd();
    Ok(())
}
```

> 感觉没啥新的东西可以讲的，这个方法的主要逻辑在上面已经说过，至于内容的打印，还是使用之前在`X-SCAN`端口扫描器中使用的`Table`进行美化。

- main.rs

```rust
use x_csvreader::read_csv;
#[derive(Parser, Debug)]
struct Args {
    #[clap(short, long, help = "The path to the CSV file.")]
    path: String,
}
fn print_infos() {
    println!(
        "{}",
        Blue.paint(
            r#"
            __   __      _____  _______      __     _____                _
            \ \ / /     / ____|/ ____\ \    / /    |  __ \              | |
             \ V /_____| |    | (___  \ \  / /_____| |__) |___  __ _  __| | ___ _ __
              > <______| |     \___ \  \ \/ /______|  _  // _ \/ _` |/ _` |/ _ \ '__|
             / . \     | |____ ____) |  \  /       | | \ \  __/ (_| | (_| |  __/ |
            /_/ \_\     \_____|_____/    \/        |_|  \_\___|\__,_|\__,_|\___|_|
        author:代号0408
        version:0.1.0
        "#
        )
    );
}
fn main() {
    print_infos();
    let args = Args::parse();
    // 调用lib.rs中定义的read_csv函数
    match read_csv(&args.path) {
        Ok(_) => {
            println!("=============================");
            println!("CSV 文件读取成功！");
        }
        Err(e) => {
            eprintln!("读取 CSV 文件时出现错误：{}", e);
        }
    }
}
```

> 逻辑简单，就不赘述了。如果不了解字符打印美化和表格美化这两个`lib`基本使用的，建议翻下我往期的文章，都是有写的。

那么如何使用呢？

```powershell
cargo run -- --path <csv文件路径>
```

不妨将开头的效果复现一下：

```powershell
cargo run -- --path C:\RustProjects\x-csvreader\src\email.csv
```

![](https://images.waer.ltd/notes/image-20240526225726969.png)

当然，为了演示的效果，这里选择的`CSV`文件数据量并不大，处理大数据量的文件也是可以的，只不过打印出来的表格数据可能会出现终端 **霸屏**的情况，纸上得来终觉浅！建议你自己试试，这里就不截图了。

----

## 总结

这篇文章主要学习如何基于`Rust`使用`csv`这个`crate`构建一个`CSV`文件读取器的过程。学习了`csv`相关的用法以及一些往期学过的`crate`的复习，兼顾了实用性和`Rust`的学习，是个很不错的练手小项目。

---

## 相关资源

- [clap](https://crates.io/crates/clap)
- [csv](https://crates.io/crates/csv)
- [CSV示例文件下载地址1]([可供下载的 CSV 文件 |新西兰统计局 --- CSV files for download | Stats NZ](https://www.stats.govt.nz/large-datasets/csv-files-for-download/))

- [CSV示例文件下载地址2]([CSV File Examples – Staffbase Support Portal](https://support.staffbase.com/hc/en-us/articles/360007108391-CSV-File-Examples))

