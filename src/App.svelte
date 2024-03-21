<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div class="flex w-screen bg-neutral-800 py-20 mb-10">
    <img src={svelteLogo} alt="Svelte logo" class="px-8" />
    <h1 class="font-bold text-4xl text-white text-center w-full">Svelte + Electron + TailwindCSS</h1>
  </div>

  <div class="grid justify-items-center">
    <div class="w-1/2">
      <div class="flex justify-center">
        <div class="py-2">
          <h2 class="font-semibold text-xl text-center py-2">Click me!</h2>
          <Counter />
        </div>
      </div>
    </div>
  </div>
</main>
