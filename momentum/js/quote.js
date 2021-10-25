const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('change-quote');
const lang = document.getElementById('switch-lang');
var errorCounter = 0;
const quoteCount = 102;

function getRandomInt(n) {
  return 1 + Math.floor(Math.random() * (n - 1));
}

function switchLanguage(ru, en) {
  return (lang.checked) ? ru : en;
}

// Get Quote From API
async function getQuote() {
  const apiUrl = switchLanguage('./js/json/quotes_ru.json', './js/json/quotes.json');
  try {
    const response = await fetch(apiUrl);
    const jsonQ = await response.json();
    // Check if Author field is blank and replace it with 'Unknown'
    const data = jsonQ.quotes[getRandomInt(quoteCount)];

    if (data.author === '') {
      authorText.innerText = 'Unknown';
    } else {
      authorText.innerText = data.author;
    }
    // Dynamically reduce font size for long quotes
    if (data.quote.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
    quoteText.innerText = data.quote;
  } catch (error) {
    if (errorCounter < 100) {
      getQuote();
      errorCounter++;
    } else {
      alert("Opsss! Quotes went wrong.");
    }
  }
}

newQuoteBtn.addEventListener('click', getQuote);

getQuote();