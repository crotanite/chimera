<template>
    <component
        :is="props.component"
        :class="classes"
        :style="styles"
        ref="target"
    >
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed, inject, ref, Ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { offcanvasDrawerProps, OffcanvasDrawerProps, injectOffcanvasName } from './offcanvas.typings'
import screenSize from '../../composables/useScreenSize'
import useApplyPadding from '../../composables/methods/styles/useApplyPadding'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useApplyWidth from '../../composables/methods/styles/useApplyWidth'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(offcanvasDrawerProps)
const props = useGenerateProps(setProps, 'offcanvasDrawer') as OffcanvasDrawerProps

/** The drawer component. */
const target = ref<null|HTMLElement>(null)
/** The injected offcanvas instance. */
const offcanvas = inject(injectOffcanvasName) as { openDrawers: Ref<Array<string>>, toggleDrawer: Function }
/** The component classes. */
const classes = computed((): Array<string> => {
    return [
        'transition transition-[margin] duration-500 ease-in-out z-[1] overflow-y-auto shrink-0',
        props.side === 'left'
            ? 'order-first'
            : 'order-last',
        !openAtScreen.value ? 'fixed top-0 bottom-0' : ''
    ]
})
/** The component styles. */
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
/** Whether the drawer is open at the current screen size. */
const openAtScreen = computed((): boolean => {
    return props.breakpoints.includes(screenSize.value)
})
/** Whether the drawer is open/closed. */
const showDrawer = computed((): boolean => {
    return (!setProps.forceHide && openAtScreen.value) || (!openAtScreen.value && offcanvas.openDrawers.value.includes(props.value))
})

onClickOutside(target, (event) => {
    if (showDrawer.value) {
        offcanvas.toggleDrawer(props.value)
    }
})
</script>
