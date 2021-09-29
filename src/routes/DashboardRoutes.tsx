import { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { HomeScreen } from '../components/home/HomeScreen'
import { Navbar } from '../components/ui/Navbar'
import { Modal } from '../components/modal/Modal'
import { ModalHero } from '../components/modal/ModalHero'
import { ModalContext } from '../context/modal/ModalContext'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => {

    const {isOpenModal, isChangeModal, hero} = useContext(ModalContext);

    return (
        <>
            <Modal isOpenModal={isOpenModal} isChangeModal={isChangeModal}>
                <ModalHero isChangeModal={isChangeModal} hero={hero}/>
            </Modal>
            <Navbar />
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/search" component={SearchScreen} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}
