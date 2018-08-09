import React from "react";
import { withRouter } from "react-router-dom";
import { Nav, NavItem } from "react-bootstrap";

const PlayerNav = (props) => (<div style={{ marginBottom: '10px' }}>
    <Nav bsStyle="tabs" activeKey={ props.match.url.indexOf("exchange") > -1 ? 2 : 1 } >
        <NavItem eventKey={1} onClick={()=>(props.history.push(`/players/${props.match.params.uid}`))} >
            Player Card
        </NavItem>
        <NavItem eventKey={2} onClick={()=>(props.history.push(`/exchange/${props.match.params.uid}`))} >
            Trade Dashboard
        </NavItem>
    </Nav>
</div>)

export default withRouter(PlayerNav);