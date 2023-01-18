<template>
    <div
        :class="classes"
        :style="styles"
    >
        <img class="h-full w-full" :src="src" v-if="hasSrc" />
        <div class="flex items-center justify-center h-full w-full font-bold" v-else-if="hasDefaultSlot">
            <slot />
        </div>
        <slot name="fallback" v-else>
            <div class="flex items-center justify-center p-1">
                <UserCircleIcon class="h-full w-full" />
            </div>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { computed, inject, useSlots } from 'vue'
import { UserCircleIcon } from '@heroicons/vue/24/outline'
import avatarProps, { injectAvatarGroupName, AvatarProps, AvatarGroupProps } from './avatar.typings'
import useGetThemeProperty from '../../composables/useGetThemeProperty'
import useApplyBorder from '../../composables/methods/styles/useApplyBorder'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useApplyRounded from '../../composables/methods/styles/useApplyRounded'
import useGenerateProps from '../../composables/useGenerateProps'

const avatarGroupProps = useGetThemeProperty('ui.avatarGroup')
const setProps = defineProps(avatarProps)
const props = useGenerateProps(setProps, 'avatar') as AvatarProps

const avatarGroup = inject(injectAvatarGroupName, null) as AvatarGroupProps
const classes = computed((): Array<string> => {
    return [
        'overflow-hidden inline-block',
    ]
})
const styles = computed(() => {
    return {
        ...useApplyBorder(getPropState('border', avatarGroupProps.border)),
        ...useApplyRounded(getPropState('rounded', avatarGroupProps.rounded)),
        ...useApplyColor(
            null,
            null,
            getPropState('color', avatarGroupProps.color),
            getPropState('variant', avatarGroupProps.variant),
            getPropState('backgroundColor', avatarGroupProps.backgroundColor),
            getPropState('borderColor', avatarGroupProps.borderColor),
            getPropState('textColor', avatarGroupProps.textColor),
            getPropState('shadowColor', avatarGroupProps.shadowColor),
        ),
        ...{
            height: useGetThemeProperty(`avatar.${getPropState('size', avatarGroupProps.size)}`),
            width: useGetThemeProperty(`avatar.${getPropState('size', avatarGroupProps.size)}`)
        }
    }
})
const hasSrc = computed((): boolean => {
    return props.src !== null && props.src !== ''
})
const hasDefaultSlot = computed((): boolean => {
    const slots = useSlots()
    return typeof slots.default !== 'undefined'
})

/**
 * Fetch a prop state from the item or the parent.
 * @param prop The prop to fetch.
 * @param defaultValue The default value to use.
 */
const getPropState = (prop: string, defaultValue: any = null) => {
    return props[prop] === null || typeof props[prop] === 'undefined'
        ? (avatarGroup === null ? defaultValue : avatarGroup[prop])
        : props[prop]
}
</script>

<script lang="ts">
export default {
    name: 'ChiAvatar'
}
</script>
