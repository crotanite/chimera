import useBorderProps, { BorderProps } from '../../composables/props/useBorderProps'
import useColorProps, { ColorProps } from '../../composables/props/useColorProps'
import useComponentProps, { ComponentProps } from '../../composables/props/useComponentProps'
import useRoundedProps, { RoundedProps } from '../../composables/props/useRoundedProps'
import useSizeProps, { SizeProps } from '../../composables/props/useSizeProps'
import useSrcProps, { SrcProps } from '../../composables/props/useSrcProps'

export interface AvatarGroupProps extends
    BorderProps,
    ColorProps,
    ComponentProps,
    RoundedProps,
    SizeProps
{}

export interface AvatarProps extends
    BorderProps,
    ColorProps,
    ComponentProps,
    RoundedProps,
    SizeProps,
    SrcProps
{}

export const avatarGroupProps = {
    ...useBorderProps(),
    ...useColorProps(),
    ...useComponentProps(),
    ...useRoundedProps(),
    ...useSizeProps(),
}

export const avatarProps = {
    ...avatarGroupProps,
    ...useSrcProps({ src: null }),
}

export const injectAvatarGroupName = 'avatar-group'

export default avatarProps
