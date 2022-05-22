import { AnimatePresence } from 'framer-motion'
import 'focus-visible/dist/focus-visible'

import Chakra from '../components/chakra'
import Fonts from '../components/fonts'
import FocusVisibleStyle from '../components/focus-visible'
import Layout from '../components/layouts/main'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const Website = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <FocusVisibleStyle />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== undefined) window.scrollTo({ top: 0 })
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
