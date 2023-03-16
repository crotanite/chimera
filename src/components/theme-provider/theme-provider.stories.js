import { ChiThemeProvider } from './index'
import { ChiAccordion } from '../accordion'
import { ChiDiv } from '../div'
import { ChiScreen } from '../screen'
import { ChimeraTheme } from '../../theme'
import { slotArgType, lipsum } from '../../composables/useStoryArgTypes'
import { themeProps, themeProviderArgTypes } from './theme-provider.typings'

export default {
    title: 'App/Theme Provider',
    component: ChiThemeProvider,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    parameters: {
        docs: {
            description: {
                component: 'The `ChiThemeProvider` component can be used to override the default chimera theme.'
            },
        },
    },
    args: {
        theme: themeProps.theme.default()
    },
    argTypes: {
        theme: themeProviderArgTypes.theme,
        default: slotArgType(),
    }
}

export const Default = (args) => ({
    components: { ChiThemeProvider, ChiDiv },
    setup() { return { args } },
    template: `
<ChiThemeProvider v-bind="args">
    <ChiDiv color="primary" content="Primary Color" :px="{ xxs: 'md', md: 'lg' }" :py="{ xxs: 'xs', md: 'md' }" variant="filled" />
</ChiThemeProvider>
    `,
})

const CustomThemeColor = JSON.parse(JSON.stringify(ChimeraTheme))
CustomThemeColor.primaryFallback = 'red'
export const CustomColor = (args) => ({
    components: { ChiThemeProvider, ChiDiv },
    setup() { return { args } },
    template: `
<ChiThemeProvider v-bind="args">
    <ChiDiv color="primary" content="Primary Color" variant="filled" />
</ChiThemeProvider>
    `,
})
CustomColor.args = {
    theme: CustomThemeColor
}

const CustomThemeComponent = JSON.parse(JSON.stringify(ChimeraTheme))
CustomThemeComponent.ui.accordion.color = 'blue'
export const CustomComponent = (args) => ({
    components: {
        ChiThemeProvider,
        ChiAccordion,
        'ChiAccordion.Item': ChiAccordion.Item,
        'ChiAccordion.Title': ChiAccordion.Title,
        'ChiAccordion.Panel': ChiAccordion.Panel,
    },
    setup() { return { args } },
    template: `
<ChiThemeProvider v-bind="args">
    <ChiAccordion>
        <ChiAccordion.Item value="1-first">
            <ChiAccordion.Title content="item" />
            <ChiAccordion.Panel>${lipsum}</ChiAccordion.Panel>
        </ChiAccordion.Item>
    </ChiAccordion>
</ChiThemeProvider>
    `,
})
CustomComponent.args = {
    theme: CustomThemeComponent
}
