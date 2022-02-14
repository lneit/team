import classes from './employee-item.module.css';
import Button from '../ui/button';
import { Employee } from '../../models/employee';

type EmployeeItemProps = {
  employee: Employee
};

const EmployeeItem = (props: EmployeeItemProps) => {
  const { employee } = props;
  
  const viewDetailsLink = `/employees/${employee.id}`;
  const editDetailsLink = `/employees/edit/${employee.id}`;
  const deleteEmployeeLink = `/employees/delete/${employee.id}`;

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>
            {employee.firstName} {employee.middleName} {employee.secondName}
          </h2>
          <div>
            <div>{employee.contractType}</div>
            <div>{employee.emailAddress}</div>
          </div>
          <div className={classes.actions}>
            <Button link={viewDetailsLink}>View</Button>
            <Button link={editDetailsLink}>Edit</Button>
            <Button link={deleteEmployeeLink}>Delete</Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EmployeeItem;
