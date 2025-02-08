#!/usr/bin/env zx
import { $, quotePowerShell } from 'zx'

import 'zx/globals'

$.quote = quotePowerShell

$.verbose = true

// eslint-disable-next-line antfu/no-top-level-await
const result = await $`npm --version`

console.log(result, '响应结果对象')
