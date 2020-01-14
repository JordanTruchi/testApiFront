import { seeOneTask } from '../action/task.js';

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
    contentTask.innerHTML = task.content.trunc(true);

    let seeMoreTask = document.createElement('div');
    seeMoreTask.classList.add('seeMoreTask');
    seeMoreTask.innerHTML = 'En savoir plus';

    seeMoreTask.addEventListener('click', () => seeOneTask(task.id));

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


String.prototype.trunc =
     function(useWordBoundary, numberToHave = 100) {
         if (this.length <= numberToHave) { return this; }
         var subString = this.substr(0, numberToHave-1);
         return (useWordBoundary 
            ? subString.substr(0, subString.lastIndexOf(' ')) 
            : subString) + "&hellip;";
};