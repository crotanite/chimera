export interface BorderProps {
    border: number
}

export default function useBorderProps () {
    return {
        border: {
            type: Number,
            default: undefined,
        },
    }
}

export function borderArgs (props: BorderProps) {
    return {
        border: props.border
    }
}

export function borderArgTypes (props: BorderProps) {
    return {
        border: {
            control: { type: 'number' },
            description: 'The size of the border to apply.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: Number(props.border)
                },
                type: {
                    summary: 'number'
                },
            }
        }
    }
}
