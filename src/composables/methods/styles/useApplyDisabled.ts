import { getCurrentInstance } from 'vue'
import { DisabledProps } from '../../props/useDisabledProps'
import useApplyColor, { useApplyColorOutput } from './useApplyColor'

export type useApplyDisabledOutput = useApplyColorOutput & { cursor: string }

export default function useApplyDisabled (
    overrideDisabled: DisabledProps['disabled'] = null,
): useApplyDisabledOutput {
    const ctx = getCurrentInstance()
    const disabled: DisabledProps['disabled'] = overrideDisabled === null
        ? ((ctx?.props.disabled as DisabledProps['disabled']) ?? false)
        : overrideDisabled

    if (disabled) {
        let output = useApplyColor(null, {
            system: {
                default: {
                    filled: {
                        lightBackgroundColor: 200,
                        lightBorderColor: 200,
                        lightTextColor: 400,
                        darkBackgroundColor: 700,
                        darkBorderColor: 700,
                        darkTextColor: 500,
                    }
                }
            }
        }, 'system', 'filled', 'system', 'system', 'system', 'system') as useApplyDisabledOutput
        output.cursor = 'not-allowed'
        return output
    }

    return null
}
