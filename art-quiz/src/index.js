import Start from './modules/pages/start.js';
import Category from './modules/pages/category.js';
// import Error404     from './modules/pages/error404.js'
import Quiz from './modules/pages/quiz.js';
// import Register     from './modules/pages/register.js'

import Utils from './modules/services/utils.js';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  '/': Start,
  '/category': Category,
  '/quiz': Quiz,
  // , '/p/:id'      : PostShow
  // , '/register'   : Register
};

// The router code.
// Takes a URL, checks against the list of supported routes and
// then renders the corresponding content page.
const router = async () => {
  const content = null || document.getElementById('app');

  // Get the parsed URl from the addressbar
  const request = Utils.parseRequestURL();

  // Parse the URL and if it has an id part, change it with the string ":id"
  const parsedURL = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.verb ? `/${request.verb}` : '');

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  const Page = routes[parsedURL]; // ? routes[parsedURL] : Error404
  const newPage = new Page();
  content.innerHTML = await newPage.render();
  await newPage.afterRender();
};

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
