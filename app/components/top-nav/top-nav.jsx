"use client";
import { useState } from "react";
import "./top-nav.css";
import SearchBox from "../search-box/search-box";
import DarkmodeButton from "../darkmode-button/darkmode-button";

const login = [
  "Messages",
  "History",
  "Wishlists",
  "Account",
  "Help",
  "Log out",
];

const notLogin = ["Sign up", "Log in", "Help"];

const TopNav = () => {
  const [dropdown, setDropdown] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <div className="container-nav">
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
        <DarkmodeButton />
        <div style={{ marginLeft: "40px" }}>
          <i className="bi bi-bag" style={{ fontSize: 30, color: "white" }}></i>
        </div>
        <div
          onClick={() => {
            if (dropdown) {
              setDropdown(false);
            } else {
              setDropdown(true);
            }
          }}
          style={{ marginLeft: "40px" }}
        >
          <i
            className="bi bi-person-circle"
            style={{ fontSize: 40, color: "white" }}
          ></i>
          {dropdown ? (
            <section className="dropdown">
              <div className="dropdown-child-container">
                <h3>juh</h3>
                <h3>juh</h3>
              </div>
            </section>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default TopNav;
