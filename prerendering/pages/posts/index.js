import Link from "next/link";

function PostList({posts}) {
    return (
        <>
            <h1>List of posts</h1>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <Link href={`posts/${post.id}`}>
                                <a><strong>{post.id}</strong> {post.title}</a>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);

    return {
        props: {
            posts: data,
            // posts: data.slice(0, 4)
        }
    }
}