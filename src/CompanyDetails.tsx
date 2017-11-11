import * as React from 'react';
import EmployeeGrid from './EmployeeGrid';
import Company from './Company';

interface CompanyProps {
  company: Company
}

class CompanyDetails extends React.Component<CompanyProps> {
  render() {
    const {company: {employees, companyInfo}} = this.props;
    return (
      <div className="app">
        <div className="header">
          <h1>
            {companyInfo.companyName}
            <span>{companyInfo.companyMotto}</span>
          </h1>
          <span>Since {companyInfo.companyEst}</span>
        </div>
        <EmployeeGrid items={employees} />
      </div>
    );
  }
}

export default CompanyDetails;
