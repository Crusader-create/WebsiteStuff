window.addEventListener('DOMContentLoaded', () => {
  const apiURL = encodeURIComponent('https://api.quotable.io/random');

  fetch(`https://api.allorigins.win/get?url=${apiURL}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load quote');
      }
      return response.json();
    })
    .then(data => {
      const quoteObj = JSON.parse(data.contents);
      const quote = `"${quoteObj.content}" — ${quoteObj.author}`;
      document.getElementById('quote').textContent = quote;
    })
    .catch(err => {
      console.error('Quote fetch error:', err);
      document.getElementById('quote').textContent = "Couldn't load quote. Try again later.";
    });
});





