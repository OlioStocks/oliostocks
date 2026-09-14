// Replace this one value with the Google Calendar Appointment Schedule link.
const BOOKING_LINK = "https://calendar.app.google/zZt4YiRpANuF8h7NA";

document.querySelectorAll(".booking-link").forEach((el) => {
  el.href = BOOKING_LINK;
  if (BOOKING_LINK.includes("PASTE_")) {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Add the Google Calendar booking link in script.js first.");
    });
  }
});

const phone = "19053599700";
const message = encodeURIComponent(
  "Hi Vivek, I found Vanstone Financial and would like to discuss financial research and OlioBot."
);
document.querySelectorAll(".whatsapp-link").forEach((el) => {
  el.href = `https://wa.me/${phone}?text=${message}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
