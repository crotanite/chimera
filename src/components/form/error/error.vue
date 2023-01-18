<template>
    <div
        v-if="props.content !== null && props.content !== ''"
        class="text-red-500 text-xs"
    >
        <slot>{{ props.content }}</slot>
    </div>
</template>

<script setup lang="ts">
import formErrorProps, { FormErrorProps } from './error.typings'
import useGenerateProps from '../../../composables/useGenerateProps'

const setProps = defineProps(formErrorProps)
const props = useGenerateProps(setProps, 'formError') as FormErrorProps
</script>
