/* eslint-disable @typescript-eslint/no-explicit-any */
import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";
import styles from "./page.module.scss";
import PageWrapper from "@/components/PageWrapper";
import { getQuestionById } from "@/service/question";

// type PropsType = {
//     errno: number
//     data?: {
//         id: string,
//         title: string,
//         desc?: string,
//         js?: string,
//         css?: string,
//         inPublished: boolean,
//         isDeleted: boolean,
//         componentList: Array<any>
//     }
//     msg?: string
// }

export default async function QuestionPage({ params }: { params: { id: string } }) {
    const { id } = await params
    const { errno, data, msg = "" } = await getQuestionById(id)
    
    if (errno !== 0) {
        return <div>Error: {msg}</div>
    }
    const { title = "", desc = "", isDeleted, isPublished, componentList = [] } = data || {}
    // 已经被删除的问卷，提示错误
    if(isDeleted){
        return <PageWrapper title={title} desc={desc}>
            <h1>{title}</h1>
            <p>该问卷已被删除</p>
        </PageWrapper>
    }

    // 尚未发布的问卷
    if(!isPublished){
        return <PageWrapper title={title} desc={desc}>
            <h1>{title}</h1>
            <p>该问卷尚未发布</p>
        </PageWrapper>
    }

    return (
        <PageWrapper title={title}>
            <form action="/api/answer" method="POST">
                <input type="hidden" name="questionId" value={data?.id} />
                <div className={styles.componentWrapper}>
                    <QuestionInput fe_id="c1" props={{title: '你的姓名',placeholder: "请输入内容"}}/>
                </div>
                <div className={styles.componentWrapper}>
                    <QuestionRadio fe_id="c2" props={{
                        title: '你的性别',
                        options: [
                            {value: 'male', text: '男'},
                            {value: 'female', text: '女'}
                        ],
                        value: 'male',
                        isVertical: false
                    }}/>
                </div>
                <div className={styles.submitBtnContainer}>
                    <button type="submit">提交</button>
                </div>
            </form>
        </PageWrapper>
    );
}