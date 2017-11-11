import Employee from './Employee';

export default interface Company {
    companyInfo: {companyName: string, companyMotto: string, companyEst: string}
    employees: Employee[]
}