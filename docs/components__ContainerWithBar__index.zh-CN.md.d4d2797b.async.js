(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{KHRH:function(e,n,t){"use strict";t.r(n);var a=t("wx14"),r=t("q1tI"),l=t.n(r),s=(t("B2uJ"),t("+su7"),t("qOys")),i=t.n(s),o=t("5Yjd"),c=t.n(o),h=l.a.memo((function(){var e=t("TqRt"),n=e(t("q1tI")),a=e(t("Bymb")),r=function(){return n["default"].createElement(a["default"],null)};return n["default"].createElement(r)}));n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"containerwithbar"},l.a.createElement("a",{"aria-hidden":"true",href:"#containerwithbar"},l.a.createElement("span",{className:"icon icon-link"})),"ContainerWithBar"),l.a.createElement("p",null,"\u5e26\u81ea\u5b9a\u4e49\u6eda\u52a8\u6761\u7684\u6eda\u52a8\u5bb9\u5668\u3002"),l.a.createElement("h2",{id:"examples"},l.a.createElement("a",{"aria-hidden":"true",href:"#examples"},l.a.createElement("span",{className:"icon icon-link"})),"Examples")),l.a.createElement(c.a,Object(a["a"])({source:{tsx:"import { SimpleContainerWithBar } from '../ContainerWithBar.stories';\nexport default () => <SimpleContainerWithBar />;\n",jsx:"import { SimpleContainerWithBar } from '../ContainerWithBar.stories';\n\nexport default () => <SimpleContainerWithBar />;\n"}},{path:"/_demos/basic-1",title:"Basic Usage",desc:'<div class="markdown"><p>Set interval, reset interval and clear interval via setInterval.</p></div>',"title.zh-CN":"\u57fa\u7840\u7528\u6cd5","desc.zh-CN":'<div class="markdown"><p>\u901a\u8fc7 setInterval \u5b9e\u73b0\u7684setInterval, Reset \u548c Clear \u5b9a\u65f6\u5668\u7684\u7528\u6cd5\u3002</p></div>',dependencies:{classnames:"2.2.6","xy-hooks":"0.0.1-beta.1"},files:{"ContainerWithBar.stories.tsx":{path:"../ContainerWithBar.stories",content:'import React, {useState} from "react";\nimport ContainerWithBar from "./ContainerWithBar";\n\nexport default {\n  title: "ContainerWithBar",\n};\n\nexport const SimpleContainerWithBar = () => {\n  const [data, setData] = useState(\n    "\u56de\u590d\u5ba2\u6237\u770b\u53d1\u54c8\u5f88\u5feb\u5c31\u590d\u5065\u79d1\u7b26\u53f7\u5361\u5361\u5b89\u5fbd\u79d1\u6280\u98ce\u548c\u7f34\u8d39\u5361\u5361\u53f7\u53d1\u5b89\u79d1\u6280\u8def\u6062\u590d\u5f00\u673a\u540e\u53d1\u8868\u5728\u6ca1\u529e\u6cd5\u6ca1\u529e\u6cd5\u4e86\u5eb7\u5e08\u5085hi\u53d1\u5e03"\n  );\n  return (\n    <>\n      <ContainerWithBar\n        style={{\n          width: "100%",\n          height: 400,\n        }}\n      >\n        {data.split("").map((char, idx) => (\n          <div\n            style={{\n              width: "100%",\n              height: 60,\n              backgroundColor: "lightcoral",\n              boxSizing: "border-box",\n              borderBottom: "1px solid #fff",\n              display: "flex",\n              justifyContent: "center",\n              alignItems: "center",\n              userSelect: "none",\n            }}\n            key={idx}\n          >\n            {char}\n          </div>\n        ))}\n      </ContainerWithBar>\n\n      <div\n        style={{\n          marginTop: 40,\n        }}\n      >\n        <button onClick={() => setData(data + "\u4ea4\u8bdd\u8d39\u51e4\u51f0\u5065\u5eb7\u7a7a\u767d\u4ed8\u6b3e\u5427\u5f00\u529e\u8d39")}>\n          \u6dfb\u52a0\u6570\u636e\n        </button>\n      </div>\n    </>\n  );\n};\n'},"ContainerWithBar.tsx":{path:"./ContainerWithBar",content:'import React, { useRef, useState, useEffect } from "react";\nimport classnames from "classnames";\nimport ScrollBar from "./ScrollBar";\nimport { useScrollPlus } from "xy-hooks/packages/hooks";\nimport ContainerWithBarProps from "./ContainerWithBar.types";\nimport "./ContainerWithBar.scss";\n\nconst ContainerWithBar: React.FC<ContainerWithBarProps> = (props) => {\n  const { className, style, prefixCls = "xy", children = <div /> } = props;\n  const defaultPrefixCls = `${prefixCls}-scroll-container`;\n  const classes = classnames(defaultPrefixCls, `${defaultPrefixCls}-wrapper`);\n  const containerRef = useRef(null);\n\n  // \u521d\u59cb\u5316\u65f6\u83b7\u53d6height\u548cscrollHeight\n\n  const { top } = useScrollPlus(containerRef.current);\n  const scrollHeight = containerRef.current?.scrollHeight;\n  const height = containerRef.current?.clientHeight;\n  console.log(\'==>\', {scrollHeight, height});\n\n  const handleScroll = (percent) => {\n    // \u6eda\u52a8\u9875\u9762\u81f3\u76f8\u5e94\u7684\u4f4d\u7f6e\n    containerRef.current?.scrollTo({\n      top: (scrollHeight - height) * percent,\n      behavior: "auto",\n    });\n  };\n\n  return (\n    <div\n      data-testid="ContainerWithBar"\n      className={classes}\n      style={{ ...style }}\n    >\n      <div className={`${defaultPrefixCls}-inner-wrapper`} ref={containerRef}>\n        {children}\n      </div>\n      <ScrollBar pos={{ scrollHeight, top, height }} onScroll={handleScroll} />\n    </div>\n  );\n};\n\nexport default ContainerWithBar;\n'},"ScrollBar/index.tsx":{path:"./ScrollBar",content:'import React, { useEffect, useState, useRef, useMemo } from "react";\nimport classnames from "classnames";\nimport ScrollBarProps from "./index.types";\nimport "./index.scss";\n\nconst ScrollBar: React.FC<ScrollBarProps> = (props) => {\n  const {\n    className,\n    style,\n    prefixCls = "xy",\n    pos,\n    theme = "dark",\n    onScroll,\n  } = props;\n  const defaultPrefixCls = `${prefixCls}-scroll-bar`;\n  const classes = classnames(\n    defaultPrefixCls,\n    `${defaultPrefixCls}-wrapper`,\n    `${defaultPrefixCls}-${theme}`\n  );\n\n  const [translateY, setTranslateY] = useState(0);\n  const scrollBarRef = useRef(null);\n  const scrollBarContainerRef = useRef(null);\n  const isDragBar = useRef(false);\n  const lastY = useRef<number | null>(null);\n\n  const { scrollHeight, top = 0, height } = pos;\n  const percent = top / (scrollHeight - height);\n  const scrollBarHeight = Math.round((height * height) / scrollHeight) || 50;\n  const innerOffsetTop = (height - scrollBarHeight) * percent;\n  const offsetTop = useMemo(\n    () =>\n      Math.max(\n        Math.min(\n          isDragBar ? innerOffsetTop : translateY,\n          height - scrollBarHeight\n        ),\n        0\n      ) || 0,\n    [translateY, pos]\n  );\n\n  // \u5f53\u5916\u90e8\u6eda\u52a8\u89e6\u53d1\u65f6\uff0c\u5c06\u6eda\u52a8\u4f4d\u7f6e\u540c\u6b65\u5230\u5185\u90e8\n  useEffect(() => {\n    // console.log(\'==>\', {percent, innerOffsetTop});\n    setTranslateY(innerOffsetTop);\n  }, [pos])\n\n  useEffect(() => {\n    if(isDragBar.current) {\n      onScroll?.(translateY / (height - scrollBarHeight));\n    }\n  }, [translateY, pos]);\n\n  const handleMouseDown = (e: any) => {\n    e.stopPropagation();\n    isDragBar.current = true;\n  };\n\n  const handleMouseUp = (e: any) => {\n    isDragBar.current = false;\n    lastY.current = null;\n  };\n\n  const handleMouseMove = (e: any) => {\n    if (isDragBar.current) handleMove(e);\n  };\n\n  const handleMove = (e: any) => {\n    // translateY \u662f\u6574\u6570\uff08px\uff09\uff0c\u8981\u6c42scrollBarHeight\u4e5f\u662f\u6574\u6570\u3002\n    if (lastY.current) {\n      let ty = e.clientY - lastY.current + translateY;\n      if (ty < 0 || ty > height - scrollBarHeight) return;\n      setTranslateY(ty);\n    }\n    lastY.current = e.clientY;\n  };\n\n  window.onmouseup = handleMouseUp;\n  window.onmousemove = handleMouseMove;\n\n  return (\n    <div className={classes} ref={scrollBarContainerRef}>\n      <div className={`${defaultPrefixCls}-inner`}>\n        {/* scroll bar */}\n        <div\n          className={`${defaultPrefixCls}-bar`}\n          style={{\n            height: scrollBarHeight,\n            top: offsetTop,\n          }}\n          onMouseDown={handleMouseDown}\n          ref={scrollBarRef}\n        />\n      </div>\n    </div>\n  );\n};\n\nexport default ScrollBar;\n'},"index.scss":{path:"./index.scss",content:'@import "src/theme.scss";\n\n$prefixCls: "xy";\n$defaultBarPrefix: $prefixCls + "-scroll-bar";\n$scroll-bar-width: 10px;\n$scroll-bar-inner-width: 8px;\n\n.#{$defaultBarPrefix} {\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  cursor: default;\n  &-wrapper{\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    height: 100%;\n    width: $scroll-bar-width;\n  }\n  &-dark{\n    .#{$defaultBarPrefix}-wrapper{\n      background: transparent;\n    }\n    .#{$defaultBarPrefix}-inner {\n      width: 100%;\n      height: 100%;\n      background: transparent;\n      position: relative;\n      display: flex;\n      justify-content: center;\n    }\n    .#{$defaultBarPrefix}-bar {\n      width: $scroll-bar-inner-width;\n      border-radius: $scroll-bar-inner-width / 2;\n      background-color: rgba(127, 127, 127, 0.7);\n      position: absolute;\n    }\n  }\n}\n'},"ContainerWithBar.scss":{path:"./ContainerWithBar.scss",content:'@import "src/theme.scss";\n\n$prefixCls: "xy";\n$defaultPrefix: $prefixCls + "-scroll-container";\n\n.#{$defaultPrefix} {\n  overflow: hidden;\n  position: relative;\n  &-inner-wrapper {\n    width: 100%;\n    height: 100%;\n    @include no-scrollbar;\n    overflow-y: auto;\n    overflow-x: auto;\n  }\n}\n'}}}),l.a.createElement(h,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"usage"},l.a.createElement("a",{"aria-hidden":"true",href:"#usage"},l.a.createElement("span",{className:"icon icon-link"})),"Usage"),l.a.createElement(i.a,{code:'import ContainerWithBar from "xy-element";\n\n<ContainerWithBar\n  style={{\n    width: "100%",\n    height: 600,\n  }}\n>\n  {data.split("").map((char, idx) => (\n    <div\n      style={{\n        width: "100%",\n        height: 60,\n        backgroundColor: "lightcoral",\n        boxSizing: "border-box",\n        borderBottom: "1px solid #fff",\n        display: "flex",\n        justifyContent: "center",\n        alignItems: "center",\n        userSelect: "none",\n      }}\n      key={idx}\n    >\n      {char}\n    </div>\n  ))}\n</ContainerWithBar>\n',lang:"ts"}),l.a.createElement("h3",{id:"params"},l.a.createElement("a",{"aria-hidden":"true",href:"#params"},l.a.createElement("span",{className:"icon icon-link"})),"Params"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Property"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null)),l.a.createElement("h3",{id:"result"},l.a.createElement("a",{"aria-hidden":"true",href:"#result"},l.a.createElement("span",{className:"icon icon-link"})),"Result"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Property"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"))),l.a.createElement("tbody",null)),l.a.createElement("h3",{id:"types"},l.a.createElement("a",{"aria-hidden":"true",href:"#types"},l.a.createElement("span",{className:"icon icon-link"})),"Types"),l.a.createElement(i.a,{code:"",lang:"ts"}),l.a.createElement("h3",{id:"workflow"},l.a.createElement("a",{"aria-hidden":"true",href:"#workflow"},l.a.createElement("span",{className:"icon icon-link"})),"WORKFLOW"),l.a.createElement("h4",{id:"tofix"},l.a.createElement("a",{"aria-hidden":"true",href:"#tofix"},l.a.createElement("span",{className:"icon icon-link"})),"TOFIX"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6dfb\u52a0\u6570\u636e\u65f6\u6eda\u52a8\u6761\u72b6\u6001\u53d8\u5316\u6709\u5ef6\u8fdf\u3002"),l.a.createElement("li",null,"Firefox \u4e0b\u62c9\u52a8\u6eda\u52a8\u6761\u8fd0\u52a8\u7f13\u6162\u3002")),l.a.createElement("h4",{id:"todo"},l.a.createElement("a",{"aria-hidden":"true",href:"#todo"},l.a.createElement("span",{className:"icon icon-link"})),"TODO"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7ed3\u5408\u6eda\u52a8\u52a0\u8f7d\u7ec4\u4ef6\u5f00\u53d1\u5e26\u81ea\u5b9a\u4e49\u6eda\u52a8\u6761\u7684\u6eda\u52a8\u52a0\u8f7d\u5bb9\u5668\u3002"),l.a.createElement("li",null,"\u6eda\u52a8\u6761\u652f\u6301\u4e3b\u9898\u66f4\u6362\u548c\u6837\u5f0f\u81ea\u5b9a\u4e49\u3002"))))}},TqRt:function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t}}]);