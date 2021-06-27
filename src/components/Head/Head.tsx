import Helmet from 'react-helmet'
import { HeadProps } from 'src/types/headProps'

export default function Head({ title, description, keyWords, isArticle = true }: HeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keyWords} />
      <meta name='author' content='mrLuisFer' />
      <meta name='copyright' content='mrLuisFer' />
      <meta name='robots' content='noindex,nofollow' />
      <meta httpEquiv='cache-control' content='no-cache' />
      <meta name='google' content='nopagereadaloud' />
      <meta property='og:title' content={title} />
      {/* <meta property='og:url' content='' /> */}
      <meta property='og:type' content={isArticle ? 'article' : ''} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='' />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content='' />
      <meta property='twitter:card' content='' />
    </Helmet>
  )
}
