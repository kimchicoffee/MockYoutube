// var searchYouTube = (options, callback) => {
//   // TODO
//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: 'GET',
//     data: options,
//     success: function(data){
//       console.log(data);
//       // callback();
//     },
//     error: function(error){
//       console.error('something is wrong with the data', error)
//     }
//
//   })
// };

var searchYouTube = (options, callback) => {
  console.log(window.YOUTUBE_API_KEY);
  $.get('https://www.googleapis.com/youtube/v3/search', {
    key: window.YOUTUBE_API_KEY,
    q: 'kittens',
    maxResults: 5,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail((error) => {
    console.error(error);
  })
};

searchYouTube();



window.searchYouTube = searchYouTube;
