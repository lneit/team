import { useEffect, useState, Fragment } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import EmployeeDeleteForm from "../../../components/employee-details/employee-delete-form";
import classes from "../../../styles/home.module.css";

const EmployeeDeletePage: NextPage = () => {
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

  if (isLoading || !employee) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.title}>
          {!!employee && <p>{`Delete Employee ${employee.firstName} ${employee.secondName}`}</p>}
        </div>
      </div>
      <EmployeeDeleteForm employeeId={employeeId} />
    </Fragment>
  );
};

export default EmployeeDeletePage;
