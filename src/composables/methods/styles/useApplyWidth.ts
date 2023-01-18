import { getCurrentInstance } from 'vue'
import { WidthProps } from '../../props/useWidthProps'
import useGetThemeProperty from '../../useGetThemeProperty'
import useGetValueForScreen from '../../useGetValueForScreen'

export type useApplyWidthOutput = null|{ width: string }

export default function useApplyWidth (
    overrideWidth: WidthProps['width'] = null,
): useApplyWidthOutput {
    const ctx = getCurrentInstance()
    const widthProp: WidthProps['width'] = overrideWidth === null ? ((ctx?.props.width as WidthProps['width']) ?? null) : overrideWidth

    if (widthProp === null) {
        return null
    } else if(typeof widthProp === 'number') {
        return {
            width: `${widthProp}px`
        }
    } else if(typeof widthProp === 'string') {
        const width = useGetThemeProperty(`heights.${widthProp}`, `screenSizes.${widthProp}`)
        if (width !== null) {
            return { width }
        }
    } else {
        const value = useGetValueForScreen<number|string>(widthProp)
        if (typeof value === 'number') {
            return { width: `${value}px` }
        } else {
            const width = useGetThemeProperty(`heights.${value}`, `screenSizes.${value}`)
            if (width !== null) {
                return { width }
            }
        }
    }
}
