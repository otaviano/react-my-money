import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";

import Content from '../common/template/content'
import ContentHeader from '../common/template/content-header'

import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabs-header'
import TabsContent from '../common/tab/tabs-content'
import TabHeader from '../common/tab/tab-header'
import TabContent from '../common/tab/tab-content'
import { selectTab, showTabs } from "../common/tab/tab-actions";

import List from "./billing-cycle-list";
import Form from "./billing-cycle-form";
import { create } from "./billing-cycle-actions";

class BillingCycle extends Component {
    componentWillMount() {
        this.props.selectTab('tab-list')
        this.props.showTabs('tab-list', 'tab-create')
    }
    
    render() {
        return <div>
            <ContentHeader title="Ciclos de pagamento" small="Cadastro"></ContentHeader>
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label="listar" icon="bars" target="tab-list"></TabHeader>
                        <TabHeader label="Incluir" icon="plus" target="tab-create"></TabHeader>
                        <TabHeader label="Alterar" icon="pencil" target="tab-update"></TabHeader>
                        <TabHeader label="Excluir" icon="trash-o" target="tab-delete"></TabHeader>
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tab-list"><List /></TabContent>
                        <TabContent id="tab-create"><Form onSubmit={this.props.create}/></TabContent>
                        <TabContent id="tab-update"><Form /></TabContent>
                        <TabContent id="tab-delete"><h1>excluir</h1></TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
        </div> 
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)