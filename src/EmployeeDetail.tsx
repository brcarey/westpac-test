import * as React from 'react';
import Employee from './Employee';

interface EmployeeDetailProps {
    employee: Employee;
    onDismiss: () => void;
}

const EmployeeDetail: React.SFC<EmployeeDetailProps> = props => {
    const {employee} = props;
    return (
        <div className="modal-overlay">
            <div className="modal-content employee-detail">
                <button onClick={props.onDismiss}>X</button>
                <div className="tile">
                    <div>
                        <img src={employee.avatar} alt="avatar" />
                        <h5>{employee.jobTitle}</h5>
                        <p>{employee.age}</p>
                        <p>{new Date(employee.dateJoined).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <h3>{employee.firstName} {employee.lastName}</h3>
                        <p>{employee.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetail;