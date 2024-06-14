---
date: 2024-06-13
category:
  - "Rust基础"
tag:
  - Rust
  - Cargo
excerpt: <p style="color:gray;">在Rust中，模块有助于将程序分割成逻辑单元，以提高可读性和组织性。一旦程序变得更大，将其拆分为多个文件或命名空间非常重要。模块有助于构建我们的程序。模块是项目的集合：包括函数、结构体甚至其他模块</p>
---

#  Rust基础学习-Modules&Package





在Rust中，模块有助于将程序分割成逻辑单元，以提高可读性和组织性。一旦程序变得更大，将其拆分为多个文件或命名空间非常重要。

模块有助于构建我们的程序。模块是项目的集合：包括函数、结构体甚至其他模块。

![cargo](https://images.waer.ltd/notes/cargo.jpg)

----

## Module

### 定义模块

在`Rust`中，可以使用`mod`关键字来定义一个模块，语法如下：

```rust
mod module_name {
  // code
}
```

这里，`module_name `是模块的名称。看下面的例子；

```rust
mod config {
    fn print() {
        println!("config!");
    }
}
```

上面的示例中，我们使用`mod`定义了以`config`为名称的一个模块。在模块内部，我们定义 了一个简单的函数`print`;

---

### Rust 模块内项目的可见性

模块中的项目可以是私有的或公共的。默认情况下，模块是私有的。

这意味着模块内部的项目无法在模块外部访问。`pub `关键字可用于使项目具有公共可见性。让我们看一个示例。

```rust
mod config {
    // items in modules by default have private visibility
    fn select() {
        println!("called config::select");
    }

    // use the `pub` keyword to override private visibility
    pub fn print() {
        println!("called config::print");
    }
}
```

在这里，我们定义一个名为`config`的模块，其中包含两个函数`select()`和`print()`。

`print(`)函数以`pub`关键字开头，这意味着它具有公共可见性。但`select()`函数则没有。

如果你此时运行程序会发现有一些警告，这是因为我们并没有调用这些函数，现在，我们尝试调用一下；

```rust
mod config {
    // items in modules by default have private visibility
    fn select() {
        println!("called config::select");
    }

    // use the `pub` keyword to override private visibility
    pub fn print() {
        println!("called config::print");
    }
}

fn main() {
    // public items inside module can be accessed outside the parent module
    // call public print function from display module
    config::print();
}
```

在这里，我们使用` config::print() `语法来调用 `config `模块内的公共函数 `print()`。`:: `运算符用于分隔模块名称和要在模块内调用的项目。

但是，模块内部的私有项目不可在模块外部访问。如果我们尝试在 `config `模块内调用私有函数 `select()`，将会收到编译错误。

----

> 注意：当在模块内部某个用`pub`修饰的方法调用模块内部非`pub`方法时，我们在调用该`pub`方法时，其涉及到的非`pub`方法也将具有`pub`性质；

我们看个例子：

```rust
mod player {
    // private function
    fn focus() {
        println!("called player::focus");
    }

    // public function
    pub fn shift() {
        println!("called player::shift");
    }

    // public function
    pub fn jump() {
        // call private function focus and shift inside the module
        focus();
        shift();
        println!("called player::jump");
    }
}

fn main() {
    // call public function jump from player module
    player::jump();
}
```

> called player::focus
> called player::shift
> called player::jump

在这里，我们在`player`模块内定义了多个函数。请注意，我们能够在同一模块内的另一个函数`jump()`中调用私有函数`focus()`。

---

### 模块嵌套

一个模块中还可以在定义其他模块，这就是模块的嵌套；看例子：

```rust
// nested module
pub mod player {
    pub mod sprite {
        pub fn create() {
            println!("called player::sprite::create");
        }
    }
}

fn main() {
    // call public function create from sprite module which is inside player module 
    player::sprite::create();
}
```

输出：

> called player::sprite::create

在这里，我们将一个 `sprite `模块嵌套在 `player `模块内部。我们在 `sprite `模块内定义了一个名为 `create()` 的公共函数，在` main()` 函数中通过 `player::sprite::create() `调用。

---

### use关键字

我们可以使用`use`关键字将模块内的项目引入当前作用域。`use`关键字帮助我们消除调用函数时写出完整模块路径的需要。让我们通过使用`use`关键字来重新编写我们的嵌套模块示例。

```rust
// nested module
pub mod player {
    pub mod sprite {
        pub fn create() {
            println!("called player::sprite::create");
        }
    }
}

// bring the create function into scope
use player::sprite::create;

fn main() {
    // call public function directly
    create();
}
```

> 这里，我们使用 `use `关键字从 `player `模块内部的 `sprite `模块中将 `create() `函数引入当前作用域。
>
> 这样我们可以直接调用 `create() `函数，而不需要完全限定名称为 `player::sprite::create()。`

----

## Crate和Package

