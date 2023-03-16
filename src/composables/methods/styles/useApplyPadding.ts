import { getCurrentInstance } from 'vue'
import { PaddingProps } from '../../props/usePaddingProps'
import useGetThemeProperty from '../../useGetThemeProperty'
import useGetValueForScreen from '../../useGetValueForScreen'

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

    let padding: Array<string> = []

    if (py !== null) {
        if (typeof py === 'number') {
            padding.push(`${py}px`)
        } else if(typeof py === 'string') {
            padding.push(useGetThemeProperty(`spacing.${py}`))
        } else {
            const value = useGetValueForScreen<number|string>(py)
            if (typeof value === 'number') {
                padding.push(`${value}px`)
            } else {
                padding.push(useGetThemeProperty(`spacing.${value}`))
            }
        }
    } else if (p !== null) {
        if (typeof p === 'number') {
            padding.push(`${p}px`)
        } else if(typeof p === 'string') {
            padding.push(useGetThemeProperty(`spacing.${p}`))
        } else {
            const value = useGetValueForScreen<number|string>(p)
            if (typeof value === 'number') {
                padding.push(`${value}px`)
            } else {
                padding.push(useGetThemeProperty(`spacing.${value}`))
            }
        }
    }

    if (px !== null) {
        if (typeof px === 'number') {
            padding.push(`${px}px`)
        } else if(typeof px === 'string') {
            padding.push(useGetThemeProperty(`spacing.${px}`))
        } else {
            const value = useGetValueForScreen<number|string>(px)
            if (typeof value === 'number') {
                padding.push(`${value}px`)
            } else {
                padding.push(useGetThemeProperty(`spacing.${value}`))
            }
        }
    } else if (p !== null) {
        if (typeof p === 'number') {
            padding.push(`${p}px`)
        } else if(typeof p === 'string') {
            padding.push(useGetThemeProperty(`spacing.${p}`))
        } else {
            const value = useGetValueForScreen<number|string>(p)
            if (typeof value === 'number') {
                padding.push(`${value}px`)
            } else {
                padding.push(useGetThemeProperty(`spacing.${value}`))
            }
        }
    }

    return { padding: padding.join(' ') }
}
