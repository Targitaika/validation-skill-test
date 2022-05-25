import React, { useState } from 'react';
import './App.css';
import Field from './components/Field';
import MenuSelector from './components/MenuSelectors';
import { MenuList } from './mock';
import validation from './services/Validation';
import request from './services/HTTPRequest';

function App() {
  const [filterList, setFilterList] = useState(MenuList);
  const [addressValue, setAddressValue] = useState('');
  const [fieldClass, setFieldClass] = useState('');
  const [isShowMenu, setIsShowMenu] = useState(false);

  function filterAddress(validText) {
    const valid = new RegExp(validText, 'i');

    return MenuList.filter((item) => valid.test(item.address));
  }

  function handleAddress(e) {
    setAddressValue(e.target.value);
    const filter = filterAddress(e.target.value);
    setFilterList(filter);
  }

  function handleClick(e) {
    setAddressValue(e.target.textContent);
    const filter = filterAddress(e.target.textContent);
    setFieldClass('success');
    setFilterList(filter);
    request(e.target.textContent);
  }

  function handleFocus() {
    setIsShowMenu(true);
    setFieldClass('focus');
  }

  function handleBlur(e) {
    setTimeout(() => setIsShowMenu(false), 90);

    let valid = false;
    const addressArr = MenuList.map((item) => item.address);
    if (!validation(e.target.value)) {
      valid = false;
    }
    for (const address of addressArr) {
      if (address === e.target.value) {
        valid = true;
        break;
      }
    }
    if (!valid) {
      setFieldClass('unvalid');
    } else {
      request(e.target.value);
      setFieldClass('success');
    }
  }

  return (
    <div className="App">
      <div className="field-block">
        <div className="title">
          Адрес
          <span className="red-star">*</span>
        </div>
        <Field
          name="address"
          onchange={handleAddress}
          value={addressValue}
          onfocus={handleFocus}
          onblur={handleBlur}
          classname={fieldClass}
        />
        <MenuSelector show={isShowMenu} list={filterList} onclick={handleClick} />
      </div>

    </div>
  );
}

export default App;
