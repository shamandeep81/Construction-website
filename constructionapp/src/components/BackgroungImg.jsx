import React from 'react'
import Login from './Login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import UpperIcons from './UpperIcons';
const BackgroungImg = () => {
  return (
    <div className='container'>
  
{/* <img className="BackgroungImg" src="./images/header.png" alt="HeaderIMG"/> */}
<Login />
<div className="content">

<p className='contentpgh'> Search Engines of the Construction Industry</p>
<div className="search-bar">
          <input type="text" placeholder="Search Anything Anywhere" />
          <button className="search-button">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
</button>
</div>

<div className="search-options">
  <label>
    <input type="radio" name="searchOption" value="option1" />
   Company Name
  </label>
  <label>
    <input type="radio" name="searchOption" value="option2" />
    Product/Services name
  </label>
  <label>
    <input type="radio" name="searchOption" value="option3" />
    All Protfile
  </label>
</div>
<p className='options-paragraph'>Search By:</p>
<UpperIcons />
    </div>
    </div>
  );
}

export default BackgroungImg