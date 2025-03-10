async function getData() {
    return {
        info: 'Hello World'
    };
}

export default async function About() {
    const data = await getData();
    
    return (
        <div>
            <h1>About</h1>
            <h2>{data.info}</h2>
        </div>
    );
}