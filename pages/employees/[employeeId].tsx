import { useEffect, useState, Fragment } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import EmployeeDetails from '../../components/employee-details/employee-details';
import classes from '../../styles/home.module.css';

const EmployeeDetailsPage: NextPage = () => {
  const router = useRouter();
  const employeeId = router.query.employeeId;

  const [employee, setEmployee] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/employees/${employeeId}`)
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.employee);
        setIsLoading(false);
      });
  }, []);

  if (isLoading && employee) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Employee Details</h1>
        </div>
      </div>
      {!!employee && <EmployeeDetails employee={employee} />}
    </Fragment>
  );
};

export default EmployeeDetailsPage;
