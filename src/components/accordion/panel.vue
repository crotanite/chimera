<template>
    <component
        ref="el"
        :is="props.component"
        :class="classes"
        :style="styles"
    >
        <div :style="innerStyles">
            <slot />
        </div>
    </component>
</template>

<script setup lang="ts">
import { computed, CSSProperties, HTMLAttributes, inject, ref } from 'vue'
import { injectAccordionItemName, panelProps, AccordionPanelProps, InjectedAccordionItem } from './accordion.typings'
import useApplyPadding from '../../composables/methods/styles/useApplyPadding'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(panelProps)
const props = useGenerateProps(setProps, 'accordionPanel') as AccordionPanelProps

const el = ref<null|HTMLDivElement>(null)
const item = inject(injectAccordionItemName, null) as InjectedAccordionItem

const getPropState = (prop: string, defaultValue: any = null) => {
    return props[prop] === null || typeof props[prop] === 'undefined'
        ? (item === null ? defaultValue : item.getItemPropState(prop))
        : props[prop]
}

const classes = computed((): Array<string> => {
    return [
        'transition-[height]'
    ]
})
const styles = computed(() => {
    return {
        ...{ height: item.isOpen.value ? `${el.value.scrollHeight}px` : 0 },
    }
})
const innerStyles = computed(() => {
    return {
        ...(getPropState('unstyled', false) ? {} : {
            ...useApplyPadding(getPropState('p'), getPropState('px'), getPropState('py'))
        })
    }
})
</script>
