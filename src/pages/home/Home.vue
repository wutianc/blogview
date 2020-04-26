<template>
  <div>
    <header id="header" class="header" itemscope itemtype="http://schema.org/WPHeader">
      <div class="header-inner">
        <div class="site-brand-wrapper">
          <div class="site-meta">
            <div class="custom-logo-site-title">
              <a href="/" class="brand" rel="start" style="opacity: 1;">
                <span class="logo-line-before">
                  <i class style="transform: translateX(100%);"></i>
                </span>
                <span class="site-title" style="opacity: 1; top: 0px;">Mr.Wu</span>
                <span class="logo-line-after">
                  <i class style="transform: translateX(-100%);"></i>
                </span>
              </a>
            </div>
            <h1
              class="site-subtitle"
              itemprop="description"
              style="opacity: 1; top: 0px;"
            >一个专注技术分享的小哥哥</h1>
          </div>
          <div class="site-nav-toggle">
          </div>
        </div>
        <nav class="site-nav">
          <ul id="menu" class="menu">
            <li class="menu-item menu-item-home" style="opacity: 1; transform: translateY(0px);">
              <a href="/" rel="section">
                <i class="menu-item-icon fa fa-fw fa-home"></i>
                <br />首页
              </a>
            </li>
            <li
              class="menu-item menu-item-categories"
              style="opacity: 1; transform: translateY(0px);"
            >
              <a href="/categories/" rel="section">
                <i class="menu-item-icon fa fa-fw fa-bookmark"></i>
                <br />分类
              </a>
            </li>
            <li
              class="menu-item menu-item-archives"
              style="opacity: 1; transform: translateY(0px);"
            >
              <a href="/archives/" rel="section">
                <i class="menu-item-icon fa fa-fw fa-archive"></i>
                <br />归档
              </a>
            </li>
            <li class="menu-item menu-item-互动" style="opacity: 1; transform: translateY(0px);">
              <a href="/guestbook/" rel="section">
                <i class="menu-item-icon fa fa-fw fa-comments"></i>
                <br />互动
              </a>
            </li>
            <li class="menu-item menu-item-友链" style="opacity: 1; transform: translateY(0px);">
              <a href="/friendchain/" rel="section">
                <i class="menu-item-icon fa fa-fw fa-link"></i>
                <br />友链
              </a>
            </li>
            <li
              class="menu-item menu-item-about menu-item-active"
              style="opacity: 1; transform: translateY(0px);"
            >
              <a href="/about/" rel="section">
                <i class="menu-item-icon fa fa-fw fa-user"></i>
                <br />关于
              </a>
            </li>
            <li class="menu-item menu-item-search" style="opacity: 1; transform: translateY(0px);">
              <a href="javascript:;" class="popup-trigger">
                <i class="menu-item-icon fa fa-search fa-fw"></i>
                <br />搜索
              </a>
            </li>
          </ul>
          <div class="site-search">
            <div class="popup search-popup local-search-popup">
              <div class="local-search-header clearfix">
                <span class="search-icon">
                  <i class="fa fa-search"></i>
                </span>
                <span class="popup-btn-close">
                  <i class="fa fa-times-circle"></i>
                </span>
                <div class="local-search-input-wrapper">
                  <input
                    autocomplete="off"
                    placeholder="搜索..."
                    spellcheck="false"
                    type="text"
                    id="local-search-input"
                  />
                </div>
              </div>
              <div id="local-search-result"></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
<script>
export default {};
</script>
