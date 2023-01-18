import { ChiLink } from './index'
import { ChiScreen } from '../screen'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { componentArgs, componentArgTypes } from '../../composables/props/useComponentProps'
import { contentArgs, contentArgTypes } from '../../composables/props/useContentProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const linkProps = { ...useGetThemeProperty('ui.link') }

export default {
    title: 'Components/Link',
    component: ChiLink,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    args: {
        ...componentArgs(linkProps),
        ...contentArgs({ content: 'Link' }),
    },
    argTypes: {
        ...componentArgTypes(linkProps),
        ...contentArgTypes(linkProps),
        default: slotArgType('default'),
    },
}

const Template = (args) => ({
    components: { ChiLink },
    setup() { return { args } },
    template: `
<ChiLink v-bind="args" />
    `,
})

export const Default = Template.bind({})
