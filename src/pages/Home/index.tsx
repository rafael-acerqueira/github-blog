import { useEffect, useState } from "react";
import { Post } from "./components/Post";
import { UserInfo } from "./components/UserInfo";
import axios from "axios";
import { PostList } from "./styles";


interface Post {
  id: number,
  title: string,
  description: string,
  created_at: string
}

export function Home() {

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.github.com/search/issues?q=is:issue%20repo:rafael-acerqueira/github-blog"
    }).then(function (response) {
      const items = response.data.items.map(item => {
        return {
          id: item.id,
          title: item.title,
          description: item.body,
          created_at: item.created_at
        }
      })
      setPosts(items)
    })
  }, [])


  return (
    <div>
      <UserInfo />
      <PostList>
        {
          posts.map(post =>
            <Post
              key={post.id}
              date={post.created_at}
              title={post.title}
              description={post.description}
            />
          )
        }
      </PostList>
    </div>
  )
}