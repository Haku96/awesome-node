import { execa } from 'execa'

// eslint-disable-next-line antfu/no-top-level-await
const result = await execa('node', ['-v'])
console.log(result, '响应结果对象')
