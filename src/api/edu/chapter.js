import request from "@/utils/request";

export default {
  //根据课程id获取章节和小结列表
  getaLLChapterVideo(courseId) {
    return request({
      url: `/eduservice/chapter/getChapterVideo/`+courseId,
      method: "get",
    });
  }
}