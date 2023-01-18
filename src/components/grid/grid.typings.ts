import useComponentProps, { ComponentProps } from '../../composables/props/useComponentProps'
import useGapProps, { GapProps } from '../../composables/props/useGapProps'
import useGridParentProps, { GridParentProps } from '../../composables/props/useGridParentProps'

export interface GridProps extends
    ComponentProps,
    GapProps,
    GridParentProps
{}

export const gridPropsOptions = {
    gridParent: ['cols', 'flow', 'rows'],
}

export const gridProps = {
    ...useComponentProps(),
    ...useGapProps(),
    ...useGridParentProps(gridPropsOptions.gridParent),
}

export default gridProps
