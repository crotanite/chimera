import { getCurrentInstance } from 'vue'
import { GridParentProps } from '../../props/useGridParentProps'
import useGetValueForScreen from '../../useGetValueForScreen'

export default function useApplyGridParent (
    overrideGrid: GridParentProps['grid'] = null,
    overrideCols: GridParentProps['cols'] = null,
    overrideFlow: GridParentProps['flow'] = null,
    overrideRows: GridParentProps['rows'] = null
): string {
    const ctx = getCurrentInstance()
    const gridProp: GridParentProps['grid'] = overrideGrid === null
        ? ((ctx?.props.grid as GridParentProps['grid']) ?? null)
        : overrideGrid
    const colsProp: GridParentProps['cols'] = overrideCols === null
        ? ((ctx?.props.cols as GridParentProps['cols']) ?? null)
        : overrideCols
    const flowProp: GridParentProps['flow'] = overrideFlow === null
        ? ((ctx?.props.flow as GridParentProps['flow']) ?? null)
        : overrideFlow
    const rowsProp: GridParentProps['rows'] = overrideRows === null
        ? ((ctx?.props.rows as GridParentProps['rows']) ?? null)
        : overrideRows

    const output: Array<string> = []

    if(gridProp !== null) {
        const grid: boolean = typeof gridProp === 'boolean' ? gridProp : useGetValueForScreen<boolean>(gridProp)
        if(grid === true) {
            output.push('grid')

            if(colsProp !== null) {
                const cols: number = typeof colsProp === 'number' ? colsProp : useGetValueForScreen<number>(colsProp)
                switch(cols) {
                    case 0: { output.push('grid-cols-none'); break }
                    case 1: { output.push('grid-cols-1'); break }
                    case 2: { output.push('grid-cols-2'); break }
                    case 3: { output.push('grid-cols-3'); break }
                    case 4: { output.push('grid-cols-4'); break }
                    case 5: { output.push('grid-cols-5'); break }
                    case 6: { output.push('grid-cols-6'); break }
                    case 7: { output.push('grid-cols-7'); break }
                    case 8: { output.push('grid-cols-8'); break }
                    case 9: { output.push('grid-cols-9'); break }
                    case 10: { output.push('grid-cols-10'); break }
                    case 11: { output.push('grid-cols-11'); break }
                    case 12: { output.push('grid-cols-12'); break }
                }
            }

            if(flowProp !== null) {
                const flow: string = typeof flowProp === 'string' ? flowProp : useGetValueForScreen<string>(flowProp)
                switch(flow) {
                    case 'row': { output.push('grid-flow-row'); break }
                    case 'col': { output.push('grid-flow-col'); break }
                    case 'dense': { output.push('grid-flow-dense'); break }
                    case 'row-dense': { output.push('grid-flow-row-dense'); break }
                    case 'col-dense': { output.push('grid-flow-col-dense'); break }
                }
            }

            if(rowsProp !== null) {
                const rows: number = typeof rowsProp === 'number' ? rowsProp : useGetValueForScreen<number>(rowsProp)
                switch(rows) {
                    case 0: { output.push('grid-rows-none'); break }
                    case 1: { output.push('grid-rows-1'); break }
                    case 2: { output.push('grid-rows-2'); break }
                    case 3: { output.push('grid-rows-3'); break }
                    case 4: { output.push('grid-rows-4'); break }
                    case 5: { output.push('grid-rows-5'); break }
                    case 6: { output.push('grid-rows-6'); break }
                }
            }
        }
    }

    return output.join(' ')
}
