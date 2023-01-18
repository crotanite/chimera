export interface ErrorProps {
    error?: null|string
}

export default function useErrorProps () {
    return {
        error: {
            type: String,
            default: null,
        },
    }
}

export function errorArgs (props: ErrorProps = null) {
    return {
        error: props !== null ? props.error : null
    }
}

export function errorArgTypes () {
    return {
        error: {
            control: { type: 'text' },
            description: 'Pass an error message.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(null)
                },
                type: {
                    summary: 'string'
                },
            }
        }
    }
}
