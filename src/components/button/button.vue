<template>
    <component
        :is="props.component"
        :class="classes"
        :style="styles"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <UtilComponentWithLoading
            class="h-1/2"
            :component="props.prefix"
            :keep-when-loading="disabled || !loading || keepPrefixLoading"
            :loading="loading"
        />
        <div class="grow"><slot>{{ content }}</slot></div>
        <UtilComponentWithLoading
            class="h-1/2"
            :component="props.suffix"
            :keep-when-loading="disabled || !loading || keepSuffixLoading"
            :loading="loading"
        />
    </component>
</template>

<script setup lang="ts">
import { computed, inject, ref, watch } from 'vue'
import { UtilComponentWithLoading } from '../utilities'
import buttonProps, { injectButtonGroupName, ButtonProps, ButtonGroupProps } from './button.typings'
import useApplyForceText from '../../composables/methods/classes/useApplyForceText'
import useApplyLoading from '../../composables/methods/classes/useApplyLoading'
import useApplySizeFontSize from '../../composables/methods/classes/useApplySizeFontSize'
import useApplyBorder from '../../composables/methods/styles/useApplyBorder'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useApplyDisabled from '../../composables/methods/styles/useApplyDisabled'
import useApplyRounded from '../../composables/methods/styles/useApplyRounded'
import useApplyShadow from '../../composables/methods/styles/useApplyShadow'
import useApplySizePadding from '../../composables/methods/styles/useApplySizePadding'
import useGetThemeProperty from '../../composables/useGetThemeProperty'
import useGenerateProps from '../../composables/useGenerateProps'

// const buttonGroupProps = useGetThemeProperty('ui.buttonGroup') as ButtonGroupProps
const setProps = defineProps(buttonProps)
const props = useGenerateProps(setProps, 'button', 'buttonGroup') as ButtonProps

const buttonGroup = inject(injectButtonGroupName, null) as null|ButtonGroupProps
const hover = ref<boolean>(false)
const classes = computed((): Array<string> => {
    return [
        'bg-clip-padding cursor-pointer font-bold inline-flex space-x-1 items-center text-center',
        buttonGroup !== null ? '!rounded-none' : '',
        useApplyForceText(getPropState('forceText')),
        getPropState('disabled') ? '' : useApplyLoading(getPropState('loading')),
        useApplySizeFontSize(getPropState('size')),
    ]
})
const styles = computed(() => {
    return {
        ...useApplyDisabled(getPropState('disabled')),
        ...useApplyBorder(getPropState('border')),
        ...useApplyRounded(getPropState('rounded')),
        ...useApplySizePadding(getPropState('size'), getPropState('dense')),
        ...useApplyShadow(getPropState('shadow')),
        ...getPropState('disabled') ? {} : useApplyColor(
            getPropState('loading') ? null : hover,
            null,
            getPropState('color'),
            getPropState('variant'),
            getPropState('backgroundColor'),
            getPropState('borderColor'),
            getPropState('textColor'),
            getPropState('shadowColor'),
        ),
    }
})

/**
 * Fetch a prop state from the item or the parent.
 * @param prop The prop to fetch.
 * @param defaultValue The default value to use.
 */
const getPropState = (prop: string, defaultValue: any = null) => {
    return props[prop] === null || typeof props[prop] === 'undefined'
        ? (buttonGroup === null ? defaultValue : buttonGroup[prop])
        : props[prop]
}

watch(setProps, () => {
    for (const [key, value] of Object.entries(setProps)) {
        if(typeof value !== 'undefined' && props[key] !== value) {
            props[key] = value
        }
    }
})
</script>

<script lang="ts">
export default {
    name: 'ChiButton'
}
</script>

<style>
.spin {
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@-moz-keyframes spin {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
</style>
