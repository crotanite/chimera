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
import { buttonGroupProps, injectButtonGroupName, ButtonGroupProps } from './button.typings'
import useApplyRounded from '../../composables/methods/styles/useApplyRounded'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(buttonGroupProps)
const props = useGenerateProps(setProps, 'buttonGroup') as ButtonGroupProps

const classes = computed((): Array<string> => {
    return [
        'inline-flex overflow-hidden',
    ]
})
const styles = computed(() => {
    return {
        ...useApplyRounded(props.rounded),
    }
})

provide(injectButtonGroupName, props)
</script>
