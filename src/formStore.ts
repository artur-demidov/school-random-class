import { writable } from 'svelte/store';

const initialState = {
  fullName: '',
  birthDate: '',
  address: '',
};

function createFormStore() {
  const { subscribe, set, update } = writable(initialState);

  return {
    set,
    subscribe,
    reset: () => update((prevState) => ({ fullName: '', birthDate: '', address: prevState.address })),
  };
}

export const formStore = createFormStore();
