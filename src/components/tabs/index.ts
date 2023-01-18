// @ts-ignore
import { default as ChiTabs } from './tabs.vue'
// @ts-ignore
import { default as ChiTab } from './tab.vue'
// @ts-ignore
import { default as ChiPanel } from './panel.vue'

ChiTabs.Tab = ChiTab
ChiTabs.Panel = ChiPanel

export { ChiTabs, ChiTab, ChiPanel }
export * from './tabs.typings'
