import { EnumOptionsType, WidgetProps } from '@rjsf/utils'
import React, { useEffect } from 'react'
import { RadioGroup, RadioOption } from '../../components/RadioButtonGroup'

function mapEnumOptionsToRadioOptions(enumOptions: EnumOptionsType[]): RadioOption[] {
  return enumOptions.map(opt => {
    return {
      id: opt.value,
      value: opt.label
    }
  })
}

export const CustomRadioGroup = (props: WidgetProps) => {
  const handleChange = (e) => {
    props.onChange(e.id)
  }
  
  const options = mapEnumOptionsToRadioOptions(props.options.enumOptions) || [];
  return (
    <RadioGroup
      name={''}
      options={options}
      onChange={handleChange}
      theme={{
        backgroundColor: 'bg-white dark:bg-slate-800',
        textColor: 'text-granite-grey dark:text-mist-grey',
        borderColor: 'border-iron-grey dark:border-mist-grey',
        flex: 'flex flex-col md:flex-row',
        padding: 'px-12 py-3',
        selectedBackGroundColor: 'bg-core-deep-current dark:bg-mist-grey',
        selectedTextColor: 'text-white dark:text-core-deep-current',
        spaceBetween: 'md:space-x-2 md:space-y-0 space-y-2',
      }}
      selectedOption={options.find(item => item.id === props.value)}
      variant={'button'}
    />
  )
}
