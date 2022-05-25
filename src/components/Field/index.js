import React from 'react';
import './field.css';

export default function Field({
  name = 'name',
  onchange = () => {},
  value = '',
  onfocus,
  onblur,
  classname,
}) {
  return (
    <input className={`field ${classname}`} type="text" name={name} onChange={onchange} value={value} onFocus={onfocus} onBlur={onblur} />
  );
}
