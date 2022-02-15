import EmployeeItem from './employee-item';
import classes from './employee-list.module.css';
import { Employee } from '../../models/employee';

type EmployeeListProps = {
  items: Employee[];
};

const EmployeeList = ({ items }: EmployeeListProps) => {
  return (
    <ul className={classes.list}>
      {items.map((employee: Employee) => (
        <EmployeeItem key={employee.id} employee={employee} />
      ))}
    </ul>
  );
};

export default EmployeeList;
