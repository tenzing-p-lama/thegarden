import React, { useState } from "react";
import "./MenuPage.scss";
import { menuData } from "../../data/menu";
import { sushiBarMenu } from "../../data/barMenu";

const MenuPage = () => {
  const [selectedFoodCategory, setSelectedFoodCategory] =
    useState("Appetizers");
  const [selectedSushiBarCategory, setSelectedSushiBarCategory] =
    useState("Sushi Appetizers");

  const handleFoodCategoryClick = (category) => {
    setSelectedFoodCategory(category);
  };

  const handleSushiBarCategoryClick = (category) => {
    setSelectedSushiBarCategory(category);
  };

  return (
    <div className="App-header">
      <div className="menu-title">
        <h1 className="menu-title__eng">Menu</h1>
        <h2 className="menu-title__jap">メニュー</h2>
      </div>

      <div className="header">
        <a href="#menu-section" className="header-menu">
          Food Menu
        </a>
        <a href="#sushibar-section" className="header-menu">
          Sushi Bar Menu
        </a>
      </div>

      <div className="menu">
        <section className="menu-section" id="menu-section">
          <div className="menu-section__header">
            <h2 className="menu-section__header-jap">食べ物</h2>
            <h2 className="menu-section__header-eng">Food Menu</h2>
          </div>

          <div className="menu-categories">
            {menuData.map((category) => (
              <div key={category.category} className="menu-category">
                <button
                  className={`menu-category__item ${
                    category.category === selectedFoodCategory
                      ? "menu-category__selected"
                      : category.category === "Appetizers"
                      ? "menu-category__default"
                      : ""
                  }`}
                  onClick={() => handleFoodCategoryClick(category.category)}
                  autoFocus={category.category === "Appetizers"} // Add this line
                >
                  {category.category}
                </button>
              </div>
            ))}

            <select
              id="categoryDropdown"
              className="menu-categories__dropdown"
              value={selectedFoodCategory || ""}
              onChange={(e) => handleFoodCategoryClick(e.target.value)}
            >
              <option value="" disabled>
                Choose a category
              </option>
              {menuData.map((category) => (
                <option key={category.category} value={category.category}>
                  {category.category}
                </option>
              ))}
            </select>
          </div>

          {selectedFoodCategory && (
            <div className="menu-section__content">
              <ul className="menu-list">
                {menuData
                  .find(
                    (category) => category.category === selectedFoodCategory
                  )
                  ?.items.map((item) => (
                    <li key={item.id} className="menu-list__item">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>${item.price.toFixed(2)}</p>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </section>

        <section className="menu-section" id="sushibar-section">
          <div className="menu-section__header">
            <h2 className="menu-section__header-jap">寿司バー</h2>
            <h2 className="menu-section__header-eng">Sushi Bar Menu</h2>
          </div>

          <div className="menu-categories">
            {sushiBarMenu.map((category) => (
              <div key={category.category} className="menu-category">
                <button
                  className="menu-category__item"
                  onClick={() => handleSushiBarCategoryClick(category.category)}
                >
                  {category.category}
                </button>
              </div>
            ))}

            <select
              id="categoryDropdown"
              className="menu-categories__dropdown"
              value={selectedSushiBarCategory || ""}
              onChange={(e) => handleSushiBarCategoryClick(e.target.value)}
            >
              <option value="" disabled>
                Choose a category
              </option>
              {sushiBarMenu.map((category) => (
                <option key={category.category} value={category.category}>
                  {category.category}
                </option>
              ))}
            </select>
          </div>

          {selectedSushiBarCategory && (
            <div className="menu-section__content">
              <ul className="menu-list">
                {sushiBarMenu
                  .find(
                    (category) => category.category === selectedSushiBarCategory
                  )
                  ?.items.map((item) => (
                    <li key={item.id} className="menu-list__item">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>${item.price.toFixed(2)}</p>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default MenuPage;
