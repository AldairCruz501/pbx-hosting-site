/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '@tawk.to/tawk-messenger-vue-3' {
    const TawkMessengerVue: any;
    export default TawkMessengerVue;
  }
  