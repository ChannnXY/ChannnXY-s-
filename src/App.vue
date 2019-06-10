<template>
  <div id="app">
    <nav class="nav-outer" v-if="currentTab!==0">
      <ul>
        <li :class="currentTab===0||currentHover===0?'checked':''"
            @click="navClick(0)"
            @mouseenter="navHover(0)"
            @mouseleave="navHover(-1)">首页</li>
        <li :class="currentTab===1||currentHover===1?'checked':''"
            @click="navClick(1)"
            @mouseenter="navHover(1)"
            @mouseleave="navHover(-1)">简历</li>
        <li :class="currentTab===2||currentHover===2?'checked':''"
            @click="navClick(2)"
            @mouseenter="navHover(2)"
            @mouseleave="navHover(-1)">项目</li>
        <li :class="currentTab===3||currentHover===3?'checked':''"
            @click="navClick(3)"
            @mouseenter="navHover(3)"
            @mouseleave="navHover(-1)">竞赛</li>
        <li :class="currentTab===4||currentHover===4?'checked':''"
            @click="navClick(4)"
            @mouseenter="navHover(4)"
            @mouseleave="navHover(-1)">设计</li>
      </ul>
      <!--导航栏-->
      <div class="input-outer">
        <div class="input-inline">
          <input :class="showInputFlag?
                 'input-animate-after':
                 'input-animate-before'"/>
        </div>
        <img class="input-inline-img"
             src="/static/img/navBar-search.png"
             @click="showInput()"/>
      </div>
      <!--搜索栏-->
      <div class="contact-outer">
        <img class="contact-img"
             @click="showMask()"
          src="/static/img/navBar-contact.png"/>
      </div>
    </nav>
    <!--导航-->
    <div class="link-outer" :class="showMaskFlag?'link-outer-before':'link-outer-after'">
      <div id="line-scroll" style="height: 60%;overflow-y: scroll">
        <div v-for="item in contactList" :key="item.index">
          <div  class="link-inline">
            <div class="link-name">{{item.userName}}</div>
            <div class="link-content">{{item.content}}</div>
            <div class="link-time">{{item.date}}</div>
          </div>
          <hr align="center" width="98%"/>
        </div>
      </div>
    </div>
    <!--回复部分-->
    <div :class="showMaskFlag?'link-mask-before':'link-mask-after'"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      currentTab: 1,
      // 0首页，1简历，2项目，3竞赛，4设计
      currentHover: -1,
      // 鼠标悬停效果
      showInputFlag: false,
      // 是否显示输入框
      showMaskFlag: false,
      // 是否显示遮罩层等等
      contactList: [{userName: 'Channnxy', date: '2019/06/10', content: '111'},
        {userName: 'Channnxy', date: '2019/06/10', content: '111'},
        {userName: 'Channnxy', date: '2019/06/10', content: '111'},
        {userName: 'Channnxy', date: '2019/06/10', content: '111'},
        {userName: 'Channnxy', date: '2019/06/10', content: '111'},
        {userName: 'Channnxy', date: '2019/06/10', content: '111'},
        {userName: 'Channnxy', date: '2019/06/10', content: '111'}
      ]
    }
  },
  methods: {
    navClick: function (e) {
      this.currentTab = e
    },
    navHover: function (e) {
      this.currentHover = e
    },
    showInput: function () {
      this.showInputFlag = !this.showInputFlag
    },
    showMask: function () {
      this.showMaskFlag = !this.showMaskFlag
    }
  }
}
</script>

<style scoped>
  input,textarea,select,a:focus{
    outline: none;
  }
  hr{
    background-color: #c9c9c9;
    margin: 0;
    align-items: center;
    border: none;
    height: 1px;
  }
  #app{
    height: 100%;
  }
  .nav-outer{
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.68rem;
    background-color: #ffffff;
    display: flex;
  }
  .nav-outer ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    margin: 0;
  }
  .nav-outer li{
    list-style: none;
    font-size: 0.24rem;
    color: #707070;
  }
  .checked{
    font-size: 0.28rem!important;
    font-weight: bold;
  }
  .input-outer{
    width: 20%;
    padding: 0.12rem 1.2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .input-inline{
    justify-content: flex-end;
    display: flex;
    height: 100%;
  }
  .input-animate-before{
    background-color: rgba(00,00,00,0);
    padding: 0 0.2rem;
    font-size: 0.24rem;
    color: #707070;
    height: 0.46rem;
    border: none;
    border-radius: 24px;
    animation: input-animate-before 1s;
    animation-timing-function: ease-in;
    width: 0;
  }
  @-webkit-keyframes input-animate-before {
    0%{width: 100%;border: 1px solid #c4c4c4;}
    90%{width: 0;border: 1px solid #c4c4c4;}
    100%{width: 0;border: none;}
  }
  .input-animate-after{
    background-color: rgba(00,00,00,0);
    padding: 0 0.2rem;
    font-size: 0.24rem;
    color: #707070;
    height: 0.46rem;
    border: 1px solid #c4c4c4;
    border-radius: 24px;
    animation: input-animate-after 1s;
  }
  @-webkit-keyframes input-animate-after {
    from{width: 0;}
    to{width: 100%;}
  }
  /**/
  /*输入框长度回溯动画效果*/
  /**/
  .input-inline-img{
    width: 0.34rem;
    height: 0.34rem;
    margin-right: 0.1rem;
    position: absolute;
    transform: translateX(-0.1rem);
  }
  .contact-outer{
    display: flex;
    flex: 1;
    justify-content: center;
  }
  .contact-img{
    height: 0.68rem;
  }
  .link-mask-before{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 888;
    background-color: rgba(00,00,00,0.5);
    animation: mask-animation-before 2s;
  }
  @-webkit-keyframes mask-animation-before {
    from{background-color: rgba(00,00,00,0.0);}
    to{background-color: rgba(00,00,00,0.5);}
  }
  .link-mask-after{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 888;
    background-color: rgba(00,00,00,0.0);
    animation: mask-animation-after 2s;
  }
  @-webkit-keyframes mask-animation-after {
    from{background-color: rgba(00,00,00,0.5);}
    to{background-color: rgba(00,00,00,0.0);}
  }
  /**/
  /*遮罩层动画*/
  /**/
  .link-outer-before{
    z-index: 999;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    position: absolute;
    top: 0.68rem;
    right: 0;
    width: 5rem;
    height: 100%;
    animation: animate-link-before 2s;
  }
  @-webkit-keyframes animate-link-before {
    from{right: -5rem;}
    to{right: 0;}
  }
  .link-outer-after{
    z-index: 999;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    position: absolute;
    top: 0.68rem;
    right: -5rem;
    width: 5rem;
    height: 100%;
    animation: animate-link-after 2s;
  }
  @-webkit-keyframes animate-link-after {
    from{right: 0;}
    to{right: -5rem;}
  }
  .link-inline{
    padding: 0.1rem 0.2rem;
  }
  #line-scroll::-webkit-scrollbar {
    display: none;
  }
  .link-name{
    color: #4B8DFD;
    font-size: 0.24rem;
    line-height: 180%;
  }
  .link-content{
    color: #5e5e5e;
    font-size: 0.24rem;
    line-height: 180%;
  }
  .link-time{
    color: #c4c4c4;
    font-size: 0.18rem;
    text-align: right;
    line-height: 180%;
  }
</style>
