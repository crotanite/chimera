import { ref } from 'vue'
import { Sizes } from '../theme'
import useGetThemeProperty from './useGetThemeProperty'

export const screenSize = ref<keyof Sizes<string>>(useCalculateScreenSize())

export function useCalculateScreenSize (): keyof Sizes<string> {
    const width: number = typeof window !== 'undefined' ? window.innerWidth : 0
    const screenSizes = useGetThemeProperty('screenSizes') as Sizes<any>

    if (width <= screenSizes.xs) {
        return 'xxs'
    } else if(screenSizes.xs < width && width <= screenSizes.sm) {
        return 'xs'
    } else if(screenSizes.sm < width && width <= screenSizes.md) {
        return 'sm'
    } else if(screenSizes.md < width && width <= screenSizes.lg) {
        return 'md'
    } else if(screenSizes.lg < width && width <= screenSizes.xl) {
        return 'lg'
    } else if(screenSizes.xl < width && width <= screenSizes.xxl) {
        return 'xl'
    } else {
        return 'xxl'
    }
}

window.addEventListener('resize', () => {
    screenSize.value = useCalculateScreenSize()
})

export default screenSize
