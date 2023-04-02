<template>
  <div class="loginview">
    <div class="loginBg">
      <div class="loginWindow">
        <div class="view">
            <el-row style="height:100px;margin: 10px 0px;">
                <el-col>
                    <img src="https://img.js.design/assets/img/6242ad7767aa591c03cce0e1.jpg#76d68444a73f65fe9efe67904a8a1c00"/>
                </el-col>
            </el-row>
            <el-row class="title_font">
                <div class="font_1">
                    云龄
                </div>
                <div class="font_2">
                    ®
                </div>
                <div class="font_3">
                    AI后台
                </div>
            </el-row>
            <el-form :model="ruleForm" status-icon :rules="loginRules" ref="ruleForm" style="padding-left: 4%;">
                <div style="margin-bottom: 10px;font-size: 20px;">
                    账号
                </div>
                <el-form-item prop="username"  style="width: 90%;margin-bottom: 25px;">
                    <el-input
                        v-model="ruleForm.username"
                        placeholder="请输入用户名"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <div style="margin-bottom: 10px;font-size: 20px;">
                    密码
                </div>
                <el-form-item prop="password" style="width: 90%;">
                    <el-input
                        type="password"
                        v-model="ruleForm.password"
                        placeholder="请输入密码"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-button type="primary" class="loginBt" size="large" @click="login()"
                    >登录</el-button
                >
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空'));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ validator: validatePass, trigger: 'blur' }],
        password: [{ validator: validatePass2, trigger: 'blur' }]
      },
      isCheck: false
    };
  },
  methods: {
    login () {
      if (this.ruleForm.username === 'admin' && this.ruleForm.password === '123456')
      {
        console.log('我点击了')
        this.$router.push({
            path:'/TableView',
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.loginview {
  width: 100vw;
  height: 100vh;
    ::v-deep .el-input__inner
    {
        height: 50px !important;
        font-size: 17px;
    }
  .loginBg {
    width: 100%;
    height: 100%;
    background: url(https://img.js.design/assets/img/64240053e8745177e5c7f63a.jpg#990591fb3687e4ae4d7ec3785e032f86);
    display: flex;
    align-items: center;
    background-size: 100% 100%;
    .loginWindow {
      position: absolute;
      width: 400px;
      height: 500px;
      left: 10%;
      background: #fff;
      box-shadow: 0 2px 6px 0 rgb(0 0 0 / 10%);
      border-radius: 20px;
      .view
      {
        padding-left:10%;
        text-align: left;
        .title_font
        {
            line-height: 0;
            padding-left: 4%;
            display: flex;
            height: 45px;
            opacity: 1;
            .font_1
            {
                /** 文本1 */
                width: 100px;
                font-size: 45px;
                font-weight: 700;
                letter-spacing: 4px;
                color: rgba(8, 161, 221, 1);
            }
            .font_2
            {
                /** 文本2 */
                width: 30px;
                // padding-top: 10px;
                margin-top: -10px;
                font-size: 40px;
                font-weight: 400;
                letter-spacing: 4px;
                color: rgba(8, 161, 221, 1);
            }
            .font_3
            {
                /** 文本3 */
                font-size: 45px;
                font-weight: 700;
                letter-spacing: 4px;
                color: rgba(8, 161, 221, 1);
                text-align: left;
                vertical-align: top;
            }
        }
        .loginBt
        {
            width: 200px;
            height: 55px;
            font-size: 20px;
            margin: 25px 50px 50px 50px;
        }
      }

      .view img
      {
        text-align: left;
        width: 100px;
        height:100px;
      }
    }
  }
}
</style>
