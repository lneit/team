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
  } = props.data;

  const humanReadableStartDate = new Date(startDate).toLocaleDateString(
    "en-UK",
    { day: "numeric", month: "long", year: "numeric" }
  );
  const humanReadableFinishDate = new Date(finishDate).toLocaleDateString(
    "en-UK",
    { day: "numeric", month: "long", year: "numeric" }
  );
  return (
    <div>
      <div>
        <h2>Personal Information</h2>
        <div>{firstName}</div>
        <div>{middleName}</div>
        <div>{secondName}</div>
      </div>
      <div>
        <h2>Contact Details</h2>
        <div>{email}</div>
        <div>{mobile}</div>
        <div>{address}</div>
      </div>
      <div>
        <h2>Employee Status</h2>
        <div>{contractType}</div>
        <div>{humanReadableStartDate}</div>
        <div>{humanReadableFinishDate}</div>
        <div>{employmentBasis}</div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
