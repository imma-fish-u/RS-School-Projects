import Start from './modules/pages/start.js';
import Category from './modules/pages/category.js';
import Quiz from './modules/pages/quiz.js';
import Final from './modules/pages/final.js';
import Score from './modules/pages/score.js';
import Utils from './modules/services/routeUtils.js';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  '/': Start,
  '/start': Start,
  '/category': Category,
  '/quiz': Quiz,
  '/score': Score,
  '/final': Final,
};

// The router code.
// Takes a URL, checks against the list of supported routes and
// then renders the corresponding content page.
const router = async () => {
  const content = null || document.getElementById('app');

  // Get the parsed URl from the addressbar
  const request = Utils.parseRequestURL()[0];

  // Parse the URL and if it has an id part, change it with the string ":id"
  const parsedURL = request ? `/${request}` : '/';

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  const Page = routes[parsedURL]; // ? routes[parsedURL] : Error404
  const newPage = new Page();

  content.classList.add('hide');
  await Utils.sleep(500);

  content.innerHTML = await newPage.render();
  content.classList.remove('hide');

  await newPage.afterRender();
};

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);

console.log(`
Ваша оценка - 200 баллов

Feedback: доп фичи не реализовала, регулятор громкости есть, но не рабочий, второго вида квиза нет (мб здесь нужно больше баллов отнять - я отняла только 10, с другой стороны по оценке именно часть вопросов не так много и говорится именно про функционал именно двух игр)

Анимации: 
1. звездочки на стартовой странице
2. выезд окна настроек
3. выезд модального меню
4. движение свитчей в настройках 

Отзыв по пунктам ТЗ:

Не выполненные/не засчитанные пункты:

1) в настройках есть возможность включать/выключать звук, есть регулятор громкости звука. Если звук включён, есть звуковая индикация правильных и неправильных ответов, звуковое сопровождение окончания раунда

2) дополнительными баллами оценивается очень высокое качество оформления приложения, продуманность отдельных деталей интерфейса, улучшающие внешний вид приложения и удобство пользования им, а также выполненный на высоком уровне и сложный в реализации свой собственный дополнительный функционал, существенно улучшающий качество и/или возможности приложения

Частично выполненные пункты:

1) вёрстка, дизайн, UI страницы с вопросами. Выполняются требования к вёрстке и оформлению приложения. Вопросы в викторине идут в том порядке, в каком информация про картины и их авторов размещается в коллекции исходных данных.

2) варианты ответов на вопросы генерируются случайным образом. В вариантах ответов на вопросы викторины должен быть правильный ответ и только один. Правильный ответ в разных вопросах должен находиться на разных местах, а не, например, всегда быть только первым. Варианты ответов должны быть разными. В вариантах ответов не должны повторяться картины одного и того же художника.`)
