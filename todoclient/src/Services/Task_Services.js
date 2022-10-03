import axios from 'axios';
const apiURL = "http://localhost:8080/api/tasks";

export function getTasks(){
    return axios.get(apiURL);
}

export function addTasks(task){
    return axios.post(apiURL, task);
}

export function updateTasks(id, task){
    return axios.put(apiURL + "/" + id, task);
}

export function deleteTasks(id){
    return axios.delete(apiURL + "/" + id);
}