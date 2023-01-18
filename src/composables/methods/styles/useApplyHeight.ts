import { getCurrentInstance } from 'vue'
import { HeightProps } from '../../props/useHeightProps'
import useGetThemeProperty from '../../useGetThemeProperty'
import useGetValueForScreen from '../../useGetValueForScreen'

export type useApplyHeightOutput = null|{ height: string }

export default function useApplyHeight (
    overrideHeight: HeightProps['height'] = null,
): useApplyHeightOutput {
    const ctx = getCurrentInstance()
    const heightProp: HeightProps['height'] = overrideHeight === null ? ((ctx?.props.height as HeightProps['height']) ?? null) : overrideHeight

    if (heightProp === null) {
        return null
    } else if(typeof heightProp === 'number') {
        return { height: `${heightProp}px` }
    } else if(typeof heightProp === 'string') {
        const height = useGetThemeProperty(`heights.${heightProp}`)
        if (height !== null) {
            return { height }
        }
    } else {
        const value = useGetValueForScreen<number|string>(heightProp)
        if (typeof value === 'number') {
            return { height: `${value}px` }
        } else {
            const height = useGetThemeProperty(`heights.${value}`, `screenSizes.${value}`)
            if (height !== null) {
                return { height }
            }
        }
    }
}
