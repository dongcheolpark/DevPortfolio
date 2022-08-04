<template>
  <v-container class="full-screen loginBox" fluid>
    <div class="login-form">
      <h1>
        Admin
      </h1>
      <form @submit="onLoginSubmit" method="post">
        <input type="text" name="id" class="text-field" placeholder="아이디" v-model="id">
        <input type="password" name="password" class="text-field" placeholder="비밀번호" v-model="pw">
        <input type="submit" value="로그인" class="submit-btn">
      </form>
      <div class="links">
        <a href="#">비밀번호를 잊어버리셨나요?</a>
      </div>
      <div v-bind:key="item.toString()" v-for="(item) in error">
        {{ item }}
      </div>
    </div>
  </v-container>
</template>
<style lang="sass" scoped>
$main-color : #1BBC9B
$background-color: #5CE0C6

*
  box-sizing: border-box
  font-family: 'Noto Sans KR', sans-serif
  border-radius: 5px

.full-screen
  width:100%
  height: 100vh
  background: $background-color
.loginBox
  display: flex
  justify-content: center
  align-items: center
  background-size: cover
  background-position: center
.login-form
    width: 300px
    background-color: #EEEFF1
    margin-right: auto
    margin-left: auto
    padding: 20px
    text-align: center
    border: none
.text-field
      font-size: 14px
      padding: 10px
      border: none
      width: 260px
      margin-bottom: 10px
.submit-btn
  font-size: 14px
  border: none
  padding: 10px
  width: 260px
  background-color: #1BBC9B
  margin-bottom: 30px
  color: white
.links
    text-align: center
.links a
  font-size: 12px
  color: #9B9B9B

input
  background-color: #fff

</style>
<script lang="ts">
import Vue, { defineComponent } from 'vue'
var islogin = false
export default defineComponent({
  name: 'Login',
  data: () => {
    return {
      id: '',
      pw: '',
      error: [] as String[],
      isLogin : islogin
    }
  },
  beforeCreate() {
    fetch('/api/admin/login', {
      method: 'get'
    }).then((res) => {
      if (!res.ok) {
        throw new Error('서버 에러');
      }
      return res.json();
    }).then((res) => {
      if (res.isLogin) {
        this.$router.push('/Admin');
      }
    });
  },
  methods: {
    onLoginSubmit(e: Event) {
      e.preventDefault();
      this.error = []
      var check = false;
      if (this.id == '') {
        this.error.push('아이디를 입력해 주세요.');
        check = true;
      }
      if (this.pw == '') {
        this.error.push('비밀번호를 입력해 주세요.');
        check = true;
      }
      if (check) {
        return false;
      }
      const body = {
        id: this.id,
        password: this.pw
      };
      fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }).then((res) => {
        if (!res.ok) {
          throw new Error('서버 에러');
        }
        return res.json();
      }).then((res) => {
        console.log(res.message);
        if (res.success || res.isLogin) {
          this.$router.push('/Admin');
        }
      }).catch((err) => {
        this.error.push(err);
      })

      return true;
    }
  }
})
</script>
