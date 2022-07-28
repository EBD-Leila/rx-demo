import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import RxMain from './pages/rx';
// import ReactDOMServer from 'react-dom/server'

// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <RxMain />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.hydrate(
//   <React.StrictMode>
//     <App />
//     {/* <RxMain /> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.hydrate(<App />, document.getElementById('root'))

// ReactDOMServer.renderToStaticNodeStream(<App />).pipe(response);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
