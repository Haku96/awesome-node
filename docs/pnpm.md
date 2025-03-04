### 常用命令

- 全局添加依赖包: `pnpm i <package-name> -wD`
- 工作区添加依赖包: `pnpm add <package-name> --filter <workspace-name>`
- [npm create](https://juejin.cn/post/7241514309717573692)
- `npm help <command-name>`: 本地查看帮助文档

### package.json

```json
{
  // 指定项目代码的模块类型 [commonjs，module]
  "type": "module",

  // 定义模块的导出路径，通常用于库项目
  "exports": {
    "node": "./index.js",
    "default": "./browser.js",
    "types": "./index.d.ts",
    "module": "./index.mjs",
    "import": "./index.mjs",
    "require": "./index.js"
  },

  // 指定项目支持的 Node.js 和 npm 的版本范围。
  "engines": {
    "node": ">=16",
    "npm": ">=8.0.0"
  },

  // pre，post 前后置脚本标识
  "script": {
    "prezx": "pnpm --version",
    "postzx": "npm --version",
    "zx": "zx ./playground/zx.mjs"
  },

  // 用于定义可执行文件的路径，允许用户在全局安装包后通过命令行直接调用这些工具
  "bin": {
    "internal-ip": "./cli.js"
  },

  // 指定发布到 npm 的文件列表，还会携带部分默认文件如 license，README.md 等
  "files": ["index.js", "index.d.ts", "browser.js", "browser.d.ts"]
}
```

### 参考资料

- [pnpm 官网](https://pnpm.io/)
- [npm 文档](https://docs.npmjs.com/cli/v11/configuring-npm/package-json)
