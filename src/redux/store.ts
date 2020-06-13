import { createStore, Action } from 'redux'

import { DiaryCardFormReducer } from './reducers/diary_card_form_reducer'
import { DiaryCardFormInitialState } from './initialState/diary_card_form_initial_state'

export enum DiaryCardFormActionTypes {
  AddPrescriptionMedication = 'ADD_MEDICATION',
  UpdatePrescriptionMedication = 'UPDATE_MEDICATION',
  DeletePrescriptionMedication = 'DELETE_MEDICATION'
}

export interface PrescriptionMedicationFormActionValue {
  currentName: String,
  updatedName: String
}

export interface PrescriptionMedicationFormAction extends Action {
  type: DiaryCardFormActionTypes,
  value: PrescriptionMedicationFormActionValue
}

export const DiaryCardFormStore = createStore(DiaryCardFormReducer, DiaryCardFormInitialState) 
