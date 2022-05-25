import React from 'react';
import './menuSelectors.css';

export default function MenuSelector({ list, onclick, show }) {
  return (
    <div className={`list ${show ? 'show' : 'hide'}`}>

      {list.map((item) => (
        <div key={item.key} onClick={onclick} className="list-item">{item.address}</div>
      ))}
    </div>

  );
}
