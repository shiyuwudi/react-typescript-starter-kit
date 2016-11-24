const form2Form = (form: any) => {
  let formData = new FormData();
  for (let i in form) {
    formData.append(i, form[i]);
  }
  return formData;
};
export const listApi = (form: any) => {
  const formData = form2Form(form);
  return fetch('/erp/brand_list.htm', {
    credentials: 'same-origin',
    method: 'POST',
    body: formData
  })
    .then((response: any) => response.json());
};
export const editApi = (form: any) => {
  const formData = form2Form(form);
  return fetch('/erp/brand_load.htm', {
    credentials: 'same-origin',
    method: 'POST',
    body: formData
  })
    .then((response: any) => response.json());
};
export const saveApi = (form: any) => {
  const formData = form2Form(form);
  return fetch('/erp/brand_save.htm', {
    credentials: 'same-origin',
    method: 'POST',
    body: formData
  })
    .then((response: any) => response.json());
};