import React from 'react'
import { navigate, type HeadFC, type PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'react-i18next'

import { BASE_TITLE } from '@utils/const'
import useAuth from '@hooks/useAuth'
import Button from '@components/Button/Button'
import Container from '@components/Container/Container'
import Hero from '@components/Hero/Hero'

const IndexPage: React.FC<PageProps> = () => {
  const { userState } = useAuth()
  const { t } = useTranslation()

  return (
    <section>
      <Container className='split'>
        <Hero
          title={t('landing.heroTitle')}
          content={t('landing.heroContent')}
          image={
            <StaticImage
              src='../images/astronaut.webp'
              alt='Astronauta flotando'
              title='Astronauta flotando'
              placeholder='blurred'
              objectFit='scale-down'
            />
          }
        >
          <div className='buttons'>
            {!userState && (
              <Button primary onClick={() => navigate('/registro')}>
                Registrarse
              </Button>
            )}
            <button
              className='btn btn-primary w-full font-accent'
              data-toggle-theme='dark,light'
            >
              ¡Chatea ya!
            </button>
          </div>
        </Hero>
      </Container>
    </section>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Chat gratis, con imágenes y en español | {BASE_TITLE}</title>
    <meta
      name='description'
      content='SupraChat es un chat gratis sin registro y en español para conocer personas de todo el mundo. Se permite el envío de imágenes, vídeos y audios.'
    />
  </>
)
