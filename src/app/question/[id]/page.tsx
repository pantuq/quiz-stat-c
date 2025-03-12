/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./page.module.scss";
import PageWrapper from "@/components/PageWrapper";
import { getQuestionById } from "@/service/question";
import { getComponent } from "@/components/QuestionComponents";

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

    // 遍历组件
    const ComponentListElem = <>
    {componentList.map(c => {
        const ComponentElem = getComponent(c)
        return <div className={styles.componentWrapper} key={c.fe_id}>{ComponentElem}</div>
    })}
    </>

    return (
        <PageWrapper title={title}>
            <form action="/api/answer" method="POST">
                <input type="hidden" name="questionId" value={data?.id} />
                {ComponentListElem}
                <div className={styles.submitBtnContainer}>
                    <button type="submit">提交</button>
                </div>
            </form>
        </PageWrapper>
    );
}