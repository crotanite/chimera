import { getCurrentInstance } from 'vue'
import { RoundedProps } from '../../props/useRoundedProps'
import useGetThemeProperty from '../../useGetThemeProperty'

export type useApplyRoundedOutput = null|{ borderRadius: string }

export default function useApplyRounded (
    overrideRounded: RoundedProps['rounded'] = null
): useApplyRoundedOutput {
    const ctx = getCurrentInstance()
    const rounded: RoundedProps['rounded'] = overrideRounded === null ? ((ctx?.props.rounded as RoundedProps['rounded']) ?? null) : overrideRounded

    if (rounded !== null) {
        if (typeof rounded === 'number') {
            return { borderRadius: `${rounded}px` }
        } else {
            const borderRadius = rounded === 'full' ? '9999px' : useGetThemeProperty(`borderRadius.${rounded}`)
            if (borderRadius !== null) {
                return { borderRadius }
            }
        }
    }

    return null
}
