import * as React from 'react';
import * as enzyme from 'enzyme';
import CompanyDetails from './CompanyDetails';
import Company from './Company';
import * as Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

const data:Company = require('./sample-data.json');

describe('<CompanyDetails />', () => {
	let wrapper: enzyme.ReactWrapper;
    it('Should render the company details and employee grid', () => {
		wrapper = enzyme.mount(<CompanyDetails company={data} />);
		expect(wrapper.find('li').length).toEqual(12);
	});

	describe('When we select an employee tile', () => {
		beforeEach(() => {
			wrapper.find('li').first().simulate('click');
		});

		it('Should display employee detail modal', () => {
			expect(wrapper.find('EmployeeDetail').length).toEqual(1);
		});
	});
});
