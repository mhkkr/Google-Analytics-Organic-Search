/*
 * 登録 - 全自動（可視化）
 */

javascript:

(function(d){function l(){(function($){

// iframe要素を取得
var iframe = $('#galaxyIframe').contents();
if (iframe.find('#ID-m-content-content h2').text() === 'オーガニック検索ソース') {

  if ( ! $('body').hasClass('ga_search_data_current') ) { // 連動[1] - 二度押し防止

    $('body')
      .addClass('ga_search_data_current') // 連動[1] - 二度押し防止
      .css({'position': 'relative'})
      .append('<div style="background-color: rgba(0, 0, 0, .5); height: 100%; position: fixed; left: 0; top: 0; width: 99%; z-index: 999999999;"><div style="background-color: #fff; border-radius: 9px; border: 3px solid #333; padding: 20px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"><h1 style="margin: 0; text-align: center">オーガニック検索ソース[登録]</h1><div id="ga_search_data_state" style="margin-top: 1em; text-align: center;">このまましばらくお待ちください。</div><div style="background-color: #fff; border: 1px solid #ccc; margin: 1em auto 0; overflow: hidden; position: relative; width: 300px;"><div id="ga_search_data_bar" style="background-color: #ddd; display: inline-block; height: 100%; position: absolute; left: 0; top: 0; transition: width .4s;"></div><div style="padding: .25em; position: relative; text-align: center; z-index: 9;"><span id="ga_search_data_now">1</span>/<span id="ga_search_data_max">35</span></div></div><div style="margin-top: 1em; text-align: center;"><a href="#" id="ga_search_data_cancel">キャンセル</a></div></div></div>')
    ;

    var s = 3000, // 処理待機時間
        mv = 38,  // 登録最大個数
        $e = $('#ga_search_data_state'),
        $r = $('#ga_search_data_bar'),
        $n = $('#ga_search_data_now'),
        $m = $('#ga_search_data_max'),
        $c = $('#ga_search_data_cancel')
    ;

    var roop;
    function roopDo() {
      roop = setInterval(function() { action(); }, s);
    }

    action();
    function action() {
      clearInterval(roop);

      if (iframe.find('#ID-m-content-content input[value="+ 検索エンジンを追加"]')) {
        var $b = iframe.find('#ID-m-content-content input[value="+ 検索エンジンを追加"]'),
            $a = iframe.find('#ID-m-content-content tbody.ID-adminTableBody'),
            $t = $a.children('tr'),
            l = $t.filter('[class*="ID-row-"]').length + 1,
            np = Math.floor((l / mv) * 100)
        ;
        $m.text(mv);
        $r.width(np + '%');
        $n.text(l);
        $c.click(function(e) {
          location.reload();
          e.preventDefault();
        });
        function d(d1, d2, d3) {
          $b.click();
          setTimeout(function() {
            poporon();
            function poporon() {
              if (iframe.find('#ID-m-content-content input[type="text"]').length === 0) {
                // 実行が早すぎた時の処理
                setTimeout(function() {
                  poporon();
                }, s);
              } else
              {
                iframe.find('#ID-m-content-content input[data-name="displayName"]').val(d1);
                iframe.find('#ID-m-content-content input[data-name="domainName"]').val(d2);
                iframe.find('#ID-m-content-content input[data-name="queryParam"]').val(d3);
                iframe.find('#ID-m-content-content button[data-name="actionFormButton"]').click();
                roopDo();
              }
            }
          }, s);
        }

        if ( l  === 0  ) { d("so-net", "so-net.ne.jp", "query"); } else
        if ( l  === 1  ) { d("nifty", "nifty.com", "Text"); } else
        if ( l  === 2  ) { d("nifty", "nifty.com", "q"); } else
        if ( l  === 3  ) { d("hi-ho", "hi-ho.excite.co.jp", "search"); } else
        if ( l  === 4  ) { d("odn", "odn.excite.co.jp", "search"); } else
        if ( l  === 5  ) { d("eonet", "eonet.excite.co.jp", "search"); } else
        if ( l  === 6  ) { d("excite", "excite.co.jp", "q"); } else
        if ( l  === 7  ) { d("livedoor", "livedoor.com", "q"); } else
        if ( l  === 8  ) { d("ocn", "ocn.ne.jp", "MT"); } else
        if ( l  === 9  ) { d("j:com", "search.myjcom.jp", "q"); } else
        if ( l  === 10 ) { d("sleipnir", "fenrir-inc.com", "q"); } else
        if ( l  === 11 ) { d("lunascape", "luna.tv", "keyword"); } else
        if ( l  === 12 ) { d("cybozu", "cybozu.net", "Keywords"); } else
        if ( l  === 13 ) { d("sony", "sony.jp", "MT"); } else
        if ( l  === 14 ) { d("fujitsu", "fmworld.net", "q"); } else
        if ( l  === 15 ) { d("fujitsu", "fmworld.net", "Text"); } else
        if ( l  === 16 ) { d("ecnavi", "ecnavi.jp", "Keywords"); } else
        if ( l  === 17 ) { d("pex", "pex.jp", "Keywords"); } else
        if ( l  === 18 ) { d("hao123", "hao123.com", "query"); } else
        if ( l  === 19 ) { d("ceron", "ceron.jp", "q"); } else
        if ( l  === 20 ) { d("お財布.com", "search.osaifu.com", "w"); } else
        if ( l  === 21 ) { d("warau.jp", "warau.jp", "search_word"); } else
        if ( l  === 22 ) { d("net-lavi", "netlavis.azione.jp", "q"); } else
        if ( l  === 23 ) { d("genieo", "search.genieo.com", "q"); } else
        if ( l  === 24 ) { d("funmoods search", "searchfunmoods.com", "q"); } else
        if ( l  === 25 ) { d("fooooo", "fooooo.com", "q"); } else
        if ( l  === 26 ) { d("便利コム", "benri.com", "Keywords"); } else
        if ( l  === 27 ) { d("スマート検索", "smart-search.jp", "Keywords"); } else
        if ( l  === 28 ) { d("jword", "jword.jp", "name"); } else
        if ( l  === 29 ) { d("jword", "jword.jp", "q"); } else
        if ( l  === 30 ) { d("aswidget", "aswidget.com", "Keywords"); } else
        if ( l  === 31 ) { d("wow", "jp.wow.com", "q"); } else
        if ( l  === 32 ) { d("adingo.jp", "adingo.jp", "Keywords"); } else
        if ( l  === 33 ) { d("tnc", "search.tnc.ne.jp", "q"); } else
        if ( l  === 34 ) { d("t-com", "search.t-com.ne.jp", "q"); } else
        if ( l  === 35 ) { d("jiqoo", "search.jiqoo.jp", "q"); } else
        if ( l  === 36 ) { d("auone", "sp-web.search.auone.jp", "q"); } else
        if ( l  === 37 ) { d("green goo", "green.search.goo.ne.jp", "MT"); } else
        {
          $e.css({'color': '#23945C', 'font-weight': 'bold'}).text('登録が完了しました！');
          $n.text(mv);
          $c.text('閉じる');
        }
      } else {
        // 実行が早すぎた時の処理
        setTimeout(function() {
          action();
        }, s);
      } // End - querySelector

    } // End - action()

  } // End - body hasClass

} else {

  alert('実行可能なページではありません。');

} // End - オーガニック検索ソース

})(jQuery)}if(typeof jQuery=='undefined'){var j=d.createElement('script');j.type='text/javascript';j.src='https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';d.body.appendChild(j);j.onload=l}else{l()}})(document);