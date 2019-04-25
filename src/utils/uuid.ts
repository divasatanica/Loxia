/**
 * @author coma
 * @desc get uuid
 */

let id: number = 0;

export function uuid (prefix: string = 'coma'): string {
    return `${prefix}-${id++}`;
}