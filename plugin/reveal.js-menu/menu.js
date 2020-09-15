




<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://github.githubassets.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-lC+Z9kBc6E9r9umj6DgEEoQP7CX8RgGJGegRUJbthY1Bus2eemD1Kkc1Wbacj7hxeuvVCuyeqfNsKZWxqt1uIw==" rel="stylesheet" href="https://github.githubassets.com/assets/frameworks-942f99f6405ce84f6bf6e9a3e8380412.css" />
  
    <link crossorigin="anonymous" media="all" integrity="sha512-/pPccHUYIchnELfXK2NyJXFITJLJHAL3lokSy2rsjIwr+Xe03W5Le4oi6CrwkQ8aD75xdWiKoIrTpPKHUszpUg==" rel="stylesheet" href="https://github.githubassets.com/assets/github-fe93dc70751821c86710b7d72b637225.css" />
    
    
    
    


  <meta name="viewport" content="width=device-width">
  
  <title>reveal.js-menu/menu.js at master · denehyg/reveal.js-menu</title>
    <meta name="description" content="Slide out menu for reveal.js. Contribute to denehyg/reveal.js-menu development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">
  <meta name="apple-itunes-app" content="app-id=1477376905">

    <meta name="twitter:image:src" content="https://avatars0.githubusercontent.com/u/3284107?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="denehyg/reveal.js-menu" /><meta name="twitter:description" content="Slide out menu for reveal.js. Contribute to denehyg/reveal.js-menu development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars0.githubusercontent.com/u/3284107?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="denehyg/reveal.js-menu" /><meta property="og:url" content="https://github.com/denehyg/reveal.js-menu" /><meta property="og:description" content="Slide out menu for reveal.js. Contribute to denehyg/reveal.js-menu development by creating an account on GitHub." />



  

  <link rel="assets" href="https://github.githubassets.com/">
    <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/3624059/ws?session=eyJ2IjoiVjMiLCJ1IjozNjI0MDU5LCJzIjo1Njk4NDE0MjcsImMiOjE3NTI2OTU4MjIsInQiOjE2MDAyMTEzMTR9--1a86d71dfcfc5ed6c2ce71146620685c0a989bb0336c967597fdbd18f173cf33" data-refresh-url="/_alive">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

  <meta name="request-id" content="D4BE:477A:9C3CE2:DF8CE3:5F614971" data-pjax-transient="true" /><meta name="html-safe-nonce" content="c2f5bda3dd8f75e11a7ade3074ebe5e62c90ef6b" data-pjax-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9kZW5laHlnL3JldmVhbC5qcy1tZW51IiwicmVxdWVzdF9pZCI6IkQ0QkU6NDc3QTo5QzNDRTI6REY4Q0UzOjVGNjE0OTcxIiwidmlzaXRvcl9pZCI6IjEyMzIyNzk0NDk0Mjc0OTAwODMiLCJyZWdpb25fZWRnZSI6ImZyYSIsInJlZ2lvbl9yZW5kZXIiOiJpYWQifQ==" data-pjax-transient="true" /><meta name="visitor-hmac" content="c5b364620d92781ff7a3dfd18e20366c64a9f0a777b28f2d4306ae086cb2054d" data-pjax-transient="true" /><meta name="cookie-consent-required" content="true" />

    <meta name="hovercard-subject-tag" content="repository:39561312" data-pjax-transient>


  <meta name="github-keyboard-shortcuts" content="repository,source-code" data-pjax-transient="true" />

  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="c1kuD-K2HIVF635lypcsWPoD4kilo5-jA_wBFyT4uMY">
  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-ga_id" content="" class="js-octo-ga-id" /><meta name="octolytics-actor-id" content="3624059" /><meta name="octolytics-actor-login" content="avimehenwal" /><meta name="octolytics-actor-hash" content="13db692eaa8b6565224d645559fc8f7bbc06dfde6cc8b6865d6f72472d8b54d6" />

  <meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />

  





    <meta name="google-analytics" content="UA-3769691-2">

  <meta class="js-ga-set" name="userId" content="1c525ecb8b44c5a53bc7e4b39bac4093">

<meta class="js-ga-set" name="dimension10" content="Responsive" data-pjax-transient>

<meta class="js-ga-set" name="dimension1" content="Logged In">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="avimehenwal">


      <meta name="expected-hostname" content="github.com">

      <meta name="js-proxy-site-detection-payload" content="OWQwNDFlOTdkYWFmOTNiODFkMDNiZGMwOGJjZjc4NDAwMGUzZmIxM2VlNTFiNzQxYmRhNDEyMjZkOTgxY2I0Ynx7InJlbW90ZV9hZGRyZXNzIjoiMTk0Ljk1LjEuMjIxIiwicmVxdWVzdF9pZCI6IkQ0QkU6NDc3QTo5QzNDRTI6REY4Q0UzOjVGNjE0OTcxIiwidGltZXN0YW1wIjoxNjAwMjExMzE0LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="MARKETPLACE_PENDING_INSTALLATIONS,JS_HTTP_CACHE_HEADERS">

  <meta http-equiv="x-pjax-version" content="6a49488c2bbef9708d8d871bc5e0ff05">
  

        <link href="https://github.com/denehyg/reveal.js-menu/commits/master.atom" rel="alternate" title="Recent Commits to reveal.js-menu:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/denehyg/reveal.js-menu git https://github.com/denehyg/reveal.js-menu.git">

  <meta name="octolytics-dimension-user_id" content="3284107" /><meta name="octolytics-dimension-user_login" content="denehyg" /><meta name="octolytics-dimension-repository_id" content="39561312" /><meta name="octolytics-dimension-repository_nwo" content="denehyg/reveal.js-menu" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="39561312" /><meta name="octolytics-dimension-repository_network_root_nwo" content="denehyg/reveal.js-menu" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/denehyg/reveal.js-menu/blob/master/menu.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://github.githubassets.com/pinned-octocat.svg" color="#000000">
  <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png">
  <link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg">

<meta name="theme-color" content="#1e2327">


  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-in env-production page-responsive page-blob">
    

    <div class="position-relative js-header-wrapper ">
      <a href="#start-of-content" class="p-3 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
      <span class="progress-pjax-loader width-full js-pjax-loader-bar Progress position-fixed">
    <span style="background-color: #79b8ff;width: 0%;" class="Progress-item progress-pjax-loader-bar "></span>
</span>      
      



          <header class="Header py-md-0 js-details-container Details flex-wrap flex-md-nowrap px-3" role="banner">
  <div class="Header-item d-none d-md-flex">
    <a class="Header-link" href="https://github.com/" data-hotkey="g d"
  aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

  </div>

  <div class="Header-item d-md-none">
    <button class="Header-link btn-link js-details-target" type="button" aria-label="Toggle navigation" aria-expanded="false">
      <svg height="24" class="octicon octicon-three-bars" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
    </button>
  </div>

  <div class="Header-item Header-item--full flex-column flex-md-row width-full flex-order-2 flex-md-order-none mr-0 mr-md-3 mt-3 mt-md-0 Details-content--hidden-not-important d-md-flex">
        <div hidden class="d-none">
</div>
<div class="header-search header-search-current js-header-search-current flex-auto  flex-self-stretch flex-md-self-auto mr-0 mr-md-3 mb-3 mb-md-0 scoped-search site-scoped-search js-site-search position-relative js-jump-to js-header-search-current-jump-to "
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="39561312" data-scoped-search-url="/denehyg/reveal.js-menu/search" data-unscoped-search-url="/search" action="/denehyg/reveal.js-menu/search" accept-charset="UTF-8" method="get">
      <label class="form-control input-sm header-search-wrapper p-0 header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search or jump to…"
          data-unscoped-placeholder="Search or jump to…"
          data-scoped-placeholder="Search or jump to…"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          aria-label="Search or jump to…"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations"
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" value="2eKZl6kDMdiQApcCQFJpsmQTpy7XFkmdvE1OBdmz6Xd/OSxvXZL34E6LyEDDqcNyqVNecEn45kjiXhj5Es+woA==" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://github.githubassets.com/images/search-key-slash.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              
<ul class="d-none js-jump-to-suggestions-template-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-suggestion" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

</ul>

<ul class="d-none js-jump-to-no-results-template-container">
  <li class="d-flex flex-justify-center flex-items-center f5 d-none js-jump-to-suggestion p-2">
    <span class="text-gray">No suggested jump to results</span>
  </li>
</ul>

<ul id="jump-to-results" role="listbox" class="p-0 m-0 js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container">
  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-scoped-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>

  

<li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item js-jump-to-global-search d-none" role="option">
  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open p-2" href="">
    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
    </div>

    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
    </div>

    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
        In this repository
      </span>
      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
        All GitHub
      </span>
      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>

    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
      Jump to
      <span class="d-inline-block ml-1 v-align-middle">↵</span>
    </div>
  </a>
</li>


    <li class="d-flex flex-justify-center flex-items-center p-0 f5 js-jump-to-suggestion">
      <img src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
    </li>
</ul>

            </div>
      </label>
</form>  </div>
</div>


    <nav class="d-flex flex-column flex-md-row flex-self-stretch flex-md-self-auto" aria-label="Global">
    <a class="Header-link py-md-3 d-block d-md-none py-2 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:dashboard:user" aria-label="Dashboard" href="/dashboard">
      Dashboard
</a>
  <a class="js-selected-navigation-item Header-link py-md-3  mr-0 mr-md-3 py-2 border-top border-md-top-0 border-white-fade-15" data-hotkey="g p" data-ga-click="Header, click, Nav menu - item:pulls context:user" aria-label="Pull requests you created" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls" href="/pulls">
      Pull<span class="d-inline d-md-none d-lg-inline"> request</span>s
</a>
  <a class="js-selected-navigation-item Header-link py-md-3  mr-0 mr-md-3 py-2 border-top border-md-top-0 border-white-fade-15" data-hotkey="g i" data-ga-click="Header, click, Nav menu - item:issues context:user" aria-label="Issues you created" data-selected-links="/issues /issues/assigned /issues/mentioned /issues" href="/issues">
    Issues
</a>

    <div class="mr-0 mr-md-3 py-2 py-md-0 border-top border-md-top-0 border-white-fade-15">
      <a class="js-selected-navigation-item Header-link py-md-3 d-inline-block" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links=" /marketplace" href="/marketplace">
        Marketplace
</a>      

    </div>

  <a class="js-selected-navigation-item Header-link py-md-3  mr-0 mr-md-3 py-2 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
    Explore
</a>


    <a class="Header-link d-block d-md-none mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade-15" href="/avimehenwal">
      <img class="avatar avatar-user" src="https://avatars3.githubusercontent.com/u/3624059?s=40&amp;v=4" width="20" height="20" alt="@avimehenwal" />
      avimehenwal
</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="z8WIhvqEzn5l+jwKTc6ee5pBofUNplNO6c30w7rHK4pWRW5FTVycOlwzGA0/QbpDCSpQu/PTtaAkleyfd0/UzQ==" />
      <button type="submit" class="Header-link mr-0 mr-md-3 py-2 py-md-3 border-top border-md-top-0 border-white-fade-15 d-md-none btn-link d-block width-full text-left" data-ga-click="Header, sign out, icon:logout" style="padding-left: 2px;">
        <svg class="octicon octicon-sign-out v-align-middle" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.75C2 1.784 2.784 1 3.75 1h2.5a.75.75 0 010 1.5h-2.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h2.5a.75.75 0 010 1.5h-2.5A1.75 1.75 0 012 13.25V2.75zm10.44 4.5H6.75a.75.75 0 000 1.5h5.69l-1.97 1.97a.75.75 0 101.06 1.06l3.25-3.25a.75.75 0 000-1.06l-3.25-3.25a.75.75 0 10-1.06 1.06l1.97 1.97z"></path></svg>
        Sign out
      </button>
</form></nav>

  </div>

  <div class="Header-item Header-item--full flex-justify-center d-md-none position-relative">
    <a class="Header-link" href="https://github.com/" data-hotkey="g d"
  aria-label="Homepage " data-ga-click="Header, go to dashboard, icon:logo">
  <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>

  </div>

  <div class="Header-item mr-0 mr-md-3 flex-order-1 flex-md-order-none">
    

    <notification-indicator class="js-socket-channel" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MzYyNDA1OSIsInQiOjE2MDAyMTEzMTR9--24a5356eb2606bba39c15109b6035b7b8dd5db398214d2ed036dc5c3dc921ee2">
      <a href="/notifications"
         class="Header-link notification-indicator position-relative tooltipped tooltipped-sw"
         aria-label="You have unread notifications"
         data-hotkey="g n"
         data-ga-click="Header, go to notifications, icon:unread"
         data-target="notification-indicator.link">
         <span class="mail-status unread" data-target="notification-indicator.modifier"></span>
         <svg class="octicon octicon-bell" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path><path fill-rule="evenodd" d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"></path></svg>
      </a>
    </notification-indicator>

  </div>


  <div class="Header-item position-relative d-none d-md-flex">
    <details class="details-overlay details-reset">
  <summary class="Header-link"
      aria-label="Create new…"
      data-ga-click="Header, create new, icon:add">
    <svg class="octicon octicon-plus" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"></path></svg> <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-n2">
    
<a role="menuitem" class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a role="menuitem" class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a role="menuitem" class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a role="menuitem" class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>


  <div role="none" class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="denehyg/reveal.js-menu">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/denehyg/reveal.js-menu/issues/new/choose" data-ga-click="Header, create new issue" data-skip-pjax>
      New issue
    </a>


  </details-menu>
</details>

  </div>

  <div class="Header-item position-relative mr-0 d-none d-md-flex">
    
  <details class="details-overlay details-reset js-feature-preview-indicator-container" data-feature-preview-indicator-src="/users/avimehenwal/feature_preview/indicator_check">

  <summary class="Header-link"
    aria-label="View profile and more"
    data-ga-click="Header, show menu, icon:avatar">
    <img
  alt="@avimehenwal"
  width="20"
  height="20"
  src="https://avatars0.githubusercontent.com/u/3624059?s=60&amp;v=4"
  class="avatar avatar-user " />

      <span class="feature-preview-indicator js-feature-preview-indicator" style="top: 10px;" hidden></span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="dropdown-menu dropdown-menu-sw mt-n2" style="width: 180px" >
    <div class="header-nav-current-user css-truncate"><a role="menuitem" class="no-underline user-profile-link px-3 pt-2 pb-2 mb-n2 mt-n1 d-block" href="/avimehenwal" data-ga-click="Header, go to profile, text:Signed in as">Signed in as <strong class="css-truncate-target">avimehenwal</strong></a></div>
    <div role="none" class="dropdown-divider"></div>

      <div class="pl-3 pr-3 f6 user-status-container js-user-status-context lh-condensed" data-url="/users/status?compact=1&amp;link_mentions=0&amp;truncate=1">
        
