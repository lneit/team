import React from 'react';
import classes from './employee-delete-form.module.css';

const EmployeeDeleteForm = (props: any) => {
  const employee = props.employee;

  const handleCancel = (data: any) => {
    console.log('Cancelling Employee delete: ', data);
  };

  const handleConfirm = (data: any) => {
    console.log('Deleting Employee: ', data);
  };

  return (
    <div className={classes.form}>
      <div className={classes.actions}>
        <button onClick={() => handleCancel(employee)}>Cancel</button>
        <button onClick={() => handleConfirm(employee)}>Confirm</button>
      </div>
    </div>
  );
};

export default EmployeeDeleteForm;
