import { PostActionConstant } from '../Constants/PostActionConstant'

const initialState = {
    post: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PostActionConstant.GET_POST_SUCCESS:
            return {
                ...state,
                post: action.post,
            };
        default:
            return state;
    }
}