import { getCurrentInstance } from 'vue'
import { DenseProps } from '../../props/useDenseProps'
import { SizeProps } from '../../props/useSizeProps'
import useGetThemeProperty from '../../useGetThemeProperty'

export type ApplySizePaddingOutput = { height: string, padding: string }

export default function useApplySizePadding (overrideSize: SizeProps['size'] = null, overrideDense: DenseProps['dense'] = null) {
    const ctx = getCurrentInstance()
    const size: SizeProps['size'] = overrideSize === null ? ((ctx?.props.size as SizeProps['size']) ?? 'xs') : overrideSize
    const dense: DenseProps['dense'] = overrideDense === null ? ((ctx?.props.dense as DenseProps['dense']) ?? false) : overrideDense

    let output: ApplySizePaddingOutput = {
        height: '',
        padding: '',
    }

    switch(size) {
        case 'xs': {
            if (dense) {
                output.height = `${useGetThemeProperty('spacing.md', null, 'rem') * 1.25}rem`
                output.padding = `0 ${useGetThemeProperty('spacing.sm')}`
            } else {
                output.height = `${useGetThemeProperty('spacing.md', null, 'rem') * 1.75}rem`
                output.padding = `0 ${useGetThemeProperty('spacing.md')}`
            }
            break;
        }
        case 'sm': {
            if (dense) {
                output.height = `${useGetThemeProperty('spacing.md', null, 'rem') * 1.5}rem`
                output.padding = `0 ${useGetThemeProperty('spacing.sm')}`
            } else {
                output.height = `${useGetThemeProperty('spacing.md', null, 'rem') * 2.25}rem`
                output.padding = `0 ${useGetThemeProperty('spacing.md')}`
            }
            break;
        }
        case 'md': {
            if (dense) {
                output.height = `${useGetThemeProperty('spacing.md', null, 'rem') * 1.75}rem`
                output.padding = `0 ${useGetThemeProperty('spacing.sm')}`
            } else {
                output.height = `${useGetThemeProperty('spacing.md', null, 'rem') * 2.5}rem`
                output.padding = `0 ${useGetThemeProperty('spacing.lg')}`
            }
            break;
        }
        case 'lg': {
            if (dense) {
                output.height = `${useGetThemeProperty('spacing.md', null, 'rem') * 2}rem`
                output.padding = `0 ${useGetThemeProperty('spacing.md')}`
            } else {
                output.height = `${useGetThemeProperty('spacing.md', null, 'rem') * 2.75}rem`
                output.padding = `0 ${useGetThemeProperty('spacing.lg')}`
            }
            break;
        }
        case 'xl': {
            if (dense) {
                output.height = `${useGetThemeProperty('spacing.md', null, 'rem') * 2.25}rem`
                output.padding = `0 ${useGetThemeProperty('spacing.md')}`
            } else {
                output.height = `${useGetThemeProperty('spacing.md', null, 'rem') * 3}rem`
                output.padding = `0 ${useGetThemeProperty('spacing.xl')}`
            }
            break;
        }
    }

    return output
}
