import { postTask, deleteTask, patchTask } from '../services/api.js';
import { buildTask } from './task.js';

export function buildPostFormTask() {
    let containFormTask = document.createElement('div');
    containFormTask.classList.add('containFormTask');
    
    let titleTask = document.createElement('input');
    titleTask.classList.add('inputTitleTask');
    titleTask.type = "text";
    titleTask.name = "titleTask";
    titleTask.placeholder = "Titre de la tâche";
    
    let dateTask = document.createElement('input');
    dateTask.classList.add('inputDateTask');
    dateTask.type = "date";
    dateTask.name = "dateTask";
    dateTask.placeholder = "Date de la tâche";
    
    let categTask = document.createElement('input');
    categTask.classList.add('inputCategTask');
    categTask.type = "text";
    categTask.name = "categTask";
    categTask.placeholder = "Catégorie de la tâche";
    
    let contentTask = document.createElement('textarea');
    contentTask.classList.add('inputContentTask');
    contentTask.name = "contentTask";
    contentTask.placeholder = "Contenu de la tâche...";
    
    let imagesTask = document.createElement('input');
    imagesTask.classList.add('inputImageTask');
    imagesTask.type = "file";
    imagesTask.name = "imagesFiles";
    imagesTask.multiple = "multiple";
    
    let submitTask = document.createElement('div');
    submitTask.classList.add('postButton');
    submitTask.innerHTML = 'Envoyer';
    submitTask.addEventListener('click', async () => {
            let createdTask = await postTask(titleTask.value, dateTask.value, categTask.value, contentTask.value, imagesTask.files);
            let containAllPatchTask = document.querySelector('.containAllPatchTask');
            let containTask = createAPatchTask(createdTask); 
            containAllPatchTask.prepend(containTask);
            let containMessage = document.querySelector('.containMessage');
            let containerAllTaskInMain = document.querySelector('#seeTask .container');
            let newTask = buildTask(createdTask);
            containerAllTaskInMain.prepend(newTask);
            containMessage.innerHTML = "La tâche a bien été créée"; 
    });
    
    containFormTask.append(titleTask, dateTask, categTask, contentTask, imagesTask, submitTask);
    return containFormTask;
}

export function buildPatchFormTask(tasks) {
    let containAllTask = document.createElement('div');
    containAllTask.classList.add('containAllPatchTask');
    tasks.forEach(task => {
        let containTask = createAPatchTask(task);
        containAllTask.append(containTask);
    });
    return containAllTask;
}

function createAPatchTask(task) {
    let containTask = document.createElement('div');
    containTask.classList.add('containPatchTask');
    
    let containId = document.createElement('div');
    containId.classList.add('patchIdTask');
    containId.innerHTML = task.id;
    
    let titleTask = document.createElement('input');
    titleTask.classList.add('patchInputTitleTask');
    titleTask.type = "text";
    titleTask.name = "patchTitleTask";
    titleTask.value = task.name;
    
    let dateTask = document.createElement('input');
    dateTask.classList.add('patchInputDateTask');
    dateTask.type = "date";
    dateTask.name = "patchDateTask";
    dateTask.value = task.date;
    
    let categTask = document.createElement('input');
    categTask.classList.add('patchInputCategTask');
    categTask.type = "text";
    categTask.name = "patchCategTask";
    categTask.value = task.categorie;
    
    let contentTask = document.createElement('textarea');
    contentTask.classList.add('patchInputContentTask');
    contentTask.name = "patchContentTask";
    contentTask.value = task.content;
    
    let imagesTask = document.createElement('input');
    imagesTask.classList.add('patchInputImageTask');
    imagesTask.type = "file";
    imagesTask.name = "patchImagesFiles";
    imagesTask.multiple = "multiple";
    
    let patchedTask = document.createElement('div');
    patchedTask.classList.add('patchButton');
    patchedTask.innerHTML = 'Modifier';
    
    patchedTask.addEventListener('click', async () => {
        let updatedTask = await patchTask(task.id, titleTask.value, dateTask.value, categTask.value, contentTask.value, imagesTask.files);
        let titleTaskUpdated = document.querySelector('#task_'+task.id+' .titleTask');
        titleTaskUpdated.innerHTML = updatedTask.name;
        
        let dateTaskUpdated = document.querySelector('#task_'+task.id+' .dateTask');
        dateTaskUpdated.innerHTML = updatedTask.date;
        
        let categTaskUpdated = document.querySelector('#task_'+task.id+' .categTask');
        categTaskUpdated.innerHTML = updatedTask.categorie;
        
        let contentTaskUpdated = document.querySelector('#task_'+task.id+' .contentTask');
        contentTaskUpdated.innerHTML = updatedTask.content;
        
        let imageTaskUpdated = document.querySelector('#task_'+task.id+' .imageTask');
        imageTaskUpdated.src = updatedTask.images[0].url;
        imageTaskUpdated.title = updatedTask.images[0].name;
        let containMessage = document.querySelector('.containMessage');
        containMessage.innerHTML = "La tâche numéro "+task.id+" a bien été modifiée";
    });
    
    let deletedTask = document.createElement('div');
    deletedTask.classList.add('deleteButton');
    deletedTask.innerHTML = 'Supprimer';
    
    deletedTask.addEventListener('click', async () => {
        await deleteTask(task.id);
        let elementToDestroyInMainList = document.getElementById('task_'+task.id);
        elementToDestroyInMainList.remove()
        containTask.remove();
        let containMessage = document.querySelector('.containMessage');
        containMessage.innerHTML = "La tâche numéro "+task.id+" a bien été supprimée";
    });
    
    containTask.append(containId);
    containTask.append(titleTask);
    containTask.append(dateTask);
    containTask.append(categTask);
    containTask.append(contentTask);
    containTask.append(imagesTask);
    containTask.append(patchedTask);
    containTask.append(deletedTask);
    
    return containTask;
}