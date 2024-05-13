import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: var(--profile);
  margin-top: -5rem;
  border-radius: 12px;

`

export const TitleOptions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  a {
    display: flex;
    align-items: center;
    gap: .1rem;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--brand-blue);
    font-size: 0.75rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`

export const LinkItem = styled.div`
  display: flex;
  gap: .2rem;
  color: var(--label);
`

export const MarkdownWrapper = styled.div`
  padding-top: 2.5rem;
  padding-left: 3.5rem;
`