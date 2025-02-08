import React from "react"; 
import Map from "./Map"; 
import Swal from "sweetalert2"; 
import "../../styles/BookingForm.css";

const BookingSection = () => {

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch("http://localhost:9000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (!response.ok) {
        return response.text().then((errorText) => {
          throw new Error(`Server mistake: ${response.status} - ${errorText}`);
        });
      }
      return response.json();
    })
    .then((result) => {
      if (result.success) {
        Swal.fire({
          title: "Buchung bestätigt!",
          text: "Ihre Buchungsbestätigung wird innerhalb von 2 Stunden an Ihre E-Mail gesendet",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            confirmButton: "custom-swal-button",
          }
        });

        event.target.reset(); 
      } else {
        throw new Error(result.message);
      }
    })
    .catch((error) => {
      Swal.fire({
        title: "Fehler",
        text: "Es gab ein Problem mit der Buchung. Bitte versuchen Sie es später erneut.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "custom-swal-button",
        }
      });
      console.error("Ошибка бронирования:", error);
    });
  };

  return (
    <div className="booking-section">
      <Map />

      <div className="form-container">
        <h2>Tisch reservieren</h2>
        <form onSubmit={handleSubmit}> 
       
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="date">Datum</label>
              <input id="date" type="date" name="date" required />
            </div>
            <div className="form-field">
              <label htmlFor="time">Zeit</label>
              <input id="time" type="time" name="time" required />
            </div>
            <div className="form-field">
              <label htmlFor="people">Gäste</label>
              <input id="people" type="number" name="guests" min="1" required />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Nachricht</label>
            <textarea id="message" name="message" rows="2"></textarea>
          </div>

          <button type="submit">
            Senden
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingSection;
