import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))
console.log(argv, '命令行数据')

// playground 目录下执行此文件
// 添加参数 -x 3 -y 4 -n5 -abc --beep=bar foo bar baz

const _result = {
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'bar',
  _: ['foo', 'bar', 'baz'],
}
