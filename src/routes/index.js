import Home from '../pages/Home';
import Notifications from '../pages/Notifications';
import PlayersList from '../components/PlayersList';

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/notifications",
        component: Notifications,
        icon: "notifications",
        title: "notifications"
    },
    {
        path: "/players",
        component: PlayersList,
        icon: "people",
        title: "players"
    },    
    {
        path: "/stats",
        component: PlayersList,
        icon: "assessment",
        title: "stats"
    },
    {
        path: "/account",
        component: Home,
        icon: "account_circle",
        title: "account"
    },        
]

export default routes;