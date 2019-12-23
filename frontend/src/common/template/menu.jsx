import React from 'react'
import MenuItem from './menu-item'
import MenuTree from './menu-tree'

export default props => (
    <ul className="sideber-menu">
        <MenuItem path="#" label="dashboard" icon="dashboard"></MenuItem>
        <MenuTree label="cadastro" icon="edit">
            <MenuItem path="#/billing-cycles" label="Ciclos de pagamentos" icon="usd"></MenuItem>
        </MenuTree>
    </ul>
)