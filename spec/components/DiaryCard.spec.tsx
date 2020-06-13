import * as React from 'react'
import 'jasmine'
import { shallow, ShallowWrapper } from 'enzyme'

import { DiaryCard } from '../../src/components/DiaryCard'
import { PrescriptionMedicationSection } from '../../src/components/PrescriptionMedicationSection'

describe('Diary card form', () => {
  var elementWrapper: ShallowWrapper | undefined

  beforeEach(() => {
    elementWrapper = shallow(<DiaryCard />)
  })

  it('displays an field for naming a target behavior', () => {
    const targetBehaviorField = elementWrapper?.find('input[type="text"]#target-behavior-name')
    expect(targetBehaviorField?.length).toEqual(1)
  })

  it('displays a localized label for the target behavior name', () => {
    const targetBehaviorFieldLabel = elementWrapper?.find('label[htmlFor="target-behavior-name"]')
    expect(targetBehaviorFieldLabel?.length).toEqual(1)
  })

  it('displays an field for rating the urge to engage in target behavior', () => {
    const targetBehaviorUrgeField = elementWrapper?.find('div#target-behavior-urge')
    expect(targetBehaviorUrgeField?.length).toEqual(1)
  })

  it('allows rating of target behavior urge from zero to five', () => {
    const targetBehaviorUrgeMagnitudeFields = elementWrapper?.find(
      'input[type="radio"][name="target-behavior-urge-magnitude"]')
    expect(targetBehaviorUrgeMagnitudeFields?.length).toEqual(6)
  })

  it('displays a localized label for rating the urge to engage in target behavior', () => {
    const targetBehaviorUrgeLabel = elementWrapper?.find('label[htmlFor="target-behavior-urge"]')
    expect(targetBehaviorUrgeLabel?.length).toEqual(1)
  })

  it('displays a field for rating the target behavior engagement', () => {
    const targetBehaviorEngagementField = elementWrapper?.find('div#target-behavior-engagement')
    expect(targetBehaviorEngagementField?.length).toEqual(1)
  })

  it('allows rating of target behavior engagement from zero to five', () => {
    const targetBehaviorEngagementMagnitudeFields = elementWrapper
      ?.find('input[type="radio"][name="target-behavior-engagement-magnitude"]')
    expect(targetBehaviorEngagementMagnitudeFields?.length).toEqual(6)
  })

  it('displays a localized label for rating the target behavior engagement', () => {
    const targetBehaviorEngagementLabel = elementWrapper
      ?.find('label[htmlFor="target-behavior-engagement"]')
    expect(targetBehaviorEngagementLabel?.length).toEqual(1)
  })

  it('displays a form section for recording prescription medication', () => {
    const prescriptionMedicationSection = elementWrapper?.find(PrescriptionMedicationSection)
    expect(prescriptionMedicationSection?.length).toEqual(1)
  })
})
