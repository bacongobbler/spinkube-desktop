<script lang="ts">
  import svelteLogo from '../assets/svelte.svg'
  let isClicked: boolean = false
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<div class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  <button class="flex content-center" on:click={() => { isClicked = !isClicked; increment() }}>
    <div class="flex items-center gap-1">
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
      <span>count is {count}</span>
    </div>
  </button>
</div>
