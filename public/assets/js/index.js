import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import PostView from "./views/PostView.js";
import Settings from "./views/Settings.js";

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", title: 'Dashboard', view: Dashboard },
    { path: "/posts", title: 'Posts', view: Posts },
    { path: "/posts/:id", title: 'PostView', view: PostView },
    { path: "/settings", title: 'Settings', view: Settings },
  ];
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });
  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );
  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }
  const view = new match.route.view(getParams(match));

  if (swal.getPopup() === null) {
    document.querySelector("#app").innerHTML = await view.getHtml();
  } else {
    document.title = localStorage.getItem("doctitle");
    history.pushState(null, null, localStorage.getItem("loc"));
    swal.close();
  }
  localStorage.setItem("loc", location.href);
  localStorage.setItem("doctitle", document.title);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    console.log(e);
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
