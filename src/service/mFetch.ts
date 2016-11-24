/**
 * Created by lixiaoyang on 2016/11/24.
 */
import {message} from 'antd';

const form2Form = (form: any) => {
  let formData = new FormData();
  for (let i in form) {
    formData.append(i, form[i]);
  }
  return formData;
};

export const mFetch = (url: string, form: any) => {
  const formData = form2Form(form);
  return fetch(url, {
    credentials: 'same-origin',
    method: 'POST',
    body: formData
  })
    .then((response: any) => response.json())
    .then((response: any) => {
      if (response.msg) {
        message.info(response.msg);
      }
      return response;
    });
};