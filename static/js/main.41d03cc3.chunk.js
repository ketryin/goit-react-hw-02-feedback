(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,function(e,t,n){e.exports={listBtn:"FeedbackOptions_listBtn__14-i0",btn:"FeedbackOptions_btn__3DnHR"}},function(e,t,n){},,,,,function(e,t,n){e.exports={text:"Notification_text__2IhmC"}},function(e,t,n){e.exports={listFeedbackn:"Statistics_listFeedbackn__1ys9D"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),i=n.n(s),r=(n(17),n(6)),o=n(7),l=n(8),d=n(12),b=n(11),u=n(3),j=n.n(u),h=n(0),O=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("ul",{className:j.a.listBtn,children:t.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:j.a.btn,onClick:function(){return n(e)},children:e})},e)}))})},x=n(9),f=n.n(x),p=function(e){var t=e.message;return Object(h.jsx)("p",{className:f.a.text,children:t})};p.defaultProps={message:"Oops:("};var v=p,k=n(4),g=n.n(k),m=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{className:g.a.section,children:[Object(h.jsx)("h1",{className:g.a.title,children:t}),n]})};m.defaultProps={title:"",children:[]};var F=m,_=n(10),N=n.n(_),P=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercentage;return Object(h.jsxs)("ul",{className:N.a.listFeedbackn,children:[Object(h.jsxs)("li",{children:["Good: ",Object(h.jsx)("span",{children:t})]}),Object(h.jsxs)("li",{children:["Neutral: ",Object(h.jsx)("span",{children:n})]}),Object(h.jsxs)("li",{children:["Bad: ",Object(h.jsx)("span",{children:c})]}),Object(h.jsxs)("li",{children:["Total: ",Object(h.jsx)("span",{children:a})]}),Object(h.jsxs)("li",{children:["Positive feedback: ",Object(h.jsxs)("span",{children:[s,"%"]})]})]})},y=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.incrementCounter=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e}return Object(l.a)(n,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return Math.round(100*this.state.good/(this.state.good+this.state.neutral+this.state.bad))}},{key:"render",value:function(){var e=this,t=this.state,n=t.good,c=t.neutral,a=t.bad;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(F,{title:"Please leave feedback",children:Object(h.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:function(t){return e.incrementCounter(t)}})}),Object(h.jsx)(F,{title:"Statistics",children:this.countTotalFeedback()>0?Object(h.jsx)(P,{good:n,neutral:c,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(v,{message:"No feedback given"})})]})}}]),n}(c.Component);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.41d03cc3.chunk.js.map