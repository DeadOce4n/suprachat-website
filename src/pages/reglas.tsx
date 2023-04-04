import React from 'react'
import type { HeadFC } from 'gatsby'

import Container from '@components/Container/Container'
import Heading from '@components/Heading'
import { BASE_TITLE } from '@utils/const'

const ReglasPage = () => (
  <section>
    <Container variant='narrow'>
      <Heading>Reglamento del chat</Heading>
      <p className='mb-2 pl-2'>
        A continuación te mostramos el reglamento del servidor, estas reglas
        aplican globalmente a todas las actividades que se realicen en
        SupraChat. Los operadores de salas, además de hacer cumplir sus propios
        reglamentos internos, deben hacer cumplir también este reglamento.
      </p>
      <Heading variant='h2'>1. Tratar a todos con respeto</Heading>
      <Heading variant='h2'>
        2. Evitar el uso de nicks inapropiados en salas donde no esté
        explícitamente permitido
      </Heading>
      <Heading variant='h2'>
        3. Está estrictamente prohibido hacer spam de otros chats
      </Heading>
      <Heading variant='h2'>
        4. De igual manera, está estrictamente prohibido hacer spam de este chat
        en otros chats
      </Heading>
      <Heading variant='h2'>
        5. Se sancionará a todo aquel que inunde las salas con mensajes
        repetitivos y molestos
      </Heading>
      <Heading variant='h2'>
        6. Está estrictamente prohibido enviar contenido inapropiado en salas
        donde no esté explícitamente permitido
      </Heading>
      <Heading variant='h2'>
        7. Sumado a la regla anterior, compartir contenido ilegal será
        sancionado con expulsión permanente y denuncia policíaca
      </Heading>
      <Heading variant='h2'>
        8. En caso de sufrir acoso de parte de otro usuario es necesario acudir
        directamente con los operadores del servidor con pruebas en mano
      </Heading>
      <Heading variant='h2'>
        9. Cada sala tiene su temática, evita hacer comentarios fuera de lugar
        y/o arruinar el ambiente
      </Heading>
    </Container>
  </section>
)

export default ReglasPage

export const Head: HeadFC = () => (
  <>
    <title>Reglamento del chat | {BASE_TITLE}</title>
    <meta
      name='description'
      content='Reglamento de SupraChat, el mejor chat en español gratis y sin registro.'
    />
  </>
)
