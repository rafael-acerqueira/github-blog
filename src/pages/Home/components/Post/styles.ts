import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--post);
  border-radius: 6px;
  padding: 2rem;
`

export const Title = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`

export const Name = styled.h1`
  color: var(--title);
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
`

export const Description = styled.p`
  color: var(--text);
  line-height: 160%;
`

export const Time = styled.time`
  font-size: 0.875rem;
  color: var(--span);
`