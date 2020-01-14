import { createTask, eraseTask, updateTask } from '../action/task.js';

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
    submitTask.addEventListener('click', () => {
        createTask(titleTask.value, dateTask.value, categTask.value, contentTask.value, imagesTask.files);
    });

    containFormTask.append(titleTask, dateTask, categTask, contentTask, imagesTask, submitTask);
    return containFormTask;
}

export function buildPatchFormTask(tasks) {

    let containMessage = document.createElement('div');
    containMessage.classList.add('containMessage');
    containMessage.innerHTML = "Liste des tâches";

    let containAllTask = document.createElement('div');
    containAllTask.classList.add('containAllPatchTask');
    containAllTask.append(containMessage);
    tasks.forEach(task => {
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

        let patchTask = document.createElement('div');
        patchTask.classList.add('patchButton');
        patchTask.innerHTML = 'Modifier';

        patchTask.addEventListener('click', async () => {
            let updatedTask = await updateTask(task.id, titleTask.value, dateTask.value, categTask.value, contentTask.value, imagesTask.files);
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
            containMessage.innerHTML = "La tâche numéro "+task.id+" a bien été modifiée";
        });

        let deleteTask = document.createElement('div');
        deleteTask.classList.add('deleteButton');
        deleteTask.innerHTML = 'Supprimer';

        deleteTask.addEventListener('click', async () => {
            await eraseTask(task.id);
            let elementToDestroyInMainList = document.getElementById('task_'+task.id);
            elementToDestroyInMainList.remove()
            containTask.remove();
            containMessage.innerHTML = "La tâche numéro "+task.id+" a bien été supprimée";
        });

        containTask.append(containId);
        containTask.append(titleTask);
        containTask.append(dateTask);
        containTask.append(categTask);
        containTask.append(contentTask);
        containTask.append(imagesTask);
        containTask.append(patchTask);
        containTask.append(deleteTask);
        containAllTask.append(containTask);
        
    });
    return containAllTask;
    /*

    let submitTask = document.createElement('div');
    submitTask.classList.add('postButton');
    submitTask.innerHTML = 'Envoyer';
    submitTask.addEventListener('click', () => {
        createTask(titleTask.value, dateTask.value, categTask.value, contentTask.value, imagesTask.files)
    });

    containFormTask.append(titleTask, dateTask, categTask, contentTask, imagesTask, submitTask);
    return containFormTask; */
}