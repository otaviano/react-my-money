import React, { Component } from "react";

export default class Grid extends Component {
    render() {
        const gridClasses = this.toCssClasses(this.props.cols || "12")

        return (<div className={gridClasses}>{this.props.children}</div>)
    }

    toCssClasses(numbers) {
        const columns = numbers ? numbers.split(' ') : []
        let classes = ''

        if(columns[0]) classes += `col-xs-${columns[0]}`
        if(columns[1]) classes += ` col-sm-${columns[1]}`
        if(columns[1]) classes += ` col-md-${columns[2]}`
        if(columns[1]) classes += ` col-lg-${columns[3]}`

        return classes
    }
}