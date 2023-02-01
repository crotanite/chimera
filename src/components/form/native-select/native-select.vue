<template>
    <select
        :class="inputClasses()"
        :disabled="props.disabled"
        :style="inputStyles(props, hasError, !withoutHeight, props.disabled).value"
        :value="setProps.modelValue"
        @change="updateValue($event)"
    >
        <slot />
    </select>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import formNativeSelectProps, { FormNativeSelectProps } from './native-select.typings'
import { inputClasses, inputStyles } from '../form.typings'
import useGenerateProps from '../../../composables/useGenerateProps'

const setProps = defineProps(formNativeSelectProps)
const props = useGenerateProps(setProps, 'formNativeSelect', 'form') as FormNativeSelectProps
const emits = defineEmits(['update:modelValue'])

const hasError = computed((): boolean => props.error !== null && props.error !== '')
const updateValue = (event: Event): void => {
    const target = event.target as HTMLInputElement
    emits('update:modelValue', target.value)
}
</script>
