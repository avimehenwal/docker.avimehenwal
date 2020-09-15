




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
  
  <title>reveal.js-plugins/plugin.js at master · rajgoel/reveal.js-plugins</title>
    <meta name="description" content="Plugins for reveal.js. Contribute to rajgoel/reveal.js-plugins development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">
  <meta name="apple-itunes-app" content="app-id=1477376905">

    <meta name="twitter:image:src" content="https://avatars0.githubusercontent.com/u/4448455?s=400&amp;v=4" /><meta name="twitter:site" content="@github" /><meta name="twitter:card" content="summary" /><meta name="twitter:title" content="rajgoel/reveal.js-plugins" /><meta name="twitter:description" content="Plugins for reveal.js. Contribute to rajgoel/reveal.js-plugins development by creating an account on GitHub." />
    <meta property="og:image" content="https://avatars0.githubusercontent.com/u/4448455?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="rajgoel/reveal.js-plugins" /><meta property="og:url" content="https://github.com/rajgoel/reveal.js-plugins" /><meta property="og:description" content="Plugins for reveal.js. Contribute to rajgoel/reveal.js-plugins development by creating an account on GitHub." />



  

  <link rel="assets" href="https://github.githubassets.com/">
    <link rel="shared-web-socket" href="wss://alive.github.com/_sockets/u/3624059/ws?session=eyJ2IjoiVjMiLCJ1IjozNjI0MDU5LCJzIjo1Njk4NDE0MjcsImMiOjQyNDYyMTk2NDQsInQiOjE2MDAyMTExOTB9--cedde55676ac2fdc919c1228cf2e1a28f2fe8d462142a39f74c83c1fecda29a3" data-refresh-url="/_alive">
  <link rel="sudo-modal" href="/sessions/sudo_modal">

  <meta name="request-id" content="E472:38BD:206C0E:2E05C6:5F6148C3" data-pjax-transient="true" /><meta name="html-safe-nonce" content="c2f5bda3dd8f75e11a7ade3074ebe5e62c90ef6b" data-pjax-transient="true" /><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9yYWpnb2VsL3JldmVhbC5qcy1wbHVnaW5zL3RyZWUvbWFzdGVyL2NoYWxrYm9hcmQiLCJyZXF1ZXN0X2lkIjoiRTQ3MjozOEJEOjIwNkMwRToyRTA1QzY6NUY2MTQ4QzMiLCJ2aXNpdG9yX2lkIjoiMTIzMjI3OTQ0OTQyNzQ5MDA4MyIsInJlZ2lvbl9lZGdlIjoiZnJhIiwicmVnaW9uX3JlbmRlciI6ImlhZCJ9" data-pjax-transient="true" /><meta name="visitor-hmac" content="a4af491148c7b09b6f5b90ae892edd9f19733f15b74a5718b4cacc6ed5cd508e" data-pjax-transient="true" /><meta name="cookie-consent-required" content="true" />

    <meta name="hovercard-subject-tag" content="repository:48757764" data-pjax-transient>


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

      <meta name="js-proxy-site-detection-payload" content="MzU2MWI4NmY2NzAzZTIzNjVkZjUwNmRlNTk3ZjkzMzljZmZlNjMxODNhZjFhMjA4MmZjOGFiMTdlNTMxMDM1Znx7InJlbW90ZV9hZGRyZXNzIjoiMTk0Ljk1LjEuMjIxIiwicmVxdWVzdF9pZCI6IkU0NzI6MzhCRDoyMDZDMEU6MkUwNUM2OjVGNjE0OEMzIiwidGltZXN0YW1wIjoxNjAwMjExMTkwLCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="MARKETPLACE_PENDING_INSTALLATIONS,JS_HTTP_CACHE_HEADERS">

  <meta http-equiv="x-pjax-version" content="6a49488c2bbef9708d8d871bc5e0ff05">
  

        <link href="https://github.com/rajgoel/reveal.js-plugins/commits/master.atom" rel="alternate" title="Recent Commits to reveal.js-plugins:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/rajgoel/reveal.js-plugins git https://github.com/rajgoel/reveal.js-plugins.git">

  <meta name="octolytics-dimension-user_id" content="4448455" /><meta name="octolytics-dimension-user_login" content="rajgoel" /><meta name="octolytics-dimension-repository_id" content="48757764" /><meta name="octolytics-dimension-repository_nwo" content="rajgoel/reveal.js-plugins" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="48757764" /><meta name="octolytics-dimension-repository_network_root_nwo" content="rajgoel/reveal.js-plugins" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js" data-pjax-transient>


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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" role="search" aria-label="Site" data-scope-type="Repository" data-scope-id="48757764" data-scoped-search-url="/rajgoel/reveal.js-plugins/search" data-unscoped-search-url="/search" action="/rajgoel/reveal.js-plugins/search" accept-charset="UTF-8" method="get">
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
          <input type="hidden" value="6BWYGnpmYyz8DfW6F/6L851/0JMH2t513oFUFviOCVNOzi3ijvelFCKEqviUBSEzUD8pzZk0caCAkgLqM/JQhA==" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf" />
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
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="vhhDq77DXGgyK9WfioRuHUhaGS13VYQlXmO4Pprgu9snmKVoCRsOLAvi8Zj4C0ol2zHoY4kgYsuTO6BiV2hEnA==" />
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
    

    <notification-indicator class="js-socket-channel" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MzYyNDA1OSIsInQiOjE2MDAyMTExOTB9--b11778e3fef7e2765c665412e0492d6c99b655d841e4ae0bff738b70ca177394">
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
    <span title="rajgoel/reveal.js-plugins">This repository</span>
  </div>
    <a role="menuitem" class="dropdown-item" href="/rajgoel/reveal.js-plugins/issues/new/choose" data-ga-click="Header, create new issue" data-skip-pjax>
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
      role="menuitem" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:4448455,&quot;target&quot;:&quot;EDIT_USER_STATUS&quot;,&quot;user_id&quot;:3624059,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;}}" data-hydro-click-hmac="0e2d57d1026b7dd4d191e0a6841653e2b9aa2e33b8697a9cd8d5771e57fbab44">
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
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="position-relative flex-auto js-user-status-form" action="/users/status?circle=0&amp;compact=1&amp;link_mentions=0&amp;truncate=1" accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put" /><input type="hidden" name="authenticity_token" value="YzvdVFLVMZk3JD6QwUotzSAiYK3YeTCUv7HjSY/WVTuHmDeGBg4S/U6JblhLPaKQaxJqMV8pWbKk4zGgxgf/jg==" />
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
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 30 minutes" value="2020-09-16T01:36:30+02:00">
            in 30 minutes
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 1 hour" value="2020-09-16T02:06:30+02:00">
            in 1 hour
          </button>
        </li>
        <li>
          <button type="button" class="btn-link dropdown-item ws-normal js-user-status-expire-button" title="in 4 hours" value="2020-09-16T05:06:30+02:00">
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

    <a role="menuitem" class="dropdown-item" href="/avimehenwal" data-ga-click="Header, go to profile, text:your profile" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;target&quot;:&quot;YOUR_PROFILE&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="3901f21751ad60874d4d2feb4ebc84975b134ef3a9d4e48b3027ac04b29472c9" >Your profile</a>

    <a role="menuitem" class="dropdown-item" href="/avimehenwal?tab=repositories" data-ga-click="Header, go to repositories, text:your repositories" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;target&quot;:&quot;YOUR_REPOSITORIES&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="2b70b06a87c011083cfc4419d6e7d76338334cbab14e9ecdcded2863ef09460d" >Your repositories</a>

      <a role="menuitem"
         class="dropdown-item"
         href="/settings/organizations"
         
         data-ga-click="Header, go to organizations, text:your organizations"
         data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;target&quot;:&quot;YOUR_ORGANIZATIONS&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="946a66759045159ef5e031e0653ed5d19a4a8da905543147635d3828b43dcfd2"
         >Your organizations</a>


    <a role="menuitem" class="dropdown-item" href="/avimehenwal?tab=projects" data-ga-click="Header, go to projects, text:your projects" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;target&quot;:&quot;YOUR_PROJECTS&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="645d1de95d628e7413672a228e5c95408a25c374c41dfbca49a4d695ef136b3a" >Your projects</a>


    <a role="menuitem" class="dropdown-item" href="/avimehenwal?tab=stars" data-ga-click="Header, go to starred repos, text:your stars" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;target&quot;:&quot;YOUR_STARS&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="04d45a7bc39f9c2fac9bbf5fa8ea3d16d82af7c8101809ca0fb5bd424e8a19d1" >Your stars</a>
      <a role="menuitem" class="dropdown-item" href="https://gist.github.com/mine" data-ga-click="Header, your gists, text:your gists" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;target&quot;:&quot;YOUR_GISTS&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="9b86327205199d29848c59620c2d5013f364915446fa63ff8e6448da1b7ba33b" >Your gists</a>





    <div role="none" class="dropdown-divider"></div>
      
<div id="feature-enrollment-toggle" class="hide-sm hide-md feature-preview-details position-relative">
  <button
    type="button"
    class="dropdown-item btn-link"
    role="menuitem"
    data-feature-preview-trigger-url="/users/avimehenwal/feature_previews"
    data-feature-preview-close-details="{&quot;event_type&quot;:&quot;feature_preview.clicks.close_modal&quot;,&quot;payload&quot;:{&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}"
    data-feature-preview-close-hmac="c93a59909ebc3c0fb9afde3fec55b1d0594909cd1c053eb3623019243aabb452"
    data-hydro-click="{&quot;event_type&quot;:&quot;feature_preview.clicks.open_modal&quot;,&quot;payload&quot;:{&quot;link_location&quot;:&quot;user_dropdown&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}"
    data-hydro-click-hmac="fd11a0d32e59e4fd09fa987a1488270fd31d1f921afda34788dbd6a37d546373"
  >
    Feature preview
  </button>
    <span class="feature-preview-indicator js-feature-preview-indicator" hidden></span>
