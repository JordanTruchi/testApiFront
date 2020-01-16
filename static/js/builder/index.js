import { listTask } from '../services/api.js';
import { buildTask, appendTask } from './task.js';
import { buildMenuTask } from './menu.js';
import { buildTitle as buildPageTitle, buildMainContainer as buildPageMainContainer, buildGlobalContainer as buildPageGlobalContainer } from './page.js';
import { animationInDom } from '../animation/page.js';
import { APP } from '../env.js';

export async function index() {
  let pageTitle = buildPageTitle('Tâches quotidiennes');
  let gContainer = buildPageGlobalContainer();
  gContainer.append(pageTitle);
  gContainer.id = "seeTask"
  let container = buildPageMainContainer();

  let tasks = await listTask();
  tasks.forEach(task => {
    let domTask = buildTask(task);
    appendTask(domTask, container);
  });
  let menuTask = buildMenuTask();
  APP.append(menuTask);
  gContainer.append(container);
  APP.append(gContainer);
  animationInDom(gContainer);
}