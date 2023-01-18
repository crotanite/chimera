import { ChiDarkToggle } from '.'
import { ChiScreen } from '../../components/screen'

export default {
    title: 'Components/DarkToggle',
    component: ChiDarkToggle,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    args: {
        //
    },
    argTypes: {
        //
    },
}

export const Default = (args) => ({
    components: { ChiDarkToggle },
    setup() { return { args } },
    template: `
        <ChiDarkToggle v-bind="args" />
    `,
})
