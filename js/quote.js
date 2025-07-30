window.addEventListener('DOMContentLoaded', () => {
  const url = encodeURIComponent('https://zenquotes.io/api/random');
  fetch(`https://api.allorigins.win/get?url=${url}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const parsed = JSON.parse(data.contents); // Get actual JSON from wrapped response
      const quote = parsed[0];
      document.getElementById('quote').textContent = `"${quote.q}" — ${quote.a}`;
    })
    .catch(err => {
      console.error('Quote fetch error:', err);
      document.getElementById('quote').textContent = "Couldn't load quote. Try again later.";
    });
});




