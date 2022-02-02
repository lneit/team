import type { NextPage } from 'next';
import classes from '../styles/home.module.css';
import { getAllEmployees } from '../dummy-data';
import EmployeeList from '../components/employees/employee-list';
import Button from '../components/ui/button';

const HomePage: NextPage = () => {
  const employees = getAllEmployees();
  const addEmployeeLink = `/employees/add`;

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>Employees' List</h1>
        </div>
        <div className={classes.actions}>
          <Button link={addEmployeeLink}>Add Employee</Button>
        </div>
      </div>
      <EmployeeList items={employees} />
    </div>
  );
};

export default HomePage;
