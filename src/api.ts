import { get } from 'svelte/store';

import { passwordStore } from './passwordStore';

const endpoint =
  'https://script.google.com/macros/s/AKfycbw0Twljv8HnpzVpdIBzBgIiXtBDhQoqfaIRmfUV8MAbVgkW_RyoILpMEZREe_V476WMSA/exec';

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
