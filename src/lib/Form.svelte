<script lang="ts">
  import { Loader2 } from 'lucide-svelte';

  import { formStore } from '../formStore';
  import { statusStore } from '../statusStore';
  import { addRow } from '../api';

  async function submit() {
    statusStore.setLoading();
    try {
      const res = await addRow({ ...$formStore });
      statusStore.setSuccess({ letter: res.data.letter as string, fullName: $formStore.fullName });
    } catch (e) {
      statusStore.setError(e.message);
    }
  }
</script>

<div class="mb-8 text-center">
  <h2 class="title">Анкета первоклассника</h2>
</div>
<form on:submit|preventDefault={submit}>
  <fieldset class="space-y-8" disabled={$statusStore.type === 'loading'}>
    <div>
      <label for="fullName" class="label">Фамилия Имя Отчество</label>
      <input
        bind:value={$formStore.fullName}
        type="text"
        name="off_fullName"
        id="fullName"
        class="input"
        autocomplete="off"
        required
      />
    </div>
    <div>
      <label for="birthDate" class="label">
        Дата рождения в формате: 31.12.2000
      </label>
      <input
        bind:value={$formStore.birthDate}
        type="text"
        name="off_birthDate"
        id="birthDate"
        class="input"
        autocomplete="off"
        required
      />
    </div>
    <div>
      <label for="address" class="label">
        Адрес проживания с указанием населенного пункта
      </label>
      <input
        bind:value={$formStore.address}
        type="text"
        name="off_address"
        id="address"
        class="input"
        autocomplete="off"
        required
      />
    </div>
    <button type="submit" class="btn btn--primary w-full">
      {#if $statusStore.type === 'loading'}
        <Loader2 class="animate-spin" />
      {:else}
        Подтвердить
      {/if}
    </button>
  </fieldset>
</form>
