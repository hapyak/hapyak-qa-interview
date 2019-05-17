# HapYak QA Exercise
![enter image description here](https://corp.hapyak.com/wp-content/uploads/HapYak-Interactive-Video.jpg)

The purpose of this exercise is to evaluate your skills around writing tests for video.

# Getting started

## Requirements
You need to have a version of Node.js installed on your computer to complete this exercise. You can [install it from here](https://nodejs.org/en/download/) if you don't have it already. You also need to have [git installed](https://www.linode.com/docs/development/version-control/how-to-install-git-on-linux-mac-and-windows/).

## Getting the source
In your command-line environment, clone this repo

    git clone https://github.com/hapyak/hapyak-qa-interview.git

Once that's finished, navigate to the directory and run these commands

    npm install
    npm start

The second command should open a new browser window running the test environment (http://localhost:8080). After you make changes to the test definitions (`test/index.js`), reload the page to see your changes and run the updated tests.

# Tests to write

Inside the file `test/index.js` are several empty unit tests. We'd like you to implement the tests as described. The tests use the [Mocha testing framework](https://mochajs.org/#running-mocha-in-the-browser), the [Chai assertion library](https://www.chaijs.com/guide/styles/#expect), and our HapYak player wrapper. [The HapYak docs](http://www.hapyak.com/docs/hapyak-embed-api/#ViewerAPI) describe how to interface with the player wrapper using the viewer interface. **You'll need to use the viewer interface to write the tests.**

For all of these tests consider:

* Edge/fuzzy cases: Due to video encoding specifics, the playhead may not move to exactly where you tell it to go. Tests should be tolerant of this.
* Asynchronous behavior: Due to how time-based events occur in a player, the tests must be written to accomdate the asynchronous behavior.

# Submitting your work

Once you're satisfied with your tests and are ready to submit your work, please contact us and we'll provide further instructions.

