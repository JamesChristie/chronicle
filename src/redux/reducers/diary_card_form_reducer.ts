import { Action, Reducer } from "redux"
import {
  DiaryCardFormState,
  DiaryCardFormInitialState
} from "../initialState/diary_card_form_initial_state"

export const DiaryCardFormReducer: Reducer<DiaryCardFormState, Action> = (
  state: DiaryCardFormState = DiaryCardFormInitialState,
  action: Action
): DiaryCardFormState => {
  return {}
}
