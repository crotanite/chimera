export interface ContentProps {
    content?: null|string
}

export default function useContentProps () {
    return {
        content: {
            type: String,
            default: null,
        },
    }
}

export function contentArgs (props: ContentProps) {
    return {
        content: props.content
    }
}

export function contentArgTypes (props: ContentProps) {
    return {
        content: {
            control: { type: 'text' },
            description: 'Pass content into the default slot.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.content)
                },
                type: {
                    summary: 'string'
                },
            }
        }
    }
}
