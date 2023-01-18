<template>
    <div class="inline-flex items-center space-x-3">
        <ChiToggle v-bind="boundProps" @update:model-value="emits('update:modelValue', $event)" v-model="setProps.modelValue" />
        <ChiLabel :label="props.label" :description="props.description" />
    </div>
</template>

<script setup lang="ts">
import ChiToggle from './toggle.vue'
import { ChiLabel } from '../label'
import { formToggleProps, formToggleWithLabelProps, FormToggleWithLabelProps } from './toggle.typings'
import useBoundProps from '../../../composables/useBoundProps'
import useGenerateProps from '../../../composables/useGenerateProps'

const emits = defineEmits(['update:modelValue'])
const setProps = defineProps(formToggleWithLabelProps)
const props = useGenerateProps(setProps, 'formToggle') as FormToggleWithLabelProps
const boundProps = useBoundProps(formToggleProps, props)
delete boundProps.modelValue
</script>
