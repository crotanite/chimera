import { ChiFlex } from './index'
import { ChiButton } from '../button'
import { ChiScreen } from '../screen'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { componentArgs, componentArgTypes } from '../../composables/props/useComponentProps'
import { flexParentArgs, flexParentArgTypes } from '../../composables/props/useFlexParentProps'
import { gapArgs, gapArgTypes } from '../../composables/props/useGapProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const flexProps = useGetThemeProperty('ui.flex')

export default {
    title: 'Components/Flex',
    component: ChiFlex,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    parameters: {
        docs: {
            description: {
                component: '`ChiFlex` is a polymorphic component.'
            },
        },
    },
    args: {
        ...componentArgs(flexProps),
        ...flexParentArgs(flexProps),
        ...gapArgs(flexProps),
    },
    argTypes: {
        ...componentArgTypes(flexProps),
        ...flexParentArgTypes(flexProps),
        ...gapArgTypes(flexProps),
        default: slotArgType('default'),
    },
}

export const Default = (args) => ({
    components: {
        ChiFlex,
        'ChiFlex.Column': ChiFlex.Column,
        ChiButton
    },
    setup() { return { args } },
    template: `
<ChiFlex v-bind="args" class="min-h-[50px] bg-yellow-500">
    <ChiFlex.Column class="bg-blue-500">column 1</ChiFlex.Column>
    <ChiFlex.Column class="bg-green-500">column 2</ChiFlex.Column>
    <ChiFlex.Column class="bg-red-500">column 3</ChiFlex.Column>
</ChiFlex>
    `,
})

export const Ordered = (args) => ({
    components: {
        ChiFlex,
        'ChiFlex.Column': ChiFlex.Column,
        ChiButton
    },
    setup() { return { args } },
    template: `
<ChiFlex v-bind="args" class="min-h-[50px] bg-yellow-500">
    <ChiFlex.Column class="bg-blue-500" :order="2">column 1</ChiFlex.Column>
    <ChiFlex.Column class="bg-green-500" :order="3">column 2</ChiFlex.Column>
    <ChiFlex.Column class="bg-red-500" :order="1">column 3</ChiFlex.Column>
</ChiFlex>
    `,
})
