import "./top-nav.css";
import SearchBox from "../search-box/search-box";

const TopNav = () => {
  return (
    <div className="container">
      <section className="left-container">
        <i
          className="item-left bi bi-house-door-fill"
          style={{ fontSize: 40 }}
        ></i>
        <text className="item-left option">Blog</text>
        <text className="item-left option">Shop</text>
      </section>
      <section className="center-container">
        <SearchBox />
      </section>
      <section className="right-container">
        <i
          className="item-right bi bi-person-circle"
          style={{ fontSize: 40 }}
        ></i>
      </section>
    </div>
  );
};

export default TopNav;
