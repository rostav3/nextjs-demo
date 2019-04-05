import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import React from "react";

const Index = (props) => (
    <Layout>
        <h1>Pages: </h1>
        <ul>
            {props.contents.map(content => (
                <li key={content.id}>
                    <Link as={`/p/${content.id}`} href={`/post?id=${content.id}`}>
                        <a>{content.title}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <style jsx>{`
        h1 {
          color: #6e6e6e;
        }
        a{
        color:black
        }
      `}</style>

    </Layout>

)

Index.getInitialProps = async function() {
    const res = await fetch('http://localhost:8600/data.json')
    const data = await res.json()

    console.log(`content data fetched. Count: ${data.length}`)
    console.log(JSON.stringify({
        contents: data
    }));
    return {
        contents: data
    }
}

export default Index
