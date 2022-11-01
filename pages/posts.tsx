import { NextPageContext } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react'
import { MyPost } from '../interfaces/post';
import { MainLayout } from "./components/MainLayout"

interface IPostsPageProps {
  posts: MyPost[];
}

export default function Posts({posts: serverPosts}: IPostsPageProps) {
  const [posts, setPosts] = useState(serverPosts)
  console.log(posts);

  useEffect(() => {
    async function load() {
      const response = await fetch(`${process.env.API_URL}/posts`);
      const json = await response.json();
      setPosts(json)
    }

    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return <MainLayout>
      <p>Loading...</p>
      </MainLayout>
  }

  // <Link href={`/post/[id]`} as={`post/${post.id}`}>{post.title}</Link> - для того щоб запобігти перезавантаженню сторінки
  return (
    <MainLayout title={'Posts page'}>
      <h1>Posts page</h1>
      <ul>
        {posts.map(post => (
          <li key = {post.id}>
            <Link href={`/post/[id]`} as={`post/${post.id}`}>{post.title}</Link> 
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

Posts.getInitialProps = async ({req}: NextPageContext) => {
  if (!req) {
    return {posts: null}
  }

  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts: MyPost[] = await response.json();

  return {
    posts
  }
}