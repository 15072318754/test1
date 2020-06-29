<template>
     <el-container class="container">
    <!-- 头部 -->
    <el-header>
      <div class="header_logo">
        <img src="../assets/logo.png" alt="" />
        <h3>买量产品进度监控</h3>
      </div>
      <div class="right_logout">
        <div class="l_title">
            <i>首页</i>
            <span>游戏类别</span>
        </div>
        <div class="r_title">
            <img src="../assets/退出.png" alt=""/>
            <span>退出</span>
        </div>
      </div>
    </el-header>
    <!-- 下方 -->
    <el-container class="container_box">
      <!-- 左侧 -->
       <el-aside width="248px">
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                background-color="#fff"
                text-color="#b0b0b0"
                active-text-color="#fff">
                <el-menu-item index="1">
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <span slot="title">产品测试</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <span slot="title">产品进度</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <span slot="title">数据跟踪</span>
                </el-menu-item>
            </el-menu>
       </el-aside>
      <!-- 右侧 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.element.style {
  background-color: red;
}
.container {
  height: 100%;
  background-color: #eee;
}
// 头部
.el-header {
  background-color: #fff;
  display: flex;
  padding-left: 0px;
  align-items: center;
  height: 90px!important;
  .header_logo {
    display: flex;
    justify-content: space-between;
    width: 248px;
    height: 100%;
    background-color: #ffcd22;
    font-size: 14px;
    justify-content: center;
    color: #fff;
    >img {
      margin-top: 20px;
      width: 60px;
      height: 60px;
    }
    h3 {
        margin-top: 40px;
    }
  }
  .right_logout {
    flex:1;
    display: flex;
    justify-content: space-between;
    height: 134px;
    line-height: 134px;
    padding-right: 40px;
    color: #8a8a8a;
    .l_title {
      padding-left: 28px;
      font-size: 22px;
      i {
        font-style: normal;
        color: #ffbd4f;
      }
      span {
        font-size: 14px;
        margin-left: 5px;
      }
    }
    .r_logout {
      color: #979797;
      >img {
       width: 20px;
      }
    }
  }
}
// 下方
.container_box {
  margin-top: 18px;
  background-color: #eee;
  height: 800px;
  .el-aside {
    background-color: #fff;
    height: 100%;
    .el-menu-item {
      height: 70px;
      line-height: 70px;
      font-size: 22px;
    }
    .is-active {
        background-color: #ffad01!important;
    }
  }
  .el-main {
     background-color: #eee;
     height: 100%;
  }
}
</style>
