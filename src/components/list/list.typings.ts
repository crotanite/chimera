import useColorProps, { ColorProps } from '../../composables/props/useColorProps'
import useComponentProps, { ComponentProps } from '../../composables/props/useComponentProps'
import useContentProps, { ContentProps } from '../../composables/props/useContentProps'
import useFixProps, { FixProps } from '../../composables/props/useFixProps'
import useHoverProps, { HoverProps } from '../../composables/props/useHoverProps'
import usePaddingProps, { PaddingProps } from '../../composables/props/usePaddingProps'
import useRoundedProps, { RoundedProps } from '../../composables/props/useRoundedProps'
import useSpacingProps, { SpacingProps } from '../../composables/props/useSpacingProps'

export interface ListProps extends
    ColorProps,
    ComponentProps,
    HoverProps,
    PaddingProps,
    RoundedProps,
    SpacingProps
{}

export interface ListItemProps extends
    ComponentProps,
    ContentProps,
    FixProps,
    SpacingProps
{}

export const listPropsOptions = {
    color: ['color', 'variant'],
    fix: ['prefix', 'suffix'],
    spacing: ['spacingY'],
    itemSpacing: ['spacingX'],
}

export const listProps = {
    ...useColorProps(listPropsOptions.color),
    ...useComponentProps(),
    ...useHoverProps(),
    ...usePaddingProps(),
    ...useRoundedProps(),
    ...useSpacingProps(listPropsOptions.spacing),
}

export const listItemProps = {
    ...useColorProps(listPropsOptions.color),
    ...useComponentProps(),
    ...useContentProps(),
    ...useFixProps(listPropsOptions.fix),
    ...useHoverProps(),
    ...usePaddingProps(),
    ...useRoundedProps(),
    ...useSpacingProps(listPropsOptions.itemSpacing),
}

export const listInjectKey = 'list'

export default listProps
