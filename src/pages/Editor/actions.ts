import { SET_RAW_CONTENT } from './actionType';

export const setRawInput = (content: string) => ({
    type: SET_RAW_CONTENT,
    rawContent: content
});