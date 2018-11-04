/* 
 * HTTP logic separated file for any later use with the most common HTTP request methods
 * {"POST", "GET", "PUT", "DELETE"} using Axios.
 */

import axios from "axios";

// get a specific response item by its id from the server
export const get = (url, id) =>
  axios.get(`${url}/${id}`).then(response => response.data);

// GET Request to obtain all desired data from the server
export const getAll = url => axios.get(url).then(response => response.data);

// Post Request for adding to the server
export const add = (url, data) =>
  axios.post(url, data).then(response => response.data);

// PUT Request for updating data on the server
export const update = (url, data) =>
  axios.put(`${url}/${data.id}`, data).then(response => response.data);

// DELETE Request for removing data from the server
export const remove = (url, id) =>
  axios.delete(`${url}/${id}`).then(response => response.data);
