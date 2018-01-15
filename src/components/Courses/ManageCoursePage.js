import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from './../../actions/courseAction';
import * as authorActions from './../../actions/authorAction';

import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';
import JsonView from 'react-pretty-json'; // 'react-pretty-json';
import toastr from 'toastr';

class ManageCoursePage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={
      course:Object.assign({},props.course),
      errors:{},
      saving: false
    };
    this.updateCourseState=this.updateCourseState.bind(this);
    this.saveCourse=this.saveCourse.bind(this);

  }
  componentWillReceiveProps(nextProps){
    	if(nextProps.course && this.props.course.id!= nextProps.course.id){
    		this.setState({ course: Object.assign({},nextProps.course) } );
    	}
          //   Issue while UPDATE: When you click on an item, it will navigate to update page with values
          // but when you refresh the updating page then all values will be gone. why ?
          // --->class ManageCoursePage extends React.Component{
          //   constructor(props,context){
          //     super(props,context);
          //     this.state={
          //       course:Object.assign({},props.course),
          //       errors:{}
          //     };
          //
          // Initially when page first constructed the course of a props( props.course ) and set to local state, once our page is initialised any changes to
          // props should be updated to the state. but the line " course:Object.assign({},props.course) " never called again so that the state will not be updated
          // even the props data updated. To solve this one handy life cycle method comes into the picture that is "componentWillReceiveProps", this will update
          // container component state when there is any update in props.
          // this will call when react thinks props might have changed + some times with out props change also it will call
}//componentWillReceiveProps

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
  saveCourse(event){
    debugger;
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course).then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }
  redirect() {
    this.setState({saving: false});
    toastr.success('Course saved');
    this.context.router.push('/courses');
  }
  render(){
    const  {location, params, route, router, routeParams, routes, children, actions} = this.props;
    return (
      <div>
        <CourseForm
             course={this.state.course}
             allAuthors={this.props.authors}
             onChange={this.updateCourseState}
             onSave={this.saveCourse}
             saving={this.state.saving}
             errors={this.state.errors}>
        </CourseForm>
        <p></p>
      <pre>
        <JsonView json={this.state.course} />
      </pre>
      </div>
    );
  }
}; //class end

ManageCoursePage.contextTypes={
  router:PropTypes.object.isRequired
}

function getCourseById(courses,courseId)
{
  //updating
  //state."courses" are coming from rootReducer
  let matchedCourse =  courses.filter(course=>course.id===courseId) ;
  if(matchedCourse.length>0)
  {
    return matchedCourse[0];
  }
  return null;
}

function mapStateToProps(state,ownProps){
  debugger;
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  const courseId = ownProps.params.id; // form the path course/:id
  if(courseId && state.courses.length>0 ){
    course = getCourseById(state.courses,courseId);
  }
  const authorsFormattedForDropdown = state.authorReducer.map(author=>{
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
      actions:bindActionCreators({...courseActions,...authorActions},dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
