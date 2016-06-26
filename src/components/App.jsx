class App extends React.Component{
  constructor () {
    super();
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: []
    };
  }

  componentDidMount() {
    this.props.search({key:window.YOUTUBE_API_KEY, query:"puppies", max:10}, (data) => {
      this.setState({
        currentVideo: data[0],
        videoList: data
      })
    })
  }

  onVideoListEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render () {

    return (
      <div>
        <Nav search={this.props.search}/>
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

// The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not read from or write to the DOM or otherwise interact with the browser (e.g., by using setTimeout). If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes server rendering more practical and makes components easier to think about.

//ComponentDidMount
//Invoked once, only on the client (not on the server), immediately after the initial rendering occurs. At this point in the lifecycle, you can access any refs to your children (e.g., to access the underlying DOM representation). The componentDidMount() method of child components is invoked before that of parent components.
//If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval, or send AJAX requests, perform those operations in this method.