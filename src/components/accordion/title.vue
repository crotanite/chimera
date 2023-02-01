<template>
    <component
        :is="props.component"
        :class="classes"
        :style="styles"
        v-on="!item.customControl ? { click: toggle } : {}"
    >
        <div v-if="!item.customControl && !item.disabled && getPropState('iconSide') === 'left'">
            <component class="h-4 w-4" :is="getPropState('icon')" v-if="getPropState('icon') !== null" />
            <ChevronDownIcon :class="['h-4 w-4 transition-transform', { 'rotate-180': item.isOpen.value }]" v-else />
        </div>
        <div class="grow">
            <slot :toggle="toggle">{{ content }}</slot>
        </div>
        <div v-if="!item.customControl && !item.disabled && getPropState('iconSide') === 'right'">
            <component class="h-4 w-4" :is="getPropState('icon')" v-if="getPropState('icon') !== null" />
            <ChevronDownIcon :class="['h-4 w-4 transition-transform', { 'rotate-180': item.isOpen.value }]" v-else />
        </div>
    </component>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { injectAccordionItemName, titleProps, AccordionTitleProps, InjectedAccordionItem } from './accordion.typings'
import useApplyPadding from '../../composables/methods/styles/useApplyPadding'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(titleProps)
const props = useGenerateProps(setProps, 'accordionTitle') as AccordionTitleProps
const item = inject(injectAccordionItemName, null) as InjectedAccordionItem

const getPropState = (prop: string, defaultValue: any = null) => {
    return props[prop] === null || typeof props[prop] === 'undefined'
        ? (item === null ? defaultValue : item.getItemPropState(prop))
        : props[prop]
}
const classes = computed((): Array<string> => {
    return [
        'flex items-center space-x-3',
        item.customControl ? null : 'cursor-pointer'
    ]
})
const styles = computed((): object => {
    return {
        ...(getPropState('unstyled', false) ? {} : {
            ...useApplyPadding(getPropState('p'), getPropState('px'), getPropState('py'))
        })
    }
})

const toggle = () => {
    if(!item.disabled) {
        item.toggle(item.value)
    }
}
</script>
