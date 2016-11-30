export const listApi = (form: any) => {
  let a = {
    url: '/erp/load_usertable.htm?callback=callback',
    method: 'post',
    data: form,
    type: 'jsonp',
  };
  let b = {
    url: '/erp/update_usertable.htm?callback=callback',
    method: 'post',
    data: form,
    type: 'jsonp',
  };

  return form;
};

export const listApi2 = (form: any) => {

};

