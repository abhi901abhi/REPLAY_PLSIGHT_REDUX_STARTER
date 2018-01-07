import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from './../../actions/courseAction';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
//Stateless functional component
class CoursePage extends React.Component{
  constructor(){
    super();
    //local state
    this.state = {
      course:{
        title:''
      }
    };
    this.handleOnChange= this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({
      course:course
    });
  }
  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }
  handleOnClick(event){
  //  this.props.dispatch(courseActions.createCourse(this.state.course));
  //this.props.createCourse(this.state.course);
  this.props.actions.createCourse(this.state.course);
    this.setState(
      {
        course:{
                title:''
         }
      });
  }
  render(){
    const {courses} = this.props;
    return (
      <div>
        <h1>
          Courses
        </h1>
        {/* SINCE THIS COMPONENT IS CONTAINER COMPONENT, MOVE THE BELOW COMMENTED CODE
        TO PRESENTATIONAL COMPONENT */}
        {/* <div>
        {
            this.props.courses.map((course,index)=>{
              return  <p key={index}>{course.title}</p>
            })
        }
        </div> */}
        <input type="submit" value="Add Course" className="btn btn-primary pull-right"
          onClick={this.redirectToAddCoursePage}/>
          <br/>
          <br/>
          
        <CourseList courses={courses} />


        {
          /* Add course section start
        <h1>
          Add Course
        </h1>
        <input type="text" value={this.state.course.title} onChange={this.handleOnChange}/>
        <input type="submit" value="Save" onClick={this.handleOnClick}/>
        Add course section end */
      }

      </div>
    );
  }
};
function mapStateToProps(state,ownProps)
{
  return {
    courses:state.courses  //.courses property is from root reducer
  }
}

function mapDispatchToProps(dispatch){
  return{
  //  createCourse:course => dispatch(courseActions.createCourse(course))
  actions:bindActionCreators(courseActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);
