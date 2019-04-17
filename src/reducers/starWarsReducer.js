import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: ''
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }

    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        characters: action.payload
      }

    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    default:
      return state;
  }
};
