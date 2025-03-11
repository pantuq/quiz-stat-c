import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";
import styles from "./page.module.scss";
import PageWrapper from "@/components/PageWrapper";

export default async function About({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    
    return (
        <PageWrapper title="question">
            <form action="/api/answer" method="POST">
                <input type="hidden" name="questionId" value={id} />
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