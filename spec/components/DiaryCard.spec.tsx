import * as React from 'react'
import 'jasmine'
import { shallow } from 'enzyme'
import { DiaryCard } from '../../src/components/DiaryCard'

describe('Diary card form', () => {
  it('displays an field for naming a target behavior', () => {
    const wrapper = shallow(<DiaryCard />)
    const targetBehaviorField = wrapper.find('input[type="text"]#target-behavior-name')

    expect(targetBehaviorField.length).toEqual(1)
  })

  it('displays a localized label for the target behavior name', () => {
    const wrapper = shallow(<DiaryCard />)
    const targetBehaviorFieldLabel = wrapper.find('label[htmlFor="target-behavior-name"]')

    expect(targetBehaviorFieldLabel.length).toEqual(1)
  })

  it('displays an field for rating the urge to engage in target behavior', () => {
    const wrapper = shallow(<DiaryCard />)
    const targetBehaviorUrgeField = wrapper.find('div#target-behavior-urge')

    expect(targetBehaviorUrgeField.length).toEqual(1)
  })

  it('allows rating of target behavior urge from zero to five', () => {
    const wrapper = shallow(<DiaryCard />)
    const targetBehaviorUrgeMagnitudeFields = wrapper
      .find('input[type="radio"][name="target-behavior-urge-magnitude"]')

    expect(targetBehaviorUrgeMagnitudeFields.length).toEqual(6)
  })

  it('displays a localized label for rating the urge to engage in target behavior', () => {
    const wrapper = shallow(<DiaryCard />)
    const targetBehaviorUrgeLabel = wrapper.find('label[htmlFor="target-behavior-urge"]')

    expect(targetBehaviorUrgeLabel.length).toEqual(1)
  })

  it('displays a field for rating the target behavior engagement', () => {
    const wrapper = shallow(<DiaryCard />)
    const targetBehaviorEngagementField = wrapper.find('div#target-behavior-engagement')

    expect(targetBehaviorEngagementField.length).toEqual(1)
  })

  it('allows rating of target behavior engagement from zero to five', () => {
    const wrapper = shallow(<DiaryCard />)
    const targetBehaviorEngagementMagnitudeFields = wrapper
      .find('input[type="radio"][name="target-behavior-engagement-magnitude"]')

    expect(targetBehaviorEngagementMagnitudeFields.length).toEqual(6)
  })

  it('displays a localized label for rating the target behavior engagement', () => {
    const wrapper = shallow(<DiaryCard />)
    const targetBehaviorEngagementLabel = wrapper
      .find('label[htmlFor="target-behavior-engagement"]')

    expect(targetBehaviorEngagementLabel.length).toEqual(1)
  })
})
