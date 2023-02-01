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
import { computed, inject, provide } from 'vue'
import { injectAccordionName, injectAccordionItemName, itemProps, AccordionProps, AccordionItemProps, InjectedAccordion } from './accordion.typings'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useApplyRounded from '../../composables/methods/styles/useApplyRounded'
import useGenerateProps from '../../composables/useGenerateProps'

interface FullProps extends AccordionProps, AccordionItemProps {}
const setProps = defineProps(itemProps)
const props = useGenerateProps(setProps, 'accordionItem', 'accordion') as FullProps
const accordion = inject(injectAccordionName, null) as InjectedAccordion

const classes = computed((): Array<string> => {
    return [
        'overflow-hidden'
    ]
})
const styles = computed((): object => {
    return {
        ...useApplyColor(null, null,
            getPropState('color'),
            getPropState('variant'),
            getPropState('backgroundColor'),
            getPropState('borderColor'),
            getPropState('textColor'),
            getPropState('shadowColor')
        ),
        ...(accordion.spacingY !== 0 ? useApplyRounded(getPropState('rounded')) : {}),
    }
})

/**
 * Check if this accordion item is open.
 * @returns {boolean}
 */
const isOpen = computed((): boolean => {
    const openItems = accordion.openItems.value
    if(accordion.multiple) {
        if(Array.isArray(openItems)) {
            return openItems.includes(props.value)
        }
    }
    return openItems === props.value
})

/**
 * Fetch a prop state from the item or the parent.
 * @param prop The prop to fetch.
 * @param defaultValue The default value to use.
 */
const getPropState = (prop: string, defaultValue: any = null) => {
    return props[prop] === null || typeof props[prop] === 'undefined'
        ? (accordion === null ? defaultValue : accordion[prop])
        : props[prop]
}

provide(injectAccordionItemName, {
    customControl: props.customControl ?? false,
    disabled: props.disabled,
    value: props.value,
    isOpen,
    getItemPropState: getPropState,
    toggle: accordion.toggle,
})
</script>
