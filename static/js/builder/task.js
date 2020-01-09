import { seeOneTask } from '../action/task.js';

export function buildTask(task) {
    let containTask = document.createElement('div');
    containTask.classList.add('containTask');
    containTask.id = task.id;

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
    contentTask.innerHTML = task.content;

    let seeMoreTask = document.createElement('div');
    seeMoreTask.classList.add('seeMoreTask');
    seeMoreTask.innerHTML = 'En savoir plus';

    seeMoreTask.addEventListener('click', () => seeOneTask(task.id));

    containTask.append(titleTask);
    containTask.append(containCategDateTask);
    containTask.append(contentTask);
    containTask.append(seeMoreTask);

    return containTask;
}

export function appendTask(task, container) {
    container.append(task);
}