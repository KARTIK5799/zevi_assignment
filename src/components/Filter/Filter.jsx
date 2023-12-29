import { useEffect, useState } from "react";
import styles from "./Filter.module.sass";
import Accordian from "../Accordian/Accordian";
import { Ratings } from "../../api/filterOption";
import Products from "../../api/api";

const Filter = ({ onFilterChange }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedPriceRange,setSelectedPriceRange]=useState({
//     max:null,
//     min:null
// });

  const getCategories = async () => {
    try {
      const data = await Products();
      const uniqueCategories = [
        ...new Set(data.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error(`their is something issue your data ${error}`);
    }
  };

  const handleFilterChange = () => {
    onFilterChange({
      categories: selectedCategories,
      priceRange: selectedPriceRange,
    });
  };


  useEffect(() => {
    getCategories();
   
  },[]);

  useEffect(()=>{
    handleFilterChange();
  },[selectedCategories])

  const CategoriesOptions = () => {
    return (
      <div className={styles.filterOption}>
        {categories.map((category) => (
          <label key={category}>
            <input type="checkbox" name={category} id={category} 
            checked={selectedCategories.includes(category)}
            onChange={() => toggleCategory(category)}/>
            {category}
          </label>
        ))}
      </div>
    );
  };

  const PriceRangeOption = () => {
    const priceRanges = [
      { label: 'Under 100', max: 99 },
      { label: 'Under 500', max: 499 },
    ];
  
    return (
      <div className={styles.filterOption}>
        {priceRanges.map((range, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name={range.label}
              id={range.label}
          
             
            />
            {range.label}
          </label>
        ))}
      </div>
    );
  };
  

  const RatingOption = () => {
    return (
      <div className={styles.filterOption}>
        {Ratings.map((rate) => (
          <label key={rate}>
            <input
              type="checkbox"
              name={rate}
              id={rate}
             />
            {rate}
          </label>
        ))}
      </div>
    );
  };


  const toggleCategory = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };



  return (
    <div className={styles.filterContainer}>
      <h1>Search Results</h1>

      <Accordian title={"Categories"} content={<CategoriesOptions />} />
      <hr />
      <Accordian title={"Price Range"} content={<PriceRangeOption />} />
      <hr />
      <Accordian title={"Rating"} content={<RatingOption />} />
    </div>
  );
};

export default Filter;
