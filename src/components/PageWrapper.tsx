import Head from 'next/head'
import React, { memo, FC, JSX } from 'react'
import styles from './PageWrapper.module.scss'
import Script from 'next/script'

type PropsType = {
    title: string,
    desc?: string,
    css?: string,
    js?: string,
    children: JSX.Element | JSX.Element[]
}

const PageWrapper: FC<PropsType> = memo(function PageWrapper(props: PropsType) {
    const { title, desc = "", css = "", js = "", children } = props
    return (
        <>
        <Head>
            <title>{title}</title>
            <meta name='description' content={desc}/>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        <main className={styles.container}>
            {children}
        </main>
        <Script id='page_js'>{js}</Script>
        </>
    )
})



export default PageWrapper