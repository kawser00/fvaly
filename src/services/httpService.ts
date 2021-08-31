import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://fvaly.herokuapp.com/api',
  timeout: 15000, // 15sec
});

// axios always return response data into (response.data)
// response.data holo axios er, ar er pore (.data) holo ai project a je api use kora hoyeche setay .data er moddhe sob data ache

// ****************************************************************
/* const get = (url: string) => {
  return instance.get(url)
  .then((response:AxiosResponse) => response.data.data) 
}

const post = (url: string, body: object) => {
  return instance.post(url, body)
  .then((response:AxiosResponse) => response.data.data) 
}

const patch = (url: string, body: object) => {
  return instance.post(url, body)
  .then((response:AxiosResponse) => response.data.data) 
} 

const _delete = (url: string) => {
  return instance
    .delete(url)
    .then((response: AxiosResponse) => response.data.data);
}; // delete is a reserve keyword in JS, so we are using _delete
*/

// ************************CODE REFACTOR STAGE 2****************************************
// Here (.then((response:AxiosResponse) => response.data.data)) this one is common every where, so can separate it an callback function

/* 
const responseData = (response: AxiosResponse) => response.data.data;

const get = (url: string) => {
  return instance.get(url)
    .then(responseData);
};

const post = (url: string, body: object) => {
  return instance.post(url, body)
    .then(responseData);
};

const patch = (url: string, body: object) => {
  return instance.post(url, body)
    .then(responseData);
};

const _delete = (url: string) => {
  return instance.delete(url)
    .then(responseData);
};

*/

// ************************CODE REFACTOR STAGE 3 (take the code in one line)****************************************

/*
const responseData = (response: AxiosResponse) => response.data.data;

const get = (url: string) => instance.get(url).then(responseData);
const post = (url: string, body: object) => instance.post(url, body).then(responseData);
const patch = (url: string, body: object) => instance.post(url, body).then(responseData);
const _delete = (url: string) => instance.delete(url).then(responseData);
*/

// ************************CODE REFACTOR STAGE 4 (wrap all this function in one object)****************************************

const responseData = (response: AxiosResponse) => response.data.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseData),

  post: (url: string, body: object) =>
    instance.post(url, body).then(responseData),

  patch: (url: string, body: object) =>
    instance.post(url, body).then(responseData),

  delete: (url: string) => instance.delete(url).then(responseData),
};

export default requests;
