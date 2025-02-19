/**
 * @description path 通常指的是文件或目录的完整路径。它是一个字符串，描述了从文件系统的根目录到目标文件或目录的完整路线。
 * 路径可以是绝对的也可以是相对的。
 *
 * @description path segments 是构成路径的各个部分。在路径中，每个目录名或文件名都可以视为一个路径段。
 *
 * @description Pathe exports some extra utilities that do not exist in standard Node.js path module
 */

import { basename, resolve } from 'pathe'
import { filename } from 'pathe/utils'

// => quux
const _baseName = basename('/foo/bar/baz/asdf/quux.html', '.html')

// resolves a sequence of paths or path segments into an absolute path
// If no path segments are passed, path.resolve() will return the absolute path of the current working directory
const _resolve = resolve('pathe.mjs')
console.log(_resolve, 'resolvePath')

// => quux.html
const _fileName = filename('/foo/bar/baz/asdf/quux.html')
console.log(_fileName, 'filename')
