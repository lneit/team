import type { NextPage } from 'next';
import EmployeeDetails from '../../components/employees/employee-details';

const EmployeeDetail: NextPage = () => {
  return (
    <div>
      <h1>Employee Detail</h1>
      <EmployeeDetails />
    </div>
  );
};

export default EmployeeDetail;
