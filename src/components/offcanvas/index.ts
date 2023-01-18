// @ts-ignore
import { default as ChiOffcanvas } from './offcanvas.vue'
// @ts-ignore
import { default as ChiOffcanvasContent } from './content.vue'
// @ts-ignore
import { default as ChiOffcanvasDrawer } from './drawer.vue'

ChiOffcanvas.Content = ChiOffcanvasContent
ChiOffcanvas.Drawer = ChiOffcanvasDrawer

export { ChiOffcanvas, ChiOffcanvasContent, ChiOffcanvasDrawer }
export * from './offcanvas.typings'
