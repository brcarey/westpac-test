import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CompanyDetails from './CompanyDetails';
import registerServiceWorker from './registerServiceWorker';
import Company from './Company';
import './index.css';

const data:Company = require('./sample-data.json');

ReactDOM.render(
  <CompanyDetails company={data} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
