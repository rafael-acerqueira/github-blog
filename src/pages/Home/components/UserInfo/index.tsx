import { useEffect, useState } from 'react'
import axios from 'axios'

import { ArrowSquareOut, GithubLogo, Building, Users } from '@phosphor-icons/react'

import { Description, GithubLink, Name, ProfilePicture, SocialItem, SocialLinks, Title, Wrapper } from './styles'

interface User {
  avatar_url: string,
  html_url: string,
  name: string,
  bio: string,
  company: string,
  login: string,
  followers: string
}

export function UserInfo() {

  const [userInfo, setUserInfo] = useState<User>({})


  function fetchUserData() {
    axios({
      method: "get",
      url: "https://api.github.com/users/rafael-acerqueira"
    }).then(function (response) {
      const { avatar_url, html_url, name, bio, company, login, followers } = response.data

      setUserInfo({ avatar_url, html_url, name, bio, company, login, followers })
    })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <Wrapper>
      <ProfilePicture src={userInfo["avatar_url"]} alt="" />
      <div>
        <Title>
          <Name>{userInfo["name"]}</Name>
          <GithubLink href={userInfo["html_url"]} target="_blank">
            <span>Github</span>
            <ArrowSquareOut />
          </GithubLink>
        </Title>
        <Description>{userInfo["bio"]}</Description>
        <SocialLinks>
          <SocialItem>
            <GithubLogo color="#3A536B" size={18} />
            <span>{userInfo["login"]}</span>
          </SocialItem>
          <SocialItem>
            <Building weight="fill" color="#3A536B" size={18} />
            <span>{userInfo["company"]}</span>
          </SocialItem>
          <SocialItem>
            <Users weight="fill" color="#3A536B" size={18} />
            <span>{userInfo["followers"]} seguidores</span>
          </SocialItem>
        </SocialLinks>
      </div>
    </Wrapper>
  )

}