/* 
    the Chai Assertion Library exposes `chai` and `expect` global variables. It's configured for behavior driven development
    Available assertion methods are documented here - https://www.chaijs.com/guide/styles/#expect

    The video player is Video.js. It's wrapped in a HapYak wrapper.
    The HapYak viewer API is documented here - http://www.hapyak.com/docs/hapyak-embed-api/#ViewerAPI
*/

(function () {
    var player = videojs('hapyak-player-157199-8825'),
        viewer,
        expect = chai.expect;

    describe('The test components', function() {
        beforeEach(function(done) {
            // This is the viewer setup call for HapYak. It configures the HapYak wrapper to wrap a Video.js player
            // You shouldn't need to modify this
            hapyak.viewer({
                apiKey: '90b87e2798bb439c996e',
                projectId: 281706,
                resetVariables: true,
                player: player,
                videoType: 'html5',
                playerType: 'videojs4',
                onLoad: function(hapyakViewer) {
                    viewer = hapyakViewer;
                    done();
                }
            });
        });

        afterEach(function() {
            // This is the viewer teardown code. You shouldn't need to modify this
            if (viewer) {
                viewer.destroy();
            }
        });


        // Complete the tests described below

        it('should exist', () => {
            // write a test that verifies `player` and `viewer` both exist
        });

        // since this is an async test, you need to call `done` once the async operation is complete
        it('should start playback', function(done) {
            // write a test that verifies you can start playback of the video using the HapYak viewer interface (`viewer`)
        });

        // since this is an async test, you need to call `done` once the async operation is complete
        it('should pause playback', function(done) {
            // write a test that verifies you can pause playback of the video using the HapYak viewer interface (`viewer`)
        });

        // since this is an async test, you need to call `done` once the async operation is complete
        it('should seek to a specific time in the video', function(done) {
            // write a test that seeks to a specific tme in the video and that verifies the video successfully reached that time
        });
    });
})();