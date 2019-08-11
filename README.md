## Next JS learning

Part 1 - Learning about creating a next.js app and basics of routing

* Layout - learning about page layout
* Routing - learning both static and dynamic routing
* Network requests - Making ajax calls to backend.
    * Important note, if the page is static any data fetch is done of the server before they are rendered on the server
    * But for dynamic routes they are done on the client side, since the page navigation takes place on the browser.
    * All of this done with by attaching or assigning a function or a asyn function to `getInitialProps` key of a component.
