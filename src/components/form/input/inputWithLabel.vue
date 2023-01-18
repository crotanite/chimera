<template>
    <div class="flex flex-col space-y-1">
        <ChiLabel
            :description="props.description"
            :label="props.label"
        />
        <ChiInput v-bind="boundProps" @update:model-value="emits('update:modelValue', $event)" />
        <ChiError :content="error" />
    </div>
</template>

<script setup lang="ts">
import ChiInput from './input.vue'
import { ChiError } from '../error'
import { ChiLabel } from '../label'
import { formInputProps, formInputWithLabelProps, FormInputWithLabelProps } from './input.typings'
import useBoundProps from '../../../composables/useBoundProps'
import useGenerateProps from '../../../composables/useGenerateProps'

const setProps = defineProps(formInputWithLabelProps)
const props = useGenerateProps(setProps, 'formInput') as FormInputWithLabelProps
const emits = defineEmits(['update:modelValue'])

const boundProps = useBoundProps(formInputProps, props)
delete boundProps.modelValue
</script>
