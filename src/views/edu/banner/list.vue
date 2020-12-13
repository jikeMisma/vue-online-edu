<template slot-scope="scope">
  <div class="app-container">
      
    

     <!-- 表格 -->
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="数据加载中"
      border
      fit
      highlight-current-row>
      
      <el-table-column
        label="序号"
        min-width="10%"
        align="center">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column prop="title" label="图片标题" min-width="10%" />

      <el-table-column prop="imageUrl" label="图片地址" min-width="40%">
      
      </el-table-column>


      <!-- <el-table-column prop="intro" label="资历" min-width="25%"/> -->
      <el-table-column prop="gmtCreate" label="添加时间" min-width="20%"/>
      <el-table-column prop="sort" label="排序" min-width="10%" />

     <el-table-column label="操作" min-width="20%" align="center">
        <template slot-scope="scope">
          <router-link :to="'/banner/edit/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
          </router-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />

  </div>
</template>

<script>
//引入teacher.js
import banner from '@/api/edu/banner'
export default {
  
    data(){
        return{
            list:null,
            page:1,
            limit:4,
            total:0,//总记录数
            bannerQuery:{},
        }
    },
    created(){//页面渲染之前执行
        this.getList();
    },
    methods:{//创建具体的方法
        //讲师列表
        getList(page = 1){
          this.page = page;
            banner.getBannerListPage(this.page,this.limit)
                .then(response =>{//请求成功
                    //response返回的数据
                    //console.log(response);
                    this.list = response.data.items;
                    this.total = response.data.total;
                    console.log(this.list);
                    console.log(this.total);
                })
                .catch(error => {
                    console.log(error)
                })//请求失败
        },

        resetData(){
          //清空表单中数据
          this.bannerQuery = {};
          //查询所有数据
          this.getList();
        },

        //删除讲师的方法
        // removeDataById(id) {
        //     this.$confirm('此操作将永久删除讲师记录, 是否继续?', '提示', {
        //         confirmButtonText: '确定',
        //         cancelButtonText: '取消',
        //         type: 'warning'
        //     }).then(() => {  //点击确定，执行then方法
        //         //调用删除的方法
        //         teacher.deleteTeacherById(id)
        //             .then(response =>{//删除成功
        //             //提示信息
        //             this.$message({
        //                 type: 'success',
        //                 message: '删除成功!'
        //             });
        //             //回到列表页面
        //             this.getList()
        //         })
        //     }) //点击取消，执行catch方法
        // }
 
    }



}
</script>