import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 3rem;
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`

export const Title = styled.h1`
  font-size: 1.125rem;
  color: var(--subtitle);
`

export const Count = styled.span`
  color: var(--span);
`

export const Search = styled.input`
  color: var(--border);
  height: 3.125rem;
  padding-left: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border);
  background-color: var(--input);
  width: 100%;

  &::placeholder {
  color: var(--border);
  opacity: 1; /* Firefox */
  }

  &::-ms-input-placeholder { /* Edge 12 -18 */
    color: var(--border);
  }
`