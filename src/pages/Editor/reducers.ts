import { SET_RAW_CONTENT } from './actionType';

export default (state: any, action: any) => {
    switch (action.type) {
        case SET_RAW_CONTENT: {
            return {
                ...state,
                content: action.rawContent
            }
        };
        default: {
            return state || {};
        }
    }
}