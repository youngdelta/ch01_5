import React from 'react';
import ReactDOM from 'react-dom/client'; //csr 방식 웹 앱
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*
CSR (Client-side-rendering) 방식으로 동작하는 앱은 react와 react-dom/client 패키지 조합
SSR (Server-side-rendering)방식으로 동작하는 앱은 react와 react-dom/server 조합
모바일 앱은 react와 react-native 조합으로 만든다는 것을 보여 줍니다.
*/
