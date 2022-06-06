import { writable } from 'svelte/store';

export const StoredString = writable('hello Svelte store!');
export const StoredNumber = writable(0);
export const StoredArray = writable(['a', 'b', 'c']);
