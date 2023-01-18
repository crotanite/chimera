import { getCurrentInstance } from 'vue'
import { SpacingProps } from '../../props/useSpacingProps'

export type useApplySpacingOutput = null|string

export default function useApplySpacing (
    overrideSpacing: SpacingProps['spacing'] = null,
    overrideSpacingX: SpacingProps['spacingX'] = null,
    overrideSpacingY: SpacingProps['spacingY'] = null
): useApplySpacingOutput {
    const ctx = getCurrentInstance()
    const spacing: SpacingProps['spacing'] = overrideSpacing === null
        ? ((ctx?.props.spacing as SpacingProps['spacing']) ?? 0)
        : overrideSpacing
    const spacingX: SpacingProps['spacingX'] = overrideSpacingX === null
        ? ((ctx?.props.spacingX as SpacingProps['spacingX']) ?? 0)
        : overrideSpacingX
    const spacingY: SpacingProps['spacingY'] = overrideSpacingY === null
        ? ((ctx?.props.spacingY as SpacingProps['spacingY']) ?? 0)
        : overrideSpacingY

    if (spacing === 0 && spacingX === 0 && spacingY === 0) {
        return null
    }

    let output = {
        x: null,
        y: null,
    }

    if (spacing !== null) {
        switch(spacing) {
            case 1: { output.x = 'space-x-1'; output.y = 'space-y-1'; break }
            case 2: { output.x = 'space-x-2'; output.y = 'space-y-2'; break }
            case 3: { output.x = 'space-x-3'; output.y = 'space-y-3'; break }
            case 4: { output.x = 'space-x-4'; output.y = 'space-y-4'; break }
            case 5: { output.x = 'space-x-5'; output.y = 'space-y-5'; break }
            case 6: { output.x = 'space-x-6'; output.y = 'space-y-6'; break }
            case 7: { output.x = 'space-x-7'; output.y = 'space-y-7'; break }
            case 8: { output.x = 'space-x-8'; output.y = 'space-y-8'; break }
            case 9: { output.x = 'space-x-9'; output.y = 'space-y-9'; break }
            case 10: { output.x = 'space-x-10'; output.y = 'space-y-10'; break }
            case 11: { output.x = 'space-x-11'; output.y = 'space-y-11'; break }
            case 12: { output.x = 'space-x-12'; output.y = 'space-y-12'; break }
            default: { }
        }
    }

    if (spacingX !== null) {
        switch(spacingX) {
            case 1: { output.x = 'space-x-1'; break }
            case 2: { output.x = 'space-x-2'; break }
            case 3: { output.x = 'space-x-3'; break }
            case 4: { output.x = 'space-x-4'; break }
            case 5: { output.x = 'space-x-5'; break }
            case 6: { output.x = 'space-x-6'; break }
            case 7: { output.x = 'space-x-7'; break }
            case 8: { output.x = 'space-x-8'; break }
            case 9: { output.x = 'space-x-9'; break }
            case 10: { output.x = 'space-x-10'; break }
            case 11: { output.x = 'space-x-11'; break }
            case 12: { output.x = 'space-x-12'; break }
            default: { }
        }
    }

    if (spacingY !== null) {
        switch(spacingY) {
            case 1: { output.y = 'space-y-1'; break }
            case 2: { output.y = 'space-y-2'; break }
            case 3: { output.y = 'space-y-3'; break }
            case 4: { output.y = 'space-y-4'; break }
            case 5: { output.y = 'space-y-5'; break }
            case 6: { output.y = 'space-y-6'; break }
            case 7: { output.y = 'space-y-7'; break }
            case 8: { output.y = 'space-y-8'; break }
            case 9: { output.y = 'space-y-9'; break }
            case 10: { output.y = 'space-y-10'; break }
            case 11: { output.y = 'space-y-11'; break }
            case 12: { output.y = 'space-y-12'; break }
            default: { }
        }
    }

    return Object.values(output).join(' ')
}
