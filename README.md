# rgba-to-hex

A lightweight utility to convert RGBA color strings into HEX format (with optional alpha).

# 📦 Installation

```bash
npm install rgba-to-hex
```

Or if you're using yarn:

```bash
yarn add rgba-t0-hex
```

# 🔧 Usage

```js
const rgbaToHex = require('rgba-to-hex');

const hexColor = rgbaToHex('rgba(255, 99, 71, 0.5)');
console.log(hexColor); // Output: #ff634780
```

# 📘 API

## rgbaToHex(rgbaString)

**Parameters:**

- `rgbaString` (string): A valid CSS `rgba()` string. For example, `'rgba(255, 255, 255, 0.3)'`.

**Returns:**

- A hex string (e.g., `#ffffff4d` for semi-transparent white). If the alpha value is `1`, the returned hex will not include the alpha component.

**Throws:**

- Error if RGB values are not between 0 and 255.

# ❗ Examples

```js
rgbaToHex('rgba(255, 0, 0, 1)');      // '#ff0000'
rgbaToHex('rgba(255, 0, 0, 0.5)');    // '#ff000080'
rgbaToHex('rgba(0, 128, 255, 0.25)'); // '#0080ff40'
```

# Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

# License

This project is licensed under the MIT License - see the LICENSE file for details.