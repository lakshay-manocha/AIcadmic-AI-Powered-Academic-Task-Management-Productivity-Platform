import { apiClient } from "./ApiClient";

export const executeBasicAuthenticationServices = (token) => 
    apiClient.get('/basicauth',{ 
        headers: {
            Authorization: token
        }
    });

export const retrieveAllTodosForUsernameApi = (username, token) => 
    apiClient.get(`/users/${username}/todos`, {
        headers: {
            Authorization: token
        }
    });

export const deleteTodoApi
= (username, id, token) => 
    apiClient.delete(`/users/${username}/todos/${id}`, {
        headers: {
            Authorization: token
        }
    }
    );

export const retrieveTodoApi
= (username, id, token) => 
    apiClient.get(`/users/${username}/todos/${id}`, {
        headers: {
            Authorization: token
        }
    });
export const updateTodoApi
= (username, id, todo, token) => 
    apiClient.put(`/users/${username}/todos/${id}`, todo, {
        headers: {
            Authorization: token
        }
    });
export const createTodoApi
= (username, todo, token) => 
    apiClient.post(`/users/${username}/todos`, todo, {
        headers: {
            Authorization: token
        }
    });