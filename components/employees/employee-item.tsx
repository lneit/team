import Link from 'next/link';
import classes from './employee-item.module.css';
import Button from '../ui/button';

const EmployeeItem = (props: any) => {
  const { id, firstName, middleName, secondName, email, contractType } = props;
  const viewDetailsLink = `/employees/${id}`;

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>
            {firstName} {middleName} {secondName}
          </h2>
          <div>
            <div>{contractType}</div>
            <div>{email}</div>
          </div>
          <div className={classes.actions}>
            <Button link={viewDetailsLink}>View Details</Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EmployeeItem;
