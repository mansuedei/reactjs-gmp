import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../Routes";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `
    <html lang="en">
      <head>
      <title>SSR</title>
      <link rel="icon" href="https://img2.pngio.com/download-free-png-netflix-app-icon-png-383430-free-icons-netflix-icon-png-2000_2000.png" sizes="16x16" type="image/png">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}

// export default (req, store) => {
//   const content = renderToString(
//     <Provider store={store}>
//       <StaticRouter location={req.path} context={{}}>
//         <div>{renderRoutes(Routes)}</div>
//       </StaticRouter>
//     </Provider>
//   );
//   return `
//     <html lang="en">
//       <head><title>SSR</title></head>
//       <body>
//         <div id="root">${content}</div>
//         <script>
//           window.INITIAL_STATE = ${serialize(store.getState())}
//         </script>
//         <script src="bundle.js"></script>
//       </body>
//     </html>
//   `;
// }
