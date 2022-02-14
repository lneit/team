import { Fragment } from 'react';
import EmployeeAttribute from './employee-attribute';
import { humanReadableDate } from '../../utils/date';
import classes from './employee-details.module.css';
import { Employee } from '../../models/employee';

type EmployeeDetailsProps = {
  employee: Employee;
};

const EmployeeDetails = ({ employee }: EmployeeDetailsProps) => {
  const {
    firstName,
    middleName,
    secondName,
    emailAddress,
    contractType,
    mobilePhoneNumber,
    residentialAddress,
    startDate,
    finishDate,
    employmentBasis,
  } = employee;

  return (
    <Fragment>
      <section className={classes.content}>
        <h2>Personal Information</h2>
        <EmployeeAttribute label='First Name' value={firstName} />
        <EmployeeAttribute
          label='Middle Name'
          value={middleName ? middleName : ''}
        />
        <EmployeeAttribute label='Last Name' value={secondName} />
      </section>
      <section className={classes.content}>
        <h2>Contact Details</h2>
        <EmployeeAttribute label='Email Address' value={emailAddress} />
        <EmployeeAttribute
          label='Mobile Phone Number'
          value={mobilePhoneNumber}
        />
        <EmployeeAttribute
          label='Residential Address'
          value={residentialAddress}
        />
      </section>
      <section className={classes.content}>
        <h2>Employee Status</h2>
        <EmployeeAttribute label='Contract Type' value={contractType} />
        <EmployeeAttribute
          label='Start Date'
          value={startDate ? humanReadableDate(startDate).toString() : ''}
        />
        <EmployeeAttribute
          label='Finish Date'
          value={finishDate ? humanReadableDate(finishDate).toString() : ''}
        />
        <EmployeeAttribute label='Employment Basis' value={employmentBasis} />
      </section>
    </Fragment>
  );
};

export default EmployeeDetails;
