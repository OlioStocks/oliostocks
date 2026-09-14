const BOOKING_LINK = "https://calendar.app.google/zZt4YiRpANuF8h7NA";

document.querySelectorAll(".booking-link").forEach((el) => {
  el.href = BOOKING_LINK;
});

const phone = "19053599700";
const message = encodeURIComponent(
  "Hi Vivek, I found Vanstone Financial and would like to discuss financial research."
);
document.querySelectorAll(".whatsapp-link").forEach((el) => {
  el.href = `https://wa.me/${phone}?text=${message}`;
});

document.getElementById("year").textContent = new Date().getFullYear();
