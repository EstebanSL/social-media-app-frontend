import { Box, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Navbar } from '../../components/navbar'
import { PostsList } from '../../components/postsList/PostsList'
import { FriendsListWidget } from '../../widgets/friendsListWidget/FriendsListWidget'
import { NewPostWidget } from '../../widgets/newPostWidget/NewPostWidget'
import { UserWidget } from '../../widgets/userWidget/UserWidget'

export const ProfilePage = () => {

  const [user, setUser] = useState()
  const { userId } = useParams()
  const token = useSelector((state) => state.auth.token)
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")

  const getUser = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}`,
      {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + token}
      }
    )
    const data = await response.json()
    setUser(data)
  }

  useEffect(() => {
    getUser()
  }, [])
  
  return (
    <Box>
    <Navbar />

    <Box
      width="100%"
      padding="2rem 6%"
      display={isNonMobileScreen ? 'flex' : 'block'}
      gap="2rem"
      justifyContent="center"
    >
      <Box flexBasis={isNonMobileScreen ? '26%' : undefined}>
        <UserWidget userId={userId} picturePath={user?.picturePath} />
        <Box m="2rem 0" />
        <FriendsListWidget userId={userId} />
      </Box>
      <Box
        flexBasis={isNonMobileScreen ? '42%' : undefined}
        mt={isNonMobileScreen ? undefined : '2rem'}
      >
        <PostsList userId={userId} />
      </Box>
    </Box>
  </Box>
  )
}
