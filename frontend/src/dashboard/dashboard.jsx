import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getSummary } from "./dashboard-actions";
import Content from '../common/template/content'
import ContentHeader from '../common/template/content-header'
import ValueBox from '../common/widget/value-box'
import Row from '../common/layout/row'

class Dashboard extends Component {
    componentWillMount () {
        this.props.getSummary()
    }

    render() {
        const { credit, debit } = this.props.summary
        return (
            <div>
                <ContentHeader title="Dashboard" small="versão 1.0" />
                <Content>
                    <Row>
                        <ValueBox columns="12 4" color="green" icon="bank" value={`R$ ${credit || 0}`} text="Total de créditos"></ValueBox>
                        <ValueBox columns="12 4" color="red" icon="credit-card" value={`R$ ${debit || 0}`} text="Total de débitos"></ValueBox>
                        <ValueBox columns="12 4" color="blue" icon="money" value={`R$ ${credit-(debit || 0)}`} text="Valor consolidado"></ValueBox>
                    </Row>
                </Content>
            </div>)
    }
}

const mapStateToProps = state =>( { summary: state.dashboard.summary } )
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Dashboard)