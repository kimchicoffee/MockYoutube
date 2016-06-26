var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: $.extend(
      {key: window.YOUTUBE_API_KEY,
        q: 'kittens',
        maxResults: 15,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true'},
      options),
    success: function(data){
      if (callback){
        callback(data);
      }
    },
    error: function(error){
      console.error('something is wrong with the data', error)
    }

  })
};

// var searchYouTube = (options, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     key: window.YOUTUBE_API_KEY,
//     q: 'kittens',
//     maxResults: 15,
//     part: 'snippet',
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//   .done(({items}) => {
//     console.log(items);
//     if (callback) {
//       callback(items);
//     }
//   })
//   .fail((error) => {
//     console.error(error);
//   })
// };

window.searchYouTube = searchYouTube;