<div class="js-user-status-container rounded-1 px-2 py-1 mt-2 border"
  data-team-hovercards-enabled>
  <details class="js-user-status-details details-reset details-overlay details-overlay-dark">
    <summary class="btn-link btn-block link-gray no-underline js-toggle-user-status-edit toggle-user-status-edit "
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:3284107,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:3624059,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;}}" data-hydro-click-hmac="840e2fd9e7aaee64fca4932d76b45b030cf3a6f1692dcb185f2c3b591efc2c82">
      <div class="d-flex flex-items-center flex-items-stretch">
        <div class="f6 lh-condensed user-status-header d-flex user-status-emoji-only-header circle">
          <div class="user-status-emoji-container flex-shrink-0 mr-2 d-flex flex-items-center flex-justify-center lh-condensed-ultra v-align-bottom">
            <div><g-emoji class="g-emoji" alias="triangular_flag_on_post" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f6a9.png">🚩</g-emoji></div>
          </div>
        </div>
        <div class="
          
           user-status-message-wrapper f6 min-width-0"
           style="line-height: 20px;" >
          <div class="css-truncate css-truncate-target width-fit text-gray-dark text-left">
                <span>chasing Life</span>
          </div>
        </div>
      </div>
    </summary>
    <details-dialog class="details-dialog rounded-1 anim-fade-in fast Box Box--overlay" role="dialog" tabindex="-1">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?circle=0&amp;compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="kUQZ4pxxSGl3jA7xTJhp6gto1VHJVB5ZsSkgS96FkVN15/MwyKprDQ4hXjnG7+a3QFjfzU4Ed3+qe/Kil1Q75g==" />
        <div class="Box-header bg-gray border-bottom p-3">
          <button class="Box-btn-octicon js-toggle-user-status-edit btn-octicon float-right" type="reset" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
          </button>
          <h3 class="Box-title f5 text-bold text-gray-dark">Edit status</h3>
        </div>
        <input type="hidden" name="emoji" class="js-user-status-emoji-field" value=":triangular_flag_on_post:">
        <input type="hidden" name="organization_id" class="js-user-status-org-id-field" value="">
        <div class="px-3 py-2 text-gray-dark">
          <div class="js-characters-remaining-container position-relative mt-2">
            <div class="input-group d-table form-group my-0 js-user-status-form-group">
              <span class="input-group-button d-table-cell v-align-middle" style="width: 1%">
                <button type="button" aria-label="Choose an emoji" class="btn-outline btn js-toggle-user-status-emoji-picker btn-open-emoji-picker p-0">
                  <span class="js-user-status-original-emoji" hidden><div><g-emoji class="g-emoji" alias="triangular_flag_on_post" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f6a9.png">🚩</g-emoji></div></span>
                  <span class="js-user-status-custom-emoji"><div><g-emoji class="g-emoji" alias="triangular_flag_on_post" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f6a9.png">🚩</g-emoji></div></span>
                  <span class="js-user-status-no-emoji-icon" hidden>
                    <svg class="octicon octicon-smiley" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path></svg>
                  </span>
                </button>
              </span>
              <text-expander keys=": @" data-mention-url="/autocomplete/user-suggestions" data-emoji-url="/autocomplete/emoji">
                <input
                  type="text"
                  autocomplete="off"
                  data-no-org-url="/autocomplete/user-suggestions"
                  data-org-url="/suggestions?mention_suggester=1"
                  data-maxlength="80"
                  class="d-table-cell width-full form-control js-user-status-message-field js-characters-remaining-field"
                  placeholder="What's happening?"
                  name="message"
                  value="chasing Life"
                  aria-label="What is your current status?">
              </text-expander>
              <div class="error">Could not update your status, please try again.</div>
            </div>
            <div style="margin-left: 53px" class="my-1 text-small label-characters-remaining js-characters-remaining" data-suffix="remaining" hidden>
              80 remaining
            </div>
          </div>
          <include-fragment class="js-user-status-emoji-picker" data-url="/users/status/emoji"></include-fragment>
          <div class="overflow-auto ml-n3 mr-n3 px-3 border-bottom" style="max-height: 33vh">
            <div class="user-status-suggestions js-user-status-suggestions collapsed overflow-hidden">
              <h4 class="f6 text-normal my-3">Suggestions:</h4>
              <div class="mx-3 mt-2 clearfix">
                  <div class="float-left col-6">
                      <button type="button" value=":palm_tree:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="palm_tree" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f334.png">🌴</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          On vacation
                        </div>
                      </button>
                      <button type="button" value=":face_with_thermometer:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="face_with_thermometer" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f912.png">🤒</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Out sick
                        </div>
                      </button>
                  </div>
                  <div class="float-left col-6">
                      <button type="button" value=":house:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="house" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3e0.png">🏠</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Working from home
                        </div>
                      </button>
                      <button type="button" value=":dart:" class="d-flex flex-items-baseline flex-items-stretch lh-condensed f6 btn-link link-gray no-underline js-predefined-user-status mb-1">
                        <div class="emoji-status-width mr-2 v-align-middle js-predefined-user-status-emoji">
                          <g-emoji alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji>
                        </div>
                        <div class="d-flex flex-items-center no-underline js-predefined-user-status-message ws-normal text-left" style="border-left: 1px solid transparent">
                          Focusing
                        </div>
                      </button>
                  </div>
              </div>
            </div>
            <div class="user-status-limited-availability-container">
              <div class="form-checkbox my-0">
                <input type="checkbox" name="limited_availability" value="1" class="js-user-status-limited-availability-checkbox" data-default-message="I may be slow to respond." aria-describedby="limited-availability-help-text-truncate-true-compact-true" id="limited-availability-truncate-true-compact-true">
                <label class="d-block f5 text-gray-dark mb-1" for="limited-availability-truncate-true-compact-true">
                  Busy
                </label>
                <p class="note" id="limited-availability-help-text-truncate-true-compact-true">
                  When others mention you, assign you, or request your review,
                  GitHub will let them know that you have limited availability.
                </p>
              </div>
            </div>
          </div>
          <div class="d-inline-block f5 mr-2 pt-3 pb-2" >
  <div class="d-inline-block mr-1">
    Clear status
  </div>

  <details class="js-user-status-expire-drop-down f6 dropdown details-reset details-overlay d-inline-block mr-2">
    <summary class="btn btn-sm v-align-baseline" aria-haspopup="true">
      <div class="js-user-status-expiration-interval-selected d-inline-block v-align-baseline">
        Never
      </div>
      <div class="dropdown-caret"></div>
    </summary>

    <ul class="dropdown-menu dropdown-menu-se pl-0 overflow-auto" style="width: 220px; max-height: 15.5em">
      <li>
        <button type="button" class="btn-link dropdown-item js-user-status-expire-button ws-normal" title="Never">
          <span class="d-inline-block text-bold mb-1">Never</span>
          <div class="f6 lh-condensed">Keep this status until you clear your status or edit your status.</div>
        </button>
      </li>
      <li class="dropdown-divider" role="none"></li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2020-09-16T01:38:34+02:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2020-09-16T02:08:34+02:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2020-09-16T05:08:34+02:00">
            in 4 hours
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="today" value="2020-09-16T23:59:59+02:00">
            today
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="this week" value="2020-09-20T23:59:59+02:00">
            this week
          </button>
        </li>
    </ul>
  </details>
  <input class="js-user-status-expiration-date-input" type="hidden" name="expires_at" value="">
</div>

          <include-fragment class="js-user-status-org-picker" data-url="/users/status/organizations"></include-fragment>
        </div>
        <div class="d-flex flex-items-center flex-justify-between p-3 border-top">
          <button type="submit"  class="width-full btn btn-primary mr-2 js-user-status-submit">
            Set status
          </button>
          <button type="button"  class="width-full js-clear-user-status-button btn ml-2 js-user-status-exists">
            Clear status
          </button>
        </div>
</form>    </details-dialog>
  </details>
</div>

      </div>
      <div role="none" class="dropdown-divider"></div>

    <a role="menuitem" class="dropdown-item" href="/avimehenwal" data-ga-click="Header, go to profile, text:your profile" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;target&quot;:&quot;YOUR_PROFILE&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="4c2e680e63afb1427e2f16c0d68f507473580c07a96ab953bd31068cefade6e6" >Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/avimehenwal?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;target&quot;:&quot;YOUR_REPOSITORIES&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="f186b58dbb22644adb4c2c62b9d5425dd617d9c695f3454b02c049c620c61c31" >Your repositories</a>

      <a role="menuitem"
         class="dropdown-item"
         href="/settings/organizations"
         
         data-ga-click="Header, go to organizations, text:your organizations"
         data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;target&quot;:&quot;YOUR_ORGANIZATIONS&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="07a037921b4a392b5dd36da7343f183be0c36e6f6da83498e94b24d5b8298c7e"
         >Your organizations</a>


    <a role="menuitem" class="dropdown-item" href="/avimehenwal?tab=projects" data-ga-click="Header, go to projects, text:your projects" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;target&quot;:&quot;YOUR_PROJECTS&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="c107a3ba3acc8fd8fda139d4256ed45ad39ba801dbe2e0ecd11ee39265282acf" >Your projects</a>


    <a role="menuitem" class="dropdown-item" href="/avimehenwal?tab=stars" data-ga-click="Header, go to starred repos, text:your stars" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;target&quot;:&quot;YOUR_STARS&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="75dd75a1df76bdf1f68828f3e5abeca0337b0464c18cc1df8b75f90a850778c7" >Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;target&quot;:&quot;YOUR_GISTS&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="b0286782ce2ea59fe0fac769d79f2aef860823ad0eff8c44cca4d3243f260fe2" >Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/avimehenwal/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}"
    data-feature-preview-close-hmac="82ee3477aa4988239c7071c30a324e479ac2034e1d697982eff7bd2f4f6a1ba1"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}"
    data-hydro-click-hmac="b0606fab710a22ae52cd96faa98dc38e2c3663b6b68bcd53dafc1dabfe7ad89f"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://docs.github.com" data-ga-click="Header, go to help, text:help" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;target&quot;:&quot;HELP&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="f58b6428a619593484a3e6b6afdf0b9b97267e354b74da13d7050f73c8e94c84" >Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;target&quot;:&quot;SETTINGS&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="596beafd4cfdbb5dc977d7b4dbc9408be75c14677283a8d88c69b0a7715c5700" >Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="Z1Wc0lTgZpRWK+fwrWRgaDpkAHVnUDwnySb1Fbe3FNL+1XoR4zg00G/iw/ff60RQqQ/xO5kl2skEfu1Jej/rlQ==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;target&quot;:&quot;SIGN_OUT&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="bcb4542087ec950c4cad0cc60caa226f64165fd43da370a757772d9e22dc001f"  role="menuitem">
        Sign out
      </button>
      <input type="text" name="required_field_6ddc" hidden="hidden" class="form-control" /><input type="hidden" name="timestamp" value="1600211314315" class="form-control" /><input type="hidden" name="timestamp_secret" value="6f1ca195468eb67fb2b544062c3ade052bddc11575d95dee5c6159eeebdc0c24" class="form-control" />
</form>  </details-menu>
</details>

  </div>

</header>

          

    </div>

  <div id="start-of-content" class="show-on-focus"></div>




    <div id="js-flash-container">


  <template class="js-flash-template">
    <div class="flash flash-full  {{ className }}">
  <div class=" px-2" >
    <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
      <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
    </button>
    
      <div>{{ message }}</div>

  </div>
</div>
  </template>
</div>


  

  <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>



  <div
    class="application-main "
    data-commit-hovercards-enabled
    data-discussion-hovercards-enabled
    data-issue-and-pr-hovercards-enabled
  >
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main  >
      

    






  


  <div class="bg-gray-light pt-3 hide-full-screen mb-5">

      <div class="d-flex mb-3 px-3 px-md-4 px-lg-5">

        <div class="flex-auto min-width-0 width-fit mr-3">
            <h1 class=" d-flex flex-wrap flex-items-center break-word f3 text-normal">
    <svg class="octicon octicon-repo text-gray" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
  <span class="author ml-2 flex-self-stretch" itemprop="author">
    <a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/denehyg/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/denehyg">denehyg</a>
  </span>
  <span class="mx-1 flex-self-stretch">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="/denehyg/reveal.js-menu">reveal.js-menu</a>
  </strong>
  
</h1>


        </div>

          <ul class="pagehead-actions flex-shrink-0 d-none d-md-inline" style="padding: 2px 0;">

  <li>
            <form data-remote="true" class="d-flex js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="ewGcqj/YMxeLxZDK600lE5tSsUyZFHxapQVQpyPSocCCebfEhK5D2IFFEo34PcGfISvmn8IYuugV1bphAAcGDw==" />      <input type="hidden" name="repository_id" value="39561312">

      <details class="details-reset details-overlay select-menu hx_rsm">
        <summary class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:39561312,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="7e9f63acd3ca00a6a797bf05b35d14c6719741c17d5ae0e8016ade9d83bab153" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
              <svg height="16" class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
              Watch
          </span>
          <span class="dropdown-caret"></span>
</summary>        <details-menu
          class="select-menu-modal position-absolute mt-5"
          style="z-index: 99;">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
          </div>
          <div class="select-menu-list">
            <button type="submit" name="do" value="included" class="select-menu-item width-full" aria-checked="true" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Not watching</span>
                <span class="description">Be notified only when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg height="16" class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                  Watch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="release_only" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Releases only</span>
                <span class="description">Be notified of new releases, and when participating or @mentioned.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg height="16" class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                  Unwatch releases
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="subscribed" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Watching</span>
                <span class="description">Be notified of all conversations.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg class="octicon octicon-eye v-align-text-bottom" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path></svg>
                  Unwatch
                </span>
              </div>
            </button>

            <button type="submit" name="do" value="ignore" class="select-menu-item width-full" aria-checked="false" role="menuitemradio">
              <svg class="octicon octicon-check select-menu-item-icon" height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <div class="select-menu-item-text">
                <span class="select-menu-item-heading">Ignoring</span>
                <span class="description">Never be notified.</span>
                <span class="hidden-select-button-text" data-menu-button-contents>
                  <svg height="16" class="octicon octicon-bell-slash" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5c-.997 0-1.895.416-2.534 1.086A.75.75 0 014.38 1.55 5 5 0 0113 5v2.373a.75.75 0 01-1.5 0V5A3.5 3.5 0 008 1.5zM4.182 4.31L1.19 2.143a.75.75 0 10-.88 1.214L3 5.305v2.642a.25.25 0 01-.042.139L1.255 10.64A1.518 1.518 0 002.518 13h11.108l1.184.857a.75.75 0 10.88-1.214l-1.375-.996a1.196 1.196 0 00-.013-.01L4.198 4.321a.733.733 0 00-.016-.011zm7.373 7.19L4.5 6.391v1.556c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01.015.015 0 00.005.012.017.017 0 00.006.004l.007.001h9.037zM8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path></svg>
                  Stop ignoring
                </span>
              </div>
            </button>
          </div>
        </details-menu>
      </details>
        <a class="social-count js-social-count"
          href="/denehyg/reveal.js-menu/watchers"
          aria-label="15 users are watching this repository">
          15
        </a>
