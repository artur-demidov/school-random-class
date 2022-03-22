import { writable } from 'svelte/store';

type statusType =
  | { type: 'idle' }
  | { type: 'loading' }
  | { type: 'password' }
  | { type: 'success'; payload: string }
  | { type: 'error'; payload: string };

function createStatusStore() {
  const { subscribe, set } = writable<statusType>({ type: 'idle' });

  return {
    set,
    subscribe,
    setIdle: () => set({ type: 'idle' }),
    setLoading: () => set({ type: 'loading' }),
    setPassword: () => set({ type: 'password' }),
    setSuccess: (payload: string) => set({ type: 'success', payload }),
    setError: (payload: string) => set({ type: 'error', payload }),
  };
}

export const statusStore = createStatusStore();
