import request from "@/utils/request";

export default {
  //添加课程信息
  getCorseInfo(courseInfo) {
    return request({
      url: `/eduservice/course/addCourceInfo`,
      method: "post",
      data:courseInfo
    });
  },

  //查询所有讲师
  getListTeacher(){
    return request({
      url: `/eduservice/teacher/findAll`,
      method: "get",
    });
  },

  //根据课程id查询课程基本信息
  getCourseInfoById(id){
    return request({
      url: `/eduservice/course/getCourseInfo/`+id,
      method: "get",
    });
  },

  //修改课程信息
  uodateCourseInfo(courseInfo){
    return request({
      url: `/eduservice/course/updateCourseInfo/`,
      method: "post",
      data:courseInfo
    });
  },

  //课程确认信息显示
  getPublishCourseInfo(id){
    return request({
      url: `/eduservice/course/getPublishCourseInfo/`+id,
      method: "get",
    });
  },

  //课程的最终发布
  publishCourse(id){
    return request({
      url: `/eduservice/course/publishCourse/`+id,
      method: "post",
    });
  },

  //TODO,课程列表
  getListCourse(){
    return request({
      url: `/eduservice/course/getCourseList`,
      method: "get",
    });
  },

  //删除课程
  deleteCourseById(id){
    return request({
      url: `/eduservice/course/`+id,
      method: "delete",
    });
  },

  //讲师列表（条件查询分页）
  getCourseListPage(current,limit,courseQuery) {
    return request({
      url:`/eduservice/course/pageCourseCondition/${current}/${limit}`,
      method: "post",
      data:courseQuery
    });
  },
}
