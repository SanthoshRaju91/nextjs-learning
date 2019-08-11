import { useRouter } from "next/router";
import Layout from "../components/layout";

function Content() {
    const router = useRouter();
    return (
        <React.Fragment>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content.</p>
        </React.Fragment>
    )
}

export default function Post() {    
    return (
        <Layout>
           <Content></Content>            
        </Layout>
    )
}