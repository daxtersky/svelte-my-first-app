<script>
	import Child from "./Child.svelte";
	import Button from './Button.svelte';

	export let name;
	let color = "#ff3e00";
	let variable = "placeholder";
	let toggleText = true;
	let frameworks = [
		{ id: 1, name: "React" },
		{ id: 2, name: "Angular" },
		{ id: 3, name: "Vue" },
		{ id: 4, name: "Svelte" },
	];
	let elementsFromChild = []
	const changeColor = () => color = getRandomColor();
	const showText = () => (toggleText = !toggleText);
	const addItem = () => {
		frameworks = [
			...frameworks,
			{ id: findLastId(frameworks), name: getRandomText() },
		];
	};
	const findLastId = (arr) => arr[arr.length - 1]?.id + 1;
	const getRandomText = () => {
		let result = "";
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		for (var i = 0; i < 7; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		return result;
	};
	const getRandomColor = () =>  {
  	let letters = '0123456789ABCDEF';
  	let color = '#';
  	for (var i = 0; i < 6; i++) {
  	  color += letters[Math.floor(Math.random() * 16)];
  	}
		console.log('getRandomColor',color );
  	return color;
	}
	const receiveEventFromChild = (e) => {
		console.log('event from child received! with param: ', e.detail)
		elementsFromChild = [...elementsFromChild, +e.detail]
	};

	$: watcher = `This is our reactive (watched) variable: ${variable}`;
	$: console.log(`Hello World! 👨‍🌾`); // Called on initialization, creation of the component
	$: console.log(`Console log shown with each ${variable} change`);
</script>

<main>
	<h2 style="color: {color}">Hello {name}! 👨‍🌾</h2>
	<input bind:value={variable} />
	<p>Double binded variable: <strong>{variable}</strong></p>
	<button on:click={changeColor}>Get random color</button>
	<button on:click={changeColor}>Get random color</button>
	<p style="color: {color}">Watcher / reactive value: {watcher}</p>
	<button on:click={showText}>Toggle visibility</button>
	{#if toggleText}
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime error
			impedit qui molestiae enim, illum ut dolor... 🥸
		</p>
	{:else}
		<p>Here's top secred, well hidden text! 🏴‍☠️</p>
	{/if}
	<button on:click={addItem}>Add item</button>
	{#each frameworks as framework (framework.id)}
		<ul>
			<li>{framework.name}</li>
		</ul>
	{/each}
	<p>Elements from child:</p>
	{#each elementsFromChild as childElement }
		<span>{childElement}, </span>
	{/each}
	<hr />
	<Child prop1={variable} {color} on:emit-event={receiveEventFromChild} />
	<hr />
	<p>Scoped components</p>
	<Button>One</Button>
	<Button style='secondary'>Two</Button>
	<Button disabled>Three</Button>


</main>

<style>
	:global(h2) {
		font-size: 4em;
	}
	:global(h3) {
		font-size: 2em;
	}
	:global(h2),
	:global(h3) {
		font-family: Verdana;
		text-transform: uppercase;
		font-weight: 100;
	}

	:global(p) {
		font-family: Verdana;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
