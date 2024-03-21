<script lang="ts">
  import svelteLogo from '../assets/svelte.svg'
  let isClicked: boolean = false
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button class="bg-primary-100 hover:bg-primary-200 text-primary-600 font-bold py-2 px-4 rounded" on:click={() => { isClicked = !isClicked; increment() }}>
    Count is {count}
</button>
