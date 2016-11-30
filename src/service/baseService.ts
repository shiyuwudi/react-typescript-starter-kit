import reqwest = require('reqwest');

export const load_usertable = (form: any) => {
  return reqwest({
    url: '/erp/load_usertable.htm?callback=callback',
    type: 'jsonp',
    method: 'post',
    data: form
  });
};

export const update_usertable = (form: any) => {
  return reqwest({
    url: '/erp/update_usertable.htm?callback=callback',
    type: 'jsonp',
    method: 'post',
    data: form
  });
};

export const get_username = (form: any) => {
  return reqwest({
    url: '/erp/get_username.htm?callback=callback',
    type: 'jsonp',
    method: 'post',
    data: form
  });
};

export const fetchMenu = (form: any) => {
  return reqwest({
    url: '/erp/menuDisplay.htm',
    type: 'json',
    method: 'post',
    data: form
  });
};
