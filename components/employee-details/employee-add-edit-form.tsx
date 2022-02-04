import React, { useEffect, useState, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { labelToAttr } from '../../utils/naming';
import classes from './employee-add-edit-form.module.css';

const Input = ({ label, register }: any) => {
  const attrName = labelToAttr(label);
  return (
    <Fragment>
      <label htmlFor={attrName}>{label}</label>
      <input name={attrName} {...register(attrName)} />
    </Fragment>
  );
};

const Select = React.forwardRef<HTMLSelectElement, any>(
  ({ label, options, register }, ref) => {
    const attrName = labelToAttr(label);
    return (
      <Fragment>
        <label htmlFor={attrName}>{label}</label>
        <select name={attrName} ref={ref} {...register(attrName)}>
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

const EmployeeAddEditForm = ({ employeeId }: any) => {
  const [employee, setEmployee] = useState(null);
  const isAddMode = !employee;

  // form validation rules
  const validationSchema = Yup.object()
    .shape({
      firstName: Yup.string().required('First Name is required'),
      middleName: Yup.string().optional(),
      secondName: Yup.string().required('Second Name is required'),
      emailAddress: Yup.string().required('Email Address is required'),
      mobilePhoneNumber: Yup.string().required(
        'Mobile Phone Number is required'
      ),
      residentialAddress: Yup.string().required(
        'Residential Address is required'
      ),
      contractType: Yup.string().required('Contract Type is required'),
      employmentBasis: Yup.string().required('Employment Basis is required'),
    })
    .required();

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isAddMode ? employee : {},
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;
  console.log('form errors', errors);

  useEffect(() => {
    fetch(`/api/employees/${employeeId}`)
      .then((response) => response.json())
      .then((data) => {
        const data_json = data;
        setEmployee(data_json.employee);
        reset(data_json.employee);
      });
  }, [reset]);

  const createEmployee = (data: any) => {
    fetch('/api/employees', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log('Received response from the server', data));
  };

  const updateEmployee = (id: string, data: any) => {
    fetch(`/api/employees/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log('Received response from the server', data));
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
            <Input label='First Name' register={register} />
          </div>
          <div className={classes.control}>
            <Input label='Middle Name' register={register} />
          </div>
          <div className={classes.control}>
            <Input label='Second Name' register={register} />
          </div>
        </section>

        <section className={classes.content}>
          <h2>Contact Details</h2>
          <div className={classes.control}>
            <Input label='Email Address' register={register} />
          </div>
          <div className={classes.control}>
            <Input label='Mobile Phone Number' register={register} />
          </div>
          <div className={classes.control}>
            <Input label='Residential Address' register={register} />
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

          {/* TODO use react UI lib for dates (AntD, material) */}
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
