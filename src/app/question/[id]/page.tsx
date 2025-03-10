export default async function About({params}: {params: Promise<{id: string}>}) {
    const { id } = await params;
    
    return (
        <div>
            <h1>Question</h1>
            <h2>{id}</h2>
        </div>
    );
}