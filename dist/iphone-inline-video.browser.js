var makeVideoPlayableInline=function(){"use strict";function e(e){var r=this;this.start=function(n){if(n||!r.id){r.id=requestAnimationFrame(r.start);e(n-(r.prev||n));r.prev=n}};this.stop=function(){cancelAnimationFrame(r.id);delete r.id;delete r.prev}}function r(e,r,n,i){var t=function d(r){var t=n&&e[n];delete e[n];if(Boolean(t)===Boolean(i)){r.stopImmediatePropagation()}};e.addEventListener(r,t,false);return{forget:function u(){return e.removeEventListener(r,t,false)}}}function n(e,r,n,i){function t(){return n[r]}function d(e){n[r]=e}if(i){d(e[r])}Object.defineProperty(e,r,{get:t,set:d})}var i=typeof Symbol==="undefined"?function(e){return"@"+(e?e:"@")+Math.random().toString(26)}:Symbol;var t=/iPhone|iPod/i.test(navigator.userAgent);var d=i();var u=i();var a=i("nativeplay");var v=i("nativepause");function o(e){var r=new Audio;r.src=e.currentSrc||e.src;return r}var s=Array(3);s.i=0;function f(e,r){e.currentTime=r;s[++s.i%3]=r*100|0/100}function c(e){return e.driver.currentTime>=e.video.duration}function l(e){var r=this;if(!r.hasAudio){r.driver.currentTime=r.video.currentTime+e/1e3;if(r.video.loop&&c(r)){r.driver.currentTime=0}}f(r.video,r.driver.currentTime);if(r.video.ended){r.video.pause();return false}}function p(){var e=this;var r=e[d];if(e.webkitDisplayingFullscreen){e[a]();return}if(!e.paused){return}if(!e.buffered.length){e.load()}r.driver.play();r.updater.start();e.dispatchEvent(new Event("play"));e.dispatchEvent(new Event("playing"))}function m(){var e=this;var r=e[d];r.driver.pause();r.updater.stop();if(e.paused){return}e.dispatchEvent(new Event("pause"));if(e.ended){e[u]=true;e.dispatchEvent(new Event("ended"))}if(e.webkitDisplayingFullscreen){e[v]()}}function h(r,n){var i=r[d]={};i.hasAudio=n;i.video=r;i.updater=new e(l.bind(i));if(n){i.driver=o(r)}else{i.driver={muted:true,paused:true,pause:function t(){i.driver.paused=true},play:function u(){i.driver.paused=false;if(c(i)){f(r,0)}},get ended(){return c(i)}}}r.addEventListener("emptied",function(){if(i.driver.src&&i.driver.src!==r.src){f(r,0);r.pause();i.driver.src=r.src}},false);r.addEventListener("webkitbeginfullscreen",function(){if(!r.paused){r.pause();r[a]()}else if(n&&!i.driver.buffered.length){i.driver.load()}});if(n){r.addEventListener("webkitendfullscreen",function(){i.driver.currentTime=i.video.currentTime});r.addEventListener("seeking",function(){if(s.indexOf(i.video.currentTime*100|0/100)<0){i.driver.currentTime=i.video.currentTime}})}}function g(e){var i=e[d];e[a]=e.play;e[v]=e.pause;e.play=p;e.pause=m;n(e,"paused",i.driver);n(e,"muted",i.driver,true);n(e,"ended",i.driver);n(e,"loop",i.driver,true);r(e,"seeking");r(e,"seeked");r(e,"ended",u,false)}function y(e){var r=arguments.length<=1||arguments[1]===undefined?true:arguments[1];var n=arguments.length<=2||arguments[2]===undefined?true:arguments[2];if(n&&!t){return}h(e,r);g(e);if(!r&&e.autoplay){e.play()}}return y}();
