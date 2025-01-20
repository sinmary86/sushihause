import React from "react";
import Navbar from "../Navbar";
import BookingForm from "../Components/rest/BookingForm";
import "../styles/RestaurantsPage.css";
import RestaurantsGrid from "../Components/rest/RestaurantsGrid";


const RestaurantsPage = () => {
    return (
        <div className="restaurants-page">
        <Navbar />
        <header className="restaurants-header">
            <h2>Unsere Restaurants</h2>
        </header>
        <RestaurantsGrid />

        <BookingForm />
    </div>
    );
};

export default RestaurantsPage;