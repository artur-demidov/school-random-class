<script lang="ts">
  import { onMount } from 'svelte';
  import { Settings } from 'lucide-svelte';

  import Form from './lib/Form.svelte';
  import Error from './lib/Error.svelte';
  import Success from './lib/Success.svelte';
  import SetPassword from './lib/SetPassword.svelte';
  import { statusStore } from './statusStore';

  onMount(() => {
    const savedPassword = localStorage.password;
    if (!savedPassword) {
      statusStore.setPassword();
    }
  });
</script>

<main class="relative flex h-screen py-8 px-4">
  <button
    on:click={statusStore.setPassword}
    class="absolute right-4 top-4 rounded-full border-none bg-none p-3 text-gray-700 hover:bg-indigo-100"
  >
    <Settings />
  </button>
  <div class="m-auto w-full max-w-lg">
    {#if $statusStore.type === 'error'}
      <Error />
    {:else if $statusStore.type === 'password'}
      <SetPassword />
    {:else if $statusStore.type === 'idle' || $statusStore.type === 'loading'}
      <Form />
    {:else}
      <Success />
    {/if}
  </div>
</main>
