import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const buttonText = {text: 'click me'};
  const styleOne = { backgroundColor: 'blue', color: 'white' };
  const labelText = 'Enter name:';
  return (
    <div>
      <label className='label' htmlFor='name'>{labelText}</label>
      <input id='name' type='text'/>
      <button style={styleOne}>{buttonText.text}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));