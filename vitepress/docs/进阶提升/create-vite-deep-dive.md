### package.json

```json
{
  "bin": { "create-vite": "index.js", "cva": "index.js" },

  // 文件可以使用通配符
  "files": ["index.js", "template-*", "dist"],

  // 运行时依赖，还可以设置 npm 版本
  "engines": {
    "node": "^18.0.0 || ^20.0.0 || >=22.0.0"
  },

  "scripts": {
    "build": "unbuild",
    // 发布到 npm 时，会执行此打包命令
    "prepublishOnly": "npm run build"
  },

  "devDependencies": {
    // A cross platform solution to node's spawn and spawnSync
    "cross-spawn": "^7.0.6",

    // 命令行参数解析
    "minimist": "^1.2.8",

    // 终端文字样式美化
    "picocolors": "^1.1.1",

    // 命令行交互
    "prompts": "^2.4.2",

    // 基于 rollup 的打包工具
    "unbuild": "^3.3.1"
  }
}
```

### 核心代码

```ts
// 高版本 node 导出内置模块，需要 package.json `type: module
import * as fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

// 获取当前文件所在目录
const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

// prettier-ignore 指定某些部分不被 Prettier 格式化

// 当前工作目录
const cwd = process.cwd()

// 路径拼接
const root = path.join(cwd, targetDir)

const argv = minimist<{
  template?: string
  help?: boolean
}>(process.argv.slice(2), {
  default: { help: false },
  alias: { h: 'help', t: 'template' },
  string: ['_'],
})
```

```js
#!/usr/bin/env node

/* eslint-disable antfu/no-import-dist */
import './dist/index.mjs'

// npx create-vite --help
```
