import { SET_RAW_CONTENT } from './actionType';

export interface InputContent {
    content: string;
    displayContent: string;
}

export const setRawInput = ({ content, displayContent }: InputContent) => ({
    type: SET_RAW_CONTENT,
    rawContent: content,
    displayContent
});