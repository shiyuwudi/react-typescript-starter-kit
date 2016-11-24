import {mFetch} from './mFetch';

export const listApi = (form: any) => {
  return mFetch('/erp/brand_list.htm', form);
};
export const editApi = (form: any) => {
  return mFetch('/erp/brand_load.htm', form);
};
export const saveApi = (form: any) => {
  return mFetch('/erp/brand_save.htm', form);
};
export const deleteApi = (form: any) => {
  return mFetch('/erp/brand_del.htm', form);
};