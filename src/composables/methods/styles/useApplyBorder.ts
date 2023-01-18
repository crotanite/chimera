import { getCurrentInstance } from 'vue'
import { BorderProps } from '../../props/useBorderProps'

export type useApplyBorderOutput = null|{ borderWidth: string }

export default function useApplyBorder (
    overrideBorder: BorderProps['border'] = null
): useApplyBorderOutput {
    const ctx = getCurrentInstance()
    const borderProp: BorderProps['border'] = overrideBorder === null ? ((ctx?.props.border as BorderProps['border']) ?? 0) : overrideBorder

    if (borderProp === 0) {
        return null
    }

    return {
        borderWidth: `${borderProp}px`
    }
}
