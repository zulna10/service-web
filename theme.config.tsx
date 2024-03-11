import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'



const config: DocsThemeConfig = {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'ZLN'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'SERVICES FROM ZULNA'}
        />
      </>
    )

    
  },
  
  logo: <span>ZULNA Docs</span>,
  project: {
    link: 'https://github.com/zulna10',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: (
      <span>
        ZLN {new Date().getFullYear()} ©{' '}
        
      </span>

    )
  },

  banner: {
    key: 'say hello',
    text: (
      <p>hay dude, WELCOME TO MY DOCS 🚀</p>
    )
  }
}



export default config
