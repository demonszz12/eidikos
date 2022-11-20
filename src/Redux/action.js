import * as types from "./actionTypes";
export const getSearchRequest = () => ({
  type: types.GET_SEARCH_REQUEST,
});
export const getSearchSuccess = (payload) => ({
  type: types.GET_SEARCH_SUCCESS,
  payload,
});
export const getSearchFailure = () => ({
  type: types.GET_SEARCH_FAILURE,
});

export const getVideoRequest = () => ({
  type: types.GET_VIDEO_REQUEST,
});
export const getVideoSuccess = (payload) => ({
  type: types.GET_VIDEO_SUCCESS,
  payload,
});
export const getVideoFailure = () => ({
  type: types.GET_VIDEO_FAILURE,
});

export const updatesearch = (payload)=>({
  type:types.UPDATE_SEARCH,
  payload
})

export const updatevideo=(payload)=>({
  type:types.UPDATE_VIDEO,
  payload
})