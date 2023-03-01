import { ChiList, listPropsOptions } from './index'
import { ChiScreen } from '../screen'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { colorArgs, colorArgTypes } from '../../composables/props/useColorProps'
import { componentArgs, componentArgTypes } from '../../composables/props/useComponentProps'
import { contentArgs, contentArgTypes } from '../../composables/props/useContentProps'
import { hoverArgs, hoverArgTypes } from '../../composables/props/useHoverProps'
import { paddingArgs, paddingArgTypes } from '../../composables/props/usePaddingProps'
import { roundedArgs, roundedArgTypes } from '../../composables/props/useRoundedProps'
import { spacingArgs, spacingArgTypes } from '../../composables/props/useSpacingProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const listProps = { ...useGetThemeProperty('ui.list') }
const listItemProps = { ...useGetThemeProperty('ui.list'), ...useGetThemeProperty('ui.listItem') }

export default {
    title: 'Components/List',
    component: ChiList,
    decorators: [() => ({ components: { ChiScreen }, template: '<ChiScreen class="p-6"><story/></ChiScreen>' })],
    args: {
        //
    },
    argTypes: {
        //
        default: slotArgType('default'),
    },
}

export const Default = (args) => ({
    components: {
        ChiList,
        'ChiList.Item': ChiList.Item,
    },
    setup() { return { args } },
    template: `
<ChiList v-bind="args">
    <ChiList.Item>first</ChiList.Item>
    <ChiList.Item>second</ChiList.Item>
    <ChiList.Item>third</ChiList.Item>
</ChiList>
    `,
})
Default.args = {
    ...colorArgs(listProps, listPropsOptions.color),
    ...componentArgs(listProps),
    ...hoverArgs(listProps),
    ...paddingArgs(listProps),
    ...roundedArgs(listProps),
    ...spacingArgs(listProps, listPropsOptions.spacing),
}
Default.argTypes = {
    ...colorArgTypes(listProps, listPropsOptions.color),
    ...componentArgTypes(listProps),
    ...hoverArgTypes(listProps),
    ...paddingArgTypes(listProps),
    ...roundedArgTypes(listProps),
    ...spacingArgTypes(listProps, listPropsOptions.spacing),
}

export const Item = (args) => ({
    components: {
        ChiList,
        'ChiList.Item': ChiList.Item,
    },
    setup() { return { args } },
    template: `
<ChiList>
    <ChiList.Item v-bind="args" />
    <ChiList.Item>second</ChiList.Item>
</ChiList>
    `,
})
Item.args = {
    ...colorArgs(listItemProps, listPropsOptions.color),
    ...componentArgs(listItemProps),
    ...contentArgs({ content: 'first' }),
    ...hoverArgs(listItemProps),
    ...paddingArgs(listItemProps),
    ...roundedArgs(listItemProps),
    ...spacingArgs(listItemProps, listPropsOptions.itemSpacing),
}
Item.argTypes = {
    ...colorArgTypes(listItemProps, listPropsOptions.color),
    ...componentArgTypes(listItemProps),
    ...contentArgTypes(listItemProps),
    ...hoverArgTypes(listItemProps),
    ...paddingArgTypes(listItemProps),
    ...roundedArgTypes(listItemProps),
    ...spacingArgTypes(listItemProps, listPropsOptions.itemSpacing),
}

export const WithIcons = (args) => ({
    components: {
        ChiList,
        'ChiList.Item': ChiList.Item,
    },
    setup() { return { args } },
    template: `
<ChiList>
    <ChiList.Item v-bind="args">first</ChiList.Item>
</ChiList>
    `,
})
WithIcons.args = {
    prefix: ArrowDownOnSquareIcon,
    suffix: ArrowDownOnSquareIcon,
}
