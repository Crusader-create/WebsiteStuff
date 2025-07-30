window.addEventListener('DOMContentLoaded', () => {
  fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
      const randomQuote = data[Math.floor(Math.random() * data.length)];
      const quote = `"${randomQuote.text}" — ${randomQuote.author || "Unknown"}`;
      document.getElementById('quote').textContent = quote;
    })
    .catch(err => {
      console.error('Quote fetch error:', err);
      document.getElementById('quote').textContent = "Couldn't load quote. Try again later.";
    });
});



