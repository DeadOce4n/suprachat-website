import { Link, type HeadFC } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import Container from '@components/Container'
import Heading from '@components/Heading'
import { BASE_TITLE } from '@utils/const'

type GenericProps = {
  children: ReactNode
}

const TeamContainer = ({ children }: GenericProps) => (
  <div
    className='
      mx-2
      mb-6
      flex
      flex-col
      flex-wrap
      items-center
      justify-center
      gap-4
      md:flex-row
      md:flex-nowrap
    '
  >
    {children}
  </div>
)

const MemberCard = ({ children }: GenericProps) => (
  <div
    className='
      max-w-[300px]
      rounded-2xl
      bg-primary
      text-base-100
      [&>.gatsby-image-wrapper]:mx-10
      [&>.gatsby-image-wrapper]:mt-10
      [&>.gatsby-image-wrapper]:rounded-2xl
    '
  >
    {children}
  </div>
)

const MemberInfo = ({ children }: GenericProps) => (
  <div
    className='
      flex
      flex-col
      items-center
      justify-center
      gap-1
      pb-12
      pt-8
    '
  >
    {children}
  </div>
)

type Member = {
  nick: string
  role: string
  email: string
  img: ReactNode
}

const AcercaPage = () => {
  const { t } = useTranslation()

  const members: Member[] = [
    {
      nick: 'DeadOcean',
      role: t('roles.adminMale'),
      email: 'admin@suprachat.net',
      img: (
        <StaticImage
          src='../images/deadocean.png'
          alt='DeadOcean: Administrador del servidor'
        />
      )
    },
    {
      nick: 'Gusy',
      role: t('roles.operatorFemale'),
      email: 'gusy@suprachat.net',
      img: (
        <StaticImage
          src='../images/gusy.jpeg'
          alt='Gusy: Operadora del servidor'
        />
      )
    },
    {
      nick: 'Rey',
      role: t('roles.operatorMale'),
      email: 'rey@suprachat.net',
      img: (
        <StaticImage
          src='../images/aldo.jpeg'
          alt='Rey: Operador del servidor'
        />
      )
    }
  ]

  return (
    <section className='mb-4'>
      <Container variant='narrow'>
        <Heading>Acerca de SupraChat</Heading>
        <p className='p-2'>
          SupraChat es un chat IRC gratuito y sin registro obligatorio donde
          puedes entrar a platicar con personas de todo el mundo sobre cualquier
          cosa que te imagines.
        </p>
        <p className='mb-4 p-2'>
          Quién sabe, quizá el amor que tanto has buscado te está esperando aquí
          🥰, no lo sabrás si no entras a <Link to='/chat'>chatear</Link> justo
          ahora 👀.
        </p>
        <Heading variant='h2' className='mb-4'>
          Conoce a nuestro equipo
        </Heading>
        <TeamContainer>
          {members.map((member) => (
            <MemberCard key={member.nick}>
              {member.img}
              <MemberInfo>
                <span className='font-accent text-lg font-bold'>
                  {member.nick}
                </span>
                <span>{member.role}</span>
                <span className='font-mono'>{member.email}</span>
              </MemberInfo>
            </MemberCard>
          ))}
        </TeamContainer>
        <p className='mb-4'>
          Siéntete con la confianza de contactar a cualquiera de ellos si tienes
          algun problema o inquietud acerca del chat, ellos harán todo lo que
          puedan para ayudarte!
        </p>
      </Container>
    </section>
  )
}

export default AcercaPage

export const Head: HeadFC = () => (
  <>
    <title>Acerca de SupraChat | {BASE_TITLE}</title>
    <meta
      name='description'
      content='SupraChat es un chat IRC gratuito y sin registro obligatorio donde puedes entrar a platicar con personas de todo el mundo sobre cualquier cosa que te imagines.'
    />
  </>
)