</form>
  </li>

  <li>
        <div class="js-toggler-container js-social-container starring-container ">
    <form class="starred js-social-form" action="/denehyg/reveal.js-menu/unstar" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="2m1534NDeoHs91sLZJIx/dsXijc7jCnbqfPy/JFtjQeq40U1qnz969DKDXADTS/dYG8fvvdqk3MCJBkFfHF/Qw==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count  js-toggler-target" aria-label="Unstar this repository" title="Unstar denehyg/reveal.js-menu" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:39561312,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="c66a49787437a3a98c912ed55f00f1f68b615e85f6666b231af85fcba3115b8b" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg height="16" class="octicon octicon-star-fill" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path></svg>
        Unstar
</button>        <a class="social-count js-social-count" href="/denehyg/reveal.js-menu/stargazers"
           aria-label="194 users starred this repository">
           194
        </a>
</form>
    <form class="unstarred js-social-form" action="/denehyg/reveal.js-menu/star" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="xDQNt2CJZ1lGfLrhNzghx+J8JvVlfqspXhACeJ/cUGatxlw1YkmDhhSAbZWxkRQlXQGKd6H9XVlC4O4RbhK6xg==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count  js-toggler-target" aria-label="Unstar this repository" title="Star denehyg/reveal.js-menu" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:39561312,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="60063be16eb8f02fa7a048f4c98031710d65d25786146b9c1bb958927c134ef1" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg height="16" class="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
        Star
</button>        <a class="social-count js-social-count" href="/denehyg/reveal.js-menu/stargazers"
           aria-label="194 users starred this repository">
          194
        </a>
</form>  </div>

  </li>

  <li>
            <div class="float-left">
              <details class="details-reset details-overlay details-overlay-dark " >
                      <summary
                    class="btn btn-sm btn-with-count"
                    title="Fork your own copy of denehyg/reveal.js-menu to your account"
                    data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:39561312,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="afaf78ef71a617a03ce7b9ba16a2098ac376da94a6d2d947faedf6bb96389946" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
                    <svg class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
                    Fork
                  </summary>

  <details-dialog
    class="Box d-flex flex-column anim-fade-in fast Box--overlay"
      aria-label="Fork reveal.js-menu"
      src="/denehyg/reveal.js-menu/fork?fragment=1"
      preload
    >
    <div class="Box-header">
      <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <svg height="16" class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
      </button>
      <h1 class="Box-title">Fork reveal.js-menu</h1>
    </div>
      
                <div class="text-center overflow-auto">
                  <include-fragment>
                    <div class="octocat-spinner my-5" aria-label="Loading..."></div>
                    <p class="f5 text-gray">If this dialog fails to load, you can visit <a href="/denehyg/reveal.js-menu/fork">the fork page</a> directly.</p>
                  </include-fragment>
                </div>

  </details-dialog>
</details>
            </div>

      <a href="/denehyg/reveal.js-menu/network/members" class="social-count"
         aria-label="60 users forked this repository">
        60
      </a>
  </li>
</ul>

      </div>
        
<nav aria-label="Repository" data-pjax="#js-repo-pjax-container" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav px-3 px-md-4 px-lg-5 bg-gray-light">
  <ul class="UnderlineNav-body list-style-none ">
          <li class="d-flex">
        <a class="js-selected-navigation-item selected UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="code-tab" data-hotkey="g c" data-ga-click="Repository, Navigation click, Code tab" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /denehyg/reveal.js-menu" href="/denehyg/reveal.js-menu">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>
            <span data-content="Code">Code</span>
              <span title="Not available" class="Counter "></span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="issues-tab" data-hotkey="g i" data-ga-click="Repository, Navigation click, Issues tab" data-selected-links="repo_issues repo_labels repo_milestones /denehyg/reveal.js-menu/issues" href="/denehyg/reveal.js-menu/issues">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
            <span data-content="Issues">Issues</span>
              <span title="5" class="Counter ">5</span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="pull-requests-tab" data-hotkey="g p" data-ga-click="Repository, Navigation click, Pull requests tab" data-selected-links="repo_pulls checks /denehyg/reveal.js-menu/pulls" href="/denehyg/reveal.js-menu/pulls">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg>
            <span data-content="Pull requests">Pull requests</span>
              <span title="0" hidden="hidden" class="Counter ">0</span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="actions-tab" data-hotkey="g a" data-ga-click="Repository, Navigation click, Actions tab" data-selected-links="repo_actions /denehyg/reveal.js-menu/actions" href="/denehyg/reveal.js-menu/actions">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path></svg>
            <span data-content="Actions">Actions</span>
              <span title="Not available" class="Counter "></span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="projects-tab" data-hotkey="g b" data-ga-click="Repository, Navigation click, Projects tab" data-selected-links="repo_projects new_repo_project repo_project /denehyg/reveal.js-menu/projects" href="/denehyg/reveal.js-menu/projects">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-project UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
            <span data-content="Projects">Projects</span>
              <span title="0" hidden="hidden" class="Counter ">0</span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="wiki-tab" data-hotkey="g w" data-ga-click="Repository, Navigation click, Wikis tab" data-selected-links="repo_wiki /denehyg/reveal.js-menu/wiki" href="/denehyg/reveal.js-menu/wiki">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path></svg>
            <span data-content="Wiki">Wiki</span>
              <span title="Not available" class="Counter "></span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="security-tab" data-hotkey="g s" data-ga-click="Repository, Navigation click, Security tab" data-selected-links="security overview alerts policy token_scanning code_scanning /denehyg/reveal.js-menu/security" href="/denehyg/reveal.js-menu/security">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path></svg>
            <span data-content="Security">Security</span>
              <include-fragment src="/denehyg/reveal.js-menu/security/overall-count" accept="text/fragment+html"></include-fragment>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="insights-tab" data-ga-click="Repository, Navigation click, Insights tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people /denehyg/reveal.js-menu/pulse" href="/denehyg/reveal.js-menu/pulse">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path></svg>
            <span data-content="Insights">Insights</span>
              <span title="Not available" class="Counter "></span>
</a>      </li>

</ul>        <div class="position-absolute right-0 pr-3 pr-md-4 pr-lg-5 js-responsive-underlinenav-overflow" style="visibility:hidden;">
      <details class="details-overlay details-reset position-relative">
  <summary role="button">
    <div class="UnderlineNav-item mr-0 border-0">
            <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
            <span class="sr-only">More</span>
          </div>
</summary>  <div>
    <details-menu role="menu" class="dropdown-menu dropdown-menu-sw ">
  
            <ul>
                <li data-menu-item="code-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /denehyg/reveal.js-menu" href="/denehyg/reveal.js-menu">
                    Code
</a>                </li>
                <li data-menu-item="issues-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /denehyg/reveal.js-menu/issues" href="/denehyg/reveal.js-menu/issues">
                    Issues
</a>                </li>
                <li data-menu-item="pull-requests-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /denehyg/reveal.js-menu/pulls" href="/denehyg/reveal.js-menu/pulls">
                    Pull requests
</a>                </li>
                <li data-menu-item="actions-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /denehyg/reveal.js-menu/actions" href="/denehyg/reveal.js-menu/actions">
                    Actions
</a>                </li>
                <li data-menu-item="projects-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /denehyg/reveal.js-menu/projects" href="/denehyg/reveal.js-menu/projects">
                    Projects
</a>                </li>
                <li data-menu-item="wiki-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /denehyg/reveal.js-menu/wiki" href="/denehyg/reveal.js-menu/wiki">
                    Wiki
</a>                </li>
                <li data-menu-item="security-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /denehyg/reveal.js-menu/security" href="/denehyg/reveal.js-menu/security">
                    Security
</a>                </li>
                <li data-menu-item="insights-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /denehyg/reveal.js-menu/pulse" href="/denehyg/reveal.js-menu/pulse">
                    Insights
</a>                </li>
            </ul>

</details-menu>
</div></details>    </div>

</nav>
  </div>

<div class="container-xl clearfix new-discussion-timeline  px-3 px-md-4 px-lg-5">
  <div class="repository-content " >

    
      
  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/denehyg/reveal.js-menu/blob/a630970d81ed1242c31821a43a91645af74e56aa/menu.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v22:d8715a62018da46835b5ecbde3b4f90c56e7a8f4e2617353e3bc7a0a1f0eba7a -->
    

    <div class="d-flex flex-items-start flex-shrink-0 pb-3 flex-wrap flex-md-nowrap flex-justify-between flex-md-justify-start">
      
<div class="position-relative">
  <details class="details-reset details-overlay mr-0 mb-0 " id="branch-select-menu">
    <summary class="btn css-truncate"
            data-hotkey="w"
            title="Switch branches or tags">
      <svg text="gray" height="16" class="octicon octicon-git-branch text-gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path></svg>
      <span class="css-truncate-target" data-menu-button>master</span>
      <span class="dropdown-caret"></span>
    </summary>

    <details-menu class="SelectMenu SelectMenu--hasFilter" src="/denehyg/reveal.js-menu/refs/master/menu.js?source_action=show&amp;source_controller=blob" preload>
      <div class="SelectMenu-modal">
        <include-fragment class="SelectMenu-loading" aria-label="Menu is loading">
          <svg class="octicon octicon-octoface anim-pulse" height="32" viewBox="0 0 24 24" version="1.1" width="32" aria-hidden="true"><path d="M7.75 11c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5C9 11.56 8.44 11 7.75 11zm1.27 4.5a.469.469 0 01.48-.5h5a.47.47 0 01.48.5c-.116 1.316-.759 2.5-2.98 2.5s-2.864-1.184-2.98-2.5zm7.23-4.5c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5c0-.69-.56-1.25-1.25-1.25z"></path><path fill-rule="evenodd" d="M21.255 3.82a1.725 1.725 0 00-2.141-1.195c-.557.16-1.406.44-2.264.866-.78.386-1.647.93-2.293 1.677A18.442 18.442 0 0012 5c-.93 0-1.784.059-2.569.17-.645-.74-1.505-1.28-2.28-1.664a13.876 13.876 0 00-2.265-.866 1.725 1.725 0 00-2.141 1.196 23.645 23.645 0 00-.69 3.292c-.125.97-.191 2.07-.066 3.112C1.254 11.882 1 13.734 1 15.527 1 19.915 3.13 23 12 23c8.87 0 11-3.053 11-7.473 0-1.794-.255-3.647-.99-5.29.127-1.046.06-2.15-.066-3.125a23.652 23.652 0 00-.689-3.292zM20.5 14c.5 3.5-1.5 6.5-8.5 6.5s-9-3-8.5-6.5c.583-4 3-6 8.5-6s7.928 2 8.5 6z"></path></svg>
        </include-fragment>
      </div>
    </details-menu>
  </details>

</div>

      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal mx-0 mx-md-3 width-full width-md-auto flex-order-1 flex-md-order-none mt-3 mt-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="/denehyg/reveal.js-menu"><span>reveal.js-menu</span></a></span></span><span class="separator">/</span><strong class="final-path">menu.js</strong>
          <span class="separator">/</span><details class="details-reset details-overlay d-inline" id="jumpto-symbol-select-menu">
  <summary class="btn-link link-gray css-truncate" aria-haspopup="true" data-hotkey="r" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_blob_definitions&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_blob_definitions&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="b6c22240e689f2b2baadde0e6c5c8ee94434b9031c4acebe58ac4f52625e80af">
      <svg class="octicon octicon-code" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>
    <span data-menu-button>Jump to</span>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="SelectMenu SelectMenu--hasFilter" role="menu">
    <div class="SelectMenu-modal">
      <header class="SelectMenu-header">
        <span class="SelectMenu-title">Code definitions</span>
        <button class="SelectMenu-closeButton" type="button" data-toggle-for="jumpto-symbol-select-menu">
          <svg aria-label="Close menu" class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
        </button>
      </header>
        <div class="SelectMenu-filter">
          <input
            class="SelectMenu-input form-control js-filterable-field"
            id="jumpto-symbols-filter-field"
            type="text"
            autocomplete="off"
            spellcheck="false"
            autofocus
            placeholder="Filter definitions"
            aria-label="Filter definitions">
        </div>
      <div class="SelectMenu-list">
        <div data-filterable-for="jumpto-symbols-filter-field" data-filterable-type="substring">
            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>$e</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>$t</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>A</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>Ae</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>At</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>Be</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>C</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>C</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>Ce</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>D</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>E</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>E</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>Fe</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>Ge</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>He</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>I</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>I</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>In</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>L</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>M</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>M</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>M</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>Ne</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>O</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>Oe</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>P</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>Pn</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>R</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>R</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>Rn</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>S</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>T</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>Vt</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>a</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>b</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>b</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>be</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>bn</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>c</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>c</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>ce</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>cn</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>d</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>e</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>e</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>e</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>ee</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>endsWith</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>endsWith</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>enforce</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>every</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>exec</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>exec</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>exec</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>exports</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>exports</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>f</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>f</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>filter</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>g</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>g</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>ge</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>get</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>get</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>get</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>getterFor</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>gn</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>h</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>h</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>h</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>i</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>i</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>ie</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>indexOf</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>init</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>inspectSource</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>isMenuInitialised</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>j</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>j</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>jn</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>join</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>k</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>k</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>keyboardCondition</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>keyboardCondition</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>l</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>l</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>m</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>m</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>map</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>n</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>nn</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>normalize</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>o</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>o</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>oe</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>onclick</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>onclick</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>onload</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>onreadystatechange</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>p</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>require</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>rt</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>s</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>slice</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>startsWith</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>startsWith</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>stopImmediatePropagation</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>t</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>te</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>tn</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>tr</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>trim</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>u</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>ue</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>v</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>v</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>vn</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>w</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>x</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="8d88420cf09f05532dd6d69dbcf94a927b4932f0bc3bf8122d0fdea566d946e7" href="/denehyg/reveal.js-menu/blob/master/menu.js#L1">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>y</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>        </div>
      </div>
      <footer class="SelectMenu-footer">
        <div class="d-flex flex-justify-between">
          Code navigation index up-to-date
          <svg class="octicon octicon-dot-fill text-green" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path></svg>
        </div>
      </footer>
    </div>
  </details-menu>
</details>

      </h2>
      <a href="/denehyg/reveal.js-menu/find/master"
            class="js-pjax-capture-input btn mr-2 d-none d-md-block"
            data-pjax
            data-hotkey="t">
        Go to file
      </a>

      <details id="blob-more-options-details" class="details-overlay details-reset position-relative">
  <summary role="button">
    <svg aria-label="More options" height="16" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" version="1.1" width="16" role="img"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
