<script lang="ts">
  import { statusStore } from '../statusStore';
  import { passwordStore } from '../passwordStore';

  let password = '';

  function save() {
    passwordStore.set(password);
    statusStore.setIdle();
  }
</script>

<form on:submit|preventDefault={save}>
  <fieldset class="space-y-8">
    <div>
      <label for="password" class="label">Пароль</label>
      <input
        bind:value={password}
        type="text"
        name="password"
        id="password"
        class="input"
        autocomplete="off"
        required
      />
    </div>
    <button type="submit" class="btn btn--primary w-full">Сохранить</button>
  </fieldset>
</form>
