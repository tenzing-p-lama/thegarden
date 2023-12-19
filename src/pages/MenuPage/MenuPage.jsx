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
      <h1>Menu</h1>

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
          <h2>Food Menu</h2>

          <div className="menu-categories">
            {menuData.map((category) => (
              <div key={category.category} className="menu-category">
                <button
                  className="menu-category__item"
                  onClick={() => handleFoodCategoryClick(category.category)}
                >
                  {category.category}
                </button>
              </div>
            ))}
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
          <h2>Sushi Bar Menu</h2>

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
