<template>
    <div class="flex flex-col space-y-1">
        <ChiLabel
            :description="props.description"
            :label="props.label"
        />
        <ChiNativeSelect v-bind="boundProps" @update:model-value="emits('update:modelValue', $event)">
            <slot />
        </ChiNativeSelect>
        <ChiError :content="error" />
    </div>
</template>

<script setup lang="ts">
import ChiNativeSelect from './native-select.vue'
import { ChiError } from '../error'
import { ChiLabel } from '../label'
import { formNativeSelectProps, formNativeSelectWithLabelProps, FormNativeSelectWithLabelProps } from './native-select.typings'
import useBoundProps from '../../../composables/useBoundProps'
import useGenerateProps from '../../../composables/useGenerateProps'

const setProps = defineProps(formNativeSelectWithLabelProps)
const props = useGenerateProps(setProps, 'formNativeSelect') as FormNativeSelectWithLabelProps
const emits = defineEmits(['update:modelValue'])

const boundProps = useBoundProps(formNativeSelectProps, props)
delete boundProps.modelValue
</script>
