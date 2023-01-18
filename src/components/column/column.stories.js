import { ChiColumn } from './index'
import { ChiScreen } from '../screen'
import { ChiFlex } from '../flex'
import { ChiGrid } from '../grid'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { componentArgs, componentArgTypes } from '../../composables/props/useComponentProps'
import { flexChildArgs, flexChildArgTypes } from '../../composables/props/useFlexChildProps'
import { gridChildArgs, gridChildArgTypes } from '../../composables/props/useGridChildProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const columnProps = useGetThemeProperty('ui.column')

export default {
    title: 'Components/Column',
    component: ChiColumn,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    parameters: {
        docs: {
            description: {
                component: 'The `ChiColumn` component is polymorphic and can be used in conjunction with the `ChiFlex` or `ChiGrid` components. It can alternatively be used as a subcomponent with `ChiFlex.Column` or `ChiGrid.Column`.'
            },
        },
    },
    args: {
        ...componentArgs(columnProps),
        ...flexChildArgs(columnProps),
        ...gridChildArgs(columnProps),
    },
    argTypes: {
        ...componentArgTypes(columnProps),
        ...flexChildArgTypes(columnProps),
        ...gridChildArgTypes(columnProps),
        default: slotArgType('default'),
    },
}

export const Default = (args) => ({
    components: { ChiColumn },
    setup() { return { args } },
    template: `
<ChiColumn v-bind="args">column</ChiColumn>
    `,
})

export const WithFlex = (args) => ({
    components: {
        ChiFlex,
        'ChiFlex.Column': ChiColumn
    },
    setup() { return { args } },
    template: `
<ChiFlex>
    <ChiFlex.Column class="bg-blue-500" grow>column 1</ChiFlex.Column>
    <ChiFlex.Column class="bg-green-500">column 2</ChiFlex.Column>
</ChiFlex>
    `,
})

export const WithGrid = (args) => ({
    components: {
        ChiGrid,
        'ChiGrid.Column': ChiColumn
    },
    setup() { return { args } },
    template: `
<ChiGrid>
    <ChiGrid.Column class="bg-blue-500" :span="3" :start="2">column 1</ChiGrid.Column>
    <ChiGrid.Column class="bg-green-500" :end="8">column 2</ChiGrid.Column>
</ChiGrid>
    `,
})
