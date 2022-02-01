import EmployeeItem from './employee-item';
import classes from './employee-list.module.css';

const EmployeeList = (props: any) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((employee: any) => (
        <EmployeeItem
          key={employee.id}
          id={employee.id}
          firstName={employee.firstName}
          middleName={employee.middleName}
          secondName={employee.secondName}
          email={employee.email}
          contractType={employee.contractType}
        />
      ))}
    </ul>
  );
};

export default EmployeeList;
