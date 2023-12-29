
import SearchIcon from "../../assets/search.png";
import styles from "./Search.module.sass";

const Search = ({ onClick, onBlur, productStyle }) => {
  return (
    <form
      action="submit"
      className={productStyle ? styles.productForm : styles.searchForm}
    >
      <div
        className={
          productStyle ? styles.productFormContent : styles.searchFormContent
        }
      >
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
  );
};

export default Search;
