import React, { Component } from 'react'
import UI from './IndexUI'
import { connect } from 'react-redux'

class Index extends Component{
    render(){
        return <UI {...this.props}/>;
    }
}

const mapStateToProps = ({category})=>{
    return {
        title: category.title
    }
}

export default connect(mapStateToProps)(Index);
