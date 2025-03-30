import { writable } from 'svelte/store';

type successPayload = { fullName: string, letter: string };

type statusType =
  | { type: 'idle' }
  | { type: 'loading' }
  | { type: 'password' }
  | { type: 'success'; payload: successPayload }
  | { type: 'error'; payload: string };

function createStatusStore() {
  const { subscribe, set } = writable<statusType>({ type: 'password' });

  return {
    set,
    subscribe,
    setIdle: () => set({ type: 'idle' }),
    setLoading: () => set({ type: 'loading' }),
    setPassword: () => set({ type: 'password' }),
    setSuccess: (payload: successPayload) => set({ type: 'success', payload }),
    setError: (payload: string) => set({ type: 'error', payload }),
  };
}

export const statusStore = createStatusStore();
