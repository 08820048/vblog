---
date: 2024-06-06
category:
    - "Rust"
tag:
    - Rust
    - scoop
    - xpwd
excerpt: <p style="color:gray;"> 使用`Rust`写了一个命令行密码生成工具。但由于只能通过`cargo install `来进行安装，这大大限制了使用的便捷性。因此新增了`scoop`的安装方式 </p>
---

# 使用scoop进行分发下载随笔


## 配置步骤

### **准备清单文件**：

- 创建一个名为 `xpwd.json`（或者 `app.json`）的清单文件，其中包含你软件的信息，如版本、描述、下载链接等。

```json
{
  "version": "1.0.1",
  "description": "A command-line password generator built with Rust, offering a swift and effortless solution for creating passwords of varying strengths. Cure your password creation woes with a single command!",
  "homepage": "https://github.com/08820048/xpwd",
  "license": "MIT",
  "architecture": {
    "64bit": {
      "url": "https://github.com/08820048/xpwd/releases/download/v1.0.1/xpwd-v1.0.1-x86_64-pc-windows.zip",
      "hash": "3f955d50dc2dfcc1f9bab4eab1c417bd06ae3274243f9e6044d38cb9f0ea49b6"
    }
  },
  "bin": "xpwd.exe"
}
```

> 我是和项目仓库存放在一起，位于根目录下的bucket/目录下；

### **创建 Scoop bucket**：

- 在 `GitHub `上创建一个新的仓库，用于存储你的软件清单文件。确保仓库名能够清楚地表示你的软件。
- 将清单文件添加到仓库中，并确保仓库地址对其他用户可见。

> 不一定需要另外创建一个新仓库，和项目仓库共用也是可以的。

### **添加 Scoop bucket**：

- 在命令行中运行 `scoop bucket add <bucket_name> <repository_url>` 命令，将你的仓库添加为一个 Scoop bucket

```rust
 scoop bucket add xpwd https://github.com/08820048/xpwd
```

### 测试清单文件

- 确保你的清单文件（如 `xpwd.json`）已经配置正确，并且仓库中的其他文件都是必需的。

### **安装测试**：

- 在命令行中运行 `scoop install xpwd`（使用你指定的软件别名）来测试安装你的软件。

### **更新 Scoop bucket**（如果有必要）：

- 如果你对清单文件进行了更新，确保将更改推送到你的 Scoop bucket 的 `GitHub` 仓库中。使用 Git 的 `add`、`commit` 和 `push` 命令来完成。

> 需要注意的是，为了确保可以下载到这个文件，我们将可执行文件压缩后上传GitHub并创建一个`release`,配置文件中的`url`就是这个地址。

---

## 参考

- [在线hash](https://www.fileformat.info/tool/hash.htm)

- [xpwd](https://github.com/08820048/xpwd)