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
import columnProps, { ColumnProps } from './column.typings'
import useApplyFlexChild from '../../composables/methods/classes/useApplyFlexChild'
import useApplyGridChild from '../../composables/methods/classes/useApplyGridChild'
import useApplyOrder from '../../composables/methods/classes/useApplyOrder'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(columnProps)
const props = useGenerateProps(setProps, 'column') as ColumnProps

const classes = computed((): Array<string> => {
    return [
        '',
        useApplyFlexChild(props.grow, props.shrink),
        useApplyGridChild(props.end, props.span, props.start),
        useApplyOrder(props.order),
    ]
})
const styles = computed((): object => {
    return {
        //
    }
})
</script>
