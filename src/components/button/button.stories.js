import { ChiButton, buttonPropsOptions } from './index'
import { ChiScreen } from '../screen'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { borderArgs, borderArgTypes } from '../../composables/props/useBorderProps'
import { colors, colorArgs, colorArgTypes } from '../../composables/props/useColorProps'
import { componentArgs, componentArgTypes } from '../../composables/props/useComponentProps'
import { contentArgs, contentArgTypes } from '../../composables/props/useContentProps'
import { denseArgs, denseArgTypes } from '../../composables/props/useDenseProps'
import { disabledArgs, disabledArgTypes } from '../../composables/props/useDisabledProps'
import { fixArgs, fixArgTypes } from '../../composables/props/useFixProps'
import { forceTextArgs, forceTextArgTypes } from '../../composables/props/useForceTextProps'
import { loadingArgs, loadingArgTypes } from '../../composables/props/useLoadingProps'
import { roundedArgs, roundedArgTypes } from '../../composables/props/useRoundedProps'
import { shadowArgs, shadowArgTypes } from '../../composables/props/useShadowProps'
import { sizeArgs, sizeArgTypes } from '../../composables/props/useSizeProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const buttonProps = { ...useGetThemeProperty('ui.buttonGroup'), ...useGetThemeProperty('ui.button') }

export default {
    title: 'Components/Button',
    component: ChiButton,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    parameters: {
        docs: {
            description: {
                component: 'The `ChiButton` component is polymorphic and used to render buttons or links. The `ChiButton.Group` component can be used to group together multiple buttons, it comes with its own props such as `color, variant, etc` but these can be overwritten by the button itself.'
            },
        },
    },
    args: {
        ...borderArgs(buttonProps),
        ...colorArgs(buttonProps, buttonPropsOptions.color),
        ...componentArgs(buttonProps),
        ...contentArgs({ content: 'Button' }),
        ...denseArgs(buttonProps),
        ...disabledArgs(buttonProps),
        ...fixArgs(buttonProps, buttonPropsOptions.fix),
        ...forceTextArgs(buttonProps),
        ...loadingArgs(buttonProps),
        ...roundedArgs(buttonProps),
        ...shadowArgs(buttonProps),
        ...sizeArgs(buttonProps),
    },
    argTypes: {
        ...borderArgTypes(buttonProps),
        ...colorArgTypes(buttonProps, buttonPropsOptions.color),
        ...componentArgTypes(buttonProps),
        ...contentArgTypes(buttonProps),
        ...denseArgTypes(buttonProps),
        ...disabledArgTypes(buttonProps),
        ...fixArgTypes(buttonProps, buttonPropsOptions.fix),
        ...forceTextArgTypes(buttonProps),
        ...loadingArgTypes(buttonProps),
        ...roundedArgTypes(buttonProps),
        ...shadowArgTypes(buttonProps),
        ...sizeArgTypes(buttonProps),
        default: slotArgType('default')
    }
}

export const Default = (args) => ({
    components: { ChiButton },
    setup() { return { args } },
    template: `
<ChiButton v-bind="args" />
    `,
})

let ColorsOutput = ''
colors.forEach((color) => {
    if (color === 'primary') {
        ColorsOutput += `<ChiButton content="${color} (Default)" color="${color}" v-bind="args" />&nbsp;&nbsp;`
    } else {
        ColorsOutput += `<ChiButton content="${color}" color="${color}" v-bind="args" />&nbsp;&nbsp;`
    }
})
export const Colors = (args) => ({
    components: { ChiButton },
    setup() {
        delete args.color
        delete args.content
        return { args }
    },
    template: ColorsOutput,
})
Colors.argTypes = {
    color: { control: false },
    content: { control: false },
    backgroundColor: { control: false },
    borderColor: { control: false },
    textColor: { control: false },
    shadowColor: { control: false },
}

export const Variants = (args) => ({
    components: { ChiButton },
    setup() {
        delete args.content
        delete args.variant
        return { args }
    },
    template: `
<ChiButton content="Filled (Default)" v-bind="args" />&nbsp;
<ChiButton content="Pale" variant="pale" v-bind="args" />&nbsp;
<ChiButton content="Transparent" variant="transparent" v-bind="args" />
    `,
})
Variants.argTypes = {
    content: { control: false },
    variant: { control: false },
}

export const WithIcon = (args) => ({
    components: { ChiButton },
    setup() { return { args } },
    template: `
<ChiButton v-bind="args" />
    `,
})
WithIcon.args = {
    content: 'Download',
    // prefix: ArrowDownOnSquareIcon,
    // suffix: ArrowDownOnSquareIcon,
}

export const Grouped = (args) => ({
    components: { ChiButton, 'ChiButton.Group': ChiButton.Group },
    setup() { return { args } },
    template: `
<ChiButton.Group v-bind="args">
    <ChiButton color="red" content="First" variant="transparent" />
    <ChiButton content="Second" />
    <ChiButton content="Third" />
</ChiButton.Group>
    `,
})
