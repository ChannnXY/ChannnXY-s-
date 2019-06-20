<template>
  <div id="app" style="overflow-x: hidden;">
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
          <input class="input-inline-animate"/>
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
    <div :class="showMaskFlag?'link-outer-before':'link-outer-after'">
      <div id="line-scroll" style="height: 60%;overflow-y: scroll;flex: 1">
        <div v-for="item in contactList" :key="item.index">
          <div  class="link-inline">
            <div class="link-name">{{item.userName}}</div>
            <div class="link-content">{{item.content}}</div>
            <div class="link-time">{{item.date}}</div>
          </div>
          <hr align="center" width="100%"/>
        </div>
      </div>
      <form class="link-input-outer">
        <div class="link-input-outer-area">
          <div class="link-input-inline-area">
            <textarea
              :onchange="textInput(0)"
              placeholder="如果要联系我或者交流,欢迎留言！"
              maxlength="200"
              v-model="contactMe.content"></textarea>
            <span>{{textSize.areaSize}}/200</span>
          </div>
        </div>
        <div class="link-input-outer-input">
          <div class="link-input-inline-input">
            <input
              placeholder="请输入姓名"
              maxlength="10"
              :onchange="textInput(1)"
              v-model="contactMe.name"
            />
            <span>{{textSize.inputSize}}/10</span>
          </div>
          <button>提交</button>
        </div>
      </form>
      <div class="link-contact-outer">
        <span>gitHub:channnxy</span>
        <span>E-mail:channnxy@163.com</span>
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
      height: {maskHeight: document.documentElement.clientHeight, linkHeight: 0},
      // 自适应所需各种高度
      textSize: {inputSize: 0, areaSize: 0},
      // 字符数
      contactMe: {name: '', content: ''},
      // 联系我表单
      contactList: [{userName: 'Channnxy', date: '2019/06/10', content: 'helloWord'},
        {userName: 'Channnxy', date: '2019/06/10', content: 'helloWord'},
        {userName: 'Channnxy', date: '2019/06/10', content: 'helloWord'},
        {userName: 'Channnxy', date: '2019/06/10', content: 'helloWord'},
        {userName: 'Channnxy', date: '2019/06/10', content: 'helloWord'},
        {userName: 'Channnxy', date: '2019/06/10', content: 'helloWord'},
        {userName: 'Channnxy', date: '2019/06/10', content: 'helloWord'}
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
    showMask: function () {
      this.showMaskFlag = !this.showMaskFlag
    },
    textInput: function (e) {
      if (e === 0) {
        if (this.contactMe.content.length < 200) {
          this.textSize.areaSize = this.contactMe.content.length
        } else {
          this.textSize.areaSize = 200
        }
      } else {
        if (this.contactMe.name.length < 200) {
          this.textSize.inputSize = this.contactMe.name.length
        } else {
          this.textSize.inputSize = 10
        }
      }
    }
  }
}
$("span.msg-data").bind("click",function(event) {
  $(this).css('animation', 'switchColor 0.8s');
});
$("span.msg-data").each(function() {
  $(this)[0].addEventListener("animationend",function(){
    $(this).css("animation","");
  });
});
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
  body{
    overflow-x: hidden;
  }
  #app{
    height: 100%;
  }
  .nav-outer{
    z-index: 1000;
    box-shadow: 0 0 2px #c6c6c6;
    position: fixed;
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
    animation: input-animate-before 1s forwards;
    animation-timing-function: ease-in;
    width: 0;
  }
  @-webkit-keyframes input-animate-before {
    0%{width: 100%;border: 1px solid #c4c4c4;}
    90%{width: 0;border: 1px solid #c4c4c4;}
    100%{width: 0;border: none;}
  }
  .input-inline-animate{
    background-color: rgba(00,00,00,0);
    padding: 0 0.2rem;
    font-size: 0.24rem;
    color: #707070;
    height: 0.46rem;
    border: 1px solid #c4c4c4;
    border-radius: 24px;
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter:alpha(opacity=50);
    z-index: 888;
    background-color: rgba(00,00,00,0.5);
    animation: mask-animation-before 2s forwards;
  }
  @-webkit-keyframes mask-animation-before {
    from{background-color: rgba(00,00,00,0.0);}
    to{background-color: rgba(00,00,00,0.5);}
  }
  .link-mask-after{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    filter:alpha(opacity=50);
    z-index: 0;
    background-color: rgba(00,00,00,0.0);
    animation: mask-animation-after 2s forwards;
  }
  @-webkit-keyframes mask-animation-after {
    from{background-color: rgba(00,00,00,0.5);z-index: 888;}
    to{background-color: rgba(00,00,00,0.0);z-index: 0}
  }
  /**/
  /*遮罩层动画*/
  /**/
  .link-outer-before{
    z-index: 999;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    position: fixed;
    top: 0.68rem;
    right: 0;
    bottom: 0;
    width: 5rem;
    animation: animate-link-before 2s forwards;
  }
  @-webkit-keyframes animate-link-before {
    from{right: -5rem}
    to{right: 0}
  }
  .link-outer-after{
    z-index: 999;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    position: fixed;
    top: 0.68rem;
    bottom: 0;
    right: -5rem;
    width: 5rem;
    animation: animate-link-after 2s forwards;
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
  .link-input-outer{
    display: flex;
    flex-direction: column;
  }
  .link-input-outer-area{
    width: 100%;
  }
  .link-input-inline-area{
    display: flex;
    flex-direction: column;
    border: 1px solid #c6c6c6;
    margin: 0.1rem 0.2rem;
    border-radius: 0.12rem;
  }
  .link-input-inline-area textarea{
    border-radius: 0.12rem;
    border: none;
    padding: 0.1rem;
    font-size: 0.18rem;
    height: 0.88rem;
    line-height: 180%;
    -webkit-box-flex: 1;
  }
  .link-input-inline-area span{
    font-size: 0.14rem;
    line-height: 180%;
    color: #c9c9c9;
    text-align: right;
    margin: 0.06rem;
  }
  .link-input-outer-input{
    display: flex;
    border: 1px solid #4B8DFB;
    border-radius: 0.12rem;
    margin: 0.1rem 0.2rem;
    font-size: 0.18rem;
    line-height: 180%;
    justify-content: space-between;
  }
  .link-input-inline-input{
    display: flex;
    justify-content: space-between;
    border-radius: 0.12rem;
    align-items: center;
    width: 80%;
  }
  .link-input-inline-input input{
    font-size: 0.18rem;
    line-height: 180%;
    background-color: rgba(00,00,00,0);
    color: #5e5e5e;
    padding: 0.1rem;
    border-radius: 0.24rem;
    border: none;
    flex: 1;
  }
  .link-input-inline-input span{
    font-size: 0.14rem;
    color: #c6c6c6;
    margin-right: 0.1rem;
  }
  .link-input-outer-input button{
    font-size: 0.18rem;
    color: #fff;
    background-color: #4B8DFB;
    border: none;
    flex: 1;
    width: 80%;
    border-radius: 0 0.12rem 0.12rem 0;
  }
  .link-contact-outer{
    display: flex;
    flex-direction: column;
    font-size: 0.18rem;
    color: #c6c6c6;
    text-align: right;
    margin: 0.2rem;
    line-height: 180%;
  }
</style>
