<template>
    <ChiToggle color="system" name="dark-toggle" v-model="isDark">
        <template #icon>
            <MoonIcon v-if="isDark" class="text-blue-500 h-3 w-3" />
            <SunIcon v-else class="text-yellow-500 h-4 w-4" />
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
