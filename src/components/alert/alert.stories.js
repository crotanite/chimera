import { ChiAlert } from './index'
import { ChiScreen } from '../screen'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { borderArgs, borderArgTypes } from '../../composables/props/useBorderProps'
import { componentArgs, componentArgTypes } from '../../composables/props/useComponentProps'
import { contentArgs, contentArgTypes } from '../../composables/props/useContentProps'
import { paddingArgs, paddingArgTypes } from '../../composables/props/usePaddingProps'
import { roundedArgs, roundedArgTypes } from '../../composables/props/useRoundedProps'
import { shadowArgs, shadowArgTypes } from '../../composables/props/useShadowProps'
import { themeArgs, themeArgTypes } from '../../composables/props/useThemeProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const alertProps = { ...useGetThemeProperty('ui.alert') }

export default {
    title: 'Components/Alert',
    component: ChiAlert,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    args: {
        ...borderArgs(alertProps),
        ...componentArgs(alertProps),
        ...contentArgs({ content: 'Alert' }),
        ...paddingArgs(alertProps),
        ...roundedArgs(alertProps),
        ...shadowArgs(alertProps),
        ...themeArgs(alertProps),
    },
    argTypes: {
        ...borderArgTypes(alertProps),
        ...componentArgTypes(alertProps),
        ...contentArgTypes(alertProps),
        ...paddingArgTypes(alertProps),
        ...roundedArgTypes(alertProps),
        ...shadowArgTypes(alertProps),
        ...themeArgTypes(alertProps),
        default: slotArgType('default'),
    },
}

export const Default = (args) => ({
    components: { ChiAlert },
    setup() { return { args } },
    methods: {},
    template: `
<ChiAlert v-bind="args" />
    `,
})
