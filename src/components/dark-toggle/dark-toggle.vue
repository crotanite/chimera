<template>
    <ChiToggle color="system" name="dark-toggle" v-model="isDark">
        <template #icon>
            <slot :is-dark="isDark" />
        </template>
    </ChiToggle>
</template>

<script setup lang="ts">
import { isDark } from '../../composables/useDark'
import { ChiToggle } from '../../components/form/toggle'
</script>

<script lang="ts">
export default {
    name: 'ChiDarkToggle'
}
</script>
