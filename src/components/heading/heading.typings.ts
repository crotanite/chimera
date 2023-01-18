import useContentProps, { ContentProps } from '../../composables/props/useContentProps'

export interface HeadingProps extends
    ContentProps
{
    level: number
}

export const levels: Array<number> = [1, 2, 3, 4, 5, 6]

export const headingProps = {
    ...useContentProps({ content: null }),
    ...{
        level: {
            type: Number,
            default: 3,
            validator: (v: number) => levels.includes(v)
        }
    }
}

export function headingArgs (props: HeadingProps) {
    return {
        level: props.level
    }
}

export function headingArgTypes (props: HeadingProps) {
    return {
        level: {
            control: 'select',
            description: 'The level of heading to apply.',
            options: levels,
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.level
                },
                type: {
                    summary: 'number'
                },
            }
        }
    }
}

export default headingProps
