import React from "react";
import restaurants from "../../data/dataRest";
import "../../styles/RestaurantsGrid.css";

const RestaurantsGrid = () => {
    return (
        <div className="restaurants-grid">
            {restaurants.map((restaurant) => (
                <div key={restaurant.id} className="restaurant-card">
                    <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="restaurant-image"
                    />
                    <div className="restaurant-overlay">
                        <h5>{restaurant.address}</h5>
                        <h6>{restaurant.phone}</h6>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantsGrid;
