import { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { HomeScreen } from '../components/pages/HomeScreen'
import { Navbar } from '../components/ui/Navbar'
import { Modal } from '../components/ui/Modal'
import { ModalContext } from '../context/modal/ModalContext'
import { ModalHero } from '../components/ui/ModalMoreHero'
import { SearchScreen } from '../components/pages/SearchScreen'

export const DashboardRoutes = () => {

    const {isOpenModal, isChangeModal, hero} = useContext(ModalContext);

    return (
        <>
            <Modal isOpenModal={isOpenModal} isChangeModal={isChangeModal}>
                <ModalHero isChangeModal={isChangeModal} hero={hero}/>
            </Modal>
            <Navbar />
            <Switch>
                <Route exact path="/myteam" component={HomeScreen} />
                <Route exact path="/addheroes" component={SearchScreen} />
                <Redirect to="/myteam" />
            </Switch>
        </>
    )
}