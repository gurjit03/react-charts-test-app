import React , {Component} from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';

import ProjectDisplayContainer from '../components/ProjectDisplayContainer';
import Search from '../components/Search';
import Charts from '../components/Charts';
import {createContainer} from 'meteor/react-meteor-data';
import ProjectDataForm from '../components/ProjectDataForm';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput : '',
      selectorName : ''
    }
  }
  handleSearchInputs(searchInput,selectorName) {
    this.setState({
      searchInput : searchInput,
      selectorName : selectorName
    })
  }
  renderComponent() {
    if(FlowRouter.getRouteName() == 'homePage') {
      return (<ProjectDataForm />);
    }else if(FlowRouter.getRouteName() == 'homePageDisplayData') {
      return (
        <div className="display-project-page">
        <Search onSearchInputs={this.handleSearchInputs.bind(this)} />
        <ProjectDisplayContainer searchInput={this.state.searchInput} selectorName={this.state.selectorName}/>
        </div>
    );
    }
  }
  render() {
    return (
      <div className="home-page-wrapper">
        {this.renderComponent()}
      </div>
    )
  }
}
