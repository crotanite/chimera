<template>
    <div
        :class="classes"
        :style="styles"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { tabsTabProps, injectTabsName, InjectedTabsProps, TabsTabProps } from './tabs.typings'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useApplyPadding from '../../composables/methods/styles/useApplyPadding'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(tabsTabProps)
const props = useGenerateProps(setProps, 'tabsTab') as TabsTabProps
const tabs = inject(injectTabsName, null) as InjectedTabsProps

const hover = ref<boolean>(false)
const classes = computed((): Array<string> => {
    return [
        tabs.activeTab.value !== props.value ? 'hidden' : null
    ]
})
const styles = computed(() => {
    return {
        ...useApplyColor(
            null,
            null,
            getPropState('color', 'system'),
            getPropState('variant', 'filled')
        ),
        ...useApplyPadding(getPropState('p'), getPropState('px'), getPropState('py')),
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
