<template>
  <div class="TableView">
    <div class="title">
      <div class="title_font">
        <el-row style="margin-top: 20px">
          <el-col>
            <img
              class="yunling"
              src="https://img.js.design/assets/img/6242ad7767aa591c03cce0e1.jpg#76d68444a73f65fe9efe67904a8a1c00"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col class="title_text"> 云龄®AI系统训练记录 </el-col>
        </el-row>
        <el-row>
          <el-col style="color: #fff; font-size: 25px">
            Yunling AI System Training Record
          </el-col>
        </el-row>
      </div>
      <img
        src="https://img.js.design/assets/img/63228d850e0d177adb89a185.png#de78093b9866204df74ff65e81032bdd"
      />
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%" :cell-style="{'text-align':'center'}" :header-cell-style="{'text-align':'center','color':'#000'}">
        <el-table-column prop="date" label="训练时间"  width="180">
        </el-table-column>
        <el-table-column prop="type" label="bots类型" width="180">
        </el-table-column>
        <el-table-column prop="content" label="训练内容" width="280">
        </el-table-column>
        <el-table-column prop="trainer" label="训练者" width="180">
        </el-table-column>
        <el-table-column label="操作">
            <template #default="scope">
                <el-button type="primary" class="table_button" icon="el-icon-view" @click="search(scope.row,scope.$index)">查看训练材料</el-button>
                <el-button type="primary" class="table_button" v-if="scope.row.isDelete==false" icon="el-icon-delete" @click="deleteRow(scope.row,scope.$index)">删除训练记录</el-button>
                <el-button type="info" class="table_button" v-show="scope.row.isDelete==true" plain icon="el-icon-delete">已删除</el-button>
            </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          type:'客服',
          trainer: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
          isDelete:false
        },
        {
        date: "2016-05-02",
          type:'客服',
          trainer: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
          isDelete:false
        },
        {
          date: "2016-05-02",
          type:'客服',
          trainer: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
          isDelete:false
        },
        {
          date: "2016-05-02",
          type:'客服',
          trainer: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
          isDelete:false
        },
        {
          date: "2016-05-02",
          type:'客服',
          trainer: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
          isDelete:false
        },
        {
          date: "2016-05-02",
          type:'客服',
          trainer: "王小虎",
          content: "上海市普陀区金沙江路 1518 弄",
          isDelete:false
        },
      ],
    };
  },
  methods:{
    search(row,index)
    {
        console.log(row)
    },
    deleteRow(row,index)
    {
        this.tableData[index].isDelete=true
        console.log(row)
    }
  }
};
</script>

<style lang="scss" scoped>
.TableView {
  .title {
    height: 230px;
    background: linear-gradient(
      136.56deg,
      rgba(33, 97, 207, 1) 0%,
      rgba(8, 161, 221, 1) 100%
    );
    overflow: hidden;
    display: flex;
    .title_font {
      width: 65%;
      text-align: right;
      .title_text {
        font-size: 50px;
        color: #fff;
        font-weight: 700;
        letter-spacing: 4px;
      }
    }
    .yunling {
      width: 80px;
      height: 80px;
    }
  }
  .title img {
    height: 300px;
    width: 300px;
  }
  .table
  {
    width: 80%;
    text-align: center;
    border-radius: 10px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    margin: 10px 10%;
    .table_button
    {
        width: 130px;
        font-size:10px
    }
  }
}
</style>