import "./search-box.css";

const SearchBox = () => {
  return (
    <div className="search-box-container">
      <form className="d-flex" role="search">
        <i className="icon bi bi-search" style={{ fontSize: "25px" }}></i>
        <input
          className="form-control me-2"
          style={{
            height: "40px",
            width: "400px",
            borderRadius: "50px",
            paddingLeft: "40px",
            fontSize: "16px",
          }}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default SearchBox;
