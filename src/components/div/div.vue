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
import { computed, ref, watch } from 'vue'
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
const props = ref<DivProps>(useGenerateProps(setProps, 'div') as DivProps)

const hover = ref<boolean>(false)
const classes = computed((): Array<string> => {
    return [
        'bg-clip-padding overflow-hidden',
        useApplyFlexChild(props.value.grow, props.value.shrink),
        useApplyFlexParent(props.value.flex, props.value.flexDirection, props.value.flexItems, props.value.flexJustify, props.value.flexWrap),
        useApplyForceText(props.value.forceText),
        useApplyGridParent(props.value.grid, props.value.cols, props.value.flow, props.value.rows),
        useApplyOrder(props.value.order),
    ]
})
const styles = computed((): object => {
    return {
        ...useApplyBorder(props.value.border),
        ...useApplyColor(
            props.value.hover ? hover : null, null,
            props.value.color, props.value.variant, props.value.backgroundColor, props.value.borderColor, props.value.textColor, props.value.shadowColor
        ),
        ...useApplyGap(props.value.gap, props.value.gapX, props.value.gapY),
        ...useApplyHeight(props.value.height),
        ...useApplyMaxHeight(props.value.maxHeight),
        ...useApplyMaxWidth(props.value.maxWidth),
        ...useApplyPadding(props.value.p, props.value.px, props.value.py),
        ...useApplyRounded(props.value.rounded),
        ...useApplyShadow(props.value.shadow),
        ...useApplyWidth(props.value.width),
    }
})

watch(setProps, () => {
    for (const [key, value] of Object.entries(setProps)) {
        if(typeof value !== 'undefined' && props[key] !== value) {
            props.value[key] = value
        }
    }
})
</script>
