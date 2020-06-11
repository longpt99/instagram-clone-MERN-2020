import axios from 'axios';

export default function callApi(endpoint, method='GET', body=null, headers=null, params=null) {
  return axios({
    method: method,
    url: `/${endpoint}`,
    data: body,
    headers,
    params,
  })
}