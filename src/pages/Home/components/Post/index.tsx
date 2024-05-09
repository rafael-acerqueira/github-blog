import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Wrapper, Title, Description, Name, Time } from './styles'

interface PostProps {
  title: string,
  description: string,
  date: string
}

export function Post({ title, description, date }: PostProps) {
  return (
    <Wrapper>
      <Title>
        <Name>{title}</Name>
        <Time>
          {
            formatDistanceToNow(new Date(date), { addSuffix: true, locale: ptBR })
          }
        </Time>
      </Title>
      <Description>{description.slice(0, 200)}</Description>
    </Wrapper>
  )
}