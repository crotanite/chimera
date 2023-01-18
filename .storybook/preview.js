import './tailwind.css'
import { addons } from '@storybook/addons'
import Store from 'storybook-darkmode-vue/src/Store'
import { isDark } from '../src/composables/useDark'
import { withSource } from './withSource'

const channel = addons.getChannel()
channel.on('STORYBOOK_DARK_MODE_VUE', (state) => {
    isDark.value = state
})

export const decorators = [
    withSource,
]

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        // expanded: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    docs: {
        theme: isDark.value ? Store.getThemes()[true] : Store.getThemes()[false],
    },
    layout: 'fullscreen',
    options: {
        storySort: {
            method: 'alphabetical',
        },
    }
}
