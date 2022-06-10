import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'; //App 컴포넌트 import

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);


//ReactDOM.render(<App />,document.getElementById('root'));


//아이디가 root인 Element에 App 컴포넌트를 그린다!
