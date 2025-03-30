<script lang="ts">
  import { statusStore } from '../statusStore';

  function retry() {
    statusStore.setIdle();
  }
</script>

{#if $statusStore.type === 'error'}
  <div class="mb-8 rounded-md bg-red-200 p-4 text-sm font-medium text-red-500">
    Ошибка "{$statusStore.payload}", пожалуйста сообщите руководителю и
    повторите попытку
  </div>
  <button on:click={retry} class="btn btn--primary w-full">Повторить</button>
{/if}
