import request from "@/utils/request";

export default {
  //添加小结
  addVideo(video) {
    return request({
      url: `/eduservice/video/addVideo`,
      method: "post",
      data:video
    });
  },

   //修改小结
   updateVideo(video) {
    return request({
      url: ``,
      method: "post",
      data:video
    });
  },

   //删除小结
   removeVideo(videoId) {
    return request({
      url: `/eduservice/video/`+videoId,
      method: "delete",
    });
  },


}