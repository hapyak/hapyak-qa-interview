# HapYak QA Exercise
![enter image description here](https://corp.hapyak.com/wp-content/uploads/HapYak-Interactive-Video.jpg)

The purpose of this exercise to test your skills around writing tests for interactive video.


# Getting started

**Requirements**
You need to have a version of Node.js installed on your computer to complete this exercise. You can [install it from here](https://nodejs.org/en/download/) if you don't have it already.

Once that's installed create a fork of this repo and clone your fork to your local machine. Navigate to the directory you cloned your fork in to, and run these commands

    npm install
    npm start

The second command should open a new browser window with the test environment (http://localhost:8080). After you make changes to the test definitions (`test/index.js`), reload the page to see your changes and run the updated tests.

# Tests to write

Inside the file `test/index.js` are several empty unit tests. We'd like you to implement the tests as described. The tests use the Mocha testing framework, the Chai assertion library, and our HapYak player wrapper. [The HapYak docs](http://www.hapyak.com/docs/hapyak-embed-api/#ViewerAPI) describe how to interface with the player wrapper. **You'll need to use the viewer interface to write the tests.**

For all of these tests consider:

* Edge/fuzzy cases: Due to video encoding specifics, the playhead may not move to exactly where you tell it to go. Tests should be tolerant of this.
* Asynchronous behavior: Due to how time-based events occur in a player, the tests must be written to accomdate the asynchronous behavior.

# Submitting your work

Once you've finished all the tests and are ready to submit your work, please open a pull request on Github between your forked version and the original repo. See [this link](https://help.github.com/en/articles/creating-a-pull-request-from-a-fork) for more information on how to do that.

