import React from 'react'

export default (props) =>
  props.fieldType === 'textfield' ? (
    <textarea
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
    />
  ) : (
    <input
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      autoComplete="false"
    />
  )
