import { getCurrentInstance } from 'vue'
import { ShadowProps } from '../../props/useShadowProps'
import useGetThemeProperty from '../../useGetThemeProperty'

export type useApplyShadowOutput = null|{ boxShadow: string }

export default function useApplyShadow (
    overrideShadow: ShadowProps['shadow'] = null
): useApplyShadowOutput {
    const ctx = getCurrentInstance()
    const shadow: ShadowProps['shadow'] = overrideShadow === null ? ((ctx?.props.shadow as ShadowProps['shadow']) ?? null) : overrideShadow

    const boxShadow = useGetThemeProperty(`boxShadow.${shadow}`)
    if (boxShadow !== null) {
        return {
            boxShadow
        }
    }

    return null
}
