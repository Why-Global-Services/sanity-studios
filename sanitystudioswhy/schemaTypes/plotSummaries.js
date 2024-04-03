
// import Tvshowsclient from './Tvshowsclient'; // Assuming this is the correct import path for Tvshowsclient

const myStructure = (S) =>
  S.list()
    .title('WHY STUDIOS')
    .items([
      S.documentTypeListItem('Banner').title('Banner'),
      S.documentTypeListItem('Tvshowsclient').title('Tvshowsclient'),
      S.documentTypeListItem('Blog').title('Homepage Blog'),
      S.documentTypeListItem('studios').title('Why Studios'),
      S.documentTypeListItem('WhatWeDo').title('WhatWeDo'),
      S.documentTypeListItem('moviesslider').title('Movies slider'),
      S.documentTypeListItem('LatestMovies').title('Latest Movies'),
      S.divider(),
      S.documentTypeListItem('Movie').title('Movies Upload'),
      S.documentTypeListItem('MovieDetail').title('Movies Details'),
      S.divider(),
      S.documentTypeListItem('TvAdvertisement').title('Tv Advertisement'),
      S.divider(),
      S.documentTypeListItem('TvShows').title('Tv Shows'),

      S.divider(),
      S.documentTypeListItem('activity').title('Event Page'),
      S.documentTypeListItem('WebSeries').title('Web Series'),
      S.divider(),
      S.documentTypeListItem('OurClient').title('Our Client'),
      S.divider(),
      S.documentTypeListItem('AboutPage').title('About Page'),
      S.divider(),
      S.documentTypeListItem('BlogPage').title('Blog Page'),

      S.documentTypeListItem('BlogDetails').title('Blog Details'),


     
   
      
   
    ]);

export default myStructure;
