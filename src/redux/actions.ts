export const SET_GOATS_NUMBER = "SET_GOATS_NUMBER";
export const INCREMENT_GOATS_PER_SECONDS = "INCREMENT_GOATS_PER_SECONDS";
export const DECREMENT_GOATS = "DECREMENT_GOATS";

export const incrementGoats = (goatsNumber: any) => {
  return {
    type: SET_GOATS_NUMBER,
    goatsNumber,
  };
};

export const decrementGoats = (goats: number) => {
  return {
    type: DECREMENT_GOATS,
    goats,
  };
};

export const incrementGoatsPerSeconds = (goatsPerSeconds: number) => {
  return {
    type: INCREMENT_GOATS_PER_SECONDS,
    goatsPerSeconds,
  };
};
