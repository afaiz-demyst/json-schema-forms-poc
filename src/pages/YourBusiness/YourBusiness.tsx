import Form from '@rjsf/core'
import React, { useState } from 'react'
import validator from '@rjsf/validator-ajv8';
import schema from './schema.json';
import uiSchema from './uiSchema.json'

const YourBusiness = ({
  // formData,
  // setFormData,
  templateRegistry,
  widgetRegistry,
  send
}) => {
  const [formData, setFormData] = useState({})
  const handleChange = (data) => {
    setFormData(data)
    if (data){
      send({type: 'goToAssetDetails'})
    }
  };
  return (
    <div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        formData={formData}
        templates={templateRegistry}
        widgets={widgetRegistry}
        onChange={(e) => handleChange(e.formData)}
      />
    </div>
  )
}

export default YourBusiness