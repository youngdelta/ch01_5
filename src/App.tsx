import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as D from './data';
import ClassComponent from './ClassComponent';
import ArrowComponent from './ArrowComponent';

function App() {
	console.log('app code');

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				{/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a> */}
			</header>
			<h1>Hello world!!</h1>
			<p>
				{D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()},
			</p>
			<img src={D.randomAvatar()} alt="아바타" height="50" />
			<img src={D.randomImage()} alt="이미지 랜덤" height="300" />
			<ul>
				<ClassComponent href="https://m.clien.net" text="클리앙" />
				<ClassComponent href="https://m.ppomppu.co.kr" text="뽐뿌" />
				<ArrowComponent href="https://twitter.com" text="go to Twitter" />
			</ul>
		</div>
	);
}

export default App;
