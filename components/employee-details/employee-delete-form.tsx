import React from 'react';
import { useRouter } from 'next/router';
import classes from './employee-delete-form.module.css';

type EmployeeDeleteFormProps = {
  employeeId: string;
};

const EmployeeDeleteForm = (props: EmployeeDeleteFormProps) => {
  const deleteEmployee = () => {
    fetch(`/api/employees/${props.employeeId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Received response from the server', data);
        router.back();
      });
  };

  const router = useRouter();

  return (
    <div className={classes.form}>
      <div className={classes.actions}>
        <button onClick={() => router.back()}>Cancel</button>
        <button onClick={deleteEmployee}>Confirm</button>
      </div>
    </div>
  );
};

export default EmployeeDeleteForm;
