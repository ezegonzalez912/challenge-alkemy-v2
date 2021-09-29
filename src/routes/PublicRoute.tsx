import { Redirect, Route, RouteProps } from 'react-router-dom'

interface Props extends RouteProps {
    isAuthenticated: string | null,
    component: React.ComponentType;
}

export const PublicRoute: React.FC<Props> = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route {...rest}
            component={ (props: JSX.Element) => (
                !isAuthenticated ? <Component {...props} />
                : <Redirect to="/"/>
            )}
        />
    )
}