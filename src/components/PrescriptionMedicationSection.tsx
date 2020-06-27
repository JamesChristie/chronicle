import * as React from 'react'
import { ChangeEvent } from 'react'
import { Store } from 'redux';
import { PrescriptionMedicationFormAction, DiaryCardFormActionTypes } from '../redux/store'

export type PrescriptionMedication = {
  name: string
}

export type PrescriptionMedicationSectionProps = {
  medications: PrescriptionMedication[],
  // TODO (james.aaron.christie@gmail.com) Remove optionality on this argument
  // once consuming component issues have been resolved
  store?: Store
}

const onEditMedication = (currentName: string, updatedName: string, store?: Store) => {
  var actionType: DiaryCardFormActionTypes | null = null
  const isAddition = !currentName && updatedName
  const isUpdate = currentName && updatedName

  if (isAddition) actionType = DiaryCardFormActionTypes.AddPrescriptionMedication
  if (isUpdate) actionType = DiaryCardFormActionTypes.UpdatePrescriptionMedication

  const action: PrescriptionMedicationFormAction = {
    type: actionType || DiaryCardFormActionTypes.DeletePrescriptionMedication,
    value: { currentName, updatedName }
  }

  store?.dispatch(action)
}

const getMedicationFields = (medications: PrescriptionMedication[], store?: Store): JSX.Element[] => {
  return medications.map((medication: PrescriptionMedication, index: number) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      onEditMedication(medication.name, event.target.value, store)
    }

    const medicationInput = <div key={`${medication.name}-${index}`}>
      <input type="text" 
             name="prescription-name" 
             value={medication.name} 
             onChange={onChange} />
      <div id={`delete-medication-action-${index}`}
           onClick={() => onEditMedication(medication.name, '', store)} />
    </div>

    return medicationInput
  });
}

export const PrescriptionMedicationSection = ({
  medications,
  store
}: PrescriptionMedicationSectionProps): React.ReactElement => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    onEditMedication('', event.target.value, store)
  }

  return <div id="prescription-medication-section">
    {getMedicationFields(medications, store)}

    <div id="new-medication-input">
      <input type="text" name="prescription-name" value="" onChange={onChange} />
    </div>
  </div>
}
