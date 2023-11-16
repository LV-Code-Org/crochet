
export default function luma_index(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const rgb = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
    const luma_index = rgb ? (0.212 * rgb.r + 0.701 * rgb.g + 0.087 * rgb.b) / 255 : null
    return (luma_index > 0.7) ? "gray" : "lightgray"
}