一个 `crate `可以包含一个或多个 `Rust `模块，这些模块可以包含诸如函数、类型和常量之类的代码。

一个 `crate `有两种类型：二进制 `crate `和库 `crate`。二进制 `crate `是一个 `Rust` 程序，编译成一个可执行文件或多个可执行文件，并且每个可执行文件都有一个 `main()` 函数。

库 `crate `不会编译成可执行文件，也没有 `main()` 函数。库 `crate `通常定义了可以在多个项目中使用的共享功能。`Crates `可以捆绑在一起形成一个 `package`。

----

可以使用内置在Rust中的Cargo软件包管理器来创建软件包。 Cargo与Rust一起预安装。我们可以使用 cargo 来创建一个软件包。一个软件包包含一个或多个提供一组功能的crate。

> 一个包中可以包含许多二进制 crate，但最多只能包含一个库 crate。

---

### 创建二进制包

要创建一个二进制包，我们可以在终端中使用 `cargo `命令。

```powershell
$ cargo new hello_world --bin
```

我们使用 `cargo `和` --bin `选项创建一个二进制包 `hello_world`。 这是 `cargo `的默认行为。 让我们来看看 `hello_world `包的内容。

```rust
hello_world
├── Cargo.toml
└── src
    └── main.rs
```

- `hello_world` 是包目录
- `Cargo.toml `是一个包含有关 `crate `的元数据的文件，如其名称、版本和依赖项
- `src/main.rs `是 `crate `根目录，包含二进制包的源代码

---

### 创建库包

```powershell
$ cargo new hello_world_lib --lib
```

包结构如下：

```rust
hello_world_lib
├── Cargo.toml
└── src
    └── lib.rs
```

- `hello_world_lib `是包目录
- `Cargo.toml `是一个包含有关包的元数据的文件，例如其名称、版本和依赖关系
- `src/lib.rs `是 crate 根目录，包含库包的源代码

一个包可以包含` src/main.rs `和` src/lib.rs `。在这种情况下，它有两个 crate：一个二进制 crate 和一个库 crate，两者都与包的名称相同。例如，

```rust
hello_world
├── Cargo.toml
└── src
    └── lib.rs
    └── main.rs
```

----

## Cargo包管理器

### Cargo

`Cargo`是`Rust`的包管理器。它与`Rust`一起预装，并可用于打包依赖项，管理它们以及构建和分发我们自己的包/库。

**cargo的特点：**

- 依赖管理

> Cargo 可轻松管理我们项目的依赖项，包括添加、更新和删除依赖项。
> 构建和打包

> Cargo 可自动构建和打包我们的 Rust 项目，创建可与他人共享的二进制或库代码。

- 文档生成

> Cargo 可自动为我们的代码生成文档，使其他开发人员更容易理解和使用我们的库。

- 下载 crate

> Cargo 可从 crates.io 下载并安装库，这是 Rust crate 的中央存储库。

- 运行二进制或测试

> Cargo 可构建我们的源代码，运行可执行二进制文件，并运行我们的测试。

----

### 依赖管理

`Cargo `的主要功能之一是可以下载、管理外部库。让我们看看如何从` crates.io` 使用外部 crate 的示例。crates.io 是一个中央仓库，我们可以从中获取和发布用于 Rust 的共享库。

- 创建一个项目

```rust
$ cargo new hello_world
```

- 添加一个生成随机数的依赖`rand`,我们可以在`cargo.toml`中的`[dependencies]`部分进行添加

```rust
name = "hello_world"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
rand = "0.8.5"
```

我们还可以使用命令` cargo add rand` 来为我们的项目添加依赖。

> 注意，如果通过命令的方式添加依赖，在添加时`Rust`就会加载编译该依赖，而通过`cargo.toml`手动添加时，程序会在你首次运行程序时进行加载编译的操作。

- 使用依赖

```rust
use rand::Rng;

fn main() {
    let mut rng = rand::thread_rng();

    // simulate rolling a die
    println!("roll = {}", rng.gen_range(1..=6));
}

# Output: roll = 5
```

----

### 构建和执行

`Rust`支持使用`cargo`命令对程序进行`build`和`run`.命令分别是

- cargo build
- cargo run

> 一般情况下，执行`cargo run`时，默认会自动执行`cargo build`,所以一般我们需要运行程序时不需要先执行`build`，再执行`run`,而是直接执行`cargo run`即可。

常用命令一览表：

| Command        | Description                                                  |
| :------------- | :----------------------------------------------------------- |
| `cargo new`    | Create a new Rust project with basic directory structure     |
| `cargo build`  | Build (compile) the current project and generate a binary executable |
| `cargo run`    | Build and run your current project (cargo build + run)       |
| `cargo check`  | Build the current project without generating a binary executable |
| `cargo add`    | Add a new dependency and include it in `Cargo.toml` file     |
| `cargo update` | Update all dependencies of current project to latest version |
