<template>
    <div v-if="typeof component !== 'undefined' && component !== null">
        <component class="h-full" :is="component" v-if="!loading || keepWhenLoading" />
        <!-- <ArrowPathIcon class="h-full spin" v-else /> -->
    </div>
</template>

<script setup lang="ts">
defineProps({
    component: {
        type: Function,
        component: null
    },

    keepWhenLoading: {
        type: Boolean,
        default: false
    },

    loading: {
        type: Boolean,
        default: false,
    }
})
</script>
