<template>
	<v-container class="full-screen loginBox" fluid>
		<div class="login-form">
			<h1>
				Admin
			</h1>
			<form>
				<input type="text" name="email" class="text-field" placeholder="아이디">
				<input type="password" name="password" class="text-field" placeholder="비밀번호">
				<input type="submit" value="로그인" class="submit-btn">
			</form>

			<div class="links">
				<a href="#">비밀번호를 잊어버리셨나요?</a>
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
export default defineComponent({
	name: 'Login',
})
</script>