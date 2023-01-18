import { getCurrentInstance } from 'vue'
import { GridChildProps } from '../../props/useGridChildProps'
import useGetValueForScreen from '../../useGetValueForScreen'

export default function useApplyGridChild (
    overrideEnd: GridChildProps['end'] = null,
    overrideSpan: GridChildProps['span'] = null,
    overrideStart: GridChildProps['start'] = null
): string {
    const ctx = getCurrentInstance()
    const endProp: GridChildProps['end'] = overrideEnd === null
        ? ((ctx?.props.end as GridChildProps['end']) ?? null)
        : overrideEnd
    const spanProp: GridChildProps['span'] = overrideSpan === null
        ? ((ctx?.props.span as GridChildProps['span']) ?? null)
        : overrideSpan
    const startProp: GridChildProps['start'] = overrideStart === null
        ? ((ctx?.props.start as GridChildProps['start']) ?? null)
        : overrideStart

    const output: Array<string> = []

    if(endProp !== null) {
        const end: number = typeof endProp === 'number' ? endProp : useGetValueForScreen<number>(endProp)
        switch(end) {
            case 0: { output.push('col-end-auto'); break }
            case 1: { output.push('col-end-1'); break }
            case 2: { output.push('col-end-2'); break }
            case 3: { output.push('col-end-3'); break }
            case 4: { output.push('col-end-4'); break }
            case 5: { output.push('col-end-5'); break }
            case 6: { output.push('col-end-6'); break }
            case 7: { output.push('col-end-7'); break }
            case 8: { output.push('col-end-8'); break }
            case 9: { output.push('col-end-9'); break }
            case 10: { output.push('col-end-10'); break }
            case 11: { output.push('col-end-11'); break }
            case 12: { output.push('col-end-12'); break }
        }
    }

    if(spanProp !== null) {
        const span: number|string = typeof spanProp === 'number' || typeof spanProp === 'string' ? spanProp : useGetValueForScreen<number|string>(spanProp)
        switch(span) {
            case 0: { output.push('col-auto'); break }
            case 1: { output.push('col-span-1'); break }
            case 2: { output.push('col-span-2'); break }
            case 3: { output.push('col-span-3'); break }
            case 4: { output.push('col-span-4'); break }
            case 5: { output.push('col-span-5'); break }
            case 6: { output.push('col-span-6'); break }
            case 7: { output.push('col-span-7'); break }
            case 8: { output.push('col-span-8'); break }
            case 9: { output.push('col-span-9'); break }
            case 10: { output.push('col-span-10'); break }
            case 11: { output.push('col-span-11'); break }
            case 12: { output.push('col-span-12'); break }
            case 'full': { output.push('col-span-full'); break }
        }
    }

    if(startProp !== null) {
        const start: number = typeof startProp === 'number' ? startProp : useGetValueForScreen<number>(startProp)
        switch(start) {
            case 0: { output.push('col-start-auto'); break }
            case 1: { output.push('col-start-1'); break }
            case 2: { output.push('col-start-2'); break }
            case 3: { output.push('col-start-3'); break }
            case 4: { output.push('col-start-4'); break }
            case 5: { output.push('col-start-5'); break }
            case 6: { output.push('col-start-6'); break }
            case 7: { output.push('col-start-7'); break }
            case 8: { output.push('col-start-8'); break }
            case 9: { output.push('col-start-9'); break }
            case 10: { output.push('col-start-10'); break }
            case 11: { output.push('col-start-11'); break }
            case 12: { output.push('col-start-12'); break }
        }
    }

    return output.join(' ')
}
