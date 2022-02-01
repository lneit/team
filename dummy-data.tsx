const DUMMY_EMPLOYEES = [
    {
      id: 'e1',
      firstName: 'John',
      middleName: '',
      secondName: 'Smith',
      email: 'john.smith@gmail.com',
      mobile: '+610412345678`',
      address: '1 Example St, Sydney NSW 2000',
      contractType: 'contract',
      startDate: '28-07-2021',
      finishDate: '28-07-2021',
      employmentBasis: 'full time',
    },
    {
        id: 'e2',
        firstName: 'Tess',
        middleName: '',
        secondName: 'Antonia',
        email: 'tess,antonia@yahoo.com',
        mobile: '+610487654321`',
        address: '2 Example St, Sydney NSW 2000',
        contractType: 'permanent',
        startDate: '08-11-2011',
        finishDate: '28-07-2021',
        employmentBasis: 'part time',
      },
  ];
  
  
  
  export function getAllEmployees() {
    return DUMMY_EMPLOYEES;
  }
  
  export function getFilteredEmployees(contractTypeFilter: any) {
  
    let filteredEmployees = DUMMY_EMPLOYEES.filter((employee) => {
      return contractTypeFilter === employee.contractType;
    });
  
    return filteredEmployees;
  }
  
  export function getEmployeeById(id: any) {
    return DUMMY_EMPLOYEES.find((employee) => employee.id === id);
  }