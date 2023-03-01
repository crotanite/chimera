import { ChiOffcanvas, offcanvasDrawerArgs, offcanvasDrawerArgTypes } from './index'
import { slotArgType } from '../../composables/useStoryArgTypes'
import { colorArgs, colorArgTypes } from '../../composables/props/useColorProps'
import { componentArgs, componentArgTypes } from '../../composables/props/useComponentProps'
import { paddingArgs, paddingArgTypes } from '../../composables/props/usePaddingProps'
import { widthArgs, widthArgTypes } from '../../composables/props/useWidthProps'
import useGetThemeProperty from '../../composables/useGetThemeProperty'

const offcanvasContentProps = useGetThemeProperty('ui.offcanvasContent')
const offcanvasDrawerProps = useGetThemeProperty('ui.offcanvasDrawer')

export default {
    title: 'Components/Offcanvas',
    component: ChiOffcanvas,
    parameters: {
        docs: {
            description: {
                component: 'The `ChiOffcanvas` component, alongside the `ChiOffcanvas.Content` and `ChiOffcanvas.Drawer` subcomponents, can be used to build designs with sliding drawers.'
            },
        },
    },
    args: {
        //
    },
    argTypes: {
        //
        default: slotArgType('default'),
    }
}

export const Default = (args) => ({
    components: {
        ChiOffcanvas,
        'ChiOffcanvas.Drawer':ChiOffcanvas.Drawer,
        'ChiOffcanvas.Content': ChiOffcanvas.Content,
        ChevronLeftIcon,
        ChevronRightIcon
    },
    setup() { return { args } },
    template: `
<ChiOffcanvas v-bind="args">
    <ChiOffcanvas.Drawer>drawer</ChiOffcanvas.Drawer>
    <ChiOffcanvas.Content>
        <button @click="$emit('open-drawer', { side: 'left' })">
            <ChevronLeftIcon class="h-4 w-4" />
        </button>
        <button @click="$emit('open-drawer', { side: 'right' })">
            <ChevronRightIcon class="h-4 w-4" />
        </button>
    </ChiOffcanvas.Content>
</ChiOffcanvas>
    `,
})

export const Content = (args) => ({
    components: {
        ChiOffcanvas,
        'ChiOffcanvas.Drawer':ChiOffcanvas.Drawer,
        'ChiOffcanvas.Content': ChiOffcanvas.Content
    },
    setup() { return { args } },
    template: `
<ChiOffcanvas>
    <ChiOffcanvas.Drawer>drawer</ChiOffcanvas.Drawer>
    <ChiOffcanvas.Content v-bind="args">content</ChiOffcanvas.Content>
</ChiOffcanvas>
    `,
})
Content.args = {
    ...paddingArgs(offcanvasContentProps),
}
Content.argTypes = {
    ...paddingArgTypes(offcanvasContentProps),
}

export const Drawer = (args) => ({
    components: {
        ChiOffcanvas,
        'ChiOffcanvas.Content': ChiOffcanvas.Content,
        'ChiOffcanvas.Drawer':ChiOffcanvas.Drawer,
    },
    setup() { return { args } },
    template: `
<ChiOffcanvas>
    <ChiOffcanvas.Drawer v-bind="args">drawer</ChiOffcanvas.Drawer>
    <ChiOffcanvas.Content>content</ChiOffcanvas.Content>
</ChiOffcanvas>
    `,
})
Drawer.args = {
    ...colorArgs(offcanvasDrawerProps, ['color', 'variant']),
    ...componentArgs(offcanvasDrawerProps),
    ...offcanvasDrawerArgs(offcanvasDrawerProps),
    ...paddingArgs(offcanvasDrawerProps),
    ...widthArgs(offcanvasDrawerProps, false),
}
Drawer.argTypes = {
    ...colorArgTypes(offcanvasDrawerProps, ['color', 'variant']),
    ...componentArgTypes(offcanvasDrawerProps),
    ...offcanvasDrawerArgTypes(offcanvasDrawerProps),
    ...paddingArgTypes(offcanvasDrawerProps),
    ...widthArgTypes(offcanvasDrawerProps, false),
}
