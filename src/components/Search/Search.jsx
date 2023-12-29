
import SearchIcon from "../../assets/search.png";
import styles from "./Search.module.sass";

const Search = ({ onClick, onBlur, productStyle,searchTerm, setSearchTerm }) => {
 const handleChange=(e)=>{
setSearchTerm(e.target.value);
  }
  
  return (
    <>
      {productStyle ? (
        
        <form action="submit" className={styles.productForm}>
          <div className={styles.productFormContent}>
          <input
              type="text"
              placeholder="Search"
              className={styles.inputField}
              onClick={onClick}
              onBlur={onBlur}
              value={searchTerm}
              onChange={handleChange}
            />
            <button type="submit" className={styles.searchButton}>
              <img src={SearchIcon} alt="Search" />
            </button>
          </div>
        </form>
      ) : (
       
        <form action="submit" className={styles.searchForm}>
          <div className={styles.searchFormContent}>
            <input
              type="text"
              placeholder="Search"
              className={styles.inputField}
              onClick={onClick}
              onBlur={onBlur}
            />
            <button type="submit" className={styles.searchButton}>
              <img src={SearchIcon} alt="Search" />
            </button>
          </div>
        </form>
      )}
    </>
  );
  
};

export default Search;
