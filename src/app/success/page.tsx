import PageWrapper from '@/components/PageWrapper'
import React, { memo, FC } from 'react'

const Success: FC = memo(function Success() {
    return (
        <PageWrapper title='提交成功'>
            <h1>成功</h1>
            <p>问卷提交成功</p>
        </PageWrapper>
    )
})



export default Success