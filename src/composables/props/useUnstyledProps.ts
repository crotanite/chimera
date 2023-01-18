export interface UnstyledProps {
    unstyled?: boolean
}

export default function useUnstyledProps () {
    return {
        unstyled: {
            type: Boolean,
            default: false,
        }
    }
}

export function unstyledArgs (props: UnstyledProps) {
    return {
        unstyled: props.unstyled
    }
}

export function unstyledArgTypes (props: UnstyledProps) {
    return {
        unstyled: {
            control: { type: 'boolean' },
            description: 'Whether to "unstyle" the component.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.unstyled
                },
                type: {
                    summary: 'boolean'
                },
            }
        }
    }
}
