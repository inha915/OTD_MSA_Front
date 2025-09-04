<script setup></script>

<template>
  <header class="header">
    <div class="title">
      <img class="otd_logo" src="/public/image/ontoday_logo.png" alt="로고" />
      <img class="alram" src="/public/image/alarm.png" alt="알람" />
    </div>
    <div class="user">
      <div class="user_profile">
        <div class="avatar">😊</div>
        <div class="info">
          <span class="welcom_text">안녕하세요 :)</span>
          <span class="name">행키 님</span>
        </div>
      </div>
      <div class="point">😊5,000 p</div>
    </div>
  </header>
</template>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.otd_logo {
  width: 40%;  
}
.alram {
  align-self: center;
  width: 4%;

  /* position: absolute; */
  right: 20%;
}

.info {
  display: flex;
  flex-direction: column;
  font-size: 13px;
}

.header {
  background: #00d5df;
  color: #fff;
  padding: 20px;
  border-radius: 20px 20px 0 0;
 

  
}
.user_profile
{
  display: flex;
  flex-direction: row;
}
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  .name {
    font-size: 24px;
  }

}
.avatar {
  font-size: 32px;
}
</style>
