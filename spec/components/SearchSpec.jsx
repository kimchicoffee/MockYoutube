describe ('Search', function() {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = React.addons.TestUtils;

  var app, searchYouTubeStub;

  describe('when rendering live data from YouTube', function() {
    beforeEach(function() {
      searchYouTubeStub = sinon.stub();
      searchYouTubeStub.onCall(0).yields(window.fakeVideoData);
      searchYouTubeStub.onCall(1).yields(window.moreFakeVideoData);

      app = renderIntoDocument(
        <App searchYouTube={searchYouTubeStub} />
      );
    });

    it('should update the video list when typing into the input box', function(done) {
      var videoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');
      var searchInputElement = findRenderedDOMComponentWithClass(app, 'form-control');

      Simulate.change(searchInputElement, {target: {value: 'React tutorial'}});

      // We're using setTimeout here so this test will pass for both a solution
      // that implements debouncing and one that does not
      setTimeout(function() {
        var newVideoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');
        newVideoEntryTitleElements.forEach((videoEntryTitle, i) => {
          expect(videoEntryTitle.innerHTML).to.equal(moreFakeVideoData[i].snippet.title);
        });
        done();
      }, 500);
    });

    it('should debounce the video list update by 500ms', function(done) {
      var videoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');
      var searchInputElement = findRenderedDOMComponentWithClass(app, 'form-control');

      Simulate.change(searchInputElement, {target: {value: 'React tutorial'}});

      setTimeout(function() {
        var newVideoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');
        newVideoEntryTitleElements.forEach((videoEntryTitle, i) => {
          expect(videoEntryTitle.innerHTML).to.equal(fakeVideoData[i].snippet.title);
        });
        done();
      }, 499);
    });
  });
});
