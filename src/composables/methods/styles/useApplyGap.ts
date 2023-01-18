import { getCurrentInstance } from 'vue'
import useGetThemeProperty from '../../useGetThemeProperty'
import { GapProps } from '../../props/useGapProps'

export type useApplyGapOutput = null|{ gap: string }

export default function useApplyGap (
    overrideGap: GapProps['gap'] = null,
    overrideGapX: GapProps['gap'] = null,
    overrideGapY: GapProps['gap'] = null
): useApplyGapOutput {
    const ctx = getCurrentInstance()
    const gapProp: GapProps['gap'] = overrideGap === null ? ((ctx?.props.gap as GapProps['gap']) ?? null) : overrideGap
    const gapXProp: GapProps['gapX'] = overrideGapX === null ? ((ctx?.props.gapX as GapProps['gapX']) ?? null) : overrideGapX
    const gapYProp: GapProps['gapY'] = overrideGapY === null ? ((ctx?.props.gapY as GapProps['gapY']) ?? null) : overrideGapY

    if(gapProp === null && gapXProp === null && gapYProp === null) {
        return null
    }

    let gap: string = ''

    if (gapYProp !== null) {
        gap += useGetThemeProperty(`spacing.${gapYProp}`)
    } else if (gapProp !== null) {
        gap += useGetThemeProperty(`spacing.${gapProp}`)
    } else {
        gap += '0'
    }

    if (gapXProp !== null) {
        gap += ` ${useGetThemeProperty(`spacing.${gapXProp}`)}`
    } else if (gapProp !== null) {
        gap += ` ${useGetThemeProperty(`spacing.${gapProp}`)}`
    } else {
        gap += ' 0'
    }

    return { gap }
}
