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
        vertical: {
            type: Boolean,
            default: false
        }
    }
}

export const tabsTabProps = {
    ...useColorProps(tabsPropsOptions.color),
    ...usePaddingProps(),
    ...useValueProps(),
}

export const injectTabsName = 'tabs'

export function tabsArgs (props: TabsProps) {
    return {
        vertical: props.vertical
    }
}

export function tabsArgTypes (props: TabsProps) {
    return {
        vertical: {
            control: { type: 'boolean' },
            description: 'Whether to show the component dense.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: false
                },
                type: {
                    summary: 'boolean'
                },
            }
        }
    }
}

export default tabsProps
