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
  }
}
