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
import Studios from './Home/Studios'
import Events from './Events/Events'

import assosiatePartners from './Client/assosiatePartners'
import eventClient from './Client/eventClient'
import blog from './Home/blog'
import movies from './MovieProduction/movies'
import MovieDetail from './MovieProduction/MovieDetail'
import tvshows from './Tvshows/tvshows'
import tvads from './TvAdvertisement/tvads'
import webseries from './webseries/webseries'
import blogcontent from './blog/blogcontent'
import ads from './blog/ads'
import blogDetails from './blog/blogDetails'

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  banner,
  LatestMovies,
  tvshowclient,
LastestmoviesSlide,
Studios,
Events,
 
  assosiatePartners,
  eventClient,
  blog,
  movies,
  MovieDetail,
  tvshows,
  tvads,
  webseries,
  blogcontent,
  ads,
  blogDetails,
  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
