import * as React from 'react';
import Employee from './Employee';
import EmployeeDetail from './EmployeeDetail';

interface EmployeeGridProps {
    items: Employee[]
}

interface EmployeeGridState {
    selected?: Employee
}

class EmployeeGrid extends React.Component<EmployeeGridProps, EmployeeGridState> {
    constructor(props: EmployeeGridProps) {
        super(props);
        this.state = {
            selected: undefined
        };
    }

    render() {
        const {items} = this.props;
        const {selected} = this.state;
        return (
            <div>
                <h2>Our Employees</h2>
                <ul className="grid">
                    {items.map((x: Employee, index: number) => {
                        return (
                            <li className="tile" onClick={() => this.setState({selected: x})}>
                                <img src={x.avatar} alt="avatar" />
                                <div>
                                    <h3>{x.firstName} {x.lastName}</h3>
                                    <p>{x.bio}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                {selected && <EmployeeDetail employee={selected} onDismiss={() => this.setState({selected: undefined})} />}
            </div>
        );
    }
}

export default EmployeeGrid;