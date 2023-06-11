import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';

type Props = PropsWithChildren & {
  title?: string
}

const origin = ( typeof window === 'undefined' ? '' : window.location.origin );

export const Layout: FC<Props> = ({ children, title }) => {


  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content='Robin Avila'/>
            <meta name='descrition' content={`Información sobre el pokemon ${ title }`}/>
            <meta name='keywords' content={`${ title }, pokemon, pokedex`}/>
            <meta property="og:title" content={`${title}'s information`} />
            <meta property="og:description" content={`This is ${title} page`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>

        <Navbar />
        <main 
          style={{
            padding: '0px 20px'
          }}
        >
            { children }
        </main>
    </>
  )
}
