import { navigate, type HeadFC, type PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'react-i18next'

import { BASE_TITLE } from '@utils/const'
import useAuth from '@hooks/useAuth'
import Hero from '@components/Hero/Hero'
import { cx } from 'classix'

const IndexPage: React.FC<PageProps> = () => {
  const { userState } = useAuth()
  const { t } = useTranslation()

  return (
    <section>
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
        <div className='flex w-full flex-col gap-2 md:flex-row md:gap-4'>
          {!userState && (
            <button
              className='
                btn-primary
                btn-md
                btn
                font-accent
                text-lg
                normal-case
                md:btn-lg
                md:flex-1
              '
              onClick={() => navigate('/registro')}
            >
              {t('landing.signup')}
            </button>
          )}
          <button
            className={cx(
              'btn-primary btn-md btn border-2 font-accent text-lg normal-case md:btn-lg md:flex-1',
              !userState && 'btn-outline'
            )}
            data-toggle-theme='dark,light'
            onClick={() => navigate('/chat')}
          >
            {t('landing.chatNow')}
          </button>
        </div>
      </Hero>
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
