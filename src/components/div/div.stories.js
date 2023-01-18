import { ChiDiv, divPropsOptions } from './index'
import { ChiScreen } from '../screen'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { borderArgs, borderArgTypes } from '../../composables/props/useBorderProps'
import { colorArgs, colorArgTypes } from '../../composables/props/useColorProps'
import { componentArgs, componentArgTypes } from '../../composables/props/useComponentProps'
import { contentArgs, contentArgTypes } from '../../composables/props/useContentProps'
import { flexChildArgs, flexChildArgTypes } from '../../composables/props/useFlexChildProps'
import { flexParentArgs, flexParentArgTypes } from '../../composables/props/useFlexParentProps'
import { forceTextArgs, forceTextArgTypes } from '../../composables/props/useForceTextProps'
import { gapArgs, gapArgTypes } from '../../composables/props/useGapProps'
import { gridChildArgs, gridChildArgTypes } from '../../composables/props/useGridChildProps'
import { gridParentArgs, gridParentArgTypes } from '../../composables/props/useGridParentProps'
import { heightArgs, heightArgTypes } from '../../composables/props/useHeightProps'
import { hoverArgs, hoverArgTypes } from '../../composables/props/useHoverProps'
import { paddingArgs, paddingArgTypes } from '../../composables/props/usePaddingProps'
import { roundedArgs, roundedArgTypes } from '../../composables/props/useRoundedProps'
import { shadowArgs, shadowArgTypes } from '../../composables/props/useShadowProps'
import { widthArgs, widthArgTypes } from '../../composables/props/useWidthProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const divProps = useGetThemeProperty('ui.div')

export default {
    title: 'Components/Div',
    component: ChiDiv,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    parameters: {
        docs: {
            description: {
                component: 'The `ChiDiv` component is polymorphic and can be used to build a range of other ui components. By default, the only stylings enabled are the background and text color that respond to the current color scheme.'
            },
        },
    },
    args: {
        ...borderArgs(divProps),
        ...colorArgs(divProps, divPropsOptions.color),
        ...componentArgs(divProps),
        ...contentArgs({ content: 'ChiDiv' }),
        ...flexChildArgs(divProps),
        ...flexParentArgs(divProps),
        ...forceTextArgs(divProps),
        ...gapArgs(divProps),
        ...gridChildArgs(divProps),
        ...gridParentArgs(divProps),
        ...heightArgs(divProps),
        ...hoverArgs(divProps),
        ...paddingArgs(divProps),
        ...roundedArgs(divProps),
        ...shadowArgs(divProps),
        ...widthArgs(divProps),
    },
    argTypes: {
        ...borderArgTypes(divProps),
        ...colorArgTypes(divProps, divPropsOptions.color),
        ...componentArgTypes(divProps),
        ...contentArgTypes(divProps),
        ...flexChildArgTypes(divProps),
        ...flexParentArgTypes(divProps),
        ...forceTextArgTypes(divProps),
        ...gapArgTypes(divProps),
        ...gridChildArgTypes(divProps),
        ...gridParentArgTypes(divProps),
        ...heightArgTypes(divProps),
        ...hoverArgTypes(divProps),
        ...paddingArgTypes(divProps),
        ...roundedArgTypes(divProps),
        ...shadowArgTypes(divProps),
        ...widthArgTypes(divProps),
        default: slotArgType('default'),
    }
}

export const Default = (args) => ({
    components: { ChiDiv },
    setup() { return { args } },
    template: `
<ChiDiv v-bind="args" />
    `,
})
