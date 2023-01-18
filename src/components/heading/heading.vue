<template>
    <component
        :is="`h1`"
        :class="classes"
        :style="styles"
    >
        <slot>{{ content }}</slot>
    </component>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import headingProps from './heading.typings'

const props = defineProps(headingProps)

const classes = computed((): Array<string> => {
    return [
        'font-bold font-heading',
        levelClass.value,
    ]
})
const styles = computed((): Object => {
    return {
        //
    }
})

const levelClass = computed((): string => {
    switch(props.level) {
        case 1: {
            return 'text-4xl'
        }
        case 2: {
            return 'text-3xl'
        }
        case 3: {
            return 'text-2xl'
        }
        case 4: {
            return 'text-xl'
        }
        case 5: {
            return 'text-lg'
        }
        case 6: {
            return 'text-base'
        }
    }
})
</script>
