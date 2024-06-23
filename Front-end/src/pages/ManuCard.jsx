import React from 'react'
import './style.css';

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className='mainCardContainer'>
       {menuData.map((curElem)=>{
        return(
            <>
            <div className='cardContainer' key={curElem.id}>
            <div className='card'>
                <div className='cardBody'>
                    <span className='cardNumber card-circle subtle'>{curElem.id}</span>
                    <span className='cardAuthor subtle'>{curElem.name}</span>
                    <h2 className='cardTitle'>{curElem.name}</h2>
                    <span className='card-description subtle'>{curElem.description}</span>
                    <div className='card-read'>Read</div>
                </div>
                <img src={curElem.image} alt='images' className='card-media'/>
                <span className='card-tag subtle'>Order Now</span>
            </div>
        </div>
        </>
        )
       })}
    </section>
    </>
  )
}

export default MenuCard;