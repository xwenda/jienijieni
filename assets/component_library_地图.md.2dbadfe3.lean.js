import{_ as w,p as M,y as R,o as E,c as I,h as b,A as L,B as f,G as _,z as x,a as p,E as r,b as h,a8 as Y}from"./chunks/framework.647aedcc.js";const S={id:"cesiumContainer",class:"cesium-box"},P={__name:"index",setup(X){let s="";function u(){var l="cd084de7e251a6d429ceb5cae01c4cd4",m="https://t{s}.tianditu.gov.cn/",C=["0","1","2","3","4","5","6","7"],t=new Cesium.Map("cesiumContainer",{shouldAnimate:!0,selectionIndicator:!1,baseLayerPicker:!1,fullscreenButton:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,timeline:!1,navigationHelpButton:!1,navigationInstructionsInitiallyVisible:!1,showRenderLoopErrors:!1,shadows:!1});t.scene.fxaa=!0,t.scene.postProcessStages.fxaa.enabled=!1,t.scene.globe.showGroundAtmosphere=!0,t.scene.screenSpaceCameraController.constrainedPitch=Cesium.Math.toRadians(-20),t.scene.screenSpaceCameraController.autoResetHeadingPitch=!1,t.scene.screenSpaceCameraController.inertiaZoom=.5,t.scene.screenSpaceCameraController.minimumZoomDistance=50,t.scene.screenSpaceCameraController.maximumZoomDistance=2e7,t.scene.screenSpaceCameraController.zoomEventTypes=[Cesium.CameraEventType.RIGHT_DRAG,Cesium.CameraEventType.WHEEL,Cesium.CameraEventType.PINCH],t.scene.screenSpaceCameraController.tiltEventTypes=[Cesium.CameraEventType.MIDDLE_DRAG,Cesium.CameraEventType.PINCH,{eventType:Cesium.CameraEventType.LEFT_DRAG,modifier:Cesium.KeyboardEventModifier.CTRL},{eventType:Cesium.CameraEventType.RIGHT_DRAG,modifier:Cesium.KeyboardEventModifier.CTRL}],t.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);var T=new Cesium.UrlTemplateImageryProvider({url:m+"DataServer?T=img_w&x={x}&y={y}&l={z}&tk="+l,subdomains:C,tilingScheme:new Cesium.WebMercatorTilingScheme,maximumLevel:18});t.imageryLayers.addImageryProvider(T);var v=new Cesium.UrlTemplateImageryProvider({url:m+"DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk="+l,subdomains:C,tilingScheme:new Cesium.WebMercatorTilingScheme,maximumLevel:10});t.imageryLayers.addImageryProvider(v);for(var a=new Array,e=0;e<C.length;e++){var o=m.replace("{s}",C[e])+"mapservice/swdx?T=elv_c&tk="+l;a.push(o)}var d=new Cesium.GeoTerrainProvider({urls:a});t.terrainProvider=d,t.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(103.84,31.15,1785e4),orientation:{heading:Cesium.Math.toRadians(348.4202942851978),pitch:Cesium.Math.toRadians(-89.74026687972041),roll:Cesium.Math.toRadians(0)},complete:function(){}});var i=new Cesium.GeoWTFS({viewer:t,subdomains:C,metadata:{boundBox:{minX:-180,minY:-90,maxX:180,maxY:90},minLevel:1,maxLevel:20},depthTestOptimization:!0,dTOElevation:15e3,dTOPitch:Cesium.Math.toRadians(-70),aotuCollide:!0,collisionPadding:[5,10,8,5],serverFirstStyle:!0,labelGraphics:{font:"28px sans-serif",fontSize:28,fillColor:Cesium.Color.WHITE,scale:.5,outlineColor:Cesium.Color.BLACK,outlineWidth:2,style:Cesium.LabelStyle.FILL_AND_OUTLINE,showBackground:!1,backgroundColor:Cesium.Color.RED,backgroundPadding:new Cesium.Cartesian2(10,10),horizontalOrigin:Cesium.HorizontalOrigin.LEFT,verticalOrigin:Cesium.VerticalOrigin.TOP,eyeOffset:Cesium.Cartesian3.ZERO,pixelOffset:new Cesium.Cartesian2(5,5),disableDepthTestDistance:void 0},billboardGraphics:{horizontalOrigin:Cesium.HorizontalOrigin.CENTER,verticalOrigin:Cesium.VerticalOrigin.CENTER,eyeOffset:Cesium.Cartesian3.ZERO,pixelOffset:Cesium.Cartesian2.ZERO,alignedAxis:Cesium.Cartesian3.ZERO,color:Cesium.Color.WHITE,rotation:0,scale:1,width:18,height:18,disableDepthTestDistance:void 0}});return i.getTileUrl=function(){return m+"mapservice/GetTiles?lxys={z},{x},{y}&VERSION=1.0.0&tk="+l},i.getIcoUrl=function(){return m+"mapservice/GetIcon?id={id}&tk="+l},i.initTDT([{x:6,y:1,level:2,boundBox:{minX:90,minY:0,maxX:135,maxY:45}},{x:7,y:1,level:2,boundBox:{minX:135,minY:0,maxX:180,maxY:45}},{x:6,y:0,level:2,boundBox:{minX:90,minY:45,maxX:135,maxY:90}},{x:7,y:0,level:2,boundBox:{minX:135,minY:45,maxX:180,maxY:90}},{x:5,y:1,level:2,boundBox:{minX:45,minY:0,maxX:90,maxY:45}},{x:4,y:1,level:2,boundBox:{minX:0,minY:0,maxX:45,maxY:45}},{x:5,y:0,level:2,boundBox:{minX:45,minY:45,maxX:90,maxY:90}},{x:4,y:0,level:2,boundBox:{minX:0,minY:45,maxX:45,maxY:90}},{x:6,y:2,level:2,boundBox:{minX:90,minY:-45,maxX:135,maxY:0}},{x:6,y:3,level:2,boundBox:{minX:90,minY:-90,maxX:135,maxY:-45}},{x:7,y:2,level:2,boundBox:{minX:135,minY:-45,maxX:180,maxY:0}},{x:5,y:2,level:2,boundBox:{minX:45,minY:-45,maxX:90,maxY:0}},{x:4,y:2,level:2,boundBox:{minX:0,minY:-45,maxX:45,maxY:0}},{x:3,y:1,level:2,boundBox:{minX:-45,minY:0,maxX:0,maxY:45}},{x:3,y:0,level:2,boundBox:{minX:-45,minY:45,maxX:0,maxY:90}},{x:2,y:0,level:2,boundBox:{minX:-90,minY:45,maxX:-45,maxY:90}},{x:0,y:1,level:2,boundBox:{minX:-180,minY:0,maxX:-135,maxY:45}},{x:1,y:0,level:2,boundBox:{minX:-135,minY:45,maxX:-90,maxY:90}},{x:0,y:0,level:2,boundBox:{minX:-180,minY:45,maxX:-135,maxY:90}}]),t}return M(()=>{s=setInterval(()=>{window.Cesium&&(clearInterval(s),Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMzcwODc2Mi1jYTBiLTRlMjItYmE5Yy0yY2YxZjc4NjNjZmYiLCJpZCI6MTczODAwLCJpYXQiOjE2OTgyMjUyODF9.sIv9WqaDyqMKtKOiprN9HoVWtVkSGko_FDREBLMD4bQ",window.$viewer=u())},1e3),R(()=>{window.$viewer=null})}),(l,m)=>(E(),I("div",S))}},N=w(P,[["__scopeId","data-v-ed482be9"]]);const V={style:{"margin-bottom":"10px"}},z={style:{"margin-bottom":"10px"}},G={__name:"flyToTarget",props:{$viewer:{type:Object,required:!0}},setup(X){let s=b(""),u=b(""),l=b(""),m=b([]);function C(a,e,o=!1){const d=Object.prototype.toString.call(e);let{longitude:i,latitude:c,altitude:y,heading:n,pitch:g,roll:k}={longitude:120.5,latitude:28.8856,altitude:2080359375e-2,heading:360,pitch:-89.99,roll:0};if(e){if(d!=="[object Object]")throw Error("格式为： { longitude, latitude, altitude }");i=Number(e.longitude),c=Number(e.latitude),y=Number(e.altitude||3e3)}if(e&&!o){const O=t(a),B=Cesium.Cartesian3.fromDegrees(i,c);n=O.heading,g=O.pitch;let D=y||3e3;a.camera.lookAt(B,new Cesium.HeadingPitchRange(n,g,D)),a.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)}else a.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(i,c,y),orientation:{heading:Cesium.Math.toRadians(360),pitch:Cesium.Math.toRadians(-89.99),roll:0}})}function t(a){const e=a.camera,o=OneMap.Cartographic.fromCartesian(e.position),d=OneMap.Math.toDegrees(o.longitude),i=OneMap.Math.toDegrees(o.latitude),c=o.height;let y=OneMap.Cartographic.fromDegrees(d,i,c),g=a.scene.globe.ellipsoid.cartographicToCartesian(y);return{longitude:d,latitude:i,height:c,x:g.x,y:g.y,z:g.z,heading:e.heading,pitch:e.pitch,roll:e.roll}}function T(){fetch(`http://api.tianditu.gov.cn/geocoder?ds={"keyWord":"${l.value}"}&tk=cd084de7e251a6d429ceb5cae01c4cd4`).then(function(a){return a.json()}).then(function(a){m.value=[{...a.location,longitude:a.location.lon,latitude:a.location.lat}]}).catch(function(a){})}function v(a){const{longitude:e,latitude:o}=a;e&&o&&C(window.$viewer,{longitude:e,latitude:o},!0)}return(a,e)=>{const o=_("el-input"),d=_("el-button"),i=_("el-table-column"),c=_("el-table"),y=_("el-card");return E(),L(y,{class:"box-card"},{default:f(()=>[x("div",V,[p(" 经度："),r(o,{modelValue:h(s),"onUpdate:modelValue":e[0]||(e[0]=n=>Y(s)?s.value=n:s=n),style:{width:"200px"}},null,8,["modelValue"])]),x("div",z,[p(" 纬度："),r(o,{modelValue:h(u),"onUpdate:modelValue":e[1]||(e[1]=n=>Y(u)?u.value=n:u=n),style:{width:"200px","margin-right":"10px"}},null,8,["modelValue"]),r(d,{type:"primary",onClick:e[2]||(e[2]=n=>v({longitude:h(s),latitude:h(u)}))},{default:f(()=>[p("飞行")]),_:1})]),p(" 搜索地名："),r(o,{modelValue:h(l),"onUpdate:modelValue":e[3]||(e[3]=n=>Y(l)?l.value=n:l=n),onChange:T,style:{width:"200px"}},null,8,["modelValue"]),r(c,{data:h(m),height:"250",style:{width:"100%","margin-top":"10px"}},{default:f(()=>[r(i,{prop:"keyWord",label:"地名"}),r(i,{prop:"longitude",label:"经度"}),r(i,{prop:"latitude",label:"维度"}),r(i,{label:"操作",width:"60"},{default:f(n=>[r(d,{link:"",type:"primary",size:"small",onClick:g=>v(n.row)},{default:f(()=>[p(" 飞行 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1})}}},j=w(G,[["__scopeId","data-v-58dea050"]]),A=x("h1",{id:"地图",tabindex:"-1"},[p("地图 "),x("a",{class:"header-anchor",href:"#地图","aria-label":'Permalink to "地图"'},"​")],-1),H=x("h2",{id:"cesium地图",tabindex:"-1"},[p("Cesium地图 "),x("a",{class:"header-anchor",href:"#cesium地图","aria-label":'Permalink to "Cesium地图"'},"​")],-1),U=x("h2",{id:"飞行方法",tabindex:"-1"},[p("飞行方法 "),x("a",{class:"header-anchor",href:"#飞行方法","aria-label":'Permalink to "飞行方法"'},"​")],-1),F=JSON.parse('{"title":"地图","description":"","frontmatter":{},"headers":[],"relativePath":"component_library/地图.md"}'),W={name:"component_library/地图.md"},J=Object.assign(W,{setup(X){return(s,u)=>(E(),I("div",null,[A,H,r(N),U,r(j)]))}});export{F as __pageData,J as default};
