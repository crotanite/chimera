<template>
    <ChiScreen class="flex items-stretch overflow-hidden">
        <slot
            :toggle-drawer="toggleDrawer"
        />
    </ChiScreen>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import { injectOffcanvasName } from './offcanvas.typings'
import { ChiScreen } from '../screen'

const openDrawers = ref<Array<string>>([])
const toggleDrawer = (value: string) => {
    if(openDrawers.value.includes(value)) {
        const index = openDrawers.value.indexOf(value)
        openDrawers.value.splice(index, 1)
    } else {
        openDrawers.value.push(value)
    }
}

provide(injectOffcanvasName, {
    openDrawers,
    toggleDrawer
})
</script>
