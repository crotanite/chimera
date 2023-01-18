import { getCurrentInstance } from 'vue'
import { ForceTextProps } from '../../props/useForceTextProps'

export default function useApplyForceText (
    overrideForceText: ForceTextProps['forceText'] = null
): string {
    const ctx = getCurrentInstance()
    const forceText: ForceTextProps['forceText'] = overrideForceText === null
        ? ((ctx?.props.forceText as ForceTextProps['forceText']) ?? null)
        : overrideForceText

    return forceText
}
