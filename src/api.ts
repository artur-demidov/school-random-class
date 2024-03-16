const endpoint =
  'https://script.google.com/macros/s/AKfycbypl9Kwi_Mt9w_0nvPW_Omr8slyrsD4jDqy4Iy-BlR4rkCNwzT-5Mg3l7mQmu9ACz81zQ/exec';

type formType = {
  fullName: string;
  birthDate: string;
  address: string;
};

export async function addRow(form: formType) {
  return fetch(endpoint, {
    method: 'post',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify({
      ...form,
      password: localStorage.getItem('password'),
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.status === 'error') {
        throw new Error(json.message);
      } else {
        return json;
      }
    });
}
