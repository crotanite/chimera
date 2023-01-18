export interface SrcProps {
    src: null|string
}

export default function useSrcProps (props: SrcProps = null) {
    return {
        src: {
            type: String,
            default: props === null || !props.hasOwnProperty('src') ? null : props.src,
        },
    }
}

export function srcArgs (props: SrcProps) {
    return {
        src: props.src
    }
}

export function srcArgTypes (props: SrcProps) {
    return {
        src: {
            control: { type: 'text' },
            description: 'The src of the image.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.src)
                },
                type: {
                    summary: 'string|object'
                },
            }
        }
    }
}
