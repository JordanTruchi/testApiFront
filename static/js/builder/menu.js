import { buildTitle as buildPageTitle, buildMainContainer as buildPageMainContainer, buildGlobalContainer as buildPageGlobalContainer } from './page.js';
import { buildPostFormTask, buildPatchFormTask } from './forms.js';
import { animationInDom, animationOutDom, animationMenuToCross, animationCrossToMenu } from '../animation/page.js';
import { listTask } from '../services/api.js';
import { APP } from '../env.js';
var isBuildMenuContainer = false;
var isMenuOpen = false;


export function buildMenuTask() {
    let circleMenu = document.createElement('div');
    circleMenu.classList.add('circleMenu');
    
    let bar1 = document.createElement('div');
    bar1.classList.add('bar1');
    
    let bar2 = document.createElement('div');
    bar2.classList.add('bar2');
    
    let bar3 = document.createElement('div');
    bar3.classList.add('bar3');
    
    circleMenu.append(bar1);
    circleMenu.append(bar2);
    circleMenu.append(bar3);
    
    circleMenu.addEventListener('click', () => menuTask(circleMenu, bar1, bar2, bar3));
    
    return circleMenu;
}    

function menuTask(circleMenu, bar1, bar2, bar3) {
    let menuContainer;
    let seeTaskContainer = document.getElementById('seeTask');
    if(!isBuildMenuContainer){
        menuContainer = buildMenuContainer();
        APP.append(menuContainer);
        isBuildMenuContainer = true;
    } else {
        menuContainer = document.getElementById('gestionTask');
    }
    if(!isMenuOpen) {
        animationOutDom(seeTaskContainer); 
        animationMenuToCross(circleMenu, bar1, bar2, bar3);
        animationInDom(menuContainer);
        isMenuOpen = true;
    }
    else {
        animationOutDom(menuContainer);
        animationCrossToMenu(circleMenu, bar1, bar2, bar3);
        animationInDom(seeTaskContainer);
        isMenuOpen = false;
    } 
}

function buildMenuContainer() {
    let pageTitle = buildPageTitle('Gestion des tâches quotidiennes');
    let gContainer = buildPageGlobalContainer();
    gContainer.id = "gestionTask";
    gContainer.append(pageTitle);
    let containMessage = document.createElement('div');
    containMessage.classList.add('containMessage');
    containMessage.innerHTML = "Liste des tâches";
    let container = buildPageMainContainer();
    let postContainer = buildPostContainer();
    container.append(postContainer);
    container.append(containMessage);
    buildPatchContainer().then((patchContainer) => {
        container.append(patchContainer);
    });
    gContainer.append(container);
    return gContainer;
    
}


function buildPostContainer() {
    let container = document.createElement('div');
    container.classList.add('postContainer');
    
    let titlePostContainer = document.createElement('h2');
    titlePostContainer.classList.add('adminTitle');
    titlePostContainer.innerHTML = 'Créer une tâche';
    
    let postForm = buildPostFormTask();
    
    container.append(titlePostContainer);
    container.append(postForm);
    
    return container;
}


async function buildPatchContainer() {
    let container = document.createElement('div');
    container.classList.add('patchContainer');
    
    let titlePatchContainer = document.createElement('h2');
    titlePatchContainer.classList.add('adminTitle');
    titlePatchContainer.innerHTML = 'Modifier une tâche';
    container.append(titlePatchContainer);
    let tasks = await listTask();
    let patchForm = buildPatchFormTask(tasks);
    container.append(patchForm);
    
    return container;
}

