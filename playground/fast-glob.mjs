import fastGlob from 'fast-glob'

// eslint-disable-next-line antfu/no-top-level-await
const entries = await fastGlob(['./*.mjs'], { absolute: true })
console.log(entries, '查找结果数组')
