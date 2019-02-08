//<![CDATA[
function doLiveSearch( ev, keywords ) {

	if( ev.keyCode == 38 || ev.keyCode == 40 ) {
		return false;
	}

	$('#livesearch_search_results').remove();
	$('#header .search-close').css('display','none');
	updown = -1;

	if( keywords == '' || keywords.length < 2 ) {
		return false;
	}
	keywords = encodeURI(keywords);

	$.ajax({url: $('base').attr('href') + 'index.php?route=product/search/ajax&keyword=' + keywords, dataType: 'json', success: function(result) {
		if( result.length > 0 ) {
			var eList = document.createElement('ul');
			html = '<ul id="livesearch_search_results">';
			html += '<li class="livesearch_text">Р’С‹Р±РµСЂРёС‚Рµ РІР°СЂРёР°РЅС‚ РёР»Рё РїСЂРѕРґРѕР»Р¶РёС‚Рµ РІРІРѕРґ</li>';
			eList.id = 'livesearch_search_results';
			var eListElem;
			var eLink;
			for( var i in result ) {
				eListElem = document.createElement('li');
				eLink = document.createElement('a');
				eLink.appendChild( document.createTextNode(result[i].name) );
				eListElem.appendChild(eLink);
				html += '<li class="livesearch_items"><a href="' + result[i].href + '"><div class="quicksearch_left"><img src="'+result[i].thumb+'" /></div><div class="quicksearch_center"><div class="quicksearch_center_plashka"></div>'+result[i].name+'</div><div class="quicksearch_right">'+result[i].price+'</div></a></li>';
			}
			if( $('#livesearch_search_results').length > 0 ) {
				$('#livesearch_search_results').remove();
				$('#header .search-close').css('display','none');
			}
			html += '<li class="livesearch_results"><div class="livesearch_all_results"><span>Р’СЃРµ СЂРµР·СѓР»СЊС‚Р°С‚С‹ РїРѕРёСЃРєР°</span></div></li>';
			html += '</ul>';
			$('#search').append(html);
			$('#header .search-close').css('display','block');
		}
	}});

	return true;
}

function upDownEvent( ev ) {
	var elem = document.getElementById('livesearch_search_results');
	var fkey = $('#search').find('[name=search]').first();

	if( elem ) {
		var length = elem.childNodes.length - 1;

		if( updown != -1 && typeof(elem.childNodes[updown]) != 'undefined' ) {
			$(elem.childNodes[updown]).removeClass('highlighted');
		}

		// Up
		if( ev.keyCode == 38 ) {
			if (updown==1) updown=length;
			if (updown==-1) updown=length;
			updown = ( updown > 0 ) ? --updown : updown;
		}
		else if( ev.keyCode == 40 ) {
			updown = ( updown < length ) ? ++updown : updown;
			if (updown==0) updown++;
			if (updown==length) updown=1;
		}

		if( updown >= 0 && updown <= length ) {
			$(elem.childNodes[updown]).addClass('highlighted');

			var text = elem.childNodes[updown].childNodes[0].childNodes[1].text;
			if( typeof(text) == 'undefined' ) {
				text = elem.childNodes[updown].childNodes[0].childNodes[1].innerText;
			}

			$('#search').find('[name=search]').first().val( new String(text).replace(/(\s\(.*?\))$/, '') );
		}
	}

	return false;
}

var updown = -1;

$(document).ready(function(){
	$('#search').find('[name=search]').first().keyup(function(ev){
		doLiveSearch(ev, this.value);
	}).focus(function(ev){
		doLiveSearch(ev, this.value);
	}).keydown(function(ev){
		upDownEvent( ev );
	}).blur(function(){
		window.setTimeout("$('#livesearch_search_results').remove();updown=0;$('#header .search-close').css('display','none');", 4000);
	});
	$(document).bind('keydown', function(ev) {
		try {
			if( ev.keyCode == 13 && $('.highlighted').length > 0 ) {
				document.location.href = $('.highlighted').find('a').first().attr('href');
			}
		}
		catch(e) {}
	});
	$('.livesearch_all_results').live('click', function(e) {
		$('.button-search').click();
	});
	$('#header .search-close').live('click', function(e) {
		$('#livesearch_search_results').remove();
		updown=0;
		$('#header .search-close').css('display','none');
		$('#search').find('[name=search]').first().val('');
	});

});
//]]>
