<template>
    <component
        :is="props.component"
        :class="classes"
        :style="styles"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <slot>{{ props.content }}</slot>
    </component>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import divProps, { DivProps } from  './div.typings'
import useApplyFlexChild from '../../composables/methods/classes/useApplyFlexChild'
import useApplyFlexParent from '../../composables/methods/classes/useApplyFlexParent'
import useApplyForceText from '../../composables/methods/classes/useApplyForceText'
import useApplyGridParent from '../../composables/methods/classes/useApplyGridParent'
import useApplyOrder from '../../composables/methods/classes/useApplyOrder'
import useApplyBorder from '../../composables/methods/styles/useApplyBorder'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useApplyHeight from '../../composables/methods/styles/useApplyHeight'
import useApplyGap from '../../composables/methods/styles/useApplyGap'
import useApplyMaxHeight from '../../composables/methods/styles/useApplyMaxHeight'
import useApplyMaxWidth from '../../composables/methods/styles/useApplyMaxWidth'
import useApplyPadding from '../../composables/methods/styles/useApplyPadding'
import useApplyRounded from '../../composables/methods/styles/useApplyRounded'
import useApplyShadow from '../../composables/methods/styles/useApplyShadow'
import useApplyWidth from '../../composables/methods/styles/useApplyWidth'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(divProps)
const props = useGenerateProps(setProps, 'div') as DivProps

const hover = ref<boolean>(false)
const classes = computed((): Array<string> => {
    return [
        'bg-clip-padding overflow-hidden',
        useApplyFlexChild(props.grow, props.shrink),
        useApplyFlexParent(props.flex, props.flexDirection, props.flexItems, props.flexJustify, props.flexWrap),
        useApplyForceText(props.forceText),
        useApplyGridParent(props.grid, props.cols, props.flow, props.rows),
        useApplyOrder(props.order),
    ]
})
const styles = computed((): object => {
    return {
        ...useApplyBorder(props.border),
        ...useApplyColor(
            props.hover ? hover : null, null,
            props.color, props.variant, props.backgroundColor, props.borderColor, props.textColor, props.shadowColor
        ),
        ...useApplyGap(props.gap, props.gapX, props.gapY),
        ...useApplyHeight(props.height),
        ...useApplyMaxHeight(props.maxHeight),
        ...useApplyMaxWidth(props.maxWidth),
        ...useApplyPadding(props.p, props.px, props.py),
        ...useApplyRounded(props.rounded),
        ...useApplyShadow(props.shadow),
        ...useApplyWidth(props.width),
    }
})
</script>
