// @ts-ignore
import { default as ChiAccordion } from './accordion.vue'
// @ts-ignore
// import { default as ChiAccordionControl } from './control.vue'
// @ts-ignore
import { default as ChiAccordionItem } from './item.vue'
// @ts-ignore
import { default as ChiAccordionTitle } from './title.vue'
// @ts-ignore
import { default as ChiAccordionPanel } from './panel.vue'

// ChiAccordion.Control = ChiAccordionControl
ChiAccordion.Item = ChiAccordionItem
ChiAccordion.Title = ChiAccordionTitle
ChiAccordion.Panel = ChiAccordionPanel

export {
    ChiAccordion,
    ChiAccordionItem,
    ChiAccordionTitle,
    ChiAccordionPanel,
}
export * from './accordion.typings'
