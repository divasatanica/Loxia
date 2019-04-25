
import { now } from './date';

/**
 * @author coma
 * @desc Function Debouncing
 * @param func {Function} the function to be debounced
 * @param delay {Number} delaying time
 */

export function debounce (func: Function, delay: number) {
    let timer: any;
    return function (this: any, ...rest: any[]) {
        let args = arguments,
            context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    }
}

/**
 * @author coma
 * @desc Function Throttling
 * @param func {Function} the function to be throttled
 * @param delay {Number} delaying time
 */

export function throttle (func: Function, delay: number) {
    let timeDelay = 0;
    return function () {
        let nowTime = now(),
            result;
        if (nowTime - timeDelay >= delay) {
            result = func.apply(null, arguments);
            timeDelay = nowTime;
        }
        return result;
    }
}