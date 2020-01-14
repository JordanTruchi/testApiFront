
import { API_URL } from '../env.js';

export function getAllTask() {
        const url = `${API_URL}/tasks`;
        const config = new Headers({ 'Content-Type': 'application/json' });
        return new Promise((resolve, reject) => {
          fetch(url, {
            method: 'GET',
            headers: config
          })
            .then(res => { resolve(res.json()); })
            .catch(error => { reject(error); });
        });
}

export function getTask(id) {
  const url = `${API_URL}/tasks/${id}`;
  const config = new Headers({ 'Content-Type': 'application/json' });
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: config
    })
      .then(res => { resolve(res.json()); })
      .catch(error => { reject(error); });
  });
}

export function postTask(titleTask, dateTask, categTask, contentTask, imagesTask) {
  const url = `${API_URL}/tasks`;
  const formData = new FormData();
  formData.append('titleTask', titleTask);
  formData.append('dateTask', dateTask);
  formData.append('categTask', categTask);
  formData.append('contentTask', contentTask);

  // list
  for (let i = 0; i < imagesTask.length; i++) {
    formData.append('imageTask'+i, imagesTask[i]);
  }
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      /* headers: config, */
      body: formData
    })
      .then(res => { resolve(res.json()); })
      .catch(error => { reject(error); });
  });
}

export function deleteTask(idTask) {
  const url = `${API_URL}/tasks/${idTask}`;
  const config = new Headers({ 'Content-Type': 'application/json' });
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'DELETE',
      headers: config
    })
      .then(res => { resolve(res.json()); })
      .catch(error => { reject(error); });
  });
}

export function patchTask(idTask, titleTask, dateTask, categTask, contentTask, imagesTask) {
  const url = `${API_URL}/tasks/${idTask}`;
  const formData = new FormData();
  formData.append('titleTask', titleTask);
  formData.append('dateTask', dateTask);
  formData.append('categTask', categTask);
  formData.append('contentTask', contentTask);

  // list
  for (let i = 0; i < imagesTask.length; i++) {
    formData.append('imageTask'+i, imagesTask[i]);
  }
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => { resolve(res.json()); })
      .catch(error => { reject(error); });
  });
}