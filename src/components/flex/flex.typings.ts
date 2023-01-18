import useComponentProps, { ComponentProps } from '../../composables/props/useComponentProps'
import useFlexParentProps, { FlexParentProps } from '../../composables/props/useFlexParentProps'
import useGapProps, { GapProps } from '../../composables/props/useGapProps'

export interface FlexProps extends
    ComponentProps,
    FlexParentProps,
    GapProps
{}

export const flexPropsOptions = {
    flexParent: ['flexDirection', 'flexItems', 'flexJustify', 'flexWrap'],
}

export const flexProps = {
    ...useComponentProps(),
    ...useFlexParentProps(flexPropsOptions.flexParent),
    ...useGapProps(),
}

export default flexProps
