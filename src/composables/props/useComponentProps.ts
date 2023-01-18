export interface ComponentProps {
    component: unknown
}

export default function useComponentProps () {
    return {
        component: {
            type: [String, Object],
            default: undefined,
        }
    }
}

export function componentArgs (props: ComponentProps) {
    return {
        component: props.component
    }
}

export function componentArgTypes (props: ComponentProps) {
    return {
        component: {
            control: { type: 'text' },
            description: 'The base element/component to use.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.component)
                },
                type: {
                    summary: 'string|object'
                },
            }
        }
    }
}
