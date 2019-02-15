!function(t,e,n,o){"use strict";function i(t,e){var o,i,a=[],s=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=t&&t.data?t.data.options:e||{},o=e.$target||n(t.currentTarget),i=o.attr("data-fancybox")||"",i?(a=e.selector?n(e.selector):t.data?t.data.items:[],a=a.length?a.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]'),s=a.index(o),s<0&&(s=0)):a=[o],n.fancybox.open(a,e,s))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={loop:!1,gutter:50,keyboard:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg viewBox="0 0 40 40"><path d="M13,16 L20,23 L27,16 M20,7 L20,23 M10,24 L10,28 L30,28 L30,24" /></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M18,17 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0 M24,22 L31,29" /></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"><svg viewBox="0 0 32 32"><path d="M10,10 L22,22 M22,10 L10,22"></path></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M18,12 L10,20 L18,28 M10,20 L30,20"></path></svg></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 M22,12 L30,20 L22,28"></path></svg></button>'},parentEl:"body",autoFocus:!1,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Maßstab"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){var t,n=e.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(n.style[t]!==o)return i[t];return"transitionend"}(),f=function(t){return t&&t.length&&t[0].offsetHeight},p=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},h=function(t,o,i){var a=this;a.opts=p({index:i},n.fancybox.defaults),n.isPlainObject(o)&&(a.opts=p(a.opts,o)),n.fancybox.isMobile&&(a.opts=p(a.opts,a.opts.mobile)),a.id=a.opts.id||++c,a.currIndex=parseInt(a.opts.index,10)||0,a.prevIndex=null,a.prevPos=null,a.currPos=0,a.firstRun=!0,a.group=[],a.slides={},a.addContent(t),a.group.length&&(a.$lastFocus=n(e.activeElement).trigger("blur"),a.init())};n.extend(h.prototype,{init:function(){var i,a,s,r=this,c=r.group[r.currIndex],l=c.opts,d=n.fancybox.scrollbarWidth;n.fancybox.getInstance()||l.hideScrollbar===!1||(n("body").addClass("fancybox-active"),!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(d===o&&(i=n('<div style="width:100px;height:100px;overflow:scroll;" />').appendTo("body"),d=n.fancybox.scrollbarWidth=i[0].offsetWidth-i[0].clientWidth,i.remove()),n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+d+"px; }</style>"),n("body").addClass("compensate-for-scrollbar"))),s="",n.each(l.buttons,function(t,e){s+=l.btnTpl[e]||""}),a=n(r.translate(r,l.baseTpl.replace("{{buttons}}",s).replace("{{arrows}}",l.btnTpl.arrowLeft+l.btnTpl.arrowRight))).attr("id","fancybox-container-"+r.id).addClass("fancybox-is-hidden").addClass(l.baseClass).data("FancyBox",r).appendTo(l.parentEl),r.$refs={container:a},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){r.$refs[t]=a.find(".fancybox-"+t)}),r.trigger("onInit"),r.activate(),r.jumpTo(r.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=n[e];return i===o?t:i})},addContent:function(t){var e,i=this,a=n.makeArray(t);n.each(a,function(t,e){var a,s,r,c,l,d={},u={};n.isPlainObject(e)?(d=e,u=e.opts||e):"object"===n.type(e)&&n(e).length?(a=n(e),u=a.data()||{},u=n.extend(!0,{},u,u.options),u.$orig=a,d.src=i.opts.src||u.src||a.attr("href"),d.type||d.src||(d.type="inline",d.src=e)):d={type:"html",src:e+""},d.opts=n.extend(!0,{},i.opts,u),n.isArray(u.buttons)&&(d.opts.buttons=u.buttons),s=d.type||d.opts.type,c=d.src||"",!s&&c&&((r=c.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))?(s="video",d.opts.videoFormat||(d.opts.videoFormat="video/"+("ogv"===r[1]?"ogg":r[1]))):c.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":c.match(/\.(pdf)((\?|#).*)?$/i)?s="iframe":"#"===c.charAt(0)&&(s="inline")),s?d.type=s:i.trigger("objectNeedsType",d),d.contentType||(d.contentType=n.inArray(d.type,["html","inline","ajax"])>-1?"html":d.type),d.index=i.group.length,"auto"==d.opts.smallBtn&&(d.opts.smallBtn=n.inArray(d.type,["html","inline","ajax"])>-1),"auto"===d.opts.toolbar&&(d.opts.toolbar=!d.opts.smallBtn),d.opts.$trigger&&d.index===i.opts.index&&(d.opts.$thumb=d.opts.$trigger.find("img:first")),d.opts.$thumb&&d.opts.$thumb.length||!d.opts.$orig||(d.opts.$thumb=d.opts.$orig.find("img:first")),"function"===n.type(d.opts.caption)&&(d.opts.caption=d.opts.caption.apply(e,[i,d])),"function"===n.type(i.opts.caption)&&(d.opts.caption=i.opts.caption.apply(e,[i,d])),d.opts.caption instanceof n||(d.opts.caption=d.opts.caption===o?"":d.opts.caption+""),"ajax"===d.type&&(l=c.split(/\s+/,2),l.length>1&&(d.src=l.shift(),d.opts.filter=l.shift())),d.opts.modal&&(d.opts=n.extend(!0,d.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),i.group.push(d)}),Object.keys(i.slides).length&&(i.updateControls(),e=i.Thumbs,e&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}).on("click.fb","[data-fancybox-zoom]",function(t){o[o.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?d(function(){o.update()}):(o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update()},n.fancybox.isMobile?600:250))}),r.on("focusin.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null;o.isClosing||!o.current||!o.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||o&&"fixed"!==n(t.target).css("position")&&!o.$refs.container.has(t.target).length&&(t.stopPropagation(),o.focus())}),r.on("keydown.fb",function(t){var e=o.current,i=t.keyCode||t.which;if(e&&e.opts.keyboard&&!(t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input")||n(t.target).is("textarea")))return 8===i||27===i?(t.preventDefault(),void o.close(t)):37===i||38===i?(t.preventDefault(),void o.previous()):39===i||40===i?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,i)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=t.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&!o.isDragging&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var i,a,s,r,c,l,d,u=this,p=u.group.length;if(!(u.isDragging||u.isClosing||u.isAnimating&&u.firstRun)){if(t=parseInt(t,10),a=u.current?u.current.opts.loop:u.opts.loop,!a&&(t<0||t>=p))return!1;if(i=u.firstRun=!Object.keys(u.slides).length,!(p<2&&!i&&u.isDragging)){if(r=u.current,u.prevIndex=u.currIndex,u.prevPos=u.currPos,s=u.createSlide(t),p>1&&((a||s.index>0)&&u.createSlide(t-1),(a||s.index<p-1)&&u.createSlide(t+1)),u.current=s,u.currIndex=s.index,u.currPos=s.pos,u.trigger("beforeShow",i),u.updateControls(),l=n.fancybox.getTranslate(s.$slide),s.isMoved=(0!==l.left||0!==l.top)&&!s.$slide.hasClass("fancybox-animated"),s.forcedDuration=o,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[i?"animationDuration":"transitionDuration"],e=parseInt(e,10),i)return s.opts.animationEffect&&e&&u.$refs.container.css("transition-duration",e+"ms"),u.$refs.container.removeClass("fancybox-is-hidden"),f(u.$refs.container),u.$refs.container.addClass("fancybox-is-open"),f(u.$refs.container),s.$slide.addClass("fancybox-slide--previous"),u.loadSlide(s),s.$slide.removeClass("fancybox-slide--previous").addClass("fancybox-slide--current"),void u.preload("image");n.each(u.slides,function(t,e){n.fancybox.stop(e.$slide)}),s.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),s.isMoved?(c=Math.round(s.$slide.width()),n.each(u.slides,function(t,o){var i=o.pos-s.pos;n.fancybox.animate(o.$slide,{top:0,left:i*c+i*o.opts.gutter},e,function(){o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===u.currPos&&(s.isMoved=!1,u.complete())})})):u.$refs.stage.children().removeAttr("style"),s.isLoaded?u.revealContent(s):u.loadSlide(s),u.preload("image"),r.pos!==s.pos&&(d="fancybox-slide--"+(r.pos>s.pos?"next":"previous"),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),r.isComplete=!1,e&&(s.isMoved||s.opts.transitionEffect)&&(s.isMoved?r.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+s.opts.transitionEffect,n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeAttr("style")}))))}}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,i){var a,s,r,c,l,d=this,u=d.current,f=u.$content,p=n.fancybox.getTranslate(u.$slide).width,h=n.fancybox.getTranslate(u.$slide).height,g=u.width,b=u.height;!d.isAnimating&&f&&"image"==u.type&&u.isLoaded&&!u.hasError&&(n.fancybox.stop(f),d.isAnimating=!0,t=t===o?.5*p:t,e=e===o?.5*h:e,a=n.fancybox.getTranslate(f),a.top-=n.fancybox.getTranslate(u.$slide).top,a.left-=n.fancybox.getTranslate(u.$slide).left,c=g/a.width,l=b/a.height,s=.5*p-.5*g,r=.5*h-.5*b,g>p&&(s=a.left*c-(t*c-t),s>0&&(s=0),s<p-g&&(s=p-g)),b>h&&(r=a.top*l-(e*l-e),r>0&&(r=0),r<h-b&&(r=h-b)),d.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},i||330,function(){d.isAnimating=!1}),d.SlideShow&&d.SlideShow.isActive&&d.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;!o.isAnimating&&a&&"image"==i.type&&i.isLoaded&&!i.hasError&&(n.fancybox.stop(a),o.isAnimating=!0,e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,n,o,i,a,s=this,r=t.$content,c=t.width||t.opts.width,l=t.height||t.opts.height,d={};return!!(t.isLoaded&&r&&r.length)&&(i={top:parseInt(t.$slide.css("paddingTop"),10),right:parseInt(t.$slide.css("paddingRight"),10),bottom:parseInt(t.$slide.css("paddingBottom"),10),left:parseInt(t.$slide.css("paddingLeft"),10)},e=parseInt(s.$refs.stage.width(),10)-(i.left+i.right),n=parseInt(s.$refs.stage.height(),10)-(i.top+i.bottom),c&&l||(c=e,l=n),o=Math.min(1,e/c,n/l),c=Math.floor(o*c),l=Math.floor(o*l),"image"===t.type?(d.top=Math.floor(.5*(n-l))+i.top,d.left=Math.floor(.5*(e-c))+i.left):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?c/l:t.opts.ratio||16/9,l>c/a?l=c/a:c>l*a&&(c=l*a)),d.width=c,d.height=l,d)},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height;i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),t.$slide.trigger("refresh"),o.$refs.toolbar.toggleClass("compensate-for-scrollbar",t.$slide.get(0).scrollHeight>t.$slide.get(0).clientHeight),o.trigger("onUpdate",t)},centerSlide:function(t,e){var i,a,s=this;s.current&&(i=Math.round(t.$slide.width()),a=t.pos-s.current.pos,n.fancybox.animate(t.$slide,{top:0,left:a*i+a*t.opts.gutter,opacity:1},e===o?0:e,null,!1))},updateCursor:function(t,e){var o,i=this,a=i.current,s=i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");a&&!i.isClosing&&(o=i.isZoomable(),s.toggleClass("fancybox-is-zoomable",o),n("[data-fancybox-zoom]").prop("disabled",!o),o&&("zoom"===a.opts.clickContent||n.isFunction(a.opts.clickContent)&&"zoom"===a.opts.clickContent(a))?i.isScaledDown(t,e)?s.addClass("fancybox-can-zoomIn"):a.opts.touch?s.addClass("fancybox-can-drag"):s.addClass("fancybox-can-zoomOut"):a.opts.touch&&"video"!==a.contentType&&s.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if(t=e.getFitPos(n),n.width>t.width||n.height>t.height)return!0}return!1},isScaledDown:function(t,e){var i=this,a=!1,s=i.current,r=s.$content;return t!==o&&e!==o?a=t<s.width&&e<s.height:r&&(a=n.fancybox.getTranslate(r),a=a.width<s.width&&a.height<s.height),a},canPan:function(){var t,e=this,n=!1,o=e.current;return"image"===o.type&&(t=o.$content)&&!o.hasError&&(n=e.getFitPos(o),n=Math.abs(t.width()-n.width)>1||Math.abs(t.height()-n.height)>1),n},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,a.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,'<video class="fancybox-video" controls controlsList="nodownload"><source src="'+t.src+'" type="'+t.opts.videoFormat+"\">Your browser doesn't support HTML5 video</video");break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(e){var o,i,a,s,r,c=this,l=e.opts.srcset||e.opts.image.srcset;if(e.timouts=setTimeout(function(){var t=e.$image;!e.isLoading||t&&t[0].complete||e.hasError||c.showLoading(e)},350),l){s=t.devicePixelRatio||1,r=t.innerWidth*s,a=l.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),a.sort(function(t,e){return t.value-e.value});for(var d=0;d<a.length;d++){var u=a[d];if("w"===u.postfix&&u.value>=r||"x"===u.postfix&&u.value>=s){i=u;break}}!i&&a.length&&(i=a[a.length-1]),i&&(e.src=i.url,e.width&&e.height&&"w"==i.postfix&&(e.height=e.width/e.height*i.value,e.width=i.value),e.opts.srcset=l)}e.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")),o=e.opts.thumb||!(!e.opts.$thumb||!e.opts.$thumb.length)&&e.opts.$thumb.attr("src"),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&o&&(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null}).one("load",function(){c.afterLoad(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",o)),c.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){var n;t.$ghost||(e.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),e.afterLoad(t)),t.timouts&&(clearTimeout(t.timouts),t.timouts=null),e.isClosing||(t.opts.srcset&&(n=t.opts.sizes,n&&"auto"!==n||(n=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),o.attr("sizes",n).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!e.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),e.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(o[0].complete||"complete"==o[0].readyState)&&o[0].naturalWidth&&o[0].naturalHeight?o.trigger("load"):o[0].error&&o.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,i=this,a=t.opts.iframe,s=t.$slide;t.$content=n('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(s),s.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(a.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(a.attr).appendTo(t.$content),a.preload?(i.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),s.on("refresh.fb",function(){var n,i,s=t.$content,r=a.css.width,c=a.css.height;if(1===e[0].isReady){try{n=e.contents(),i=n.find("body")}catch(t){}i&&i.length&&i.children().length&&(s.css({width:"",height:""}),r===o&&(r=Math.ceil(Math.max(i[0].clientWidth,i.outerWidth(!0)))),r&&s.width(r),c===o&&(c=Math.ceil(Math.max(i[0].clientHeight,i.outerHeight(!0)))),c&&s.height(c)),s.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),s.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?(e.parent().parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio").first().addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.pos===e.currPos&&e.updateCursor(),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).prependTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,i,a,s,r=this,c=t.$slide,l=!1,d=!1;return e=t.opts[r.firstRun?"animationEffect":"transitionEffect"],a=t.opts[r.firstRun?"animationDuration":"transitionDuration"],a=parseInt(t.forcedDuration===o?a:t.forcedDuration,10),t.pos===r.currPos&&(t.isComplete?e=!1:r.isAnimating=!0),!t.isMoved&&t.pos===r.currPos&&a||(e=!1),"zoom"===e&&(t.pos===r.currPos&&a&&"image"===t.type&&!t.hasError&&(d=r.getThumbPos(t))?l=r.getFitPos(t):e="fade"),"zoom"===e?(l.scaleX=l.width/d.width,l.scaleY=l.height/d.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-d.width/d.height)>.1),s&&(d.opacity=.1,l.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),d),f(t.$content),void n.fancybox.animate(t.$content,l,a,function(){r.isAnimating=!1,r.complete()})):(r.updateSlide(t),e?(n.fancybox.stop(c),i="fancybox-animated fancybox-slide--"+(t.pos>=r.prevPos?"next":"previous")+" fancybox-fx-"+e,c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),t.$content.removeClass("fancybox-is-hidden"),f(c),void n.fancybox.animate(c,"fancybox-slide--current",a,function(e){c.removeClass(i).removeAttr("style"),t.pos===r.currPos&&r.complete()},!0)):(f(c),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===r.currPos&&r.complete())))},getThumbPos:function(o){var i,a=this,s=!1,r=o.opts.$thumb,c=r&&r.length&&r[0].ownerDocument===e?r.offset():0,l=function(e){for(var o,i=e[0],a=i.getBoundingClientRect(),s=[];null!==i.parentElement;)"hidden"!==n(i.parentElement).css("overflow")&&"auto"!==n(i.parentElement).css("overflow")||s.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return o=s.every(function(t){var e=Math.min(a.right,t.right)-Math.max(a.left,t.left),n=Math.min(a.bottom,t.bottom)-Math.max(a.top,t.top);return e>0&&n>0}),o&&a.bottom>0&&a.right>0&&a.left<n(t).width()&&a.top<n(t).height()};return c&&l(r)&&(i=a.$refs.stage.offset(),s={top:c.top-i.top+parseFloat(r.css("border-top-width")||0),left:c.left-i.left+parseFloat(r.css("border-left-width")||0),width:r.width(),height:r.height(),scaleX:1,scaleY:1}),s},complete:function(){var t=this,o=t.current,i={};!o.isMoved&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),t.preload("inline"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,o){o.pos>=t.currPos-1&&o.pos<=t.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),t.slides=i),t.isAnimating=!1,t.updateCursor(),t.trigger("afterShow"),o.$slide.find("video,audio").filter(":visible:first").trigger("play"),(n(e.activeElement).is("[disabled]")||o.opts.autoFocus&&"image"!=o.type&&"iframe"!==o.type)&&t.focus())},preload:function(t){var e=this,n=e.slides[e.currPos+1],o=e.slides[e.currPos-1];n&&n.type===t&&e.loadSlide(n),o&&o.type===t&&e.loadSlide(o)},focus:function(){var t,e=this.current;this.isClosing||e&&e.isComplete&&e.$content&&(t=e.$content.find("input[autofocus]:enabled:visible:first"),t.length||(t=e.$content.find("button,:input,[tabindex],a").filter(":enabled:visible:first")),t=t&&t.length?t:e.$content,t.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,p=this,h=p.current,g=function(){p.cleanUp(t)};return!p.isClosing&&(p.isClosing=!0,p.trigger("beforeClose",t)===!1?(p.isClosing=!1,d(function(){p.update()}),!1):(p.removeEvents(),h.timouts&&clearTimeout(h.timouts),a=h.$content,o=h.opts.animationEffect,i=n.isNumeric(e)?e:o?h.opts.animationDuration:0,h.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),h.$slide.siblings().trigger("onReset").remove(),i&&p.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),p.hideLoading(h),p.hideControls(),p.updateCursor(),"zoom"!==o||t!==!0&&a&&i&&"image"===h.type&&!h.hasError&&(l=p.getThumbPos(h))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=h.opts.zoomOpacity,"auto"==r&&(r=Math.abs(h.width/h.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),f(a),n.fancybox.animate(a,l,i,g),!0):(o&&i?t===!0?setTimeout(g,i):n.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,i,g):g(),!0)))},cleanUp:function(t){var e,o=this,i=n("body");o.current.$slide.trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",t),o.$lastFocus&&o.current.opts.backFocus&&o.$lastFocus.trigger("focus"),o.current=null,e=n.fancybox.getInstance(),e?e.activate():(i.removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;return s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),o===!1?o:void("afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i))},updateControls:function(t){var e=this,n=e.current,o=n.index,i=n.opts.caption,a=e.$refs.container,s=e.$refs.caption;n.$slide.trigger("refresh"),e.$caption=i&&i.length?s.html(i):null,e.isHiddenControls||e.isIdle||e.showControls(),a.find("[data-fancybox-count]").html(e.group.length),a.find("[data-fancybox-index]").html(o+1),a.find("[data-fancybox-prev]").toggleClass("disabled",!n.opts.loop&&o<=0),a.find("[data-fancybox-next]").toggleClass("disabled",!n.opts.loop&&o>=e.group.length-1),"image"===n.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",n.opts.image.src||n.src).show():n.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.3.5",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof h&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new h(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",i={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(i.transform=n),e.opacity!==o&&(i.opacity=e.opacity),e.width!==o&&(i.width=e.width),e.height!==o&&(i.height=e.height),t.css(i)},animate:function(t,e,i,a,s){var r=!1;n.isFunction(i)&&(a=i,i=null),n.isPlainObject(e)||t.removeAttr("style"),n.fancybox.stop(t),t.on(u,function(o){(!o||!o.originalEvent||t.is(o.originalEvent.target)&&"z-index"!=o.originalEvent.propertyName)&&(n.fancybox.stop(t),r&&n.fancybox.setTranslate(t,r),
n.isPlainObject(e)?s===!1&&t.removeAttr("style"):s!==!0&&t.removeClass(e),n.isFunction(a)&&a(o))}),n.isNumeric(i)&&t.css("transition-duration",i+"ms"),n.isPlainObject(e)?(e.scaleX!==o&&e.scaleY!==o&&(r=n.extend({},e,{width:t.width()*e.scaleX,height:t.height()*e.scaleY,scaleX:1,scaleY:1}),delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger("transitionend")},i+16))},stop:function(t){t&&t.length&&(clearTimeout(t.data("timer")),t.off("transitionend").css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-trigger]",function(t){i(t,{$target:n('[data-fancybox="'+n(t.currentTarget).attr("data-trigger")+'"]').eq(n(t.currentTarget).attr("data-index")||0),$trigger:n(this)})})}}(window,document,window.jQuery||jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},n,a.opts.media),t.each(s,function(n,o){if(c=p.match(o.matcher)){if(h=o.type,f=n,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[n],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):e(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):e(o.thumb,c),"youtube"===n?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===n&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)})}(window.jQuery||jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){this.$container.off(".fb.touch")},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$content,p="touchstart"==o.type;if(p&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||d.isClosing)return o.stopPropagation(),void o.preventDefault();if(i.realPoints=i.startPoints=a(o),i.startPoints.length){if(o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=f,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(u.$slide[0].clientWidth),i.canvasHeight=Math.round(u.$slide[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=i.sliderLastPos||n.fancybox.getTranslate(u.$slide),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(p?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(p?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),!i.opts&&!d.canPan()||!c.is(i.$stage)&&!i.$stage.find(c).length)return void(c.is(".fancybox-image")&&o.preventDefault());n.fancybox.isMobile&&(l(c)||l(c.parent()))||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.instance.canPan()?(n.fancybox.stop(i.$content),i.$content.css("transition-duration",""),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-controls--isGrabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.$content.css("transition-duration",""),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))}}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this,o=n(t.target);return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling||!o.is(e.$stage)&&!e.$stage.find(o).length?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.instance.canPan())&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&e.isSwiping===!0||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.isSwiping,c=s.sliderStartPos.left||0;if(r!==!0)"x"==r&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?c+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?c-=Math.pow(-s.distanceX,.8):c+=s.distanceX),s.sliderLastPos={top:"x"==r?0:s.sliderStartPos.top+s.distanceY,left:c},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,s.instance.group.length<2&&s.opts.vertical?s.isSwiping="y":s.instance.isDragging||s.opts.vertical===!1||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),s.canTap=!1,"y"===s.isSwiping&&n.fancybox.isMobile&&(l(s.$target)||l(s.$target.parent())))return void(s.isScrolling=!0);s.instance.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(s.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration",""),e.inTransition=!1,e.pos===s.instance.current.pos&&(s.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left-n.fancybox.getTranslate(s.instance.$refs.stage).left)}),s.instance.SlideShow&&s.instance.SlideShow.isActive&&s.instance.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;return s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5)?void(t.startPoints=t.newPoints):(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&(i(t.requestId),t.requestId=null),void(t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})))},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),y=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),v=m-e.centerPointStartX,x=y-e.centerPointStartY,w=l+(g+v),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&(i(e.requestId),e.requestId=null),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=Math.max((new Date).getTime()-o.startTime,1),r=o.isSwiping,c=o.isPanning,l=o.isZooming,d=o.isScrolling;return o.endPoints=a(t),o.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap?o.onTap(t):(o.speed=366,o.velocityX=o.distanceX/s*.5,o.velocityY=o.distanceY/s*.5,o.speedX=Math.max(.5*o.speed,Math.min(1.5*o.speed,1/Math.abs(o.velocityX)*o.speed)),void(c?o.endPanning():l?o.endZooming():o.endSwiping(r,d)))},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length;o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,200)):"x"==t&&o.distanceX>50&&a>1?i=o.instance.previous(o.speedX):"x"==t&&o.distanceX<-50&&a>1&&(i=o.instance.next(o.speedX)),i!==!1||"x"!=t&&"y"!=t||(e||a<2?o.instance.centerSlide(o.instance.current,150):o.instance.jumpTo(o.instance.current.index)),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(i.opts.momentum===!1?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+i.velocityX*i.speed,e=i.contentLastPos.top+i.velocityY*i.speed),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,330))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.setTranslate(a.$content,n.fancybox.getTranslate(a.$content)),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls(!0);break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))})}(window,document,window.jQuery||jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'},slideShow:{autoStart:!1,speed:3e3}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(t){var e=this;e.instance&&e.instance.current&&(t===!0||e.instance.current.opts.loop||e.instance.currIndex<e.instance.group.length-1)?e.timer=setTimeout(function(){e.isActive&&e.instance.jumpTo((e.instance.currIndex+1)%e.instance.group.length)},e.instance.current.opts.slideShow.speed):(e.stop(),e.instance.idleSecondsCounter=0,e.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;e&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.set(!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,window.jQuery||jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(!n)return void(e&&e.fancybox&&(e.fancybox.defaults.btnTpl.fullScreen=!1));var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 v16 h22 v-16 h-22 v8" /></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on({"onInit.fb":function(t,e){var n;e&&e.group[e.currIndex].opts.fullScreen?(n=e.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.current.$content.css("transition","none"),n.isAnimating=!1,n.update(!0,!0,0)),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t))})}(document,window.jQuery||jQuery),function(t,e){"use strict";var n="fancybox-thumbs",o=n+"-active",i=n+"-loading";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var a=function(t){this.init(t)};e.extend(a.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e,n,o=this;o.instance=t,t.Thumbs=o,o.opts=t.group[t.currIndex].opts.thumbs,e=t.group[0],e=e.opts.thumb||!(!e.opts.$thumb||!e.opts.$thumb.length)&&e.opts.$thumb.attr("src"),t.group.length>1&&(n=t.group[1],n=n.opts.thumb||!(!n.opts.$thumb||!n.opts.$thumb.length)&&n.opts.$thumb.attr("src")),o.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]"),o.opts&&e&&n&&e&&n?(o.$button.show().on("click",function(){o.toggle()}),o.isActive=!0):o.$button.hide()},create:function(){var t,o=this,a=o.instance,s=o.opts.parentEl,r=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(a.$refs.container.find(s).addBack().filter(s)),o.$grid.on("click","li",function(){a.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e("<ul>").appendTo(o.$grid)),e.each(a.group,function(e,n){t=n.opts.thumb||(n.opts.$thumb?n.opts.$thumb.attr("src"):null),t||"image"!==n.type||(t=n.src),r.push('<li data-index="'+e+'" tabindex="0" class="'+i+'"'+(t&&t.length?' style="background-image:url('+t+')" />':"")+"></li>")}),o.$list[0].innerHTML=r.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+a.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,i=this,a=i.$list,s=i.$grid;i.instance.current&&(e=a.children().removeClass(o).filter('[data-index="'+i.instance.current.index+'"]').addClass(o),n=e.position(),"y"===i.opts.axis&&(n.top<0||n.top>a.height()-e.outerHeight())?a.stop().animate({scrollTop:a.scrollTop()+n.top},t):"x"===i.opts.axis&&(n.left<s.scrollLeft()||n.left>s.scrollLeft()+(s.width()-e.outerWidth()))&&a.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new a(e),n.isActive&&n.opts.autoStart===!0&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&n.opts.hideOnClose!==!1&&n.$grid.hide()}})}(document,window.jQuery||jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__links a").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})}}}))})}(document,window.jQuery||jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:t,index:o<1?1:o,gallery:i}}function i(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).trigger("click.fb-start"))}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,n=e.hash||(e.$orig?e.$orig.data("fancybox"):""),""!==n&&n)}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)}),n(function(){n.fancybox.defaults.hash!==!1&&(n(t).on({"onInit.fb":function(t,e){var n,i;e.group[e.currIndex].opts.hash!==!1&&(n=o(),i=a(e),i&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&i.opts.hash!==!1&&(r=a(o),r&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),e.location.hash!=="#"+o.currentHash&&(o.origHash||(o.origHash=e.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in e.history?(e.history[s?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):e.location.hash=o.currentHash,o.hashTimer=null},300))))},"beforeClose.fb":function(n,o,i){var s;i.opts.hash!==!1&&(s=a(o),o.currentHash&&o.hasCreatedHistory?e.history.back():o.currentHash&&("replaceState"in e.history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+(o.origHash||"")):e.location.hash=o.origHash),o.currentHash=null,clearTimeout(o.hashTimer))}}),n(e).on("hashchange.fb",function(){var t,e=o();n.each(n(".fancybox-container").get().reverse(),function(e,o){var i=n(o).data("FancyBox");if(i.currentHash)return t=i,!1}),t?!t.currentHash||t.currentHash===e.gallery+"-"+e.index||1===e.index&&t.currentHash==e.gallery||(t.currentHash=null,t.close()):""!==e.gallery&&i(e)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(document,window,window.jQuery||jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||o.opts.wheel===!1||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,window.jQuery||jQuery);
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(l){var e=Array.prototype.slice,n=Array.prototype.splice,c={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:"",widthFromWrapper:!0,responsiveWidth:!1,zIndex:"inherit"},h=l(window),u=l(document),g=[],m=h.height(),t=function(){for(var t=h.scrollTop(),e=u.height(),i=e-m,n=i<t?i-t:0,r=0,s=g.length;r<s;r++){var o=g[r],c=o.stickyWrapper.offset().top-o.topSpacing-n;if(o.stickyWrapper.css("height",o.stickyElement.outerHeight()),t<=c)null!==o.currentTop&&(o.stickyElement.css({width:"",position:"",top:"","z-index":""}),o.stickyElement.parent().removeClass(o.className),o.stickyElement.trigger("sticky-end",[o]),o.currentTop=null);else{var p,a=e-o.stickyElement.outerHeight()-o.topSpacing-o.bottomSpacing-t-n;if(a<0?a+=o.topSpacing:a=o.topSpacing,o.currentTop!==a)o.getWidthFrom?(padding=o.stickyElement.innerWidth()-o.stickyElement.width(),p=l(o.getWidthFrom).width()-padding||null):o.widthFromWrapper&&(p=o.stickyWrapper.width()),null==p&&(p=o.stickyElement.width()),o.stickyElement.css("width",p).css("position","fixed").css("top",a).css("z-index",o.zIndex),o.stickyElement.parent().addClass(o.className),null===o.currentTop?o.stickyElement.trigger("sticky-start",[o]):o.stickyElement.trigger("sticky-update",[o]),o.currentTop===o.topSpacing&&o.currentTop>a||null===o.currentTop&&a<o.topSpacing?o.stickyElement.trigger("sticky-bottom-reached",[o]):null!==o.currentTop&&a===o.topSpacing&&o.currentTop<a&&o.stickyElement.trigger("sticky-bottom-unreached",[o]),o.currentTop=a;var d=o.stickyWrapper.parent();o.stickyElement.offset().top+o.stickyElement.outerHeight()>=d.offset().top+d.outerHeight()&&o.stickyElement.offset().top<=o.topSpacing?o.stickyElement.css("position","absolute").css("top","").css("bottom",0).css("z-index",""):o.stickyElement.css("position","fixed").css("top",a).css("bottom","").css("z-index",o.zIndex)}}},i=function(){m=h.height();for(var t=0,e=g.length;t<e;t++){var i=g[t],n=null;i.getWidthFrom?i.responsiveWidth&&(n=l(i.getWidthFrom).width()):i.widthFromWrapper&&(n=i.stickyWrapper.width()),null!=n&&i.stickyElement.css("width",n)}},p={init:function(o){return this.each(function(){var t=l.extend({},c,o),e=l(this),i=e.attr("id"),n=i?i+"-"+c.wrapperClassName:c.wrapperClassName,r=l("<div></div>").attr("id",n).addClass(t.wrapperClassName);e.wrapAll(function(){if(0==l(this).parent("#"+n).length)return r});var s=e.parent();t.center&&s.css({width:e.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"===e.css("float")&&e.css({float:"none"}).parent().css({float:"right"}),t.stickyElement=e,t.stickyWrapper=s,t.currentTop=null,g.push(t),p.setWrapperHeight(this),p.setupChangeListeners(this)})},setWrapperHeight:function(t){var e=l(t),i=e.parent();i&&i.css("height",e.outerHeight())},setupChangeListeners:function(e){window.MutationObserver?new window.MutationObserver(function(t){(t[0].addedNodes.length||t[0].removedNodes.length)&&p.setWrapperHeight(e)}).observe(e,{subtree:!0,childList:!0}):window.addEventListener?(e.addEventListener("DOMNodeInserted",function(){p.setWrapperHeight(e)},!1),e.addEventListener("DOMNodeRemoved",function(){p.setWrapperHeight(e)},!1)):window.attachEvent&&(e.attachEvent("onDOMNodeInserted",function(){p.setWrapperHeight(e)}),e.attachEvent("onDOMNodeRemoved",function(){p.setWrapperHeight(e)}))},update:t,unstick:function(t){return this.each(function(){for(var t=l(this),e=-1,i=g.length;0<i--;)g[i].stickyElement.get(0)===this&&(n.call(g,i,1),e=i);-1!==e&&(t.unwrap(),t.css({width:"",position:"",top:"",float:"","z-index":""}))})}};window.addEventListener?(window.addEventListener("scroll",t,!1),window.addEventListener("resize",i,!1)):window.attachEvent&&(window.attachEvent("onscroll",t),window.attachEvent("onresize",i)),l.fn.sticky=function(t){return p[t]?p[t].apply(this,e.call(arguments,1)):"object"!=typeof t&&t?void l.error("Method "+t+" does not exist on jQuery.sticky"):p.init.apply(this,arguments)},l.fn.unstick=function(t){return p[t]?p[t].apply(this,e.call(arguments,1)):"object"!=typeof t&&t?void l.error("Method "+t+" does not exist on jQuery.sticky"):p.unstick.apply(this,arguments)},l(function(){setTimeout(t,0)})});

// jQuery Mask Plugin v1.14.15
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp={scope:{},findInternal:function(a,l,d){a instanceof String&&(a=String(a));for(var p=a.length,h=0;h<p;h++){var b=a[h];if(l.call(d,b,h,a))return{i:h,v:b}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,l,d){if(d.get||d.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[l]=d.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,l,d,p){if(l){d=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var h=a[p];h in d||(d[h]={});d=d[h]}a=a[a.length-1];p=d[a];l=l(p);l!=p&&null!=l&&$jscomp.defineProperty(d,a,{configurable:!0,writable:!0,value:l})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,d){return $jscomp.findInternal(this,a,d).v}},"es6-impl","es3");
(function(a,l,d){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports?module.exports=a(require("jquery")):a(l||d)})(function(a){var l=function(b,e,f){var c={invalid:[],getCaret:function(){try{var a,r=0,g=b.get(0),e=document.selection,f=g.selectionStart;if(e&&-1===navigator.appVersion.indexOf("MSIE 10"))a=e.createRange(),a.moveStart("character",-c.val().length),r=a.text.length;else if(f||"0"===f)r=f;return r}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c,
g=b.get(0);g.setSelectionRange?g.setSelectionRange(a,a):(c=g.createTextRange(),c.collapse(!0),c.moveEnd("character",a),c.moveStart("character",a),c.select())}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){d===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){d=c.val()}).on("focus.mask",function(b){!0===f.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){f.clearIfNotMatch&&!h.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,f,n,d=0;d<e.length;d++)(b=m.translation[e.charAt(d)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),f=b.optional,
(b=b.recursive)?(a.push(e.charAt(d)),n={digit:e.charAt(d),pattern:c}):a.push(f||b?c+"?":c)):a.push(e.charAt(d).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");n&&(a=a.replace(new RegExp("("+n.digit+"(.*"+n.digit+")?)"),"($1)?").replace(new RegExp(n.digit,"g"),n.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
c=b}else c=b[c]();return c},calculateCaretPosition:function(){var a=b.data("mask-previus-value")||"",e=c.getMasked(),g=c.getCaret();if(a!==e){var f=b.data("mask-previus-caret-pos")||0,e=e.length,d=a.length,m=a=0,h=0,l=0,k;for(k=g;k<e&&c.maskDigitPosMap[k];k++)m++;for(k=g-1;0<=k&&c.maskDigitPosMap[k];k--)a++;for(k=g-1;0<=k;k--)c.maskDigitPosMap[k]&&h++;for(k=f-1;0<=k;k--)c.maskDigitPosMapOld[k]&&l++;g>d?g=10*e:f>=g&&f!==d?c.maskDigitPosMapOld[g]||(f=g,g=g-(l-h)-a,c.maskDigitPosMap[g]&&(g=f)):g>f&&
(g=g+(h-l)+m)}return g},behaviour:function(f){f=f||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,m.byPassKeys)){var e=c.getMasked(),g=c.getCaret();setTimeout(function(){c.setCaret(c.calculateCaretPosition())},a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(g);return c.callbacks(f)}},getMasked:function(a,b){var g=[],d=void 0===b?c.val():b+"",n=0,h=e.length,q=0,l=d.length,k=1,r="push",p=-1,t=0,y=[],v,z;f.reverse?(r="unshift",k=-1,v=0,n=h-1,q=l-1,z=function(){return-1<
n&&-1<q}):(v=h-1,z=function(){return n<h&&q<l});for(var A;z();){var x=e.charAt(n),w=d.charAt(q),u=m.translation[x];if(u)w.match(u.pattern)?(g[r](w),u.recursive&&(-1===p?p=n:n===v&&n!==p&&(n=p-k),v===p&&(n-=k)),n+=k):w===A?(t--,A=void 0):u.optional?(n+=k,q-=k):u.fallback?(g[r](u.fallback),n+=k,q-=k):c.invalid.push({p:q,v:w,e:u.pattern}),q+=k;else{if(!a)g[r](x);w===x?(y.push(q),q+=k):(A=x,y.push(q+t),t++);n+=k}}d=e.charAt(v);h!==l+1||m.translation[d]||g.push(d);g=g.join("");c.mapMaskdigitPositions(g,
y,l);return g},mapMaskdigitPositions:function(a,b,e){a=f.reverse?a.length-e:0;c.maskDigitPosMap={};for(e=0;e<b.length;e++)c.maskDigitPosMap[b[e]+a]=1},callbacks:function(a){var h=c.val(),g=h!==d,m=[h,a,b,f],q=function(a,b,c){"function"===typeof f[a]&&b&&f[a].apply(this,c)};q("onChange",!0===g,m);q("onKeyPress",!0===g,m);q("onComplete",h.length===e.length,m);q("onInvalid",0<c.invalid.length,[h,a,b,c.invalid,f])}};b=a(b);var m=this,d=c.val(),h;e="function"===typeof e?e(c.val(),void 0,b,f):e;m.mask=
e;m.options=f;m.remove=function(){var a=c.getCaret();m.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(m.getCleanVal());c.setCaret(a);return b};m.getCleanVal=function(){return c.getMasked(!0)};m.getMaskedVal=function(a){return c.getMasked(!1,a)};m.init=function(d){d=d||!1;f=f||{};m.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;m.byPassKeys=a.jMaskGlobals.byPassKeys;m.translation=a.extend({},a.jMaskGlobals.translation,f.translation);
m=a.extend(!0,{},m,f);h=c.getRegexMask();if(d)c.events(),c.val(c.getMasked());else{f.placeholder&&b.attr("placeholder",f.placeholder);b.data("mask")&&b.attr("autocomplete","off");d=0;for(var l=!0;d<e.length;d++){var g=m.translation[e.charAt(d)];if(g&&g.recursive){l=!1;break}}l&&b.attr("maxlength",e.length).data("mask-maxlength",!0);c.destroyEvents();c.events();d=c.getCaret();c.val(c.getMasked());c.setCaret(d)}};m.init(!b.is("input"))};a.maskWatchers={};var d=function(){var b=a(this),e={},f=b.attr("data-mask");
b.attr("data-mask-reverse")&&(e.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(e.selectOnFocus=!0);if(p(b,f,e))return b.data("mask",new l(this,f,e))},p=function(b,e,f){f=f||{};var c=a(b).data("mask"),d=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof e&&(e=e(b)),"object"!==typeof c||d(c.options)!==d(f)||c.mask!==e}catch(t){}},h=function(a){var b=document.createElement("div"),d;a="on"+a;d=a in b;d||(b.setAttribute(a,
"return;"),d="function"===typeof b[a]);return d};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,h=c.watchInterval,c=d.watchInputs||c.watchInputs,t=function(){if(p(this,b,d))return a(this).data("mask",new l(this,b,d))};a(this).each(t);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(t)},h));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(d)};h={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
h("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};h=a.jMaskGlobals=a.extend(!0,{},h,a.jMaskGlobals);h.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},h.watchInterval)},window.jQuery,window.Zepto);
var Favorites=function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=f.p+""+e+"."+_+".hot-update.js",t.appendChild(n)}function r(){return new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var n=new XMLHttpRequest,r=f.p+""+_+".hot-update.json";n.open("GET",r,!0),n.timeout=1e4,n.send(null)}catch(e){return t(e)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)t(new Error("Manifest request to "+r+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)t(new Error("Manifest request to "+r+" failed."));else{try{var o=JSON.parse(n.responseText)}catch(e){return void t(e)}e(o)}}})}function o(e){var t=k[e];if(!t)return f;var n=function(n){return t.hot.active?(k[n]?k[n].parents.indexOf(e)<0&&k[n].parents.push(e):(j=[e],h=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),j=[]),f(n)};for(var r in f)Object.prototype.hasOwnProperty.call(f,r)&&"e"!==r&&Object.defineProperty(n,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(t){f[e]=t}}}(r));return n.e=function(e){function t(){M--,"prepare"===O&&($[e]||u(e),0===M&&0===w&&l())}return"ready"===O&&i("prepare"),M++,f.e(e).then(t,function(e){throw t(),e})},n}function s(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:h!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:c,apply:p,status:function(e){if(!e)return O;I.push(e)},addStatusHandler:function(e){I.push(e)},removeStatusHandler:function(e){var t=I.indexOf(e);t>=0&&I.splice(t,1)},data:E[e]};return h=void 0,t}function i(e){O=e;for(var t=0;t<I.length;t++)I[t].call(null,e)}function a(e){return+e+""===e?+e:e}function c(e){if("idle"!==O)throw new Error("check() is only allowed in idle status");return b=e,i("check"),r().then(function(e){if(!e)return i("idle"),null;A={},$={},T=e.c,g=e.h,i("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});y={};return u(0),"prepare"===O&&0===M&&0===w&&l(),t})}function d(e,t){if(T[e]&&A[e]){A[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(y[n]=t[n]);0==--w&&0===M&&l()}}function u(e){T[e]?(A[e]=!0,w++,n(e)):$[e]=!0}function l(){i("ready");var e=m;if(m=null,e)if(b)p(b).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in y)Object.prototype.hasOwnProperty.call(y,n)&&t.push(a(n));e.resolve(t)}}function p(n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==O)throw new Error("apply() is only allowed in ready status");n=n||{};var o,s,c,d,u,l={},p=[],v={},h=function(){console.warn("[HMR] unexpected require("+b.moduleId+") to disposed module")};for(var m in y)if(Object.prototype.hasOwnProperty.call(y,m)){u=a(m);var b;b=y[m]?function(e){for(var t=[e],n={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var s=o.pop(),i=s.id,a=s.chain;if((d=k[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<d.parents.length;c++){var u=d.parents[c],l=k[u];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};t.indexOf(u)>=0||(l.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),r(n[u],[i])):(delete n[u],t.push(u),o.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(u):{type:"disposed",moduleId:m};var P=!1,I=!1,w=!1,M="";switch(b.chain&&(M="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(P=new Error("Aborted because of self decline: "+b.moduleId+M));break;case"declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+M));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(b),n.ignoreUnaccepted||(P=new Error("Aborted because "+u+" is not accepted"+M));break;case"accepted":n.onAccepted&&n.onAccepted(b),I=!0;break;case"disposed":n.onDisposed&&n.onDisposed(b),w=!0;break;default:throw new Error("Unexception type "+b.type)}if(P)return i("abort"),Promise.reject(P);if(I){v[u]=y[u],r(p,b.outdatedModules);for(u in b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,u)&&(l[u]||(l[u]=[]),r(l[u],b.outdatedDependencies[u]))}w&&(r(p,[b.moduleId]),v[u]=h)}var $=[];for(s=0;s<p.length;s++)u=p[s],k[u]&&k[u].hot._selfAccepted&&$.push({module:u,errorHandler:k[u].hot._selfAccepted});i("dispose"),Object.keys(T).forEach(function(e){!1===T[e]&&t(e)});for(var A,F=p.slice();F.length>0;)if(u=F.pop(),d=k[u]){var x={},D=d.hot._disposeHandlers;for(c=0;c<D.length;c++)(o=D[c])(x);for(E[u]=x,d.hot.active=!1,delete k[u],c=0;c<d.children.length;c++){var S=k[d.children[c]];S&&((A=S.parents.indexOf(u))>=0&&S.parents.splice(A,1))}}var H,N;for(u in l)if(Object.prototype.hasOwnProperty.call(l,u)&&(d=k[u]))for(N=l[u],c=0;c<N.length;c++)H=N[c],(A=d.children.indexOf(H))>=0&&d.children.splice(A,1);i("apply"),_=g;for(u in v)Object.prototype.hasOwnProperty.call(v,u)&&(e[u]=v[u]);var L=null;for(u in l)if(Object.prototype.hasOwnProperty.call(l,u)){d=k[u],N=l[u];var C=[];for(s=0;s<N.length;s++)H=N[s],o=d.hot._acceptedDependencies[H],C.indexOf(o)>=0||C.push(o);for(s=0;s<C.length;s++){o=C[s];try{o(N)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:N[s],error:e}),n.ignoreErrored||L||(L=e)}}}for(s=0;s<$.length;s++){var U=$[s];u=U.module,j=[u];try{f(u)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,orginalError:e}),n.ignoreErrored||L||(L=t),L||(L=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:e}),n.ignoreErrored||L||(L=e)}}return L?(i("fail"),Promise.reject(L)):(i("idle"),new Promise(function(e){e(p)}))}function f(t){if(k[t])return k[t].exports;var n=k[t]={i:t,l:!1,exports:{},hot:s(t),parents:(P=j,j=[],P),children:[]};return e[t].call(n.exports,n,n.exports,o(t)),n.l=!0,n.exports}var v=this.webpackHotUpdateFavorites;this.webpackHotUpdateFavorites=function(e,t){d(e,t),v&&v(e,t)};var h,m,y,g,b=!0,_="eeeba56c058d27300286",E={},j=[],P=[],I=[],O="idle",w=0,M=0,$={},A={},T={},k={};return f.m=e,f.c=k,f.i=function(e){return e},f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="",f.h=function(){return _},o(10)(f.s=10)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.defaults={counterTemplate:"(%c%)",counterTemplateEmpty:null,buttonNotAddedText:null,buttonAddedText:null,productsListTemplate:function(){},variantsListTemplate:function(){},debug:!1,onFull:function(){},onEmpty:function(){},onAdd:function(){},onRemove:function(){},onInit:function(){},onBefore:function(){},onUpdate:function(){},replaceTitle:!0,titles:{added:"Добавлен в избранное",notAdded:"Добавить в избранное"},classes:{added:"is-added",notAdded:"not-added",empty:"is-empty",full:"is-full"}},t.system={keyProducts:"favorites_products",keyFavorites:"favorites_data"},t.systemEvents={full:"full:insales:favorites",empty:"empty:insales:favorites",add:"add:insales:favorites",remove:"remove:insales:favorites",init:"init:insales:favorites",before:"before:insales:favorites",update:"update:insales:favorites"},t.systemSelectors={add:"data-favorites-add",addParam:"favorites-add",addVariant:"data-favorites-variant-add",addVariantParam:"favorites-variant-add",addVariantProduct:"data-favorites-variant-product",addVariantProductParam:"favorites-variant-product",remove:"data-favorites-remove",removeParam:"favorites-remove",counter:"data-favorites-counter",counterParam:"favorites-counter",trigger:"data-favorites-trigger",triggerParam:"favorites-trigger",clearFavorites:"data-clear-favorites"}},function(e,t,n){"use strict";function r(e){var t="string"==typeof e;return"number"==typeof e||t?(t&&(e=e.replace(/,/g,"."),e=isNaN(+e)?1:+e),Number(function(e){return Number(e)===e&&e%1!=0}(e)?e.toFixed(2):e)):0}Object.defineProperty(t,"__esModule",{value:!0}),t.patchNumber=r},function(e,t,n){"use strict";function r(e){var t=this;return $.when(function(){var n=jQuery.Deferred(),r="[object Array]"==Object.prototype.toString.call(e),o={};return r||(t.logger("Список id, не является массивом",e),n.reject(o)),r&&0==e.length&&(t.logger("Список id пуст",e),n.reject(o)),r&&e.length>0&&("object"==("undefined"==typeof Products?"undefined":i(Products))&&Products.getList?Products.getList(e).done(function(e){var r=s(e);Object.keys(r).length>0?(t.logger("Товары из апи common js: ",r),$.each(r,function(e,t){(0,c.default)(t)}),n.resolve(r)):n.reject({})}).fail(function(e){n.reject({})}):d(t,e).done(function(e){t.logger("Товары из стандартного апи: ",e),$.each(e,function(e,t){(0,c.default)(t)}),n.resolve($.extend(!0,{},_productsList,e))}).fail(function(e){n.reject({})})),n.promise()}())}function o(e,t){var n={};return $.each(t,function(t,r){$.each(e,function(e,t){$.each(t.variants,function(e,o){r==o.id&&(n[r]=o,n[r].product=t)})})}),n}function s(e){var t={};return $.each(e,function(e,n){n&&n.id&&(t[n.id]=n)}),t}Object.defineProperty(t,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.getProductList=r,t.getVariants=o,t.convertProductList=s;var a=(n(0),n(9)),c=function(e){return e&&e.__esModule?e:{default:e}}(a),d=function(e,t){return $.when(function(t){var n=jQuery.Deferred(),r=t.join(",");return t.length>0&&""!=r?$.post("/products_by_id/"+t.join(",")+".json").done(function(t){"ok"==t.status?(e.logger("Товары из апи: ",t.products),n.resolve(s(t.products))):n.resolve({})}).fail(function(e){n.resolve({})}):n.resolve({}),n.promise()}(t))}},function(e,t,n){"use strict";function r(){var e=this;$(document).on("click",o(i.systemSelectors.trigger),function(t){t.preventDefault(),e.eventMachine(i.systemEvents.before,$(this));var n=$(this).data(i.systemSelectors.triggerParam);if(!s(n))return void console.warn("Не валидный id",n);e.productIds.indexOf(n)>-1?(e.logger("removeToFavorites"),e.removeToFavorites($(this),n)):(e.logger("addToFavorites"),e.addToFavorites($(this),n))}),$(document).on("click",o(i.systemSelectors.add),function(t){t.preventDefault(),e.eventMachine(i.systemEvents.before,$(this));var n=$(this).data(i.systemSelectors.addParam);if(!s(n))return void console.warn("Не валидный id",n);e.addToFavorites($(this),n)}),$(document).on("click",o(i.systemSelectors.remove),function(t){t.preventDefault(),e.eventMachine(i.systemEvents.before,$(this));var n=$(this).data(i.systemSelectors.removeParam);if(!s(n))return void console.warn("Не валидный id",n);e.removeToFavorites($(this),n)}),$(document).on(i.systemEvents.update,function(t){e.options.productsListTemplate(t.insalesFavorites.products),e.options.variantsListTemplate(t.insalesFavorites.variants)}),$(document).on(i.systemEvents.update,function(t){var n=e.options.counterTemplate,r=e.productIds.length;0==r&&(n=e.options.counterTemplateEmpty||e.options.counterTemplate);var s=n.replace("%c%",r),a=$(o(i.systemSelectors.counter));a.html(s).data(i.systemSelectors.counterParam,r).attr(i.systemSelectors.counter,r),0==r?a.addClass(e.options.classes.empty).removeClass(e.options.classes.full):a.removeClass(e.options.classes.empty).addClass(e.options.classes.full),e.checkFavoritesProducts()})}function o(e,t){return"["+(t?e+'="'+t+'"':e)+"]"}function s(e){return(0,a.patchNumber)(e)>1}Object.defineProperty(t,"__esModule",{value:!0}),t.bindTrigger=r;var i=n(0),a=n(1)},function(e,t,n){"use strict";"use strict;";function r(e,t){var n=this,r=d(e,n.productIds,t,n.options.classes.added,n.options.classes.notAdded);if(r.isActive||!r.notAdded){n.productIds=u(n.productIds,t),n.productIds=v(n.productIds);var o=s(e);o&&(n.variantIds=u(n.variantIds,o),n.variantIds=v(n.variantIds)),n.setFavorites({products:n.productIds,variants:n.variantIds}),a(e,n,t),n.getProductList(n.productIds).done(function(t){n.products=t||{},n.variants=(0,p.getVariants)(t,n.variantIds)||{},n.eventMachine(l.systemEvents.remove,e),0==Object.keys(n.products).length&&n.eventMachine(l.systemEvents.empty,null),n.eventMachine(l.systemEvents.update,e)}).fail(function(){n.products={},n.variants={},n.eventMachine(l.systemEvents.remove,e),0==Object.keys(n.products).length&&n.eventMachine(l.systemEvents.empty,null),n.eventMachine(l.systemEvents.update,e)})}}function o(e,t){var n=this,r=d(e,n.productIds,t,n.options.classes.added,n.options.classes.notAdded);if(!(""===t||r.isActive&&r.isAdded)){n.productIds.push(t),n.productIds=v(n.productIds);var o=s(e);o&&(n.variantIds.push(o),n.variantIds=v(n.variantIds)),n.setFavorites({products:n.productIds,variants:n.variantIds}),a(e,n,t),n.getProductList(n.productIds).done(function(t){n.products=t||{},n.variants=(0,p.getVariants)(t,n.variantIds)||{},n.eventMachine(l.systemEvents.add,e),0==Object.keys(n.products).length&&n.eventMachine(l.systemEvents.empty,null),n.eventMachine(l.systemEvents.update,e)})}}function s(e){var t=!1,n=e.parents("form:first"),r=e.parents("[data-product-id]:first"),o=r.find('[name="variant_id"]');return o.length>0?t=(0,f.patchNumber)(o.val()):(o=n.find('[name="variant_id"]'),o.length>0&&(t=(0,f.patchNumber)(o.val()))),t}function i(){var e=this;$("["+l.systemSelectors.trigger+"]").each(function(t,n){a($(this),e,$(this).data(l.systemSelectors.triggerParam))}),$("["+l.systemSelectors.add+"]").each(function(t,n){a($(this),e,$(this).data(l.systemSelectors.addParam))}),$("["+l.systemSelectors.remove+"]").each(function(t,n){a($(this),e,$(this).data(l.systemSelectors.removeParam))})}function a(e,t,n){var r=d(e,t.productIds,n,t.options.classes.added,t.options.classes.notAdded);r.isActive&&(e.removeClass(t.options.classes.notAdded),t.options.replaceTitle&&e.attr("title",t.options.titles.added),r.isAdded||e.addClass(t.options.classes.added),t.options.buttonNotAddedText&&c(t,e,r.isActive)),r.isActive||(e.removeClass(t.options.classes.added),t.options.replaceTitle&&e.attr("title",t.options.titles.notAdded),r.notAdded||e.addClass(t.options.classes.notAdded),t.options.buttonNotAddedText&&c(t,e,r.isActive))}function c(e,t,n){var r=e.options.buttonNotAddedText||"";n?(r=e.options.buttonAddedText||e.options.buttonNotAddedText,t.html(r)):t.html(r)}function d(e,t,n,r,o){return{isActive:t.indexOf(n)>-1,isAdded:e.hasClass(r),notAdded:e.hasClass(o)}}function u(e,t){return e.filter(function(e){return e!=t})}Object.defineProperty(t,"__esModule",{value:!0}),t.removeToFavorites=r,t.addToFavorites=o,t.checkFavoritesProducts=i,t.getStatusProduct=d;var l=n(0),p=n(2),f=n(1),v=function(e){for(var t=[],n=0;n<e.length;n++)-1==t.indexOf(e[n])&&t.push(e[n]);return t}},function(e,t,n){"use strict";function r(e,t){var n=this,r=n.products||{},c=n.variants||{};$.each(r,function(e,t){-1==n.productIds.indexOf(t.id)&&delete r[e]}),$.each(c,function(e,t){-1==n.productIds.indexOf(t.product_id)&&delete c[e]});var d={};d.products=i(r),d.productsWithKeys=r,d.variants=n.variants||{},d.$target=t||null,d.favorites={size:Object.keys(d.products).length,totalPrice:s(d.products)},"object"==("undefined"==typeof EventBus?"undefined":a(EventBus))&&EventBus.publish&&EventBus.publish(e,d);var u=jQuery.Event(e);u.insalesFavorites=d,$(document).trigger(u);var l=o(n,e);n.options[l]&&"function"==typeof n.options[l]&&n.options[l](d)}function o(e,t){var n="";return $.each(c.systemEvents,function(e,r){r===t&&(n="on"+u(e))}),n}function s(e){var t=0;return $.each(e,function(e,n){t+=(0,d.patchNumber)(n.price)}),t}function i(e){var t={};return Object.keys(e).forEach(function(n){var r=e[n];t[n]=r}),t}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=r;var c=n(0),d=n(1),u=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},function(e,t,n){"use strict";"use strict;";function r(){var e=this;return $.when(function(){var t=jQuery.Deferred();return localforage.getItem(s.system.keyFavorites,function(n,r){r?(e.logger("Данные получены из хранилища",r),t.resolve(r)):(e.logger("Хранилище пусто"),t.reject({}))}),t.promise()}())}function o(e){var t=this;localforage.setItem(s.system.keyFavorites,e,function(e){e?t.logger("Не удалось сохранить избранное в localforage"):t.logger("Данные сохранены в localforage")})}Object.defineProperty(t,"__esModule",{value:!0}),t.getFavorites=r,t.setFavorites=o;var s=n(0)},function(e,t,n){"use strict";function r(e){void 0===window.localforage?(console.warn("Не подключен плагин localforage!"),o("https://cdnjs.cloudflare.com/ajax/libs/localforage/1.5.0/localforage.min.js",function(){e()})):e()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=function(e){function t(e){throw new URIError("The script "+e.target.src+" is not accessible.")}return function(n,r){var o=document.createElement("script");o.type="text/javascript",o.onerror=t,r&&(o.onload=r),e.appendChild(o),o.src=n}}(document.head||document.getElementsByTagName("head")[0])},function(e,t,n){"use strict";function r(e,t){this.options.debug&&(console.info("==favorites=="),console.log(e),t&&console.log(t),console.log("///////////////////"),console.log("///favorites//////"),console.log("/////////////////"))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e.parameters={},e.sale=null,$.each(e.properties,function(t,n){$.each(e.characteristics,function(t,r){if(n.id===r.property_id){var o=r;o.property_name=n.title,o.property={backoffice:n.backoffice,id:n.id,is_hidden:n.is_hidden,is_navigational:n.is_navigational,permalink:n.permalink,position:n.position,title:n.title},(e.parameters[n.permalink]||(e.parameters[n.permalink]=[])).push(o)}})}),e.variants&&$.each(e.variants,function(t,n){if(n.old_price){var r=(parseInt(n.old_price)-parseInt(n.price))/parseInt(n.old_price)*100,o=Math.round(r);o<100&&(e.sale=o)}}),e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=n(0),i=n(2),a=n(4),c=n(3),d=n(6),u=n(7),l=r(u),p=n(8),f=r(p),v=n(5),h=r(v),m=function e(t){o(this,e);var n=this;this.options=$.extend(!0,{},s.defaults,t),this.system=s.system,this.productIds=[],this.variantIds=[],this.products={},this.variants={},this.logger=f.default,this.getProductList=i.getProductList,this.getFavorites=d.getFavorites,this.setFavorites=d.setFavorites,this.bindTrigger=c.bindTrigger,this.eventMachine=h.default,this.checkFavoritesProducts=a.checkFavoritesProducts,this.addToFavorites=a.addToFavorites,this.removeToFavorites=a.removeToFavorites,(0,l.default)(function(){n.getFavorites().done(function(e){n.productIds=e.products||[],n.variantIds=e.variants||[],n.bindTrigger(),n.checkFavoritesProducts(),n.getProductList(e.products).done(function(t){n.products=t||{},n.variants=(0,i.getVariants)(t,e.variants)||{},0==Object.keys(n.products).length?(n.eventMachine(s.systemEvents.empty,null),n.eventMachine(s.systemEvents.init,null),n.eventMachine(s.systemEvents.update,null)):(n.eventMachine(s.systemEvents.full,null),n.eventMachine(s.systemEvents.init,null),n.eventMachine(s.systemEvents.update,null))}).fail(function(){n.eventMachine(s.systemEvents.empty,null),n.eventMachine(s.systemEvents.init,null),n.eventMachine(s.systemEvents.update,null)})}).fail(function(){n.bindTrigger(),n.checkFavoritesProducts(),n.eventMachine(s.systemEvents.empty,null),n.eventMachine(s.systemEvents.init,null),n.eventMachine(s.systemEvents.update,null)})})};e.exports=m}]);
var GeoManager=function(e){var o=this;o.option=$.extend({debug:!1,clear_forage:!1,use_forage:!0,keyParameters:"user_geo",succes:function(){}},e),o.setLog("Настройки плагина",o.option),o.init()};GeoManager.prototype.init=function(){var o=this;o.option.clear_forage&&localforage&&localforage.removeItem(o.option.keyParameters,function(){o.setLog("Локальное хранилище очищено","Ключ: "+o.option.keyParameters)}),void 0===window.localforage&&console.warn("Не подключен плагин localforage!"),o.getGeoData().done(function(e){o.setLog("Вызов колбека succes"),o.option.succes(e)}).fail(function(e){o.setLog("Не удалось получить данные",e)})},GeoManager.prototype.getGeoData=function(){var e=this;return $.when(function(){var o=jQuery.Deferred();window.localforage&&e.option.use_forage?e.getLocalData().done(function(e){o.resolve(e)}).fail(function(){e.getKladrData().done(function(e){o.resolve(e)}).fail(function(e){o.reject(e)})}):e.getKladrData().done(function(e){o.resolve(e)}).fail(function(e){o.reject(e)});return o.promise()}())},GeoManager.prototype.getLocalData=function(){var t,a=this;return $.when((t=jQuery.Deferred(),localforage.getItem(a.option.keyParameters,function(e,o){o?(a.setLog("Данные получены из хранилища",o),t.resolve(o)):(a.setLog("Хранилище пусто, данные будут запрошены в kladr.insales.ru"),t.reject("Хранилище пусто"))}),t.promise()))},GeoManager.prototype.getKladrData=function(){var o,t=this;return $.when((o=jQuery.Deferred(),$.ajax({url:"https://kladr.insales.ru/current_location.json",type:"get",dataType:"jsonp"}).done(function(e){$.ajax({url:"https://kladr.insales.ru/fulltext_search.json",data:{country:e.country,state:e.kladr_region,q:e.city,search:"1"},type:"get",dataType:"jsonp"}).done(function(e){t.setLog("Данные получены из kladr.insales.ru",e),window.localforage&&t.option.use_forage&&localforage.setItem(t.option.keyParameters,e),o.resolve(e)}).fail(function(e){t.setLog("Произошла ошибка при получении данных из kladr.insales.ru",e),o.reject(e)})}).fail(function(e){t.setLog("Произошла ошибка при получении данных из kladr.insales.ru",e),o.reject(e)}),o.promise()))},GeoManager.prototype.setLocalData=function(e,o){var t=this,a=o||function(){};window.localforage&&t.option.use_forage&&localforage.setItem(t.option.keyParameters,e,function(e,o){o?(t.setLog("В хранилище обновлены данные через метод setLocalData",o),a(o),t.option.succes(o)):t.setLog("Не удалось обновить данные")})},GeoManager.prototype.setLog=function(e,o){this.option.debug&&(console.log(e),o&&console.log(o))};
var RecentlyView=function(e){var o=this;o.option=$.extend({debug:!1,data_selector:"[data-recently-view]",clear_forage:!1,use_forage:!0,del_current_id:!0,reverse:!1,productIds:[],keyParameters:"recently_view",success:function(){}},e),o.setLog("Настройки плагина",o.option),o.init()};RecentlyView.prototype.init=function(){var e=this;e.option.clear_forage&&localforage&&localforage.removeItem(e.option.keyParameters,function(){e.setLog("Локальное хранилище очищено","Ключ: "+e.option.keyParameters)}),void 0===window.localforage&&console.warn("Не подключен плагин localforage!"),e.getProducts().done(function(o){e.option.del_current_id?e.getIds(function(t){t&&o[t]&&(delete o[t],e.setLog("Из списка удален товар с id: "+t));for(var r=[],n=0;n<e.option.productIds.length;n++){var i=e.option.productIds[n];o[i]&&r.push(o[i])}e.setLog("Вызов колбека success"),e.option.success(r)}):(e.setLog("Вызов колбека success"),e.option.success(o),e.getIds())}).fail(function(o){e.setLog("Не удалось получить данные",o),e.getIds()})},RecentlyView.prototype.getIds=function(e){var o=this,t=o.option.data_selector.replace(/(?:\[data-*)*\]*/g,"");$(o.option.data_selector).each(function(e,r){o.option.productIds.unshift($(r).data(t).toString())}),o.setLocalData(o.unique(o.option.productIds));var r=o.option.productIds;(o.option.reverse&&(r=r.reverse()),o.option.productIds=o.unique(r),e)&&e($(o.option.data_selector+":first").data(t))},RecentlyView.prototype.unique=function(e){for(var o=[],t=0;t<e.length;t++)-1==o.indexOf(e[t])&&o.push(e[t]);return o},RecentlyView.prototype.getProducts=function(){var e=this;return $.when(function(){var o=jQuery.Deferred();window.localforage&&e.option.use_forage?e.getLocalData().done(function(t){e.option.productIds=t,$.each(t,function(e,o){0==o&&t.splice(e,1)}),t.length?$.post("/products_by_id/"+t.join(",")+".json").done(function(t){var r=t.products,n={};$.each(r,function(o,t){n[t.id]=e.convertProperties(t)}),e.setLog("Товары из апи: ",n),o.resolve(n)}).fail(function(e){o.resolve({})}):o.resolve({})}).fail(function(){o.resolve({})}):o.resolve({});return o.promise()}())},RecentlyView.prototype.getLocalData=function(){var e,o=this;return $.when((e=jQuery.Deferred(),localforage.getItem(o.option.keyParameters,function(t,r){r?(o.setLog("Данные получены из хранилища",r),e.resolve(r)):(o.setLog("Хранилище пусто, данные будут запрошены в kladr.insales.ru"),e.reject("Хранилище пусто"))}),e.promise()))},RecentlyView.prototype.setLocalData=function(e,o){var t=this,r=o||function(){};window.localforage&&t.option.use_forage&&localforage.setItem(t.option.keyParameters,e,function(e,o){o?(t.setLog("В хранилище обновлены данные через метод setLocalData",o),r(o)):t.setLog("Не удалось обновить данные")})},RecentlyView.prototype.convertProperties=function(e){function o(e,o,t){e[o]||(e[o]=t)}return e.parameters={},e.sale=null,$.each(e.properties,function(t,r){$.each(e.characteristics,function(t,n){if(r.id===n.property_id){e.property=r,o(e.parameters,r.permalink,r),o(e.parameters[r.permalink],"characteristics",[]);var i=!0;$.each(e.parameters[r.permalink].characteristics,function(e,o){o.id==n.id&&(i=!1)}),i&&e.parameters[r.permalink].characteristics.push(n)}})}),e.variants&&$.each(e.variants,function(o,t){if(t.old_price){var r=Math.round((parseInt(t.old_price)-parseInt(t.price))/parseInt(t.old_price)*100,0);r<100&&(e.sale=r)}}),e},RecentlyView.prototype.setLog=function(e,o){this.option.debug&&(console.info("==RecentlyView=="),console.log(e),o&&console.log(o),console.log("///////////////////"),console.log("///RecentlyView///"),console.log("/////////////////"))};


function declOfNum(number,titles){number=parseInt(number);titles=(titles)?titles:['товар','товара','товаров'];cases=[2,0,1,1,1,2];return titles[(number%100>4&&number%100<20)?2:cases[(number%10<5)?number%10:5]]}

function templateLodashRender(content, templateId){
	var templateContent = $('[data-template-id="'+templateId+'"]').html();
	var renderContent = _.template(templateContent);
	return renderContent(content);
}

$(function(){
	$.fancybox.defaults.backFocus = false;

	$('.js-clone').each(function(){
		var $this = $(this);
		var $thisTarget = $('.'+$this.data('clone-target'));
		$thisTarget.html($this.html());
	});

	/*phone masks*/
	var maskInput = $('input[type="tel"]:not(.js-input-field)');
	var maskMasks = {
		RU: 'Z0 (000) 000-00-00',
		UA: 'Z00 (000) 000-00-00'
	};
	var maskOptions = {
		clearIfNotMatch: true,
		translation: {
			'Z': {
				pattern: /[+]/,
				optional: true
			}
		},
		onKeyPress: function(cep, e, field, options) {
			mask = maskMasks.RU;
			if(cep.indexOf('3') == 0 || cep.indexOf('+3') == 0){
				mask = maskMasks.UA;
			}
			maskInput.mask(mask, maskOptions);
		}
	};
	maskInput.mask(maskMasks.RU, maskOptions);
	/*---*/

//product кнопка купить
$('.item-actions-buy').click(function() {
	var tester = $(this)
  $(this).addClass("added");
	setTimeout(function() { tester.removeClass("added") }, 3000);
});


	//корзина
	EventBus.subscribe('update_items:insales:cart', function(data){
		if(data.items_count > 0){
			$('.js-user_icons-icon-cart').addClass('is-active');
      $('.js-cart-text').html(' на сумму: <strong>'+Shop.money.format(data.items_price)+'</strong>');
			$('.js-popup-cart').html('<div class="dropdown_products-header"> на сумму <span>'+Shop.money.format(data.items_price)+'</span></div><div class="dropdown_products js-popup-cart-products"></div><div class="dropdown_products-action"><div class="row"><div class="col-12 col-lg-6"><a href="/cart_items" class="button button--primary button--block button--small">Открыть корзину</a></div><div class="col-12 col-lg-6"><a href="/new_order" class="button button--secondary button--block button--small">Оформить заказ</a></div></div></div>');
			$('.js-popup-cart-products').html(templateLodashRender(data, 'popup-cart'));
      $('.js-cart-order-total_price').html(Shop.money.format(data.total_price));
			if(Site.template == 'cart'){
				$('.js-cart-order-total_price').html(Shop.money.format(data.total_price));
				if(data.discounts.length > 0){
					$('.js-cart-order-item-discounts').show();
					$('.js-cart-order-item-discounts-amount').html(Shop.money.format(data.discounts[0].amount));
					$('.js-cart-order-item-discounts-description').html(data.discounts[0].description);
				}else{
					$('.js-cart-order-item-discounts').hide();
				}
				$.each(data.order_lines, function(index, item){
					$parent = $('.js-cart-item-'+item.id);
					$('.js-cart-item-quantity', $parent).html(item.quantity);
					$('.js-cart-item-sale_price', $parent).html(Shop.money.format(item.sale_price));
					$('.js-cart-item-total_price', $parent).html(Shop.money.format(item.total_price));
				});
			}
		}else{
			$('.js-user_icons-icon-cart').removeClass('is-active');
			$('.js-popup-cart-products').html(templateLodashRender({popup: {title: 'Ваша корзина пуста'}}, 'popup-empty'));
      $('.js-cart-text').html(' Ваша корзина пуста');
			if(Site.template == 'cart'){
        $('.js-cart-text').html(' Ваша корзина пуста');
			}
		}
		$('.js-bage-cart').html(data.items_count);
	});
	EventBus.subscribe('add_items:insales:cart', function(data){
		$.each(data.action.items, function(index, item){
        	item_id = index;
        	item_quantity = item;
        });
        $.each(data.order_lines, function(index, item){
        	if(item_id == item.id){
				$.fancybox.close();
				$.fancybox.open({
					src: '<div class="message message--cart"><div class="message-title">Товар добавлен в корзину!</div><div class="message-content">'+templateLodashRender({data: data, item: item, item_quantity: item_quantity}, 'message-cart')+'</div></div>',
					type: 'inline',
					touch: false,
					backFocus: false,
					smallBtn: true
				});
				return false;
            }
        });
	});
	EventBus.subscribe('delete_items:insales:cart', function(data){
		$.each(data.action.items, function(index, item){
			$('[data-item-id="'+item+'"]').remove();
		});
	});
	EventBus.subscribe('before:insales:cart', function (data) {
		if(data.action.method != undefined && data.action.method == 'delete_items'){
			$.each(data.action.items, function(index, item){
				$('[data-item-id="'+item+'"]').addClass('in-progress');
			});
		};
	});

	//сравнение
	EventBus.subscribe('update_items:insales:compares', function(data){
		$('[data-compare-add]').removeClass('active');
		if(data.products.length > 0){
			$('.js-user_icons-icon-compares').addClass('is-active');
			$('.js-popup-compares').html('<div class="dropdown_products js-popup-compares-products"></div><div class="dropdown_products-action"><div class="row"><div class="col-12"><a href="/compares" class="button button--primary button--block button--small">Перейти к сравнению</a></div></div></div>');
			$('.js-popup-compares-products').html(templateLodashRender(data, 'popup-compares'));
      $('.header_compare').removeClass('non_active');
			$('.js-bage-compares').show();
      $('.js-bage-compares').html(data.products.length);
			$.each(data.products, function(index, item){
				$('[data-compare-add="'+item.id+'"]').addClass('active');
			});
		}else{
			$('.js-bage-compares').hide();
			$('.js-user_icons-icon-compares').removeClass('is-active');
			$('.js-popup-compares').html(templateLodashRender({popup: {title: 'Товары для сравнения не&nbsp;выбраны', icon: '<i class="far fa-align-right fa-3x" data-fa-transform="rotate-90"></i>'}}, 'popup-empty'));
      $('.header_compare').addClass('non_active');
		}

		if(Site.template == 'compare'){
			$('.js-compares-row').each(function(){
				$this = $(this);
				$similar = true;
				$html = '';
				$htmlEmpty = '';
				$('.compares-item-characteristics', $this).each(function(index, item){
					$htmlEmpty += $(this).html();
					if(index == 0){
						$html = $(this).html();
					}else{
						if($(this).html() == $html){
							$similar = true;
						}else{
							$similar = false;
							return false;
						}
					}

				});
				if($htmlEmpty == ''){
					$this.remove();
				}
				if($similar){
					$this.addClass('compares-same-row js-compares-same-row');
				}else{
					$this.removeClass('compares-same-row js-compares-same-row');
				}
			})
			if($('.js-compares-same-row').length == 0 || data.products.length == 1){
				$('.js-compares-same-row').removeClass('d-none');
				$('.js-compares-same-toggle').addClass('button--disabled').removeClass('is-toggle');
			}else{
				$('.js-compares-same-toggle').removeClass('button--disabled');
			}
			if($('.js-compares-same-toggle').hasClass('is-toggle')){
				$('.js-compares-same-row').addClass('d-none');
			}else{
				$('.js-compares-same-row').removeClass('d-none');
			}
		}
	});
	EventBus.subscribe('add_item:insales:compares', function(data){
		if(!$('[data-compare-add="'+data.action.item+'"]').hasClass('active')){
			//console.log('Товар добавлен в сравнение');
		}else{
			Compare.remove({
				item: data.action.item
			});
		}
	});
	EventBus.subscribe('always:insales:compares', function(data){
		if(data.method == 'overload'){
			if(!$('[data-compare-add="'+data.item+'"]').hasClass('active')){
				//showMessage('alert', 'Внимание!', 'Сравнить можно не более 4 товаров.');
			}else{
				Compare.remove({
					item: data.item
				});
			}
		}
	});
	EventBus.subscribe('remove_item:insales:compares', function(data){
		if(Site.template != 'compare'){
			return false;
		}
		$('[data-compared-id="'+data.action.item+'"]').remove();
		$('.js-compares-table').addClass('compares-table-'+data.products.length);
		if(data.products.length == 1){
			$('.js-compares-same-row').removeClass('d-none');
			$('.js-compares-same-toggle').addClass('button--disabled').removeClass('is-toggle');
		}
		if(data.products.length == 0){
			$('.insales-section-compares').html(templateLodashRender({popup: {title: 'Товары для сравнения не&nbsp;выбраны', icon: '<i class="far fa-align-right fa-3x" data-fa-transform="rotate-90"></i>'}}, 'popup-empty'));
		};
	});
	$('.js-compares-same-toggle').on('click', function(e){
		e.preventDefault();
		if(!$(this).hasClass('button--disabled')){
			$('.js-compares-same-row').toggleClass('d-none');
			$(this).toggleClass('is-toggle');
		}
	})

	//избранное
	var Favorite = new Favorites({
		replaceTitle: false
	});
	EventBus.subscribe('add:insales:favorites', function(data){
		console.log('Товар добавлен в избранное');
	});
	EventBus.subscribe('update:insales:favorites', function(data){
    $('.product_features_wishlist').removeClass('active');
		if(data.favorites.size > 0){
			$('.js-popup-favorites').html('<div class="dropdown_products-header">В вашем избранном<br><span>'+data.favorites.size+' '+declOfNum(data.favorites.size)+'</span> на сумму <span>'+Shop.money.format(data.favorites.totalPrice)+'</span></div><div class="dropdown_products js-popup-favorites-products"></div><div class="dropdown_products-action"><div class="row"><div class="col-12"><a href="/page/favorites" class="button button--primary button--block button--small">Перейти к избранному</a></div></div></div>');
			$('.js-popup-favorites-products').html(templateLodashRender(data, 'popup-favorites'));
      $.each(data.products, function(index, item){
				$('[data-favorites-trigger="'+item.id+'"]').addClass('active');
			});
		}else{
			$('.js-popup-favorites').html(templateLodashRender({popup: {title: 'В вашем избранном пока пусто', icon: '<i class="far fa-heart fa-3x"></i>'}}, 'popup-empty'));
		}
		if($('.js-favorites-block').length > 0){
			if(data.favorites.size > 0){
				$('.js-favorites-block').show();
				$('.js-favorites-loader').hide();
				$('.js-favorites-products').html(templateLodashRender(data, 'product-card'));
				Compare.update();
				Favorite.checkFavoritesProducts();
			}else{
				$('.js-favorites-block').hide();
				$('.js-favorites-loader').show();
				$('.js-favorites--wait').addClass('d-none');
				$('.js-favorites--empty').removeClass('d-none');
			}
		}
		$('.js-bage-favorites').html(data.favorites.size);
	});

	//страница товара
	if(Site.template == 'product'){
		var variant_is_click = false;
		var variant_is_first = true;
		$(document).on('click', '[data-option-bind]', function(e){
			variant_is_click = true;
		});
		EventBus.subscribe('update_variant:insales:product', function(data){
			if(!data.action.product.is('[data-main-form]')){
				return;
			}
			$('.js-product-variants-loader').addClass('d-none');
			$('.js-product-variants-data').removeClass('d-none');
			var $product = data.action.product;
			$product.find('.js-product-price').html(Shop.money.format(data.action.price));
			$product.find('.js-product-sku').html((data.sku != null)?data.sku:'—');
			$('.js-product-weight').html((data.weight != null)?data.weight:'—');
			if(data.old_price){
				$product.find('.js-product-price').addClass('product-price--sale');
				$product.find('.js-product-old_price').html(Shop.money.format(data.old_price)).fadeIn(200);
				$product_discount = Math.round(data.action.price / data.old_price * -100 + 100);
				if($product_discount > 0){
					$product.find('.js-product-label--sale').html('Скидка '+$product_discount+'%').removeClass('d-none');
				}else{
					$product.find('.js-product-label--sale').html('Скидка').removeClass('d-none');
				}
			}else{
				$product.find('.js-product-price').removeClass('product-price--sale');
				$product.find('.js-product-old_price').fadeOut(200);
				$product.find('.js-product-label--sale').addClass('d-none');
			}
			if(variant_is_click || variant_is_first){
				var $carousel = $('.js-product-gallery-thumb[href="'+data.first_image.original_url+'"]:first-child');
				$carousel.trigger('click');
				$('.js-owl-carousel-gallery').trigger('to.owl.carousel', [($carousel.data('index')-1), 200]);
			}
			variant_is_click = false;
			variant_is_first = false;
			if(data.available){
				$product.find('.js-product-buttons').removeClass('product-buttons--soldout');
				$product.find('.js-product-available').removeClass('product-available--soldout');
			}else{
				$product.find('.js-product-buttons').addClass('product-buttons--soldout');
				$product.find('.js-product-available').addClass('product-available--soldout');
			}
			if(Site.account.bonus_system){
				var $quantity = (data.action.quantity.current > 0) ? data.action.quantity.current : 1;
				var $bonuses = Math.floor(data.action.price * $quantity * (Site.account.bonus_system.bonus_percent / 100));
				$('.js-product-bonuses').html($bonuses+' '+declOfNum($bonuses, ['бонус', 'бонуса', 'бонусов']));
			}
			$('.js-options_description').remove();
			$('.js-message-options_description').each(function(index, item){
				var $this = $(this);
				var $handle = $this.data('handle');
				var $title = $this.data('title');
				$('.option-'+$handle+' .option-label').append('<button type="button" class="button button--empty button--info button--small js-options_description" data-target="'+$handle+'"><i class="far fa-question-circle fa-lg"></i><span>'+$title+'</span></button>');
			});
		});
	}

	//просмотренные товары
	var myRecentlyView = new RecentlyView({
		success: function(_products){
			if(_products.length > 0){
				$('.js-owl-carousel-products-recently-slider').html(templateLodashRender(_products, 'product-card-recently'));
				$('#insales-section-products--recently').removeClass('d-none');
				$('.js-owl-carousel-products-recently-slider').owlCarousel({
					items:2,
					margin:20,
					loop:false,
					nav:false,
					navText:['<i class="far fa-chevron-left fa-lg"></i>','<i class="far fa-chevron-right fa-lg"></i>'],
					dots:true,
					responsive:{
						0:{
							items:2,
							nav:false,
							dots:true
						},
						768:{
							items:3,
							nav:false,
							dots:true
						},
						992:{
							items:4,
							nav:true,
							dots:false
						}
					}
				});
				Compare.update();
				Favorite.checkFavoritesProducts();
			}else{
				$('#insales-section-products--recently').addClass('d-none');
			}
		}
	});
	$('.js-recently-clear').on('click', function(e){
		e.preventDefault();
		$('#insales-section-products--recently').slideUp(400, function(){
			$('#insales-section-products--recently').addClass('d-none');
			if(localforage){
				localforage.removeItem('recently_view');
			}
		});
	});


	//форма подписки
	$('.js-footer-subscribe').on('submit', function(e){
		e.preventDefault();
		if($(this).attr('action') == '#'){
			showMessage('alert', 'Форма не настроена!', 'Т.к. заранее не известно какой сервис будет использоваться для сбора контактов, то для формы подписки требуется отдельная настройка специалистом под конкретную службу.');
		}
	});

	//галерея в товаре
	$('[data-fancybox]').fancybox({
		loop: true,
		infobar: false,
		animationEffect: 'fade',
		transitionEffect: 'slide',
		baseClass: 'fancybox-gallery',
		buttons:[
			'close'
		]
	});
	$(document).on('click', '.js-product-gallery-thumb', function(e){
		e.preventDefault();
		$this = $(this);
		if(!$this.hasClass('is-active')){
			$('.js-product-gallery-thumb').removeClass('is-active');
			$this.addClass('is-active');
			$original_url = $this.attr('href');
			$large_url = $('span', $this).attr('style');
			$('.js-product-image-thumb').animate({
				opacity: 0,
				left: -20
			}, 200, function(){
				$('.js-product-image-thumb').css('left', 20).attr('href', $original_url).data('index', $this.data('index'));;
				$('.js-product-image-thumb span').attr('style', $large_url);
			}).animate({
				opacity: 1,
				left: 0
			}, 200);

		}
	});
	$(document).on('click', '.js-product-image-thumb', function(e){
		e.preventDefault();
		$('.js-product-gallery-thumb-'+$(this).data('index')).trigger('click');
	});

	var navCollectionsTimer = false;
	var $navCollections = $('.js-nav-collections-trigger');
	var $navTarget = 'hamburger';
	$navCollections.on('mouseenter', function(e){
		$navTarget = $(this).data('target');
		if(navCollectionsTimer != false){
			clearTimeout(navCollectionsTimer);
		}
		if($navTarget == 'hamburger'){
			navCollectionsTimer = setTimeout(function(){
				$navCollections.addClass('is-active');
				navCollectionsTimer = false;
			}, 200);
		}
	}).on('mouseleave', function(e){
		if(navCollectionsTimer != false){
			clearTimeout(navCollectionsTimer);
		}
		navCollectionsTimer = setTimeout(function(){
			$navCollections.removeClass('is-active');
			navCollectionsTimer = false;
		}, 200);
	});

	$('.js-user_icons-item').on('click', function(e){
		if(window.outerWidth < 1025 && !$(this).hasClass('is-open') && !$(e.target).hasClass('js-popup-close')){
			e.preventDefault();
			if($(this).hasClass('user_icons-item-menu') && $('.js-popup-content-menu').html() == ''){
				$('.js-popup-content-menu').append($('.js-nav-collections > ul').html());
				if($('.header-main .js-popup-content-menu').find('.is-open').size() > 1){
					$('.js-popup-scroll').addClass('overflow-hidden');
				}else{
					$('.js-popup-scroll').removeClass('overflow-hidden');
				}
			}
			$(this).addClass('is-open');
			$('body').addClass('overflow-hidden');
		}
	});
	$('body').on('click', '.js-popup-close', function(){
		$('.js-user_icons-item.is-open').removeClass('is-open');
		$('body').removeClass('overflow-hidden');
	});

	$('body').on('click', '.js-nav-collections-toggle', function(e){
		if(window.outerWidth < 1025){
			e.preventDefault();
			var $this = $(this)
			var $type = $this.data('type');
			var $target = $this.data('target');
			var $object = $('[data-collection-id="'+$target+'"]');
			if($type == 'next'){
				$object.parent().addClass('overflow-hidden');
				$object.addClass('is-open');
			}else{
				$object.parent().removeClass('overflow-hidden');
				$object.removeClass('is-open');
			}
			if($('.header-main .js-popup-content-menu').find('.is-open').size() > 1){
				$('.js-popup-scroll').addClass('overflow-hidden');
			}else{
				$('.js-popup-scroll').removeClass('overflow-hidden');
			}
		}
	});

	$('body').on('click', '.js-nav-sidebar-clone .js-nav-arrow-toggle', function(e){
		e.preventDefault();
		var $this = $(this);
		var $target = $this.parent().data('target');
		var $object = $('[data-collection-id="'+$target+'"]');
		$object.toggleClass('is-open');
	});

	$('.js-bundle-title').on('click', function(){
		var $this = $(this);
		$this.toggleClass('is-active').next().slideToggle(400);
	});

	$('.js-tabs-list-item').on('click', function(){
		var $this = $(this);
		if(!$this.hasClass('is-active')){
			$('.js-tabs-list-item, .js-tabs-content').removeClass('is-active');
			$this.addClass('is-active');
			$('[data-tab="'+$this.data('target')+'"]').addClass('is-active');
		}
	});

	$('.js-owl-carousel-gallery').owlCarousel({
		items:1,
		margin:20,
		loop:false,
		nav:false,
		navText:['<i class="far fa-chevron-left fa-lg"></i>','<i class="far fa-chevron-right fa-lg"></i>'],
		dots:true,
		responsive:{
			0:{
				items:1,
				nav:false,
				dots:true
			},
			768:{
				items:6,
				nav:true,
				dots:false
			}
		}
	});
	$('.js-owl-carousel-products-slider').owlCarousel({
		items:2,
		margin:20,
		loop:false,
		nav:false,
		navText:['<i class="far fa-chevron-left fa-lg"></i>','<i class="far fa-chevron-right fa-lg"></i>'],
		dots:true,
		responsive:{
			0:{
				items:2,
				nav:false,
				dots:true
			},
			768:{
				items:3,
				nav:false,
				dots:true
			},
			992:{
				items:4,
				nav:true,
				dots:false
			}
		}
	});
	$('.js-owl-carousel-brands-slider').owlCarousel({
		items:2,
		margin:20,
		loop:true,
		nav:false,
		navText:['<i class="far fa-chevron-left fa-lg"></i>','<i class="far fa-chevron-right fa-lg"></i>'],
		dots:true,
		responsive:{
			0:{
				items:2,
				nav:false,
				dots:true
			},
			768:{
				items:4,
				nav:true,
				dots:false
			},
			992:{
				items:6,
				nav:true,
				dots:false
			}
		}
	});
	$('.js-owl-carousel-user_reviews-slider').owlCarousel({
		items:1,
		margin:20,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true,
		autoplayHoverPause:true,
		autoplayTimeout:8000
	});

	//rating
	function buildRating(){
		var $rating = $('.js-rating');
		$rating.each(function(){
			var $this = $(this);
			var $star = $('[data-rating-star]', $this);
			var $single = $('[data-rating-single]', $this);
			var $reset = $('[data-rating-reset]', $this);
			var $input = $('[data-rating-input]', $this);
			var is_click = false;
			if($star.length == 0){
				$star = $single;
			}
			$star.on('mouseenter', function(){
				$(this).prevAll('[data-rating-star]').addClass('rating-item--hover');
				$(this).nextAll('[data-rating-star]').addClass('rating-item--unhover');
				$(this).addClass('rating-item--hover');
			}).on('mouseleave', function(){
				if(!is_click){
					$(this).prevAll('[data-rating-star]').removeClass('rating-item--hover');
					$(this).nextAll('[data-rating-star]').removeClass('rating-item--unhover');
					$(this).removeClass('rating-item--hover');
				}
				is_click = false;
			}).on('click', function(){
				is_click = true;
				$star.removeClass('rating-item--active rating-item--hover rating-item--unhover');
				$star.addClass('rating-item--unactive');
				$(this).prevAll('[data-rating-star]').addClass('rating-item--active');
				$(this).prevAll('[data-rating-star]').removeClass('rating-item--unactive');
				$(this).addClass('rating-item--active');
				$(this).removeClass('rating-item--unactive');
				$input.val($(this).data('rating-rate'));
			});
			$reset.on('click', function(){
				$star.removeClass('rating-item--active rating-item--hover rating-item--unhover');
				$star.addClass('rating-item--unactive');
				$input.val('');
			});
		});
	}
	buildRating();

	$('.js-rating-link').on('click', function(e){
		e.preventDefault();
		$('[data-target="reviews"]').trigger('click');
		scrollToElement($('#insales-section-tabs'));
	});

	if(Site.template == 'product' || Site.template == 'article'){
		if(location.hash == "#review_form" ||location.hash == "#comment_form" || location.hash == "#comments"){
			$('[data-target="reviews"]').trigger('click');
			scrollToElement($('#insales-section-tabs'));
		}
	}

	function scrollToElement(obj){
		$('html, body').animate({
			scrollTop: obj.offset().top
		}, 400);
	}

	/*resize*/
	var updateResizeDelay;
	var $navMenu = $('.js-nav-items');
	var $filterClass = $('[data-filter]').attr('class');
	function eventResize(){
		$navMenu.addClass('is-overflow');
		clearTimeout(updateResizeDelay);
		updateResizeDelay = setTimeout(function(){
			$thisExtraMenuWidth = $navMenu.width();
			$thisExtraPupup = $('.js-popup-nav', $navMenu);
			$thisExtraPupup.html('');
			if($thisExtraMenuWidth > 0){
				var $thisExtraPupupLink = $('.js-nav-item--dropdown', $navMenu);
				$thisExtraPupupLink.addClass('d-none');
				$navMenu.addClass('is-overflow');
				var $thisExtraWidthSum = 0;
				$('.js-nav-item', $navMenu).removeClass('d-none');
				$('.js-nav-item', $navMenu).each(function(){
					$thisItem = $(this);
					$thisExtraWidthSum += $thisItem.outerWidth();
					if($thisExtraWidthSum + 44 > $thisExtraMenuWidth || $thisItem.position().top > 0){
						$thisItem.addClass('d-none');
						$thisExtraPupup.append('<li'+(($thisItem.hasClass('is-active'))?' class="is-active"':'')+'>'+$thisItem.html()+'</li>');
						$thisExtraPupupLink.removeClass('d-none');
					}
				});
				if($thisExtraPupupLink.find('.is-active').length > 0){
					$thisExtraPupupLink.addClass('is-active');
				}
				$navMenu.removeClass('is-overflow');
			}
		}, 200);
		if($('[data-filter]').data('filter') == 'content'){
			if(window.outerWidth < 1025){
				$('[data-filter]').attr('class', 'filter-sidebar');
			}else{
				$('[data-filter]').attr('class', $filterClass);
			}
		}
	}

	function eventScroll(){
		if($(window).scrollTop() < 450){
			$('.js-scroll-top').fadeOut(400);
		}else{
			$('.js-scroll-top').fadeIn(400);
		}
	}

	$(window).on('load resize', function(){
		eventResize();
	});
	eventResize();

	$(window).on('scroll', function(){
		eventScroll();
	});

	$('.js-scroll-top').on('click',function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 400);
	});

	$('.js-header-menu').sticky({
		topSpacing: 0
	}).on('sticky-start', function(){
		eventResize();
	}).on('sticky-end', function(){
		eventResize();
	});
	/*---*/

	$('body').on('click', '.js-text-overflow-toggle', function(e){
		$(this).closest('.js-text-overflow').toggleClass('is-hidden');
	});

	$('.js-faq-toggle').on('click', function(e){
		$(this).toggleClass('is-active').closest('.js-faq-item').find('.js-faq-content').slideToggle(200);
	});

	function showMessage($type, $title, $content){
		$.fancybox.close();
		$.fancybox.open({
			src: '<div class="message message--'+$type+'"><div class="message-title">'+$title+'</div><div class="message-content">'+$content+'</div></div>',
			type: 'inline',
			touch: false,
			smallBtn: true
		});
	}

	$('.js-messages').on('click', function(){
		var $this = $(this);
		var $target = $this.data('target');
		var $type = $this.data('type');
		showMessage($type, $('.js-message-'+$target).data('title'), $('.js-message-'+$target).html());
		if($target == 'review'){
			buildRating();
		}
	});

	$(document).on('click', '.js-options_description', function(e){
		$target = $(this).data('target');
		$type = 'text';
		$title = $('.js-message-options_description[data-handle="'+$target+'"]').data('title');
		$contant = $('.js-message-options_description[data-handle="'+$target+'"]').html();
		showMessage($type, $title, $contant);
	});

	//feedback
	$('body').on('submit', '.js-feedback', function(e){
		e.preventDefault()
		var $form = $(this);
		var $formAlert = $form.data('alert');
		var $formFields = '';
		var $formContent = $form.find('[name="feedback[content]"]');
		var $formSubject = $form.find('[name="feedback[subject]"]');
		$form.addClass('in-progress');
		$form.find('.js-feedback-fields').each(function(index, item){
			if($(this).val() != ''){
				$formFields += $(this).data('title')+': '+$(this).val()+'<br>';
			}
		});
		if($formFields != ''){
			$formContent.val($formFields);
		}else{
			$formContent.val($formSubject.val());
		}
		$.ajax({
			url: $form.attr('action')+'.json',
			data: $form.serialize(),
			type: 'post',
			dataType: 'json'
		}).fail(function(e){
			showMessage('alert', 'Упс!', 'Кажется что-то пошло не так. Попробуйте позже или свяжитесь с нами альтернативным способом.');
		}).done(function(e){
			$.fancybox.close();
			$form[0].reset();
			if(e.status == 'ok'){
				showMessage('alert', 'Отлично!', $formAlert);
			}else{
				showMessage('alert', 'Упс!', 'Кажется что-то пошло не так. Попробуйте позже или свяжитесь с нами альтернативным способом.');
			}
		});
	});

	//search
	var $search = $('.js-search-input');
	if($search.length > 0){
		$search.autocomplete({
			serviceUrl: '/search.json',
			paramName: 'q',
			params: {
				page_size: 1
			},
			dataType: 'json',
			deferRequestBy: 300,
			preserveInput: true,
			noCache: false,
			appendTo: '.js-search-results',
			minChars: 3,
			transformResult: function(response){
				return {
					suggestions: $.map(response, function(dataItem){
						return {
							value: dataItem.title,
							data: {
								url: dataItem.url,
								price: dataItem.variants[0].price,
								image: dataItem.first_image.thumb_url
							}
						};
					})
				};
			},
			formatResult: function(suggestions, currentValue){
				var title = suggestions.value.replace(new RegExp('(?![^&;]+;)(?!<[^<>]*)('+$search.autocomplete().currentValue+')(?![^<>]*>)(?![^&;]+;)','gi'),'<strong>$1</strong>');
				return '<a href="'+suggestions.data.url+'" class="autocomplete-suggestion-link"><span class="autocomplete-suggestion-thumb" style="background-image: url('+suggestions.data.image+');"></span><span class="autocomplete-suggestion-title">'+title+'</span><span class="autocomplete-suggestion-price">'+Shop.money.format(suggestions.data.price)+'</span></a>';
			},
			onSearchStart: function(params){
				$search.addClass('in-progress');
			},
			onSearchComplete: function(query, suggestions){
				$search.removeClass('in-progress');
				if(suggestions.length > 0){
					$('.js-search-results').addClass('is-show');
				}else{
					$('.js-search-results').removeClass('is-show');
				}
			},
			onHide: function(container){
				$('.js-search-results').removeClass('is-show');
			}
		});
	}

	//instafeed
	if($('#instafeed').length > 0){
		var userFeed = new Instafeed({
		  get: 'user',
		  userId: $('#instafeed').data('userid'),
		  accessToken: $('#instafeed').data('accesstoken'),
		  limit: 6,
		  resolution: 'standard_resolution',
		  template: '<div class="col-4 col-lg-2"><a href="{{link}}" target="_blank" style="background-image: url({{image}});"><span><i class="fab fa-instagram fa-2x"></i></span></a></div>'
		});
		userFeed.run();
	}
});
