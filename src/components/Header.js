import React from "react";
import Search from "./Search";

function Header({ onSubmitSearch, onSearchChange, search }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSubmitSearch={onSubmitSearch} onSearchChange={onSearchChange} search={search} />
    </header>
  );
}

export default Header;
