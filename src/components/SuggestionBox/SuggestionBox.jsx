import React, { useEffect, useState } from 'react';
import styles from './SuggestionBox.module.sass';
import Card from '../Card/Card';
import Products from '../../api/api';



const SuggestionBox = () => {
  const [suggestedProduct,setSuggestedProducts]=useState([]);

  const getSuggestedProducts=async()=>{
    try {
      const data=await Products();
      setSuggestedProducts(data)
    } catch (error) {
      console.error(`their is something issue your data ${error}`)
    }

  }

  useEffect(()=>{
    getSuggestedProducts();
   
  },[])

const limitedSuggestionProduct=suggestedProduct.slice(0,5);
  return (
   <div className={styles.container}>
     <div className={styles.suggestionBox}>
      <div className={styles.trendSection}>
        <h3>Latest Trends</h3>
       <div className={styles.cardSection}>
       {limitedSuggestionProduct.map((product) => (
              <Card
                key={product.id}
                type="suggestion"
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
       </div>
       <div>
       <h3>Popular suggestions</h3>

       <div className={styles.suggestionTitles}>
       {limitedSuggestionProduct.map((product)=>(
          <p key={product.id}>{product.title.slice(0,20)}</p>
       ))
       }
       </div>

       </div>
      </div>
    </div>

   </div>
  );
};

export default SuggestionBox;