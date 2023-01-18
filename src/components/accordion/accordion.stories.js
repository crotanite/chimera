import { PlusIcon } from '@heroicons/vue/24/outline'
import { ChiAccordion, accordionPropsOptions } from './index'
import { ChiScreen } from '../screen'
import { slotArgType, lipsum } from '../../composables/useStoryArgTypes'
import { colorArgs, colorArgTypes } from '../../composables/props/useColorProps'
import { componentArgs, componentArgTypes } from '../../composables/props/useComponentProps'
import { iconArgs, iconArgTypes } from '../../composables/props/useIconProps'
import { modelValueArgs, modelValueArgTypes } from '../../composables/props/useModelValueProps'
import { multipleArgs, multipleArgTypes } from '../../composables/props/useMultipleProps'
import { paddingArgs, paddingArgTypes } from '../../composables/props/usePaddingProps'
import { roundedArgs, roundedArgTypes } from '../../composables/props/useRoundedProps'
import { spacingArgs, spacingArgTypes } from '../../composables/props/useSpacingProps'
import { unstyledArgs, unstyledArgTypes } from '../../composables/props/useUnstyledProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const accordionProps = useGetThemeProperty('ui.accordion')

export default {
    title: 'Components/Accordion',
    component: ChiAccordion,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    parameters: {
        docs: {
            description: {
                component: 'The `ChiAccordion` component.'
            },
        },
    },
    args: {
        ...colorArgs(accordionProps, accordionPropsOptions.color),
        ...componentArgs(accordionProps),
        ...iconArgs(accordionProps),
        ...modelValueArgs({ modelValue: 'first' }),
        ...multipleArgs(accordionProps),
        ...paddingArgs(accordionProps),
        ...roundedArgs(accordionProps),
        ...spacingArgs(accordionProps, accordionPropsOptions.spacing),
        ...unstyledArgs(accordionProps),
    },
    argTypes: {
        ...colorArgTypes(accordionProps, accordionPropsOptions.color),
        ...componentArgTypes(accordionProps),
        ...iconArgTypes(accordionProps),
        ...modelValueArgTypes(accordionProps),
        ...multipleArgTypes(accordionProps),
        ...paddingArgTypes(accordionProps),
        ...roundedArgTypes(accordionProps),
        ...spacingArgTypes(accordionProps, accordionPropsOptions.spacing),
        ...unstyledArgTypes(accordionProps),
        default: slotArgType('default'),
    }
}

export const Default = (args) => ({
    components: {
        ChiAccordion,
        'ChiAccordion.Item': ChiAccordion.Item,
        'ChiAccordion.Title': ChiAccordion.Title,
        'ChiAccordion.Panel': ChiAccordion.Panel
    },
    setup() { return { args } },
    template: `
<ChiAccordion v-bind="args">
    <ChiAccordion.Item value="first">
        <ChiAccordion.Title content="item 1" />
        <ChiAccordion.Panel>${lipsum}</ChiAccordion.Panel>
    </ChiAccordion.Item>
    <ChiAccordion.Item value="second">
        <ChiAccordion.Title content="item 2" />
        <ChiAccordion.Panel>${lipsum}</ChiAccordion.Panel>
    </ChiAccordion.Item>
    <ChiAccordion.Item value="third">
        <ChiAccordion.Title content="item 3" />
        <ChiAccordion.Panel>${lipsum}</ChiAccordion.Panel>
    </ChiAccordion.Item>
</ChiAccordion>
    `,
})

export const CustomControl = (args) => ({
    components: {
        ChiAccordion,
        PlusIcon,
        'ChiAccordion.Item': ChiAccordion.Item,
        'ChiAccordion.Title': ChiAccordion.Title,
        'ChiAccordion.Panel': ChiAccordion.Panel
    },
    setup() { return { args } },
    template: `
<ChiAccordion>
    <ChiAccordion.Item custom-control value="custom">
        <ChiAccordion.Title>
            <template #default="{ toggle }">
                Clicking the plus is the only way to open this item:
                <PlusIcon class="cursor-pointer inline h-4 w-4" @click="toggle" />
            </template>
        </ChiAccordion.Title>
        <ChiAccordion.Panel>${lipsum}</ChiAccordion.Panel>
    </ChiAccordion.Item>
</ChiAccordion>
    `,
})

// export const Item = (args) => ({
//     components: {
//         ChiAccordion,
//         'ChiAccordion.Item': ChiAccordion.Item,
//         'ChiAccordion.Title': ChiAccordion.Title,
//         'ChiAccordion.Panel': ChiAccordion.Panel,
//     },
//     setup() {
//         return { args }
//     },
//     template: `
// <ChiAccordion>
//     <ChiAccordion.Item v-bind="args" value="2-first">
//         <ChiAccordion.Title content="First" />
//         <ChiAccordion.Panel>${lipsum}</ChiAccordion.Panel>
//     </ChiAccordion.Item>
//     <ChiAccordion.Item value="2-second">
//         <ChiAccordion.Title content="Second" />
//         <ChiAccordion.Panel>${lipsum}</ChiAccordion.Panel>
//     </ChiAccordion.Item>
// </ChiAccordion>
//     `,
// })
// Item.args = {
//     //
// }

// export const WithCustomIcon = (args) => ({
//     components: {
//         ChiAccordion,
//         'ChiAccordion.Item': ChiAccordion.Item,
//         'ChiAccordion.Title': ChiAccordion.Title,
//         'ChiAccordion.Panel': ChiAccordion.Panel,
//     },
//     setup() { return { args } },
//     template: `
// <ChiAccordion v-bind="args">
//     <ChiAccordion.Item value="first">
//         <ChiAccordion.Title content="First" />
//         <ChiAccordion.Panel>${lipsum}</ChiAccordion.Panel>
//     </ChiAccordion.Item>
// </ChiAccordion>
//     `,
// })
// WithCustomIcon.args = {
//     icon: PlusIcon
// }

// export const CustomControl = (args) => ({
//     components: {
//         ChiAccordion,
//         PlusIcon,
//         'ChiAccordion.Control': ChiAccordion.Control,
//         'ChiAccordion.Item': ChiAccordion.Item,
//         'ChiAccordion.Title': ChiAccordion.Title,
//         'ChiAccordion.Panel': ChiAccordion.Panel,
//     },
//     setup() {
//         return { args }
//     },
//     template: `
// <ChiAccordion custom-control>
//     <ChiAccordion.Item value="4-first">
//         <ChiAccordion.Title content="First">
//             <ChiAccordion.Control>
//                 <template #default="{ toggle }">
//                     <PlusIcon class="h-4 w-4" @click="toggle" />
//                 </template>
//             </ChiAccordion.Control>
//         </ChiAccordion.Title>
//         <ChiAccordion.Panel>${lipsum}</ChiAccordion.Panel>
//     </ChiAccordion.Item>
// </ChiAccordion>
//     `,
// })
