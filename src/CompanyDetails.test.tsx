import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CompanyDetails from './CompanyDetails';
import Company from './Company';

const data:Company = require('./sample-data.json');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompanyDetails company={data} />, div);
});
