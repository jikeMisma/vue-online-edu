import request from "@/utils/request";

export default {
  //生成统计数据
  createData(day) {
    return request({
      url: `/staservice/sta/registerCount/${day}`,
      method: "post"
    });
  },
}