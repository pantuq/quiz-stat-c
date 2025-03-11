import Head from 'next/head'
import React, { memo, FC } from 'react'

const Success: FC = memo(function Success() {
    return (
        <>
            <Head>
                <title>提交成功</title>
            </Head>
            <main>
                <h1>成功</h1>
                <p>问卷提交成功</p>
            </main>
        </>
    )
})



export default Success