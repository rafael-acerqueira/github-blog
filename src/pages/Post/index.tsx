import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import Markdown from 'react-markdown'
import { LinkItem, LinksContainer, MarkdownWrapper, TitleOptions, Wrapper } from "./styles"
import { ArrowSquareOut, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react"


interface PostProps {
  title: string,
  body: string,
  html_url: string,
  created_at: string,
  comments: string,
  user: string
}

export function Post() {

  const [post, setPost] = useState<PostProps>({})

  const { id } = useParams()

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.github.com/repos/rafael-acerqueira/github-blog/issues/${id}`
    }).then(function (response) {
      const data = response.data
      const { title, body, user, created_at, comments, html_url } = data
      setPost({
        title,
        body,
        created_at,
        comments,
        html_url,
        user: user.login
      })
    })

  }, [])

  return (
    <>
      <Wrapper>
        <TitleOptions>
          <Link to='/'>
            <CaretLeft />
            <span>Voltar</span>
          </Link>
          <a href={post.html_url} target="_blank">
            <span>Ver no Github</span>
            <ArrowSquareOut />
          </a>
        </TitleOptions>
        <h1>{post.title}</h1>
        <LinksContainer>
          <LinkItem>
            <GithubLogo color="#3A536B" size={18} />
            <span>{post.user}</span>
          </LinkItem>
          <LinkItem>
            <CalendarBlank color="#3A536B" weight="fill" size={18} />
            <span>
              {
                post.created_at && formatDistanceToNow(post.created_at, { addSuffix: true, locale: ptBR })
              }
            </span>
          </LinkItem>
          <LinkItem>
            <ChatCircle color="#3A536B" weight="fill" size={18} />
            <span>{post.comments} comentários</span>
          </LinkItem>
        </LinksContainer>


      </Wrapper>
      <MarkdownWrapper>
        <Markdown>{post.body}</Markdown>
      </MarkdownWrapper>
    </>
  )
}
