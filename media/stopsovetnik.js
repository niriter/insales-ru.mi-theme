(function(){function patchOnMessage(){window.addEventListener('message',function(e){var data;if(typeof e.data==='string'){try{data=JSON.parse(e.data);}catch(e){return;}}else{data=e.data;}if(data&&data.type==='MBR_ENVIRONMENT'){e.stopImmediatePropagation();e.stopPropagation();e.data={};}},true);}var observer;function init(){try{observer=new MutationObserver(function(records){check(records);});}catch(e){}if(document.body){checkNodes(document.body.children);}}function startObserve(){if(!document.body){setTimeout(startObserve,200);return;}if(observer){observer.observe(document.body,{childList:true});}}function stopObserve(){if(observer){observer.disconnect();observer=null;}}function check(records){records.forEach(function(record){var addedNodes=record.addedNodes;if(addedNodes&&addedNodes.length){checkNodes(addedNodes);}});}function checkNodes(nodes){Array.prototype.slice.call(nodes).forEach(function(node){if(isDiv(node)&&(hasSovetnikLink(node))){remove(node);}});}function createStyleNode(selector,styles){var styleNode=document.createElement('style');var css='';for(var k in styles){if(styles.hasOwnProperty(k)){css+=k+':'+styles[k]+' !important;\n';}}styleNode.type='text/css';styleNode.appendChild(document.createTextNode(selector+', '+selector+':hover{'+css+'}'));return styleNode;}function addStyleNode(selector,styles){var styleNode=createStyleNode(selector,styles);document.body.appendChild(styleNode);}function propName(s){return s.replace(/-([a-z])/g,function(g){return g[1].toUpperCase();});}function remove(node){var rootStyles={background:'transparent',transition:'none','box-shadow':'none','border-color':'transparent'};setTimeout(function(){var onMouseEnter=function(){addStyleNode('#'+node.id,{'pointer-events':'none'});node.removeEventListener('mouseover',onMouseEnter,true);node.removeEventListener('mouseenter',onMouseEnter,true);};node.addEventListener('mouseover',onMouseEnter,true);node.addEventListener('mouseenter',onMouseEnter,true);},3e3);addStyleNode('#'+node.id,rootStyles);addStyleNode('#'+node.id+' *',{opacity:'0','pointer-events':'none'});var marginObserver=new MutationObserver(function(){var marginTop=document.documentElement.style.marginTop;if(marginTop&&parseInt(marginTop,10)!==0){document.documentElement.style.marginTop='';}});setTimeout(function(){marginObserver.disconnect();marginObserver=null;},5e3);marginObserver.observe(document.documentElement,{attributes:true,attributeFilter:['style']});document.documentElement.style.marginTop='';}function isDiv(node){return node.tagName==='DIV';}function hasSovetnikLink(node){return!!node.querySelector('[href*="sovetnik.market.yandex.ru"]');}function getStyle(node,prop){return window.getComputedStyle(node).getPropertyValue(prop);}try{init();startObserve();patchOnMessage();}catch(e){if(typeof console!=='undefined'){console.error('error while kick sovetnik',e);}}})();
