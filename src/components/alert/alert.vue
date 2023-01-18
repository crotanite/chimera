<template>
    <ChiDiv
        :component="props.component"
        :class="classes"
        :style="styles"
        :border="props.border"
        :p="props.p"
        :px="props.px"
        :py="props.py"
        :rounded="props.rounded"
        :shadow="props.shadow"
    >
        <slot>{{ content }}</slot>
    </ChiDiv>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ChiDiv } from '../../components/div'
import alertProps, { AlertProps } from './alert.typings'
import useGetThemeProperty from '../../composables/useGetThemeProperty'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(alertProps)
const props = useGenerateProps(setProps, 'alert') as AlertProps

const classes = computed((): Array<string> => {
    return [
        'text-sm'
    ]
})
const styles = computed((): object => {
    return {
        ...useApplyColor(null, null, useGetThemeProperty(`ui.alert.themes.${props.theme}`), 'filled'),
    }
})
</script>
