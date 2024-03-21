<script lang="ts">
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <h1 class="font-bold text-4xl pb-20">Playing around with Svelte + Electron + TailwindCSS</h1>

  <div class="grid justify-center text-center py-4">
    <h2 class="font-semibold text-xl">Click me!</h2>
    <div class="py-2">
      <Counter />
    </div>
  </div>
</main>
