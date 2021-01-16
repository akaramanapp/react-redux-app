import { PostActionConstant } from '../Constants/PostActionConstant'

export const getPost = () => ({
    type: PostActionConstant.GET_POST,
});

export const getPostSuccess = (post) => ({
    type: PostActionConstant.GET_POST_SUCCESS,
    post,
});