import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Map from "./Map";
import Swal from "sweetalert2";
import "../../styles/BookingForm.css";


const BookingSection = () => {
  const [formState, handleSubmit] = useForm("xnnnkwnn"); 

  const handleSuccess = () => {
    Swal.fire({
      title: "Buchung bestätigt!",
      text: "Ihre Buchungsbestätigung wird innerhalb von 2 Stunden an Ihre E-Mail gesendet",
      icon: "success",
      confirmButtonText: "OK",
      customClass: {
      confirmButton: "custom-swal-button",
    }, 
    });
  };

  if (formState.succeeded) {
    handleSuccess();
  }

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
              <ValidationError prefix="Name" field="name" errors={formState.errors} />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required />
              <ValidationError prefix="Email" field="email" errors={formState.errors} />
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
              <input id="people" type="number" name="people" min="1" required />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="message">Nachricht</label>
            <textarea id="message" name="message" rows="2"></textarea>
            <ValidationError prefix="Message" field="message" errors={formState.errors} />
          </div>

          <button type="submit" disabled={formState.submitting}>
          Senden
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingSection;
