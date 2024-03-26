import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import banner from './Home/banner'
import LatestMovies from './Home/LatestMovies'
import tvshowclient from './Home/tvshowclient'
import LastestmoviesSlide from './Home/LastestmoviesSlide'
import assosiatePartners from './Client/assosiatePartners'
import eventClient from './Client/eventClient'
import blog from './Home/blog'
import movies from './MovieProduction/movies'
import MovieDetail from './MovieProduction/MovieDetail'

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  banner,
  LatestMovies,
  tvshowclient,
  LastestmoviesSlide,
  assosiatePartners,
  eventClient,
  blog,
  movies,
  MovieDetail,
  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
