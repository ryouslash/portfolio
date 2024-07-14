// modules/promise.js
import $ from 'jquery';

export function bgChange() {
  $('.js-promise__img').each(function(index) {
    // 画像の位置を取得
    var imgTop = $(this).offset().top;
    var imgBottom = imgTop + $(this).outerHeight();
    // ウィンドウのスクロール位置を取得
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();

    // 1番目の要素
    if (index === 0) {
      // 要素がウィンドウと重なり終わって上部に隠れたとき（ここで背景色を変更）
      if (imgBottom < windowTop) {
        $('.p-promise__item').eq(index).removeClass('is-active');
        // $('.p-promise').addClass('is-bg2');
        // $('.p-promise').removeClass('is-bg1');
      } else {
        // 要素がウィンドウと重なる前、要素がウィンドウと重なっているとき
        $('.p-promise__item').eq(index).addClass('is-active');
        // $('.p-promise').addClass('is-bg1');
        // $('.p-promise').removeClass('is-bg2');
      }
    }

    // 2番目の要素
    if (index === 1) {
      if (imgTop > windowTop) {
        // 要素がウィンドウと重なる前
        $('.p-promise__item').eq(index).removeClass('is-active');
      } else if (imgBottom < windowTop) {
        // 要素がウィンドウと重なり終わって上部に隠れたとき（ここで背景色を変更）
        $('.p-promise__item').eq(index).removeClass('is-active');
        // $('.p-promise').addClass('is-bg3').removeClass('is-bg2');
      } else {
        // 要素がウィンドウと重なっているとき
        $('.p-promise__item').eq(index).addClass('is-active');
        // $('.p-promise').removeClass('is-bg3');
      }
    }

    // 3番目の要素
    if (index === 2) {
      if (imgTop > windowTop) {
        // 要素がウィンドウと重なる前
        $('.p-promise__item').eq(index).removeClass('is-active');
      } else if (imgBottom < windowTop) {
        // 要素がウィンドウと重なり終わって上部に隠れたとき（ここで背景色を変更）
        $('.p-promise__item').eq(index).removeClass('is-active');
        // $('.p-promise').addClass('is-bg4').removeClass('is-bg3');
      } else {
        // 要素がウィンドウと重なっているとき
        $('.p-promise__item').eq(index).addClass('is-active');
        // $('.p-promise').removeClass('is-bg4');
      }
    }

    // 4番目の要素の特別扱い
    if (index === 3) {
      // 要素がウィンドウと重なっているとき、要素がウィンドウと重なり終わって上部に隠れたとき
      if (imgTop <= windowTop) {
        $('.p-promise__item').eq(index).addClass('is-active');
      } else {
        // 要素がウィンドウと重なる前
        $('.p-promise__item').eq(index).removeClass('is-active');
      }
    }
  });
}

export function initPromise() {
  // ページロード時に実行
  bgChange();

  // スクロール時に実行
  $(window).on('scroll', bgChange);
}
