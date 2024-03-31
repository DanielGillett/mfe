import React from 'react';
import MarketingApp from './components/MarketingApp';

export default () => {
  return (
    <div>
      <h1>Hi there! {Date.now()}</h1>
      <hr />
      <MarketingApp />
    </div>
  );
};
