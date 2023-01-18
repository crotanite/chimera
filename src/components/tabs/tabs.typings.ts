import { Ref } from 'vue'
import useColorProps, { ColorProps } from '../../composables/props/useColorProps'
import useFlexParentProps, { FlexParentProps } from '../../composables/props/useFlexParentProps'
import useModelValueProps, { ModelValueProps } from '../../composables/props/useModelValueProps'
import usePaddingProps, { PaddingProps } from '../../composables/props/usePaddingProps'
import useRoundedProps, { RoundedProps } from '../../composables/props/useRoundedProps'
import useValueProps, { ValueProps } from '../../composables/props/useValueProps'

export interface TabsProps extends
    ColorProps,
    FlexParentProps,
    ModelValueProps<string>,
    PaddingProps,
    RoundedProps
{
    tabs?: Array<string>
    vertical?: boolean
}

export interface TabsTabProps extends
    ValueProps
{}

export interface InjectedTabsProps extends TabsProps {
    activeTab: Ref<string>
    setActiveTab: Function
}

export const tabsPropsOptions = {
    color: ['color', 'variant'],
    flexParent: ['flexJustify']
}

export const tabsProps = {
    ...useColorProps(tabsPropsOptions.color),
    ...useFlexParentProps(tabsPropsOptions.flexParent),
    ...useModelValueProps(),
    ...usePaddingProps(),
    ...useRoundedProps(),
    ...{
        tabs: {
            type: Array<string>,
            required: true
        },

        vertical: {
            type: Boolean,
            default: false
        }
    }
}

export const tabsTabProps = {
    ...usePaddingProps(),
    ...useValueProps(),
}

export const injectTabsName = 'tabs'

export default tabsProps
