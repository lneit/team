import { Fragment } from 'react';

const EmployeeAttribute = (props: any) => {
  const { label, value } = props;
  return (
    <Fragment>
      <label>{label}</label>
      <div>{value}</div>
    </Fragment>
  );
};

export default EmployeeAttribute;
