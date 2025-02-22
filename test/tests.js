/**
 * @file Defines test scripts for catharticons
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

// Import native
import {describe, it} from 'node:test'
import assert from 'node:assert'

// Import module from ./index.js
import catharticons from '@shenangopress/catharticons'

describe('catharticons function', () => {
  it('should return SVG markup', () => {
    assert.strictEqual(catharticons('GitHub').split(' ')[0], '<svg')
  })
})
