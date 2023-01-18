import useBorderProps, { BorderProps } from '../../composables/props/useBorderProps'
import useColorProps, { ColorProps } from '../../composables/props/useColorProps'
import useComponentProps, { ComponentProps } from '../../composables/props/useComponentProps'
import useContentProps, { ContentProps } from '../../composables/props/useContentProps'
import useDenseProps, { DenseProps } from '../../composables/props/useDenseProps'
import useDisabledProps, { DisabledProps } from '../../composables/props/useDisabledProps'
import useFixProps, { FixProps } from '../../composables/props/useFixProps'
import useForceTextProps, { ForceTextProps } from '../../composables/props/useForceTextProps'
import useLoadingProps, { LoadingProps } from '../../composables/props/useLoadingProps'
import useRoundedProps, { RoundedProps } from '../../composables/props/useRoundedProps'
import useShadowProps, { ShadowProps } from '../../composables/props/useShadowProps'
import useSizeProps, { SizeProps } from '../../composables/props/useSizeProps'

export interface ButtonGroupProps extends
    BorderProps,
    ColorProps,
    ComponentProps,
    DenseProps,
    DisabledProps,
    ForceTextProps,
    LoadingProps,
    RoundedProps,
    ShadowProps,
    SizeProps
{}

export interface ButtonProps extends
    ComponentProps,
    ContentProps,
    DisabledProps,
    FixProps,
    LoadingProps
{}

export const buttonPropsOptions = {
    color: ['color', 'variant', 'backgroundColor', 'borderColor', 'textColor', 'shadowColor'],
    fix: ['prefix', 'suffix', 'keepPrefixLoading', 'keepSuffixLoading'],
}

export const buttonGroupProps = {
    ...useBorderProps(),
    ...useColorProps(buttonPropsOptions.color),
    ...useComponentProps(),
    ...useDenseProps(),
    ...useDisabledProps(),
    ...useForceTextProps(),
    ...useLoadingProps(),
    ...useRoundedProps(),
    ...useShadowProps(),
    ...useSizeProps(),
}

export const buttonProps = {
    ...buttonGroupProps,
    ...useContentProps(),
    ...useDisabledProps(),
    ...useFixProps(buttonPropsOptions.fix),
    ...useLoadingProps(),
}

export const injectButtonGroupName = 'button-group'

export default buttonProps
