const API_KEY = "b0ca3dedba335559bc9485c21beb7cb5";

const requests = {
    fetchTrending: `/trending/movie/week?api_key=${API_KEY}&language-US`,
    fetchMarvelMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=primary_release_date.desc&page=1&with_companies=420|19551|38679|2301|13252`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchNetflixTvShows: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&region=US&sort_by=release_date.asc&networks=Netflix&release_date.gte=2017-05-01`
}
export default requests;