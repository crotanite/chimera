import { getCurrentInstance } from 'vue'
import { WidthProps } from '../../props/useWidthProps'
import useGetThemeProperty from '../../useGetThemeProperty'

export type useApplyMaxWidthOutput = null|{ maxWidth: string }

export default function useApplyMaxWidth (
    overrideMaxWidth: WidthProps['maxWidth'] = null,
): useApplyMaxWidthOutput {
    const ctx = getCurrentInstance()
    const maxWidthProp: WidthProps['maxWidth'] = overrideMaxWidth === null ? ((ctx?.props.maxWidth as WidthProps['maxWidth']) ?? null) : overrideMaxWidth

    if (maxWidthProp === null) {
        return null
    } else if(typeof maxWidthProp === 'number') {
        return {
            maxWidth: `${maxWidthProp}px`
        }
    } else {
        const maxWidth = useGetThemeProperty(`heights.${maxWidthProp}`)
        if (maxWidth !== null) {
            return {
                maxWidth
            }
        }
    }
}
