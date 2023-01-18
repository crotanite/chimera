<template>
    <component
        :is="props.component"
        :class="classes"
        :style="styles"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <slot>{{ content }}</slot>
    </component>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import linkProps, { LinkProps } from './link.typings'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(linkProps)
const props = useGenerateProps(setProps, 'link') as LinkProps

const hover = ref<boolean>(false)
const classes = computed((): Array<string> => {
    return [
        'cursor-pointer'
    ]
})
const styles = computed((): Object => {
    return {
        ...useApplyColor(
            hover, {
                system: {
                    hover: {
                        transparent: {
                            lightBackgroundColor: null,
                            darkBackgroundColor: null
                        }
                    }
                },
                color: {
                    hover: {
                        transparent: {
                            lightBackgroundColor: null,
                            darkBackgroundColor: null,
                        }
                    }
                }
            },
            props.color, 'transparent', props.backgroundColor, props.borderColor, props.textColor, props.shadowColor
        ),
    }
})
</script>
