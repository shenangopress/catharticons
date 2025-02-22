# catharticons

_A minimalist SVG icon set, optimized and accessible_

## Each <abbr title="Scalable Vector Graphic">SVG</abbr> file includes:

* `viewBox` attribute in the opening `<svg>` at a height of 16px
* `aria-labelledby="catharticons-ICON_FILE_STEM-title"`

## Install

```cli
npm install @shenangopress/catharticons --save-dev
```

## Test
```cli
npm run test
```

## Use
```js
import catharticons from '@shenangopress/catharticons'

catharticons('GitHub') // <svg id="catharticons-github" …>…</svg>
```

## Questions or Comments?

To suggest an icon to add, please create an issue with a link to an SVG or other inspriational graphic.

Pull requests are welcome too.

Copyright &copy; 2025 by [Shenango Press][shenango-press]

[shenango-press]: https://github.com/shenangopress/
[svg-colors]: https://css-tricks.com/cascading-svg-fill-color/
