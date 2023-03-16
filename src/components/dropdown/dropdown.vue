<template>
    <div class="relative">
        <slot name="target" :toggle="toggle" :open="open" :close="close">
            <ChiButton content="Open" @click="toggle" />
        </slot>
        <div
            :class="['absolute', {
                'left-0': horizontal === 'left',
                'right-0': horizontal === 'right',
                'top-0': overlay,
            }]"
            ref="target"
            v-if="show"
        >
            <slot :toggle="toggle" :open="open" :close="close">
                <ChiDiv px="md" py="sm" color="system" variant="filled">
                    <slot name="content">content</slot>
                </ChiDiv>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { ChiButton } from '../button'
import { ChiDiv } from '../div'
import dropdownProps from './dropdown.typings'

const props = defineProps(dropdownProps)

/** Whether the dropdown is shown. */
const show = ref<boolean>(false)
/** The dropdown to target. */
const target = ref(null)

/**
 * Toggle the show state.
 * @returns {void}
 */
const toggle = (): void => {
    show.value = !show.value
}
/**
 * Open the dropdown.
 * @returns {void}
 */
const open = (): void => {
    show.value = true
}
/**
 * Close the dropdown.
 * @returns {void}
 */
const close = (): void => {
    show.value = false
}

onClickOutside(target, () => {
    if(!props.disableAutoClose) {
        if(show.value) {
            close()
        }
    }
})
</script>
