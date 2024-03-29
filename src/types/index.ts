export type CreateCompanyProps = {
    prevStep: () => void;
    nextStep: () => void;
    company: Company,
    onCompanyChange: (company: Company) => void
};

export type NavButtonProps = {
    prevStep: () => void;
    nextStep: () => void;
}

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
    registrationNo: number
}

export type Company = {
    companyId: number,
    companyName: string,
    businessType: string,
    address: string,
    country: string,
    state: string,
    numberOfEmployees: number,
    registrationNo: number
}

export enum Gender{
    Female,
    Male
}

export enum Role{
    Admin,
    Employee
}

export enum BusinessType{
    Consultancy, Technology, Marketing, Finance, Entertainment

}

export type UserState = {
    user: UserResponse | null
}

export type User = {
    userId: number,
    firstName: string,
    lastName: string,
    workEmail: string,
    gender: Gender,
    role: Role
}

export type UserResponse = {
    userId: number,
    firstName: string,
    lastName: string,
    workEmail: string,
    gender: Gender,
    role: Role
    company: Company
}

export type LoginPayload = {
    workEmail: string,
    password: string
}
// export type AuthContextType = {
//     user: User,
//     dispatch: 
// }