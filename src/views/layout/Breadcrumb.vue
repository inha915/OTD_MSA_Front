<script setup></script>

<template>
  <header class="header">
    <div class="title">
      <img class="otd_logo" src="/image/ontoday_logo.png" alt="로고" />
      <img class="alram" src="/image/alarm.png" alt="알람" />
    </div> 
  </header>
  <div class="user">
      <div class="user_profile">
        <img class="avatar" src="/image/test.png" alt="프로필"></img>
        <div class="info">
          <span class="welcome_text">안녕하세요 :)</span>
          <span class="name">행키 님</span>
        </div>
      </div>
      <div class="point">😊5,000 p</div>
    </div>
</template>

<style scoped>
.title {
  background: #00D5DF;
  margin-top: 24px;
  
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
  justify-content:end;
  font-size: 13px;
  row-gap: 15px;
}

.header {
  background: #00D5DF;
  color: #000;
  padding: 20px;
  border-radius: 20px 20px 0 0; 
  height: 104px;
}
.user_profile
{
  display: flex;
  flex-direction: row;
}
.user {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between; 

  .name {
    font-size: 24px;
  }
  .point{
   align-self:end;
  }

}
.avatar {
  font-size: 32px;
  width: 80px;
  height: 80px;
}
</style>
