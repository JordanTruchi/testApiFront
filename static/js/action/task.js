import { animationOutDom } from './page.js';
import { getTask, postTask, deleteTask, patchTask } from '../services/api.js';

export async function seeOneTask(id) {
    await animationOutDom();
    /* let url = 'http://localhost/tasks/'+id;
    history.pushState({key:url}, '', url); */
    getTask(id).then(task => {
        console.log(task);
    })
    .catch(error => { console.log(error); });
 }


 export async function createTask(titleTask, dateTask, categTask, contentTask, imagesTask) {
    return new Promise((resolve, reject) => { 
        postTask(titleTask, dateTask, categTask, contentTask, imagesTask)
        .then(task => {
            resolve(task);
        })
        .catch(error => { reject(error); });
    });    
}

 export function updateTask(idTask, titleTask, dateTask, categTask, contentTask, imagesTask) {
    return new Promise((resolve, reject) => {
        patchTask(idTask, titleTask, dateTask, categTask, contentTask, imagesTask)
            .then(task => {
                resolve(task);
            })
            .catch(error => { reject(error); });   
    });
}

 export async function eraseTask(idTask) {
    return new Promise((resolve, reject) => {  
        deleteTask(idTask)
        .then(task => {
            resolve( task);
        })
        .catch(error => { reject(error); });
    });
 }