import { Fragment } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getEmployeeById } from '../../../dummy-data';
import EmployeeAddEditForm from '../../../components/employee-details/employee-add-edit-form';
import classes from '../../../styles/home.module.css';

const EmployeeDetailsPage: NextPage = () => {
  const router = useRouter();
  const employeeId = router.query.employeeId;
  const employee = getEmployeeById(employeeId);
  if (!employee) {
    return <p>No employee found!</p>;
  }
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Employee Details</h1>
        </div>
      </div>
      <EmployeeAddEditForm employee={employee} />
    </Fragment>
  );
};

export default EmployeeDetailsPage;
