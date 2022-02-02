import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

import { labelToAttr } from '../../utils/naming';
import classes from './employee-add-edit-form.module.css';

const Input = ({ label, register, required }: any) => {
  const attrName = labelToAttr(label);
  return (
    <Fragment>
      <label htmlFor={attrName}>{label}</label>
      <input {...register(attrName, { required, maxLength: 50 })} />
    </Fragment>
  );
};

const Select = React.forwardRef<HTMLSelectElement, any>(
  ({ name, label, options, register, required }, ref) => {
    const attrName = labelToAttr(label);
    return (
      <Fragment>
        <label>{label}</label>
        <select name={name} ref={ref} {...register(label, { required })}>
          {options.map((opt: string) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </Fragment>
    );
  }
);

const EmployeeAddEditForm = (props: any) => {
  const employee = props?.employee;
  const isAddMode = !employee;

  const { register, handleSubmit } = useForm();

  const createEmployee = (data: any) => {
    console.log('Creating Employee with ', data);
  };

  const updateEmployee = (id: string, data: any) => {
    console.log('Updating Employee with ', data);
  };

  const onSubmitHandler = (data: any) => {
    return isAddMode ? createEmployee(data) : updateEmployee(employee.id, data);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={classes.controls}>
        <section className={classes.content}>
          <h2>Personal Information</h2>
          <div className={classes.control}>
            <Input label='First Name' register={register} required />
          </div>
          <div className={classes.control}>
            <Input label='Middle Name' register={register} required={false} />
          </div>
          <div className={classes.control}>
            <Input label='Second Name' register={register} required />
          </div>
        </section>

        <section className={classes.content}>
          <h2>Contact Details</h2>
          <div className={classes.control}>
            <Input label='Email Address' register={register} required />
          </div>
          <div className={classes.control}>
            <Input label='Mobile Phone Number' register={register} required />
          </div>
          <div className={classes.control}>
            <Input label='Residential Address' register={register} required />
          </div>
        </section>

        <section className={classes.content}>
          <h2>Employee Status</h2>
          <div className={classes.control}>
            <Select
              label='Contract Type'
              register={register}
              options={['Permanent', 'Contract']}
            />
          </div>

          {/* <div>{humanReadableStartDate}</div> */}
          {/*<div>{humanReadableFinishDate}</div> */}
          <div className={classes.control}>
            <Select
              label='Employment Basis'
              register={register}
              options={['Full Time', 'Part Time']}
            />
          </div>
        </section>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default EmployeeAddEditForm;
