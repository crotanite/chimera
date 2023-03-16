<template>
    <ChiFlex :flex-direction="props.vertical ? 'row' : 'col'">
        <slot name="list-container">
            <ChiFlex :class="classes" :style="styles" :flex-direction="props.vertical ? 'col' : 'row'">
                <slot name="list" />
            </ChiFlex>
        </slot>
        <slot />
    </ChiFlex>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { ChiFlex } from '../flex'
import tabsProps, { injectTabsName, TabsProps } from './tabs.typings'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useGenerateProps from '../../composables/useGenerateProps'

const emits = defineEmits(['update:modelValue'])
const setProps = defineProps(tabsProps)
const props = useGenerateProps(setProps, 'tabs') as TabsProps
const activeTab = ref<null|string>(props.modelValue)

const classes = computed((): Array<string> => {
    return [
        props.variant === 'transparent' ? 'border-b-2' : null,
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
