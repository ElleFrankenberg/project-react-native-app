import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import { Header } from './Header'
import { MyCustomButton } from './MyCustomButton'


const Container = styled.View`
  flex: 1;
  background-color: #f1f2f1;
  justify-content: space-around;
`

const ImageContainer = styled.View`
  align-items: center;
`

const CatImage = styled.Image`
  width: 340px;
  height: 350px;
`

export const RandomCats = () => {
  const [randomCatImages, setRandomCatImages] = useState ([])

  const CAT_API = 'https://api.thecatapi.com/v1/images/search?api_key=ea0566f3-f5f8-4c25-af3c-bfb39b49849a'

  useEffect(() => {
    fetch (CAT_API)
      .then(res => res.json())
      .then(json => setRandomCatImages(json))
    },[]) 
    
    const updateRandomCat = () => {
      fetch (CAT_API)
        .then(res => res.json())
        .then(json => setRandomCatImages(json))
    }

  return(
    <>
      <Header text= "CATZ!"/>
      <Container>
        {randomCatImages.map(catImage => (
          <ImageContainer key={catImage.id}>
            <CatImage source={{uri: catImage.url}}/>
            <MyCustomButton text='🐾  NEXT  🐾' onPress={updateRandomCat} />
          </ImageContainer >
        ))}
      </Container>
    </>
  )
}

