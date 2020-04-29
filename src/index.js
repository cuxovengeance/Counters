import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";


// You don't have to use `fetch` btw, use whatever you want
const getCounters = () => 
  fetch('/api/v1/counter', { method: 'get' })
    .then(res => res.json());


const AppP = () => {
  React.useEffect(() => {
    getCounters().then(console.log, console.error);
  }, []);

  return (
      <App/>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
