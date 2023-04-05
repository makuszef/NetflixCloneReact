const API_KEY = "ddd802af2608b61a3d02b26780d2394d";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&langueage=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie?top_rated?api_key=${API_KEY}&langueage=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_generes=99`

}
export default requests; //u can rename it when importing when 'export default'