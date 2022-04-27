setTimeout(letDance, 1000);
var bgmSrc =
  'https://nd002723.github.io/carnival/audio/Martin%20Jensen%20-%20Fox%20(Loop%20Remix).mp3';
var cssHref = 'https://nd002723.github.io/carnival/css/high.css';
function letDance() {
  function loadCss() {
    var myCss = document.createElement('link');
    myCss.setAttribute('type', 'text/css');
    myCss.setAttribute('rel', 'stylesheet');
    myCss.setAttribute('href', cssHref); 
    myCss.setAttribute('class', l);
    document.body.appendChild(myCss);
  }

  function h() {
    var e = document.getElementsByClassName(l);
    for (var t = 0; t < e.length; t++) {
      document.body.removeChild(e[t]);
    }
  }

  function p() {
    var e = document.createElement('div');
    e.setAttribute('class', a);
    document.body.appendChild(e);
    setTimeout(function () {
      document.body.removeChild(e);
    }, 100);
  }

  function getSize(e) {
    
    return {
      height: e.offsetHeight,
      width: e.offsetWidth,
    };
  }

  function checkSize(i) {
    
    var s = getSize(i); 
    return (
      s.height > minHeight &&
      s.height < maxHeight &&
      s.width > minWidth &&
      s.width < maxWidth
    ); 
  }

  function m(e) {
    var t = e;
    var n = 0;
    while (!!t) {
      n += t.offsetTop;
      t = t.offsetParent;
    }
    return n;
  }

  function g() {
    var e = document.documentElement;
    if (!!window.innerWidth) {
      return window.innerHeight;
    } else if (e && !isNaN(e.clientHeight)) {
      return e.clientHeight;
    }
    return 0;
  }

  function y() {
    if (window.pageYOffset) {
      return window.pageYOffset;
    }
    return Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
  }

  function E(e) {
    var t = m(e);
    return t >= w && t <= b + w;
  }

  function setBgm() {
   
    var e = document.createElement('audio');
    e.setAttribute('class', l);
    e.src = bgmSrc; 
    e.loop = false;
    e.addEventListener(
      'canplay',
      function () {
        setTimeout(function () {
          x(k);
        }, 500);
        setTimeout(function () {
          N();
          p();
          for (var e = 0; e < O.length; e++) {
            T(O[e]);
          }
        }, 15500);
      },
      true
    );
    e.addEventListener(
      'ended',
      function () {
        N();
        h();
      },
      true
    );
    e.innerHTML =
      ' <p>当前浏览器不支持音频，请升级你的浏览器</p> <p>';
    document.body.appendChild(e);
    e.play();
  }

  function x(e) {
    e.className += ' ' + s + ' ' + o;
  }

  function T(e) {
    e.className += ' ' + s + ' ' + u[Math.floor(Math.random() * u.length)];
  }

  function N() {
    var e = document.getElementsByClassName(s);
    var t = new RegExp('\\b' + s + '\\b');
    for (var n = 0; n < e.length; ) {
      e[n].className = e[n].className.replace(t, '');
    }
  }
  var minHeight = 3; 
  var minWidth = 3; 
  var maxHeight = 800; 
  var maxWidth = 1400; 
  var s = 'mw-harlem_shake_me';
  var o = 'im_first';
  var u = ['im_drunk', 'im_baked', 'im_trippin', 'im_blown'];
  var a = 'mw-strobe_light';
  var l = 'mw_added_css'; 
  var b = g();
  var w = y();
  var C = document.getElementsByTagName('*');
  var k = null;
  for (var L = 0; L < C.length; L++) {
    var targetDiv = C[L];
    if (checkSize(targetDiv)) {
      if (E(targetDiv)) {
        k = targetDiv;
        break;
      }
    }
  }
  if (targetDiv === null) {
    console.warn('没能找到合适的大小. 换一个页面试试？.');
    return;
  }

  loadCss(); 
  setBgm(); 

  var O = [];
  for (var L = 0; L < C.length; L++) {
    var targetDiv = C[L];
    if (checkSize(targetDiv)) {
      O.push(targetDiv);
    }
  }

 
  var style = document.createElement('style');
  style.type = 'text/css';
  try {
    style.appendChild(
      document.createTextNode(
        'body{overflow-x:hidden;transform: rotate(1deg);-webkit-transform: rotate(1deg);-moz-transform: rotate(1deg);-o-transform: rotate(1deg);-ms-transform: rotate(1deg)}'
      )
    );
  } catch (ex) {
    style.styleSheet.cssText = 'body{background-color:red}'; 
  }
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
}
