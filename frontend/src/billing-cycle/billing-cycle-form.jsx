import React, {Component} from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";

import { init } from "./billing-cycle-actions";
import input from "../common/form/label-input"

class BillingCycleForm extends Component {
        
    render() {
        const { handleSubmit, readOnly } = this.props

        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" label="Nome" cols="12 4" placeholder="informe o nome" component={input} readOnly={readOnly}></Field>
                    <Field name="month" label="Mês" cols="12 4" placeholder="informe o mês" component={input} readOnly={readOnly}></Field>
                    <Field name="year" label="Ano" cols="12 4" placeholder="informe o ano" component={input} readOnly={readOnly}></Field>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>Cancel</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: "billingCycleForm",destroyOnUnmount: false })(BillingCycleForm)
const mapDispachToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(null, mapDispachToProps)(BillingCycleForm)