</summary>  <div>
    <ul class="dropdown-menu dropdown-menu-sw">
            <li class="d-block d-md-none">
              <a class="dropdown-item d-flex flex-items-baseline" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FIND_FILE_BUTTON&quot;,&quot;repository_id&quot;:39561312,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="75a5eab6ec5cbd2c6fc774967f8d3719233449127b2133cca59ec9fe322cdac9" data-ga-click="Repository, find file, location:repo overview" data-hotkey="t" data-pjax="true" href="/denehyg/reveal.js-menu/find/master">
                <span class="flex-auto">Go to file</span>
                <span class="text-small text-gray" aria-hidden="true">T</span>
</a>            </li>
            <li data-toggle-for="blob-more-options-details">
              <button type="button" data-toggle-for="jumpto-line-details-dialog" class="btn-link dropdown-item">
                <span class="d-flex flex-items-baseline">
                  <span class="flex-auto">Go to line</span>
                  <span class="text-small text-gray" aria-hidden="true">L</span>
                </span>
              </button>
            </li>
            <li data-toggle-for="blob-more-options-details">
              <button type="button" data-toggle-for="jumpto-symbol-select-menu" class="btn-link dropdown-item">
                <span class="d-flex flex-items-baseline">
                  <span class="flex-auto">Go to definition</span>
                  <span class="text-small text-gray" aria-hidden="true">R</span>
                </span>
              </button>
            </li>
            <li class="dropdown-divider" role="none"></li>
            <li>
              <clipboard-copy value="menu.js" class="dropdown-item cursor-pointer" data-toggle-for="blob-more-options-details">
                Copy path
              </clipboard-copy>
            </li>
          </ul>
</div></details>    </div>



    <div class="Box d-flex flex-column flex-shrink-0 mb-3">
      <include-fragment src="/denehyg/reveal.js-menu/contributors/master/menu.js" class="commit-loader">
        <div class="Box-header Box-header--blue d-flex flex-items-center">
          <div class="Skeleton avatar avatar-user flex-shrink-0 ml-n1 mr-n1 mt-n1 mb-n1" style="width:24px;height:24px;"></div>
          <div class="Skeleton Skeleton--text col-5 ml-2">&nbsp;</div>
        </div>

        <div class="Box-body d-flex flex-items-center" >
          <div class="Skeleton Skeleton--text col-1">&nbsp;</div>
          <span class="text-red h6 loader-error">Cannot retrieve contributors at this time</span>
        </div>
</include-fragment>    </div>






    <div class="Box mt-3 position-relative
      ">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    36.6 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a href="/denehyg/reveal.js-menu/raw/master/menu.js" id="raw-url" role="button" class="btn btn-sm BtnGroup-item ">Raw</a>
        <a href="/denehyg/reveal.js-menu/blame/master/menu.js" data-hotkey="b" role="button" class="btn js-update-url-with-hash btn-sm BtnGroup-item ">Blame</a>
    </div>

    <div>
          <a class="btn-octicon tooltipped tooltipped-nw js-remove-unless-platform"
             data-platforms="windows,mac"
             href="https://desktop.github.com"
             aria-label="Open this file in GitHub Desktop"
             data-ga-click="Repository, open with desktop">
              <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"></path></svg>
          </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/denehyg/reveal.js-menu/edit/master/menu.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="AHXWOVnuUw4Z40HY/KgkEwFcFnPXnRjPhBsI33ghvC1ZP/5kr3wzWV/6A6i29CqjFu4X/AuWumK7vJeGuTpBmw==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg>
            </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/denehyg/reveal.js-menu/delete/master/menu.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="gf6sBeqLks5C8cb8oc1P0stm1AJtd0aElwJbbC5HIim7xmH6GsxyJr24wMGIwZPWiyJBSRlHjacKlYAu2b0QWg==" />
            <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and delete the file" data-disable-with>
              <svg class="octicon octicon-trashcan" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg>
            </button>
</form>    </div>
  </div>
</div>



      

  <div itemprop="text" class="Box-body p-0 blob-wrapper data type-javascript  gist-border-0">
      
