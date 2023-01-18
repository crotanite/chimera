<template>
    <component
        :is="props.component"
        :class="classes"
        :style="styles"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed, nextTick, provide, ref } from 'vue'
import accordionProps, { injectAccordionName, AccordionProps } from './accordion.typings'
import useApplyRounded from '../../composables/methods/styles/useApplyRounded'
import useApplySpacing from '../../composables/methods/classes/useApplySpacing'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(accordionProps)
const props = useGenerateProps(setProps, 'accordion') as AccordionProps
const emits = defineEmits(['update:modelValue'])

const openItems = ref<null|string|Array<string>>(null)

const classes = computed((): Array<string> => {
    return [
        'flex flex-col overflow-hidden',
        useApplySpacing(props.spacing, props.spacingX, props.spacingY),
    ]
})
const styles = computed((): object => {
    return {
        ...(props.spacingY === 0 ? useApplyRounded(props.rounded) : {}),
    }
})

/**
 * Toggle opening/closing an accordion item.
 * @param val The value of the item to toggle.
 */
const toggle = (val: string) => {
    if(props.multiple) {
        if(!Array.isArray(openItems.value)) {
            const current = openItems.value
            openItems.value = []
            if (current !== null) {
                openItems.value.push(current)
            }
        }

        if(openItems.value.includes(val)) {
            const index = openItems.value.indexOf(val)
            openItems.value.splice(index, 1)
        } else {
            openItems.value.push(val)
        }
    } else {
        if(openItems.value === val) {
            openItems.value = null
        } else {
            openItems.value = val
        }
    }
    emits('update:modelValue', openItems.value)
}
/**
 * Set the open items from the modelValue.
 */
const setOpenItems = () => {
    openItems.value = props.modelValue
}

nextTick(setOpenItems)
provide(injectAccordionName, {
    ...props,
    openItems,
    toggle
})
</script>
