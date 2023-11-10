import Form from '@rjsf/core'
import React, { useState } from 'react'
import validator from '@rjsf/validator-ajv8';
import schema1 from './schema1.json';
import schema2 from './schema2.json';
import uiSchema from './uiSchema.json';
import CustomObjectFieldTemplate from '../../rjsfComponents/CustomObjectFieldTemplate';

const AssetDetails = ({
  // formData,
  // setFormData,
  state,
  templateRegistry,
  widgetRegistry,
  send
}) => {
  const [formData, setFormData] = useState({})
  const handleChange = (data) => {
    if (formData.assetCategory === undefined && data.assetCategory!==undefined){
      setFormData(data)
      send({type: 'chooseAsset'})
    }else{
      setFormData(data)
    if (shouldGoNext(data)) {
      send({ type: 'goToLoanDetails' })
    }
    }
  };

  const shouldGoNext = (data) => {
    if (
      data.assetCategory !== undefined &&
      (data.assetType !== undefined || data.assetCategory === 'TRUCK_BUS_TRAILER') &&
      data.seller !== undefined &&
      data.condition !== undefined &&
      (data.assetAge !== undefined || data.condition === 'NEW_DEMO')
    ) {
      return true
    }
    return false
  }
  let updatedUi = uiSchema;
  updatedUi = {
    ...uiSchema,
    "ui:ObjectFieldTemplate": CustomObjectFieldTemplate
  }

  const schema = state.toStrings()[1] === 'AssetDetails.assetCategory' ? schema1 :schema2

  return (
    <div>
      <Form
        schema={schema}
        uiSchema={updatedUi}
        validator={validator}
        formData={formData}
        templates={templateRegistry}
        widgets={widgetRegistry}
        onChange={(e) => handleChange(e.formData)}
      />
    </div>
  )
}

export default AssetDetails