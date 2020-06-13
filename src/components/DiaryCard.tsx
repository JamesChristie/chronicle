import * as React from 'react'
import { PrescriptionMedicationSection } from './PrescriptionMedicationSection'

export const DiaryCard = () => {
  return <div>
    <label htmlFor='target-behavior-name'></label>
    <input type='text' id='target-behavior-name' />

    <label htmlFor='target-behavior-urge'></label>
    <div id='target-behavior-urge'>
      <input type='radio' name='target-behavior-urge-magnitude' />
      <input type='radio' name='target-behavior-urge-magnitude' />
      <input type='radio' name='target-behavior-urge-magnitude' />
      <input type='radio' name='target-behavior-urge-magnitude' />
      <input type='radio' name='target-behavior-urge-magnitude' />
      <input type='radio' name='target-behavior-urge-magnitude' />
    </div>

    <label htmlFor='target-behavior-engagement'></label>
    <div id='target-behavior-engagement'>
      <input type='radio' name='target-behavior-engagement-magnitude' />
      <input type='radio' name='target-behavior-engagement-magnitude' />
      <input type='radio' name='target-behavior-engagement-magnitude' />
      <input type='radio' name='target-behavior-engagement-magnitude' />
      <input type='radio' name='target-behavior-engagement-magnitude' />
      <input type='radio' name='target-behavior-engagement-magnitude' />
    </div>

    <PrescriptionMedicationSection medications={[]} />
  </div>
}
