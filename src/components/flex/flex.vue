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
import flexProps, { FlexProps } from './flex.typings'
import useApplyFlexParent from '../../composables/methods/classes/useApplyFlexParent'
import useApplyGap from '../../composables/methods/styles/useApplyGap'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(flexProps)
const props = useGenerateProps(setProps, 'flex') as FlexProps

const classes = computed((): Array<string> => {
    return [
        '',
        useApplyFlexParent(true, props.flexDirection, props.flexItems, props.flexJustify, props.flexWrap),
    ]
})
const styles = computed((): object => {
    return {
        ...useApplyGap(props.gap, props.gapX, props.gapY),
    }
})
</script>
