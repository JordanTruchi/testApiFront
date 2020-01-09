import { getAllTask } from './services/api.js';
import { buildTask, appendTask } from './builder/task.js';
import { buildTitle as buildPageTitle, buildMainContainer as buildPageMainContainer, buildGlobalContainer as buildPageGlobalContainer } from './builder/page.js';

gsap.registerPlugin(ScrollToPlugin);
const APP = document.getElementById('app');

function index() {
  let pageTitle = buildPageTitle('Gestion des tâches quotidiennes');
  let gContainer = buildPageGlobalContainer();
  gContainer.append(pageTitle);
  
  let container = buildPageMainContainer();

  getAllTask().then(tasks => {
    tasks.forEach(async task => {
      let domTask = await buildTask(task);
      await appendTask(domTask, container);
    });
  })
  .catch(error => { console.log(error); });

  gContainer.append(container);
  APP.append(gContainer);
}

index();