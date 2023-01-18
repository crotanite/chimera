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
import { computed, ref } from 'vue'
import { offcanvasDrawerProps, OffcanvasDrawerProps } from './offcanvas.typings'
import screenSize from '../../composables/useScreenSize'
import useApplyPadding from '../../composables/methods/styles/useApplyPadding'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useApplyWidth from '../../composables/methods/styles/useApplyWidth'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(offcanvasDrawerProps)
const props = useGenerateProps(setProps, 'offcanvasDrawer') as OffcanvasDrawerProps

const classes = computed((): Array<string> => {
    return [
        'transition transition-[margin] duration-500 ease-in-out z-[1] overflow-y-auto shrink-0',
        props.side === 'left'
            ? 'order-first'
            : 'order-last'
    ]
})
const styles = computed(() => {
    const width = useApplyWidth(props.width).width
    return {
        width,
        ...useApplyPadding(props.p, props.px, props.py),
        ...useApplyColor(null, null, props.color, props.variant),
        ...props.side === 'left'
            ? { marginLeft: !showDrawer.value ? `-${width}` : '' }
            : { marginRight: !showDrawer.value ? `-${width}` : '' }
    }
})
const showingDrawer = ref<boolean>(false)

const showAtScreen = computed((): boolean => {
    return props.breakpoints.includes(screenSize.value)
}) // whether to show the drawer, regardless of "open" status
const showDrawer = computed((): boolean => {
    return !setProps.forceHide && (showAtScreen.value || showingDrawer.value)
})
</script>
