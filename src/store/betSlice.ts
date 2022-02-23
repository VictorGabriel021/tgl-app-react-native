import { createSlice } from "@reduxjs/toolkit";

import { Bet, defaultValuesBet } from "./@types/BetTypes";

const initialStateListNumbers: Bet = defaultValuesBet;

export const betSlice = createSlice({
  name: "bet",
  initialState: initialStateListNumbers,
  reducers: {
    addAndRemoveNumberManually: (state, action) => {
      if (state.numbers.includes(action.payload)) {
        state.numbers.splice(state.numbers.indexOf(action.payload), 1);
      } else {
        state.numbers.push(action.payload);
      }
    },
    completeGame: (state, action) => {
      while (state.numbers.length < action.payload.maxNumber) {
        const generateNumber = Math.ceil(Math.random() * action.payload.range);

        if (!state.numbers.includes(generateNumber)) {
          state.numbers.push(generateNumber);
        }
      }
    },
    clearGame: (state) => {
      state.numbers = [];
    },
  },
});

export const { addAndRemoveNumberManually, completeGame, clearGame } =
  betSlice.actions;

export default betSlice.reducer;
