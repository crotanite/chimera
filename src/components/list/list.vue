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
import { computed, provide } from 'vue'
import listProps, { listInjectKey, ListProps } from './list.typings'
import useApplyRounded from '../../composables/methods/styles/useApplyRounded'
import useApplySpacing from '../../composables/methods/classes/useApplySpacing'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(listProps)
const props = useGenerateProps(setProps, 'list') as ListProps

const classes = computed((): Array<string> => {
    return [
        'flex flex-col overflow-hidden',
        useApplySpacing(props.spacing, props.spacingX, props.spacingY),
    ]
})
const styles = computed((): object => {
    return {
        ...useApplyRounded(props.rounded),
    }
})

provide(listInjectKey, props)
</script>
