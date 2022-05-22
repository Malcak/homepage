import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'

import Footer from '../footer'
import ModelBannerLoader from '../model-banner-loader'
import Navbar from '../navbar'

const LazyModelBanner = dynamic(() => import('../model-banner'), {
  ssr: false,
  loading: () => <ModelBannerLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Malcak&apos;s Homepage</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
        <meta name="description" content="Malcak's homepage" />
        <meta name="author" content="Malcak" />
        <meta name="twitter:title" content="Malcak" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@malcakk" />
        <meta name="twitter:creator" content="@malcakk" />
        <meta property="og:site_name" content="Malcak" />
        <meta name="og:title" content="Malcak" />
        <meta property="og:type" content="website" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyModelBanner />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
