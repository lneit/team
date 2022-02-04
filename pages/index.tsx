import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import EmployeeList from '../components/employees/employee-list';
import Button from '../components/ui/button';
import classes from '../styles/home.module.css';

const HomePage: NextPage = () => {
  const addEmployeeLink = `/employees/add`;

  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/employees')
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data.employees);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
