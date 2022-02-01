import type { NextPage } from 'next';
import classes from '../styles/home.module.css';
import { getAllEmployees } from '../dummy-data';
import EmployeeList from '../components/employees/employee-list';

const HomePage: NextPage = () => {
  const employees = getAllEmployees();

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Employees' List</h1>
        </div>
      </div>
      <EmployeeList items={employees} />
    </div>
  );
};

export default HomePage;
