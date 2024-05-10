import { Count, Search, Title, TitleBox, Wrapper } from "./styles";

interface SearchBoxProps {
  search: (data) => void,
  count: number
}

export function SearchBox({ search, count }: SearchBoxProps) {
  return (
    <Wrapper>
      <TitleBox>
        <Title>Publicações</Title>
        <Count>{count} publicações</Count>
      </TitleBox>
      <form onSubmit={search}>
        <Search placeholder="Buscar conteúdo" name="search" />
      </form>
    </Wrapper>
  )
}