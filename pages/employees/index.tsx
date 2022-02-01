import type { NextPage } from "next";
import classes from "../../styles/home.module.css";
import EmployeeList from "../../components/employees/employee-list";
import { getAllEmployees } from "../../dummy-data";

const Employees: NextPage = () => {
  return (
    <div>
       <div className={classes.container}>
        <div className={classes.title}>
          <h1>Employees' List</h1>
        </div>
      </div>
      <EmployeeList className={classes.container} items={getAllEmployees()} />
    </div>
  );
};

export default Employees;
