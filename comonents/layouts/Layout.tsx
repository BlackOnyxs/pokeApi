import Head from 'next/head'
import { FC, PropsWithChildren } from 'react';
import { Navbar } from '../ui';

type Props = PropsWithChildren & {
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content='Robin Avila'/>
            <meta name='descrition' content={`Información sobre el pokemon ${ title }`}/>
            <meta name='keywords' content={`${ title }, pokemon, pokedex`}/>
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
