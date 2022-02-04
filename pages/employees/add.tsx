import { Fragment } from 'react';
import type { NextPage } from 'next';
import EmployeeAddEditForm from '../../components/employee-details/employee-add-edit-form';
import classes from '../../styles/home.module.css';

const EmployeeAddPage: NextPage = () => (
  <Fragment>
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Employee Details</h1>
      </div>
    </div>
    <EmployeeAddEditForm />
  </Fragment>
);

export default EmployeeAddPage;
