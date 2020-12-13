import request from "@/utils/request";

export default {
  //讲师列表（条件查询分页）
  getBannerListPage(page,limit) {
    return request({
      url:`/educms/banneradmin/pageBanner/${page}/${limit}`,
      method: "get",
    });
  },


}