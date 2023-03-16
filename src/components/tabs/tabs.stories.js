import { ChiTabs, tabsPropsOptions, tabsArgs, tabsArgTypes } from './index'
import { ChiScreen } from '../screen'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { colorArgs, colorArgTypes } from '../../composables/props/useColorProps'
import { flexParentArgs, flexParentArgTypes } from '../../composables/props/useFlexParentProps'
import { modelValueArgs, modelValueArgTypes } from '../../composables/props/useModelValueProps'
import { paddingArgs, paddingArgTypes } from '../../composables/props/usePaddingProps'
import { roundedArgs, roundedArgTypes } from '../../composables/props/useRoundedProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const tabsProps = useGetThemeProperty('ui.tabs')

export default {
    title: 'Components/Tabs',
    component: ChiTabs,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    parameters: {
        docs: {
            description: {
                component: 'The `ChiTabs` component.'
            },
        },
    },
    args: {
        ...colorArgs(tabsProps, tabsPropsOptions.color),
        ...flexParentArgs(tabsProps, tabsPropsOptions.flexParent),
        ...modelValueArgs({ modelValue: 'first' }),
        ...paddingArgs(tabsProps),
        ...roundedArgs(tabsProps),
        ...tabsArgs(tabsProps),
    },
    argTypes: {
        ...colorArgTypes(tabsProps, tabsPropsOptions.color),
        ...flexParentArgTypes(tabsProps, tabsPropsOptions.flexParent),
        ...modelValueArgTypes(tabsProps),
        ...paddingArgTypes(tabsProps),
        ...roundedArgTypes(tabsProps),
        ...tabsArgTypes(tabsProps),
        list: slotArgType('list'),
        default: slotArgType('default'),
    },
}

export const Default = (args) => ({
    components: {
        ChiTabs,
        'ChiTabs.Tab': ChiTabs.Tab,
        'ChiTabs.Panel': ChiTabs.Panel,
    },
    setup() { return { args } },
    template: `
<ChiTabs v-bind="args">
    <template #list>
        <ChiTabs.Tab value="first">First Tab</ChiTabs.Tab>
        <ChiTabs.Tab value="second">Second Tab</ChiTabs.Tab>
        <ChiTabs.Tab value="third">Third Tab</ChiTabs.Tab>
    </template>
    <ChiTabs.Panel value="first">first panel</ChiTabs.Panel>
    <ChiTabs.Panel value="second">second panel</ChiTabs.Panel>
    <ChiTabs.Panel value="third">third panel</ChiTabs.Panel>
</ChiTabs>
    `
})
