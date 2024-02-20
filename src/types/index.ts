export type NavButtonsProps = {
    prevStep: () => void;
    nextStep: () => void;
};

export type AdminSignUpInputs = {
    firstName: string,
    lastName: string,
    workEmail: string,
    password: string
  }

export type CompanyDetailsInputs = {
    companyName: string,
    businessType: string,
    address: string,
    country: string,
    state: string,
    numberOfEmployees: number,
    regNo: number
}