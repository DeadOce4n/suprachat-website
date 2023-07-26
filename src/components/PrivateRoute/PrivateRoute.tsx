import { type JSXElementConstructor, type ComponentType, Suspense } from 'react'
import { navigate } from 'gatsby'
import type { RouteComponentProps } from '@reach/router'

import useAuth from '@hooks/useAuth'
import { Loader } from '@components/Loader'

interface Props extends RouteComponentProps {
  component: JSXElementConstructor<Record<string, unknown>>
}

const PrivateRoute = ({ component: Component, location, ...rest }: Props) => {
  const { userState } = useAuth()

  if (!userState && location?.pathname !== '/app/login/') {
    navigate('/app/login')
    return null
  }

  if (!userState?.verified && location?.pathname !== '/app/verificar/') {
    navigate('/app/verificar')
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute

export const createLazyRoute = <T extends RouteComponentProps>(
  RouteComponent: ComponentType<T>,
  displayName = RouteComponent.displayName
) => {
  const component = (props: T) => {
    return (
      <Suspense fallback={<Loader />}>
        <RouteComponent {...props} />
      </Suspense>
    )
  }
  component.displayName = displayName
  return component
}
