<template>
    <slot />
</template>

<script setup lang="ts">
import { nextTick, provide, ref } from 'vue'
import themeProps from './theme-provider.typings'

const props = defineProps(themeProps)
const show = ref(false)
setTimeout(() => show.value = true, 1000)

provide('theme', ref(props.theme))
</script>

<script lang="ts">
export default {
    name: 'ChiThemeProvider'
}
</script>
