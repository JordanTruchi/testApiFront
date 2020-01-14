import { getAllTask } from './services/api.js';
import { buildTask, appendTask } from './builder/task.js';
/* import { buildFormTask } from './builder/forms.js'; */
import { buildMenuTask } from './builder/menu.js';
import { buildTitle as buildPageTitle, buildMainContainer as buildPageMainContainer, buildGlobalContainer as buildPageGlobalContainer } from './builder/page.js';
import { animationInDom } from './action/page.js';

gsap.registerPlugin(ScrollToPlugin);
const APP = document.getElementById('app');

function index() {
  /* let url = 'http://localhost/tasks'
  history.pushState({key:url}, '', url); */
  let pageTitle = buildPageTitle('Tâches quotidiennes');
  let gContainer = buildPageGlobalContainer();
  gContainer.append(pageTitle);
  gContainer.id = "seeTask"
  let container = buildPageMainContainer();

  getAllTask().then(tasks => {
    tasks.forEach(task => {
      let domTask = buildTask(task);
      appendTask(domTask, container);
      animationInDom(gContainer);
    });
  })
  .catch(error => { console.log(error); });
  let menuTask = buildMenuTask();
  APP.append(menuTask);
  gContainer.append(container);
  /* let postTask = buildFormTask();
  APP.append(postTask); */
  APP.append(gContainer);
}

index();