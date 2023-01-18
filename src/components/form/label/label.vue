<template>
    <div class="flex flex-col space-y-1 text-sm" v-if="props.label != '' || props.description != ''">
        <div class="font-bold" v-if="props.label !== '' && props.label !== null">
            <slot>{{ props.label }}</slot>
        </div>
        <div class="text-xs opacity-60" v-if="props.description !== '' && props.description !== null">
            <slot name="description">{{ props.description }}</slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import formLabelProps, { FormLabelProps } from './label.typings'
import useGenerateProps from '../../../composables/useGenerateProps'

const setProps = defineProps(formLabelProps)
const props = useGenerateProps(setProps, 'formLabel') as FormLabelProps
</script>