</div>

    <a role="menuitem" class="dropdown-item" href="https://docs.github.com" data-ga-click="Header, go to help, text:help" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;target&quot;:&quot;HELP&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="56a7d9b6731144d081244a17272bbe80e4b5c749d556beed90ac36d9ec1e1582" >Help</a>
    <a role="menuitem" class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;target&quot;:&quot;SETTINGS&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="533a0c291f9fc993038c4f956e260b4a6a276607a83cf8e75ef40aab9fb11e42" >Settings</a>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="logout-form" action="/logout" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="5OLu65lkETY7/79dW/yQTbhBJkVLMbTAyKyBzkrqd/19YggoLrxDcgI2m1opc7R1KyrXC7VEUi4F9JmSh2KIug==" />
      
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout" data-hydro-click="{&quot;event_type&quot;:&quot;global_header.user_menu_dropdown.click&quot;,&quot;payload&quot;:{&quot;request_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;target&quot;:&quot;SIGN_OUT&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="9851147411c16c597c3046d5ee9fd5e6fec1313c880cd1772ba90fce963ec3b1"  role="menuitem">
        Sign out
      </button>
      <input type="text" name="required_field_40cd" hidden="hidden" class="form-control" /><input type="hidden" name="timestamp" value="1600211190870" class="form-control" /><input type="hidden" name="timestamp_secret" value="95d814b30f6f13e52a8becf263827429c8e592d093a84df3baca0da3c04b4809" class="form-control" />
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
    <a class="url fn" rel="author" data-hovercard-type="user" data-hovercard-url="/users/rajgoel/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/rajgoel">rajgoel</a>
  </span>
  <span class="mx-1 flex-self-stretch">/</span>
  <strong itemprop="name" class="mr-2 flex-self-stretch">
    <a data-pjax="#js-repo-pjax-container" href="/rajgoel/reveal.js-plugins">reveal.js-plugins</a>
  </strong>
  
</h1>


        </div>

          <ul class="pagehead-actions flex-shrink-0 d-none d-md-inline" style="padding: 2px 0;">

  <li>
            <form data-remote="true" class="d-flex js-social-form js-social-container" action="/notifications/subscribe" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="RRqyv7nStw394+tYCVSfP3iuRHJn04A+CGwxOqV8oDi8YpnRAqTHwvdjaR8aJHuzwtcToTzfRoy4vNv8hqkH9w==" />      <input type="hidden" name="repository_id" value="48757764">

      <details class="details-reset details-overlay select-menu hx_rsm">
        <summary class="btn btn-sm btn-with-count" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;WATCH_BUTTON&quot;,&quot;repository_id&quot;:48757764,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="32eaae9e8f1c44761f4651d1bb2e736a5d71ac0dbfae64f068dc00e02a9af643" data-ga-click="Repository, click Watch settings, action:blob#show">          <span data-menu-button>
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
          href="/rajgoel/reveal.js-plugins/watchers"
          aria-label="27 users are watching this repository">
          27
        </a>
</form>
  </li>

  <li>
        <div class="js-toggler-container js-social-container starring-container ">
    <form class="starred js-social-form" action="/rajgoel/reveal.js-plugins/unstar" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="uafSX5lKYoU3mx/PckL+U0g4oaLq+ByZPsPChZyCff+MpmvTN71xpwWFIArv7tiyFf0sC5/LBTLvFt1qlox6lw==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count  js-toggler-target" aria-label="Unstar this repository" title="Unstar rajgoel/reveal.js-plugins" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;UNSTAR_BUTTON&quot;,&quot;repository_id&quot;:48757764,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="84920df9c64726694bcd554aea032be319c535933a91436f82ceb8e6fcfd94f3" data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">        <svg height="16" class="octicon octicon-star-fill" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path></svg>
        Unstar
</button>        <a class="social-count js-social-count" href="/rajgoel/reveal.js-plugins/stargazers"
           aria-label="424 users starred this repository">
           424
        </a>
</form>
    <form class="unstarred js-social-form" action="/rajgoel/reveal.js-plugins/star" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="TRij/JQdTk9r7zyyFo712YfmvwFlZSI0Z9xOAptTi05652nn3QqAGJoT2Ost9BkB5cv47e4aP89BYJZYTGWFgA==" />
      <input type="hidden" name="context" value="repository"></input>
      <button type="submit" class="btn btn-sm btn-with-count  js-toggler-target" aria-label="Unstar this repository" title="Star rajgoel/reveal.js-plugins" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;STAR_BUTTON&quot;,&quot;repository_id&quot;:48757764,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="a4896ab7d4ec4038107f77d04685608eff8f49563f224d597444a7d71444f988" data-ga-click="Repository, click star button, action:blob#show; text:Star">        <svg height="16" class="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
        Star
</button>        <a class="social-count js-social-count" href="/rajgoel/reveal.js-plugins/stargazers"
           aria-label="424 users starred this repository">
          424
        </a>
</form>  </div>

  </li>

  <li>
            <div class="float-left">
              <details class="details-reset details-overlay details-overlay-dark " >
                      <summary
                    class="btn btn-sm btn-with-count"
                    title="Fork your own copy of rajgoel/reveal.js-plugins to your account"
                    data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FORK_BUTTON&quot;,&quot;repository_id&quot;:48757764,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="24f0c2f3ab42d75a81acd240e3c46e035eb26b36ee713efc472bc75cc6bc86be" data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
                    <svg class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
                    Fork
                  </summary>

  <details-dialog
    class="Box d-flex flex-column anim-fade-in fast Box--overlay"
      aria-label="Fork reveal.js-plugins"
      src="/rajgoel/reveal.js-plugins/fork?fragment=1"
      preload
    >
    <div class="Box-header">
      <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <svg height="16" class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
      </button>
      <h1 class="Box-title">Fork reveal.js-plugins</h1>
    </div>
      
                <div class="text-center overflow-auto">
                  <include-fragment>
                    <div class="octocat-spinner my-5" aria-label="Loading..."></div>
                    <p class="f5 text-gray">If this dialog fails to load, you can visit <a href="/rajgoel/reveal.js-plugins/fork">the fork page</a> directly.</p>
                  </include-fragment>
                </div>

  </details-dialog>
</details>
            </div>

      <a href="/rajgoel/reveal.js-plugins/network/members" class="social-count"
         aria-label="183 users forked this repository">
        183
      </a>
  </li>
</ul>

      </div>
        
<nav aria-label="Repository" data-pjax="#js-repo-pjax-container" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav px-3 px-md-4 px-lg-5 bg-gray-light">
  <ul class="UnderlineNav-body list-style-none ">
          <li class="d-flex">
        <a class="js-selected-navigation-item selected UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="code-tab" data-hotkey="g c" data-ga-click="Repository, Navigation click, Code tab" aria-current="page" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /rajgoel/reveal.js-plugins" href="/rajgoel/reveal.js-plugins">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path></svg>
            <span data-content="Code">Code</span>
              <span title="Not available" class="Counter "></span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="issues-tab" data-hotkey="g i" data-ga-click="Repository, Navigation click, Issues tab" data-selected-links="repo_issues repo_labels repo_milestones /rajgoel/reveal.js-plugins/issues" href="/rajgoel/reveal.js-plugins/issues">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path></svg>
            <span data-content="Issues">Issues</span>
              <span title="7" class="Counter ">7</span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="pull-requests-tab" data-hotkey="g p" data-ga-click="Repository, Navigation click, Pull requests tab" data-selected-links="repo_pulls checks /rajgoel/reveal.js-plugins/pulls" href="/rajgoel/reveal.js-plugins/pulls">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg>
            <span data-content="Pull requests">Pull requests</span>
              <span title="4" class="Counter ">4</span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="actions-tab" data-hotkey="g a" data-ga-click="Repository, Navigation click, Actions tab" data-selected-links="repo_actions /rajgoel/reveal.js-plugins/actions" href="/rajgoel/reveal.js-plugins/actions">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path></svg>
            <span data-content="Actions">Actions</span>
              <span title="Not available" class="Counter "></span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="projects-tab" data-hotkey="g b" data-ga-click="Repository, Navigation click, Projects tab" data-selected-links="repo_projects new_repo_project repo_project /rajgoel/reveal.js-plugins/projects" href="/rajgoel/reveal.js-plugins/projects">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-project UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"></path></svg>
            <span data-content="Projects">Projects</span>
              <span title="0" hidden="hidden" class="Counter ">0</span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="wiki-tab" data-hotkey="g w" data-ga-click="Repository, Navigation click, Wikis tab" data-selected-links="repo_wiki /rajgoel/reveal.js-plugins/wiki" href="/rajgoel/reveal.js-plugins/wiki">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path></svg>
            <span data-content="Wiki">Wiki</span>
              <span title="Not available" class="Counter "></span>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="security-tab" data-hotkey="g s" data-ga-click="Repository, Navigation click, Security tab" data-selected-links="security overview alerts policy token_scanning code_scanning /rajgoel/reveal.js-plugins/security" href="/rajgoel/reveal.js-plugins/security">
              <svg classes="UnderlineNav-octicon" display="none inline" height="16" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path></svg>
            <span data-content="Security">Security</span>
              <include-fragment src="/rajgoel/reveal.js-plugins/security/overall-count" accept="text/fragment+html"></include-fragment>
</a>      </li>
      <li class="d-flex">
        <a class="js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item" data-tab-item="insights-tab" data-ga-click="Repository, Navigation click, Insights tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people /rajgoel/reveal.js-plugins/pulse" href="/rajgoel/reveal.js-plugins/pulse">
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
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /rajgoel/reveal.js-plugins" href="/rajgoel/reveal.js-plugins">
                    Code
</a>                </li>
                <li data-menu-item="issues-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /rajgoel/reveal.js-plugins/issues" href="/rajgoel/reveal.js-plugins/issues">
                    Issues
</a>                </li>
                <li data-menu-item="pull-requests-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /rajgoel/reveal.js-plugins/pulls" href="/rajgoel/reveal.js-plugins/pulls">
                    Pull requests
</a>                </li>
                <li data-menu-item="actions-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /rajgoel/reveal.js-plugins/actions" href="/rajgoel/reveal.js-plugins/actions">
                    Actions
</a>                </li>
                <li data-menu-item="projects-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /rajgoel/reveal.js-plugins/projects" href="/rajgoel/reveal.js-plugins/projects">
                    Projects
</a>                </li>
                <li data-menu-item="wiki-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /rajgoel/reveal.js-plugins/wiki" href="/rajgoel/reveal.js-plugins/wiki">
                    Wiki
</a>                </li>
                <li data-menu-item="security-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /rajgoel/reveal.js-plugins/security" href="/rajgoel/reveal.js-plugins/security">
                    Security
</a>                </li>
                <li data-menu-item="insights-tab" hidden>
                  <a role="menuitem" class="js-selected-navigation-item dropdown-item" data-selected-links=" /rajgoel/reveal.js-plugins/pulse" href="/rajgoel/reveal.js-plugins/pulse">
                    Insights
</a>                </li>
            </ul>

</details-menu>
</div></details>    </div>

</nav>
  </div>

<div class="container-xl clearfix new-discussion-timeline  px-3 px-md-4 px-lg-5">
  <div class="repository-content " >

    
      
  


    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/rajgoel/reveal.js-plugins/blob/8127033db8a223497d66ebddea08d4e829c7d297/chalkboard/plugin.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v22:33c48d83c6fa5691f8e1902a96edf0ff578370d8b58d6d535469762989361a3b -->
    

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

    <details-menu class="SelectMenu SelectMenu--hasFilter" src="/rajgoel/reveal.js-plugins/refs/master/chalkboard/plugin.js?source_action=show&amp;source_controller=blob" preload>
      <div class="SelectMenu-modal">
        <include-fragment class="SelectMenu-loading" aria-label="Menu is loading">
          <svg class="octicon octicon-octoface anim-pulse" height="32" viewBox="0 0 24 24" version="1.1" width="32" aria-hidden="true"><path d="M7.75 11c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5C9 11.56 8.44 11 7.75 11zm1.27 4.5a.469.469 0 01.48-.5h5a.47.47 0 01.48.5c-.116 1.316-.759 2.5-2.98 2.5s-2.864-1.184-2.98-2.5zm7.23-4.5c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5c0-.69-.56-1.25-1.25-1.25z"></path><path fill-rule="evenodd" d="M21.255 3.82a1.725 1.725 0 00-2.141-1.195c-.557.16-1.406.44-2.264.866-.78.386-1.647.93-2.293 1.677A18.442 18.442 0 0012 5c-.93 0-1.784.059-2.569.17-.645-.74-1.505-1.28-2.28-1.664a13.876 13.876 0 00-2.265-.866 1.725 1.725 0 00-2.141 1.196 23.645 23.645 0 00-.69 3.292c-.125.97-.191 2.07-.066 3.112C1.254 11.882 1 13.734 1 15.527 1 19.915 3.13 23 12 23c8.87 0 11-3.053 11-7.473 0-1.794-.255-3.647-.99-5.29.127-1.046.06-2.15-.066-3.125a23.652 23.652 0 00-.689-3.292zM20.5 14c.5 3.5-1.5 6.5-8.5 6.5s-9-3-8.5-6.5c.583-4 3-6 8.5-6s7.928 2 8.5 6z"></path></svg>
        </include-fragment>
      </div>
    </details-menu>
  </details>

</div>

      <h2 id="blob-path" class="breadcrumb flex-auto min-width-0 text-normal mx-0 mx-md-3 width-full width-md-auto flex-order-1 flex-md-order-none mt-3 mt-md-0">
        <span class="js-repo-root text-bold"><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="/rajgoel/reveal.js-plugins"><span>reveal.js-plugins</span></a></span></span><span class="separator">/</span><span class="js-path-segment d-inline-block wb-break-all"><a data-pjax="true" href="/rajgoel/reveal.js-plugins/tree/master/chalkboard"><span>chalkboard</span></a></span><span class="separator">/</span><strong class="final-path">plugin.js</strong>
          <span class="separator">/</span><details class="details-reset details-overlay d-inline" id="jumpto-symbol-select-menu">
  <summary class="btn-link link-gray css-truncate" aria-haspopup="true" data-hotkey="r" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_blob_definitions&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_blob_definitions&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="d912d4b16218303b6fbda1446e85e0f47b74f328d3a489c07be918ba22b2dd9c">
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
            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L18">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>init</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L21">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>configure</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L22">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>toggleNotesCanvas</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L23">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>toggleChalkboard</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L24">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>colorNext</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L25">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>colorPrev</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L26">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>clear</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L27">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>reset</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L28">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>resetAll</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L29">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>download</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L32">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>scriptPath</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L49">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>initChalkboard</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L55">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>get</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L114">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>configure</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L161">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>whenReady</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L229">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>setupDrawingCanvas</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L234">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>oncontextmenu</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L310">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>loadData</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L312">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>onload</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L352">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>downloadData</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L377">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>getSlideData</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L395">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>getSlideDuration</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L416">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>createPrintout</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L424">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>onload</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L440">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>getSlidesArray</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L480">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>cloneCanvas</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L493">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>createDrawings</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L559">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>addDrawings</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L583">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>drawWithBoardmarker</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L593">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>drawWithChalk</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L621">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>eraseWithSponge</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L638">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>showChalkboard</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L657">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>closeChalkboard</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L677">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>clearCanvas</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L686">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>drawGrid</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L724">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>redrawGrid</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L765">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>setColor</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L776">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>cycleColorNext</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L784">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>cycleColorPrev</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L893">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>recordEvent</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L903">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>startRecording</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L909">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>startPlayback</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L941">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>stopPlayback</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L952">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>playEvent</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L989">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>drawCurve</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L1019">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>eraseCurve</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L1045">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>startDrawing</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L1063">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>showSponge</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L1079">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>drawSegment</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L1101">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>stopDrawing</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L1326">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>updateReadOnlyMode</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L1449">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>toggleNotesCanvas</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L1479">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>toggleChalkboard</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L1505">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>clear</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L1516">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>colorNext</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L1528">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>colorPrev</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L1540">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>resetSlide</span>
              <span class="flex-auto d-flex flex-justify-end">Function</span>
</a>            <a class="SelectMenu-item d-flex flex-justify-between css-truncate" role="menuitemradio" aria-checked="false" rel="nofollow" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.navigate_to_blob_definition&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;navigate_to_blob_definition&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="574f2a20da433d8ef8e918380208ed588825551363b569a769166f0824400fb1" href="/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js#L1569">
              <svg class="octicon octicon-check SelectMenu-icon SelectMenu-icon--check" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
              <span class="flex-auto css-truncate-target" data-menu-button-text>resetStorage</span>
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
      <a href="/rajgoel/reveal.js-plugins/find/master"
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
              <a class="dropdown-item d-flex flex-items-baseline" data-hydro-click="{&quot;event_type&quot;:&quot;repository.click&quot;,&quot;payload&quot;:{&quot;target&quot;:&quot;FIND_FILE_BUTTON&quot;,&quot;repository_id&quot;:48757764,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}" data-hydro-click-hmac="882f2b1a3a947ef12d7d74e2c60b3d34646d6cf1b4a2dfbf4faa69b3d0bd6402" data-ga-click="Repository, find file, location:repo overview" data-hotkey="t" data-pjax="true" href="/rajgoel/reveal.js-plugins/find/master">
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
              <clipboard-copy value="chalkboard/plugin.js" class="dropdown-item cursor-pointer" data-toggle-for="blob-more-options-details">
                Copy path
              </clipboard-copy>
            </li>
          </ul>
</div></details>    </div>



    <div class="Box d-flex flex-column flex-shrink-0 mb-3">
      
  <div class="Box-header Box-header--blue Details js-details-container">
      <div class="d-flex flex-items-center">
        <span class="flex-shrink-0 ml-n1 mr-n1 mt-n1 mb-n1">
          <img class="avatar avatar-user" width="24" height="24" alt="" src="https://camo.githubusercontent.com/4b3b979feeb0b2d3974c84849104df614d278337/68747470733a2f2f312e67726176617461722e636f6d2f6176617461722f33363637376433356262346262633933643265323864656463373639666637323f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" data-canonical-src="https://1.gravatar.com/avatar/36677d35bb4bbc93d2e28dedc769ff72?d=https%3A%2F%2Fgithub.githubassets.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=g&amp;s=140" />
        </span>
        <div class="flex-1 d-flex flex-items-center ml-3 min-width-0">
          <div class="css-truncate css-truncate-overflow">
            <span class="text-bold link-gray-dark">Asvin Goel</span>

              <span>
                <a data-pjax="true" title="Refactor and fix printout" class="link-gray" href="/rajgoel/reveal.js-plugins/commit/8127033db8a223497d66ebddea08d4e829c7d297">Refactor and fix printout</a>
              </span>
          </div>


          <span class="ml-2">
            <include-fragment accept="text/fragment+html" src="/rajgoel/reveal.js-plugins/commit/8127033db8a223497d66ebddea08d4e829c7d297/rollup?direction=e" class="d-inline"></include-fragment>
          </span>
        </div>
        <div class="ml-3 d-flex flex-shrink-0 flex-items-center flex-justify-end text-gray no-wrap">
          <span class="d-none d-md-inline">
            <span>Latest commit</span>
            <a class="text-small text-mono link-gray" href="/rajgoel/reveal.js-plugins/commit/8127033db8a223497d66ebddea08d4e829c7d297" data-pjax>8127033</a>
            <span itemprop="dateModified"><relative-time datetime="2020-08-28T08:55:02Z" class="no-wrap">Aug 28, 2020</relative-time></span>
          </span>

          <a data-pjax href="/rajgoel/reveal.js-plugins/commits/master/chalkboard/plugin.js" class="ml-3 no-wrap link-gray-dark no-underline">
            <svg text="gray" height="16" class="octicon octicon-history text-gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path></svg>
            <span class="d-none d-sm-inline">
              <strong>History</strong>
            </span>
          </a>
        </div>
      </div>

  </div>

  <div class="Box-body d-flex flex-items-center flex-auto border-bottom-0 flex-wrap" >
    <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-3" id="blob_contributors_box">
      <summary class="link-gray-dark">
        <svg text="gray" height="16" class="octicon octicon-people text-gray" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true"><path fill-rule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path></svg>
        <strong>0</strong>
        
        contributors
      </summary>
      <details-dialog
        class="Box Box--overlay d-flex flex-column anim-fade-in fast"
        aria-label="Users who have contributed to this file"
        src="/rajgoel/reveal.js-plugins/contributors-list/master/chalkboard/plugin.js" preload>
        <div class="Box-header">
          <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
            <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
          </button>
          <h3 class="Box-title">
            Users who have contributed to this file
          </h3>
        </div>
        <include-fragment class="octocat-spinner my-3" aria-label="Loading..."></include-fragment>
      </details-dialog>
    </details>
  </div>
    </div>






    <div class="Box mt-3 position-relative
      ">
      
<div class="Box-header py-2 d-flex flex-column flex-shrink-0 flex-md-row flex-md-items-center">
  <div class="text-mono f6 flex-auto pr-3 flex-order-2 flex-md-order-1 mt-2 mt-md-0">

      1617 lines (1458 sloc)
      <span class="file-info-divider"></span>
    53.2 KB
  </div>

  <div class="d-flex py-1 py-md-0 flex-auto flex-order-1 flex-md-order-2 flex-sm-grow-0 flex-justify-between">

    <div class="BtnGroup">
      <a href="/rajgoel/reveal.js-plugins/raw/master/chalkboard/plugin.js" id="raw-url" role="button" class="btn btn-sm BtnGroup-item ">Raw</a>
        <a href="/rajgoel/reveal.js-plugins/blame/master/chalkboard/plugin.js" data-hotkey="b" role="button" class="btn js-update-url-with-hash btn-sm BtnGroup-item ">Blame</a>
    </div>

    <div>
          <a class="btn-octicon tooltipped tooltipped-nw js-remove-unless-platform"
             data-platforms="windows,mac"
             href="https://desktop.github.com"
             aria-label="Open this file in GitHub Desktop"
             data-ga-click="Repository, open with desktop">
              <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"></path></svg>
          </a>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form js-update-url-with-hash" action="/rajgoel/reveal.js-plugins/edit/master/chalkboard/plugin.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="juZE6HYW4/INXeIngnkkVea0zIBQwlG3It8Wn6gT2QguTpHmagQlxMaG6WUjDLU5g6eio83Drdh9GaN7hpZv9w==" />
            <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
              aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
              <svg class="octicon octicon-pencil" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11.013 1.427a1.75 1.75 0 012.474 0l1.086 1.086a1.75 1.75 0 010 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 01-.927-.928l.929-3.25a1.75 1.75 0 01.445-.758l8.61-8.61zm1.414 1.06a.25.25 0 00-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 000-.354l-1.086-1.086zM11.189 6.25L9.75 4.81l-6.286 6.287a.25.25 0 00-.064.108l-.558 1.953 1.953-.558a.249.249 0 00.108-.064l6.286-6.286z"></path></svg>
            </button>
</form>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="inline-form" action="/rajgoel/reveal.js-plugins/delete/master/chalkboard/plugin.js" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="rrIwhMGFB8cEYgUjnIyMmAodybLXe7E+gy85W9MErz804/rty4cEQkM+tUpWmSdDJJeYjCTuc0Yc6g1r6p93nw==" />
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
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*****************************************************************</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** Author: Asvin Goel, goel@telematique.eu</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class=pl-c>**</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** A plugin for reveal.js adding a chalkboard.</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class=pl-c>**</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** Version: 1.0.5</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class=pl-c>**</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** License: MIT license (see LICENSE.md)</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class=pl-c>**</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** Credits:</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** Chalkboard effect by Mohamed Moustafa https://github.com/mmoustafa/Chalkboard</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** Multi color support by Kurt Rinnert https://github.com/rinnert</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** Compatibility with reveal.js v4 by Hakim El Hattab https://github.com/hakimel</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class=pl-c>******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>RevealChalkboard</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>RevealChalkboard</span> <span class=pl-c1>||</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">    <span class=pl-c1>id</span>: <span class=pl-s>&#39;RevealChalkboard&#39;</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>init</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>deck</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">        <span class=pl-en>initChalkboard</span><span class=pl-kos>(</span><span class=pl-s1>deck</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">    <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>configure</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>config</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-en>configure</span><span class=pl-kos>(</span><span class=pl-s1>config</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>toggleNotesCanvas</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-en>toggleNotesCanvas</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>toggleChalkboard</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-en>toggleChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>colorNext</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-en>colorNext</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>colorPrev</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span><span class=pl-en>colorPrev</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>clear</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-en>clear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>reset</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-en>reset</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>resetAll</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-en>resetAll</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    <span class=pl-en>download</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-en>download</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class=pl-k>function</span> <span class=pl-en>scriptPath</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>// obtain plugin path from the script element</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>src</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-c1>currentScript</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>src</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-c1>currentScript</span><span class=pl-kos>.</span><span class=pl-c1>src</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>sel</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&#39;script[src$=&quot;/chalkboard/plugin.js&quot;]&#39;</span><span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>sel</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>src</span> <span class=pl-c1>=</span> <span class=pl-s1>sel</span><span class=pl-kos>.</span><span class=pl-c1>src</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>path</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>src</span> <span class=pl-c1>===</span> <span class=pl-c1>undefined</span><span class=pl-kos>)</span> ? <span class=pl-s>&quot;&quot;</span> : <span class=pl-s1>src</span><span class=pl-kos>.</span><span class=pl-en>slice</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>src</span><span class=pl-kos>.</span><span class=pl-en>lastIndexOf</span><span class=pl-kos>(</span><span class=pl-s>&quot;/&quot;</span><span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;Path: &quot; + path);</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>return</span> <span class=pl-s1>path</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class=pl-k>var</span> <span class=pl-s1>path</span> <span class=pl-c1>=</span> <span class=pl-en>scriptPath</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class=pl-k>const</span> <span class=pl-en>initChalkboard</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-v>Reveal</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.warn(path);</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/* Feature detection for passive event handling*/</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>passiveSupported</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>try</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">	  <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&quot;test&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>null</span><span class=pl-kos>,</span> <span class=pl-v>Object</span><span class=pl-kos>.</span><span class=pl-en>defineProperty</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s>&quot;passive&quot;</span><span class=pl-kos>,</span> <span class=pl-kos>{</span> <span class=pl-en>get</span>: <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-s1>passiveSupported</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span> <span class=pl-kos>}</span> <span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span> <span class=pl-k>catch</span><span class=pl-kos>(</span><span class=pl-s1>err</span><span class=pl-kos>)</span> <span class=pl-kos>{</span><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*****************************************************************</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** Configuration</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line"><span class=pl-c>******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>background</span><span class=pl-kos>,</span> <span class=pl-s1>pen</span><span class=pl-kos>,</span> <span class=pl-s1>draw</span><span class=pl-kos>,</span> <span class=pl-s1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>grid</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>boardmarkerWidth</span> <span class=pl-c1>=</span> <span class=pl-c1>3</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>chalkWidth</span> <span class=pl-c1>=</span> <span class=pl-c1>7</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>chalkEffect</span> <span class=pl-c1>=</span> <span class=pl-c1>1.0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>rememberColor</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-c1>true</span><span class=pl-kos>,</span> <span class=pl-c1>false</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>eraser</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>src</span>: <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/sponge.png&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>radius</span>: <span class=pl-c1>20</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>boardmarkers</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(100,100,100,1)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/boardmarker-black.png), auto&#39;</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(30,144,255, 1)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/boardmarker-blue.png), auto&#39;</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(220,20,60,1)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/boardmarker-red.png), auto&#39;</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(50,205,50,1)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/boardmarker-green.png), auto&#39;</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(255,140,0,1)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/boardmarker-orange.png), auto&#39;</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(150,0,20150,1)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/boardmarker-purple.png), auto&#39;</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(255,220,0,1)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/boardmarker-yellow.png), auto&#39;</span><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>chalks</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(255,255,255,0.5)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/chalk-white.png), auto&#39;</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(96, 154, 244, 0.5)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/chalk-blue.png), auto&#39;</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(237, 20, 28, 0.5)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/chalk-red.png), auto&#39;</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(20, 237, 28, 0.5)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/chalk-green.png), auto&#39;</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(220, 133, 41, 0.5)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/chalk-orange.png), auto&#39;</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(220,0,220,0.5)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/chalk-purple.png), auto&#39;</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgba(255,220,0,0.5)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>cursor</span>: <span class=pl-s>&#39;url(&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/chalk-yellow.png), auto&#39;</span><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>keyBindings</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> </td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>toggleNotesCanvas</span>: <span class=pl-kos>{</span> <span class=pl-c1>keyCode</span>: <span class=pl-c1>67</span><span class=pl-kos>,</span> <span class=pl-c1>key</span>: <span class=pl-s>&#39;C&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>description</span>: <span class=pl-s>&#39;Toggle notes canvas&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>toggleChalkboard</span>: <span class=pl-kos>{</span> <span class=pl-c1>keyCode</span>: <span class=pl-c1>66</span><span class=pl-kos>,</span> <span class=pl-c1>key</span>: <span class=pl-s>&#39;B&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>description</span>: <span class=pl-s>&#39;Toggle chalkboard&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>clear</span>: <span class=pl-kos>{</span> <span class=pl-c1>keyCode</span>: <span class=pl-c1>171</span><span class=pl-kos>,</span> <span class=pl-c1>key</span>: <span class=pl-s>&#39;+&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>description</span>: <span class=pl-s>&#39;Clear drawings on slide&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>reset</span>: <span class=pl-kos>{</span> <span class=pl-c1>keyCode</span>: <span class=pl-c1>46</span><span class=pl-kos>,</span> <span class=pl-c1>key</span>: <span class=pl-s>&#39;DEL&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>description</span>: <span class=pl-s>&#39;Reset drawings on slide&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>resetAll</span>: <span class=pl-kos>{</span> <span class=pl-c1>keyCode</span>: <span class=pl-c1>8</span><span class=pl-kos>,</span> <span class=pl-c1>key</span>: <span class=pl-s>&#39;BACKSPACE&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>description</span>: <span class=pl-s>&#39;Reset all drawings&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>colorNext</span>: <span class=pl-kos>{</span> <span class=pl-c1>keyCode</span>: <span class=pl-c1>88</span><span class=pl-kos>,</span> <span class=pl-c1>key</span>: <span class=pl-s>&#39;X&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>description</span>: <span class=pl-s>&#39;Next color&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>colorPrev</span>: <span class=pl-kos>{</span> <span class=pl-c1>keyCode</span>: <span class=pl-c1>89</span><span class=pl-kos>,</span> <span class=pl-c1>key</span>: <span class=pl-s>&#39;Y&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>description</span>: <span class=pl-s>&#39;Previous color&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">		<span class=pl-c1>download</span>: <span class=pl-kos>{</span> <span class=pl-c1>keyCode</span>: <span class=pl-c1>68</span><span class=pl-kos>,</span> <span class=pl-c1>key</span>: <span class=pl-s>&#39;D&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>description</span>: <span class=pl-s>&#39;Download drawings&#39;</span> <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>theme</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;chalkboard&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>color</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>toggleChalkboardButton</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>toggleNotesButton</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>transition</span> <span class=pl-c1>=</span> <span class=pl-c1>800</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>readOnly</span> <span class=pl-c1>=</span> <span class=pl-c1>undefined</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>config</span> <span class=pl-c1>=</span> <span class=pl-en>configure</span><span class=pl-kos>(</span> <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getConfig</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>chalkboard</span> <span class=pl-c1>||</span> <span class=pl-kos>{</span><span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>keyBindings</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>key</span> <span class=pl-k>in</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>keyBindings</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>keyBindings</span><span class=pl-kos>[</span><span class=pl-s1>key</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>keyBindings</span><span class=pl-kos>[</span><span class=pl-s1>key</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>configure</span><span class=pl-kos>(</span> <span class=pl-s1>config</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>boardmarkerWidth</span> <span class=pl-c1>||</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>penWidth</span> <span class=pl-kos>)</span> <span class=pl-s1>boardmarkerWidth</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>boardmarkerWidth</span> <span class=pl-c1>||</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>penWidth</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>chalkWidth</span> <span class=pl-kos>)</span> <span class=pl-s1>chalkWidth</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>chalkWidth</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s>&quot;chalkEffect&quot;</span> <span class=pl-k>in</span> <span class=pl-s1>config</span> <span class=pl-kos>)</span> <span class=pl-s1>chalkEffect</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s>&quot;chalkEffect&quot;</span> <span class=pl-k>in</span> <span class=pl-s1>config</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>rememberColor</span> <span class=pl-kos>)</span> <span class=pl-s1>rememberColor</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>rememberColor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>eraser</span> <span class=pl-kos>)</span> <span class=pl-s1>eraser</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>eraser</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s>&quot;boardmarkers&quot;</span> <span class=pl-k>in</span> <span class=pl-s1>config</span><span class=pl-kos>)</span> <span class=pl-s1>boardmarkers</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>boardmarkers</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s>&quot;chalks&quot;</span> <span class=pl-k>in</span> <span class=pl-s1>config</span><span class=pl-kos>)</span> <span class=pl-s1>chalks</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>chalks</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>theme</span> <span class=pl-kos>)</span> <span class=pl-s1>theme</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>theme</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>switch</span> <span class=pl-kos>(</span> <span class=pl-s1>theme</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>case</span> <span class=pl-s>&quot;whiteboard&quot;</span>:</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>background</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span> <span class=pl-s>&#39;rgba(127,127,127,.1)&#39;</span> <span class=pl-kos>,</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/whiteboard.png&#39;</span> <span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>draw</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span> <span class=pl-s1>drawWithBoardmarker</span> <span class=pl-kos>,</span> <span class=pl-s1>drawWithBoardmarker</span> <span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>pens</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span> <span class=pl-s1>boardmarkers</span><span class=pl-kos>,</span> <span class=pl-s1>boardmarkers</span> <span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>grid</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgb(127,127,255,0.1)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>distance</span>: <span class=pl-c1>40</span><span class=pl-kos>,</span> <span class=pl-c1>width</span>: <span class=pl-c1>2</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>case</span> <span class=pl-s>&quot;chalkboard&quot;</span>:</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>default</span>:</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>background</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span> <span class=pl-s>&#39;rgba(127,127,127,.1)&#39;</span> <span class=pl-kos>,</span> <span class=pl-s1>path</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;img/blackboard.png&#39;</span> <span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>draw</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span> <span class=pl-s1>drawWithBoardmarker</span> <span class=pl-kos>,</span> <span class=pl-s1>drawWithChalk</span> <span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>pens</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span> <span class=pl-s1>boardmarkers</span><span class=pl-kos>,</span> <span class=pl-s1>chalks</span> <span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>grid</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>color</span>: <span class=pl-s>&#39;rgb(50,50,10,0.5)&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>distance</span>: <span class=pl-c1>80</span><span class=pl-kos>,</span> <span class=pl-c1>width</span>: <span class=pl-c1>2</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>background</span> <span class=pl-kos>)</span> <span class=pl-s1>background</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>background</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>grid</span> != <span class=pl-c1>undefined</span> <span class=pl-kos>)</span> <span class=pl-s1>grid</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>grid</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>toggleChalkboardButton</span> != <span class=pl-c1>undefined</span><span class=pl-kos>)</span> <span class=pl-s1>toggleChalkboardButton</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>toggleChalkboardButton</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>toggleNotesButton</span> != <span class=pl-c1>undefined</span><span class=pl-kos>)</span>  <span class=pl-s1>toggleNotesButton</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>toggleNotesButton</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>transition</span><span class=pl-kos>)</span> <span class=pl-s1>transition</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>transition</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>readOnly</span><span class=pl-kos>)</span> <span class=pl-s1>readOnly</span> <span class=pl-c1>=</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>readOnly</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>drawingCanvas</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-kos>(</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>theme</span> <span class=pl-c1>||</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>background</span> <span class=pl-c1>||</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>grid</span> <span class=pl-kos>)</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>canvas</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>getElementById</span><span class=pl-kos>(</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>id</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>background</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;url(&quot;&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>background</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;&quot;) repeat&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>drawGrid</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-s1>config</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*****************************************************************</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** Setup</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line"><span class=pl-c>******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>whenReady</span><span class=pl-kos>(</span> <span class=pl-s1>callback</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// wait for drawings to be loaded and markdown to be parsed</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelectorAll</span><span class=pl-kos>(</span><span class=pl-s>&quot;.pdf-page&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>loaded</span> !== <span class=pl-c1>null</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>callback</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line"><span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span><span class=pl-s>&quot;Wait for pdf pages to be created and drawings to be loaded&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span> </td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>setTimeout</span><span class=pl-kos>(</span> <span class=pl-s1>whenReady</span><span class=pl-kos>,</span> <span class=pl-c1>500</span><span class=pl-kos>,</span> <span class=pl-s1>callback</span> <span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>toggleChalkboardButton</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;toggleChalkboardButton&quot;)</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>button</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span> <span class=pl-s>&#39;div&#39;</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>className</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;chalkboard-button&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>id</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;toggle-chalkboard&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>visibility</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;visible&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>position</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;absolute&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>zIndex</span> <span class=pl-c1>=</span> <span class=pl-c1>30</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>fontSize</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;24px&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>=</span> <span class=pl-s1>toggleChalkboardButton</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>||</span> <span class=pl-s>&quot;30px&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>=</span> <span class=pl-s1>toggleChalkboardButton</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>||</span>  <span class=pl-s>&quot;30px&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>=</span> <span class=pl-s1>toggleChalkboardButton</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>||</span>  <span class=pl-s>&quot;auto&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>=</span> <span class=pl-s1>toggleChalkboardButton</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>||</span>  <span class=pl-s>&quot;auto&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>innerHTML</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&lt;a href=&quot;#&quot; onclick=&quot;RevealChalkboard.toggleChalkboard(); return false;&quot;&gt;&lt;i class=&quot;fa fa-pen-square&quot;&gt;&lt;/i&gt;&lt;/a&gt;&#39;</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;.reveal&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>appendChild</span><span class=pl-kos>(</span> <span class=pl-s1>button</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>toggleNotesButton</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;toggleNotesButton&quot;)</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>button</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span> <span class=pl-s>&#39;div&#39;</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>className</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;chalkboard-button&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>id</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;toggle-notes&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>position</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;absolute&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>zIndex</span> <span class=pl-c1>=</span> <span class=pl-c1>30</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>fontSize</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;24px&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>=</span> <span class=pl-s1>toggleNotesButton</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>||</span> <span class=pl-s>&quot;70px&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>=</span> <span class=pl-s1>toggleNotesButton</span><span class=pl-kos>.</span><span class=pl-c1>bottom</span> <span class=pl-c1>||</span>  <span class=pl-s>&quot;30px&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>=</span> <span class=pl-s1>toggleNotesButton</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>||</span>  <span class=pl-s>&quot;auto&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>=</span> <span class=pl-s1>toggleNotesButton</span><span class=pl-kos>.</span><span class=pl-c1>right</span> <span class=pl-c1>||</span>  <span class=pl-s>&quot;auto&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>button</span><span class=pl-kos>.</span><span class=pl-c1>innerHTML</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;&lt;a href=&quot;#&quot; onclick=&quot;RevealChalkboard.toggleNotesCanvas(); return false;&quot;&gt;&lt;i class=&quot;fa fa-pen&quot;&gt;&lt;/i&gt;&lt;/a&gt;&#39;</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;.reveal&quot;</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>appendChild</span><span class=pl-kos>(</span> <span class=pl-s1>button</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//alert(&quot;Buttons&quot;);</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>drawingCanvas</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span> <span class=pl-kos>{</span><span class=pl-c1>id</span>: <span class=pl-s>&quot;notescanvas&quot;</span> <span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-kos>{</span><span class=pl-c1>id</span>: <span class=pl-s>&quot;chalkboard&quot;</span> <span class=pl-kos>}</span> <span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">	<span class=pl-en>setupDrawingCanvas</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">	<span class=pl-en>setupDrawingCanvas</span><span class=pl-kos>(</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>mode</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-c>// 0: notes canvas, 1: chalkboard</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>mouseX</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>mouseY</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>xLast</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>yLast</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>slideStart</span> <span class=pl-c1>=</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>slideIndices</span> <span class=pl-c1>=</span>  <span class=pl-kos>{</span> <span class=pl-c1>h</span>:<span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>v</span>:<span class=pl-c1>0</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>var</span> <span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">        <span class=pl-k>var</span> <span class=pl-s1>timeouts</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-kos>[</span><span class=pl-kos>]</span> <span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>touchTimeout</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>slidechangeTimeout</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>playback</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>setupDrawingCanvas</span><span class=pl-kos>(</span> <span class=pl-s1>id</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>container</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span> <span class=pl-s>&#39;div&#39;</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-c1>id</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>id</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-c1>classList</span><span class=pl-kos>.</span><span class=pl-en>add</span><span class=pl-kos>(</span> <span class=pl-s>&#39;overlay&#39;</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-en>setAttribute</span><span class=pl-kos>(</span> <span class=pl-s>&#39;data-prevent-swipe&#39;</span><span class=pl-kos>,</span> <span class=pl-s>&#39;&#39;</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-en>oncontextmenu</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span> <span class=pl-k>return</span> <span class=pl-c1>false</span><span class=pl-kos>;</span> <span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s1>pens</span><span class=pl-kos>[</span> <span class=pl-s1>id</span> <span class=pl-kos>]</span><span class=pl-kos>[</span> <span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span> <span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>innerWidth</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>innerHeight</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>id</span> <span class=pl-c1>==</span> <span class=pl-s>&quot;0&quot;</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>background</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;rgba(0,0,0,0)&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>zIndex</span> <span class=pl-c1>=</span> <span class=pl-c1>24</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>opacity</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>visibility</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;visible&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>pointerEvents</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;none&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>slides</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span><span class=pl-s>&quot;.slides&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>aspectRatio</span> <span class=pl-c1>=</span> <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getConfig</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>width</span> / <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getConfig</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span>*<span class=pl-s1>aspectRatio</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span>*<span class=pl-s1>aspectRatio</span><span class=pl-kos>)</span> / <span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>&gt;</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span>/<span class=pl-s1>aspectRatio</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>-</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span>/<span class=pl-s1>aspectRatio</span> <span class=pl-kos>)</span> / <span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>background</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;url(&quot;&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>background</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;&quot;) repeat&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>zIndex</span> <span class=pl-c1>=</span> <span class=pl-c1>26</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>opacity</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>visibility</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;hidden&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>sponge</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span> <span class=pl-s>&#39;img&#39;</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>src</span> <span class=pl-c1>=</span> <span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>src</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>id</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;sponge&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>visibility</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;hidden&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>position</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;absolute&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-en>appendChild</span><span class=pl-kos>(</span> <span class=pl-s1>sponge</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>sponge</span> <span class=pl-c1>=</span> <span class=pl-s1>sponge</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>canvas</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span> <span class=pl-s>&#39;canvas&#39;</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>canvas</span><span class=pl-kos>.</span><span class=pl-en>setAttribute</span><span class=pl-kos>(</span> <span class=pl-s>&#39;data-chalkboard&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>id</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s1>pens</span><span class=pl-kos>[</span> <span class=pl-s1>id</span> <span class=pl-kos>]</span><span class=pl-kos>[</span> <span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span> <span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>container</span><span class=pl-kos>.</span><span class=pl-en>appendChild</span><span class=pl-kos>(</span> <span class=pl-s1>canvas</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span> <span class=pl-c1>=</span> <span class=pl-s1>canvas</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>context</span> <span class=pl-c1>=</span> <span class=pl-s1>canvas</span><span class=pl-kos>.</span><span class=pl-en>getContext</span><span class=pl-kos>(</span><span class=pl-s>&quot;2d&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelector</span><span class=pl-kos>(</span> <span class=pl-s>&#39;.reveal&#39;</span> <span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>appendChild</span><span class=pl-kos>(</span> <span class=pl-s1>container</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>container</span> <span class=pl-c1>=</span> <span class=pl-s1>container</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*****************************************************************</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** Storage</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line"><span class=pl-c>******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>storage</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>width</span>: <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getConfig</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span> <span class=pl-c1>height</span>: <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getConfig</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>,</span> <span class=pl-c1>data</span>: <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>{</span> <span class=pl-c1>width</span>: <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getConfig</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span> <span class=pl-c1>height</span>: <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getConfig</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>,</span> <span class=pl-c1>data</span>: <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log( JSON.stringify(storage));</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>loaded</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>src</span> != <span class=pl-c1>null</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>loadData</span><span class=pl-kos>(</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>src</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 * Load data.</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 */</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>loadData</span><span class=pl-kos>(</span> <span class=pl-s1>filename</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>xhr</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>XMLHttpRequest</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>xhr</span><span class=pl-kos>.</span><span class=pl-en>onload</span> <span class=pl-c1>=</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>xhr</span><span class=pl-kos>.</span><span class=pl-c1>readyState</span> <span class=pl-c1>===</span> <span class=pl-c1>4</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>xhr</span><span class=pl-kos>.</span><span class=pl-c1>status</span> != <span class=pl-c1>404</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>storage</span> <span class=pl-c1>=</span> <span class=pl-c1>JSON</span><span class=pl-kos>.</span><span class=pl-en>parse</span><span class=pl-kos>(</span><span class=pl-s1>xhr</span><span class=pl-kos>.</span><span class=pl-c1>responseText</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>id</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>id</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>storage</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>id</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> != <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>||</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> != <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>min</span><span class=pl-kos>(</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span>/<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span>/<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> * <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>-</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> * <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>readOnly</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;default&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;default&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>loaded</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;Drawings loaded&quot;);</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>readOnly</span> <span class=pl-c1>=</span> <span class=pl-c1>undefined</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>readOnly</span> <span class=pl-c1>=</span> <span class=pl-c1>undefined</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>warn</span><span class=pl-kos>(</span> <span class=pl-s>&#39;Failed to get file &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>filename</span> <span class=pl-c1>+</span><span class=pl-s>&quot;. ReadyState: &quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>xhr</span><span class=pl-kos>.</span><span class=pl-c1>readyState</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;, Status: &quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>xhr</span><span class=pl-kos>.</span><span class=pl-c1>status</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>loaded</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>xhr</span><span class=pl-kos>.</span><span class=pl-en>open</span><span class=pl-kos>(</span> <span class=pl-s>&#39;GET&#39;</span><span class=pl-kos>,</span> <span class=pl-s1>filename</span><span class=pl-kos>,</span> <span class=pl-c1>true</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>try</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>xhr</span><span class=pl-kos>.</span><span class=pl-en>send</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>catch</span> <span class=pl-kos>(</span> <span class=pl-s1>error</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>readOnly</span> <span class=pl-c1>=</span> <span class=pl-c1>undefined</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>readOnly</span> <span class=pl-c1>=</span> <span class=pl-c1>undefined</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>warn</span><span class=pl-kos>(</span> <span class=pl-s>&#39;Failed to get file &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>filename</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;. Make sure that the presentation and the file are served by a HTTP server and the file can be found there. &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>error</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>loaded</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 * Download data.</span></td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 */</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>downloadData</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>a</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&#39;a&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-c1>body</span><span class=pl-kos>.</span><span class=pl-en>appendChild</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>try</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// cleanup slide data without events</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>id</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>id</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>2</span><span class=pl-kos>;</span> <span class=pl-s1>id</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> &gt;= <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>--</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>==</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>.</span><span class=pl-en>splice</span><span class=pl-kos>(</span><span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>download</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;chalkboard.json&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>blob</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Blob</span><span class=pl-kos>(</span> <span class=pl-kos>[</span> <span class=pl-c1>JSON</span><span class=pl-kos>.</span><span class=pl-en>stringify</span><span class=pl-kos>(</span> <span class=pl-s1>storage</span> <span class=pl-kos>)</span> <span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-kos>{</span> <span class=pl-c1>type</span>: <span class=pl-s>&quot;application/json&quot;</span><span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>href</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>URL</span><span class=pl-kos>.</span><span class=pl-en>createObjectURL</span><span class=pl-kos>(</span> <span class=pl-s1>blob</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span> <span class=pl-k>catch</span><span class=pl-kos>(</span> <span class=pl-s1>error</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-c1>innerHTML</span> <span class=pl-c1>+=</span> <span class=pl-s>&quot; (&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>error</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;)&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>a</span><span class=pl-kos>.</span><span class=pl-en>click</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-c1>body</span><span class=pl-kos>.</span><span class=pl-en>removeChild</span><span class=pl-kos>(</span><span class=pl-s1>a</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 * Returns data object for the slide with the given indices.</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 */</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>getSlideData</span><span class=pl-kos>(</span> <span class=pl-s1>indices</span><span class=pl-kos>,</span> <span class=pl-s1>id</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>id</span> <span class=pl-c1>==</span> <span class=pl-c1>undefined</span> <span class=pl-kos>)</span> <span class=pl-s1>id</span> <span class=pl-c1>=</span> <span class=pl-s1>mode</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>indices</span><span class=pl-kos>)</span> <span class=pl-s1>indices</span> <span class=pl-c1>=</span> <span class=pl-s1>slideIndices</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>slide</span><span class=pl-kos>.</span><span class=pl-c1>h</span> <span class=pl-c1>===</span> <span class=pl-s1>indices</span><span class=pl-kos>.</span><span class=pl-c1>h</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>slide</span><span class=pl-kos>.</span><span class=pl-c1>v</span> <span class=pl-c1>===</span> <span class=pl-s1>indices</span><span class=pl-kos>.</span><span class=pl-c1>v</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>slide</span><span class=pl-kos>.</span><span class=pl-c1>f</span> <span class=pl-c1>===</span> <span class=pl-s1>indices</span><span class=pl-kos>.</span><span class=pl-c1>f</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>data</span> <span class=pl-c1>=</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span> <span class=pl-kos>{</span> <span class=pl-c1>slide</span>: <span class=pl-s1>indices</span><span class=pl-kos>,</span> <span class=pl-c1>events</span>: <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-c1>duration</span>: <span class=pl-c1>0</span> <span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>data</span> <span class=pl-c1>=</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-s1>data</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 * Returns maximum duration of slide playback for both modes</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 */</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>getSlideDuration</span><span class=pl-kos>(</span> <span class=pl-s1>indices</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span>!<span class=pl-s1>indices</span><span class=pl-kos>)</span> <span class=pl-s1>indices</span> <span class=pl-c1>=</span> <span class=pl-s1>slideIndices</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>duration</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>id</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>id</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>2</span><span class=pl-kos>;</span> <span class=pl-s1>id</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>slide</span><span class=pl-kos>.</span><span class=pl-c1>h</span> <span class=pl-c1>===</span> <span class=pl-s1>indices</span><span class=pl-kos>.</span><span class=pl-c1>h</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>slide</span><span class=pl-kos>.</span><span class=pl-c1>v</span> <span class=pl-c1>===</span> <span class=pl-s1>indices</span><span class=pl-kos>.</span><span class=pl-c1>v</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>slide</span><span class=pl-kos>.</span><span class=pl-c1>f</span> <span class=pl-c1>===</span> <span class=pl-s1>indices</span><span class=pl-kos>.</span><span class=pl-c1>f</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>duration</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>max</span><span class=pl-kos>(</span> <span class=pl-s1>duration</span><span class=pl-kos>,</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>duration</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log( duration );</span></td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-s1>duration</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*****************************************************************</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** Print</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line"><span class=pl-c>******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>var</span> <span class=pl-s1>printMode</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span> <span class=pl-pds>/print-pdf/gi</span> <span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-en>test</span><span class=pl-kos>(</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>location</span><span class=pl-kos>.</span><span class=pl-c1>search</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;createPrintout&quot; + printMode)</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>createPrintout</span><span class=pl-kos>(</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line"><span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>warn</span><span class=pl-kos>(</span><span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getTotalSlides</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span><span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getSlidesElement</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>==</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span> <span class=pl-k>return</span><span class=pl-kos>;</span> </td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line"><span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span> <span class=pl-s>&#39;Create printout for &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>+</span> <span class=pl-s>&quot; slides&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>opacity</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-c>// do not print notes canvas</span></td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>visibility</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;hidden&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>patImg</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>Image</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>patImg</span><span class=pl-kos>.</span><span class=pl-en>onload</span> <span class=pl-c1>=</span> <span class=pl-k>function</span> <span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>slides</span> <span class=pl-c1>=</span> <span class=pl-en>getSlidesArray</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>;</span> <span class=pl-s1>i</span>&gt;=<span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>--</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line"><span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span> <span class=pl-s>&#39;Create printout for slide &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>slide</span><span class=pl-kos>.</span><span class=pl-c1>h</span> <span class=pl-c1>+</span> <span class=pl-s>&quot;.&quot;</span> <span class=pl-c1>+</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>slide</span><span class=pl-kos>.</span><span class=pl-c1>v</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>slideData</span> <span class=pl-c1>=</span> <span class=pl-en>getSlideData</span><span class=pl-kos>(</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>slide</span><span class=pl-kos>,</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>drawings</span> <span class=pl-c1>=</span> <span class=pl-en>createDrawings</span><span class=pl-kos>(</span> <span class=pl-s1>slideData</span><span class=pl-kos>,</span> <span class=pl-s1>patImg</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>slide</span> <span class=pl-c1>=</span> <span class=pl-s1>slides</span><span class=pl-kos>[</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>slide</span><span class=pl-kos>.</span><span class=pl-c1>h</span><span class=pl-kos>]</span><span class=pl-kos>[</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>data</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>slide</span><span class=pl-kos>.</span><span class=pl-c1>v</span> <span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;Slide:&quot;, slide);</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>addDrawings</span><span class=pl-kos>(</span> <span class=pl-s1>slide</span><span class=pl-kos>,</span> <span class=pl-s1>drawings</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">				</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//			Reveal.sync();</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>patImg</span><span class=pl-kos>.</span><span class=pl-c1>src</span> <span class=pl-c1>=</span> <span class=pl-s1>background</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>getSlidesArray</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>horizontal</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>querySelectorAll</span><span class=pl-kos>(</span><span class=pl-s>&#39;.slides &gt; div.pdf-page &gt; section, .slides &gt; section&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>slides</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>slidenumber</span> <span class=pl-c1>=</span> <span class=pl-c1>undefined</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span> <span class=pl-kos>(</span> <span class=pl-k>var</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>horizontal</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>horizontal</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>parentElement</span><span class=pl-kos>.</span><span class=pl-c1>classList</span><span class=pl-kos>.</span><span class=pl-en>contains</span><span class=pl-kos>(</span><span class=pl-s>&quot;pdf-page&quot;</span><span class=pl-kos>)</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// Horizontal slide</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>horizontal</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>getAttribute</span><span class=pl-kos>(</span><span class=pl-s>&quot;data-slide-number&quot;</span><span class=pl-kos>)</span> != <span class=pl-s1>slidenumber</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>// new slide</span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>slides</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>slides</span><span class=pl-kos>[</span><span class=pl-s1>slides</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s1>horizontal</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>slidenumber</span> <span class=pl-c1>=</span> <span class=pl-s1>horizontal</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>getAttribute</span><span class=pl-kos>(</span><span class=pl-s>&quot;data-slide-number&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">					<span class=pl-c>// fragment of same slide</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>slides</span><span class=pl-kos>[</span><span class=pl-s1>slides</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>slides</span><span class=pl-kos>[</span><span class=pl-s1>slides</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>horizontal</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-kos>{</span>		</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// Vertical slides</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>vertical</span> <span class=pl-c1>=</span> <span class=pl-s1>horizontal</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>querySelectorAll</span><span class=pl-kos>(</span><span class=pl-s>&#39;section&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span> </td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>slides</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>slidenumber</span> <span class=pl-c1>=</span> <span class=pl-c1>undefined</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>for</span> <span class=pl-kos>(</span> <span class=pl-k>var</span> <span class=pl-s1>j</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>j</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>vertical</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>j</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>vertical</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>getAttribute</span><span class=pl-kos>(</span><span class=pl-s>&quot;data-slide-number&quot;</span><span class=pl-kos>)</span> != <span class=pl-s1>slidenumber</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// new slide</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>slides</span><span class=pl-kos>[</span><span class=pl-s1>slides</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-s1>vertical</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>slidenumber</span> <span class=pl-c1>=</span> <span class=pl-s1>vertical</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>getAttribute</span><span class=pl-kos>(</span><span class=pl-s>&quot;data-slide-number&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">						<span class=pl-c>// fragment of same slide</span></td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>slides</span><span class=pl-kos>[</span><span class=pl-s1>slides</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>slides</span><span class=pl-kos>[</span><span class=pl-s1>slides</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>vertical</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;Slides:&quot;, slides);</span></td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-s1>slides</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>cloneCanvas</span><span class=pl-kos>(</span><span class=pl-s1>oldCanvas</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>//create a new canvas</span></td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>newCanvas</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&#39;canvas&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>context</span> <span class=pl-c1>=</span> <span class=pl-s1>newCanvas</span><span class=pl-kos>.</span><span class=pl-en>getContext</span><span class=pl-kos>(</span><span class=pl-s>&#39;2d&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>//set dimensions</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>newCanvas</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>=</span> <span class=pl-s1>oldCanvas</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>newCanvas</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>=</span> <span class=pl-s1>oldCanvas</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>//apply the old canvas to the new one</span></td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>drawImage</span><span class=pl-kos>(</span><span class=pl-s1>oldCanvas</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>//return the new canvas</span></td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-s1>newCanvas</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>createDrawings</span><span class=pl-kos>(</span> <span class=pl-s1>slideData</span><span class=pl-kos>,</span> <span class=pl-s1>patImg</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>width</span> <span class=pl-c1>=</span> <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getConfig</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>height</span> <span class=pl-c1>=</span> <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getConfig</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>scale</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>width</span> != <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>||</span> <span class=pl-s1>height</span> != <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>scale</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>min</span><span class=pl-kos>(</span> <span class=pl-s1>width</span>/<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span> <span class=pl-s1>height</span>/<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> * <span class=pl-s1>scale</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>height</span> <span class=pl-c1>-</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> * <span class=pl-s1>scale</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>mode</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line"><span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span> <span class=pl-s>&#39;Create printout for slide &#39;</span><span class=pl-kos>,</span> <span class=pl-s1>slideData</span><span class=pl-c>/*+ data.slide.h + &quot;.&quot; + data.slide.v */</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//		var parent = Reveal.getSlide( data.slide.h, data.slide.v ).parentElement;</span></td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//		var slideData = getSlideData( data.slide, 1 );</span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>drawings</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>imgCanvas</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span><span class=pl-s>&#39;canvas&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>imgCanvas</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>=</span> <span class=pl-s1>width</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>imgCanvas</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>=</span> <span class=pl-s1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>imgCtx</span> <span class=pl-c1>=</span> <span class=pl-s1>imgCanvas</span><span class=pl-kos>.</span><span class=pl-en>getContext</span><span class=pl-kos>(</span><span class=pl-s>&quot;2d&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>imgCtx</span><span class=pl-kos>.</span><span class=pl-c1>fillStyle</span> <span class=pl-c1>=</span> <span class=pl-s1>imgCtx</span><span class=pl-kos>.</span><span class=pl-en>createPattern</span><span class=pl-kos>(</span> <span class=pl-s1>patImg</span> <span class=pl-kos>,</span><span class=pl-s>&#39;repeat&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>imgCtx</span><span class=pl-kos>.</span><span class=pl-en>rect</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-s1>imgCanvas</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span><span class=pl-s1>imgCanvas</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>imgCtx</span><span class=pl-kos>.</span><span class=pl-en>fill</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>j</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>j</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>j</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>switch</span> <span class=pl-kos>(</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>type</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&quot;draw&quot;</span>:</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>k</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span> <span class=pl-s1>k</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>k</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>draw</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>(</span> <span class=pl-s1>imgCtx</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>xOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>x</span>*<span class=pl-s1>scale</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>yOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>y</span>*<span class=pl-s1>scale</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>xOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>x</span>*<span class=pl-s1>scale</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>yOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>y</span>*<span class=pl-s1>scale</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&quot;erase&quot;</span>:</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>k</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>k</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>k</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">						<span class=pl-en>eraseWithSponge</span><span class=pl-kos>(</span> <span class=pl-s1>imgCtx</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>xOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>x</span>*<span class=pl-s1>scale</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">								<span class=pl-s1>yOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>k</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>y</span>*<span class=pl-s1>scale</span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&quot;setcolor&quot;</span>:</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>setColor</span><span class=pl-kos>(</span><span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>j</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>index</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&quot;clear&quot;</span>:</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>drawings</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span> <span class=pl-en>cloneCanvas</span><span class=pl-kos>(</span><span class=pl-s1>imgCanvas</span><span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//					addPrintout( parent, nextSlide[i], imgCanvas, patImg );</span></td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>imgCtx</span><span class=pl-kos>.</span><span class=pl-en>clearRect</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-s1>imgCanvas</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span><span class=pl-s1>imgCanvas</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>imgCtx</span><span class=pl-kos>.</span><span class=pl-en>fill</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>default</span>:</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawings</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span> <span class=pl-en>cloneCanvas</span><span class=pl-kos>(</span><span class=pl-s1>imgCanvas</span><span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>mode</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-s1>drawings</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>addDrawings</span><span class=pl-kos>(</span> <span class=pl-s1>slide</span><span class=pl-kos>,</span> <span class=pl-s1>drawings</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>parent</span> <span class=pl-c1>=</span> <span class=pl-s1>slide</span><span class=pl-kos>.</span><span class=pl-c1>parentElement</span><span class=pl-kos>.</span><span class=pl-c1>parentElement</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>nextSlide</span> <span class=pl-c1>=</span> <span class=pl-s1>slide</span><span class=pl-kos>.</span><span class=pl-c1>parentElement</span><span class=pl-kos>.</span><span class=pl-c1>nextElementSibling</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>drawings</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>newPDFPage</span> <span class=pl-c1>=</span> <span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>createElement</span><span class=pl-kos>(</span> <span class=pl-s>&#39;div&#39;</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>newPDFPage</span><span class=pl-kos>.</span><span class=pl-c1>classList</span><span class=pl-kos>.</span><span class=pl-en>add</span><span class=pl-kos>(</span><span class=pl-s>&#39;pdf-page&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>newPDFPage</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>=</span> <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getConfig</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//			newPDFPage.innerHTML = &#39;&lt;h1&gt;Drawing should be here!&lt;/h1&gt;&#39;;</span></td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>newPDFPage</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span><span class=pl-s1>drawings</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;Add drawing&quot;, newPDFPage);</span></td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>nextSlide</span> != <span class=pl-c1>null</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>parent</span><span class=pl-kos>.</span><span class=pl-en>insertBefore</span><span class=pl-kos>(</span> <span class=pl-s1>newPDFPage</span><span class=pl-kos>,</span> <span class=pl-s1>nextSlide</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>parent</span><span class=pl-kos>.</span><span class=pl-en>append</span><span class=pl-kos>(</span> <span class=pl-s1>newPDFPage</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*****************************************************************</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** Drawings</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line"><span class=pl-c>******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>drawWithBoardmarker</span><span class=pl-kos>(</span><span class=pl-s1>context</span><span class=pl-kos>,</span><span class=pl-s1>fromX</span><span class=pl-kos>,</span><span class=pl-s1>fromY</span><span class=pl-kos>,</span><span class=pl-s1>toX</span><span class=pl-kos>,</span><span class=pl-s1>toY</span><span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>lineWidth</span> <span class=pl-c1>=</span> <span class=pl-s1>boardmarkerWidth</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>lineCap</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;round&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>strokeStyle</span> <span class=pl-c1>=</span> <span class=pl-s1>boardmarkers</span><span class=pl-kos>[</span><span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>beginPath</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">  		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>moveTo</span><span class=pl-kos>(</span><span class=pl-s1>fromX</span><span class=pl-kos>,</span> <span class=pl-s1>fromY</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">  		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>lineTo</span><span class=pl-kos>(</span><span class=pl-s1>toX</span><span class=pl-kos>,</span> <span class=pl-s1>toY</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">  		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>stroke</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>drawWithChalk</span><span class=pl-kos>(</span><span class=pl-s1>context</span><span class=pl-kos>,</span><span class=pl-s1>fromX</span><span class=pl-kos>,</span><span class=pl-s1>fromY</span><span class=pl-kos>,</span><span class=pl-s1>toX</span><span class=pl-kos>,</span><span class=pl-s1>toY</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>brushDiameter</span> <span class=pl-c1>=</span> <span class=pl-s1>chalkWidth</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>lineWidth</span> <span class=pl-c1>=</span> <span class=pl-s1>brushDiameter</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>lineCap</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;round&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>fillStyle</span> <span class=pl-c1>=</span> <span class=pl-s1>chalks</span><span class=pl-kos>[</span><span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>;</span> <span class=pl-c>// &#39;rgba(255,255,255,0.5)&#39;;</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>strokeStyle</span> <span class=pl-c1>=</span> <span class=pl-s1>chalks</span><span class=pl-kos>[</span><span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>/*var opacity = Math.min(0.8, Math.max(0,color[1].replace(/^.*,(.+)\)/,&#39;$1&#39;) - 0.1)) + Math.random()*0.2;*/</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>opacity</span> <span class=pl-c1>=</span> <span class=pl-c1>1.0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>strokeStyle</span> <span class=pl-c1>=</span> <span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>strokeStyle</span><span class=pl-kos>.</span><span class=pl-en>replace</span><span class=pl-kos>(</span><span class=pl-pds>/<span class=pl-kos>[</span><span class=pl-cce>\d</span><span class=pl-cce>\.</span><span class=pl-kos>]</span><span class=pl-c1>+</span><span class=pl-cce>\)</span><span class=pl-cce>$</span>/g</span><span class=pl-kos>,</span> <span class=pl-s1>opacity</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;)&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>beginPath</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">  		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>moveTo</span><span class=pl-kos>(</span><span class=pl-s1>fromX</span><span class=pl-kos>,</span> <span class=pl-s1>fromY</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">  		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>lineTo</span><span class=pl-kos>(</span><span class=pl-s1>toX</span><span class=pl-kos>,</span> <span class=pl-s1>toY</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">  		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>stroke</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">  		<span class=pl-c>// Chalk Effect</span></td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>length</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>round</span><span class=pl-kos>(</span><span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>sqrt</span><span class=pl-kos>(</span><span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>pow</span><span class=pl-kos>(</span><span class=pl-s1>toX</span><span class=pl-c1>-</span><span class=pl-s1>fromX</span><span class=pl-kos>,</span><span class=pl-c1>2</span><span class=pl-kos>)</span><span class=pl-c1>+</span><span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>pow</span><span class=pl-kos>(</span><span class=pl-s1>toY</span><span class=pl-c1>-</span><span class=pl-s1>fromY</span><span class=pl-kos>,</span><span class=pl-c1>2</span><span class=pl-kos>)</span><span class=pl-kos>)</span>/<span class=pl-kos>(</span><span class=pl-c1>5</span>/<span class=pl-s1>brushDiameter</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>xUnit</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>toX</span><span class=pl-c1>-</span><span class=pl-s1>fromX</span><span class=pl-kos>)</span>/<span class=pl-s1>length</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>yUnit</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>toY</span><span class=pl-c1>-</span><span class=pl-s1>fromY</span><span class=pl-kos>)</span>/<span class=pl-s1>length</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span><span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span><span class=pl-c1>=</span><span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>&lt;</span><span class=pl-s1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span> <span class=pl-kos>)</span><span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>chalkEffect</span> <span class=pl-c1>&gt;</span> <span class=pl-kos>(</span><span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>random</span><span class=pl-kos>(</span><span class=pl-kos>)</span> * <span class=pl-c1>0.9</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>xCurrent</span> <span class=pl-c1>=</span> <span class=pl-s1>fromX</span><span class=pl-c1>+</span><span class=pl-kos>(</span><span class=pl-s1>i</span>*<span class=pl-s1>xUnit</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>yCurrent</span> <span class=pl-c1>=</span> <span class=pl-s1>fromY</span><span class=pl-c1>+</span><span class=pl-kos>(</span><span class=pl-s1>i</span>*<span class=pl-s1>yUnit</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>xRandom</span> <span class=pl-c1>=</span> <span class=pl-s1>xCurrent</span><span class=pl-c1>+</span><span class=pl-kos>(</span><span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>random</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>-</span><span class=pl-c1>0.5</span><span class=pl-kos>)</span>*<span class=pl-s1>brushDiameter</span>*<span class=pl-c1>1.2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>yRandom</span> <span class=pl-c1>=</span> <span class=pl-s1>yCurrent</span><span class=pl-c1>+</span><span class=pl-kos>(</span><span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>random</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>-</span><span class=pl-c1>0.5</span><span class=pl-kos>)</span>*<span class=pl-s1>brushDiameter</span>*<span class=pl-c1>1.2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>clearRect</span><span class=pl-kos>(</span> <span class=pl-s1>xRandom</span><span class=pl-kos>,</span> <span class=pl-s1>yRandom</span><span class=pl-kos>,</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>random</span><span class=pl-kos>(</span><span class=pl-kos>)</span>*<span class=pl-c1>2</span><span class=pl-c1>+</span><span class=pl-c1>2</span><span class=pl-kos>,</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>random</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-c1>+</span><span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>eraseWithSponge</span><span class=pl-kos>(</span><span class=pl-s1>context</span><span class=pl-kos>,</span><span class=pl-s1>x</span><span class=pl-kos>,</span><span class=pl-s1>y</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>save</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>beginPath</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>arc</span><span class=pl-kos>(</span><span class=pl-s1>x</span><span class=pl-kos>,</span> <span class=pl-s1>y</span><span class=pl-kos>,</span> <span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>radius</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>2</span> * <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-c1>PI</span><span class=pl-kos>,</span> <span class=pl-c1>false</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>clip</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>clearRect</span><span class=pl-kos>(</span><span class=pl-s1>x</span> <span class=pl-c1>-</span> <span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>radius</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>,</span> <span class=pl-s1>y</span> <span class=pl-c1>-</span> <span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>radius</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>,</span> <span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>radius</span> * <span class=pl-c1>2</span> <span class=pl-c1>+</span> <span class=pl-c1>2</span><span class=pl-kos>,</span> <span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>radius</span> * <span class=pl-c1>2</span> <span class=pl-c1>+</span> <span class=pl-c1>2</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>restore</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>mode</span> <span class=pl-c1>==</span> <span class=pl-c1>1</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>grid</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>redrawGrid</span><span class=pl-kos>(</span><span class=pl-s1>x</span><span class=pl-kos>,</span><span class=pl-s1>y</span><span class=pl-kos>,</span><span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>radius</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 * Oboardmarkers an overlay for the chalkboard.</span></td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 */</span></td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>showChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;showChalkboard&quot;);</span></td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>clearTimeout</span><span class=pl-kos>(</span><span class=pl-s1>touchTimeout</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>touchTimeout</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>visibility</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;hidden&quot;</span><span class=pl-kos>;</span> <span class=pl-c>// make sure that the sponge from touch events is hidden</span></td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>visibility</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;hidden&quot;</span><span class=pl-kos>;</span> <span class=pl-c>// make sure that the sponge from touch events is hidden</span></td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>opacity</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>visibility</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;visible&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>mode</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;showChalkboard&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 * Closes open chalkboard.</span></td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 */</span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>closeChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>clearTimeout</span><span class=pl-kos>(</span><span class=pl-s1>touchTimeout</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>touchTimeout</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>visibility</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;hidden&quot;</span><span class=pl-kos>;</span> <span class=pl-c>// make sure that the sponge from touch events is hidden</span></td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>visibility</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;hidden&quot;</span><span class=pl-kos>;</span> <span class=pl-c>// make sure that the sponge from touch events is hidden</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>opacity</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>visibility</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;hidden&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>xLast</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>yLast</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>mode</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;closeChalkboard&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 * Clear current canvas.</span></td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 */</span></td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-s1>id</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>id</span> <span class=pl-c1>==</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span> <span class=pl-en>clearTimeout</span><span class=pl-kos>(</span> <span class=pl-s1>slidechangeTimeout</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>context</span><span class=pl-kos>.</span><span class=pl-en>clearRect</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>id</span> <span class=pl-c1>==</span> <span class=pl-c1>1</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>grid</span> <span class=pl-kos>)</span> <span class=pl-en>drawGrid</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 * Draw grid on background</span></td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 */</span></td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>drawGrid</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>context</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>context</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>min</span><span class=pl-kos>(</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span>/<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span>/<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> * <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>-</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> * <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>scale</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>distance</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>distance</span>*<span class=pl-s1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>fromX</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span>/<span class=pl-c1>2</span> <span class=pl-c1>-</span> <span class=pl-s1>distance</span>/<span class=pl-c1>2</span> <span class=pl-c1>-</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>distance</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span> / <span class=pl-s1>distance</span> <span class=pl-kos>)</span> * <span class=pl-s1>distance</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span><span class=pl-kos>(</span> <span class=pl-k>var</span> <span class=pl-s1>x</span><span class=pl-c1>=</span><span class=pl-s1>fromX</span><span class=pl-kos>;</span> <span class=pl-s1>x</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>;</span> <span class=pl-s1>x</span><span class=pl-c1>+=</span><span class=pl-s1>distance</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>beginPath</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>lineWidth</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>width</span>*<span class=pl-s1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>lineCap</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;round&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>fillStyle</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>strokeStyle</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>moveTo</span><span class=pl-kos>(</span><span class=pl-s1>x</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">  		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>lineTo</span><span class=pl-kos>(</span><span class=pl-s1>x</span><span class=pl-kos>,</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">  		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>stroke</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>fromY</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span>/<span class=pl-c1>2</span> <span class=pl-c1>-</span> <span class=pl-s1>distance</span>/<span class=pl-c1>2</span> <span class=pl-c1>-</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>-</span> <span class=pl-s1>distance</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span> / <span class=pl-s1>distance</span> <span class=pl-kos>)</span> * <span class=pl-s1>distance</span> <span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span><span class=pl-kos>(</span> <span class=pl-k>var</span> <span class=pl-s1>y</span><span class=pl-c1>=</span><span class=pl-s1>fromY</span><span class=pl-kos>;</span> <span class=pl-s1>y</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>;</span> <span class=pl-s1>y</span><span class=pl-c1>+=</span><span class=pl-s1>distance</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>beginPath</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>lineWidth</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>width</span>*<span class=pl-s1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>lineCap</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;round&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>fillStyle</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>strokeStyle</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>moveTo</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>y</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">  		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>lineTo</span><span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span> <span class=pl-s1>y</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">  		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>stroke</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>redrawGrid</span><span class=pl-kos>(</span><span class=pl-s1>centerX</span><span class=pl-kos>,</span><span class=pl-s1>centerY</span><span class=pl-kos>,</span><span class=pl-s1>diameter</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>context</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>context</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>min</span><span class=pl-kos>(</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span>/<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span>/<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> * <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>-</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> * <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>scale</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>distance</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>distance</span>*<span class=pl-s1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>fromX</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span>/<span class=pl-c1>2</span> <span class=pl-c1>-</span> <span class=pl-s1>distance</span>/<span class=pl-c1>2</span> <span class=pl-c1>-</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>distance</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span> / <span class=pl-s1>distance</span> <span class=pl-kos>)</span> * <span class=pl-s1>distance</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span><span class=pl-kos>(</span> <span class=pl-k>var</span> <span class=pl-s1>x</span><span class=pl-c1>=</span><span class=pl-s1>fromX</span> <span class=pl-c1>+</span> <span class=pl-s1>distance</span>* <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>ceil</span><span class=pl-kos>(</span> <span class=pl-kos>(</span><span class=pl-s1>centerX</span><span class=pl-c1>-</span><span class=pl-s1>diameter</span><span class=pl-c1>-</span><span class=pl-s1>fromX</span><span class=pl-kos>)</span> / <span class=pl-s1>distance</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-s1>x</span> &lt;= <span class=pl-s1>fromX</span> <span class=pl-c1>+</span> <span class=pl-s1>distance</span>* <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span> <span class=pl-kos>(</span><span class=pl-s1>centerX</span><span class=pl-c1>+</span><span class=pl-s1>diameter</span><span class=pl-c1>-</span><span class=pl-s1>fromX</span><span class=pl-kos>)</span> / <span class=pl-s1>distance</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-s1>x</span><span class=pl-c1>+=</span><span class=pl-s1>distance</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>beginPath</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>lineWidth</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>width</span>*<span class=pl-s1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>lineCap</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;round&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>fillStyle</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>strokeStyle</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>moveTo</span><span class=pl-kos>(</span><span class=pl-s1>x</span><span class=pl-kos>,</span> <span class=pl-s1>centerY</span> <span class=pl-c1>-</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>sqrt</span><span class=pl-kos>(</span> <span class=pl-s1>diameter</span>*<span class=pl-s1>diameter</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>centerX</span><span class=pl-c1>-</span><span class=pl-s1>x</span><span class=pl-kos>)</span>*<span class=pl-kos>(</span><span class=pl-s1>centerX</span><span class=pl-c1>-</span><span class=pl-s1>x</span><span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">  		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>lineTo</span><span class=pl-kos>(</span><span class=pl-s1>x</span><span class=pl-kos>,</span> <span class=pl-s1>centerY</span> <span class=pl-c1>+</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>sqrt</span><span class=pl-kos>(</span> <span class=pl-s1>diameter</span>*<span class=pl-s1>diameter</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>centerX</span><span class=pl-c1>-</span><span class=pl-s1>x</span><span class=pl-kos>)</span>*<span class=pl-kos>(</span><span class=pl-s1>centerX</span><span class=pl-c1>-</span><span class=pl-s1>x</span><span class=pl-kos>)</span> <span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">  		<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>stroke</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>fromY</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span>/<span class=pl-c1>2</span> <span class=pl-c1>-</span> <span class=pl-s1>distance</span>/<span class=pl-c1>2</span> <span class=pl-c1>-</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>-</span> <span class=pl-s1>distance</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span> / <span class=pl-s1>distance</span> <span class=pl-kos>)</span> * <span class=pl-s1>distance</span> <span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span><span class=pl-kos>(</span> <span class=pl-k>var</span> <span class=pl-s1>y</span><span class=pl-c1>=</span><span class=pl-s1>fromY</span> <span class=pl-c1>+</span> <span class=pl-s1>distance</span>* <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>ceil</span><span class=pl-kos>(</span> <span class=pl-kos>(</span><span class=pl-s1>centerY</span><span class=pl-c1>-</span><span class=pl-s1>diameter</span><span class=pl-c1>-</span><span class=pl-s1>fromY</span><span class=pl-kos>)</span> / <span class=pl-s1>distance</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-s1>y</span> &lt;= <span class=pl-s1>fromY</span> <span class=pl-c1>+</span> <span class=pl-s1>distance</span>* <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>floor</span><span class=pl-kos>(</span> <span class=pl-kos>(</span><span class=pl-s1>centerY</span><span class=pl-c1>+</span><span class=pl-s1>diameter</span><span class=pl-c1>-</span><span class=pl-s1>fromY</span><span class=pl-kos>)</span> / <span class=pl-s1>distance</span><span class=pl-kos>)</span><span class=pl-kos>;</span> <span class=pl-s1>y</span><span class=pl-c1>+=</span><span class=pl-s1>distance</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>beginPath</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>lineWidth</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>width</span>*<span class=pl-s1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>lineCap</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;round&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>fillStyle</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-c1>strokeStyle</span> <span class=pl-c1>=</span> <span class=pl-s1>grid</span><span class=pl-kos>.</span><span class=pl-c1>color</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>moveTo</span><span class=pl-kos>(</span><span class=pl-s1>centerX</span> <span class=pl-c1>-</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>sqrt</span><span class=pl-kos>(</span> <span class=pl-s1>diameter</span>*<span class=pl-s1>diameter</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>centerY</span><span class=pl-c1>-</span><span class=pl-s1>y</span><span class=pl-kos>)</span>*<span class=pl-kos>(</span><span class=pl-s1>centerY</span><span class=pl-c1>-</span><span class=pl-s1>y</span><span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>y</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>lineTo</span><span class=pl-kos>(</span><span class=pl-s1>centerX</span> <span class=pl-c1>+</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>sqrt</span><span class=pl-kos>(</span> <span class=pl-s1>diameter</span>*<span class=pl-s1>diameter</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-s1>centerY</span><span class=pl-c1>-</span><span class=pl-s1>y</span><span class=pl-kos>)</span>*<span class=pl-kos>(</span><span class=pl-s1>centerY</span><span class=pl-c1>-</span><span class=pl-s1>y</span><span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>y</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>context</span><span class=pl-kos>.</span><span class=pl-en>stroke</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 * Set the  color</span></td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 */</span></td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>setColor</span><span class=pl-kos>(</span> <span class=pl-s1>index</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// protect against out of bounds (this could happen when</span></td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// replaying events recorded with different color settings).</span></td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>index</span> &gt;= <span class=pl-s1>boardmarkers</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-kos>)</span> <span class=pl-s1>index</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-s1>index</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s1>pens</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 * Forward cycle color</span></td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 */</span></td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>cycleColorNext</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>)</span> % <span class=pl-s1>pens</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">	<span class=pl-c>/**</span></td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 * Backward cycle color</span></td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	 */</span></td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>cycleColorPrev</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span> <span class=pl-c1>+</span> <span class=pl-kos>(</span><span class=pl-s1>pens</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span><span class=pl-kos>)</span><span class=pl-kos>)</span> % <span class=pl-s1>pens</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>return</span> <span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*****************************************************************</span></td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** Broadcast</span></td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line"><span class=pl-c>******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span> <span class=pl-s>&#39;received&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span> <span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(JSON.stringify(message));</span></td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>sender</span> <span class=pl-c1>==</span> <span class=pl-s>&#39;chalkboard-plugin&#39;</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>switch</span> <span class=pl-kos>(</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>type</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&#39;showChalkboard&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>showChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&#39;closeChalkboard&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>closeChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&#39;startDrawing&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>startDrawing</span><span class=pl-kos>(</span><span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>x</span><span class=pl-kos>,</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>y</span><span class=pl-kos>,</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>erase</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&#39;startErasing&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>type</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;erase&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-c1>=</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">						<span class=pl-en>eraseWithSponge</span><span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>context</span><span class=pl-kos>,</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>x</span><span class=pl-kos>,</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>y</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&#39;drawSegment&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>drawSegment</span><span class=pl-kos>(</span><span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>x</span><span class=pl-kos>,</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>y</span><span class=pl-kos>,</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>erase</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&#39;stopDrawing&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>stopDrawing</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&#39;clear&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>clear</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&#39;setcolor&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>setColor</span><span class=pl-kos>(</span><span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>index</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&#39;resetSlide&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>resetSlide</span><span class=pl-kos>(</span><span class=pl-c1>true</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>case</span> <span class=pl-s>&#39;init&#39;</span>:</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>storage</span> <span class=pl-c1>=</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>storage</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>id</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>id</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>2</span><span class=pl-kos>;</span> <span class=pl-s1>id</span><span class=pl-c1>++</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>min</span><span class=pl-kos>(</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span>/<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span>/<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> * <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>-</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> * <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>playback</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>slidechangeTimeout</span> <span class=pl-c1>=</span> <span class=pl-en>setTimeout</span><span class=pl-kos>(</span> <span class=pl-s1>startPlayback</span><span class=pl-kos>,</span> <span class=pl-s1>transition</span><span class=pl-kos>,</span> <span class=pl-en>getSlideDuration</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>mode</span> <span class=pl-c1>==</span> <span class=pl-c1>1</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>mode</span> <span class=pl-c1>==</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">						<span class=pl-en>setTimeout</span><span class=pl-kos>(</span> <span class=pl-s1>closeChalkboard</span><span class=pl-kos>,</span> <span class=pl-s1>transition</span> <span class=pl-c1>+</span> <span class=pl-c1>50</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>mode</span> <span class=pl-c1>==</span> <span class=pl-c1>0</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>mode</span> <span class=pl-c1>==</span> <span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">						<span class=pl-en>setTimeout</span><span class=pl-kos>(</span> <span class=pl-s1>showChalkboard</span><span class=pl-kos>,</span> <span class=pl-s1>transition</span> <span class=pl-c1>+</span> <span class=pl-c1>50</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>mode</span> <span class=pl-c1>=</span> <span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span><span class=pl-kos>.</span><span class=pl-c1>mode</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>default</span>:</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span> <span class=pl-s>&#39;newclient&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// broadcast storage</span></td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;init&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>storage</span>: <span class=pl-s1>storage</span><span class=pl-kos>,</span> <span class=pl-c1>mode</span>: <span class=pl-s1>mode</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*****************************************************************</span></td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** Playback</span></td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line"><span class=pl-c>******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&#39;seekplayback&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&#39;event seekplayback &#39; + event.timestamp);</span></td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>stopPlayback</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>playback</span> <span class=pl-c1>||</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>timestamp</span> <span class=pl-c1>==</span> <span class=pl-c1>0</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// in other cases startplayback fires after seeked</span></td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>startPlayback</span><span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>timestamp</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&#39;seeked&#39;);</span></td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&#39;startplayback&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&#39;event startplayback &#39; + event.timestamp);</span></td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>stopPlayback</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>playback</span> <span class=pl-c1>=</span> <span class=pl-c1>true</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>startPlayback</span><span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>timestamp</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&#39;stopplayback&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&#39;event stopplayback &#39; + (Date.now() - slideStart) );</span></td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>playback</span> <span class=pl-c1>=</span> <span class=pl-c1>false</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>stopPlayback</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&#39;startrecording&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&#39;event startrecording &#39; + event.timestamp);</span></td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>startRecording</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>recordEvent</span><span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>slideData</span> <span class=pl-c1>=</span> <span class=pl-en>getSlideData</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>while</span> <span class=pl-kos>(</span> <span class=pl-s1>i</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>i</span><span class=pl-c1>--</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>.</span><span class=pl-en>splice</span><span class=pl-kos>(</span> <span class=pl-s1>i</span><span class=pl-kos>,</span> <span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-s1>event</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>duration</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>max</span><span class=pl-kos>(</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>duration</span><span class=pl-kos>,</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span> <span class=pl-kos>)</span> <span class=pl-c1>+</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>startRecording</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>resetSlide</span><span class=pl-kos>(</span> <span class=pl-c1>true</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>updateReadOnlyMode</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>slideStart</span> <span class=pl-c1>=</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>startPlayback</span><span class=pl-kos>(</span> <span class=pl-s1>timestamp</span><span class=pl-kos>,</span> <span class=pl-s1>finalMode</span><span class=pl-kos>,</span> <span class=pl-s1>resized</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;playback &quot; + timestamp );</span></td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>resized</span> <span class=pl-c1>==</span> <span class=pl-c1>undefined</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>updateReadOnlyMode</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>slideStart</span> <span class=pl-c1>=</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>timestamp</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>closeChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>mode</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span> <span class=pl-kos>(</span> <span class=pl-k>var</span> <span class=pl-s1>id</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>id</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>2</span><span class=pl-kos>;</span> <span class=pl-s1>id</span><span class=pl-c1>++</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-s1>id</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>slideData</span> <span class=pl-c1>=</span> <span class=pl-en>getSlideData</span><span class=pl-kos>(</span> <span class=pl-s1>slideIndices</span><span class=pl-kos>,</span> <span class=pl-s1>id</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log( timestamp +&quot; / &quot; + JSON.stringify(slideData));</span></td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>index</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>while</span> <span class=pl-kos>(</span> <span class=pl-s1>index</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>index</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-c1>&lt;</span> <span class=pl-kos>(</span><span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span><span class=pl-kos>)</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>playEvent</span><span class=pl-kos>(</span> <span class=pl-s1>id</span><span class=pl-kos>,</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>index</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-s1>timestamp</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>index</span><span class=pl-c1>++</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>while</span> <span class=pl-kos>(</span> <span class=pl-s1>playback</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>index</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>timeouts</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span> <span class=pl-en>setTimeout</span><span class=pl-kos>(</span> <span class=pl-s1>playEvent</span><span class=pl-kos>,</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>index</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>id</span><span class=pl-kos>,</span> <span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span><span class=pl-kos>[</span><span class=pl-s1>index</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-s1>timestamp</span> <span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>index</span><span class=pl-c1>++</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;Mode: &quot; + finalMode + &quot;/&quot; + mode );</span></td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>finalMode</span> != <span class=pl-c1>undefined</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>mode</span> <span class=pl-c1>=</span> <span class=pl-s1>finalMode</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span><span class=pl-kos>(</span> <span class=pl-s1>mode</span> <span class=pl-c1>==</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span> <span class=pl-en>showChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;playback (ok)&quot;);</span></td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>stopPlayback</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;stopPlayback&quot;);</span></td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;Timeouts: &quot; + timeouts[0].length + &quot;/&quot;+ timeouts[1].length);</span></td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span> <span class=pl-kos>(</span> <span class=pl-k>var</span> <span class=pl-s1>id</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>id</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>2</span><span class=pl-kos>;</span> <span class=pl-s1>id</span><span class=pl-c1>++</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>timeouts</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line"> 				<span class=pl-en>clearTimeout</span><span class=pl-kos>(</span><span class=pl-s1>timeouts</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>timeouts</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>playEvent</span><span class=pl-kos>(</span> <span class=pl-s1>id</span><span class=pl-kos>,</span> <span class=pl-s1>event</span><span class=pl-kos>,</span> <span class=pl-s1>timestamp</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log( timestamp +&quot; / &quot; + JSON.stringify(event));</span></td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log( id + &quot;: &quot; + timestamp +&quot; / &quot; +  event.begin +&quot; / &quot; + event.type +&quot; / &quot; + mode );</span></td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>switch</span> <span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>type</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>case</span> <span class=pl-s>&quot;open&quot;</span>:</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>timestamp</span> &lt;= <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>showChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>mode</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>case</span> <span class=pl-s>&quot;close&quot;</span>:</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>timestamp</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>closeChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>mode</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>case</span> <span class=pl-s>&quot;clear&quot;</span>:</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-s1>id</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>case</span> <span class=pl-s>&quot;setcolor&quot;</span>:</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>setColor</span><span class=pl-kos>(</span><span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>index</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>case</span> <span class=pl-s>&quot;draw&quot;</span>:</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>drawCurve</span><span class=pl-kos>(</span> <span class=pl-s1>id</span><span class=pl-kos>,</span> <span class=pl-s1>event</span><span class=pl-kos>,</span> <span class=pl-s1>timestamp</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>case</span> <span class=pl-s>&quot;erase&quot;</span>:</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>eraseCurve</span><span class=pl-kos>(</span> <span class=pl-s1>id</span><span class=pl-kos>,</span> <span class=pl-s1>event</span><span class=pl-kos>,</span> <span class=pl-s1>timestamp</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>break</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>drawCurve</span><span class=pl-kos>(</span> <span class=pl-s1>id</span><span class=pl-kos>,</span> <span class=pl-s1>event</span><span class=pl-kos>,</span> <span class=pl-s1>timestamp</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span>  <span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>ctx</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>context</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>scale</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>stepDuration</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>end</span> <span class=pl-c1>-</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-kos>)</span>/ <span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>-</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;---&quot;);</span></td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-c1>+</span> <span class=pl-s1>i</span> * <span class=pl-s1>stepDuration</span> &lt;= <span class=pl-kos>(</span><span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log( &quot;Draw &quot; + timestamp +&quot; / &quot; + event.begin + &quot; + &quot; + i + &quot; * &quot; + stepDuration );</span></td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>draw</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>(</span><span class=pl-s1>ctx</span><span class=pl-kos>,</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>x</span>*<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>y</span>*<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>x</span>*<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>y</span>*<span class=pl-s1>scale</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>playback</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log( &quot;Cue &quot; + timestamp +&quot; / &quot; + (Date.now() - slideStart) +&quot; / &quot; + event.begin + &quot; + &quot; + i + &quot; * &quot; + stepDuration + &quot; = &quot; + Math.max(0,event.begin + i * stepDuration - timestamp) );</span></td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>timeouts</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span> <span class=pl-en>setTimeout</span><span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>draw</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>max</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-c1>+</span> <span class=pl-s1>i</span> * <span class=pl-s1>stepDuration</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>ctx</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>xOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>x</span>*<span class=pl-s1>scale</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>yOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-c1>-</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>y</span>*<span class=pl-s1>scale</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>xOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>x</span>*<span class=pl-s1>scale</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>yOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>y</span>*<span class=pl-s1>scale</span></td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>eraseCurve</span><span class=pl-kos>(</span> <span class=pl-s1>id</span><span class=pl-kos>,</span> <span class=pl-s1>event</span><span class=pl-kos>,</span> <span class=pl-s1>timestamp</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span>  <span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>ctx</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>context</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>scale</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>stepDuration</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>end</span> <span class=pl-c1>-</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-kos>)</span>/ <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>i</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>i</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>.</span><span class=pl-c1>length</span><span class=pl-kos>;</span> <span class=pl-s1>i</span><span class=pl-c1>++</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-c1>+</span> <span class=pl-s1>i</span> * <span class=pl-s1>stepDuration</span> &lt;= <span class=pl-kos>(</span><span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span><span class=pl-kos>)</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>eraseWithSponge</span><span class=pl-kos>(</span><span class=pl-s1>ctx</span><span class=pl-kos>,</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>x</span>*<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>y</span>*<span class=pl-s1>scale</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>playback</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>timeouts</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span> <span class=pl-en>setTimeout</span><span class=pl-kos>(</span></td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>eraseWithSponge</span><span class=pl-kos>,</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>max</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>,</span><span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-c1>+</span> <span class=pl-s1>i</span> * <span class=pl-s1>stepDuration</span> <span class=pl-c1>-</span> <span class=pl-kos>(</span><span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span><span class=pl-kos>)</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-s1>ctx</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>xOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>x</span> * <span class=pl-s1>scale</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">							<span class=pl-s1>yOffset</span> <span class=pl-c1>+</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>[</span><span class=pl-s1>i</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>y</span> * <span class=pl-s1>scale</span></td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">						<span class=pl-kos>)</span></td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>startDrawing</span><span class=pl-kos>(</span> <span class=pl-s1>x</span><span class=pl-kos>,</span> <span class=pl-s1>y</span><span class=pl-kos>,</span> <span class=pl-s1>erase</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>ctx</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>context</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>scale</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>xLast</span> <span class=pl-c1>=</span> <span class=pl-s1>x</span> * <span class=pl-s1>scale</span> <span class=pl-c1>+</span> <span class=pl-s1>xOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>yLast</span> <span class=pl-c1>=</span> <span class=pl-s1>y</span> * <span class=pl-s1>scale</span> <span class=pl-c1>+</span> <span class=pl-s1>yOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>erase</span> <span class=pl-c1>==</span> <span class=pl-c1>true</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>type</span>: <span class=pl-s>&quot;erase&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>begin</span>: <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span><span class=pl-kos>,</span> <span class=pl-c1>end</span>: <span class=pl-c1>null</span><span class=pl-kos>,</span> <span class=pl-c1>curve</span>: <span class=pl-kos>[</span><span class=pl-kos>{</span><span class=pl-c1>x</span>: <span class=pl-s1>x</span><span class=pl-kos>,</span> <span class=pl-c1>y</span>: <span class=pl-s1>y</span><span class=pl-kos>}</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;url(&quot;&#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>src</span> <span class=pl-c1>+</span>  <span class=pl-s>&#39;&quot;) &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>radius</span> <span class=pl-c1>+</span> <span class=pl-s>&#39; &#39;</span> <span class=pl-c1>+</span> <span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>radius</span> <span class=pl-c1>+</span> <span class=pl-s>&#39;, auto&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>eraseWithSponge</span><span class=pl-kos>(</span><span class=pl-s1>ctx</span><span class=pl-kos>,</span> <span class=pl-s1>x</span> * <span class=pl-s1>scale</span> <span class=pl-c1>+</span> <span class=pl-s1>xOffset</span><span class=pl-kos>,</span> <span class=pl-s1>y</span> * <span class=pl-s1>scale</span> <span class=pl-c1>+</span> <span class=pl-s1>yOffset</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>type</span>: <span class=pl-s>&quot;draw&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>begin</span>: <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span><span class=pl-kos>,</span> <span class=pl-c1>end</span>: <span class=pl-c1>null</span><span class=pl-kos>,</span> <span class=pl-c1>curve</span>: <span class=pl-kos>[</span><span class=pl-kos>{</span><span class=pl-c1>x</span>: <span class=pl-s1>x</span><span class=pl-kos>,</span> <span class=pl-c1>y</span>: <span class=pl-s1>y</span><span class=pl-kos>}</span><span class=pl-kos>]</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>showSponge</span><span class=pl-kos>(</span><span class=pl-s1>x</span><span class=pl-kos>,</span><span class=pl-s1>y</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>type</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;erase&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>begin</span> <span class=pl-c1>=</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// show sponge image</span></td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>x</span> <span class=pl-c1>-</span> <span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>radius</span><span class=pl-kos>)</span> <span class=pl-c1>+</span><span class=pl-s>&quot;px&quot;</span> <span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>y</span> <span class=pl-c1>-</span> <span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>radius</span><span class=pl-kos>)</span> <span class=pl-c1>+</span><span class=pl-s>&quot;px&quot;</span> <span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>visibility</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;visible&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>eraseWithSponge</span><span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>context</span><span class=pl-kos>,</span><span class=pl-s1>x</span><span class=pl-kos>,</span><span class=pl-s1>y</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;startErasing&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>x</span>: <span class=pl-kos>(</span><span class=pl-s1>mouseX</span> <span class=pl-c1>-</span> <span class=pl-s1>xOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-c1>y</span>: <span class=pl-kos>(</span><span class=pl-s1>mouseY</span><span class=pl-c1>-</span><span class=pl-s1>yOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>drawSegment</span><span class=pl-kos>(</span> <span class=pl-s1>x</span><span class=pl-kos>,</span> <span class=pl-s1>y</span><span class=pl-kos>,</span> <span class=pl-s1>erase</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>ctx</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>context</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>scale</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>event</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// safeguard if broadcast hickup</span></td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>startDrawing</span><span class=pl-kos>(</span> <span class=pl-s1>x</span><span class=pl-kos>,</span> <span class=pl-s1>y</span><span class=pl-kos>,</span> <span class=pl-s1>erase</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>.</span><span class=pl-en>push</span><span class=pl-kos>(</span><span class=pl-kos>{</span><span class=pl-c1>x</span>: <span class=pl-s1>x</span><span class=pl-kos>,</span> <span class=pl-c1>y</span>: <span class=pl-s1>y</span><span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span><span class=pl-kos>(</span><span class=pl-s1>y</span> * <span class=pl-s1>scale</span> <span class=pl-c1>+</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>x</span> * <span class=pl-s1>scale</span> <span class=pl-c1>+</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>erase</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>eraseWithSponge</span><span class=pl-kos>(</span><span class=pl-s1>ctx</span><span class=pl-kos>,</span> <span class=pl-s1>x</span> * <span class=pl-s1>scale</span> <span class=pl-c1>+</span> <span class=pl-s1>xOffset</span><span class=pl-kos>,</span> <span class=pl-s1>y</span> * <span class=pl-s1>scale</span> <span class=pl-c1>+</span> <span class=pl-s1>yOffset</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>draw</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>(</span><span class=pl-s1>ctx</span><span class=pl-kos>,</span> <span class=pl-s1>xLast</span><span class=pl-kos>,</span> <span class=pl-s1>yLast</span><span class=pl-kos>,</span> <span class=pl-s1>x</span> * <span class=pl-s1>scale</span> <span class=pl-c1>+</span> <span class=pl-s1>xOffset</span><span class=pl-kos>,</span> <span class=pl-s1>y</span> * <span class=pl-s1>scale</span> <span class=pl-c1>+</span> <span class=pl-s1>yOffset</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>xLast</span> <span class=pl-c1>=</span> <span class=pl-s1>x</span> * <span class=pl-s1>scale</span> <span class=pl-c1>+</span> <span class=pl-s1>xOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>yLast</span> <span class=pl-c1>=</span> <span class=pl-s1>y</span> * <span class=pl-s1>scale</span> <span class=pl-c1>+</span> <span class=pl-s1>yOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>stopDrawing</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>end</span> <span class=pl-c1>=</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>type</span> <span class=pl-c1>==</span> <span class=pl-s>&quot;erase&quot;</span> <span class=pl-c1>||</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>curve</span><span class=pl-kos>.</span><span class=pl-c1>length</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// do not save a line with a single point only</span></td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>recordEvent</span><span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*****************************************************************</span></td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code blob-code-inner js-file-line"><span class=pl-c>** User interface</span></td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code blob-code-inner js-file-line"><span class=pl-c>******************************************************************/</span></td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line"><span class=pl-c>// TODO: check all touchevents</span></td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&#39;touchstart&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>evt</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;Touch start&quot;);</span></td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>readOnly</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-c1>target</span><span class=pl-kos>.</span><span class=pl-en>getAttribute</span><span class=pl-kos>(</span><span class=pl-s>&#39;data-chalkboard&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>==</span> <span class=pl-s1>mode</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//			var ctx = drawingCanvas[mode].context;</span></td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>scale</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-en>preventDefault</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">		        <span class=pl-k>var</span> <span class=pl-s1>touch</span> <span class=pl-c1>=</span> <span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-c1>touches</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line">		        <span class=pl-s1>mouseX</span> <span class=pl-c1>=</span> <span class=pl-s1>touch</span><span class=pl-kos>.</span><span class=pl-c1>pageX</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line">		        <span class=pl-s1>mouseY</span> <span class=pl-c1>=</span> <span class=pl-s1>touch</span><span class=pl-kos>.</span><span class=pl-c1>pageY</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>startDrawing</span><span class=pl-kos>(</span> <span class=pl-kos>(</span><span class=pl-s1>mouseX</span> <span class=pl-c1>-</span> <span class=pl-s1>xOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-kos>(</span><span class=pl-s1>mouseY</span><span class=pl-c1>-</span><span class=pl-s1>yOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-c1>false</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;startDrawing&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>x</span>: <span class=pl-kos>(</span><span class=pl-s1>mouseX</span> <span class=pl-c1>-</span> <span class=pl-s1>xOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-c1>y</span>: <span class=pl-kos>(</span><span class=pl-s1>mouseY</span><span class=pl-c1>-</span><span class=pl-s1>yOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-c1>erase</span>: <span class=pl-c1>false</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*</span></td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			xLast = mouseX;</span></td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			yLast = mouseY;</span></td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			event = { type: &quot;draw&quot;, begin: Date.now() - slideStart, end: null, curve: [{x: (mouseX - xOffset)/scale, y: (mouseY-yOffset)/scale}] };</span></td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line"><span class=pl-c>*/</span></td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>touchTimeout</span> <span class=pl-c1>=</span> <span class=pl-en>setTimeout</span><span class=pl-kos>(</span> <span class=pl-s1>showSponge</span><span class=pl-kos>,</span> <span class=pl-c1>500</span><span class=pl-kos>,</span> <span class=pl-s1>mouseX</span><span class=pl-kos>,</span> <span class=pl-s1>mouseY</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-s1>passiveSupported</span> ? <span class=pl-kos>{</span><span class=pl-c1>passive</span>: <span class=pl-c1>false</span><span class=pl-kos>}</span> : <span class=pl-c1>false</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&#39;touchmove&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>evt</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;Touch move&quot;);</span></td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>clearTimeout</span><span class=pl-kos>(</span> <span class=pl-s1>touchTimeout</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>touchTimeout</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//			var ctx = drawingCanvas[mode].context;</span></td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>scale</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line">		        <span class=pl-k>var</span> <span class=pl-s1>touch</span> <span class=pl-c1>=</span> <span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-c1>touches</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">        		<span class=pl-s1>mouseX</span> <span class=pl-c1>=</span> <span class=pl-s1>touch</span><span class=pl-kos>.</span><span class=pl-c1>pageX</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line">        		<span class=pl-s1>mouseY</span> <span class=pl-c1>=</span> <span class=pl-s1>touch</span><span class=pl-kos>.</span><span class=pl-c1>pageY</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line">        		<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>mouseY</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>mouseX</span> <span class=pl-c1>&lt;</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line">        		    	<span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-en>preventDefault</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>// move sponge</span></td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>type</span> <span class=pl-c1>==</span> <span class=pl-s>&quot;erase&quot;</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>left</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>mouseX</span> <span class=pl-c1>-</span> <span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>radius</span><span class=pl-kos>)</span> <span class=pl-c1>+</span><span class=pl-s>&quot;px&quot;</span> <span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>top</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>mouseY</span> <span class=pl-c1>-</span> <span class=pl-s1>eraser</span><span class=pl-kos>.</span><span class=pl-c1>radius</span><span class=pl-kos>)</span> <span class=pl-c1>+</span><span class=pl-s>&quot;px&quot;</span> <span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>drawSegment</span><span class=pl-kos>(</span> <span class=pl-kos>(</span><span class=pl-s1>mouseX</span> <span class=pl-c1>-</span> <span class=pl-s1>xOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-kos>(</span><span class=pl-s1>mouseY</span><span class=pl-c1>-</span><span class=pl-s1>yOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>type</span> <span class=pl-c1>==</span> <span class=pl-s>&quot;erase&quot;</span> <span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;drawSegment&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>x</span>: <span class=pl-kos>(</span><span class=pl-s1>mouseX</span> <span class=pl-c1>-</span> <span class=pl-s1>xOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-c1>y</span>: <span class=pl-kos>(</span><span class=pl-s1>mouseY</span><span class=pl-c1>-</span><span class=pl-s1>yOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-c1>erase</span>: <span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>type</span> <span class=pl-c1>==</span> <span class=pl-s>&quot;erase&quot;</span> <span class=pl-kos>)</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*</span></td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line"><span class=pl-c>        		if (mouseY &lt; drawingCanvas[mode].height &amp;&amp; mouseX &lt; drawingCanvas[mode].width) {</span></td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line"><span class=pl-c>        		    	evt.preventDefault();</span></td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				event.curve.push({x: (mouseX - xOffset)/scale, y: (mouseY-yOffset)/scale});</span></td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				if ( event.type == &quot;erase&quot; ) {</span></td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line"><span class=pl-c>					drawingCanvas[mode].sponge.style.left = (mouseX - eraser.radius) +&quot;px&quot; ;</span></td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line"><span class=pl-c>					drawingCanvas[mode].sponge.style.top = (mouseY - eraser.radius) +&quot;px&quot; ;</span></td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			                eraseWithSponge(ctx, mouseX, mouseY);</span></td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				}</span></td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				else {</span></td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			                draw[mode](ctx, xLast, yLast, mouseX, mouseY);</span></td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				}</span></td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				xLast = mouseX;</span></td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				yLast = mouseY;</span></td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			}</span></td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code blob-code-inner js-file-line"><span class=pl-c>*/</span></td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-c1>false</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span><span class=pl-s>&#39;touchend&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-s1>evt</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>clearTimeout</span><span class=pl-kos>(</span> <span class=pl-s1>touchTimeout</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>touchTimeout</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// hide sponge image</span></td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>sponge</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>visibility</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;hidden&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>stopDrawing</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;stopDrawing&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*</span></td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code blob-code-inner js-file-line"><span class=pl-c>		if ( event ) {</span></td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			event.end = Date.now() - slideStart;</span></td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			if ( event.type == &quot;erase&quot; || event.curve.length &gt; 1 ) {</span></td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				// do not save a line with a single point only</span></td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				recordEvent( event );</span></td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			}</span></td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			event = null;</span></td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line"><span class=pl-c>		}</span></td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line"><span class=pl-c>*/</span></td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>,</span> <span class=pl-c1>false</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span> <span class=pl-s>&#39;mousedown&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>evt</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;Mouse down&quot;);</span></td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log( &quot;Read only: &quot; + readOnly );</span></td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>readOnly</span> <span class=pl-c1>&amp;&amp;</span> <span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-c1>target</span><span class=pl-kos>.</span><span class=pl-en>getAttribute</span><span class=pl-kos>(</span><span class=pl-s>&#39;data-chalkboard&#39;</span><span class=pl-kos>)</span> <span class=pl-c1>==</span> <span class=pl-s1>mode</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log( &quot;mousedown: &quot; + evt.button );</span></td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//			var ctx = drawingCanvas[mode].context;</span></td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>scale</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>mouseX</span> <span class=pl-c1>=</span> <span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-c1>pageX</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>mouseY</span> <span class=pl-c1>=</span> <span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-c1>pageY</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>startDrawing</span><span class=pl-kos>(</span> <span class=pl-kos>(</span><span class=pl-s1>mouseX</span> <span class=pl-c1>-</span> <span class=pl-s1>xOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-kos>(</span><span class=pl-s1>mouseY</span><span class=pl-c1>-</span><span class=pl-s1>yOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-kos>(</span> <span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-c1>button</span> <span class=pl-c1>==</span> <span class=pl-c1>2</span> <span class=pl-c1>||</span> <span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-c1>button</span> <span class=pl-c1>==</span> <span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;startDrawing&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>x</span>: <span class=pl-kos>(</span><span class=pl-s1>mouseX</span> <span class=pl-c1>-</span> <span class=pl-s1>xOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-c1>y</span>: <span class=pl-kos>(</span><span class=pl-s1>mouseY</span><span class=pl-c1>-</span><span class=pl-s1>yOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-c1>erase</span>: <span class=pl-kos>(</span> <span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-c1>button</span> <span class=pl-c1>==</span> <span class=pl-c1>2</span> <span class=pl-c1>||</span> <span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-c1>button</span> <span class=pl-c1>==</span> <span class=pl-c1>1</span><span class=pl-kos>)</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*</span></td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			xLast = mouseX;</span></td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			yLast = mouseY;</span></td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			if ( evt.button == 2) {</span></td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				event = { type: &quot;erase&quot;, begin: Date.now() - slideStart, end: null, curve: [{x: (mouseX - xOffset)/scale, y: (mouseY-yOffset)/scale}]};</span></td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				drawingCanvas[mode].canvas.style.cursor = &#39;url(&quot;&#39; + path + &#39;img/sponge.png&quot;) &#39; + eraser.radius + &#39; &#39; + eraser.radius + &#39;, auto&#39;;</span></td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				eraseWithSponge(ctx,mouseX,mouseY);</span></td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			}</span></td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			else {</span></td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				event = { type: &quot;draw&quot;, begin: Date.now() - slideStart, end: null, curve: [{x: (mouseX - xOffset)/scale, y: (mouseY-yOffset)/scale}] };</span></td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			}</span></td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code blob-code-inner js-file-line"><span class=pl-c>*/</span></td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span> <span class=pl-s>&#39;mousemove&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>evt</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;Mouse move&quot;);</span></td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//			var ctx = drawingCanvas[mode].context;</span></td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>scale</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>mouseX</span> <span class=pl-c1>=</span> <span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-c1>pageX</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>mouseY</span> <span class=pl-c1>=</span> <span class=pl-s1>evt</span><span class=pl-kos>.</span><span class=pl-c1>pageY</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>drawSegment</span><span class=pl-kos>(</span> <span class=pl-kos>(</span><span class=pl-s1>mouseX</span> <span class=pl-c1>-</span> <span class=pl-s1>xOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-kos>(</span><span class=pl-s1>mouseY</span><span class=pl-c1>-</span><span class=pl-s1>yOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>type</span> <span class=pl-c1>==</span> <span class=pl-s>&quot;erase&quot;</span> <span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;drawSegment&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>x</span>: <span class=pl-kos>(</span><span class=pl-s1>mouseX</span> <span class=pl-c1>-</span> <span class=pl-s1>xOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-c1>y</span>: <span class=pl-kos>(</span><span class=pl-s1>mouseY</span><span class=pl-c1>-</span><span class=pl-s1>yOffset</span><span class=pl-kos>)</span>/<span class=pl-s1>scale</span><span class=pl-kos>,</span> <span class=pl-c1>erase</span>: <span class=pl-kos>(</span> <span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>type</span> <span class=pl-c1>==</span> <span class=pl-s>&quot;erase&quot;</span> <span class=pl-kos>)</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*</span></td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			event.curve.push({x: (mouseX - xOffset)/scale, y: (mouseY-yOffset)/scale});</span></td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			if(mouseY &lt; drawingCanvas[mode].height &amp;&amp; mouseX &lt; drawingCanvas[mode].width) {</span></td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				if ( event.type == &quot;erase&quot; ) {</span></td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code blob-code-inner js-file-line"><span class=pl-c>					eraseWithSponge(ctx,mouseX,mouseY);</span></td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				}</span></td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				else {</span></td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code blob-code-inner js-file-line"><span class=pl-c>					draw[mode](ctx, xLast, yLast, mouseX,mouseY);</span></td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				}</span></td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				xLast = mouseX;</span></td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				yLast = mouseY;</span></td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			}</span></td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code blob-code-inner js-file-line"><span class=pl-c>*/</span></td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span> <span class=pl-s>&#39;mouseup&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>evt</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s1>pens</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>stopDrawing</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;stopDrawing&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*			if(evt.button == 2){</span></td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			}</span></td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			event.end = Date.now() - slideStart;</span></td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			if ( event.type == &quot;erase&quot; || event.curve.length &gt; 1 ) {</span></td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				// do not save a line with a single point only</span></td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code blob-code-inner js-file-line"><span class=pl-c>				recordEvent( event );</span></td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			}</span></td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code blob-code-inner js-file-line"><span class=pl-c>			event = null;</span></td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code blob-code-inner js-file-line"><span class=pl-c>*/</span></td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span> <span class=pl-s>&quot;resize&quot;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;resize&quot;);</span></td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// Resize the canvas and draw everything again</span></td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>timestamp</span> <span class=pl-c1>=</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code blob-code-inner js-file-line">	        <span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>playback</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>timestamp</span> <span class=pl-c1>=</span> <span class=pl-en>getSlideDuration</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log( drawingCanvas[0].scale + &quot;/&quot; + drawingCanvas[0].xOffset + &quot;/&quot; +drawingCanvas[0].yOffset );</span></td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>id</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span> <span class=pl-s1>id</span> <span class=pl-c1>&lt;</span> <span class=pl-c1>2</span><span class=pl-kos>;</span> <span class=pl-s1>id</span><span class=pl-c1>++</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span>  <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>innerWidth</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>=</span> <span class=pl-smi>window</span><span class=pl-kos>.</span><span class=pl-c1>innerHeight</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>width</span>  <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>context</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>width</span>  <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>context</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>=</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span> <span class=pl-c1>=</span> <span class=pl-v>Math</span><span class=pl-kos>.</span><span class=pl-en>min</span><span class=pl-kos>(</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span>/<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span> <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span>/<span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>-</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> * <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span><span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>-</span> <span class=pl-s1>storage</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> * <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-s1>id</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>scale</span><span class=pl-kos>)</span>/<span class=pl-c1>2</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log( drawingCanvas[id].scale + &quot;/&quot; + drawingCanvas[id].xOffset + &quot;/&quot; +drawingCanvas[id].yOffset );</span></td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log( window.innerWidth + &quot;/&quot; + window.innerHeight);</span></td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>startPlayback</span><span class=pl-kos>(</span> <span class=pl-s1>timestamp</span><span class=pl-kos>,</span> <span class=pl-s1>mode</span><span class=pl-kos>,</span> <span class=pl-c1>true</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>updateReadOnlyMode</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;updateReadOnlyMode&quot;);</span></td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>config</span><span class=pl-kos>.</span><span class=pl-c1>readOnly</span> <span class=pl-c1>==</span> <span class=pl-c1>undefined</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>readOnly</span> <span class=pl-c1>=</span> <span class=pl-kos>(</span> <span class=pl-en>getSlideDuration</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>&gt;</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>readOnly</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;default&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;default&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;default&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;default&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>notescanvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>pointerEvents</span> != <span class=pl-s>&quot;none&quot;</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>notescanvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>background</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;rgba(0,0,0,0)&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>notescanvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>pointerEvents</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;none&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s1>pens</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>container</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s1>pens</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s1>pens</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>canvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span> <span class=pl-c1>=</span> <span class=pl-s1>pens</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>[</span><span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>cursor</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code blob-code-inner js-file-line">	<span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span> <span class=pl-s>&#39;ready&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>evt</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&#39;ready&#39;);</span></td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>printMode</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideStart</span> <span class=pl-c1>=</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideIndices</span> <span class=pl-c1>=</span> <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getIndices</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>playback</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>startPlayback</span><span class=pl-kos>(</span> <span class=pl-en>getSlideDuration</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>isAutoSliding</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;startplayback&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>timestamp</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>updateReadOnlyMode</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code blob-code-inner js-file-line"><span class=pl-smi>console</span><span class=pl-kos>.</span><span class=pl-en>log</span><span class=pl-kos>(</span><span class=pl-s>&quot;Create printout when ready&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>whenReady</span><span class=pl-kos>(</span> <span class=pl-s1>createPrintout</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code blob-code-inner js-file-line">	<span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span> <span class=pl-s>&#39;slidechanged&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>evt</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//		clearTimeout( slidechangeTimeout );</span></td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&#39;slidechanged&#39;);</span></td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>printMode</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideStart</span> <span class=pl-c1>=</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideIndices</span> <span class=pl-c1>=</span> <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getIndices</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>closeChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>playback</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>slidechangeTimeout</span> <span class=pl-c1>=</span> <span class=pl-en>setTimeout</span><span class=pl-kos>(</span> <span class=pl-s1>startPlayback</span><span class=pl-kos>,</span> <span class=pl-s1>transition</span><span class=pl-kos>,</span> <span class=pl-en>getSlideDuration</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>isAutoSliding</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;startplayback&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>timestamp</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>updateReadOnlyMode</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code blob-code-inner js-file-line">	<span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span> <span class=pl-s>&#39;fragmentshown&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>evt</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//		clearTimeout( slidechangeTimeout );</span></td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&#39;fragmentshown&#39;);</span></td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>printMode</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideStart</span> <span class=pl-c1>=</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideIndices</span> <span class=pl-c1>=</span> <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getIndices</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>closeChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>isAutoSliding</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>var</span> <span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;startplayback&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>timestamp</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>playback</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code blob-code-inner js-file-line">				<span class=pl-c>//</span></td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>startPlayback</span><span class=pl-kos>(</span> <span class=pl-en>getSlideDuration</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//				closeChalkboard();</span></td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>updateReadOnlyMode</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code blob-code-inner js-file-line">	<span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span> <span class=pl-s>&#39;fragmenthidden&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>evt</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//		clearTimeout( slidechangeTimeout );</span></td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&#39;fragmenthidden&#39;);</span></td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>printMode</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideStart</span> <span class=pl-c1>=</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideIndices</span> <span class=pl-c1>=</span> <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>getIndices</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>closeChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>isAutoSliding</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code blob-code-inner js-file-line">				<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;stopplayback&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>playback</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>startPlayback</span><span class=pl-kos>(</span> <span class=pl-en>getSlideDuration</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>closeChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>updateReadOnlyMode</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code blob-code-inner js-file-line">	<span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span> <span class=pl-s>&#39;autoslideresumed&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>evt</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&#39;autoslideresumed&#39;);</span></td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;startplayback&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code blob-code-inner js-file-line">		<span class=pl-s1>event</span><span class=pl-kos>.</span><span class=pl-c1>timestamp</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>event</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code blob-code-inner js-file-line">	<span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>addEventListener</span><span class=pl-kos>(</span> <span class=pl-s>&#39;autoslidepaused&#39;</span><span class=pl-kos>,</span> <span class=pl-k>function</span><span class=pl-kos>(</span> <span class=pl-s1>evt</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&#39;autoslidepaused&#39;);</span></td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code blob-code-inner js-file-line">		<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;stopplayback&#39;</span><span class=pl-kos>)</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code blob-code-inner js-file-line">		<span class=pl-c>// advance to end of slide</span></td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//		closeChalkboard();</span></td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code blob-code-inner js-file-line">		<span class=pl-en>startPlayback</span><span class=pl-kos>(</span> <span class=pl-en>getSlideDuration</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>,</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>toggleNotesCanvas</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>readOnly</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>mode</span> <span class=pl-c1>==</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>toggleChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>notescanvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>background</span> <span class=pl-c1>=</span> <span class=pl-s1>background</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span> <span class=pl-c>//&#39;rgba(255,0,0,0.5)&#39;;</span></td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>notescanvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>pointerEvents</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;auto&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>notescanvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>pointerEvents</span> != <span class=pl-s>&quot;none&quot;</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>notescanvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>background</span> <span class=pl-c1>=</span> <span class=pl-s>&#39;rgba(0,0,0,0)&#39;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>notescanvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>pointerEvents</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;none&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>setColor</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>recordEvent</span><span class=pl-kos>(</span> <span class=pl-kos>{</span> <span class=pl-c1>type</span>:<span class=pl-s>&quot;setcolor&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>index</span>: <span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>begin</span>: <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span> <span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code blob-code-inner js-file-line">						<span class=pl-k>let</span> <span class=pl-s1>idx</span> <span class=pl-c1>=</span> <span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code blob-code-inner js-file-line">						<span class=pl-en>setColor</span><span class=pl-kos>(</span><span class=pl-s1>idx</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code blob-code-inner js-file-line">						<span class=pl-en>recordEvent</span><span class=pl-kos>(</span> <span class=pl-kos>{</span> <span class=pl-c1>type</span>:<span class=pl-s>&quot;setcolor&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>index</span>: <span class=pl-s1>idx</span><span class=pl-kos>,</span> <span class=pl-c1>begin</span>: <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span> <span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code blob-code-inner js-file-line">						<span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>notescanvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>background</span> <span class=pl-c1>=</span> <span class=pl-s1>background</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>;</span> <span class=pl-c>//&#39;rgba(255,0,0,0.5)&#39;;</span></td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>notescanvas</span><span class=pl-kos>.</span><span class=pl-c1>style</span><span class=pl-kos>.</span><span class=pl-c1>pointerEvents</span> <span class=pl-c1>=</span> <span class=pl-s>&quot;auto&quot;</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>toggleChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;toggleChalkboard &quot; + mode);</span></td>
      </tr>
      <tr>
        <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>mode</span> <span class=pl-c1>==</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>readOnly</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>recordEvent</span><span class=pl-kos>(</span> <span class=pl-kos>{</span> <span class=pl-c1>type</span>:<span class=pl-s>&quot;close&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>begin</span>: <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span> <span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>closeChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>showChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>readOnly</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>recordEvent</span><span class=pl-kos>(</span> <span class=pl-kos>{</span> <span class=pl-c1>type</span>:<span class=pl-s>&quot;open&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>begin</span>: <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span> <span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>setColor</span><span class=pl-kos>(</span><span class=pl-c1>0</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>recordEvent</span><span class=pl-kos>(</span> <span class=pl-kos>{</span> <span class=pl-c1>type</span>:<span class=pl-s>&quot;setcolor&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>index</span>: <span class=pl-c1>0</span><span class=pl-kos>,</span> <span class=pl-c1>begin</span>: <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span> <span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code blob-code-inner js-file-line">				<span class=pl-k>if</span> <span class=pl-kos>(</span><span class=pl-s1>rememberColor</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code blob-code-inner js-file-line">					<span class=pl-k>let</span> <span class=pl-s1>idx</span> <span class=pl-c1>=</span> <span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>setColor</span><span class=pl-kos>(</span><span class=pl-s1>idx</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code blob-code-inner js-file-line">					<span class=pl-en>recordEvent</span><span class=pl-kos>(</span> <span class=pl-kos>{</span> <span class=pl-c1>type</span>:<span class=pl-s>&quot;setcolor&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>index</span>: <span class=pl-s1>idx</span><span class=pl-kos>,</span> <span class=pl-c1>begin</span>: <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span> <span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span> <span class=pl-k>else</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-code blob-code-inner js-file-line">					<span class=pl-s1>color</span><span class=pl-kos>[</span><span class=pl-s1>mode</span><span class=pl-kos>]</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>clear</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>readOnly</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>recordEvent</span><span class=pl-kos>(</span> <span class=pl-kos>{</span> <span class=pl-c1>type</span>:<span class=pl-s>&quot;clear&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>begin</span>: <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span> <span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-s1>mode</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;clear&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>colorNext</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>readOnly</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>let</span> <span class=pl-s1>idx</span> <span class=pl-c1>=</span> <span class=pl-en>cycleColorNext</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>setColor</span><span class=pl-kos>(</span><span class=pl-s1>idx</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>recordEvent</span><span class=pl-kos>(</span> <span class=pl-kos>{</span> <span class=pl-c1>type</span>: <span class=pl-s>&quot;setcolor&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>index</span>: <span class=pl-s1>idx</span><span class=pl-kos>,</span> <span class=pl-c1>begin</span>: <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span> <span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;setcolor&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>index</span>: <span class=pl-s1>idx</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>colorPrev</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> !<span class=pl-s1>readOnly</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>let</span> <span class=pl-s1>idx</span> <span class=pl-c1>=</span> <span class=pl-en>cycleColorPrev</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>setColor</span><span class=pl-kos>(</span><span class=pl-s1>idx</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>recordEvent</span><span class=pl-kos>(</span> <span class=pl-kos>{</span> <span class=pl-c1>type</span>: <span class=pl-s>&quot;setcolor&quot;</span><span class=pl-kos>,</span> <span class=pl-c1>index</span>: <span class=pl-s1>idx</span><span class=pl-kos>,</span> <span class=pl-c1>begin</span>: <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span> <span class=pl-c1>-</span> <span class=pl-s1>slideStart</span> <span class=pl-kos>}</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;setcolor&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>index</span>: <span class=pl-s1>idx</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>resetSlide</span><span class=pl-kos>(</span> <span class=pl-s1>force</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>ok</span> <span class=pl-c1>=</span> <span class=pl-s1>force</span> <span class=pl-c1>||</span> <span class=pl-en>confirm</span><span class=pl-kos>(</span><span class=pl-s>&quot;Please confirm to delete chalkboard drawings on this slide!&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>ok</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code blob-code-inner js-file-line"><span class=pl-c>//console.log(&quot;resetSlide &quot;);</span></td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>stopPlayback</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideStart</span> <span class=pl-c1>=</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>closeChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>mode</span> <span class=pl-c1>=</span> <span class=pl-c1>1</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>slideData</span> <span class=pl-c1>=</span> <span class=pl-en>getSlideData</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>duration</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>mode</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>slideData</span> <span class=pl-c1>=</span> <span class=pl-en>getSlideData</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>duration</span> <span class=pl-c1>=</span> <span class=pl-c1>0</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideData</span><span class=pl-kos>.</span><span class=pl-c1>events</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>updateReadOnlyMode</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;resetSlide&#39;</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>function</span> <span class=pl-en>resetStorage</span><span class=pl-kos>(</span> <span class=pl-s1>force</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>var</span> <span class=pl-s1>ok</span> <span class=pl-c1>=</span> <span class=pl-s1>force</span> <span class=pl-c1>||</span> <span class=pl-en>confirm</span><span class=pl-kos>(</span><span class=pl-s>&quot;Please confirm to delete all chalkboard drawings!&quot;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>ok</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>stopPlayback</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>slideStart</span> <span class=pl-c1>=</span> <span class=pl-v>Date</span><span class=pl-kos>.</span><span class=pl-en>now</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-c1>0</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>clearCanvas</span><span class=pl-kos>(</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>mode</span> <span class=pl-c1>==</span> <span class=pl-c1>1</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1577" class="blob-num js-line-number" data-line-number="1577"></td>
        <td id="LC1577" class="blob-code blob-code-inner js-file-line">				<span class=pl-s1>event</span> <span class=pl-c1>=</span> <span class=pl-c1>null</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1578" class="blob-num js-line-number" data-line-number="1578"></td>
        <td id="LC1578" class="blob-code blob-code-inner js-file-line">				<span class=pl-en>closeChalkboard</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1579" class="blob-num js-line-number" data-line-number="1579"></td>
        <td id="LC1579" class="blob-code blob-code-inner js-file-line">			<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1580" class="blob-num js-line-number" data-line-number="1580"></td>
        <td id="LC1580" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>storage</span> <span class=pl-c1>=</span> <span class=pl-kos>[</span></td>
      </tr>
      <tr>
        <td id="L1581" class="blob-num js-line-number" data-line-number="1581"></td>
        <td id="LC1581" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>{</span> <span class=pl-c1>width</span>: <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span> <span class=pl-c1>-</span> <span class=pl-c1>2</span> * <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>xOffset</span><span class=pl-kos>,</span> <span class=pl-c1>height</span>: <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span> <span class=pl-c1>-</span> <span class=pl-c1>2</span> * <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>0</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>yOffset</span><span class=pl-kos>,</span> <span class=pl-c1>data</span>: <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>}</span><span class=pl-kos>,</span></td>
      </tr>
      <tr>
        <td id="L1582" class="blob-num js-line-number" data-line-number="1582"></td>
        <td id="LC1582" class="blob-code blob-code-inner js-file-line">					<span class=pl-kos>{</span> <span class=pl-c1>width</span>: <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>width</span><span class=pl-kos>,</span> <span class=pl-c1>height</span>: <span class=pl-s1>drawingCanvas</span><span class=pl-kos>[</span><span class=pl-c1>1</span><span class=pl-kos>]</span><span class=pl-kos>.</span><span class=pl-c1>height</span><span class=pl-kos>,</span> <span class=pl-c1>data</span>: <span class=pl-kos>[</span><span class=pl-kos>]</span><span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1583" class="blob-num js-line-number" data-line-number="1583"></td>
        <td id="LC1583" class="blob-code blob-code-inner js-file-line">				<span class=pl-kos>]</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1584" class="blob-num js-line-number" data-line-number="1584"></td>
        <td id="LC1584" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1585" class="blob-num js-line-number" data-line-number="1585"></td>
        <td id="LC1585" class="blob-code blob-code-inner js-file-line">			<span class=pl-en>updateReadOnlyMode</span><span class=pl-kos>(</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1586" class="blob-num js-line-number" data-line-number="1586"></td>
        <td id="LC1586" class="blob-code blob-code-inner js-file-line">			<span class=pl-c>// broadcast</span></td>
      </tr>
      <tr>
        <td id="L1587" class="blob-num js-line-number" data-line-number="1587"></td>
        <td id="LC1587" class="blob-code blob-code-inner js-file-line">			<span class=pl-k>var</span> <span class=pl-s1>message</span> <span class=pl-c1>=</span> <span class=pl-k>new</span> <span class=pl-v>CustomEvent</span><span class=pl-kos>(</span><span class=pl-s>&#39;send&#39;</span><span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1588" class="blob-num js-line-number" data-line-number="1588"></td>
        <td id="LC1588" class="blob-code blob-code-inner js-file-line">			<span class=pl-s1>message</span><span class=pl-kos>.</span><span class=pl-c1>content</span> <span class=pl-c1>=</span> <span class=pl-kos>{</span> <span class=pl-c1>sender</span>: <span class=pl-s>&#39;chalkboard-plugin&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>type</span>: <span class=pl-s>&#39;init&#39;</span><span class=pl-kos>,</span> <span class=pl-c1>storage</span>: <span class=pl-s1>storage</span><span class=pl-kos>,</span> <span class=pl-c1>mode</span>: <span class=pl-s1>mode</span> <span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1589" class="blob-num js-line-number" data-line-number="1589"></td>
        <td id="LC1589" class="blob-code blob-code-inner js-file-line">			<span class=pl-smi>document</span><span class=pl-kos>.</span><span class=pl-en>dispatchEvent</span><span class=pl-kos>(</span> <span class=pl-s1>message</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1590" class="blob-num js-line-number" data-line-number="1590"></td>
        <td id="LC1590" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1591" class="blob-num js-line-number" data-line-number="1591"></td>
        <td id="LC1591" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1592" class="blob-num js-line-number" data-line-number="1592"></td>
        <td id="LC1592" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1593" class="blob-num js-line-number" data-line-number="1593"></td>
        <td id="LC1593" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1594" class="blob-num js-line-number" data-line-number="1594"></td>
        <td id="LC1594" class="blob-code blob-code-inner js-file-line"><span class=pl-c>/*</span></td>
      </tr>
      <tr>
        <td id="L1595" class="blob-num js-line-number" data-line-number="1595"></td>
        <td id="LC1595" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	this.drawWithBoardmarker = drawWithBoardmarker;</span></td>
      </tr>
      <tr>
        <td id="L1596" class="blob-num js-line-number" data-line-number="1596"></td>
        <td id="LC1596" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	this.drawWithChalk = drawWithChalk;</span></td>
      </tr>
      <tr>
        <td id="L1597" class="blob-num js-line-number" data-line-number="1597"></td>
        <td id="LC1597" class="blob-code blob-code-inner js-file-line"><span class=pl-c>	this.startRecording = startRecording;</span></td>
      </tr>
      <tr>
        <td id="L1598" class="blob-num js-line-number" data-line-number="1598"></td>
        <td id="LC1598" class="blob-code blob-code-inner js-file-line"><span class=pl-c>*/</span></td>
      </tr>
      <tr>
        <td id="L1599" class="blob-num js-line-number" data-line-number="1599"></td>
        <td id="LC1599" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>toggleNotesCanvas</span> <span class=pl-c1>=</span> <span class=pl-s1>toggleNotesCanvas</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1600" class="blob-num js-line-number" data-line-number="1600"></td>
        <td id="LC1600" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>toggleChalkboard</span> <span class=pl-c1>=</span> <span class=pl-s1>toggleChalkboard</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1601" class="blob-num js-line-number" data-line-number="1601"></td>
        <td id="LC1601" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>colorNext</span> <span class=pl-c1>=</span> <span class=pl-s1>colorNext</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1602" class="blob-num js-line-number" data-line-number="1602"></td>
        <td id="LC1602" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>colorPrev</span> <span class=pl-c1>=</span> <span class=pl-s1>colorPrev</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1603" class="blob-num js-line-number" data-line-number="1603"></td>
        <td id="LC1603" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>clear</span> <span class=pl-c1>=</span> <span class=pl-s1>clear</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1604" class="blob-num js-line-number" data-line-number="1604"></td>
        <td id="LC1604" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>reset</span> <span class=pl-c1>=</span> <span class=pl-s1>resetSlide</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1605" class="blob-num js-line-number" data-line-number="1605"></td>
        <td id="LC1605" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>resetAll</span> <span class=pl-c1>=</span> <span class=pl-s1>resetStorage</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1606" class="blob-num js-line-number" data-line-number="1606"></td>
        <td id="LC1606" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>download</span> <span class=pl-c1>=</span> <span class=pl-s1>downloadData</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1607" class="blob-num js-line-number" data-line-number="1607"></td>
        <td id="LC1607" class="blob-code blob-code-inner js-file-line">	<span class=pl-smi>this</span><span class=pl-kos>.</span><span class=pl-c1>configure</span> <span class=pl-c1>=</span> <span class=pl-s1>configure</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1608" class="blob-num js-line-number" data-line-number="1608"></td>
        <td id="LC1608" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1609" class="blob-num js-line-number" data-line-number="1609"></td>
        <td id="LC1609" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1610" class="blob-num js-line-number" data-line-number="1610"></td>
        <td id="LC1610" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>for</span> <span class=pl-kos>(</span><span class=pl-k>var</span> <span class=pl-s1>key</span> <span class=pl-k>in</span> <span class=pl-s1>keyBindings</span><span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1611" class="blob-num js-line-number" data-line-number="1611"></td>
        <td id="LC1611" class="blob-code blob-code-inner js-file-line">		<span class=pl-k>if</span> <span class=pl-kos>(</span> <span class=pl-s1>keyBindings</span><span class=pl-kos>[</span><span class=pl-s1>key</span><span class=pl-kos>]</span> <span class=pl-kos>)</span> <span class=pl-kos>{</span></td>
      </tr>
      <tr>
        <td id="L1612" class="blob-num js-line-number" data-line-number="1612"></td>
        <td id="LC1612" class="blob-code blob-code-inner js-file-line">			<span class=pl-v>Reveal</span><span class=pl-kos>.</span><span class=pl-en>addKeyBinding</span><span class=pl-kos>(</span> <span class=pl-s1>keyBindings</span><span class=pl-kos>[</span><span class=pl-s1>key</span><span class=pl-kos>]</span><span class=pl-kos>,</span> <span class=pl-v>RevealChalkboard</span><span class=pl-kos>[</span><span class=pl-s1>key</span><span class=pl-kos>]</span> <span class=pl-kos>)</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1613" class="blob-num js-line-number" data-line-number="1613"></td>
        <td id="LC1613" class="blob-code blob-code-inner js-file-line">		<span class=pl-kos>}</span></td>
      </tr>
      <tr>
        <td id="L1614" class="blob-num js-line-number" data-line-number="1614"></td>
        <td id="LC1614" class="blob-code blob-code-inner js-file-line">	<span class=pl-kos>}</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1615" class="blob-num js-line-number" data-line-number="1615"></td>
        <td id="LC1615" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1616" class="blob-num js-line-number" data-line-number="1616"></td>
        <td id="LC1616" class="blob-code blob-code-inner js-file-line">	<span class=pl-k>return</span> <span class=pl-smi>this</span><span class=pl-kos>;</span></td>
      </tr>
      <tr>
        <td id="L1617" class="blob-num js-line-number" data-line-number="1617"></td>
        <td id="LC1617" class="blob-code blob-code-inner js-file-line"><span class=pl-kos>}</span><span class=pl-kos>;</span></td>
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
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/rajgoel/reveal.js-plugins/blame/8127033db8a223497d66ebddea08d4e829c7d297/chalkboard/plugin.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/rajgoel/reveal.js-plugins/issues/new">Reference in new issue</a></li>
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
     data-tagsearch-url="/rajgoel/reveal.js-plugins/find-definition"
     data-tagsearch-ref="master"
     data-tagsearch-path="chalkboard/plugin.js"
     data-tagsearch-lang="JavaScript"
     data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:48757764,&quot;ref&quot;:&quot;master&quot;,&quot;language&quot;:&quot;JavaScript&quot;,&quot;originating_url&quot;:&quot;https://github.com/rajgoel/reveal.js-plugins/blob/master/chalkboard/plugin.js&quot;,&quot;user_id&quot;:3624059}}"
     data-hydro-click-hmac="f060d2545b857b1f7a57fea2f7afa8a01e978c3c31e55311310038dcf16ae98a">
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

