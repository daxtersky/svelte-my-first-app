<script>
  import { createEventDispatcher } from 'svelte'
  export let prop1 = ''
  export let color = 'black'

  let childContentVisible = false

  const dispatch = createEventDispatcher()

  const functionWithParam = (val) => randomNumber = getRandomNumber(val)
  const getRandomNumber = (val = 1000) => {
    let number = Math.floor(Math.random() * val)
    return number
  }
  const emitEvent = () => dispatch('emit-event', randomNumber)
  
  $: randomNumber = getRandomNumber()
  $: console.log('Hello world from child! 👶', );
</script>

<section>
  <h3 style="color: {color}">Hello from child! 👶</h3>
  <p style="color: {color}">Value from parent: <strong>{prop1}</strong></p>
  <button on:click="{() => childContentVisible = !childContentVisible}">Toogle child content with inline function</button>
  {#if childContentVisible}
    <p>Random number: {randomNumber}</p>
    <small>Each one is smaller than previous one</small>
    <br>
    <br>
    <button on:click={() => functionWithParam(randomNumber) }>Get random number from function with param</button>
    <!-- <button on:click={() => randomNumber = getRandomNumber() }>Get random number from function with param</button> -->
    <p>Emit function to parent component</p>
    <button on:click={emitEvent}>Emit {randomNumber}! 🚀</button>
  {/if}
  
</section>
