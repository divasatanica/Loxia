/**
 * @author coma
 * @desc Date.now polyfill
 * @returns {Number} ms timestamp
 */

export function now (): number {
    if (Date.now) {
        return Date.now();
    }
    return (new Date()).getTime();
}