import { getCurrentInstance } from 'vue'
import { FlexChildProps } from '../../props/useFlexChildProps'

export default function useApplyFlexChild (
    overrideGrow: FlexChildProps['grow'] = null,
    overrideShrink: FlexChildProps['shrink'] = null
): string {
    const ctx = getCurrentInstance()
    const growProp: FlexChildProps['grow'] = overrideGrow === null
        ? ((ctx?.props.grow as FlexChildProps['grow']) ?? false)
        : overrideGrow
    const shrinkProp: FlexChildProps['shrink'] = overrideShrink === null
        ? ((ctx?.props.shrink as FlexChildProps['shrink']) ?? false)
        : overrideShrink

    if (growProp && !shrinkProp) {
        return 'grow'
    } else if(!growProp && shrinkProp) {
        return 'shrink'
    } else {
        return ''
    }
}
