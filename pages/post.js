import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = props => (
    <Layout>
        <h1>{props.content.title}</h1>
        <p>{props.content.text}</p>
</Layout>
)

Post.getInitialProps = async function(context) {
    const { id } = context.query;

    const res = await fetch("http://localhost:8600/data.json");

    const show = await res.json();
    let content = show[parseInt(id)];
    console.log(content);


    return { content }
}

export default Post
