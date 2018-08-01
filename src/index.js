import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {I18nProvider} from '@lingui/react'
import catalog from './locale/en/messages.js'

const LocalizedApp = () => (
    <I18nProvider language="en" catalogs={{ en: catalog }}>
        <App/>
    </I18nProvider>
);

ReactDOM.render(<LocalizedApp/>, document.getElementById('root'));

registerServiceWorker();
