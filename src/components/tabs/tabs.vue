<template>
    <div>
        <div :class="classes" :style="styles">
            <div :class="[useApplyFlexParent(true), {
                'flex-col': props.vertical,
                'flex-row': !props.vertical,
            }]">
                <slot name="list" />
            </div>
        </div>
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import tabsProps, { injectTabsName, TabsProps } from './tabs.typings'
import useApplyFlexParent from '../../composables/methods/classes/useApplyFlexParent'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useGenerateProps from '../../composables/useGenerateProps'

const emits = defineEmits(['update:modelValue'])
const setProps = defineProps(tabsProps)
const props = useGenerateProps(setProps, 'tabs') as TabsProps
const activeTab = ref<null|string>(props.modelValue)

const classes = computed((): Array<string> => {
    return [
        'flex',
        props.variant === 'transparent' ? 'border-b-2' : null,
        props.vertical ? 'flex-row' : 'flex-col',
    ]
})
const styles = computed(() => {
    return {
        ...useApplyColor(null, null, 'system', 'transparent')
    }
})
const setActiveTab = (tab: string) => {
    activeTab.value = tab
    emits('update:modelValue', tab)
}

provide(injectTabsName, {
    ...props,
    ...{
        activeTab,
        setActiveTab,
    }
})
</script>
