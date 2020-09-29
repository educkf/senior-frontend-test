export { default as CardAddress } from '../..\\components\\cardAddress.vue'
export { default as CardFace } from '../..\\components\\cardFace.vue'
export { default as OfficeAdd } from '../..\\components\\officeAdd.vue'
export { default as OfficeCard } from '../..\\components\\officeCard.vue'
export { default as BaseComponent } from '../..\\components\\_baseComponent.vue'
export { default as BasePage } from '../..\\components\\_basePage.vue'

export const LazyCardAddress = import('../..\\components\\cardAddress.vue' /* webpackChunkName: "components_cardAddress" */).then(c => c.default || c)
export const LazyCardFace = import('../..\\components\\cardFace.vue' /* webpackChunkName: "components_cardFace" */).then(c => c.default || c)
export const LazyOfficeAdd = import('../..\\components\\officeAdd.vue' /* webpackChunkName: "components_officeAdd" */).then(c => c.default || c)
export const LazyOfficeCard = import('../..\\components\\officeCard.vue' /* webpackChunkName: "components_officeCard" */).then(c => c.default || c)
export const LazyBaseComponent = import('../..\\components\\_baseComponent.vue' /* webpackChunkName: "components__baseComponent" */).then(c => c.default || c)
export const LazyBasePage = import('../..\\components\\_basePage.vue' /* webpackChunkName: "components__basePage" */).then(c => c.default || c)
