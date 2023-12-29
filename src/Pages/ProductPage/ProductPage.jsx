import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Filter from "../../components/Filter/Filter";
import Products from "../../api/api";
import Card from "../../components/Card/Card";
import styles from "./ProductPage.module.sass";
import { useSearch } from '../../contexts/SearchContaxt';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { searchTerm } = useSearch();

  const fetchData = async () => {
    try {
      const data = await Products();
      setProducts(data);
    } catch (error) {
      console.error("Error in fetching Products", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);


  const handleFilterChange = (filters) => {
    const filtered = products.filter((product) => {
      const isCategoryMatch =
        filters.categories.length === 0 ||
        filters.categories.includes(product.category);

        const isPriceMatch =
        (filters.priceRange.min === null || product.price >= filters.priceRange.min) &&
        (filters.priceRange.max === null || product.price <= filters.priceRange.max);
  
      return isCategoryMatch && isPriceMatch;
    });
  
 
  
    setFilteredProducts(filtered);
  };



  return (
    <div>
      <NavBar place={"product"} />
      <div className={styles.productPage}>
        <div>
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className={styles.productSection}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id}>
                <Card
                  type={"product"}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  rating={product.rating.rate}
                  count={product.rating.count}
                />
              </div>
            ))
          ) : (
            products.map((product) => (
              <div key={product.id}>
                <Card
                  type={"product"}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  rating={product.rating.rate}
                  count={product.rating.count}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
