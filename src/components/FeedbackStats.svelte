<script>
    import { FeedbackStore } from "../stores.js";

    $: count = $FeedbackStore.length;
    $: average = ($FeedbackStore.reduce((acc, item) => acc + item.rating, 0) / $FeedbackStore.length).toFixed(1);
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Rating Average: {average}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>