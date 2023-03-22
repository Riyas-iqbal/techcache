# Next.js The React Framework

## Optimizations

Next.js automatically optimizes your application for the best performance by code splitting, client-side navigation, and prefetching (in production).

## Routing 

You create routes as files under pages and use the built-in Link component. No routing libraries are required.

## code splitting and powerful

Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially.

This ensures that the homepage loads quickly even if you have hundreds of pages.

###### isolation
Only loading the code for the page you request also means that pages become isolated. If a certain page throws an error, the rest of the application would still work.

Furthermore, in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant!

## Client-side Navigation 

The Link component enables client-side navigation between two pages in the same Next.js app.

Client-side navigation means that the page transition happens using JavaScript, which is faster than the default navigation done by the browser.
