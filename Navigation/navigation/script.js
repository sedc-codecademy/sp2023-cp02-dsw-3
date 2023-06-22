const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();
});

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', function() {
  const query = searchInput.value;

  // Save the search query to local storage
  localStorage.setItem('searchQuery', query);

  // Redirect to the search results page
  window.location.href = '/search-results.html';
});

// Retrieve the search query from local storage
const searchQuery = localStorage.getItem('searchQuery');

if (searchQuery) {
  // Display the search query on the page
  const searchResultsContainer = document.getElementById('search-results');
  searchResultsContainer.textContent = `Showing results for: ${searchQuery}`;

  // Perform further operations like fetching and displaying the search results
  // You can use AJAX requests, manipulate the DOM, or use any other method to display the search results dynamically
}

