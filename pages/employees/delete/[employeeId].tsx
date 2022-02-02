import { Fragment } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getEmployeeById } from '../../../dummy-data';
import EmployeeDeleteForm from '../../../components/employee-details/employee-delete-form';
import classes from '../../../styles/home.module.css';

const EmployeeDeletePage: NextPage = () => {
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
          <h2>{`Delete Employee: ${employee.firstName} ${employee.secondName}`}</h2>
        </div>
      </div>
      <EmployeeDeleteForm employee={employee}/>
    </Fragment>
  );
};

export default EmployeeDeletePage;
