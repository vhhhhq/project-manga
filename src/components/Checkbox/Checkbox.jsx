import React from 'react';
import './Checkbox.css';

function Checkbox() {
  return (
    <label htmlFor="checkbox" className='toggler'>
        <input type="checkbox" id='checkbox'/>
        <span className='ball'></span>
        <i className="sun-line sun" />
        <i className='moon-line moon' />
    </label>
  );
}

export default Checkbox;