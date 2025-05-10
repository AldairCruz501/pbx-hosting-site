/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}


declare module 'aos' {
    const AOS: {
      init: (options?: {
        offset?: number
        delay?: number
        duration?: number
        easing?: string
        once?: boolean
        mirror?: boolean
        anchorPlacement?: string
      }) => void
      refresh: () => void
      refreshHard: () => void
    }
  
    export default AOS
  }
  