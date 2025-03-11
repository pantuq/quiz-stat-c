import PageWrapper from '@/components/PageWrapper'
import React, { memo, FC } from 'react'

const Fail: FC = memo(function Fail() {
    return (
        <PageWrapper title='提交失败'>
            <h1>失败</h1>
            <p>问卷提交失败</p>
        </PageWrapper>
    )
})



export default Fail