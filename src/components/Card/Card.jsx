
import React, { useState } from 'react';
import styles from './Card.module.sass';
import FilledHeart from '../../assets/Heart.png';
import EmptyHeart from '../../assets/emptyHeart.png'

const Card = ({ type, title, image, price ,rating,count}) => {
  const isSuggestion = type === 'suggestion';
  const isProduct = type === 'product';

  const [toggle,setToggle]=useState(false)


  const handleWishlist=()=>{
setToggle(!toggle)
  }
  return (
    <div className={styles.card}>
      {isSuggestion ? (
        <>
          <img src={image} alt="Suggestion" />
          <h3>{title.slice(0,20)}</h3>
        </>
      ) : isProduct ? (
        <>
           <button onClick={handleWishlist} className={styles.heartButton}>
            {toggle?<img src={FilledHeart} alt='filled'/>:<img src={EmptyHeart} alt='empty'/>}
          </button>
         
          <img src={image} alt="Product" />
          
         <div className={styles.productDetails}>
         <h3>{title.slice(0, 20)}</h3>
          <p className={styles.price}><span className={styles.canceledPrice}>RS.{Math.floor(price + 57)}</span> RS.{price}</p>
          <div className={styles.ratingStyle}><p>{rating}</p><p>({count})</p></div>
         </div>
         <div className={styles.overlay}>
            <div>View Product</div>
          </div>
        </>
      ) : (
        <p>Invalid attribute</p>
      )}
    </div>
  );
};

export default Card;
