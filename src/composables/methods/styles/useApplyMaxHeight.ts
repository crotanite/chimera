import { getCurrentInstance } from 'vue'
import { HeightProps } from '../../props/useHeightProps'
import useGetThemeProperty from '../../useGetThemeProperty'

export type useApplyMaxHeightOutput = null|{ maxHeight: string }

export default function useApplyMaxHeight (
    overrideMaxHeight: HeightProps['maxHeight'] = null,
): useApplyMaxHeightOutput {
    const ctx = getCurrentInstance()
    const maxHeightProp: HeightProps['maxHeight'] = overrideMaxHeight === null ? ((ctx?.props.maxHeight as HeightProps['maxHeight']) ?? null) : overrideMaxHeight

    if (maxHeightProp === null) {
        return null
    } else if(typeof maxHeightProp === 'number') {
        return {
            maxHeight: `${maxHeightProp}px`
        }
    } else {
        const maxHeight = useGetThemeProperty(`heights.${maxHeightProp}`)
        if (maxHeight !== null) {
            return {
                maxHeight
            }
        }
    }
}
