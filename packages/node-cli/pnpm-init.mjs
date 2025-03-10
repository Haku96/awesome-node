#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'
import colors from 'picocolors'

const { green, redBright } = colors

// TIPS mjs 中获取当前文件夹路径 fileURLToPath(import.meta.url)

// TIPS mjs 中获取当前文件夹路径
const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

const sourceFilePath = path.join(__dirname, 'template/ts-starter.json')

const destinationFilePath = path.join(process.cwd(), 'package.json')

fs.copyFile(sourceFilePath, destinationFilePath, err => {
  if (err) {
    console.log(redBright(`复制文件时出错: ${err}`))
  } else {
    console.log(green('文件复制成功'))
  }
})
