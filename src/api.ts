import { get } from 'svelte/store';

import { passwordStore } from './passwordStore';

const endpoint =
  'https://script.google.com/macros/s/AKfycbySfFq7JdLPkAi12DjthHHTR4I5XiOq2048-oNv2hoS7jfU_iNEhe6NFSCKoXGTgykdEQ/exec';

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
