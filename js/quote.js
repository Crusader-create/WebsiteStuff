window.addEventListener('DOMContentLoaded', () => {
  fetch('https://zenquotes.io/api/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const quote = data[0];
      document.getElementById('quote').textContent = `"${quote.q}" — ${quote.a}`;
    })
    .catch(err => {
      console.error('Quote fetch error:', err);
      document.getElementById('quote').textContent = "Couldn't load quote. Try again later.";
    });
});



