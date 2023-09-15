document.addEventListener("DOMContentLoaded", function () {

  const selectedMovieTitle = localStorage.getItem("selectedMovieTitle");
  const selectedMoviePrice = localStorage.getItem("selectedMoviePrice");

  const ticketCost = parseFloat(selectedMoviePrice);
  const convenienceFeeRate = 0.0175; 
  const convenienceFee = ticketCost * convenienceFeeRate;
  const subtotal = ticketCost + convenienceFee;

  populateSummary(selectedMovieTitle, ticketCost, convenienceFee, subtotal);
});

function populateSummary(title, cost, fee, total) {
  const movieNameElement = document.getElementById("movie-name");
  const ticketCostElement = document.getElementById("ticket-cost");
  const convenienceFeeElement = document.getElementById("convenience-fee");
  const subtotalElement = document.getElementById("subtotal");

  movieNameElement.textContent = title;
  ticketCostElement.textContent = cost.toFixed(2);
  convenienceFeeElement.textContent = fee.toFixed(2);
  subtotalElement.textContent = total.toFixed(2);
  
}
