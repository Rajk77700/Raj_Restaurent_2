import React, { useState } from 'react';
import Menu from "./MenuApi";
import MenuCard from './ManuCard';
import Footer from '../components/Footer';

function Restaurant() {
    const [menuData,setMenuData]=useState(Menu);
    const filterItem=(category)=>{
       const updatedList=Menu.filter((curElem)=>{
            return curElem.category===category
       })
       setMenuData(updatedList)
    }

  return (
    <>
       <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item' onClick={()=>filterItem("sweets")}>Sweets</button>
            <button className='btn-group__item' onClick={()=>filterItem("breakfast")}>Breakfast</button>
            <button className='btn-group__item' onClick={()=>filterItem("lunch")}>Lunch</button>
            <button className='btn-group__item' onClick={()=>filterItem("evening")}>Evening</button>
            <button className='btn-group__item' onClick={()=>filterItem("dinner")}>Dinner</button>
            <button className='btn-group__item' onClick={()=> setMenuData(Menu)}>All Items</button>
        </div>
       </nav>
       <MenuCard menuData={menuData}/> 
       <Footer></Footer>
    </>  
  )
}

export default Restaurant