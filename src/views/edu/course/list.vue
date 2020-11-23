<template slot-scope="scope">
  <div class="app-container">
      课程列表
       <!--查询表单-->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="courseQuery.name" placeholder="课程名称"/>
      </el-form-item>

      <el-form-item>
        <el-select v-model="courseQuery.status" clearable placeholder="课程状态">
          <el-option :value="Normal" label="已发布"/>
          <el-option :value="Draft" label="未发布"/>
        </el-select>
      </el-form-item>


      <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
      <el-button type="default" @click="resetData()">清空</el-button>
    </el-form>


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

      <el-table-column prop="title" label="课程名称" min-width="30%" />

      <el-table-column label="课程状态" min-width="10%">
        <template slot-scope="scope">
          {{ scope.row.status==='Normal'?'已发布':'未发布' }}
        </template>
      </el-table-column>


      <el-table-column prop="lessonNum" label="课时数" min-width="7%"/>
      <el-table-column prop="gmtCreate" label="添加时间" min-width="20%"/>
      <el-table-column prop="viewCount" label="浏览数量" min-width="10%" />

     <el-table-column label="操作" min-width="33%" align="center">
        <template slot-scope="scope">
          <router-link :to="'/teacher/edit/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">编辑课程信息</el-button>
          </router-link>
          <router-link :to="'/teacher/edit/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">编辑课程大纲</el-button>
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
import course from '@/api/edu/course'
export default {
    //核心代码位置
    // data:{

    // },
    data(){
        return{
            list:null,
            page:1,
            limit:8,
            total:0,//总记录数
            courseQuery:{},
        }
    },
    created(){//页面渲染之前执行
        this.getList();
    },
    methods:{//创建具体的方法

        //根据id删除课程
        removeDataById(id){
            this.$confirm('此操作将永久课程, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {  //点击确定，执行then方法
                //调用删除的方法
                course.deleteCourseById(id)
                    .then(response =>{//删除成功
                    //提示信息
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    //回到列表页面
                    this.getList()
                })
            }) //点击取消，执行catch方法
        },
        //讲师列表
        getList(page = 1){
            this.page = page;
            course.getCourseListPage(this.page,this.limit,this.courseQuery)
                .then(response =>{//请求成功
                    //response返回的数据
                    //console.log(response);
                    this.list = response.data.rows;
                    this.total = response.data.total;
                })
                .catch(error => {
                    console.log(error)
                })//请求失败
        },

        resetData(){
          //清空表单中数据
          this.courseQuery = {};
          //查询所有数据
          this.getList();
        },
 
    }



}
</script>