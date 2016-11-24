import {mFetch} from './mFetch';

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
  }

  return mFetch('/erp/brand_list.htm', form);
};

