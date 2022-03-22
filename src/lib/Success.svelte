<script lang="ts">
  import { CheckCircle2 } from 'lucide-svelte';

  import { formStore } from '../formStore';
  import { statusStore } from '../statusStore';

  function closeWindow() {
    window.close();
  }
  function reset() {
    formStore.reset();
    statusStore.setIdle();
  }
</script>

{#if $statusStore.type === 'success'}
  <div class="text-center">
    <CheckCircle2 class="mx-auto mb-8 h-32 w-32 text-green-900" />
    <div class="mb-16 text-center text-4xl font-medium text-gray-700">
      Ваш класс: <u>1 {$statusStore.payload}</u>
    </div>
    <button type="button" class="btn btn--primary mb-4 w-full" on:click={reset}>
      Добавить еще
    </button>
    <button
      type="button"
      class="btn btn--secondary w-full"
      on:click={closeWindow}
    >
      Закрыть
    </button>
  </div>
{/if}
