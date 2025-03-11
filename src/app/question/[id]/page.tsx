import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";

export default async function About({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    
    return (
        <div>
            <h1>Question</h1>
            <h2>{id}</h2>
            <form>
                <QuestionInput fe_id="c1" props={{title: '你的姓名',placeholder: "请输入内容"}}/>
                <QuestionRadio fe_id="c2" props={{
                    title: '你的性别',
                    options: [
                        {value: 'male', text: '男'},
                        {value: 'female', text: '女'}
                    ],
                    value: 'male',
                    isVertical: false
                }}/>
            </form>
        </div>
    );
}