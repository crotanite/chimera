<template>
    <component
        :is="props.component"
        :class="classes"
        :style="styles"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <UtilComponentWithLoading
            class="h-4"
            :component="props.prefix"
        />
        <div class="grow"><slot>{{ props.content }}</slot></div>
        <UtilComponentWithLoading
            class="h-4"
            :component="props.suffix"
        />
    </component>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { UtilComponentWithLoading } from '../utilities'
import { listItemProps, listInjectKey, ListProps, ListItemProps } from './list.typings'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useApplyPadding from '../../composables/methods/styles/useApplyPadding'
import useApplyRounded from '../../composables/methods/styles/useApplyRounded'
import useApplySpacing from '../../composables/methods/classes/useApplySpacing'
import useGenerateProps from '../../composables/useGenerateProps'

interface FullProps extends ListProps, ListItemProps {}
const setProps = defineProps(listItemProps)
const props = useGenerateProps(setProps, 'listItem') as FullProps
const parent = inject(listInjectKey) as ListProps

const hover = ref<boolean>(false)
const classes = computed((): Array<string> => {
    return [
        'cursor-pointer flex items-center',
        useApplySpacing(props.spacing, props.spacingX, props.spacingY),
    ]
})
const styles = computed((): object => {
    return {
        ...useApplyPadding(getPropState('p'), getPropState('px'), getPropState('py')),
        ...useApplyColor(
            getPropState('hover', false) ? hover : null,
            null,
            getPropState('color'),
            getPropState('variant')
        ),
        ...(parent.spacingY !== 0 ? useApplyRounded(getPropState('rounded')) : {}),
    }
})

/**
 * Fetch a prop state from the item or the parent.
 * @param prop The prop to fetch.
 * @param defaultValue The default value to use.
 */
const getPropState = (prop: string, defaultValue: any = null) => {
    return props[prop] === null || typeof props[prop] === 'undefined'
        ? (parent === null ? defaultValue : parent[prop])
        : props[prop]
}
</script>
