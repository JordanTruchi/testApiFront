import { getTask } from '../services/api.js';
import { buildTitle as buildPageTitle, /* buildMainContainer as buildPageMainContainer, */ buildGlobalContainer as buildPageGlobalContainer } from './page.js';
import { animationInDom, animationOutDom, animationHideMenu } from '../animation/page.js';
import { APP } from '../env.js';

let isBuildOneTaskView = false;

export function buildTask(task) {
    let containTask = document.createElement('div');
    containTask.classList.add('containTask');
    containTask.id = 'task_'+task.id;
    let imageTask = document.createElement('img');
    imageTask.classList.add('imageTask');
    imageTask.src = task.images[0].url;
    imageTask.title = task.images[0].name;
    
    let titleTask = document.createElement('h2');
    titleTask.classList.add('titleTask');
    titleTask.innerHTML = task.name;
    
    let containCategDateTask = document.createElement('div');
    containCategDateTask.classList.add('containCategDateTask');
    
    let categTask = document.createElement('p');
    categTask.classList.add('categTask');
    categTask.innerHTML = task.categorie;
    
    let separatorCategDate = document.createElement('span');
    separatorCategDate.classList.add('separatorCategDate');
    
    let dateTask = document.createElement('p');
    dateTask.classList.add('dateTask');
    dateTask.innerHTML = task.date;
    
    containCategDateTask.append(categTask);
    containCategDateTask.append(separatorCategDate);
    containCategDateTask.append(dateTask);
    
    let contentTask = document.createElement('p');
    contentTask.classList.add('contentTask');
    contentTask.innerHTML = task.content.truncAndAddPoints(true);
    
    let seeMoreTask = document.createElement('div');
    seeMoreTask.classList.add('seeMoreTask');
    seeMoreTask.innerHTML = 'En savoir plus';
    
    seeMoreTask.addEventListener('click', async () => {
        let choseTask = await getTask(task.id);
        let seeTaskContainer = document.getElementById('seeTask');
        let circleMenu = document.querySelector('.circleMenu');
        let oneTaskView;
        if(!isBuildOneTaskView) {
            oneTaskView = buildOneTaskView(choseTask.id);
            APP.append(oneTaskView);
            isBuildOneTaskView = true;
        } else {
            oneTaskView = document.getElementById('oneTaskView');
        }
        setDataOneTaskView(choseTask);
        animationOutDom(seeTaskContainer); 
        animationHideMenu(circleMenu)
        animationInDom(oneTaskView);
    });    
    containTask.append(imageTask);
    containTask.append(titleTask);
    containTask.append(containCategDateTask);
    containTask.append(contentTask);
    containTask.append(seeMoreTask);
    
    return containTask;
}

export function appendTask(task, container) {
    container.append(task);
}

String.prototype.truncAndAddPoints = function(useWordBoundary, numberToHave = 100) {
    if (this.length <= numberToHave) { return this; }
    var subString = this.substr(0, numberToHave-1);
    return (useWordBoundary 
        ? subString.substr(0, subString.lastIndexOf(' ')) 
        : subString) + "&hellip;";
};
    
function buildOneTaskView(id) {
    let pageTitle = buildPageTitle('Tâche numéro '+id);
    let gContainer = buildPageGlobalContainer();
    gContainer.id = "oneTaskView";
        
    let titleTask = document.createElement('h2');
    titleTask.classList.add('oneViewTitleTask');
    
    let containComeBackToIndex = document.createElement('div');
    containComeBackToIndex.classList.add('oneViewComeBack');
    containComeBackToIndex.innerHTML = 'X';

    containComeBackToIndex.addEventListener('click', () => {
        let indexContainer = document.getElementById('seeTask');
        animationOutDom(gContainer); 
        animationInDom(indexContainer);
    });    
        
    let containImages = document.createElement('div');
    containImages.classList.add('oneViewContainImg');
        
    let containCategDateTask = document.createElement('div');
    containCategDateTask.classList.add('oneViewContainCategDateTask');
        
    let separatorCategDate = document.createElement('span');
    separatorCategDate.classList.add('oneViewSeparatorCategDate');
        
    let categTask = document.createElement('p');
    categTask.classList.add('oneViewCategTask');
          
    let dateTask = document.createElement('p');
    dateTask.classList.add('oneViewDateTask');
        
    containCategDateTask.append(categTask);
    containCategDateTask.append(separatorCategDate);
    containCategDateTask.append(dateTask);
        
    let contentTask = document.createElement('p');
    contentTask.classList.add('oneViewContentTask');
        
        
    gContainer.append(pageTitle);
    gContainer.append(containComeBackToIndex);
    gContainer.append(containImages);
    gContainer.append(titleTask);
    gContainer.append(containCategDateTask);
    gContainer.append(contentTask);
        
    return gContainer;
}
    
function setDataOneTaskView(choseTask) {
    let titleTask = document.querySelector('.oneViewTitleTask');     
    let containImages = document.querySelector('.oneViewContainImg');
    let categTask = document.querySelector('.oneViewCategTask');
    let dateTask = document.querySelector('.oneViewDateTask');
    let contentTask = document.querySelector('.oneViewContentTask'); 
    titleTask.innerHTML = choseTask.name;
    categTask.innerHTML = choseTask.categorie;
    dateTask.innerHTML = choseTask.date;
    contentTask.innerHTML = choseTask.content;
        
    if(containImages.hasChildNodes()) {
        containImages.innerHTML = "";
    }
    choseTask.images.forEach(images => {
        let imageTask = document.createElement('img');
        imageTask.classList.add('oneViewImageTask');
        imageTask.src = images.url;
        imageTask.title = images.name;
        containImages.append(imageTask);
    });

}