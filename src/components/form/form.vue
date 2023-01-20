<template>
    <component
        :is="props.component"
        :class="classes"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import formProps, { FormProps } from './form.typings'
import useApplySpacing from '../../composables/methods/classes/useApplySpacing'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(formProps)
const props = useGenerateProps(setProps, 'form') as FormProps

const classes = computed(() => {
    return [
        'flex flex-col',
        useApplySpacing(null, null, props.spacingY),
    ]
})
provide('form', props)
</script>
