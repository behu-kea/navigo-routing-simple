import renderMain from "./pages/main/main.js";
import renderAbout from "./pages/about/about.js";
import renderUser from "./pages/user/user.js";
import renderLogin from "./pages/login/login.js";
import renderUsers from "./pages/users/users.js";

export default function () {
  const router = new Navigo("/", { hash: true });

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
      users: () => {
        renderUsers().then(router.updatePageLinks);
      },
      "/user/:id/": ({ data, params }) => {
        renderUser(data.id);
      },
    })
    .resolve();
}
