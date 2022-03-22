const endpoint =
  'https://script.google.com/macros/s/AKfycbxQPg2eHzwTLVz67RpGoKciVC7kPncdsuJsS31AwIAnntpu8Jl93UhsOeL1t1OduWSRZA/exec';

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
