class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };

  }

  onVideoListEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render () {

    return (
      <div>
        <Nav searchYouTube={window.searchYouTube.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} onVideoListEntryClick={this.onVideoListEntryClick.bind(this)}/>
        </div>
      </div>
    )
  }

};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
