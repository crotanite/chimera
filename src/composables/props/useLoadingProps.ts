export interface LoadingProps {
     loading?: boolean
}

export default function useLoadingProps () {
    return {
        loading: {
            type: Boolean,
            default: undefined,
        }
    }
}

export function loadingArgs (props: LoadingProps) {
    return {
        loading: props.loading
    }
}

export function loadingArgTypes (props: LoadingProps) {
    return {
        loading: {
            control: { type: 'boolean' },
            description: 'Whether this component is loading.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: props.loading
                },
                type: {
                    summary: 'boolean'
                },
            }
        }
    }
}
