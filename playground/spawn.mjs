import { exec } from 'node:child_process'

exec('dir', (error, stdout) => {
  if (error) {
    console.error(`exec error: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`)
})
