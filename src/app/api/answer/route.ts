/* eslint-disable @typescript-eslint/no-explicit-any */
// import genAnswerInfo from '@/lib/genAnswerInfo';
import { postAnswer } from '@/service/answer';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const formData = await req.formData()    

    // 获取并格式化表单数据
    const answerInfo = {} as any
    const answerList = []
    for(const key of formData.keys()){
        console.log('key',key);
        if(key !== 'questionId'){
            answerList.push({
                key,
                value: formData.get(key)
            })
        }
        
    }
    answerInfo.questionId = formData.get('questionId')
    answerInfo.answerList = answerList   

    try{
        // 提交到服务端
        const resData = await postAnswer(answerInfo)
        if(resData.errno === 0){
            // 如果提交成功了的话
            return NextResponse.redirect(new URL(`/success`, req.url))
        }else{
            // 如果提交失败了的话
            return NextResponse.redirect(new URL(`/fail`, req.url))
        }
    }catch(err){
        return NextResponse.redirect(new URL(`/fail`, req.url))
    }

    // return NextResponse.json({ message: 'Success' }, { status: 200 })
}

export async function GET(req: NextRequest) {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 })
}