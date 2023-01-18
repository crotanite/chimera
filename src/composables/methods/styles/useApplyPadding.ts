import { getCurrentInstance } from 'vue'
import { PaddingProps } from '../../props/usePaddingProps'
import useGetThemeProperty from '../../useGetThemeProperty'

export type useApplyPaddingOutput = null|{ padding: string }

export default function useApplyPadding (
    overrideP: null|PaddingProps['p'] = null,
    overridePx: null|PaddingProps['px'] = null,
    overridePy: null|PaddingProps['py'] = null
): useApplyPaddingOutput {
    const ctx = getCurrentInstance()
    const p: PaddingProps['p'] = overrideP === null ? ((ctx?.props.p as PaddingProps['p']) ?? null) : overrideP
    const px: PaddingProps['px'] = overridePx === null ? ((ctx?.props.px as PaddingProps['px']) ?? null) : overridePx
    const py: PaddingProps['py'] = overridePy === null ? ((ctx?.props.py as PaddingProps['py']) ?? null) : overridePy

    if (p === null && px === null && py === null) {
        return null
    }

    let padding: string

    if (py !== null) {
        if (typeof py === 'number') {
            padding = `${py}px`
        } else {
            padding = useGetThemeProperty(`spacing.${py}`)
        }
    } else if (p !== null) {
        if (typeof p === 'number') {
            padding = `${p}px`
        } else {
            padding = useGetThemeProperty(`spacing.${p}`)
        }
    } else {
        padding = '0'
    }

    if (px !== null) {
        if (typeof px === 'number') {
            padding += ` ${px}px`
        } else {
            padding += ` ${useGetThemeProperty(`spacing.${px}`)}`
        }
    } else if (p !== null) {
        if (typeof p === 'number') {
            padding += ` ${p}px`
        } else {
            padding += ` ${useGetThemeProperty(`spacing.${p}`)}`
        }
    } else {
        padding += ' 0'
    }

    return { padding }
}
