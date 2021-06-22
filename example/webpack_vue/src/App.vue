<!--
 * @Author: Aiden
 * @Date: 2021-06-11 14:18:54
 * @LastEditTime: 2021-06-22 14:54:52
 * @LastEditors: Aiden
 * @Description: 
 * @Email: aiden.dai@bayconnect.com.cn
-->
<template>
  <div>
    <header class="head">头部</header>
    <ccm-input></ccm-input>
    <el-button>按钮</el-button>
  </div>
</template>

<script>
import { mockGetUserinfo } from "@/api/user.js";
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    mockGetUserinfo().then((res) => {
      console.log("res===", res);
    });
  },
};
</script>

<style scoped>
</style>
