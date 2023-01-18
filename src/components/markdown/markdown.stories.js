import { ChiMarkdown } from './index'
import { ChiScreen } from '../screen'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { contentArgs, contentArgTypes } from '../../composables/props/useContentProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const markdownProps = { ...useGetThemeProperty('ui.markdown') }

export default {
    title: 'Components/Markdown',
    component: ChiMarkdown,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    args: {
        ...contentArgs({ content: '# Markdown' }),
    },
    argTypes: {
        ...contentArgTypes(markdownProps),
        default: slotArgType('default'),
    },
}

const Template = (args) => ({
    components: { ChiMarkdown },
    setup() { return { args } },
    template: `
<ChiMarkdown v-bind="args" />
    `,
})

export const Default = Template.bind({})
