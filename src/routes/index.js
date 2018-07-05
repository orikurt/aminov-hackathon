import Home from '../pages/Home';
import Notifications from '../pages/Notifications';
import Players from '../pages/Players';

const routes = [
    {
        path: "/",
        exact: true,
        navNo: true,
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
        path: "/players",
        component: Players,
        icon: "assignment_ind",
        title: "portfolio"
    },
    {
        path: "/stats",
        component: Home,
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