<table class="highlight tab-size js-file-line-container" data-tab-size="8" data-paste-markdown-skip>
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">!function(e,t){&quot;object&quot;==typeof exports&amp;&amp;&quot;undefined&quot;!=typeof module?module.exports=t():&quot;function&quot;==typeof define&amp;&amp;define.amd?define(t):(e=e||self).RevealMenu=t()}(this,(function(){&quot;use strict&quot;;var e=&quot;undefined&quot;!=typeof globalThis?globalThis:&quot;undefined&quot;!=typeof window?window:&quot;undefined&quot;!=typeof global?global:&quot;undefined&quot;!=typeof self?self:{};function t(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error(&quot;Dynamic requires are not currently supported by @rollup/plugin-commonjs&quot;)}(null==t&amp;&amp;n.path)}},n.exports),n.exports}var n=function(e){return e&amp;&amp;e.Math==Math&amp;&amp;e},r=n(&quot;object&quot;==typeof globalThis&amp;&amp;globalThis)||n(&quot;object&quot;==typeof window&amp;&amp;window)||n(&quot;object&quot;==typeof self&amp;&amp;self)||n(&quot;object&quot;==typeof e&amp;&amp;e)||Function(&quot;return this&quot;)(),i=function(e){try{return!!e()}catch(e){return!0}},a=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),o={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,l={f:s&amp;&amp;!o.call({1:2},1)?function(e){var t=s(this,e);return!!t&amp;&amp;t.enumerable}:o},c=function(e,t){return{enumerable:!(1&amp;e),configurable:!(2&amp;e),writable:!(4&amp;e),value:t}},u={}.toString,f=function(e){return u.call(e).slice(8,-1)},d=&quot;&quot;.split,p=i((function(){return!Object(&quot;z&quot;).propertyIsEnumerable(0)}))?function(e){return&quot;String&quot;==f(e)?d.call(e,&quot;&quot;):Object(e)}:Object,h=function(e){if(null==e)throw TypeError(&quot;Can&#39;t call method on &quot;+e);return e},m=function(e){return p(h(e))},v=function(e){return&quot;object&quot;==typeof e?null!==e:&quot;function&quot;==typeof e},g=function(e,t){if(!v(e))return e;var n,r;if(t&amp;&amp;&quot;function&quot;==typeof(n=e.toString)&amp;&amp;!v(r=n.call(e)))return r;if(&quot;function&quot;==typeof(n=e.valueOf)&amp;&amp;!v(r=n.call(e)))return r;if(!t&amp;&amp;&quot;function&quot;==typeof(n=e.toString)&amp;&amp;!v(r=n.call(e)))return r;throw TypeError(&quot;Can&#39;t convert object to primitive value&quot;)},y={}.hasOwnProperty,b=function(e,t){return y.call(e,t)},S=r.document,E=v(S)&amp;&amp;v(S.createElement),x=!a&amp;&amp;!i((function(){return 7!=Object.defineProperty((e=&quot;div&quot;,E?S.createElement(e):{}),&quot;a&quot;,{get:function(){return 7}}).a;var e})),w=Object.getOwnPropertyDescriptor,L={f:a?w:function(e,t){if(e=m(e),t=g(t,!0),x)try{return w(e,t)}catch(e){}if(b(e,t))return c(!l.f.call(e,t),e[t])}},T=function(e){if(!v(e))throw TypeError(String(e)+&quot; is not an object&quot;);return e},C=Object.defineProperty,O={f:a?C:function(e,t,n){if(T(e),t=g(t,!0),T(n),x)try{return C(e,t,n)}catch(e){}if(&quot;get&quot;in n||&quot;set&quot;in n)throw TypeError(&quot;Accessors not supported&quot;);return&quot;value&quot;in n&amp;&amp;(e[t]=n.value),e}},A=a?function(e,t,n){return O.f(e,t,c(1,n))}:function(e,t,n){return e[t]=n,e},k=function(e,t){try{A(r,e,t)}catch(n){r[e]=t}return t},I=r[&quot;__core-js_shared__&quot;]||k(&quot;__core-js_shared__&quot;,{}),P=Function.toString;&quot;function&quot;!=typeof I.inspectSource&amp;&amp;(I.inspectSource=function(e){return P.call(e)});var M,R,j,N,_=I.inspectSource,F=r.WeakMap,W=&quot;function&quot;==typeof F&amp;&amp;/native code/.test(_(F)),H=t((function(e){(e.exports=function(e,t){return I[e]||(I[e]=void 0!==t?t:{})})(&quot;versions&quot;,[]).push({version:&quot;3.6.5&quot;,mode:&quot;global&quot;,copyright:&quot;© 2020 Denis Pushkarev (zloirock.ru)&quot;})})),U=0,$=Math.random(),D=function(e){return&quot;Symbol(&quot;+String(void 0===e?&quot;&quot;:e)+&quot;)_&quot;+(++U+$).toString(36)},q=H(&quot;keys&quot;),B={},G=r.WeakMap;if(W){var V=new G,K=V.get,z=V.has,X=V.set;M=function(e,t){return X.call(V,e,t),t},R=function(e){return K.call(V,e)||{}},j=function(e){return z.call(V,e)}}else{var Y=q[N=&quot;state&quot;]||(q[N]=D(N));B[Y]=!0,M=function(e,t){return A(e,Y,t),t},R=function(e){return b(e,Y)?e[Y]:{}},j=function(e){return b(e,Y)}}var J={set:M,get:R,has:j,enforce:function(e){return j(e)?R(e):M(e,{})},getterFor:function(e){return function(t){var n;if(!v(t)||(n=R(t)).type!==e)throw TypeError(&quot;Incompatible receiver, &quot;+e+&quot; required&quot;);return n}}},Z=t((function(e){var t=J.get,n=J.enforce,i=String(String).split(&quot;String&quot;);(e.exports=function(e,t,a,o){var s=!!o&amp;&amp;!!o.unsafe,l=!!o&amp;&amp;!!o.enumerable,c=!!o&amp;&amp;!!o.noTargetGet;&quot;function&quot;==typeof a&amp;&amp;(&quot;string&quot;!=typeof t||b(a,&quot;name&quot;)||A(a,&quot;name&quot;,t),n(a).source=i.join(&quot;string&quot;==typeof t?t:&quot;&quot;)),e!==r?(s?!c&amp;&amp;e[t]&amp;&amp;(l=!0):delete e[t],l?e[t]=a:A(e,t,a)):l?e[t]=a:k(t,a)})(Function.prototype,&quot;toString&quot;,(function(){return&quot;function&quot;==typeof this&amp;&amp;t(this).source||_(this)}))})),Q=r,ee=function(e){return&quot;function&quot;==typeof e?e:void 0},te=function(e,t){return arguments.length&lt;2?ee(Q[e])||ee(r[e]):Q[e]&amp;&amp;Q[e][t]||r[e]&amp;&amp;r[e][t]},ne=Math.ceil,re=Math.floor,ie=function(e){return isNaN(e=+e)?0:(e&gt;0?re:ne)(e)},ae=Math.min,oe=function(e){return e&gt;0?ae(ie(e),9007199254740991):0},se=Math.max,le=Math.min,ce=function(e,t){var n=ie(e);return n&lt;0?se(n+t,0):le(n,t)},ue=function(e){return function(t,n,r){var i,a=m(t),o=oe(a.length),s=ce(r,o);if(e&amp;&amp;n!=n){for(;o&gt;s;)if((i=a[s++])!=i)return!0}else for(;o&gt;s;s++)if((e||s in a)&amp;&amp;a[s]===n)return e||s||0;return!e&amp;&amp;-1}},fe={includes:ue(!0),indexOf:ue(!1)},de=fe.indexOf,pe=[&quot;constructor&quot;,&quot;hasOwnProperty&quot;,&quot;isPrototypeOf&quot;,&quot;propertyIsEnumerable&quot;,&quot;toLocaleString&quot;,&quot;toString&quot;,&quot;valueOf&quot;].concat(&quot;length&quot;,&quot;prototype&quot;),he={f:Object.getOwnPropertyNames||function(e){return function(e,t){var n,r=m(e),i=0,a=[];for(n in r)!b(B,n)&amp;&amp;b(r,n)&amp;&amp;a.push(n);for(;t.length&gt;i;)b(r,n=t[i++])&amp;&amp;(~de(a,n)||a.push(n));return a}(e,pe)}},me={f:Object.getOwnPropertySymbols},ve=te(&quot;Reflect&quot;,&quot;ownKeys&quot;)||function(e){var t=he.f(T(e)),n=me.f;return n?t.concat(n(e)):t},ge=function(e,t){for(var n=ve(t),r=O.f,i=L.f,a=0;a&lt;n.length;a++){var o=n[a];b(e,o)||r(e,o,i(t,o))}},ye=/#|\.prototype\./,be=function(e,t){var n=Ee[Se(e)];return n==we||n!=xe&amp;&amp;(&quot;function&quot;==typeof t?i(t):!!t)},Se=be.normalize=function(e){return String(e).replace(ye,&quot;.&quot;).toLowerCase()},Ee=be.data={},xe=be.NATIVE=&quot;N&quot;,we=be.POLYFILL=&quot;P&quot;,Le=be,Te=L.f,Ce=function(e,t){var n,i,a,o,s,l=e.target,c=e.global,u=e.stat;if(n=c?r:u?r[l]||k(l,{}):(r[l]||{}).prototype)for(i in t){if(o=t[i],a=e.noTargetGet?(s=Te(n,i))&amp;&amp;s.value:n[i],!Le(c?i:l+(u?&quot;.&quot;:&quot;#&quot;)+i,e.forced)&amp;&amp;void 0!==a){if(typeof o==typeof a)continue;ge(o,a)}(e.sham||a&amp;&amp;a.sham)&amp;&amp;A(o,&quot;sham&quot;,!0),Z(n,i,o,e)}},Oe=function(e){if(&quot;function&quot;!=typeof e)throw TypeError(String(e)+&quot; is not a function&quot;);return e},Ae=function(e){return Object(h(e))},ke=Array.isArray||function(e){return&quot;Array&quot;==f(e)},Ie=!!Object.getOwnPropertySymbols&amp;&amp;!i((function(){return!String(Symbol())})),Pe=Ie&amp;&amp;!Symbol.sham&amp;&amp;&quot;symbol&quot;==typeof Symbol.iterator,Me=H(&quot;wks&quot;),Re=r.Symbol,je=Pe?Re:Re&amp;&amp;Re.withoutSetter||D,Ne=function(e){return b(Me,e)||(Ie&amp;&amp;b(Re,e)?Me[e]=Re[e]:Me[e]=je(&quot;Symbol.&quot;+e)),Me[e]},_e=Ne(&quot;species&quot;),Fe=function(e,t){var n;return ke(e)&amp;&amp;(&quot;function&quot;!=typeof(n=e.constructor)||n!==Array&amp;&amp;!ke(n.prototype)?v(n)&amp;&amp;null===(n=n[_e])&amp;&amp;(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},We=[].push,He=function(e){var t=1==e,n=2==e,r=3==e,i=4==e,a=6==e,o=5==e||a;return function(s,l,c,u){for(var f,d,h=Ae(s),m=p(h),v=function(e,t,n){if(Oe(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}(l,c,3),g=oe(m.length),y=0,b=u||Fe,S=t?b(s,g):n?b(s,0):void 0;g&gt;y;y++)if((o||y in m)&amp;&amp;(d=v(f=m[y],y,h),e))if(t)S[y]=d;else if(d)switch(e){case 3:return!0;case 5:return f;case 6:return y;case 2:We.call(S,f)}else if(i)return!1;return a?-1:r||i?i:S}},Ue={forEach:He(0),map:He(1),filter:He(2),some:He(3),every:He(4),find:He(5),findIndex:He(6)},$e=function(e,t){var n=[][e];return!!n&amp;&amp;i((function(){n.call(null,t||function(){throw 1},1)}))},De=Object.defineProperty,qe={},Be=function(e){throw e},Ge=function(e,t){if(b(qe,e))return qe[e];t||(t={});var n=[][e],r=!!b(t,&quot;ACCESSORS&quot;)&amp;&amp;t.ACCESSORS,o=b(t,0)?t[0]:Be,s=b(t,1)?t[1]:void 0;return qe[e]=!!n&amp;&amp;!i((function(){if(r&amp;&amp;!a)return!0;var e={length:-1};r?De(e,1,{enumerable:!0,get:Be}):e[1]=1,n.call(e,o,s)}))},Ve=Ue.every,Ke=$e(&quot;every&quot;),ze=Ge(&quot;every&quot;);Ce({target:&quot;Array&quot;,proto:!0,forced:!Ke||!ze},{every:function(e){return Ve(this,e,arguments.length&gt;1?arguments[1]:void 0)}});var Xe,Ye,Je=te(&quot;navigator&quot;,&quot;userAgent&quot;)||&quot;&quot;,Ze=r.process,Qe=Ze&amp;&amp;Ze.versions,et=Qe&amp;&amp;Qe.v8;et?Ye=(Xe=et.split(&quot;.&quot;))[0]+Xe[1]:Je&amp;&amp;(!(Xe=Je.match(/Edge\/(\d+)/))||Xe[1]&gt;=74)&amp;&amp;(Xe=Je.match(/Chrome\/(\d+)/))&amp;&amp;(Ye=Xe[1]);var tt=Ye&amp;&amp;+Ye,nt=Ne(&quot;species&quot;),rt=function(e){return tt&gt;=51||!i((function(){var t=[];return(t.constructor={})[nt]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},it=Ue.filter,at=rt(&quot;filter&quot;),ot=Ge(&quot;filter&quot;);Ce({target:&quot;Array&quot;,proto:!0,forced:!at||!ot},{filter:function(e){return it(this,e,arguments.length&gt;1?arguments[1]:void 0)}});var st=Ue.forEach,lt=$e(&quot;forEach&quot;),ct=Ge(&quot;forEach&quot;),ut=lt&amp;&amp;ct?[].forEach:function(e){return st(this,e,arguments.length&gt;1?arguments[1]:void 0)};Ce({target:&quot;Array&quot;,proto:!0,forced:[].forEach!=ut},{forEach:ut});var ft=fe.indexOf,dt=[].indexOf,pt=!!dt&amp;&amp;1/[1].indexOf(1,-0)&lt;0,ht=$e(&quot;indexOf&quot;),mt=Ge(&quot;indexOf&quot;,{ACCESSORS:!0,1:0});Ce({target:&quot;Array&quot;,proto:!0,forced:pt||!ht||!mt},{indexOf:function(e){return pt?dt.apply(this,arguments)||0:ft(this,e,arguments.length&gt;1?arguments[1]:void 0)}}),Ce({target:&quot;Array&quot;,stat:!0},{isArray:ke});var vt=[].join,gt=p!=Object,yt=$e(&quot;join&quot;,&quot;,&quot;);Ce({target:&quot;Array&quot;,proto:!0,forced:gt||!yt},{join:function(e){return vt.call(m(this),void 0===e?&quot;,&quot;:e)}});var bt=Math.min,St=[].lastIndexOf,Et=!!St&amp;&amp;1/[1].lastIndexOf(1,-0)&lt;0,xt=$e(&quot;lastIndexOf&quot;),wt=Ge(&quot;indexOf&quot;,{ACCESSORS:!0,1:0}),Lt=Et||!xt||!wt?function(e){if(Et)return St.apply(this,arguments)||0;var t=m(this),n=oe(t.length),r=n-1;for(arguments.length&gt;1&amp;&amp;(r=bt(r,ie(arguments[1]))),r&lt;0&amp;&amp;(r=n+r);r&gt;=0;r--)if(r in t&amp;&amp;t[r]===e)return r||0;return-1}:St;Ce({target:&quot;Array&quot;,proto:!0,forced:Lt!==[].lastIndexOf},{lastIndexOf:Lt});var Tt=Ue.map,Ct=rt(&quot;map&quot;),Ot=Ge(&quot;map&quot;);Ce({target:&quot;Array&quot;,proto:!0,forced:!Ct||!Ot},{map:function(e){return Tt(this,e,arguments.length&gt;1?arguments[1]:void 0)}});var At=function(e,t,n){var r=g(t);r in e?O.f(e,r,c(0,n)):e[r]=n},kt=rt(&quot;slice&quot;),It=Ge(&quot;slice&quot;,{ACCESSORS:!0,0:0,1:2}),Pt=Ne(&quot;species&quot;),Mt=[].slice,Rt=Math.max;Ce({target:&quot;Array&quot;,proto:!0,forced:!kt||!It},{slice:function(e,t){var n,r,i,a=m(this),o=oe(a.length),s=ce(e,o),l=ce(void 0===t?o:t,o);if(ke(a)&amp;&amp;(&quot;function&quot;!=typeof(n=a.constructor)||n!==Array&amp;&amp;!ke(n.prototype)?v(n)&amp;&amp;null===(n=n[Pt])&amp;&amp;(n=void 0):n=void 0,n===Array||void 0===n))return Mt.call(a,s,l);for(r=new(void 0===n?Array:n)(Rt(l-s,0)),i=0;s&lt;l;s++,i++)s in a&amp;&amp;At(r,i,a[s]);return r.length=i,r}});var jt=O.f,Nt=Function.prototype,_t=Nt.toString,Ft=/^\s*function ([^ (]*)/;a&amp;&amp;!(&quot;name&quot;in Nt)&amp;&amp;jt(Nt,&quot;name&quot;,{configurable:!0,get:function(){try{return _t.call(this).match(Ft)[1]}catch(e){return&quot;&quot;}}});var Wt=he.f,Ht={}.toString,Ut=&quot;object&quot;==typeof window&amp;&amp;window&amp;&amp;Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],$t=function(e){return Ut&amp;&amp;&quot;[object Window]&quot;==Ht.call(e)?function(e){try{return Wt(e)}catch(e){return Ut.slice()}}(e):Wt(m(e))};Ce({target:&quot;Object&quot;,stat:!0,forced:i((function(){return!Object.getOwnPropertyNames(1)}))},{getOwnPropertyNames:$t});var Dt=&quot;\t\n\v\f\r                　\u2028\u2029\ufeff&quot;,qt=&quot;[&quot;+Dt+&quot;]&quot;,Bt=RegExp(&quot;^&quot;+qt+qt+&quot;*&quot;),Gt=RegExp(qt+qt+&quot;*$&quot;),Vt=function(e){return function(t){var n=String(h(t));return 1&amp;e&amp;&amp;(n=n.replace(Bt,&quot;&quot;)),2&amp;e&amp;&amp;(n=n.replace(Gt,&quot;&quot;)),n}},Kt={start:Vt(1),end:Vt(2),trim:Vt(3)},zt=Kt.trim,Xt=r.parseFloat,Yt=1/Xt(Dt+&quot;-0&quot;)!=-1/0?function(e){var t=zt(String(e)),n=Xt(t);return 0===n&amp;&amp;&quot;-&quot;==t.charAt(0)?-0:n}:Xt;Ce({global:!0,forced:parseFloat!=Yt},{parseFloat:Yt});var Jt=Kt.trim,Zt=r.parseInt,Qt=/^[+-]?0[Xx]/,en=8!==Zt(Dt+&quot;08&quot;)||22!==Zt(Dt+&quot;0x16&quot;)?function(e,t){var n=Jt(String(e));return Zt(n,t&gt;&gt;&gt;0||(Qt.test(n)?16:10))}:Zt;Ce({global:!0,forced:parseInt!=en},{parseInt:en});var tn=function(){var e=T(this),t=&quot;&quot;;return e.global&amp;&amp;(t+=&quot;g&quot;),e.ignoreCase&amp;&amp;(t+=&quot;i&quot;),e.multiline&amp;&amp;(t+=&quot;m&quot;),e.dotAll&amp;&amp;(t+=&quot;s&quot;),e.unicode&amp;&amp;(t+=&quot;u&quot;),e.sticky&amp;&amp;(t+=&quot;y&quot;),t};function nn(e,t){return RegExp(e,t)}var rn,an,on={UNSUPPORTED_Y:i((function(){var e=nn(&quot;a&quot;,&quot;y&quot;);return e.lastIndex=2,null!=e.exec(&quot;abcd&quot;)})),BROKEN_CARET:i((function(){var e=nn(&quot;^r&quot;,&quot;gy&quot;);return e.lastIndex=2,null!=e.exec(&quot;str&quot;)}))},sn=RegExp.prototype.exec,ln=String.prototype.replace,cn=sn,un=(rn=/a/,an=/b*/g,sn.call(rn,&quot;a&quot;),sn.call(an,&quot;a&quot;),0!==rn.lastIndex||0!==an.lastIndex),fn=on.UNSUPPORTED_Y||on.BROKEN_CARET,dn=void 0!==/()??/.exec(&quot;&quot;)[1];(un||dn||fn)&amp;&amp;(cn=function(e){var t,n,r,i,a=this,o=fn&amp;&amp;a.sticky,s=tn.call(a),l=a.source,c=0,u=e;return o&amp;&amp;(-1===(s=s.replace(&quot;y&quot;,&quot;&quot;)).indexOf(&quot;g&quot;)&amp;&amp;(s+=&quot;g&quot;),u=String(e).slice(a.lastIndex),a.lastIndex&gt;0&amp;&amp;(!a.multiline||a.multiline&amp;&amp;&quot;\n&quot;!==e[a.lastIndex-1])&amp;&amp;(l=&quot;(?: &quot;+l+&quot;)&quot;,u=&quot; &quot;+u,c++),n=new RegExp(&quot;^(?:&quot;+l+&quot;)&quot;,s)),dn&amp;&amp;(n=new RegExp(&quot;^&quot;+l+&quot;$(?!\\s)&quot;,s)),un&amp;&amp;(t=a.lastIndex),r=sn.call(o?n:a,u),o?r?(r.input=r.input.slice(c),r[0]=r[0].slice(c),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:un&amp;&amp;r&amp;&amp;(a.lastIndex=a.global?r.index+r[0].length:t),dn&amp;&amp;r&amp;&amp;r.length&gt;1&amp;&amp;ln.call(r[0],n,(function(){for(i=1;i&lt;arguments.length-2;i++)void 0===arguments[i]&amp;&amp;(r[i]=void 0)})),r});var pn=cn;Ce({target:&quot;RegExp&quot;,proto:!0,forced:/./.exec!==pn},{exec:pn});var hn,mn=Ne(&quot;match&quot;),vn=function(e){var t;return v(e)&amp;&amp;(void 0!==(t=e[mn])?!!t:&quot;RegExp&quot;==f(e))},gn=function(e){if(vn(e))throw TypeError(&quot;The method doesn&#39;t accept regular expressions&quot;);return e},yn=Ne(&quot;match&quot;),bn=function(e){var t=/./;try{&quot;/./&quot;[e](t)}catch(n){try{return t[yn]=!1,&quot;/./&quot;[e](t)}catch(e){}}return!1},Sn=L.f,En=&quot;&quot;.endsWith,xn=Math.min,wn=bn(&quot;endsWith&quot;);Ce({target:&quot;String&quot;,proto:!0,forced:!!(wn||(hn=Sn(String.prototype,&quot;endsWith&quot;),!hn||hn.writable))&amp;&amp;!wn},{endsWith:function(e){var t=String(h(this));gn(e);var n=arguments.length&gt;1?arguments[1]:void 0,r=oe(t.length),i=void 0===n?r:xn(oe(n),r),a=String(e);return En?En.call(t,a,i):t.slice(i-a.length,i)===a}});var Ln=Ne(&quot;species&quot;),Tn=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:&quot;7&quot;},e},&quot;7&quot;!==&quot;&quot;.replace(e,&quot;$&lt;a&gt;&quot;)})),Cn=&quot;$0&quot;===&quot;a&quot;.replace(/./,&quot;$0&quot;),On=Ne(&quot;replace&quot;),An=!!/./[On]&amp;&amp;&quot;&quot;===/./[On](&quot;a&quot;,&quot;$0&quot;),kn=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n=&quot;ab&quot;.split(e);return 2!==n.length||&quot;a&quot;!==n[0]||&quot;b&quot;!==n[1]})),In=function(e,t,n,r){var a=Ne(e),o=!i((function(){var t={};return t[a]=function(){return 7},7!=&quot;&quot;[e](t)})),s=o&amp;&amp;!i((function(){var t=!1,n=/a/;return&quot;split&quot;===e&amp;&amp;((n={}).constructor={},n.constructor[Ln]=function(){return n},n.flags=&quot;&quot;,n[a]=/./[a]),n.exec=function(){return t=!0,null},n[a](&quot;&quot;),!t}));if(!o||!s||&quot;replace&quot;===e&amp;&amp;(!Tn||!Cn||An)||&quot;split&quot;===e&amp;&amp;!kn){var l=/./[a],c=n(a,&quot;&quot;[e],(function(e,t,n,r,i){return t.exec===pn?o&amp;&amp;!i?{done:!0,value:l.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:Cn,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:An}),u=c[0],f=c[1];Z(String.prototype,e,u),Z(RegExp.prototype,a,2==t?function(e,t){return f.call(e,this,t)}:function(e){return f.call(e,this)})}r&amp;&amp;A(RegExp.prototype[a],&quot;sham&quot;,!0)},Pn=function(e){return function(t,n){var r,i,a=String(h(t)),o=ie(n),s=a.length;return o&lt;0||o&gt;=s?e?&quot;&quot;:void 0:(r=a.charCodeAt(o))&lt;55296||r&gt;56319||o+1===s||(i=a.charCodeAt(o+1))&lt;56320||i&gt;57343?e?a.charAt(o):r:e?a.slice(o,o+2):i-56320+(r-55296&lt;&lt;10)+65536}},Mn={codeAt:Pn(!1),charAt:Pn(!0)}.charAt,Rn=function(e,t,n){return t+(n?Mn(e,t).length:1)},jn=function(e,t){var n=e.exec;if(&quot;function&quot;==typeof n){var r=n.call(e,t);if(&quot;object&quot;!=typeof r)throw TypeError(&quot;RegExp exec method returned something other than an Object or null&quot;);return r}if(&quot;RegExp&quot;!==f(e))throw TypeError(&quot;RegExp#exec called on incompatible receiver&quot;);return pn.call(e,t)},Nn=Math.max,_n=Math.min,Fn=Math.floor,Wn=/\$([$&amp;&#39;`]|\d\d?|&lt;[^&gt;]*&gt;)/g,Hn=/\$([$&amp;&#39;`]|\d\d?)/g;In(&quot;replace&quot;,2,(function(e,t,n,r){var i=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,a=r.REPLACE_KEEPS_$0,o=i?&quot;$&quot;:&quot;$0&quot;;return[function(n,r){var i=h(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,i,r):t.call(String(i),n,r)},function(e,r){if(!i&amp;&amp;a||&quot;string&quot;==typeof r&amp;&amp;-1===r.indexOf(o)){var l=n(t,e,this,r);if(l.done)return l.value}var c=T(e),u=String(this),f=&quot;function&quot;==typeof r;f||(r=String(r));var d=c.global;if(d){var p=c.unicode;c.lastIndex=0}for(var h=[];;){var m=jn(c,u);if(null===m)break;if(h.push(m),!d)break;&quot;&quot;===String(m[0])&amp;&amp;(c.lastIndex=Rn(u,oe(c.lastIndex),p))}for(var v,g=&quot;&quot;,y=0,b=0;b&lt;h.length;b++){m=h[b];for(var S=String(m[0]),E=Nn(_n(ie(m.index),u.length),0),x=[],w=1;w&lt;m.length;w++)x.push(void 0===(v=m[w])?v:String(v));var L=m.groups;if(f){var C=[S].concat(x,E,u);void 0!==L&amp;&amp;C.push(L);var O=String(r.apply(void 0,C))}else O=s(S,u,E,x,L,r);E&gt;=y&amp;&amp;(g+=u.slice(y,E)+O,y=E+S.length)}return g+u.slice(y)}];function s(e,n,r,i,a,o){var s=r+e.length,l=i.length,c=Hn;return void 0!==a&amp;&amp;(a=Ae(a),c=Wn),t.call(o,c,(function(t,o){var c;switch(o.charAt(0)){case&quot;$&quot;:return&quot;$&quot;;case&quot;&amp;&quot;:return e;case&quot;`&quot;:return n.slice(0,r);case&quot;&#39;&quot;:return n.slice(s);case&quot;&lt;&quot;:c=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u&gt;l){var f=Fn(u/10);return 0===f?t:f&lt;=l?void 0===i[f-1]?o.charAt(1):i[f-1]+o.charAt(1):t}c=i[u-1]}return void 0===c?&quot;&quot;:c}))}}));var Un=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&amp;&amp;t!=t};In(&quot;search&quot;,1,(function(e,t,n){return[function(t){var n=h(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=T(e),a=String(this),o=i.lastIndex;Un(o,0)||(i.lastIndex=0);var s=jn(i,a);return Un(i.lastIndex,o)||(i.lastIndex=o),null===s?-1:s.index}]}));var $n=Ne(&quot;species&quot;),Dn=[].push,qn=Math.min,Bn=!i((function(){return!RegExp(4294967295,&quot;y&quot;)}));In(&quot;split&quot;,2,(function(e,t,n){var r;return r=&quot;c&quot;==&quot;abbc&quot;.split(/(b)*/)[1]||4!=&quot;test&quot;.split(/(?:)/,-1).length||2!=&quot;ab&quot;.split(/(?:ab)*/).length||4!=&quot;.&quot;.split(/(.?)(.?)/).length||&quot;.&quot;.split(/()()/).length&gt;1||&quot;&quot;.split(/.?/).length?function(e,n){var r=String(h(this)),i=void 0===n?4294967295:n&gt;&gt;&gt;0;if(0===i)return[];if(void 0===e)return[r];if(!vn(e))return t.call(r,e,i);for(var a,o,s,l=[],c=(e.ignoreCase?&quot;i&quot;:&quot;&quot;)+(e.multiline?&quot;m&quot;:&quot;&quot;)+(e.unicode?&quot;u&quot;:&quot;&quot;)+(e.sticky?&quot;y&quot;:&quot;&quot;),u=0,f=new RegExp(e.source,c+&quot;g&quot;);(a=pn.call(f,r))&amp;&amp;!((o=f.lastIndex)&gt;u&amp;&amp;(l.push(r.slice(u,a.index)),a.length&gt;1&amp;&amp;a.index&lt;r.length&amp;&amp;Dn.apply(l,a.slice(1)),s=a[0].length,u=o,l.length&gt;=i));)f.lastIndex===a.index&amp;&amp;f.lastIndex++;return u===r.length?!s&amp;&amp;f.test(&quot;&quot;)||l.push(&quot;&quot;):l.push(r.slice(u)),l.length&gt;i?l.slice(0,i):l}:&quot;0&quot;.split(void 0,0).length?function(e,n){return void 0===e&amp;&amp;0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=h(this),a=null==t?void 0:t[e];return void 0!==a?a.call(t,i,n):r.call(String(i),t,n)},function(e,i){var a=n(r,e,this,i,r!==t);if(a.done)return a.value;var o=T(e),s=String(this),l=function(e,t){var n,r=T(e).constructor;return void 0===r||null==(n=T(r)[$n])?t:Oe(n)}(o,RegExp),c=o.unicode,u=(o.ignoreCase?&quot;i&quot;:&quot;&quot;)+(o.multiline?&quot;m&quot;:&quot;&quot;)+(o.unicode?&quot;u&quot;:&quot;&quot;)+(Bn?&quot;y&quot;:&quot;g&quot;),f=new l(Bn?o:&quot;^(?:&quot;+o.source+&quot;)&quot;,u),d=void 0===i?4294967295:i&gt;&gt;&gt;0;if(0===d)return[];if(0===s.length)return null===jn(f,s)?[s]:[];for(var p=0,h=0,m=[];h&lt;s.length;){f.lastIndex=Bn?h:0;var v,g=jn(f,Bn?s:s.slice(h));if(null===g||(v=qn(oe(f.lastIndex+(Bn?0:h)),s.length))===p)h=Rn(s,h,c);else{if(m.push(s.slice(p,h)),m.length===d)return m;for(var y=1;y&lt;=g.length-1;y++)if(m.push(g[y]),m.length===d)return m;h=p=v}}return m.push(s.slice(p)),m}]}),!Bn);var Gn=L.f,Vn=&quot;&quot;.startsWith,Kn=Math.min,zn=bn(&quot;startsWith&quot;);Ce({target:&quot;String&quot;,proto:!0,forced:!(!zn&amp;&amp;!!function(){var e=Gn(String.prototype,&quot;startsWith&quot;);return e&amp;&amp;!e.writable}())&amp;&amp;!zn},{startsWith:function(e){var t=String(h(this));gn(e);var n=oe(Kn(arguments.length&gt;1?arguments[1]:void 0,t.length)),r=String(e);return Vn?Vn.call(t,r,n):t.slice(n,n+r.length)===r}});var Xn,Yn=Kt.trim;Ce({target:&quot;String&quot;,proto:!0,forced:(Xn=&quot;trim&quot;,i((function(){return!!Dt[Xn]()||&quot;​᠎&quot;!=&quot;​᠎&quot;[Xn]()||Dt[Xn].name!==Xn})))},{trim:function(){return Yn(this)}});for(var Jn in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Zn=r[Jn],Qn=Zn&amp;&amp;Zn.prototype;if(Qn&amp;&amp;Qn.forEach!==ut)try{A(Qn,&quot;forEach&quot;,ut)}catch(e){Qn.forEach=ut}}var er=[].slice,tr=function(e){return function(t,n){var r=arguments.length&gt;2,i=r?er.call(arguments,2):void 0;return e(r?function(){(&quot;function&quot;==typeof t?t:Function(t)).apply(this,i)}:t,n)}};Ce({global:!0,bind:!0,forced:/MSIE .\./.test(Je)},{setTimeout:tr(r.setTimeout),setInterval:tr(r.setInterval)});return String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return this.substr(t||0,e.length)===e}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(void 0===t||t&gt;this.length)&amp;&amp;(t=this.length),this.substring(t-e.length,t)===e}),function(){var e,t,n,r,i=(e=/(msie) ([\w.]+)/.exec(window.navigator.userAgent.toLowerCase()))&amp;&amp;&quot;msie&quot;===e[1]?parseFloat(e[2]):null,a=!1;function o(e){(r=e.menu||{}).path=r.path||function(){var e;if(document.querySelector(&#39;script[src$=&quot;menu.js&quot;]&#39;)){var t=document.querySelector(&#39;script[src$=&quot;menu.js&quot;]&#39;);t&amp;&amp;(e=t.src.slice(0,-7))}else e=(&quot;undefined&quot;==typeof document?new(require(&quot;url&quot;).URL)(&quot;file:&quot;+__filename).href:document.currentScript&amp;&amp;document.currentScript.src||new URL(&quot;menu.js&quot;,document.baseURI).href).slice(0,(&quot;undefined&quot;==typeof document?new(require(&quot;url&quot;).URL)(&quot;file:&quot;+__filename).href:document.currentScript&amp;&amp;document.currentScript.src||new URL(&quot;menu.js&quot;,document.baseURI).href).lastIndexOf(&quot;/&quot;)+1);return e}()||&quot;plugin/menu/&quot;,r.path.endsWith(&quot;/&quot;)||(r.path+=&quot;/&quot;),void 0===r.side&amp;&amp;(r.side=&quot;left&quot;),void 0===r.numbers&amp;&amp;(r.numbers=!1),&quot;string&quot;!=typeof r.titleSelector&amp;&amp;(r.titleSelector=&quot;h1, h2, h3, h4, h5&quot;),void 0===r.hideMissingTitles&amp;&amp;(r.hideMissingTitles=!1),void 0===r.useTextContentForMissingTitles&amp;&amp;(r.useTextContentForMissingTitles=!1),void 0===r.markers&amp;&amp;(r.markers=!0),&quot;string&quot;!=typeof r.themesPath&amp;&amp;(r.themesPath=&quot;dist/theme/&quot;),r.themesPath.endsWith(&quot;/&quot;)||(r.themesPath+=&quot;/&quot;),O(&quot;link#theme&quot;)||(r.themes=!1),!0===r.themes?r.themes=[{name:&quot;Black&quot;,theme:r.themesPath+&quot;black.css&quot;},{name:&quot;White&quot;,theme:r.themesPath+&quot;white.css&quot;},{name:&quot;League&quot;,theme:r.themesPath+&quot;league.css&quot;},{name:&quot;Sky&quot;,theme:r.themesPath+&quot;sky.css&quot;},{name:&quot;Beige&quot;,theme:r.themesPath+&quot;beige.css&quot;},{name:&quot;Simple&quot;,theme:r.themesPath+&quot;simple.css&quot;},{name:&quot;Serif&quot;,theme:r.themesPath+&quot;serif.css&quot;},{name:&quot;Blood&quot;,theme:r.themesPath+&quot;blood.css&quot;},{name:&quot;Night&quot;,theme:r.themesPath+&quot;night.css&quot;},{name:&quot;Moon&quot;,theme:r.themesPath+&quot;moon.css&quot;},{name:&quot;Solarized&quot;,theme:r.themesPath+&quot;solarized.css&quot;}]:Array.isArray(r.themes)||(r.themes=!1),void 0===r.transitions&amp;&amp;(r.transitions=!1),!0===r.transitions?r.transitions=[&quot;None&quot;,&quot;Fade&quot;,&quot;Slide&quot;,&quot;Convex&quot;,&quot;Concave&quot;,&quot;Zoom&quot;]:!1===r.transitions||Array.isArray(r.transitions)&amp;&amp;r.transitions.every((function(e){return&quot;string&quot;==typeof e}))||(console.error(&quot;reveal.js-menu error: transitions config value must be &#39;true&#39; or an array of strings, eg [&#39;None&#39;, &#39;Fade&#39;, &#39;Slide&#39;)&quot;),r.transitions=!1),i&amp;&amp;i&lt;=9&amp;&amp;(r.transitions=!1),void 0===r.openButton&amp;&amp;(r.openButton=!0),void 0===r.openSlideNumber&amp;&amp;(r.openSlideNumber=!1),void 0===r.keyboard&amp;&amp;(r.keyboard=!0),void 0===r.sticky&amp;&amp;(r.sticky=!1),void 0===r.autoOpen&amp;&amp;(r.autoOpen=!0),void 0===r.delayInit&amp;&amp;(r.delayInit=!1),void 0===r.openOnInit&amp;&amp;(r.openOnInit=!1)}var s=!0;function l(){s=!1}function c(){O(&quot;nav.slide-menu&quot;).addEventListener(&quot;mousemove&quot;,(function e(t){O(&quot;nav.slide-menu&quot;).removeEventListener(&quot;mousemove&quot;,e),s=!0}))}function u(e){var t=function(e){for(var t=0,n=0;e&amp;&amp;!isNaN(e.offsetLeft)&amp;&amp;!isNaN(e.offsetTop);)t+=e.offsetLeft-e.scrollLeft,n+=e.offsetTop-e.scrollTop,e=e.offsetParent;return{top:n,left:t}}(e).top-e.offsetParent.offsetTop;if(t&lt;0)return-t;var n=e.offsetParent.offsetHeight-(e.offsetTop-e.offsetParent.scrollTop+e.offsetHeight);return n&lt;0?n:0}function f(e){var t=u(e);t&amp;&amp;(l(),e.scrollIntoView(t&gt;0),c())}function d(e){l(),e.offsetParent.scrollTop=e.offsetTop,c()}function p(e){l(),e.offsetParent.scrollTop=e.offsetTop-e.offsetParent.offsetHeight+e.offsetHeight,c()}function h(e){e.classList.add(&quot;selected&quot;),f(e),r.sticky&amp;&amp;r.autoOpen&amp;&amp;E(e)}function m(e){if(b())switch(e.stopImmediatePropagation(),e.keyCode){case 72:case 37:!function(){var e=parseInt(O(&quot;.active-toolbar-button&quot;).getAttribute(&quot;data-button&quot;))-1;e&lt;0&amp;&amp;(e=T-1);S(null,O(&#39;.toolbar-panel-button[data-button=&quot;&#39;+e+&#39;&quot;]&#39;).getAttribute(&quot;data-panel&quot;))}();break;case 76:case 39:l=(parseInt(O(&quot;.active-toolbar-button&quot;).getAttribute(&quot;data-button&quot;))+1)%T,S(null,O(&#39;.toolbar-panel-button[data-button=&quot;&#39;+l+&#39;&quot;]&#39;).getAttribute(&quot;data-panel&quot;));break;case 75:case 38:if(s=O(&quot;.active-menu-panel .slide-menu-items li.selected&quot;)||O(&quot;.active-menu-panel .slide-menu-items li.active&quot;))A(&quot;.active-menu-panel .slide-menu-items li&quot;).forEach((function(e){e.classList.remove(&quot;selected&quot;)})),h(O(&#39;.active-menu-panel .slide-menu-items li[data-item=&quot;&#39;+(parseInt(s.getAttribute(&quot;data-item&quot;))-1)+&#39;&quot;]&#39;)||s);else(o=O(&quot;.active-menu-panel .slide-menu-items li.slide-menu-item&quot;))&amp;&amp;h(o);break;case 74:case 40:if(s=O(&quot;.active-menu-panel .slide-menu-items li.selected&quot;)||O(&quot;.active-menu-panel .slide-menu-items li.active&quot;))A(&quot;.active-menu-panel .slide-menu-items li&quot;).forEach((function(e){e.classList.remove(&quot;selected&quot;)})),h(O(&#39;.active-menu-panel .slide-menu-items li[data-item=&quot;&#39;+(parseInt(s.getAttribute(&quot;data-item&quot;))+1)+&#39;&quot;]&#39;)||s);else(o=O(&quot;.active-menu-panel .slide-menu-items li.slide-menu-item&quot;))&amp;&amp;h(o);break;case 33:case 85:var t=A(&quot;.active-menu-panel .slide-menu-items li&quot;).filter((function(e){return u(e)&gt;0})),n=A(&quot;.active-menu-panel .slide-menu-items li&quot;).filter((function(e){return 0==u(e)})),r=t.length&gt;0&amp;&amp;Math.abs(u(t[t.length-1]))&lt;t[t.length-1].clientHeight?t[t.length-1]:n[0];r&amp;&amp;(r.classList.contains(&quot;selected&quot;)&amp;&amp;t.length&gt;0&amp;&amp;(p(r),r=(n=A(&quot;.active-menu-panel .slide-menu-items li&quot;).filter((function(e){return 0==u(e)})))[0]==r?t[t.length-1]:n[0]),A(&quot;.active-menu-panel .slide-menu-items li&quot;).forEach((function(e){e.classList.remove(&quot;selected&quot;)})),h(r),d(r));break;case 34:case 68:n=A(&quot;.active-menu-panel .slide-menu-items li&quot;).filter((function(e){return 0==u(e)}));var i=A(&quot;.active-menu-panel .slide-menu-items li&quot;).filter((function(e){return u(e)&lt;0})),a=i.length&gt;0&amp;&amp;Math.abs(u(i[0]))&lt;i[0].clientHeight?i[0]:n[n.length-1];a&amp;&amp;(a.classList.contains(&quot;selected&quot;)&amp;&amp;i.length&gt;0&amp;&amp;(d(a),a=(n=A(&quot;.active-menu-panel .slide-menu-items li&quot;).filter((function(e){return 0==u(e)})))[n.length-1]==a?i[0]:n[n.length-1]),A(&quot;.active-menu-panel .slide-menu-items li&quot;).forEach((function(e){e.classList.remove(&quot;selected&quot;)})),h(a),p(a));break;case 36:A(&quot;.active-menu-panel .slide-menu-items li&quot;).forEach((function(e){e.classList.remove(&quot;selected&quot;)})),(o=O(&quot;.active-menu-panel .slide-menu-items li:first-of-type&quot;))&amp;&amp;(o.classList.add(&quot;selected&quot;),f(o));break;case 35:var o;A(&quot;.active-menu-panel .slide-menu-items li&quot;).forEach((function(e){e.classList.remove(&quot;selected&quot;)})),(o=O(&quot;.active-menu-panel .slide-menu-items:last-of-type li:last-of-type&quot;))&amp;&amp;(o.classList.add(&quot;selected&quot;),f(o));break;case 32:case 13:var s;(s=O(&quot;.active-menu-panel .slide-menu-items li.selected&quot;))&amp;&amp;E(s,!0);break;case 27:g(null,!0)}var l}function v(e){(e&amp;&amp;e.preventDefault(),b())||(O(&quot;body&quot;).classList.add(&quot;slide-menu-active&quot;),O(&quot;.reveal&quot;).classList.add(&quot;has-&quot;+r.effect+&quot;-&quot;+r.side),O(&quot;.slide-menu&quot;).classList.add(&quot;active&quot;),O(&quot;.slide-menu-overlay&quot;).classList.add(&quot;active&quot;),r.themes&amp;&amp;(A(&#39;div[data-panel=&quot;Themes&quot;] li&#39;).forEach((function(e){e.classList.remove(&quot;active&quot;)})),A(&#39;li[data-theme=&quot;&#39;+O(&quot;link#theme&quot;).getAttribute(&quot;href&quot;)+&#39;&quot;]&#39;).forEach((function(e){e.classList.add(&quot;active&quot;)}))),r.transitions&amp;&amp;(A(&#39;div[data-panel=&quot;Transitions&quot;] li&#39;).forEach((function(e){e.classList.remove(&quot;active&quot;)})),A(&#39;li[data-transition=&quot;&#39;+n.transition+&#39;&quot;]&#39;).forEach((function(e){e.classList.add(&quot;active&quot;)}))),A(&quot;.slide-menu-panel li.active&quot;).forEach((function(e){e.classList.add(&quot;selected&quot;),f(e)})))}function g(e,t){e&amp;&amp;e.preventDefault(),r.sticky&amp;&amp;!t||(O(&quot;body&quot;).classList.remove(&quot;slide-menu-active&quot;),O(&quot;.reveal&quot;).classList.remove(&quot;has-&quot;+r.effect+&quot;-&quot;+r.side),O(&quot;.slide-menu&quot;).classList.remove(&quot;active&quot;),O(&quot;.slide-menu-overlay&quot;).classList.remove(&quot;active&quot;),A(&quot;.slide-menu-panel li.selected&quot;).forEach((function(e){e.classList.remove(&quot;selected&quot;)})))}function y(e){b()?g(e,!0):v(e)}function b(){return O(&quot;body&quot;).classList.contains(&quot;slide-menu-active&quot;)}function S(e,t){v(e);var n=t;&quot;string&quot;!=typeof t&amp;&amp;(n=e.currentTarget.getAttribute(&quot;data-panel&quot;)),O(&quot;.slide-menu-toolbar &gt; li.active-toolbar-button&quot;).classList.remove(&quot;active-toolbar-button&quot;),O(&#39;li[data-panel=&quot;&#39;+n+&#39;&quot;]&#39;).classList.add(&quot;active-toolbar-button&quot;),O(&quot;.slide-menu-panel.active-menu-panel&quot;).classList.remove(&quot;active-menu-panel&quot;),O(&#39;div[data-panel=&quot;&#39;+n+&#39;&quot;]&#39;).classList.add(&quot;active-menu-panel&quot;)}function E(e,n){var i=parseInt(e.getAttribute(&quot;data-slide-h&quot;)),a=parseInt(e.getAttribute(&quot;data-slide-v&quot;)),o=e.getAttribute(&quot;data-theme&quot;),s=e.getAttribute(&quot;data-highlight-theme&quot;),l=e.getAttribute(&quot;data-transition&quot;);isNaN(i)||isNaN(a)||t.slide(i,a),o&amp;&amp;I(&quot;theme&quot;,o),s&amp;&amp;I(&quot;highlight-theme&quot;,s),l&amp;&amp;t.configure({transition:l});var c=O(&quot;a&quot;,e);c&amp;&amp;(n||!r.sticky||r.autoOpen&amp;&amp;c.href.startsWith(&quot;#&quot;)||c.href.startsWith(window.location.origin+window.location.pathname+&quot;#&quot;))&amp;&amp;c.click(),g()}function x(e){&quot;A&quot;!==e.target.nodeName&amp;&amp;e.preventDefault(),E(e.currentTarget)}function w(){var e=t.getState();A(&quot;li.slide-menu-item, li.slide-menu-item-vertical&quot;).forEach((function(t){t.classList.remove(&quot;past&quot;),t.classList.remove(&quot;active&quot;),t.classList.remove(&quot;future&quot;);var n=parseInt(t.getAttribute(&quot;data-slide-h&quot;)),r=parseInt(t.getAttribute(&quot;data-slide-v&quot;));n&lt;e.indexh||n===e.indexh&amp;&amp;r&lt;e.indexv?t.classList.add(&quot;past&quot;):n===e.indexh&amp;&amp;r===e.indexv?t.classList.add(&quot;active&quot;):t.classList.add(&quot;future&quot;)}))}function L(){var e=window.getComputedStyle(O(&quot;.reveal&quot;));O(&quot;.slide-menu&quot;).style.fontFamily=e.fontFamily}var T=0;function C(){if(!a){var e=function(e,t,n,r,i,a){var o={&quot;data-button&quot;:&quot;&quot;+T++,class:&quot;toolbar-panel-button&quot;+(a?&quot; active-toolbar-button&quot;:&quot;&quot;)};t&amp;&amp;(o[&quot;data-panel&quot;]=t);var s=k(&quot;li&quot;,o);return n.startsWith(&quot;fa-&quot;)?s.appendChild(k(&quot;i&quot;,{class:r+&quot; &quot;+n})):s.innerHTML=n+&quot;&lt;/i&gt;&quot;,s.appendChild(k(&quot;br&quot;),O(&quot;i&quot;,s)),s.appendChild(k(&quot;span&quot;,{class:&quot;slide-menu-toolbar-label&quot;},e),O(&quot;i&quot;,s)),s.onclick=i,d.appendChild(s),s},i=function(e,i,a,o,s){function l(e,t){if(&quot;&quot;===e)return null;var n=t?O(e,i):O(e);return n?n.textContent:null}var c=i.getAttribute(&quot;data-menu-title&quot;)||l(&quot;.menu-title&quot;,i)||l(r.titleSelector,i);if(!c&amp;&amp;r.useTextContentForMissingTitles&amp;&amp;(c=i.textContent.trim())&amp;&amp;(c=c.split(&quot;\n&quot;).map((function(e){return e.trim()})).join(&quot; &quot;).trim().replace(/^(.{16}[^\s]*).*/,&quot;$1&quot;).replace(/&amp;/g,&quot;&amp;amp;&quot;).replace(/&lt;/g,&quot;&amp;lt;&quot;).replace(/&gt;/g,&quot;&amp;gt;&quot;).replace(/&quot;/g,&quot;&amp;quot;&quot;).replace(/&#39;/g,&quot;&amp;#039;&quot;)+&quot;...&quot;),!c){if(r.hideMissingTitles)return&quot;&quot;;e+=&quot; no-title&quot;,c=&quot;Slide &quot;+(a+1)}var u=k(&quot;li&quot;,{class:e,&quot;data-item&quot;:a,&quot;data-slide-h&quot;:o,&quot;data-slide-v&quot;:void 0===s?0:s});if(r.markers&amp;&amp;(u.appendChild(k(&quot;i&quot;,{class:&quot;fas fa-check-circle fa-fw past&quot;})),u.appendChild(k(&quot;i&quot;,{class:&quot;fas fa-arrow-alt-circle-right fa-fw active&quot;})),u.appendChild(k(&quot;i&quot;,{class:&quot;far fa-circle fa-fw future&quot;}))),r.numbers){var f=[],d=&quot;h.v&quot;;switch(&quot;string&quot;==typeof r.numbers?d=r.numbers:&quot;string&quot;==typeof n.slideNumber&amp;&amp;(d=n.slideNumber),d){case&quot;c&quot;:f.push(a+1);break;case&quot;c/t&quot;:f.push(a+1,&quot;/&quot;,t.getTotalSlides());break;case&quot;h/v&quot;:f.push(o+1),&quot;number&quot;!=typeof s||isNaN(s)||f.push(&quot;/&quot;,s+1);break;default:f.push(o+1),&quot;number&quot;!=typeof s||isNaN(s)||f.push(&quot;.&quot;,s+1)}u.appendChild(k(&quot;span&quot;,{class:&quot;slide-menu-item-number&quot;},f.join(&quot;&quot;)+&quot;. &quot;))}return u.appendChild(k(&quot;span&quot;,{class:&quot;slide-menu-item-title&quot;},c)),u},o=function(e){s&amp;&amp;(A(&quot;.active-menu-panel .slide-menu-items li.selected&quot;).forEach((function(e){e.classList.remove(&quot;selected&quot;)})),e.currentTarget.classList.add(&quot;selected&quot;))},l=O(&quot;.reveal&quot;).parentElement,c=k(&quot;div&quot;,{class:&quot;slide-menu-wrapper&quot;});l.appendChild(c);var u=k(&quot;nav&quot;,{class:&quot;slide-menu slide-menu--&quot;+r.side});&quot;string&quot;==typeof r.width&amp;&amp;(-1!=[&quot;normal&quot;,&quot;wide&quot;,&quot;third&quot;,&quot;half&quot;,&quot;full&quot;].indexOf(r.width)?u.classList.add(&quot;slide-menu--&quot;+r.width):(u.classList.add(&quot;slide-menu--custom&quot;),u.style.width=r.width)),c.appendChild(u),L();var f=k(&quot;div&quot;,{class:&quot;slide-menu-overlay&quot;});c.appendChild(f),f.onclick=function(){g(null,!0)};var d=k(&quot;ol&quot;,{class:&quot;slide-menu-toolbar&quot;});O(&quot;.slide-menu&quot;).appendChild(d),e(&quot;Slides&quot;,&quot;Slides&quot;,&quot;fa-images&quot;,&quot;fas&quot;,S,!0),r.custom&amp;&amp;r.custom.forEach((function(t,n,r){e(t.title,&quot;Custom&quot;+n,t.icon,null,S)})),r.themes&amp;&amp;e(&quot;Themes&quot;,&quot;Themes&quot;,&quot;fa-adjust&quot;,&quot;fas&quot;,S),r.transitions&amp;&amp;e(&quot;Transitions&quot;,&quot;Transitions&quot;,&quot;fa-sticky-note&quot;,&quot;fas&quot;,S);var p=k(&quot;li&quot;,{id:&quot;close&quot;,class:&quot;toolbar-panel-button&quot;});if(p.appendChild(k(&quot;i&quot;,{class:&quot;fas fa-times&quot;})),p.appendChild(k(&quot;br&quot;)),p.appendChild(k(&quot;span&quot;,{class:&quot;slide-menu-toolbar-label&quot;},&quot;Close&quot;)),p.onclick=function(){g(null,!0)},d.appendChild(p),function e(){if(document.querySelector(&quot;section[data-markdown]:not([data-markdown-parsed])&quot;))setTimeout(e,100);else{var t=k(&quot;div&quot;,{&quot;data-panel&quot;:&quot;Slides&quot;,class:&quot;slide-menu-panel active-menu-panel&quot;});t.appendChild(k(&quot;ul&quot;,{class:&quot;slide-menu-items&quot;})),u.appendChild(t);var n=O(&#39;.slide-menu-panel[data-panel=&quot;Slides&quot;] &gt; .slide-menu-items&#39;),r=0;A(&quot;.slides &gt; section&quot;).forEach((function(e,t){var a=A(&quot;section&quot;,e);if(a.length&gt;0)a.forEach((function(e,a){var o=i(0===a?&quot;slide-menu-item&quot;:&quot;slide-menu-item-vertical&quot;,e,r,t,a);o&amp;&amp;n.appendChild(o),r++}));else{var o=i(&quot;slide-menu-item&quot;,e,r,t);o&amp;&amp;n.appendChild(o),r++}})),A(&quot;.slide-menu-item, .slide-menu-item-vertical&quot;).forEach((function(e){e.onclick=x})),w()}}(),t.addEventListener(&quot;slidechanged&quot;,w),r.custom){var h=function(){this.status&gt;=200&amp;&amp;this.status&lt;300?(this.panel.innerHTML=this.responseText,C(this.panel)):I(this)},E=function(){I(this)},C=function(e){A(&quot;ul.slide-menu-items li.slide-menu-item&quot;,e).forEach((function(e,t){e.setAttribute(&quot;data-item&quot;,t+1),e.onclick=x,e.addEventListener(&quot;mouseenter&quot;,o)}))},I=function(e){var t=&quot;&lt;p&gt;ERROR: The attempt to fetch &quot;+e.responseURL+&quot; failed with HTTP status &quot;+e.status+&quot; (&quot;+e.statusText+&quot;).&lt;/p&gt;&lt;p&gt;Remember that you need to serve the presentation HTML from a HTTP server.&lt;/p&gt;&quot;;e.panel.innerHTML=t};r.custom.forEach((function(e,t,n){var r=k(&quot;div&quot;,{&quot;data-panel&quot;:&quot;Custom&quot;+t,class:&quot;slide-menu-panel slide-menu-custom-panel&quot;});e.content?(r.innerHTML=e.content,C(r)):e.src&amp;&amp;function(e,t){var n=new XMLHttpRequest;n.panel=e,n.arguments=Array.prototype.slice.call(arguments,2),n.onload=h,n.onerror=E,n.open(&quot;get&quot;,t,!0),n.send(null)}(r,e.src),u.appendChild(r)}))}if(r.themes){var P=k(&quot;div&quot;,{class:&quot;slide-menu-panel&quot;,&quot;data-panel&quot;:&quot;Themes&quot;});u.appendChild(P);var M=k(&quot;ul&quot;,{class:&quot;slide-menu-items&quot;});P.appendChild(M),r.themes.forEach((function(e,t){var n={class:&quot;slide-menu-item&quot;,&quot;data-item&quot;:&quot;&quot;+(t+1)};e.theme&amp;&amp;(n[&quot;data-theme&quot;]=e.theme),e.highlightTheme&amp;&amp;(n[&quot;data-highlight-theme&quot;]=e.highlightTheme);var r=k(&quot;li&quot;,n,e.name);M.appendChild(r),r.onclick=x}))}if(r.transitions){P=k(&quot;div&quot;,{class:&quot;slide-menu-panel&quot;,&quot;data-panel&quot;:&quot;Transitions&quot;});u.appendChild(P);M=k(&quot;ul&quot;,{class:&quot;slide-menu-items&quot;});P.appendChild(M),r.transitions.forEach((function(e,t){var n=k(&quot;li&quot;,{class:&quot;slide-menu-item&quot;,&quot;data-transition&quot;:e.toLowerCase(),&quot;data-item&quot;:&quot;&quot;+(t+1)},e);M.appendChild(n),n.onclick=x}))}if(r.openButton){var R=k(&quot;div&quot;,{class:&quot;slide-menu-button&quot;}),j=k(&quot;a&quot;,{href:&quot;#&quot;});j.appendChild(k(&quot;i&quot;,{class:&quot;fas fa-bars&quot;})),R.appendChild(j),O(&quot;.reveal&quot;).appendChild(R),R.onclick=v}if(r.openSlideNumber)O(&quot;div.slide-number&quot;).onclick=v;A(&quot;.slide-menu-panel .slide-menu-items li&quot;).forEach((function(e){e.addEventListener(&quot;mouseenter&quot;,o)}))}if(r.keyboard){if(document.addEventListener(&quot;keydown&quot;,m,!1),window.addEventListener(&quot;message&quot;,(function(e){var t;try{t=JSON.parse(e.data)}catch(e){}t&amp;&amp;&quot;triggerKey&quot;===t.method&amp;&amp;m({keyCode:t.args[0],stopImmediatePropagation:function(){}})})),n.keyboardCondition&amp;&amp;&quot;function&quot;==typeof n.keyboardCondition){var N=n.keyboardCondition;n.keyboardCondition=function(e){return N(e)&amp;&amp;(!b()||77==e.keyCode)}}else n.keyboardCondition=function(e){return!b()||77==e.keyCode};t.addKeyBinding({keyCode:77,key:&quot;M&quot;,description:&quot;Toggle menu&quot;},y)}r.openOnInit&amp;&amp;v(),a=!0}function O(e,t){return t||(t=document),t.querySelector(e)}function A(e,t){return t||(t=document),Array.prototype.slice.call(t.querySelectorAll(e))}function k(e,t,n){var r=document.createElement(e);return t&amp;&amp;Object.getOwnPropertyNames(t).forEach((function(e){r.setAttribute(e,t[e])})),n&amp;&amp;(r.innerHTML=n),r}function I(e,t){var n=O(&quot;link#&quot;+e),r=n.parentElement,i=n.nextElementSibling;n.remove();var a=n.cloneNode();a.setAttribute(&quot;href&quot;,t),a.onload=function(){L()},r.insertBefore(a,i)}function P(e,t,n){var r,i=document.querySelector(&quot;head&quot;);&quot;script&quot;===t?((r=document.createElement(&quot;script&quot;)).type=&quot;text/javascript&quot;,r.src=e):&quot;stylesheet&quot;===t&amp;&amp;((r=document.createElement(&quot;link&quot;)).rel=&quot;stylesheet&quot;,r.href=e);var a=function(){&quot;function&quot;==typeof n&amp;&amp;(n.call(),n=null)};r.onload=a,r.onreadystatechange=function(){&quot;loaded&quot;===this.readyState&amp;&amp;a()},i.appendChild(r)}function M(){var e,a,o,s=!i||i&gt;=9;t.isSpeakerNotes()&amp;&amp;window.location.search.endsWith(&quot;controls=false&quot;)&amp;&amp;(s=!1),s&amp;&amp;(r.delayInit||C(),e=&quot;menu-ready&quot;,(o=document.createEvent(&quot;HTMLEvents&quot;,1,2)).initEvent(e,!0,!0),function(e,t){for(var n in t)e[n]=t[n]}(o,a),document.querySelector(&quot;.reveal&quot;).dispatchEvent(o),n.postMessageEvents&amp;&amp;window.parent!==window.self&amp;&amp;window.parent.postMessage(JSON.stringify({namespace:&quot;reveal&quot;,eventName:e,state:t.getState()}),&quot;*&quot;))}return{id:&quot;menu&quot;,init:function(e){o(n=(t=e).getConfig()),P(r.path+&quot;menu.css&quot;,&quot;stylesheet&quot;,(function(){void 0===r.loadIcons||r.loadIcons?P(r.path+&quot;font-awesome/css/all.css&quot;,&quot;stylesheet&quot;,M):M()}))},toggle:y,openMenu:v,closeMenu:g,openPanel:S,isOpen:b,initialiseMenu:C,isMenuInitialised:function(){return a}}}}));</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2" style="width:185px">
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;">
            Copy lines
          </clipboard-copy>
        </li>
        <li>
          <clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;">
            Copy permalink
          </clipboard-copy>
        </li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/denehyg/reveal.js-menu/blame/a630970d81ed1242c31821a43a91645af74e56aa/menu.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/denehyg/reveal.js-menu/issues/new">Reference in new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  


  <details class="details-reset details-overlay details-overlay-dark" id="jumpto-line-details-dialog">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get">
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>

    <div class="Popover anim-scale-in js-tagsearch-popover"
     hidden
     data-tagsearch-url="/denehyg/reveal.js-menu/find-definition"
     data-tagsearch-ref="master"
     data-tagsearch-path="menu.js"
     data-tagsearch-lang="JavaScript"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:39561312,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/denehyg/reveal.js-menu/blob/master/menu.js&quot;,&quot;user_id&quot;:3624059}}"
     data-hydro-click-hmac="efb6991cea0d5276bf5047b19314c120505965c40df8e3af54b9e9434a841535">
  <div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mb-4 mx-auto Box box-shadow-large">
    <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto" style="will-change:transform;">
    </div>
  </div>
