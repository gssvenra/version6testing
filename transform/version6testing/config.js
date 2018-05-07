'use strict';
module.exports = {
    startURL: 'http://ec2-54-200-41-250.us-west-2.compute.amazonaws.com/mantisbt/login_page.php',
    eventDetection: {
        // The minimum interval for checking events.
        debounceTime: 500,
        domMutations: {
            watch: true,
            ignoreList: []
        }
    },
    // ******* User Agent *******
    // Suffix to add to the user agent string.
    userAgentSuffix: 'Powwow/1.0',
    // userAgentReplacement: "Custom user agent string goes here",
    //
    // Viewport configuration
    autoResize: true,
    viewportSize: {
        width: 1024,
        height: 768
    },
    // ********* Local Storage configuration **********
    localStorageIsolationOff: false,
    cache: { enabled: true },
    // Set this to true to not isolate local storage.
    // When localStorageIsolation is on (the default) then we will by default
    // create a temp folder to keep localStorage under the current
    // working directory.  To create the temp folders elsewhere, set this:
    // localStoragePath: "/apps/powwow/localStorage",
    // List of URLs to enable authentication for.
    authWhitelistUrls: ''
};