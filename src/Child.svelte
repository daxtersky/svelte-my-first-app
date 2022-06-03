<script>
  export let prop1 = ''
  export let color = 'black'

  $: console.log('Hello world from child! 👶', );
</script>

<section>
  <p style="color: {color}">Hello from child.</p>
  <p style="color: {color}">Value from parent: <strong>{prop1}</strong></p>
  
</section>

<style>
/* p {
  color: {color}
} */
</style>