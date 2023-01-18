import { ChiGrid, gridPropsOptions } from './index'
import { ChiButton } from '../button'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { componentArgs, componentArgTypes } from '../../composables/props/useComponentProps'
import { gapArgs, gapArgTypes } from '../../composables/props/useGapProps'
import { gridParentArgs, gridParentArgTypes } from '../../composables/props/useGridParentProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const gridProps = useGetThemeProperty('ui.grid')

export default {
    title: 'Components/Grid',
    component: ChiGrid,
    parameters: {
        docs: {
            description: {
                component: 'The `ChiGrid` component is polymorphic.'
            },
        },
    },
    args: {
        ...componentArgs(gridProps),
        ...gapArgs(gridProps),
        ...gridParentArgs(gridProps, gridPropsOptions.gridParent),
    },
    argTypes: {
        ...componentArgTypes(gridProps),
        ...gapArgTypes(gridProps),
        ...gridParentArgTypes(gridProps, gridPropsOptions.gridParent),
        default: slotArgType('default'),
    },
}

export const Default = (args) => ({
    components: { ChiGrid, ChiButton },
    setup() { return { args } },
    template: `
<ChiGrid v-bind="args" class="min-h-[50px] bg-red-500">
    <ChiButton>Button 1</ChiButton>
    <ChiButton>Button 2</ChiButton>
    <ChiButton>Button 3</ChiButton>
</ChiGrid>
    `,
})
