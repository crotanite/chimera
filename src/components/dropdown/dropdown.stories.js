import { ChiDropdown } from './index'
import { ChiButton } from '../button'
import { ChiScreen } from '../screen'
import { slotArgType } from '../../composables/useStoryArgTypes'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const divProps = useGetThemeProperty('ui.dropdown')

export default {
    title: 'Components/Dropdown',
    component: ChiDropdown,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    parameters: {
        docs: {
            description: {
                component: 'The `ChiDropdown` component.'
            },
        },
    },
    args: {
        //
    },
    argTypes: {
        //
        content: slotArgType('content'),
        default: slotArgType('default'),
        target: slotArgType('target'),
    }
}

export const Default = (args) => ({
    components: { ChiDropdown },
    setup() { return { args } },
    template: `
<ChiDropdown v-bind="args" />
    `,
})

export const CustomTarget = (args) => ({
    components: { ChiDropdown, ChiButton },
    setup() { return { args } },
    template: `
<ChiDropdown v-bind="args">
    <template #target="{ toggle }">
        <ChiButton content="custom toggle" @click="toggle" />
    </template>
</ChiDropdown>
    `,
})

export const DisableAutoClose = (args) => ({
    components: { ChiDropdown },
    setup() { return { args } },
    template: `
<ChiDropdown disable-auto-close v-bind="args" />
    `,
})
