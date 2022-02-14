import React, { Fragment } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { labelToAttr } from '../../utils/naming';

type InputProps = {
  label: string;
  register: UseFormRegister<any>;
};

const Input = ({ label, register }: InputProps) => {
  const attrName = labelToAttr(label);
  return (
    <Fragment>
      <label htmlFor={attrName}>{label}</label>
      <input {...register(attrName)} />
    </Fragment>
  );
};

export default Input;
