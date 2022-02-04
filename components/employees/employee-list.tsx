import EmployeeItem from './employee-item';
import classes from './employee-list.module.css';

const EmployeeList = ({ items }: any) => {
  return (
    <ul className={classes.list}>
      {items.map((employee: any) => (
        <EmployeeItem key={employee.id} employee={employee} />
      ))}
    </ul>
  );
};

export default EmployeeList;
