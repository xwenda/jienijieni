import{_ as l,o as i,c as a,X as t}from"./chunks/framework.d276e8ea.js";const _=JSON.parse('{"title":"业务","description":"","frontmatter":{},"headers":[],"relativePath":"public/business/业务.md"}'),e={name:"public/business/业务.md"},o=t('<h1 id="业务" tabindex="-1">业务 <a class="header-anchor" href="#业务" aria-label="Permalink to &quot;业务&quot;">​</a></h1><h2 id="重大危险源" tabindex="-1">重大危险源 <a class="header-anchor" href="#重大危险源" aria-label="Permalink to &quot;重大危险源&quot;">​</a></h2><h3 id="重大危险源-1" tabindex="-1">重大危险源 <a class="header-anchor" href="#重大危险源-1" aria-label="Permalink to &quot;重大危险源&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>也就是某个设施：</p><ul><li>罐区 <ul><li>储罐</li></ul></li><li>库区 <ul><li>仓库</li></ul></li><li>生产装置</li><li>其他区域</li></ul></div><ul><li><p>设施属于某个企业</p></li><li><p>有不同的危险等级</p></li><li><p>风险预警，会存在一个动态的风险R值，后端的算法模型计算出来的，大概每天9:30？</p><ul><li>红</li><li>橙</li><li>黄</li><li>蓝</li></ul></li><li><p>设施会关联传感器</p><ul><li>危险源 =&gt; 设施 =&gt; 监测点位(传感器)</li><li>采集到监测信息、压力、温度、有毒有害等，数据实时的，只有生产环境才能看得到</li><li>传感器设置4个报警阈值，可以进行申请变更阈值达到销警的目的 <ul><li>低低报</li><li>低报</li><li>高报</li><li>高高报</li></ul></li></ul></li><li><p>设施会关联摄像头</p><ul><li>危险源 =&gt; 设施 =&gt; 摄像头</li><li>可以视频播放</li><li>视频分析可以报警(暂未实现)</li></ul></li><li><p>专项督导检查隐患信息</p><ul><li>从外部对接</li></ul></li><li><p>包保责任制履职情况</p><ul><li>从外部对接</li></ul></li><li><p>关联的危险化学品</p><ul><li>危险源 =&gt; 设施 =&gt; 企业 =&gt; 罐区(储罐，含有危险化学品)、库区(仓库，含有危险化学品)、生产装置(生产危险化学品) =&gt; 危险化学品</li></ul></li></ul><h3 id="重点监管化工工艺" tabindex="-1">重点监管化工工艺 <a class="header-anchor" href="#重点监管化工工艺" aria-label="Permalink to &quot;重点监管化工工艺&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>某类危险化学品的加工工艺(涉及生产装置)</p></div><ul><li>存在一个所有工艺的清单</li><li>企业的生产装置会涉及到不同的化工工艺</li></ul><h3 id="重点监管危险化学品" tabindex="-1">重点监管危险化学品 <a class="header-anchor" href="#重点监管危险化学品" aria-label="Permalink to &quot;重点监管危险化学品&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>危险源 =&gt; 设施 =&gt; 企业 =&gt; 罐区(储罐，含有危险化学品)、库区(仓库，含有危险化学品)、生产装置(生产危险化学品) =&gt; 危险化学品</p></div><ul><li>存在一个所有的危险化学品SDS库</li><li>企业生产使用不同的危险化学品，其中存在重点监管</li></ul><h2 id="双重预防" tabindex="-1">双重预防 <a class="header-anchor" href="#双重预防" aria-label="Permalink to &quot;双重预防&quot;">​</a></h2><h3 id="风险等级管控" tabindex="-1">风险等级管控 <a class="header-anchor" href="#风险等级管控" aria-label="Permalink to &quot;风险等级管控&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>每个企业都有自己的风险分布图</p><p>而其中风险分析的对象包括：重大危险源、企业设施</p><p>其特点是：有<strong>等级</strong>，<strong>等级划分</strong>根据系统<strong>计算出来的固有风险 + 控制风险</strong></p></div><ul><li>一个风险分析对象 =&gt; 一个或多个风险分析单元</li><li>一个风险分析单元 =&gt; 一个或多个风险分析事件</li><li>一个风险分析事件 =&gt; 一个或多个管控措施</li></ul><h3 id="隐患排查治理" tabindex="-1">隐患排查治理 <a class="header-anchor" href="#隐患排查治理" aria-label="Permalink to &quot;隐患排查治理&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">隐患</p><p>跟风险事件强相关</p></div><p>分为一下步骤：</p><ol><li>隐患排查 <ul><li>隐患排查任务</li><li>隐患排查计划</li></ul></li><li>隐患整改</li><li>整改验收(复核隐患整改情况)</li></ol><h3 id="运行效果" tabindex="-1">运行效果 <a class="header-anchor" href="#运行效果" aria-label="Permalink to &quot;运行效果&quot;">​</a></h3><p>根据<strong>算出来的风险等级管控</strong> + <strong>双重预防</strong>算出来的</p>',21),s=[o];function r(c,u,p,n,h,d){return i(),a("div",null,s)}const m=l(e,[["render",r]]);export{_ as __pageData,m as default};
