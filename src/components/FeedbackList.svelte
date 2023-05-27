<script>
    import {scale, fade} from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";
    import {FeedbackStore} from "../stores.js";
    // import {onDestroy} from "svelte";
    //
    // let feedback = [];
    //
    // const unsubscribe = FeedbackStore.subscribe((val) => {
    //     feedback = val;
    // });
    //
    // onDestroy(() => {
    //     unsubscribe();
    // });
</script>

{#each $FeedbackStore as fb (fb.id)}
    <div in:scale out:fade={{ duration: 400 }}>
        <FeedbackItem item={fb} />
    </div>
{/each}