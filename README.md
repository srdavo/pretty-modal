# Pretty Modal

A tiny JavaScript class that brings beautiful open/close animations to native `<dialog>` elements using [GSAP](https://gsap.com/) and its [Flip plugin](https://gsap.com/docs/v3/Plugins/Flip/).

The modal morphs **from** the trigger button and collapses **back into it** when closed — with elastic easing, blur, and fade effects. No frameworks, no dependencies beyond GSAP.

## Features

- Uses the native HTML `<dialog>` element (accessible by default)
- Smooth elastic open animation with blur fade-in
- Closing animation with border-radius morph, blur, and fade-out
- Automatic style injection (no extra CSS file needed)
- Lightweight (~100 lines, zero build step)

## Demo

Clone the repo, open `demo/index.html` in your browser, and click the button.

## Installation

### Option 1 — Copy the file

Download `src/PrettyModal.js` into your project and import it:

```js
import { PrettyModal } from './PrettyModal.js'
```

### Option 2 — Clone the repo

```bash
git clone https://github.com/srdavo/pretty-modal.git
```

### Dependency

Pretty Modal requires **GSAP 3** and its **Flip plugin**. Add them via CDN or npm:

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/Flip.min.js"></script>
```

Or with npm:

```bash
npm install gsap
```

```js
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
gsap.registerPlugin(Flip)
```

## Usage

### 1. Create the instance

```js
import { PrettyModal } from './PrettyModal.js'

const prettyModal = new PrettyModal()
```

### 2. Add a `<dialog>` and a trigger button

```html
<button onclick="prettyModal.open('my-modal')">Open</button>

<dialog id="my-modal">
  <h1>Hello world!</h1>
  <button onclick="prettyModal.close('my-modal')">Close</button>
</dialog>
```

That's it. The modal will animate from the button and back.

## API

| Method | Description |
|---|---|
| `open(dialogId)` | Opens the `<dialog>` with the given `id`, animating from the clicked element. |
| `close(dialogId)` | Closes the `<dialog>` with the given `id`, animating back to its origin element. |

## How it works

1. **Open** — Captures the trigger button's position with `Flip.getState()`, calls `dialog.showModal()`, then uses `Flip.from()` to animate the dialog from the button's position with an elastic ease.
2. **Close** — Captures the original button's position, uses `Flip.to()` to morph the dialog back into the button with blur and fade animations, then calls `dialog.close()`.

CSS keyframe animations handle the blur/fade/border-radius effects during transitions. Styles are auto-injected on instantiation so you don't need to import any CSS.

## Customization

Style your `<dialog>` however you want with regular CSS. Pretty Modal only handles the animation — layout, colors, and sizing are up to you.

```css
dialog {
  border: none;
  border-radius: 24px;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
}
```

## Browser Support

Works in all modern browsers that support `<dialog>` and ES modules (Chrome, Firefox, Safari, Edge).

## License

MIT License

Copyright (c) 2026 srdavo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## Credits

Built by [srdavo](https://github.com/srdavo). Powered by [GSAP](https://gsap.com/).
