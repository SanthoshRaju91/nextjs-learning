import Layout from "../components/layout";
import Link from "next/link";

function PostLink(props) {
    return (
        <li>
            <Link href="/p/[id]" as={`/p/${props.id}`}>
                <a>{props.title}</a>
            </Link>
        </li>
    )
}

function Index() {    
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-nextjs" title="Hello Next.js"></PostLink>
                <PostLink id="learn-nextjs" title="Learn Next.js is awesome"></PostLink>
                <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"></PostLink>
            </ul>
        </Layout>
    )
}

export default Index;