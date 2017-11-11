import * as React from 'react';
import Employee from './Employee';

interface EmployeeDetailProps {
    employee: Employee
    onDismiss: () => void
}

const EmployeeDetail: React.SFC<EmployeeDetailProps> = props => {
    const {employee} = props;
    return (
        <div className="employee-container">
            <button onClick={props.onDismiss}>X</button>
            <div>
                <img src={employee.avatar} alt="avatar" />
                <h5>{employee.jobTitle}</h5>
                <span>{employee.age}</span>
                <span>{employee.dateJoined}</span>
            </div>
            <div>
                <h3>{employee.firstName} {employee.lastName}</h3>
                <p>{employee.bio}</p>
            </div>
        </div>
    );
}

export default EmployeeDetail;