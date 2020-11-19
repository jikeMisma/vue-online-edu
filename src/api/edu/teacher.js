import request from "@/utils/request";

export default {
  //讲师列表（条件查询分页）
  getTeacherListPage(current,limit,teacherQuery) {
    return request({
      //url: "/table/list",
      url:`eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
      method: "post",
      //params
      //teacherQuery条件对象，后盾使用RequestBody获取数据
      //data表示把数据转换为json进行传送
      data:teacherQuery
    });
  },

  deleteTeacherById(id){
    return request({
      //url: "/table/list",
      url:`eduservice/teacher/${id}`,
      method: "delete",
    });
  },

  addTeacher(teacher){
    return request({
      url:`eduservice/teacher/addTeacher`,
      method: "post",
      data:teacher
    });
  },

  getTeacherInfo(id){
    return request({
      url:`eduservice/teacher/getTeacher/${id}`,
      method: "get",
    });
  },

  //修改讲师
  updateTeacherInfo(teacher){
    return request({
      url:`eduservice/teacher/updateTeacher`,
      method: "post",
      data:teacher
    });
  }
};
