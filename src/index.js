import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

//import Counter from './Components/Counter';
import CounterClass from './Components/CounterClass';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <Counter/> counter functional component*/}
    <CounterClass/>
  </StrictMode>
);
