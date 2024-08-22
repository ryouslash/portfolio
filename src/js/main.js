import $ from 'jquery';
import {
  config,
  dom,
  library
} from '@fortawesome/fontawesome-svg-core';
import {
  faPenNib,
  faCode,
  faServer,
  faChevronDown,
  faLink,
  faChevronUp,
  faBars,
  faXmark,
  faCheck,
  faTag,
  faChevronLeft,
  faChevronRight,
  faSackDollar
} from '@fortawesome/free-solid-svg-icons';
import {
  faEnvelope,
  faHandshake,
  faHandPointRight
} from '@fortawesome/free-regular-svg-icons';
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

$(function() {

  // Font awesome 読み込み
  library.add(faEnvelope, faHandshake, faPenNib, faCode, faServer, faChevronDown, faLink, faInstagram, faFacebook, faGithub, faLinkedin, faChevronUp, faBars, faXmark, faCheck, faTag, faChevronLeft, faChevronRight, faSackDollar, faHandPointRight);

  dom.i2svg();
  
  // 100vwの調整
  function setVw() {
    let vw = $(window).width() / 100 + "px";
    $(":root").css("--vw", vw);
  }
  
  setVw(); // 初期ロード時に関数を実行

  $(window).on("load resize", function() { // ロード時、resize時に関数を実行
    setVw();
  });

  const header = document.querySelector('.l-header');
  const headerHeight = header.offsetHeight;
  const drawerBtn = document.querySelector('.l-header__drawerBtn');
  const drawerMenu = document.querySelector('.p-drawerMenu');

  if (drawerBtn && drawerMenu) {
    drawerBtn.addEventListener('click', function () {
      drawerBtn.classList.toggle('is-open');
      drawerMenu.classList.toggle('is-show');
    });
  }

  // スムーススクロール
  if (location.hash) {
    let target = $(location.hash);
    if (target.length) {
      let position = target.offset().top - headerHeight;
      $("html, body").animate({
          scrollTop: position,
        },
        0 // ページ読み込み時のスクロールは即時
      );
    }
  }

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    let speed = 2000;
    let href = $(this).attr("href");
    let target = $(href === "#" || href === "" ? "html" : href);
    let position = target.offset().top - headerHeight;

    $("html, body").animate({
        scrollTop: position,
      },
      speed,
      "swing"
    );
  });

  // ページトップボタンをスクロールしたところで表示
  var pageTop = $(".c-pageTop");
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 1000) {
      pageTop.addClass('is-show');
    } else {
      pageTop.removeClass('is-show');
    }
  });

  // p-ficCta__leftをクリックすると、p-ficCtaにis-activeがつく
  let fixCtaLeft = document.querySelector('.p-fixCta__left');
  let fixCtaClose = document.querySelector('.p-fixCta__close');

  if (fixCtaLeft) {
    fixCtaLeft.addEventListener('click', function() {
      let targetElement = document.querySelector('.p-fixCta');
      if (targetElement) {
        targetElement.classList.toggle('is-active');
      }
    });
  }

  if (fixCtaClose) {
    fixCtaClose.addEventListener('click', function() {
      let targetElement = document.querySelector('.p-fixCta');
      if (targetElement) {
        targetElement.classList.remove('is-active');
      }
    });
  }
});