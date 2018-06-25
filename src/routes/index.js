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
        path: "/exchange",
        component: Home,
        icon: "import_export",
        title: "exchange"
    },            
    {
        path: "/portfolio",
        component: PlayersList,
        icon: "assignment_ind",
        title: "portfolio"
    },
    {
        path: "/stats",
        component: PlayersList,
        icon: "bar_chart",
        title: "stats"
    },    
    {
        path: "/rankings",
        component: Home,
        icon: "grade",
        title: "power ranking"
    },        
    {
        path: "/friends",
        component: Home,
        icon: "people",
        title: "friends"
    },    
    {
        path: "/account",
        component: Home,
        icon: "perm_identity",
        title: "account"
    },
]

export default routes;