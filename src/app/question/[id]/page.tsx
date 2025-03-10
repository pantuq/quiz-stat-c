import QuestionInput from "@/components/QuestionComponents/QuestionInput";

export default async function About({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    
    return (
        <div>
            <h1>Question</h1>
            <h2>{id}</h2>
            <form>
                <QuestionInput fe_id="c1" props={{title: '你的姓名',placeholder: "请输入内容"}}/>
            </form>
        </div>
    );
}