import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: var(--profile);
  margin-top: -5rem;
  border-radius: 12px;

  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 2rem;
`

export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 6px;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const Name = styled.h1`
  font-size: 1.5rem;
  margin-bottom: .5rem;
`

export const GithubLink = styled.a`
  color: var(--brand-blue);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.75rem;

  display: flex;
  gap: .2rem;
`

export const Description = styled.p`
  color:var(--text);
  margin-bottom: 1.5rem;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const SocialItem = styled.span`
  display: flex;
  align-items: center;
  gap: .25rem;
`