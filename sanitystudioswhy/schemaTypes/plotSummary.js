
// import Tvshowsclient from './Tvshowsclient'; // Assuming this is the correct import path for Tvshowsclient

const myStructures = (S) =>
  S.list()
    .title('Compound')
    .items([
      S.documentTypeListItem('Tvshowsclient').title('Tvshowsclient'),
      S.divider(),
      S.documentTypeListItem('Banner').title('Banner'),
      S.divider(),
   
    ]);

export default myStructures;
