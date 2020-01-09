import { animationOutDom } from './page.js';
import { getTask } from '../services/api.js';

export async function seeOneTask(id) {
    await animationOutDom();
    getTask(id).then(task => {
        
    })
    .catch(error => { console.log(error); });
 }