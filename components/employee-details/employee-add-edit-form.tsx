import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, FieldValues, UseFormProps } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { NewEmployee } from '../../models/employee';
import Input from '../ui/input';
import Select from '../ui/select';
import classes from './employee-add-edit-form.module.css';

type EmployeeAddEditFormProps = {
  employeeId: string;
};

const EmployeeAddEditForm = ({ employeeId }: EmployeeAddEditFormProps) => {
  const [employee, setEmployee] = useState(null);
  const isAddMode = !employee;

  const router = useRouter();

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

  let formOptions: UseFormProps<FieldValues, object> = {
    resolver: yupResolver(validationSchema),
  };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);

  if (isAddMode && employee) {
    formOptions.defaultValues = employee;
  }

  const { errors } = formState;
  // TODO show the errors on the form
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

  interface EmployeeInput extends FieldValues, NewEmployee {}

  const createEmployee = (data: EmployeeInput) => {
    fetch('/api/employees', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log('Received response from the server', data));
    router.back();
  };

  const updateEmployee = (id: string, data: EmployeeInput) => {
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

  const onSubmitHandler = (data: { [x: string]: any }) => {
    const employeeData = data as EmployeeInput;
    return isAddMode && employee
      ? createEmployee(employeeData)
      : updateEmployee(employeeId, employeeData);
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
