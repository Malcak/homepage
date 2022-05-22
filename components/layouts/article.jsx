import Head from 'next/head'
import { motion } from 'framer-motion'

import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => {
  const completeTitle = `${title} - Malcak`

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {title && (
          <Head>
            <meta name="twitter:title" content={completeTitle} />
            <meta property="og:title" content={completeTitle} />
            <title>{completeTitle}</title>
          </Head>
        )}
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
