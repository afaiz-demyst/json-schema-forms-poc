import { EnumOptionsType, WidgetProps } from '@rjsf/utils'
import React, { useEffect } from 'react'
import { SelectBox, SelectBoxOption } from '../../components/SelectBox'

function mapEnumOptionsToRadioOptions(enumOptions: EnumOptionsType[]): SelectBoxOption[] {
  return enumOptions.map(opt => {
    return {
      id: opt.value,
      value: opt.label
    }
  })
}

export const CustomSelectBox = (props: WidgetProps) => {
  const handleChange = (e) => {
    props.onChange(e.id)
  }
    
  const options = mapEnumOptionsToRadioOptions(props.options.enumOptions) || [];
  return (
    <SelectBox
      id={''}
      name={''}
      options={options}
      onChange={handleChange}
      theme={{
        backgroundColor: 'bg-white dark:bg-slate-800',
        textColor: 'text-iron-grey dark:text-mist-grey',
        borderColor: 'border-iron-grey dark:border-0 dark:border-b-2',
        borderRadius: 'dark:rounded-none',
        focusRingColor: 'focus:ring-core-cobalt-blue',
        width: 'md:w-128 xs:w-90-vw',
        padding: 'px-4 py-3',
      }}
      selectedOption={options.find(item => item.id === props.value)}
    />
  )
}
