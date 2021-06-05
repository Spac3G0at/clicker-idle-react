import {
  DECREMENT_GOATS,
  INCREMENT_GOATS_PER_SECONDS,
  SET_GOATS_NUMBER,
} from "./actions";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_GOATS_NUMBER:
      return {
        ...state,
        goatsNumber: state.goatsNumber + action.goatsNumber,
      };
    case INCREMENT_GOATS_PER_SECONDS:
      return {
        ...state,
        goatsPerSeconds: state.goatsPerSeconds + action.goatsPerSeconds,
      };
    case DECREMENT_GOATS:
      return {
        ...state,
        goatsNumber: state.goatsNumber - action.goats,
      };
    default:
      return { ...state };
  }
};

export default reducer;
