import 'jasmine'
import * as React from 'react'
import { shallow } from 'enzyme'

import { 
  buildMockStore, 
  MockStore 
} from '../mocks/redux_store'

import {
  PrescriptionMedication,
  PrescriptionMedicationSection
} from '../../src/components/PrescriptionMedicationSection'

import {
  DiaryCardFormActionTypes,
  PrescriptionMedicationFormAction,
  PrescriptionMedicationFormActionValue
} from '../../src/redux/store'

describe('Prescription medication section', () => {
  var mockStore: MockStore<any, any>
  var medicationsList: PrescriptionMedication[]

  beforeEach(() => {
    mockStore = buildMockStore()
    medicationsList = [{ name: 'Aspirin' }]
  })

  it('displays a field for entering a prescription medication', () => {
    const elementWrapper = shallow(
      <PrescriptionMedicationSection medications={[]} store={mockStore} />)
    const prescriptionNameField = elementWrapper?.find('input[type="text"][name="prescription-name"]')

    expect(prescriptionNameField?.length).toEqual(1)
  })

  it('displays existing form fields for medication', () => {
    const medicationsList = [
      { name: 'Aspirin' }
    ]

    const elementWrapper = shallow(
      <PrescriptionMedicationSection medications={medicationsList} store={mockStore} />)
    const prescriptionNameField = elementWrapper?.find('input[type="text"][name="prescription-name"]')
    
    expect(prescriptionNameField?.length).toEqual(2)
    expect(prescriptionNameField?.at(0).prop('value')).toEqual('Aspirin')
    expect(prescriptionNameField?.at(1).prop('value')).toEqual('')
  })

  it('dispatches to store upon input change to empty text field', () => {
    const elementWrapper = shallow(
      <PrescriptionMedicationSection medications={[]} store={mockStore} />)

    const medicationField = elementWrapper.find('input[type="text"][name="prescription-name"]').at(0)
    medicationField?.simulate('change', { target: { value: 'a-prescription-medication-name' } })

    const mockDispatches = mockStore.getDispatchCalls() as PrescriptionMedicationFormAction[]

    expect(mockDispatches.length).toEqual(1)
    expect(mockDispatches[0].type).toEqual(DiaryCardFormActionTypes.AddPrescriptionMedication)
    expect(mockDispatches[0].value)
      .toEqual({ currentName: '', updatedName: 'a-prescription-medication-name' })
  })

  it('dispatches to store upon unput change to existing text field', () => {
    const elementWrapper = shallow(
      <PrescriptionMedicationSection medications={medicationsList} store={mockStore} />)

    const medicationField = elementWrapper.find('input[type="text"][name="prescription-name"]').at(0)
    medicationField?.simulate('change', { target: { value: 'a-prescription-medication-name' } })

    const mockDispatches = mockStore.getDispatchCalls() as PrescriptionMedicationFormAction[]
    const expectedActionValue: PrescriptionMedicationFormActionValue = {
      currentName: 'Aspirin',
      updatedName: 'a-prescription-medication-name'
    } 

    expect(mockDispatches.length).toEqual(1)
    expect(mockDispatches[0].type).toEqual(DiaryCardFormActionTypes.UpdatePrescriptionMedication)
    expect(mockDispatches[0].value).toEqual(expectedActionValue)
  })

  it('dispatches to store upon clearing text from an existing text field', () => {
    const elementWrapper = shallow(
      <PrescriptionMedicationSection medications={medicationsList} store={mockStore} />)

    const medicationField = elementWrapper.find('input[type="text"][name="prescription-name"]').at(0)
    medicationField?.simulate('change', { target: { value: '' } })

    const mockDispatches = mockStore.getDispatchCalls() as PrescriptionMedicationFormAction[]
    const expectedActionValue: PrescriptionMedicationFormActionValue = {
      currentName: 'Aspirin',
      updatedName: ''
    }

    expect(mockDispatches.length).toEqual(1)
    expect(mockDispatches[0].type).toEqual(DiaryCardFormActionTypes.DeletePrescriptionMedication)
    expect(mockDispatches[0].value).toEqual(expectedActionValue)
  })

  it('dispatches to store upon click of delete action for medication field', () => {
    const elementWrapper = shallow(
      <PrescriptionMedicationSection medications={medicationsList} store={mockStore} />)

    const deleteButton = elementWrapper.find('#delete-medication-action-0').at(0)
    deleteButton?.simulate('click')

    const mockDispatches = mockStore.getDispatchCalls() as PrescriptionMedicationFormAction[]
    const expectedActionValue: PrescriptionMedicationFormActionValue = {
      currentName: 'Aspirin',
      updatedName: ''
    }

    expect(mockDispatches.length).toEqual(1)
    expect(mockDispatches[0].type).toEqual(DiaryCardFormActionTypes.DeletePrescriptionMedication)
    expect(mockDispatches[0].value).toEqual(expectedActionValue)
  })
})
