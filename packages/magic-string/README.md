### 概述

`magic-string` 是一个用于处理字符串的 `JavaScript` 库。它可以让你在字符串中进行插入、删除、替换等操作，并且能够生成准确的sourcemap。

适用于需要对 `source code` 进行轻微修改并保存 `sourcemap` 的情况，比如替换字符、添加内容等操作。通过 magic-string，你可以确保在字符串操作的同时，`sourcemap` 能够保持准确，不会因为操作而失真。

如项目中的 `input.js` 为 `source code`，转换得到的 `output.js` 如出现问题后可根据 `sourcemap` 找到具体的代码报错位置，方便后续调试。

### 参考资料

- [source-maps](https://web.dev/articles/source-maps?hl=zh-cn)
- [magic-string 教程](https://inspirnathan.com/posts/27-how-to-use-the-magic-string-library)
