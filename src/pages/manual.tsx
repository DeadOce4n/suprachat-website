import { Link, type HeadFC } from 'gatsby'
import { FaInfoCircle } from 'react-icons/fa'

import Container from '@components/Container/Container'
import Heading from '@components/Heading'
import Code, { CodeBlock } from '@components/Code'
import { BASE_TITLE } from '@utils/const'

const ManualPage = () => (
  <Container variant='narrow' className='mb-8'>
    <section>
      <Heading>Manual de usuario de SupraChat</Heading>
      <p className='mb-4 pl-2'>
        Ya que SupraChat es un chat del tipo <strong>IRC</strong>, muchas de las
        funciones se realizan a través de comandos, todos ellos (menos los del{' '}
        <a href='#bot'>bot</a>) comienzan con una <Code>/</Code>. Para enviar un
        comando simplemente se envía como cualquier otro mensaje en el chat.
      </p>
      <Heading variant='h2'>Índice</Heading>
      <ul className='mb-4 list-disc pl-8'>
        <li>
          <a className='link-primary link' href='#comandos-basicos'>
            Comandos básicos
          </a>
        </li>
        <li>
          <a className='link-primary link' href='#registrar-nicks'>
            Registrar nicks
          </a>
        </li>
        <li>
          <a className='link-primary link' href='#registrar-salas'>
            Registrar salas
          </a>
        </li>
        <li>
          <a className='link-primary link' href='#privilegios'>
            Privilegios
          </a>
        </li>
        <li>
          <a className='link-primary link' href='#bot'>
            Bot de moderación: SupraBot
          </a>
        </li>
        <li>
          <a className='link-primary link' href='#entrar-por-fuera'>
            Entrar por fuera de la web
          </a>
        </li>
      </ul>
    </section>
    <section>
      <Heading variant='h2' id='comandos-basicos'>
        Comandos básicos
      </Heading>
      <p className='mb-4 pl-2'>
        A continuación se muestran algunos de los comandos básicos y sus
        funciones:
      </p>
      <ul className='mb-4 list-disc pl-8'>
        <li>
          <div className='flex flex-col'>
            <span>
              <Code>/nick</Code>: con este comando puedes cambiar tu nick a
              algún otro que no esté en uso.<strong>OJO</strong>: este comando
              solamente puede ser utilizado por usuarios registrados.
            </span>
            <span>
              Ejemplo: <Code>/nick DeadOcean</Code>
            </span>
          </div>
        </li>
        <li>
          <div className='flex flex-col'>
            <span>
              <Code>/join</Code>: con este comando te puedes unir a una sala en
              la que aún no estés.
            </span>
            <span>
              Ejemplo: <Code>/join #radionautica</Code>
            </span>
          </div>
        </li>
        <li>
          <div className='flex flex-col'>
            <span>
              <Code>/part</Code>: con este comando te sales de la sala que
              actualmente estás mirando.
            </span>
            <span>
              Ejemplo: <Code>/part #radionautica</Code>
            </span>
          </div>
        </li>
        <li>
          <div className='flex flex-col'>
            <span>
              <Code>/query</Code>: con este comando puedes abrir una
              conversación privada con otro usuario.
            </span>
            <span>
              Ejemplo: <Code>/query DeadOcean</Code>
            </span>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <Heading variant='h2' id='registrar-nicks'>
        Registrar nicks
      </Heading>
      <p className='mb-4 pl-2'>
        Si quieres que nadie más pueda usar tu nick, haz click{' '}
        <Link to='/registro'>aquí</Link>. Por favor, toma en cuenta que está
        prohibido registrar varios nicks, en su lugar debes{' '}
        <strong>agrupar</strong> varios nicks a tu cuenta para que puedas
        alternar entre ellos cuando quieras; para ello simplemente te pones el
        nick que quieres agrupar (por ejemplo <Code>/nick DeadOcean</Code>) y
        luego escribes el siguiente comando:
      </p>
      <CodeBlock>/ns group</CodeBlock>
    </section>
    <section>
      <Heading variant='h2' id='registrar-salas'>
        Registrar salas
      </Heading>
      <p className='mb-4 pl-4'>
        Registrar una sala te otorga el beneficio de que solamente tú y tu gente
        de confianza puedan administrarlo, los únicos requisitos son: tener un
        nick registrado, que nadie haya registrado antes esa sala, y que tengas{' '}
        <a href='#privilegios'>privilegios</a> de operador en la sala. Se hace
        con el siguiente comando:
      </p>
      <CodeBlock>/cs register &lt;sala&gt;</CodeBlock>
      <span>
        Ejemplo: <Code>/cs register #radionautica</Code>
      </span>
      <p className='mb-4 pl-2'>
        Una vez que hayas registrado tu sala, puedes otorgar privilegios
        administrativos a cualquier usuario que sea de tu confianza. En la
        siguiente sección se describen los distintos modos (privilegios) que
        existen y cómo otorgarlos, ya sea de manera temporal o permanente.
      </p>
    </section>
    <section>
      <Heading variant='h1' id='privilegios'>
        Privilegios
      </Heading>
      <p className='mb-4 pl-2'>
        Los usuarios de una sala pueden tener distintos privilegios, los cuales
        se representan con un símbolo delante de su nick. A continuación se
        explica cada símbolo y su significado.
      </p>
      <ul className='mb-4 list-disc pl-8'>
        <li>
          <Code>+</Code>: este símbolo significa que el usuario tiene{' '}
          <strong>voz</strong> en la sala. Por ejemplo, si{' '}
          <Code>+DeadOcean</Code> está en la sala, significa que{' '}
          <Code>DeadOcean</Code> tiene <strong>voz</strong> en dicha sala. Los
          usuarios con <strong>voz</strong> pueden hablar en las salas
          moderadas. Este privilegio se otorga con el modo <strong>+v</strong>.
        </li>
        <li>
          <Code>%</Code>: este símbolo significa que el usuario es un{' '}
          <em>halfop</em> (semi-operador) de la sala. Por ejemplo, si{' '}
          <Code>%DeadOcean</Code> está en la sala, significa que{' '}
          <Code>DeadOcean</Code> es un <em>halfop</em> en dicha sala. Los
          usuarios con este símbolo pueden <em>kickear</em> (sacar de la sala) a
          otros usuarios, pero no pueden <em>bannearlos</em>
          (vetarlos), además pueden otorgar <strong>voz</strong> a otros
          usuarios. Este privilegio se otorga con el modo <strong>+h</strong>.
        </li>
        <li>
          <Code>@</Code>: este símbolo significa que el usuario es un{' '}
          <strong>operador</strong> de la sala. Por ejemplo, si{' '}
          <Code>@DeadOcean</Code> está en la sala, significa que{' '}
          <Code>@DeadOcean</Code> es un <strong>operador</strong> de dicha
          sala.Los <strong>operadores</strong> pueden cambiar todos los modos de
          la sala, <em>bannear/kickear</em> usuarios y dar/quitar privilegios de
          operador a otros usuarios en la sala. Este privilegio se otorga con el
          modo <strong>+o</strong>.
        </li>
        <li>
          <Code>&amp;</Code>: este símbolo significa que el usuario es un{' '}
          <strong>administrador</strong> de la sala. Por ejemplo, si{' '}
          <Code>&amp;DeadOcean</Code> está en la sala, significa que{' '}
          <Code>DeadOcean</Code> es un <strong>administrador</strong> de la
          sala.Los <strong>administradores</strong> son iguales a los{' '}
          <strong>operadores</strong>, pero los <strong>operadores (@) </strong>
          no pueden <em>kickear</em> ni quitar sus privilegios a los{' '}
          <strong>administradores</strong>. Este privilegio se otorga con el
          modo <strong>+a</strong>.
        </li>
        <li>
          <Code>~</Code>: este símbolo significa que el usuario es un{' '}
          <strong>fundador</strong> de la sala. Por ejemplo, si{' '}
          <Code>~DeadOcean</Code> está en la sala, significa que{' '}
          <Code>DeadOcean</Code> es un <strong>fundador</strong> de la sala. Los{' '}
          <strong>fundadores</strong> tienen control administrativo total de la
          sala, pueden realizar cualquier acción y modificar los privilegios del
          resto de usuarios en la sala. Este privilegio se otorga con el modo{' '}
          <strong>+q</strong>.
        </li>
      </ul>
      <Heading variant='h3'>Privilegios temporales</Heading>
      <p className='mb-4 pl-2'>
        Para otorgar permisos temporales en una sala en la que tienes acceso
        administrativos es tan fácil como correr el siguiente comando:
      </p>
      <CodeBlock>/mode &lt;sala&gt; &lt;modo&gt; &lt;nick&gt;</CodeBlock>
      <div className='mb-4'>
        Ejemplo: <Code>/mode #radionautica +o DeadOcean</Code>
      </div>
      <Heading variant='h3'>Privilegios permanentes</Heading>
      <p className='mb-4 pl-2'>
        Otorgar privilegios es igual de sencillo, y esto le permitirá a tus
        usuarios de confianza obtener privilegios automáticamente al entrar a la
        sala, sin necesidad de que lo hagas manualmente cada vez que entren. Se
        hace con el siguiente comando:
      </p>
      <CodeBlock>/cs amode &lt;sala&gt; &lt;modo&gt; &lt;nick&gt;</CodeBlock>
      <div className='mb-4'>
        Ejemplo: <Code>/cs amode #radionautica +a DeadOcean</Code>
      </div>
    </section>
    <section>
      <Heading variant='h2' id='bot'>
        Bot de moderación: SupraBot
      </Heading>
      <p className='mb-4 pl-2'>
        SupraChat cuenta con un bot de moderación con varias funciones
        interesantes: si eres <strong>&</strong>o mayor en una sala, puedes
        invitarlo a la sala y activar las funciones que desees usar en dicha
        sala.
        <strong>OJO</strong>, los comandos del bot comienzan con <Code>!</Code>,
        no con <Code>/</Code>. Las funciones del bot son las siguientes:
      </p>
      <Heading variant='h3'>Moderación de palabras</Heading>
      <p className='mb-4 pl-2'>
        Si esta función está activada, los usuarios <strong>&</strong> o
        superiores podrán agregar palabras a la lista negra, y si algún usuario
        dice alguna palabra que se encuentre en la lista, SupraBot le
        <em>muteará</em> durante dos minutos, es decir, el usuario no podrá
        hablar durante dos minutos. Los comandos de esta función son los
        siguientes:
      </p>
      <ul className='mb-4 ml-8 list-disc'>
        <li>
          <Code>!bw activar</Code>: con este comando se activa la moderación de
          palabras en la sala.
        </li>
        <li>
          <Code>!bw mostrar</Code>: con este comando se muestra en la sala la
          lista de palabras prohibidas.
        </li>
        <li>
          <Code>!bw agregar &lt;palabra&gt;</Code>: con este comando se agrega
          una palabra a la lista negra de la sala.
          <br />
          <span>
            Ejemplo: <Code>!bw agregar menso</Code>
          </span>
        </li>
        <li>
          <Code>!bw borrar &lt;palabra&gt;</Code>: con este comando se borra la
          palabra indicada de la lista negra de la sala.
          <br />
          <span>
            Ejemplo: <Code>!bw borrar bobo</Code>
          </span>
        </li>
        <li>
          <Code>!bw desactivar</Code>: con este comando se desactiva la
          moderación de nicks en la sala.
        </li>
      </ul>
      <Heading variant='h3'>Moderación de nicks</Heading>
      <p className='mb-4 pl-2'>
        Si esta función está activada, los usuarios <strong>&</strong> o
        superiores podrán agregar nicks a la lista negra, y si un usuario con
        uno de los nicks prohibidos entra a la sala, SupraBot lo
        <em>kickeará</em> automáticamente, es decir, el usuario no podrá entrar
        a la sala hasta que se coloque un nick que no se encuentre en la lista
        negra de esa sala. Incluso si un usuario que ya se encuentra dentro de
        la sala se cambia el nick a uno que se encuentrae en la lista, SupraBot
        también lo <em>kickeará</em>. Los comandos de esta función son los
        siguientes:
      </p>
      <ul className='mb-4 ml-8 list-disc'>
        <li>
          <Code>!bn activar</Code>: con este comando se activa la moderación de
          nicks en la sala.
        </li>
        <li>
          <Code>!bn mostrar</Code>: con este comando se muestra en la sala la
          lista de nicks prohibidos.
        </li>
        <li>
          <Code>!bn agregar &lt;nick&gt;</Code>: con este comando se agrega un
          nick a la lista negra de la sala.
          <br />
          <span>
            Ejemplo: <Code>!bn agregar DeadOcean</Code>
          </span>
        </li>
        <li>
          <Code>!bn borrar</Code>: con este comando se borra el nick indicado de
          la lista negra de la sala.
          <br />
          <span>
            Ejemplo: <Code>!bn borrar DeadOcean</Code>
          </span>
        </li>
        <li>
          <Code>!bn desactivar</Code>: con este comando se desactiva la
          moderación de nicks en la sala.
        </li>
      </ul>
      <Heading variant='h3'>Gestión de reglamento de sala</Heading>
      <p className='mb-4 pl-2'>
        SupraBot también tiene la capacidad de almacenar el reglamento de tu
        sala registrada y mostrarlo a los usuarios cuando estos lo requieran. Es
        posible agregar, modificar y borrar las reglas y no hay límite de reglas
        que se pueden agregar. Los comandos de esta función son los siguientes:
      </p>
      <ul className='mb-4 ml-8 list-disc'>
        <li>
          <Code>!rg activar</Code>: con este comando se activa la gestión de
          reglamento en la sala.
        </li>
        <li>
          <Code>!rg mostrar</Code>: con este comando se envían las reglas de la
          sala al usuario por mensaje privado.
        </li>
        <li>
          <Code>!rg agregar &lt;número&gt; &lt;descripción&gt;</Code>: con este
          comando se agrega una regla al reglamento de la sala. Nótese que es{' '}
          <strong>obligatorio</strong> indicar el número de regla.
          <br />
          <span>
            Ejemplo: <Code>!rg agregar 1 Respetar a todos por igual.</Code>
          </span>
        </li>
        <li>
          <Code>!rg modificar &lt;número&gt; &lt;descripción&gt;</Code>: con
          este comando se puede modificar la descripción de la regla indicada.
          Es necesario que exista una regla con el número indicado para poder
          modificarla.
          <br />
          <span>
            Ejemplo:{' '}
            <Code>!rg modificar 1 No causar molestias a los usuarios.</Code>
          </span>
        </li>
        <li>
          <Code>!rg borrar &lt;número&gt;</Code>: con este comando se puede
          borrar la regla indicada. Una vez borrada, es imposible recuperar esa
          regla, por lo que se tendrá que crear de nuevo.
          <br />
          <span>
            Ejemplo: <Code>!rg borrar 1</Code>
          </span>
        </li>
      </ul>
    </section>
    <section>
      <Heading variant='h2' id='entrar-por-fuera'>
        Entrar por fuera de la web
      </Heading>
      <p className='mb-4 pl-2'>
        Algunas personas prefieren usar su propio cliente IRC en lugar de entrar
        siempre por la web, así que aquí les dejamos los datos necesarios para
        conectarse:
      </p>
      <ul className='mb-4 ml-8 list-disc'>
        <li>
          Servidor: <Code>irc.suprachat.net</Code>
        </li>
        <li>
          Puerto: <Code>6697</Code>
        </li>
        <li>
          Conexión segura/SSL: <Code>True</Code>
        </li>
        <li>
          Método de autenticación: <Code>SASL</Code>
        </li>
      </ul>
      <p className='alert alert-info shadow-lg'>
        <div>
          <FaInfoCircle size={48} />
          <span>
            Recomendamos encarecidamente el método de autenticación{' '}
            <Code>SASL</Code> en lugar del viejo
            <Code>NickServ</Code>, ya que con <Code>SASL</Code> podrás
            conectarte desde varios dispositivos al mismo tiempo, siempre y
            cuando utilices la misma cuenta en todos ellos 😉.
          </span>
        </div>
      </p>
    </section>
  </Container>
)

export default ManualPage

export const Head: HeadFC = () => (
  <>
    <title>Manual de usuario | {BASE_TITLE}</title>
    <meta
      name='description'
      content='Manual de usuario de SupraChat, el mejor chat en español gratis y sin registro.'
    />
  </>
)
