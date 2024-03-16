import axios from 'axios'
import { getToken } from './Auth'

export const BASEURL = 'https://stopnchop-dev.herokuapp.com'

export const apiBaseUrl = `${BASEURL}`

var token = getToken()

export function getCommonHeaders(h) {
  var headers = {
    'Content-Type': 'application/json',
  }
  var token = getToken()
  if (token) headers.Authorization = `Bearer ${token}`
  if (h) headers = { ...h, ...headers }
  return headers
}
export function getCommonHeadersFormData(h, noDefaultHeaders = false) {
  var myHeaders = new Headers()
  myHeaders.append('accept', '*/*')
  myHeaders.append('Authorization', 'Bearer ' + getToken())
  var headers = {
    method: 'PUT',
    headers: myHeaders,
    redirect: 'follow',
  }
  if (!noDefaultHeaders)
    Object.assign(headers, { 'Content-Type': 'multipart/form-data' })
  var token = getToken()
  if (token) headers.Authorization = `Bearer ${token}`
  if (h) headers = { ...h, ...headers }
  return headers
}

export function apiPost(endpoint, body, onSuccess, onFailure, headers) {
  axios
    .post(apiBaseUrl + endpoint, body, {
      headers: getCommonHeaders(headers),
    })
    .then((response) => {
      onSuccess(response.data)
    })
    .catch((error) => {
      onFailure(error)
    })
}

export function apiGet(endpoint, onSuccess, onFailure, headers) {
  axios
    .get(apiBaseUrl + endpoint, {
      headers: getCommonHeaders(headers),
    })
    .then((response) => {
      if (onSuccess) onSuccess(response.data)
    })
    .catch((error) => {
      if (onFailure) onFailure(error)
    })
}

export function apiPut(endPoint, body, onSuccess, onFailure, headers) {
  axios
    .put(apiBaseUrl + endPoint, body, {
      headers: getCommonHeaders(headers),
    })
    .then((response) => {
      onSuccess(response.data)
    })
    .catch((error) => {
      if (onFailure) onFailure(error)
    })
}

export function apiDelete(endpoint, onSuccess, onFailure, headers) {
  axios
    .delete(apiBaseUrl + endpoint, {
      headers: getCommonHeaders(headers),
    })
    .then((response) => {
      if (onSuccess) onSuccess(response.data)
    })
    .catch((error) => {
      if (onFailure) onFailure(error)
    })
}

export async function fileUpload(endpoint, file) {
  var myHeaders = new Headers()
  myHeaders.append('accept', '*/*')
  myHeaders.append('Contect-Type', 'multipart/form-data')
  myHeaders.append('Authorization', 'Bearer ' + token)
  var formdata = new FormData()
  formdata.append('image', file)
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  }

  return fetch(apiBaseUrl + endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result
    })
    .catch((error) => {
      return error
    })
}
