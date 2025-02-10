import { internalIpV4 } from 'internal-ip'

// => 192.168.0.0
// eslint-disable-next-line antfu/no-top-level-await
console.log(await internalIpV4())
