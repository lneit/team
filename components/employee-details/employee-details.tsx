import { Fragment } from 'react';

import classes from './employee-details.module.css';

const EmployeeDetails = (props: any) => {
  const {
    firstName,
    middleName,
    secondName,
    email,
    contractType,
    mobile,
    address,
    startDate,
    finishDate,
    employmentBasis,
  } = props;

  const humanReadableStartDate = new Date(startDate).toLocaleDateString(
    'en-AU',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );

  const humanReadableFinishDate = new Date(finishDate).toLocaleDateString(
    'en-AU',
    { day: 'numeric', month: 'long', year: 'numeric' }
  );
  return (
    <Fragment>
      <section className={classes.content}>
        <h2>Personal Information</h2>
        <div>{firstName}</div>
        <div>{middleName}</div>
        <div>{secondName}</div>
      </section>
      <section className={classes.content}>
        <h2>Contact Details</h2>
        <div>{email}</div>
        <div>{mobile}</div>
        <div>{address}</div>
      </section>
      <section className={classes.content}>
        <h2>Employee Status</h2>
        <div>{contractType}</div>
        <div>{humanReadableStartDate}</div>
        <div>{humanReadableFinishDate}</div>
        <div>{employmentBasis}</div>
      </section>
    </Fragment>
  );
};

export default EmployeeDetails;
