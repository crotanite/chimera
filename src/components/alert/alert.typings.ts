import useBorderProps, { BorderProps } from '../../composables/props/useBorderProps'
import useComponentProps, { ComponentProps } from '../../composables/props/useComponentProps'
import useContentProps, { ContentProps } from '../../composables/props/useContentProps'
import usePaddingProps, { PaddingProps } from '../../composables/props/usePaddingProps'
import useRoundedProps, { RoundedProps } from '../../composables/props/useRoundedProps'
import useShadowProps, { ShadowProps } from '../../composables/props/useShadowProps'
import useThemeProps, { ThemeProps } from '../../composables/props/useThemeProps'

export interface AlertProps extends
    BorderProps,
    ComponentProps,
    ContentProps,
    PaddingProps,
    RoundedProps,
    ShadowProps,
    ThemeProps
{}

export const alertProps = {
    ...useBorderProps(),
    ...useComponentProps(),
    ...useContentProps(),
    ...usePaddingProps(),
    ...useRoundedProps(),
    ...useShadowProps(),
    ...useThemeProps(),
}

export default alertProps
