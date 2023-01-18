export interface DenseProps {
    dense?: boolean
}

export default function useDenseProps () {
    return {
        dense: {
            type: Boolean,
            default: undefined,
        },
    }
}

export function denseArgs () {
    return {
        dense: false
    }
}

export function denseArgTypes () {
    return {
        dense: {
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
