export enum ContractType {
  Permanent = 'permanent',
  Contract = 'contract',
}

export enum EmploymentBasis {
  FullTime = 'full time',
  PartTime = 'part time',
}

export type NewEmployee = {
  firstName: string;
  middleName?: string;
  secondName: string;
  emailAddress: string;
  mobilePhoneNumber: string;
  residentialAddress: string;
  contractType: ContractType;
  startDate?: Date | null;
  finishDate?: Date | null;
  employmentBasis: EmploymentBasis;
};

export type Employee = NewEmployee & {
  id: string;
};
