import classes from './employee-item.module.css';
import Button from '../ui/button';

const EmployeeItem = (props: any) => {
  const { id, firstName, middleName, secondName, emailAddress, contractType } =
    props;
  const viewDetailsLink = `/employees/${id}`;
  const editDetailsLink = `/employees/edit/${id}`;
  const deleteEmployeeLink = `/employees/delete/${id}`;

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>
            {firstName} {middleName} {secondName}
          </h2>
          <div>
            <div>{contractType}</div>
            <div>{emailAddress}</div>
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
