import Home from '../pages/Home/Home';
import PlayersList from '../components/PlayersList/PlayersList';

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/players",
        component: PlayersList
    }    
]

export default routes;