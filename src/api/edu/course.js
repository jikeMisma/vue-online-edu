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
}
