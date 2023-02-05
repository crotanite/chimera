<template>
    <div
        :class="classes"
        :style="styles"
        @mouseover="hover = true"
        @mouseleave="hover = false"
        @click="tabs.setActiveTab(props.value)"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { tabsTabProps, injectTabsName, InjectedTabsProps, TabsTabProps } from './tabs.typings'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useApplyPadding from '../../composables/methods/styles/useApplyPadding'
import useApplyRounded from '../../composables/methods/styles/useApplyRounded'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(tabsTabProps)
const props = useGenerateProps(setProps, 'tabsTab') as TabsTabProps
const tabs = inject(injectTabsName, null) as InjectedTabsProps

const hover = ref<boolean>(false)
const classes = computed((): Array<string> => {
    return [
        'cursor-pointer text-sm !rounded-b-none',
        getPropState('variant') === 'transparent' ? 'border-b-2 -mb-[2px]' : null,
    ]
})
const styles = computed(() => {
    return {
        ...useApplyColor(
            hover,
            null,
            tabs.activeTab.value === props.value
                ? (getPropState('variant') === 'transparent' ? 'system' : getPropState('color'))
                : 'system',
            tabs.activeTab.value === props.value
                ? getPropState('variant')
                : 'transparent',
            tabs.activeTab.value === props.value
                ? (getPropState('variant') === 'transparent' ? 'system' : getPropState('color'))
                : 'system',
            tabs.activeTab.value === props.value
                ? getPropState('color')
                : 'system'
        ),
        ...useApplyPadding(getPropState('p'), getPropState('px'), getPropState('py')),
        ...useApplyRounded(getPropState('rounded')),
    }
})

/**
 * Fetch a prop state from the item or the parent.
 * @param prop The prop to fetch.
 * @param defaultValue The default value to use.
 */
const getPropState = (prop: string, defaultValue: any = null) => {
    return props[prop] === null || typeof props[prop] === 'undefined'
        ? (tabs === null ? defaultValue : tabs[prop])
        : props[prop]
}
</script>
