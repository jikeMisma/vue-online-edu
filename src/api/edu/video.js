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

  //删除阿里云中视频
  deleteAliyunVideo(id) {
    return request({
      url: `/enuvod/video/removeAliyunVideo/`+id,
      method: "delete",
    });
  },


}