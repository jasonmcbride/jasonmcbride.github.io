!function e(o,t,n){function i(r,c){if(!t[r]){if(!o[r]){var l="function"==typeof require&&require;if(!c&&l)return l(r,!0);if(a)return a(r,!0);var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}var u=t[r]={exports:{}};o[r][0].call(u.exports,function(e){var t=o[r][1][e];return i(t?t:e)},u,u.exports,e,o,t,n)}return t[r].exports}for(var a="function"==typeof require&&require,r=0;r<n.length;r++)i(n[r]);return i}({1:[function(e,o,t){var n;n=n||{},n.Tracking={init:function(){!function(e,o,t,n,i,a,r){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,a=o.createElement(t),r=o.getElementsByTagName(t)[0],a.async=1,a.src=n,r.parentNode.insertBefore(a,r)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-86673813-1","auto"),ga("send","pageview")}},n.Header={init:function(){this.initScrolling(),void 0!=e&&(clearInterval(e),e=0);var e=setInterval(this.blink,5e3),o=$(".logo");o.click(function(e){e.preventDefault()})},initScrolling:function(){$(".moveToWork").click(function(e){e.preventDefault(),$("html,body").animate({scrollTop:$("#portfolio").position().top},600,function(){location.hash="recentwork"})}),$(".moveToCTA").click(function(e){e.preventDefault(),$("html,body").animate({scrollTop:$(".calltoaction").position().top},600,function(){location.hash="contactme"})}),$(".moveToHome").click(function(e){e.preventDefault(),$("html,body").animate({scrollTop:$("#header").position().top},600,function(){location.hash="home"})}),$(".moveToAbout").click(function(e){e.preventDefault(),$("html,body").animate({scrollTop:$(".about").position().top},600,function(){location.hash="aboutme"})})},blink:function(){var e=$(".Right_eye"),o=$(".Left_eye");e.addClass("eyes_close").removeClass("eyes_open"),o.addClass("eyes_close").removeClass("eyes_open"),setTimeout(function(){e.removeClass("eyes_close").addClass("eyes_open"),o.removeClass("eyes_close").addClass("eyes_open")},200)}},$(function(){n.Header.init(),n.Tracking.init()})},{}]},{},[1]);