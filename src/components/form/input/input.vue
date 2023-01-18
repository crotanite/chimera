<template>
    <input
        :class="form.classes()"
        :style="form.styles(hasError).value"
        :placeholder="props.placeholder ?? props.name"
        :type="props.type"
        :value="props.modelValue"
        @input="updateValue($event)"
    />
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import formInputProps, { FormInputProps } from './input.typings'
import { FormInject } from '../form.typings'
import useGenerateProps from '../../../composables/useGenerateProps'

const setProps = defineProps(formInputProps)
const props = useGenerateProps(setProps, 'formInput') as FormInputProps
const emits = defineEmits(['update:modelValue'])
const form = inject('form', null) as FormInject

const hasError = computed((): boolean => props.error !== null && props.error !== '')
const updateValue = (event: Event): void => {
    const target = event.target as HTMLInputElement
    emits('update:modelValue', target.value)
}
</script>
