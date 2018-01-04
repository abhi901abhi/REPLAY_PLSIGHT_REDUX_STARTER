import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from './../../actions/courseAction';
import * as authorActions from './../../actions/authorAction';

import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';
import JsonView from 'react-pretty-json'; // 'react-pretty-json';

class ManageCoursePage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      course:Object.assign({},props.course),
      errors:{}
    };
    this.updateCourseState=this.updateCourseState.bind(this);
  }

  updateCourseState(event){
    debugger;
    const field =  event.target.name;

    //changed local state which is defined at mapStateToProps
    let course = this.state.course;
    course[field]= event.target.value;

    this.setState({
      course:course
    });
  }
  render(){
    const  {location, params, route, router, routeParams, routes, children, actions} = this.props;
    return (
      <div>
        <CourseForm
             course={this.state.course}
             allAuthors={this.props.authors}
             onChange={this.updateCourseState}
             errors={this.state.errors}>
        </CourseForm>

      <JsonView json={this.state.course} />;
      </div>
    );
  }
};
function mapStateToProps(state,ownProps){
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  const authorsFormattedForDropdown = state.authors.map(author=>{
    return {
      text:author.firstName+' '+ author.lastName,
      value:author.id
    }
  })
  return {
    course:course,
    authors:authorsFormattedForDropdown
  }
}

function mapDispatchToProps(dispatch){
  return{
      actions:bindActionCreators(courseActions,authorActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);