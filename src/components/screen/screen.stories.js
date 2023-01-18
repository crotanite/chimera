import { ChiScreen } from '.'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { colorArgs, colorArgTypes } from '../../composables/props/useColorProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const screenProps = useGetThemeProperty('ui.screen')

export default {
    title: 'Components/Screen',
    component: ChiScreen,
    parameters: {
        docs: {
            description: {
                component: 'The `ChiScreen` component fills 100% of the screen.'
            },
        },
    },
    args: {
        ...colorArgs(screenProps),
    },
    argTypes: {
        ...colorArgTypes(screenProps),
        default: slotArgType('default'),
    },
}

const Template = (args) => ({
    components: { ChiScreen },
    setup() { return { args } },
    template: `
<ChiScreen class="scale-100" v-bind="args">screen</ChiScreen>
    `
})

export const Default = Template.bind({})
