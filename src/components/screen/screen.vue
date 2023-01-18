<template>
    <div
        :class="classes"
        :style="styles"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import screenProps, { ScreenProps } from './screen.typings'
import useApplyColor from '../../composables/methods/styles/useApplyColor'
import useGenerateProps from '../../composables/useGenerateProps'

const setProps = defineProps(screenProps)
const props = useGenerateProps(setProps, 'screen') as ScreenProps

const classes = computed((): Array<string> => {
    return [
        'h-screen max-w-[100vw] overflow-x-hidden overflow-y-auto'
    ]
})
const styles = computed(() => {
    return {
        ...useApplyColor(null, {
            system: {
                default: {
                    filled: {
                        lightBackgroundColor: 100,
                        darkBackgroundColor: 800
                    }
                }
            },
            color: {
                default: {
                    filled: {
                        lightBackgroundColor: 100,
                        lightTextColor: 1000,
                        darkBackgroundColor: 800,
                        darkTextColor: 0,
                    }
                }
            }
        }, props.color, props.variant),
    }
})
</script>

<script lang="ts">
export default {
    name: 'ChiScreen'
}
</script>
