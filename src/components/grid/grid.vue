<template>
    <component
        :is="props.component"
        :class="classes"
        :style="styles"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import gridProps, { GridProps } from './grid.typings'
import useApplyGridParent from '../../composables/methods/classes/useApplyGridParent'
import useApplyGap from '../../composables/methods/styles/useApplyGap'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(gridProps)
const props = useGenerateProps(setProps, 'grid') as GridProps

const classes = computed((): Array<string> => {
    return [
        '',
        useApplyGridParent(props.grid, props.cols, props.flow, props.rows)
    ]
})
const styles = computed((): Object => {
    return {
        ...useApplyGap(props.gap, props.gapX, props.gapY)
    }
})
</script>
