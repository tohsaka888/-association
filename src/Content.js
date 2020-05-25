import React from 'react';
import './App.css';
import {Card, Carousel, Layout, Tabs} from 'antd';
import p1 from './sucai/home/1.png'
import p2 from './sucai/home/2.png'
import p3 from './sucai/home/3.png'
import p4 from './sucai/home/4.png'
import p5 from './sucai/home/5.png'
import p6 from './sucai/home/6.jpg'

function Content(props) {

    const {Content} = Layout;
    const {TabPane} = Tabs;

    return (
        <Content style={{margin: "3px", marginLeft: props.left}}>
            <Carousel autoplay>
                <div>
                    <img src={p1} alt='p1' style={{height: "426px", width: "100%"}}/>
                </div>
                <div>
                    <img src={p2} alt='p2' style={{height: "426px", width: "100%"}}/>
                </div>
                <div>
                    <img src={p3} alt='p3' style={{height: "426px", width: "100%"}}/>
                </div>
                <div>
                    <img src={p4} alt='p4' style={{height: "426px", width: "100%"}}/>
                </div>
                <div>
                    <img src={p5} alt='p5' style={{height: "426px", width: "100%"}}/>
                </div>
                <div>
                    <img src={p6} alt='p6' style={{height: "426px", width: "100%"}}/>
                </div>
            </Carousel>
            <div style={{marginTop: "15px"}}>
                <Card bordered={false} title="程序员之家介绍" style={{textAlign: "center", marginTop: "15px"}}
                      headStyle={{fontSize: "24px", fontWeight: "900", textShadow: "2px 2px 2px yellow"}}>
                    <p style={{
                        fontSize: "18px",
                        textAlign: "left",
                        fontWeight:"900"
                    }}>程序员之家是由社团联盟主管，位于计算机信息工程学院的程序员爱好者的家园。各社团成员在严格遵守学校守则以及学习团委精神的基础上，为社团建设做出了不懈的努力。</p>
                    <p style={{
                        fontSize: "18px",
                        textAlign: "left",
                        fontWeight:"900"
                    }}>计算机工程学院为了本社团的建设，特地任命教学经验丰富，热心为学生排疑解惑的蒋巍老师作为本社团的指导老师。社团各个成员也积极响应团委的号召，学习团委的精神，为社团的不断发展提供了不竭动力。在社团的各项建设中，社团中心也为我们提供了大量的意见和建议，使社团可以不断修正自身错误，在错误中进步，在曲折中发展。</p>
                    <p style={{
                        fontSize: "18px",
                        textAlign: "left",
                        fontWeight:"900"
                    }}>目前社团有组织部，宣传部以及技术部三个部门。组织部负责管理社团经费，组织社团活动；宣传部负责将社团的各项活动对外公布；技术部负责解答社员在编程或是其他有关计算机领域的技术问题。明确的分工，给社团的发展提供了源源不断的动力。</p>
                    <p style={{
                        fontSize: "18px",
                        textAlign: "left",
                        fontWeight:"900"
                    }}>程序员之家是一个侧重计算机领域的社团组织，聚集了许多对计算机知识感兴趣的同学，为爱好计算机领域的学生提供了一个学习交流切磋的平台。同时，本社团还为省级的比赛贡献了许多优秀的学生，并力所能及的给予他们帮助。愿社团的发展越来越好。</p>
                </Card>
                <Tabs style={{
                    backgroundColor: "white",
                    marginTop: "15px",
                    textAlign: "center",
                    paddingLeft: "25px",
                    paddingRight: "25px"
                }} tabBarStyle={{fontSize: "26px", fontWeight: "1000", textShadow: "1px 1px 1px yellow"}}
                      size="large">
                    <TabPane tab="网页设计大赛公告" key="1">
                        <p style={{
                            textAlign: "left",
                            fontSize: "18px",
                            fontWeight:"900"
                        }}>历时三个月准备的网页设计大赛终于拉开了帷幕，本次比赛采取选手自主选题并且围绕主题进行设计的方式，来提高全院网站建设的水平、增强我院学生的科技创新意识和动手能力，营造良好的校园科技文化氛围，培养全面发展的高素质创新人才以及提升大家对于网站建设的热情。</p>
                        <p style={{
                            textAlign: "left",
                            fontSize: "18px",
                            fontWeight:"900"
                        }}>这天下午我们有幸邀请到几位专业的技术人员担任评委，并且为大家进行深入学习网页设计相关技术的辅导。比赛收到了30余名同学的报名申请，经过重重考验，我们筛选出了七名同学参加最后的总决赛。</p>
                    </TabPane>
                    <TabPane tab="小程序开发大赛公告" key="2">
                        <p style={{
                            textAlign: "left",
                            fontSize: "18px",
                            fontWeight:"900"
                        }}>程序设计大赛是拓展学生对微信小程序，小游戏和相关前端，后端技术的认识。发展和丰富同学的课余文化生活。增强我校学生的科技创新意识和动手能力，营造良好的校园文化氛围，培养全面发展的高素质创新人才。为对编程感兴趣的同学提供了一个展示自我的平台，同时也为今后的各类省级、国家级比赛选拔等储备人才。</p>
                    </TabPane>
                    <TabPane tab="程序设计大赛公告" key="3">
                        <p style={{
                            textAlign: "left",
                            fontSize: "18px",
                            fontWeight:"900"
                        }}>程序设计大赛是为对编程感兴趣的同学提供一个展示自我的平台，同时也是为今后的各类省级、国家级比赛选拔储备人才。
                            希望通过以比赛的形式来激发同学们对编程的兴趣，让同学们在竞技中提高自身的编程水平。</p>
                        <p style={{
                            textAlign: "left",
                            fontSize: "18px",
                            fontWeight:"900"
                        }}>本次比赛分为专业组和非专业组，试题分为基础题和提高题，以适应各年级、各编程水平的不同。选手可以根据自己的能力，选择合适的题目进行作答。最终依据总分和用时排出名次，依
                            名次颁奖。</p>
                        <p style={{
                            textAlign: "left",
                            fontSize: "18px",
                            fontWeight:"900"
                        }}>在比赛之前，社团会针对程序设计大赛所需要的能力而为参赛选手进行答疑解惑，首先初步提高对程序设计竞赛、数据结构和算法等感兴趣同学的能力，为日后参加蓝桥杯、CPC等省级、国家级竞赛打下基础</p>
                    </TabPane>
                </Tabs>
            </div>
        </Content>
    )
}

export default Content;