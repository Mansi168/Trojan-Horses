import React from "react"; 
 import "./Searchbar.css"; 
 import SearchIcon from '@mui/icons-material/Search';


function Searchbar({ placeholder, data }) {
   return (
    <div className="container">
    <div className ="search">
      <div className= "searchInputs">
        <input type ="text" placeholder={placeholder}
                                                    />
        <div className= "searchIcon"><SearchIcon/> </div>
      </div>
      <div className ="dataResult"></div>
    </div>
    </div>
  );
  }
  export default Searchbar;

