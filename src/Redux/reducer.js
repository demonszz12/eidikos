import * as types from "./actionTypes";
const initialState = {
  search: JSON.parse(localStorage.getItem("default")) || "News",
  videos:[],
  isLoading: false,
  isError: false,
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_SEARCH_SUCCESS:
      return {
        ...state,
        search:payload,
        isLoading: true,
        isError: false,
      };
    case types.GET_SEARCH_FAILURE:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
      case types.GET_VIDEO_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case types.GET_VIDEO_SUCCESS:
        return {
          ...state,
          videos:payload,
          isLoading: true,
          isError: false,
        };
      case types.GET_VIDEO_FAILURE:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case types.UPDATE_SEARCH:
        return {
          ...state,
          search:payload
        }
      case types.UPDATE_VIDEO:
        return {
          ...state,
          videos:payload
        }
    default:
        return {
            ...state
        };
  }
}