
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