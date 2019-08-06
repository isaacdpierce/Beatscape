//! change the nam of this file back to app.test.js
import React from 'react';
import mockAudioContext from '__tests__/__mocks__/app';
import { shallow } from 'enzyme';
import App from 'Components/App/App';

it('renders without crashing', () => {
  shallow(<App />);
});
