(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{kK2y:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),r=n("dEAq"),c=n("0zqC"),o=n("ZpkN"),i=l.a.memo(n("Rsk4").default["scroller-basic"].component);a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"scroller"},l.a.createElement(r["AnchorLink"],{to:"#scroller","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Scroller"),l.a.createElement("p",null,"A scroll container to load more data when scroll to bottom."),l.a.createElement("h2",{id:"examples"},l.a.createElement(r["AnchorLink"],{to:"#examples","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Examples")),l.a.createElement(c["default"],n("Rsk4").default["scroller-basic"].previewerProps,l.a.createElement(i,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"usage"},l.a.createElement(r["AnchorLink"],{to:"#usage","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Usage"),l.a.createElement(o["a"],{code:'import Scroller from "xy-element";\n\n<Scroller\n  hasMore={hasMore}\n  loadMore={handleLoadMore}\n  style={{\n    width: 600,\n    height: 500,\n    background: "lightcoral",\n  }}\n  loader={tip}\n  onLoadAll={() => alert("All data loaded!")}\n>\n  {list.map((data, idx) => (\n    <div\n      style={{\n        width: "100%",\n        height: "60px",\n        display: "flex",\n        alignItems: "center",\n        justifyContent: "center",\n        color: "white",\n        background: "#ccc",\n        border: "5px solid lightblue",\n      }}\n      key={idx}\n    >\n      {data}\n    </div>\n  ))}\n</Scroller>\n',lang:"ts"}),l.a.createElement("h3",{id:"params"},l.a.createElement(r["AnchorLink"],{to:"#params","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Params"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Property"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default")))),l.a.createElement("h3",{id:"result"},l.a.createElement(r["AnchorLink"],{to:"#result","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Result"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Property"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type")))),l.a.createElement("h3",{id:"types"},l.a.createElement(r["AnchorLink"],{to:"#types","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"Types"),l.a.createElement(o["a"],{code:"",lang:"ts"}),l.a.createElement("h3",{id:"workflow"},l.a.createElement(r["AnchorLink"],{to:"#workflow","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"WORKFLOW"),l.a.createElement("h4",{id:"todo"},l.a.createElement(r["AnchorLink"],{to:"#todo","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:["icon","icon-link"]})),"TODO"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7ec4\u4ef6\u52a0\u8f7d\u65f6\uff0c\u5982\u679c\u6570\u636e\u52a0\u8f7d\u592a\u5c11\u6ca1\u6709\u89e6\u53d1\u6eda\u52a8\uff0c\u81ea\u52a8\u53d1\u8bf7\u6c42\u76f4\u5230\u80fd\u591f\u6eda\u52a8"),l.a.createElement("li",null,"\u6dfb\u52a0\u65e0\u6570\u636e\u7684\u5904\u7406")))))}}}]);