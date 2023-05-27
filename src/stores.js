import {writable} from "svelte/store";

export const FeedbackStore = writable([
    { id: 1, rating: 10, text: 'This is a test feedback' },
    { id: 2, rating: 9, text: 'This is another test feedback' },
    { id: 3, rating: 6, text: 'This is a third test feedback' },
]);