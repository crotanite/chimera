<template>
    <component
        :is="props.component"
        :class="classes"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed, ComputedRef, provide } from 'vue'
import formProps, { FormProps } from './form.typings'
import useApplyBorder from '../../composables/methods/styles/useApplyBorder'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useApplyDisabled from '../../composables/methods/styles/useApplyDisabled'
import useApplyPadding from '../../composables/methods/styles/useApplyPadding'
import useApplyRounded from '../../composables/methods/styles/useApplyRounded'
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
const inputClasses = (withHeight: boolean = true) => {
    return [
        'overflow-hidden text-sm',
        withHeight ? 'h-[38px]' : null,
    ]
}
const inputStyles = (hasError: null|boolean = null, disabled: boolean = false) => {
    return computed(() => {
        return {
            ...useApplyColor(null, {
                system: {
                    default: {
                        filled: {
                            lightBorderColor: 200,
                            darkBorderColor: 700
                        }
                    }
                }
            }, 'system', 'filled', null, hasError !== null && hasError ? 'red' : null),
            ...useApplyBorder(props.border),
            ...useApplyDisabled(disabled),
            ...useApplyPadding(props.p, props.px, props.py),
            ...useApplyRounded(props.rounded),
        }
    })
}
provide('form', {
    classes: inputClasses,
    styles: inputStyles,
})
</script>
