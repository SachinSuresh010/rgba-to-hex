/**
 * Convert the rgba string to hex
 * @param {string} rgbaString Enter the rgba string
 * @returns {string} hex string
 */
function rgbaToHex(rgbaString) {
    // Extract RGB values from the RGBA string
    const rgbaValues = rgbaString.replace(/[^0-9,.]/g, '').split(',');
    console.log(rgbaValues);
    const r = parseInt(rgbaValues[0]);
    const g = parseInt(rgbaValues[1]);
    const b = parseInt(rgbaValues[2]);
    const a = parseFloat(rgbaValues[3]);
    if(!rgbaValues.every(item => item >= 0 && item <= 255)){
        throw new Error('RGB Value must be between 0 and 255');
    }
    // Convert each component to hexadecimal
    const red = r.toString(16).padStart(2, '0');
    const green = g.toString(16).padStart(2, '0');
    const blue = b.toString(16).padStart(2, '0');
    let alpha = typeof rgbaValues[3] !== 'undefined' ? Math.round(255 * a).toString(16).padStart(2, '0') : '';
    // Concatenate the hexadecimal components
    const hex = `#${red}${green}${blue}${alpha}`;
    return hex;
}

module.exports = rgbaToHex