<template>
  <div>
    <div id="index-large">
      <div>
        <div class="name-top">
          ChannnXY
        </div>
        <div class="name-bottom">
          ChannnXY
        </div>
      </div>
      <div class="img-outer">
        <img src="/static/img/index_img.png"/>
      </div>
      <nav class="nav-outer">
        <div class="nav-inline" v-for="item in navList" :key="item.index" @click="nav(item.url)">
          <span style="font-size: 0.36rem;">{{item.title}}</span>
          <span style="font-size: 0.24rem;">{{item.en}}</span>
        </div>
      </nav>
    </div>
    <!--网页端首页-->
  </div>
</template>

<script>
import tabData from '../../static/js/tabData.js'
export default {
  name: 'index',
  data () {
    return {
      navList: [
        {title: '个人简历', en: 'Personal Resume', url: '/resume'},
        {title: '项目经验', en: 'Project Experience', url: '/project'},
        {title: '竞赛作品', en: 'Competition works', url: '/competition'},
        {title: '设计作品', en: 'Design Works', url: '/design'}]
    }
  },
  methods: {
    nav: function (e) {
      this.$router.push(e)
      if (e === '/resume') {
        tabData.$emit('currentTab', 1)
      } else if (e === '/project') {
        tabData.$emit('currentTab', 2)
      } else if (e === '/competition') {
        tabData.$emit('currentTab', 3)
      } else if (e === '/design') {
        tabData.$emit('currentTab', 4)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #index-large img {
    height: 100%;
    width:100%;
  }
  .img-outer{
    position: fixed;
    right: 5%;
    bottom: 5%;
    width: 70%;
    height: 80%;
    z-index: 1;
  }
  .nav-outer{
    position: fixed;
    left: 15%;
    top: 15%;
    z-index: 2;
  }
  .nav-inline{
    width: 2.8rem;
    height: 0.77rem;
    color: #5e5e5e;
    text-align: right;
    display: flex;
    flex-direction: column;
    margin: 0.95rem 0;
    background-color: rgba(256,256,256,0.56);
    border-bottom: 3px solid #818284;
    border-left: 3px solid #818284;
  }
  #index-large span{
    transform: translateY(-0.3rem);
    margin-right: 0.15rem;
    line-height: 160%;
  }
  .name-top{
    font-size: 2.14rem;
    color: rgba(00,00,00,0.34);
    z-index: 3;
    position: fixed;
    top: 0;
    right: 5%;
  }
  .name-bottom{
    font-size: 1.96rem;
    color: rgba(00,00,00,0.06);
    z-index: 0;
    position: fixed;
    top: 0;
    right: 7%;
  }

</style>
