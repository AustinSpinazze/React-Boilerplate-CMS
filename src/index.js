import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import './_index.scss';
import App from './App';
import ErrorBoundary from './utilities/ErrorBoundary';

const targetModulesData = document.querySelectorAll(
  '.global-styling > script[type="application/json"]',
);
targetModulesData.forEach(({ dataset, textContent }) => {
  const root = document.getElementById(`App--${dataset.moduleInstance}`);
  return ReactDOM.render(
    <ErrorBoundary>
      <HashRouter>
        <RecoilRoot>
          <App
            portalId={dataset.portalId}
            moduleData={JSON.parse(textContent)}
            moduleInstance={dataset.moduleInstance}
          />
        </RecoilRoot>
      </HashRouter>
    </ErrorBoundary>,
    root,
  );
});
