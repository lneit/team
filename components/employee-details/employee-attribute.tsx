import { Fragment } from 'react';

type EmployeeAttributeProps = {
  label: string;
  value: string;
};

const EmployeeAttribute = (props: EmployeeAttributeProps) => {
  const { label, value } = props;
  return (
    <Fragment>
      <label>{label}</label>
      <div>{value}</div>
    </Fragment>
  );
};

export default EmployeeAttribute;
