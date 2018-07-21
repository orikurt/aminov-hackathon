import Home from '../pages/Home';
import Notifications from '../pages/Notifications';
import Players from '../pages/Players';
import Player from '../pages/Player';
import SignIn from '../pages/SignIn'
import Exchange from '../pages/Exchange';
const routes = [
    {
        path: "/",
        exact: true,
        navNo: true,
        component: Home
    },
    {
        path: "/account",
        component: Home,
        navNo: true
    },    
    {
        path: "/login",
        exact: true,
        navNo: true,
        component: SignIn
    },    
    {
        path: "/register",
        exact: true,
        navNo: true,
        component: SignIn
    },
    {
        path: "/forgotpassword",
        exact: true,
        navNo: true,
        component: SignIn
    },        
    {
        path: "/notifications",
        component: Notifications,
        icon: "bell",
        title: "Notifications"
    },
    {
        path: "/exchange",
        component: Home,
        exact: true,
        icon: "transfer",
        title: "Exchange"
    },
    {
        path: "/exchange/:uid",
        component: Exchange,
        exact: true,
        navNo: true
    },    
    {
        path: "/players",
        component: Players,
        exact: true,
        icon: "blackboard",
        title: "Portfolio"
    },
    {
        path: "/players/:uid",
        component: Player,
        navNo: true,
        exact: true
    },    
    {
        path: "/stats",
        component: Home,
        icon: "stats",
        title: "Stats"
    },    
    {
        path: "/rankings",
        component: Home,
        icon: "sort-by-attributes",
        title: "Power Ranking"
    },
    {
        path: "/board",
        component: Home,
        icon: "bullhorn",
        title: "Bulletin Board"
    },        
    {
        path: "/friends",
        component: Home,
        icon: "user",
        title: "Friends"
    },
]

export default routes;