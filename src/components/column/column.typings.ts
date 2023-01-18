import useComponentProps, { ComponentProps } from '../../composables/props/useComponentProps'
import useFlexChildProps, { FlexChildProps } from '../../composables/props/useFlexChildProps'
import useGridChildProps, { GridChildProps } from '../../composables/props/useGridChildProps'
import useOrderProps, { OrderProps } from '../../composables/props/useOrderProps'

export interface ColumnProps extends
    ComponentProps,
    FlexChildProps,
    GridChildProps,
    OrderProps
{}

export const columnProps = {
    ...useComponentProps(),
    ...useFlexChildProps(),
    ...useGridChildProps(),
    ...useOrderProps(),
}

export default columnProps
