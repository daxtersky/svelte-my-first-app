<script>
	import Child from './Child.svelte'
	export let name;
	let color = 'red'
	let variable = 'placeholder'
	let toggleText = true
	let frameworks = [
		{id:1, name: 'React'},
		{id:2, name: 'Angular'},
		{id:3, name:'Vue'},
		{id:4, name: 'Svelte'}
	]
	const changeColor = () => color = color === 'red' ? 'blue' : 'red'
	const showText = () => toggleText = !toggleText
	const addItem = () => {
		frameworks = [...frameworks, { id: findLastId(frameworks), name: getRandomText() }]
	}
	const findLastId = (arr) => arr[arr.length - 1]?.id + 1
	const getRandomText = () => {
		let result = ''
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
		for ( var i = 0; i < 7; i++ ) {
 		  result += characters.charAt(Math.floor(Math.random() * characters.length));
 		}
 		return result;
	}
	$: watcher = `This is our reactive (watched) variable: ${variable}`
	$: console.log(`Hello World! 👨‍🌾`);
	// $: console.log(`The variable is ${variable}`);
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<hr>
	<Child prop1={variable} {color} />
	<hr>
	<input bind:value={variable} />
	<p>Double binded variable: <strong>{variable}</strong></p>
	<button on:click={changeColor}>Change color</button>
	<p style="color: {color}">Watcher / reactive value: {watcher}</p>
	<button on:click={showText}>Toggle visibility</button>
	{#if toggleText}
		<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime error impedit qui molestiae enim, illum ut dolor, pariatur est tempore aperiam sunt laudantium illo. Inventore quas quam exercitationem voluptatum aspernatur!
		Ullam architecto eaque hic natus dolor repellat maiores quam placeat et sequi possimus numquam, culpa aliquam provident atque quisquam excepturi! Labore officia consequatur nihil alias et voluptatum illo delectus non.</p>
		{:else}
		<p>Some text hidden</p>
	{/if}
	<button on:click={addItem}>Add item</button>
	{#each frameworks as framework (framework.id)}
		<ul>
			<li>{framework.name}</li>
		</ul>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	/* :global(h1) { */
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>