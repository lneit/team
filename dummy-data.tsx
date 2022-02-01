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
      startDate: '2021-07-28',
      finishDate: '2021-07-28',
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
        startDate: '2011-11-08',
        finishDate: '2021-07-28',
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