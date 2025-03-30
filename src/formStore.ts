import { writable } from 'svelte/store';

const initialState = {
  fullName: '',
  birthDate: '',
  address: '',
};

function createFormStore() {
  const { subscribe, set } = writable(initialState);

  return {
    set,
    subscribe,
    reset: () => set({ ...initialState }),
  };
}

export const formStore = createFormStore();
