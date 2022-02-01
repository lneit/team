import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import EmployeeList from "../../components/employees/employee-list";
import { getAllEmployees } from "../../dummy-data";

const Employees: NextPage = () => {
  return (
    <div>
      <h1>Employees' List</h1>
      <EmployeeList className={styles.container} items={getAllEmployees()} />
    </div>
  );
};

export default Employees;
