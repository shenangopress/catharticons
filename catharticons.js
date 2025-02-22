/**
 * @file Configure SVG icon files with Node.js
 * @author Reuben L. Lillie <reubenlillie@gmail.com>
 */

// Import native Node.js modules for working with the file system
import {readdirSync, readFileSync} from 'fs'
import {join} from 'path'

/**
 * Get the SVG markup for an icon
 * @module catharticons
 * @since 1.0.0
 * @param {string} icon Name of icon
 * @param {string} [dir=svg] Directory of icons to read
 * @return {string} Contents of the SVG file for that icon
 * @example catharticons('GitHub') // <svg id="catharticons_github" …>…</svg>
 */
export default (icon, dir = 'svg') => {
  /** @type {string[]} List the files in a directory */
  var files = readdirSync(dir).map(file => file)

  /** @type {string[]} Find the SVG file for the specified icon */
  var filePath = files.find(item => item.split('.')[0] === icon.toLowerCase())

  // Reassemble the full relative file path, e.g., ./svg/github.svg
  filePath = join(dir, filePath)

  return readFileSync(filePath).toString()
}
