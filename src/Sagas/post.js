import { call, put, takeLatest } from 'redux-saga/effects';
import { PostActionConstant } from '../Constants/PostActionConstant';
import { getPostSuccess } from '../Action/PostAction'
import { fetch_post } from '../Api'

function* getPost() {
    try {
        const response = yield call(fetch_post);

        yield put(getPostSuccess(response.data));
    } catch (error) {

    }
}

export default [
	takeLatest(PostActionConstant.GET_POST, getPost)
];
