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
      <div className="container">
        <div className="header">
          <h1>
            {companyInfo.companyName}
            <p>{companyInfo.companyMotto}</p>
          </h1>
          <span className="est">Since {companyInfo.companyEst}</span>
        </div>
        <EmployeeGrid items={employees} />
      </div>
    );
  }
}

export default CompanyDetails;
