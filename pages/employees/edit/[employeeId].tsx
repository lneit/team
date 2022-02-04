import { Fragment } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import EmployeeAddEditForm from '../../../components/employee-details/employee-add-edit-form';
import classes from '../../../styles/home.module.css';

const EmployeeEditPage: NextPage = () => {
  const router = useRouter();
  const employeeId = router.query.employeeId;

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Employee Details</h1>
        </div>
      </div>
      <EmployeeAddEditForm employeeId={employeeId} />
    </Fragment>
  );
};

export default EmployeeEditPage;
