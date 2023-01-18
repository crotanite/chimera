export interface ModelValueProps<T> {
    modelValue?: T
}

export default function useModelValueProps<T>(props: ModelValueProps<T> = {}) {
    return {
        modelValue: {
            type: [String, Object, Function, Boolean],
            default: props.modelValue ?? null,
        }
    }
}

export function modelValueArgs<T>(props: ModelValueProps<T>) {
    return {
        modelValue: props.modelValue
    }
}

export function modelValueArgTypes<T>(props: ModelValueProps<T>, type: string = 'text') {
    return {
        modelValue: {
            control: { type: type },
            description: 'The v-model prop.',
            table: {
                category: 'props',
                defaultValue: {
                    summary: String(props.modelValue)
                },
                type: {
                    summary: 'any'
                },
            }
        }
    }
}
