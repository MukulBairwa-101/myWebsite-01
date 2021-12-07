import React,{useState} from 'react'
import {BiSearchAlt} from "react-icons/bi"
const Navigation = () => {
    const[drop,setDrop]= useState(false);
    const[searchtoggle,setSearchtoggle]= useState(false);

    const handleDropdown =()=>{
        setDrop(!drop);
        setSearchtoggle(false);
    }
    const handleSearchToggle =()=>{
        setSearchtoggle(!searchtoggle);
        setDrop(false);
    }
    return (
        <div className="navigation_wrapper">
            <h4>MYWEBSITE</h4>
            <ul className="links_h">
                <li className="list_item active" >Home</li>
                <li className="list_item">Projects</li>
                <li className="list_item">contact us</li>
                <li className="list_item" onClick={handleDropdown} >more
                <ul className= {drop?"links_v_drop":"links_v"} >
                     <li className="dropdown_list_item">NRI</li>
                     <li className="dropdown_list_item">FACILITY MANAGEMENT</li>
                     <li className="dropdown_list_item">RESALE AND RENTEL</li>
                     <li className="dropdown_list_item">FREQUENTLY ASKED QUESTIONS</li>
                     <li className="dropdown_list_item">ABOUT US</li>
                     <li className="dropdown_list_item">CAREER</li>
                 </ul>
                   
                </li>
            </ul>
            <div className="search_wrapper">
            <BiSearchAlt onClick={handleSearchToggle} />
            {searchtoggle?  <input type="search" name="search" id="search" /> :""}
            </div>
           
           
        </div>
    )
}

export default Navigation;
