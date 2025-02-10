const API_KEY = process.env.REACT_APP_API_KEY; // Replace with your actual TMDb API key

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, // Netflix's network ID is 213
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, // Genre ID for Action is 28
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, // Genre ID for Comedy is 35
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, // Genre ID for Horror is 27
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, // Genre ID for Romance is 10749
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, // Genre ID for Documentaries is 99
};

export default requests;