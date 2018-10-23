'use strict'

import { importJs, getJson, greeting } from './utils.js'

;(async () => {
  const cdn = await getJson('./cdn.json')
  await Promise.all(Object.values(cdn).map(importJs))

  greeting()
})()
