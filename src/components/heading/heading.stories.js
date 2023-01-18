import { ChiHeading, headingArgs, headingArgTypes } from './index'
import { ChiScreen } from '../screen'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { contentArgs, contentArgTypes } from '../../composables/props/useContentProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const headingProps = { ...useGetThemeProperty('ui.heading') }

export default {
    title: 'Components/Heading',
    component: ChiHeading,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    args: {
        ...contentArgs({ content: 'Heading' }),
        ...headingArgs(headingProps),
    },
    argTypes: {
        ...contentArgTypes(headingProps),
        ...headingArgTypes(headingProps),
        default: slotArgType('default'),
    },
}

const Template = (args) => ({
    components: { ChiHeading },
    setup() { return { args } },
    template: `
<ChiHeading v-bind="args" />
    `,
})

export const Default = Template.bind({})
