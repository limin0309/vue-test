//1、引入axios 不支持jsonp  需要下载第三方jsonp库
 import axios from 'axios';

export function getSliders() {
  return axios.get('/api/slider');//返回的是promise对象
}
export function getHot() {
  return axios.get('/api/hot');
}

export function getPeople() {
  return axios.get('/api/people');
}
//添加人物 需要传递一个data数据
export function addPeople(data) {
  return axios.post('/api/people',data)
}

export function removePeople(id) {
  return axios.delete('/api/people?id='+id)
}


