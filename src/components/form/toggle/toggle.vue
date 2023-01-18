<template>
    <div
        :class="[{
            'border inline-block relative px-0.5 h-6 w-12 rounded-full': true,
            'cursor-pointer': !disabled,
            'cursor-not-allowed': disabled
        }]"
        :style="{
            ...useApplyColor(null, {
                system: {
                    default: {
                        filled: {
                            darkBackgroundColor: 700,
                            darkBorderColor: 600,
                            lightBackgroundColor: 200,
                            lightBorderColor: 300
                        }
                    }
                }
            }, isActive ? props.color : 'system', 'filled')
        }"
        @click="toggle"
        ref="el"
    >
        <div
            class="h-5 w-5 rounded-full flex items-center justify-center transition transition-[left] absolute top-1/2 -translate-y-1/2"
            :style="{...useApplyColor(null, null, 'system', 'filled'), ...leftPosIconSlot }"
            ref="iconSlot"
        >
            <slot name="icon" />
        </div>
        <div
            class="text-xs opacity-90 transition transition-[left] absolute top-1/2 -translate-y-1/2"
            :style="{ ...leftPosDefaultSlot }"
            ref="defaultSlot"
        >
            <slot>{{ props.content }}</slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import formToggleProps, { FormToggleProps } from './toggle.typings'
import useApplyColor from '../../../composables/methods/styles/useApplyColor'
import useGenerateProps from '../../../composables/useGenerateProps'

const emits = defineEmits(['update:modelValue'])
const setProps = defineProps(formToggleProps)

const props = useGenerateProps(setProps, 'formToggle') as FormToggleProps
const diff = 2
const el = ref<null|HTMLDivElement>(null)
const defaultSlot = ref<null|HTMLDivElement>(null)
const iconSlot = ref<null|HTMLDivElement>(null)

const isActive = computed(() => setProps.modelValue)
const leftPosDefaultSlot = computed((): { left: string } => {
    if(isActive.value !== true) {
        const elWidth = el.value !== null ? el.value.clientWidth : 0
        const defaultSlotWidth = defaultSlot.value !== null ? defaultSlot.value.clientWidth : 0
        const pos = elWidth - defaultSlotWidth - (diff * 2)
        return {
            left: `${pos}px`
        }
    } else {
        return {
            left: `${diff * 2}px`
        }
    }
})
const leftPosIconSlot = computed((): { left: string } => {
    if(isActive.value === true) {
        const elWidth = el.value !== null ? el.value.clientWidth : 0
        const iconSlotWidth = iconSlot.value !== null ? iconSlot.value.clientWidth : 0
        const pos = elWidth - iconSlotWidth - diff
        return {
            left: `${pos}px`
        }
    } else {
        return {
            left: `${diff}px`
        }
    }
})

const toggle = () => {
    if(!props.disabled) {
        emits('update:modelValue', !setProps.modelValue)
    }
}
</script>
