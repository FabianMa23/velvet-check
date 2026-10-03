/* Velvet Check – shared page script (WebGL background, nav, reveal, FAQ, cursor) */
(function(){
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(pointer: fine)").matches;

  function initGL(){
    if(typeof THREE === "undefined"){
      document.getElementById("gl").style.background =
        "radial-gradient(130% 100% at 70% 20%, #4a3018 0%, #1a1210 48%, #08080b 100%)";
      return;
    }
    var canvas=document.getElementById("gl");
    var renderer=new THREE.WebGLRenderer({canvas:canvas,antialias:false,alpha:false});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));
    var scene=new THREE.Scene();
    var camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
    var geo=new THREE.PlaneGeometry(2,2);
    var uniforms={uTime:{value:0},uRes:{value:new THREE.Vector2(1,1)},uMouse:{value:new THREE.Vector2(0.5,0.5)},uMouseV:{value:0}};
    var frag=[
      "precision highp float;",
      "uniform float uTime; uniform vec2 uRes; uniform vec2 uMouse; uniform float uMouseV;",
      "varying vec2 vUv;",
      "vec2 hash2(vec2 p){p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)));return -1.0+2.0*fract(sin(p)*43758.5453123);}",
      "float noise(vec2 p){const float K1=0.366025404;const float K2=0.211324865;",
      " vec2 i=floor(p+(p.x+p.y)*K1);vec2 a=p-i+(i.x+i.y)*K2;",
      " float m=step(a.y,a.x);vec2 o=vec2(m,1.0-m);vec2 b=a-o+K2;vec2 c=a-1.0+2.0*K2;",
      " vec3 h=max(0.5-vec3(dot(a,a),dot(b,b),dot(c,c)),0.0);",
      " vec3 n=h*h*h*h*vec3(dot(a,hash2(i+0.0)),dot(b,hash2(i+o)),dot(c,hash2(i+1.0)));",
      " return dot(n,vec3(70.0));}",
      "float fbm(vec2 p){float v=0.0;float a=0.5;mat2 m=mat2(1.6,1.2,-1.2,1.6);",
      " for(int i=0;i<5;i++){v+=a*noise(p);p=m*p;a*=0.5;}return v;}",
      "void main(){",
      " vec2 uv=vUv; vec2 p=uv; p.x*=uRes.x/uRes.y;",
      " vec2 m=uMouse; m.x*=uRes.x/uRes.y;",
      " float t=uTime*0.05;",
      " float md=distance(p,m);",
      " float ripple=sin(md*12.0 - uTime*1.0)*exp(-md*3.2)*(0.08+uMouseV*0.45);",
      " vec2 dir=normalize(p-m+0.0001); vec2 warp=dir*ripple;",
      " vec2 q=vec2(fbm(p*1.3+vec2(0.0,t)), fbm(p*1.3+vec2(5.2,t)+1.7));",
      " vec2 r=vec2(fbm(p*1.3+q*1.6+vec2(1.7,9.2)-t*1.2), fbm(p*1.3+q*1.6+vec2(8.3,2.8)));",
      " float f=fbm(p*1.3+r*1.8+warp*4.0); f=f*0.5+0.5;",
      " vec3 wine=vec3(0.46,0.16,0.24);",
      " vec3 bronze=vec3(0.66,0.49,0.26);",
      " vec3 gold=vec3(0.99,0.84,0.52);",
      " vec3 col=mix(wine,bronze,smoothstep(0.12,0.62,f));",
      " col=mix(col,gold,smoothstep(0.5,0.92,length(r)*0.55));",
      " float lum=pow(f,1.65); col*=lum*1.95;",
      " float glow=exp(-md*4.0)*(0.55+uMouseV*1.2);",
      " col+=glow*gold*0.85;",
      " col+=vec3(0.03,0.025,0.028);",
      " float vig=smoothstep(1.4,0.2,distance(uv,vec2(0.5))); col*=mix(0.55,1.0,vig);",
      " gl_FragColor=vec4(col,1.0);",
      "}"
    ].join("\n");
    var vert=["varying vec2 vUv;","void main(){vUv=uv;gl_Position=vec4(position,1.0);}"].join("\n");
    scene.add(new THREE.Mesh(geo,new THREE.ShaderMaterial({uniforms:uniforms,vertexShader:vert,fragmentShader:frag})));
    function resize(){var w=window.innerWidth,h=window.innerHeight;renderer.setSize(w,h,false);uniforms.uRes.value.set(w,h);}
    window.addEventListener("resize",resize); resize();
    var tx=0.5,ty=0.5,cx=0.5,cy=0.5,vel=0,lastX=0.5,lastY=0.5;
    if(fine){window.addEventListener("pointermove",function(e){tx=e.clientX/window.innerWidth;ty=1.0-e.clientY/window.innerHeight;});}
    var start=performance.now();
    function loop(now){
      var t=(now-start)/1000;
      cx+=(tx-cx)*0.06; cy+=(ty-cy)*0.06;
      var dx=cx-lastX,dy=cy-lastY; var speed=Math.min(Math.sqrt(dx*dx+dy*dy)*18.0,1.0);
      vel+=(speed-vel)*0.1; lastX=cx; lastY=cy;
      uniforms.uMouse.value.set(cx,cy); uniforms.uMouseV.value=vel; uniforms.uTime.value=reduce?8.0:t;
      renderer.render(scene,camera); if(!reduce) requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }
  initGL();

  window.addEventListener("load",function(){setTimeout(function(){document.body.classList.add("is-loaded");},120);});
  if(document.readyState==="complete"){setTimeout(function(){document.body.classList.add("is-loaded");},120);}

  var nav=document.getElementById("nav");
  function onScroll(){ if(window.scrollY>40) nav.classList.add("scrolled"); else nav.classList.remove("scrolled"); }
  window.addEventListener("scroll",onScroll,{passive:true}); onScroll();

  var overlay=document.getElementById("overlay"),menuBtn=document.getElementById("menuBtn"),closeBtn=document.getElementById("closeBtn");
  function openMenu(){overlay.classList.add("open");overlay.setAttribute("aria-hidden","false");}
  function closeMenu(){overlay.classList.remove("open");overlay.setAttribute("aria-hidden","true");}
  menuBtn.addEventListener("click",openMenu); closeBtn.addEventListener("click",closeMenu);
  document.querySelectorAll(".ov-link").forEach(function(a){a.addEventListener("click",closeMenu);});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")closeMenu();});

  if("IntersectionObserver" in window && !reduce){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){en.target.classList.add("in-view");io.unobserve(en.target);} });
    },{threshold:0.16,rootMargin:"0px 0px -8% 0px"});
    document.querySelectorAll(".reveal").forEach(function(el){io.observe(el);});
  } else {
    document.querySelectorAll(".reveal").forEach(function(el){el.classList.add("in-view");});
  }

  document.querySelectorAll(".faq-item").forEach(function(item){
    item.querySelector(".faq-q").addEventListener("click",function(){ item.classList.toggle("open"); });
  });

  var anfragen=document.getElementById("anfragenBtn");
  if(anfragen){
    anfragen.addEventListener("click",function(){
      var v=(document.getElementById("emailInput").value||"").trim();
      var subject=encodeURIComponent("Velvet Check Anfrage");
      var body=v?("&body="+encodeURIComponent("Meine E-Mail: "+v+"\n\nIch interessiere mich für einen Velvet Check.")):"";
      window.location.href="mailto:hello@velvetcheck.de?subject="+subject+body;
    });
  }

  if(fine && !reduce){
    var dot=document.getElementById("curDot"),ring=document.getElementById("curRing");
    var mx=window.innerWidth/2,my=window.innerHeight/2,rx=mx,ry=my;
    window.addEventListener("pointermove",function(e){mx=e.clientX;my=e.clientY;dot.style.transform="translate("+mx+"px,"+my+"px) translate(-50%,-50%)";});
    (function cur(){ rx+=(mx-rx)*0.18; ry+=(my-ry)*0.18; ring.style.transform="translate("+rx+"px,"+ry+"px) translate(-50%,-50%)"; requestAnimationFrame(cur); })();
    document.querySelectorAll("[data-cursor]").forEach(function(el){
      el.addEventListener("mouseenter",function(){ring.classList.add("hover");});
      el.addEventListener("mouseleave",function(){ring.classList.remove("hover");});
    });
  }
})();
