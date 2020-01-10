import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";

import { getList } from "./billing-cycle-actions";

class BillingCycleList extends Component {
    
    componentWillMount() {
        this.props.getList()    
    }

    renderRows() {
        const list = this.props.list || []

        return list.map(p => (
            <tr key={ p._id }>
                <td>{ p.name }</td>
                <td>{ p.month }</td>
                <td>{ p.year }</td>
                <td></td>
            </tr> 
        ))
    }

    render() {
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderRows() }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)