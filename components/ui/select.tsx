import React, { Fragment } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { labelToAttr } from '../../utils/naming';

type SelectProps = {
  label: string;
  options: string[];
  register: UseFormRegister<any>;
};

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, register }, ref) => {
    const attrName = labelToAttr(label);
    return (
      <Fragment>
        <label htmlFor={attrName}>{label}</label>
        <select {...register(attrName)}>
          {options.map((opt: string) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </Fragment>
    );
  }
);

export default Select;
