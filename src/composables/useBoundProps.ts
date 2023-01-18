export default function useBoundProps(boundProps: object, setProps: object) {
    return Object.fromEntries(Object.keys(boundProps).map((item: string) => {
        return [item, setProps[item]]
    }))
}
