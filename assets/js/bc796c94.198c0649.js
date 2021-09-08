"use strict";(self.webpackChunkargo_monitoring=self.webpackChunkargo_monitoring||[]).push([[980],{5939:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={},l=void 0,c={unversionedId:"reports/status-critical-warning-unknown",id:"reports/status-critical-warning-unknown",isDocsHomePage:!1,title:"status-critical-warning-unknown",description:"---",source:"@site/docs/reports/status-critical-warning-unknown.md",sourceDirName:"reports",slug:"/reports/status-critical-warning-unknown",permalink:"/argo-monitoring/docs/reports/status-critical-warning-unknown",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Status Trends - Flapping",permalink:"/argo-monitoring/docs/reports/flapping-trends"}},u=[{value:"title: Status Trends - Critical, Warning,Unknown",id:"title-status-trends---critical-warningunknown",children:[]},{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[{value:"Example 1: Counting CRITICAL,WARNING,UNKNOWN status daily appearance and duration",id:"example-1-counting-criticalwarningunknown-status-daily-appearance-and-duration",children:[]}]}],p={toc:u};function d(t){var e=t.components,n=(0,i.Z)(t,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"sidebar_position: 3"),(0,r.kt)("h2",{id:"title-status-trends---critical-warningunknown"},"title: Status Trends - Critical, Warning,Unknown"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ARGO Monitoring Service is checking the services at regular intervals. It actually runs  explicit tests (checks) in order to assess the status of the service. The result of the checks decides on the state of the service. Based on that each service may have a state :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OK"),": the check succeeds"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CRITICAL"),": the check does not  succeed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WARNING"),": the check succeeds but  performs unusually"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MISSING"),": the check\u2019s state is not recorded"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"UNKNOWN"),": the check could not apply on the monitoring item and as a result the check\u2019s state is unknown")),(0,r.kt)("p",null,"As configuration problems, troublesome services, or other service internal problems occur, the checks on the monitoring items can result in a problematic state (critical , warning or unknown state), for a time period."),(0,r.kt)("p",null,"ARGO Monitoring service analyzes the status timelines in different levels,  detects the CRITICAL, WARNING, UNKNOWN states and  calculates the duration (in minutes) as well as the number of appearances of each state in the daily timelines. ARGO Monitoring service creates a report, for each of the problematic states, with the list of the monitored items which remain in the state for the longest time period."),(0,r.kt)("p",null,"It actually analyzes the stream of collected status data (monitoring results) using its analytics engine (a big data friendly platform) and traces the problematic states almost in real time, calculating their presence and duration. It uncovers hidden patterns, correlations and other insights and informs the user."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"State changes can occur due to network problems between monitoring host and monitored item for example:"),(0,r.kt)("h3",{id:"example-1-counting-criticalwarningunknown-status-daily-appearance-and-duration"},"Example 1: Counting CRITICAL,WARNING,UNKNOWN status daily appearance and duration"),(0,r.kt)("p",null,"We have a monitoring service that monitors HTTP activity in host2.example.com using the check_http probe. Due to network issues between monitoring box and host2.example.com we have a pattern that some HTTP checks are successful (",(0,r.kt)("strong",{parentName:"p"},"OK"),") some are critical (",(0,r.kt)("strong",{parentName:"p"},"CRITICAL"),"), some are warning (",(0,r.kt)("strong",{parentName:"p"},"WARNING"),") and some are unknown (",(0,r.kt)("strong",{parentName:"p"},"UNKNOWN"),") as shown in picture:"),(0,r.kt)("h4",{id:"result"},"Result"),(0,r.kt)("p",null,"ARGO Monitoring Service applies calculations on the recorded status timeline and counts the appearance  and duration of CRITICAL, WARNING, UNKNOWN state. "),(0,r.kt)("p",null,"The duration of the status is calculated by aggregating  the interval duration of each status appearance in the timeline."),(0,r.kt)("p",null,"In the above example, as the timeline is divided in 20 equal slots , each slot has a duration of  36 minutes."),(0,r.kt)("p",null,"The ARGO Monitoring Service detects that :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WARNING appears 2 times , with duration 72 minutes (2 X 36 minutes)"),(0,r.kt)("li",{parentName:"ul"},"CRITICAL appears 5 times , with duration 180 minutes (5 X 36 minutes)"),(0,r.kt)("li",{parentName:"ul"},"UNKNOWN appears 1 time, , with duration 36 minutes (1 X 36 minutes)")))}d.isMDXComponent=!0}}]);