import path from 'node:path'
import fs from 'fs-extra'
import url from 'node:url'

// node:url module provides utilities for URL resolution and parsing
/**
 * @description URL 字符串是简单的文本表示，遵循 URL 的标准格式
 * 通常由以下几个部分组成，协议（如 http、https、ftp 等），主机名（或 IP 地址）
 * 端口号（可选），路径（可选），查询参数（可选，以 ? 开头，后面跟随参数对），哈希值（可选，以 # 开头，后面跟随锚点或片段标识符）
 * @example https://www.example.com:8080/path/to/page?name=example#section1
 *
 * @description URL 对象是 JavaScript 提供的一个标准对象，它提供了一种更易于操作和解析 URL 的方式
 * @example const url = new URL("https://www.example.com:8080/path/to/page?name=example#section1");
 * @summary URL 对象可以直接调用方法，简化操作，推荐使用。url.href、url.port 等，URL 字符串则不能
 *
 * @link https://www.cnblogs.com/longmo666/p/18224918，fileURLToPath
 */
const fooUrl = new URL(
  'https://www.example.com:8080/path/to/page?name=example#section1',
)
console.log('fooUrl', fooUrl)

const importMeta = import.meta
console.log(importMeta)
console.log(url.fileURLToPath(importMeta.url))
