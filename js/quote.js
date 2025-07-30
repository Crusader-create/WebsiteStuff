window.addEventListener('DOMContentLoaded', () => {
  const url = encodeURIComponent('https://type.fit/api/quotes');
  fetch(`https://api.allorigins.win/get?url=${url}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const quotes = JSON.parse(data.contents);
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      const quote = `"${randomQuote.text}" — ${randomQuote.author || "Unknown"}`;
      document.getElementById('quote').textContent = quote;
    })
    .catch(err => {
      console.error('Quote fetch error:', err);
      document.getElementById('quote').textContent = "Couldn't load quote. Try again later.";
    });
});





