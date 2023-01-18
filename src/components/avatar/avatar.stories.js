import { ChiAvatar } from './index'
import { ChiScreen } from '../screen'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { borderArgs, borderArgTypes } from '../../composables/props/useBorderProps'
import { colorArgs, colorArgTypes } from '../../composables/props/useColorProps'
import { componentArgs, componentArgTypes } from '../../composables/props/useComponentProps'
import { roundedArgs, roundedArgTypes } from '../../composables/props/useRoundedProps'
import { sizeArgs, sizeArgTypes } from '../../composables/props/useSizeProps'
import { srcArgs, srcArgTypes } from '../../composables/props/useSrcProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const avatarProps = { ...useGetThemeProperty('ui.avatar'), ...useGetThemeProperty('ui.avatarGroup') }

export default {
    title: 'Components/Avatar',
    component: ChiAvatar,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    parameters: {
        docs: {
            description: {
                component: 'The `ChiAvatar` component is used to display user or profile images.'
            },
        },
    },
    args: {
        ...borderArgs(avatarProps),
        ...colorArgs(avatarProps),
        ...componentArgs(avatarProps),
        ...roundedArgs(avatarProps),
        ...sizeArgs(avatarProps),
        ...srcArgs({ src: 'https://avatars.githubusercontent.com/u/24599450?v=4' }),
    },
    argTypes: {
        ...borderArgTypes(avatarProps),
        ...colorArgTypes(avatarProps),
        ...componentArgTypes(avatarProps),
        ...roundedArgTypes(avatarProps),
        ...sizeArgTypes(avatarProps),
        ...srcArgTypes(avatarProps),
        default: slotArgType('default'),
        fallback: slotArgType('fallback', 'Used if no image src is provided.'),
    }
}

export const Default = (args) => ({
    components: { ChiAvatar },
    setup() { return { args } },
    template: `
<ChiAvatar v-bind="args" />
    `,
})

export const Grouped = (args) => ({
    components: {
        ChiAvatar,
        'ChiAvatar.Group': ChiAvatar.Group
    },
    setup() { return { args } },
    template: `
<ChiAvatar.Group v-bind="args">
    <ChiAvatar />
    <ChiAvatar />
    <ChiAvatar :src="args.src" />
    <ChiAvatar :src="args.src" />
    <ChiAvatar>+2</ChiAvatar>
</ChiAvatar.Group>
    `,
})
