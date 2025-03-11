import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    {
      builder: 'copy',
      input: 'src/style',
      outDir: 'dist/style',
    },
  ],
  declaration: 'node16',
  clean: true,
  hooks: {
    'build:before': ctx => {
      console.log('build:before', ctx)
    },
  },
  rollup: {
    esbuild: {
      minify: true,
      target: 'es2020',
    },
  },
})
