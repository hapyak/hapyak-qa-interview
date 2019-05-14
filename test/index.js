/* 
    the Chai Assertion Library is available as a global. It's configured for behavior driven delopment
    Available assertion methods are documente here - https://www.chaijs.com/guide/styles/#expect

    The video player is using Video.js. It's wrapped in HapYak's wrapper.
    The HapYak viewer API is documented here - http://www.hapyak.com/docs/hapyak-embed-api/#ViewerAPI
*/

(function () {
    var player = videojs('hapyak-player-157199-8825'),
        viewer;

    describe('The test components', () => {
        beforeEach(done => {
            // This is the viewer setup call for HapYak. It configures the HapYak wrapper to wrap a Video.js player
            // You shouldn't need to modify this at all
            hapyak.viewer({
                apiKey: '90b87e2798bb439c996e',
                projectId: 281706,
                resetVariables: true,
                player: player,
                videoType: 'html5',
                playerType: 'videojs4',
                onLoad: hapyakViewer => {
                    viewer = hapyakViewer;
                    done();
                }
            });
        });

        afterEach(() => {
            // This is the viewer tear code. You shouldn't need to modify this at all
            if (viewer) {
                viewer.destroy();
            }
        });


        // Complete the tests described below

        it('should exist', () => {
            // write a test that verifies `player` and `viewer` both exist
        });

        // since this is an async test, you need to call `done` once the async operation is complete
        it('should start playback', done => {
            // write a test that verifies you can start playback of the video using the HapYak viewer interface (`viewer`)
        });

        // since this is an async test, you need to call `done` once the async operation is complete
        it('should pause playback', done => {
            // write a test that verifies you can pause playback of the video using the HapYak viewer interface (`viewer`)
        });

        // since this is an async test, you need to call `done` once the async operation is complete
        it('should go to to a specific time in the video', done => {
            // write a test that jumps to a specific tme in the video and that verifies the video successfully reached that time
        });
    });
})();