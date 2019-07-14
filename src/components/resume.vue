<template>
  <div style="padding-top: 0.5rem;overflow-x: hidden;">
    <div class="resume-outer">
      <div>
        <div class="resume-title">{{resume.title}}</div>
        <div class="resume-enTitle">
          <img src="/static/img/resume-cube.png" height="20" style="margin-right: 0.1rem"/>
          <span class="resume-content">{{resume.enTitle}}</span>
        </div>
      </div>
      <!--标题-->
      <div :key="item.index" v-for="item in resume.content" class="resume-content">{{item}}</div>
    </div>
    <!--基本信息-->
    <div class="skills-outer-background">
      <div class="skills-title-outer">
        <div class="skills-title-title">{{Skills.title}}</div>
        <div class="skills-title-inline">
          <span class="skills-title-content">{{Skills.enTitle}}</span>
          <img src="/static/img/resume-cube.png" height="20" style="margin-left: 0.1rem"/>
        </div>
      </div>
      <!--标题-->
      <ul @click="skillsPlay()" @mouseenter="skillsPlay_mouseenter()" @mouseleave="skillsPlay_mouseleave()">
        <li :class="showSkillsFlag?'skills-opacity-none':'skills-opacity-full'">
          <div class="skills-swiper-outer">
            <div :key="item.index" v-for="item in Skills.content[0].content" class="skills-title-content">{{item}}</div>
          </div>
          <div class="skills-swiper-title-1">{{Skills.content[0].title}}</div>
          <div class="skills-swiper-title-2">····</div>
          <div class="skills-swiper-title-3">点击查看前端方向内容</div>
        </li>
        <li :class="!showSkillsFlag?'skills-opacity-none':'skills-opacity-full'">
          <div class="skills-swiper-outer">
            <div :key="item.index" v-for="item in Skills.content[1].content" class="skills-title-content">{{item}}</div>
          </div>
          <div class="skills-swiper-title-1">{{Skills.content[1].title}}</div>
          <div class="skills-swiper-title-2">····</div>
          <div class="skills-swiper-title-3">点击查看UI方向内容</div>
        </li>
      </ul>
      <!--滑动内容-->
    </div>
    <!--专业技能-->
    <div class="project-outer" style="margin-top: 3.5rem">
      <div>
        <div>
          <div class="resume-title">{{project.title}}</div>
          <div class="resume-enTitle">
            <img src="/static/img/resume-cube.png" height="20" style="margin-right: 0.1rem"/>
            <span class="resume-content">{{project.enTitle}}</span>
          </div>
        </div>
        <!--标题-->
        <div>
          <div :key="item.index" v-for="item in project.content" class="resume-content">{{item}}</div>
          <button @click="nav('/project')">了解更多</button>
        </div>
        <!--文字-->
      </div>
      <img src="http://temp.im/300x300/fff"/>
    </div>
    <!--项目经验-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      showSkillsFlag: false,
      playSkillsFlag: true,
      resume: {
        title: '基本信息',
        enTitle: 'Personal Resume',
        content: [
          '姓名：陈心远',
          '性别：女',
          '居住地：杭州',
          '绩点：3.61（专业排名3/72）',
          '就读院校：浙江科技学院 数字媒体技术2017级',
          '荣誉奖项：',
          '优秀学生学生二等奖学金一项',
          '第十届蓝桥杯海报大赛浙江省二等奖',
          '参与挑战杯大学生学术科技作品竞赛，成果以20%的股份技术入股浙江声临其近文化传播有限公司',
          '浙江省大学生多媒体设计大赛 海报组二等奖一项，三等奖一项',
          '国家大学生创新创业项目立项并结题一项',
          '浙江科技学院职业生涯规划大赛一等奖',
          '杭州市超新星辩论邀请赛季军',
          '浙江科技学院十佳团支部书记、优秀干部、优秀团员、三好学生等荣誉若干']
      },
      Skills: {
        title: '专业技能',
        enTitle: 'Professional Skills',
        content: [
          {title: 'UI设计方向',
            content: [
              '1、精通Photoshop、illustrator等图形设计软件，能独立完成图标等元素的设计。',
              '2、具备Premier、After Effect等多媒体编辑工具，能独立编辑处理音视频素材。',
              '3、精通原型设计软件如Axure、Adobe XD、墨刀等的使用，熟记安卓与ios设计规范。',
              '4、善于总结，对流行元素有较高的认知及把我能力，同时善于创新，善于将流行元素与实际需求结合设计。',
              '5、具备较多移动界面设计经验，独立完成已上线微信小程序辩论Online的设计与开发。',
              '6、精通HTML、CSS的布局规则，有较多HTML+CSS+JavaScript开发经验，了解mySQL数据库基本知识，有较强数据传输意识。']},
          {title: '前端开发方向',
            content: [
              '1、熟练运用HTML+CSS+JavaScript开发模式，具有跨平台开发、Web开发及微信小程序实际开发经验',
              '2、熟悉Bootstrap、jQuery、MUI、layUI等前端框架，并有实际开发经验',
              '3、熟悉C++、node.js等脚本语言，有node.js开发经验',
              '4、熟悉mySQL数据库相关知识，了解AJAX数据请求',
              '5、有方法封装经验，封装过分页及AJAX请求等方法',
              '6、熟练使用GitHub进行代码上传，熟练运用分支操作']
          }
        ]
      },
      project: {
        title: '项目经验',
        enTitle: 'Project Express',
        content: [
          '项目名称：辩论Online（小程序）',
          '项目简介：辩论Online是一款针对于辩手的交流论坛，其中包括辩论赛事报名系统、团队管理系统、文章管理系统、投票系统等等。',
          '项目成果：以20%的股份入股浙江声临其近文化传播公司。',
          '责任工作：功能设计 UI及交互设计 前端功能开发'
        ]
      },
      competition: {
        title: '竞赛作品',
        enTitle: 'Competition Works',
        content: [
          '国家大学生创新创业项目立项并结题',
          '《PBL理论指导下的乡村振兴战略研究——以安吉余村生态旅游国际化为例》',
          '浙江省大学生多媒体设计大赛 海报组二等奖一项、三等奖一项',
          '第十届“蓝桥杯”大赛设计赛 海报组 浙江省二等奖...（等十余项）'
        ]
      },
      design: {
        title: '设计作品',
        enTitle: 'Competition Works',
        content: [
          {title: '辩论Online', introduction: '网络辩论赛事比赛及交流平台的设计与开发，包括论坛系统、文章管理系统、辩论赛事报名系统、团队成员管理系统等等系统的UI设计与前端开发。'},
          {title: '唯度Wedo', introduction: '专家企业需求匹配平台的设计与开发，包括积分系统、专家企业身份认证系统、需求发布及匹配系统、需求进度管理系统、消息系统等功能的UI设计及前端开发。。'},
          {title: '轻旅Easy tour', introduction: '基于余村乡村振兴调研的乡村旅游平台的设计，包括图文发布及管理系统、商店开设及预订系统、推荐路线导航系统等系统的UI设计。'},
          {title: '霓裳', introduction: '为汉服复兴设计的小游戏，包括图文发布及管理系统、商店开设及预订系、推荐路线导航系统等系统的UI设计。'},
          {title: '易校车', introduction: '针对浙江科技学院的校车管理系统，包括论师生身份管理、班次查询、校车购票等功能的UI设计与前端开发。'}
        ]
      },
      // 设计作品
      other: {
        title: '其他经验',
        enTitle: 'Others',
        content: ['千库网签约原创设计师',
          '浙江科技学院安吉校区学生会宣传部部长，制作海报及门票等各类物资十余款，开创部门“月练”等训练制度并取得较高成效。',
          '浙江科技学院校辩论队成员，具有较强的逻辑思维能力及语言表达能力。',
          '获杭州市超新星辩论邀请赛季军，新思雅辩辩论赛冠军，诚信辩论赛冠军，全国大学生杭城辩论邀请赛16强，并承接设计第一届KOD辩皇争霸赛、第六届全国大学生杭城辩论邀请赛等各项物资。',
          '“浙科学声”公众号运维（隶属浙江科技学院学工部），编辑排版推文十余篇。'
        ]
      }
    }
  },
  methods: {
    /*
    skill栏播放
    */
    skillsPlay () {
      this.showSkillsFlag = !this.showSkillsFlag
    },
    skillsPlay_mouseenter () {
      if (this.timer) {
        clearInterval(this.timer)
      }
    },
    skillsPlay_mouseleave () {
      if (this.timer) {
        this.timer = setInterval(this.skillsPlay, 3000)
      }
    },
    /*
    路由
    */
    nav (url) {
      this.$router.push(url)
    }
  },
  mounted () {
    this.timer = setInterval(this.skillsPlay, 3000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped>
  body{
    overflow-x: hidden;
  }
  ul,li{ padding:0;margin:0;list-style:none}
  .resume-outer{
    display: flex;
    flex-direction: column;
    padding: 1rem 4rem;
  }
  .resume-title{
    color: black;
    line-height: 180%;
    font-size: 0.28rem;
  }
  .resume-enTitle{
    display: flex;
    align-items: center;
  }
  .resume-content{
    align-items: center;
    line-height: 240%;
    color: #707070;
    font-size: 0.18rem;
    z-index: 888;
  }
  .skills-outer-background{
    position: absolute;
    display: flex;
    background-color: #f3f3f3;
    flex-direction: column;
    z-index: 0;
    width: 100%;
    padding: 0.1rem 0;
  }
  .skills-opacity-none{
    width: 100%;
    background-color: #f3f3f3;
    position: absolute;
    opacity: 0.0;
    transition: all 2s;
  }
  .skills-opacity-full{
    width: 100%;
    position: absolute;
    background-color: #f3f3f3;
    opacity: 1.0;
    transition: all 2s;
  }
  .skills-title-title{
    font-size: 0.28rem;
    color: black;
    line-height: 180%;
    text-align: right;
    margin-right: 4rem;
  }
  .skills-title-inline{
    margin-right: 4rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .skills-title-content{
    align-items: center;
    line-height: 240%;
    color: #707070;
    font-size: 0.18rem;
    z-index: 998;
  }
  .skills-swiper-outer{
    padding: 0 4rem;
    z-index: 888;
    width: 100%;
    margin-bottom: 0.4rem;
  }
  .skills-swiper-title-1{
    position: absolute;
    bottom: 0;
    font-size: 2rem;
    color: rgba(00,00,00,0.06);
    z-index: 555;
  }
  .skills-swiper-title-2{
    position: absolute;
    bottom: 1rem;
    font-size: 1rem;
    right: 1rem;
    color: rgba(00,00,00,0.06);
  }
  .skills-swiper-title-3{
    position: absolute;
    bottom: 0.7rem;
    font-size: 0.18rem;
    right: 1rem;
    color: rgba(00,00,00,0.1);
  }
  .project-btn-outer{
    display: flex;
  }
  button{
    font-size: 0.18rem;
    border-radius: 0.3rem;
    border: 1px solid #707070;
    background-color: #f8f8f8;
    padding: 0.1rem;
    color: #707070;
  }
  .project-outer{
    display: flex;
    justify-content: space-between;
    margin-top: 3.5rem;
    padding: 1rem 4rem;
  }
</style>
