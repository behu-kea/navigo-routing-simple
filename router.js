import renderMain from "./pages/main/main.js";
import renderAbout from "./pages/about/about.js";
import renderUser from "./pages/user/user.js";
import renderLogin from "./pages/login/login.js";
import renderFetch from "./pages/fetch/fetch.js";

export default function () {
  window.router = new Navigo("/", { hash: true });

  router
    .on({
      "/": () => {
        // call updatePageLinks to let navigo handle the links
        // when new links have been inserted into the dom
        renderMain().then(router.updatePageLinks);
      },
      about: () => {
        renderAbout();
      },
      login: () => {
        renderLogin();
      },
      fetch: () => {
        renderFetch();
      },
      "/user/:id/": ({ data, params }) => {
        renderUser(data.id);
      },
    })
    .resolve();
}
