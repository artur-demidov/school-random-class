import { get } from 'svelte/store';

import { passwordStore } from './passwordStore';

const endpoint =
  'https://script.google.com/macros/s/AKfycby81yzim2c5WvbXpbLKUP5uDFDB-BgXGmcWTGJb9A--AsSVkcj5Z2o86f_-EVpLxgvOig/exec';

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
      password: get(passwordStore),
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
