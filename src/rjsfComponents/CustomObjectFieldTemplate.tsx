import { ObjectFieldTemplateProps } from '@rjsf/utils'
import React from 'react'

function CustomObjectFieldTemplate(props: ObjectFieldTemplateProps) {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-2">
        <div className='font-bold text-2xl text-core-deep-current dark:text-mist-grey'>{props.title}</div>
        <div className='text-wrap'>{props.description}</div>
      </div >

      {props.properties.map((element) => (
        <div className='property-wrapper'>{element.content}</div>
      ))}
    </div>
  );
}

export default CustomObjectFieldTemplate