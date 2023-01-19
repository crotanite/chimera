import useBorderProps, { BorderProps } from '../../composables/props/useBorderProps'
import useColorProps, { ColorProps } from '../../composables/props/useColorProps'
import useComponentProps, { ComponentProps } from '../../composables/props/useComponentProps'
import useContentProps, { ContentProps } from '../../composables/props/useContentProps'
import useFlexChildProps, { FlexChildProps } from '../../composables/props/useFlexChildProps'
import useFlexParentProps, { FlexParentProps } from '../../composables/props/useFlexParentProps'
import useForceTextProps, { ForceTextProps } from '../../composables/props/useForceTextProps'
import useGapProps, { GapProps } from '../../composables/props/useGapProps'
import useGridChildProps, { GridChildProps } from '../../composables/props/useGridChildProps'
import useGridParentProps, { GridParentProps } from '../../composables/props/useGridParentProps'
import useHeightProps, { HeightProps } from '../../composables/props/useHeightProps'
import useHoverProps, { HoverProps } from '../../composables/props/useHoverProps'
import useOrderProps, { OrderProps } from '../../composables/props/useOrderProps'
import usePaddingProps, { PaddingProps } from '../../composables/props/usePaddingProps'
import useRoundedProps, { RoundedProps } from '../../composables/props/useRoundedProps'
import useShadowProps, { ShadowProps } from '../../composables/props/useShadowProps'
import useWidthProps, { WidthProps } from '../../composables/props/useWidthProps'

export interface DivProps extends
    BorderProps,
    ColorProps,
    ComponentProps,
    ContentProps,
    FlexChildProps,
    FlexParentProps,
    ForceTextProps,
    GapProps,
    GridChildProps,
    GridParentProps,
    HeightProps,
    HoverProps,
    OrderProps,
    PaddingProps,
    RoundedProps,
    ShadowProps,
    WidthProps
{}

export const divPropsOptions = {
    color: ['color', 'variant', 'backgroundColor', 'borderColor', 'textColor', 'shadowColor'],
}

export const divProps = {
    ...useBorderProps(),
    ...useColorProps(divPropsOptions.color),
    ...useComponentProps(),
    ...useContentProps(),
    ...useFlexChildProps(),
    ...useFlexParentProps(),
    ...useForceTextProps({ forceText: null }),
    ...useGapProps({ gap: null, gapX: null, gapY: null }),
    ...useGridChildProps(),
    ...useGridParentProps(),
    ...useHeightProps(['height', 'maxHeight']),
    ...useHoverProps({ hover: false }),
    ...useOrderProps({ order: null }),
    ...usePaddingProps(),
    ...useRoundedProps(),
    ...useShadowProps(),
    ...useWidthProps({ width: null, maxWidth: null }, true),
}

export default divProps
