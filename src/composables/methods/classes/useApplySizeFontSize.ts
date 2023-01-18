import { getCurrentInstance } from 'vue'
import { SizeProps } from '../../props/useSizeProps'

export default function useApplySizeFontSize (
    overrideSize: SizeProps['size'] = null,
): string {
    const ctx = getCurrentInstance()
    const size: SizeProps['size'] = overrideSize === null
        ? ((ctx?.props.size as SizeProps['size']) ?? null)
        : overrideSize

    switch(size) {
        case 'xs': { return 'text-xs' }
        case 'sm': { return 'text-sm' }
        case 'md': { return 'text-base' }
        case 'lg': { return 'text-lg' }
        case 'xl': { return 'text-xl' }
        default: { return '' }
    }
}