</div>




  </div>
</div>

    </main>
  </div>

  </div>

        
<div class="footer container-xl width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2020 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://docs.github.com">Help</a></li>

    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://docs.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://services.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>
    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" async="async" integrity="sha512-bn/3rKJzBl2H64K38R8KaVcT26vKK7BJQC59lwYc+9fjlHzmy0fwh+hzBtsgTdhIi13dxjzNKWhdSN8WTM9qUw==" type="application/javascript" id="js-conditional-compat" data-src="https://github.githubassets.com/assets/compat-bootstrap-6e7ff7ac.js"></script>
    <script crossorigin="anonymous" integrity="sha512-CxjaMepCmi+z0LTeztU2S8qGD25LyHD6j9t0RSPevy63trFWJVwUM6ipAVLgtpMBBgZ53wq8JPkSeQ6ruaZL2w==" type="application/javascript" src="https://github.githubassets.com/assets/environment-bootstrap-0b18da31.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-OI5/7mbbF7NgEDkkOTHHMacH89Q1ZwFBUzRIp5CxZ0rbXIali/c2NVfQPjZEwrpLh4XmnaZ1B4vjcDimSb2/GA==" type="application/javascript" src="https://github.githubassets.com/assets/vendor-388e7fee.js"></script>
    <script crossorigin="anonymous" async="async" integrity="sha512-6oTcBdHDfPUQ41MNh9xWCZ17Vk6K3k+yClX2uERAWSLsrRrOkV5SbLA9LnwoAakCGEfImqrUm3u7JgPWlyaEmg==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-ea84dc05.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-HoNw9Sl7kKeJbbxwArYa5A20xsRg3fLbmsLHqAMh7k+QKqwFgZCj+3d/9Happwng6B3cGGFLFLJrxS7HJg/HGA==" type="application/javascript" src="https://github.githubassets.com/assets/behaviors-bootstrap-1e8370f5.js"></script>
    
      <script crossorigin="anonymous" async="async" integrity="sha512-44qssMj+fXq3KdFy9Xwq1xbyF9+0lUDA4T8YID97FKD+j18CEaDsPGutuPP3frQFBwcikEViAK+3cFq5MzmQCg==" type="application/javascript" data-module-id="./contributions-spider-graph.js" data-src="https://github.githubassets.com/assets/contributions-spider-graph-e38aacb0.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-EOcKJC66ZRh9HbNcX4OaUtWMBVt6SEC3qOFS0QOam5vJQ1OD1sdHNk/Pns/CboOmqzrtBDObn7Cj06879tEsog==" type="application/javascript" data-module-id="./drag-drop.js" data-src="https://github.githubassets.com/assets/drag-drop-10e70a24.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-I7a2EZqGOJIvRNIIlxou5gPAzxyyRFTX8sjXiD9x3roIIbHGUJjrBes1TjNA/2OCnjh2OLikXPwfzZQcG3NYlA==" type="application/javascript" data-module-id="./jump-to.js" data-src="https://github.githubassets.com/assets/jump-to-23b6b611.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-rsUGFyiXcdKqK8d8KGr+uKVj3VFQCTg+7q0EmNiulTWVMxPxz/OG9U9raM1Gx7egMpgRVqxwRfYPURgv/f0UXA==" type="application/javascript" data-module-id="./profile-pins-element.js" data-src="https://github.githubassets.com/assets/profile-pins-element-aec50617.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-qECv/jhsvLFN77eGNu0cjMR2+zvAlLyhQVTnmayJc5OLZoxMLjQZxZW1hK/dhcYro6Wec/aiF21HYf2N5OilYQ==" type="application/javascript" data-module-id="./randomColor.js" data-src="https://github.githubassets.com/assets/randomColor-a840affe.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-vK7rRnsAi4qcmC2HqCfPyEBZgIMWb6Azyb1PJxgL1FtEFMydK//dsnuLdVx+RaPGg71Z58ossFXqkLWgMevvdw==" type="application/javascript" data-module-id="./sortable-behavior.js" data-src="https://github.githubassets.com/assets/sortable-behavior-bcaeeb46.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-mHqsE5aQq7fAmmLd0epHBJK8rn8DOVnjW2YQOT8wvsN1oLrypw0cDFmwXPDwbMghHyo4kKiOtVJ/kEsEzwwibw==" type="application/javascript" data-module-id="./tweetsodium.js" data-src="https://github.githubassets.com/assets/tweetsodium-987aac13.js"></script>
      <script crossorigin="anonymous" async="async" integrity="sha512-OBi4mmeYw2a1J5Tco9b+p6XRPtxOhulh8Ya7q5/9OAR2J9WArD1VzQlYPCkvq4thL0SjoFNGhwjjvblLANwKzA==" type="application/javascript" data-module-id="./user-status-submit.js" data-src="https://github.githubassets.com/assets/user-status-submit-3818b89a.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-dVmYmajDmMmC/HnUfse7kgbolgEMILS6NM8Zx2RQ7kkVtiJwMA3RNl6QFfCBsqwtUKLxDe0jGxcqJgmlVa3FZQ==" type="application/javascript" src="https://github.githubassets.com/assets/repositories-bootstrap-75599899.js"></script>
<script crossorigin="anonymous" async="async" integrity="sha512-F3YQLSC+H6Tu+2gKp28u28yB2tsLECKfVigfF+fM95eiXTvGhB2ZUTERMm8ZDI8hEOvCkleYBgMFkxBetkl6zw==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-1776102d.js"></script>
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>


  </body>
</html>

