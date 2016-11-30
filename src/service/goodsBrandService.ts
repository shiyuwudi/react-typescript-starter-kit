import reqwest = require('reqwest');

export const listApi = (form: any) => {
  return reqwest({
    url: '/erp/brand_list.htm',
    type: 'json',
    method: 'post',
    data: form
  });
};
export const editApi = (form: any) => {
  return reqwest({
    url: '/erp/brand_load.htm',
    type: 'json',
    method: 'post',
    data: form
  });
};
export const saveApi = (form: any) => {
  return reqwest({
    url: '/erp/brand_save.htm',
    type: 'json',
    method: 'post',
    data: form
  });
};
export const deleteApi = (form: any) => {
  return reqwest({
    url: '/erp/brand_del.htm',
    type: 'json',
    method: 'post',
    data: form
  });
};