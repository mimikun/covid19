<template>
  <div class="SideNavigation">
    <div class="SideNavigation-HeadingContainer sp-flex">
      <v-icon
        class="SideNavigation-HeadingIcon pc-none"
        :aria-label="$t('Navi Open')"
        @click="openNavi"
      >
        mdi-menu
      </v-icon>
      <nuxt-link to="/" class="SideNavigation-HeadingLink">
        <div class="SideNavigation-Logo">
          <img src="/logo.svg" alt="Aichi" />
        </div>
        <h1 class="SideNavigation-Heading">
          {{ $t('COVID-19') }}<br />{{ $t('Measures site (Unofficial)') }}
        </h1>
      </nuxt-link>
    </div>
    <v-divider class="SideNavigation-HeadingDivider" />
    <div class="sp-none" :class="{ open: isNaviOpen }">
      <v-icon
        class="SideNavigation-ListContainerIcon pc-none"
        :aria-label="$t('Navi Close')"
        @click="closeNavi"
      >
        mdi-close
      </v-icon>
      <v-list :flat="true">
        <v-container
          v-for="(item, i) in items"
          :key="i"
          class="SideNavigation-ListItemContainer"
          @click="closeNavi"
        >
          <ListItem :link="item.link" :icon="item.icon" :title="item.title" />
          <v-divider v-show="item.divider" class="SideNavigation-Divider" />
        </v-container>
      </v-list>
      <div class="SideNavigation-Footer">
        <div class="SideNavigation-SocialLinkContainer">
          <a
            href="https://twitter.com/stopcovid19ai"
            target="_blank"
            rel="noopener"
          >
            <img src="/twitter.png" alt="Twitter" />
          </a>
          <a
            href="https://github.com/code4nagoya/covid19"
            target="_blank"
            rel="noopener"
          >
            <img src="/github.png" alt="GitHub" />
          </a>
        </div>
        <div class="SideNavigation-SponsorLinkContainer">
          {{ $t('Powered by:') }}<br />
          <a href="https://www.sakura.ad.jp/" target="_blank" rel="noopener">
            <span class="image-title">{{ $t('SAKURA internet Inc.') }}</span>
            <img
              class="sakura-internet-logo"
              src="/sakura-internet.svg"
              width="172px"
              height="46.5px"
              :alt="$t('SAKURA internet Inc.')"
            />
          </a>
        </div>
        <!-- <small class="SideNavigation-Copyright" lang="en">
          Copyright &copy; 2020 Tokyo Metropolitan Government. All Rights
          Reserved.
        </small> -->
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ja": {
    "Navi Open": "サイドメニュー項目を開く",
    "Navi Close": "サイドメニュー項目を閉じる",
    "Aichi": "愛知県",
    "COVID-19": "新型コロナウイルス感染症",
    "Measures site (Unofficial)": "対策サイト(非公式)",
    "Aichi Prefecture Government": "愛知県",
    "Tokyo COVID-19 Task Force": "新型コロナウイルス感染症対策本部",
    "The latest updates": "県内の最新感染動向",
    "COVID-19 Countermeasures Site": "愛知県 新型コロナウイルス感染症対策サイト",
    "Government official LINE": "愛知県-新型コロナ対策パーソナルサポート(LINE)",
    "About us": "当サイトについて",
    "Do not Lose To COVID-19, Nagoya(Twitter)": "コロナに負けるなナゴヤ(Twitter)",
    "Other Areas Countermeasure Site": "他地域の対策サイト",
    "Powered by:": "Powered by:",
    "SAKURA internet Inc.": "さくらインターネット",
    "Nagoya COVID-19 Special Site": "名古屋市新型コロナウイルス感染症対策特設サイト"
  }
}
</i18n>

<script>
import ListItem from '@/components/ListItem'

export default {
  components: {
    ListItem
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    items() {
      return [
        {
          icon: 'mdi-chart-timeline-variant',
          title: this.$t('The latest updates'),
          link: '/',
          divider: true
        },
        {
          title: this.$t('About us'),
          link: '/about',
          divider: true
        },
        {
          title: this.$t('COVID-19 Countermeasures Site'),
          link: 'https://www.pref.aichi.jp/site/covid19-aichi/'
        },
        {
          title: this.$t('Government official LINE'),
          link: 'https://liny.link/r/1653954481-KA3xJl9g?lp=8Zhyvz'
        },
        {
          title: this.$t('Nagoya COVID-19 Special Site'),
          link:
            'https://nagoya-bousai.maps.arcgis.com/apps/Cascade/index.html?appid=5da3d7a15c4842fb8a46ecd93a9e644f'
        },
        {
          title: this.$t('Do not Lose To COVID-19, Nagoya(Twitter)'),
          link: 'http://twitter.com/corona_nagoya',
          divider: true
        },
        {
          title: this.$t('Other Areas Countermeasure Site'),
          link: 'https://stopcovid19.code4japan.org/'
        }
      ]
    },
    isClass() {
      return item => (item.title.charAt(0) === '【' ? 'kerningLeft' : '')
    }
  },
  methods: {
    openNavi() {
      this.$emit('openNavi')
    },
    closeNavi() {
      this.$emit('closeNavi')
    }
  }
}
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  height: 100%;
  background: $white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  &-HeadingContainer {
    padding: 1.25em 0 1.25em 1.25em;
    align-items: center;
    @include lessThan($small) {
      padding: 7px 0 7px 20px;
    }
  }
  &-HeadingIcon {
    margin-right: 16px;
  }
  &-HeadingLink {
    @include lessThan($small) {
      display: flex;
      align-items: center;
    }
    text-decoration: none;
  }
  &-ListContainerIcon {
    margin: 24px 16px 0;
  }
  &-ListItemContainer {
    padding: 2px 20px;
  }
  &-Logo {
    margin: 20px 16px 0 0;
    width: 110px;
    @include lessThan($small) {
      margin-top: 0;
    }
  }
  &-Heading {
    margin-top: 8px;
    font-size: 13px;
    color: #898989;
    padding: 0.5em 0;
    text-decoration: none;
    @include lessThan($small) {
      margin-top: 0;
    }
  }
  &-HeadingDivider {
    margin: 0px 20px 4px;
    @include lessThan($small) {
      display: none;
    }
  }
  &-Divider {
    margin: 12px 0;
  }
  &-Footer {
    padding: 20px;
    background-color: $white;
  }
  &-SocialLinkContainer {
    display: flex;
    & img {
      width: 30px;
      &:first-of-type {
        margin-right: 10px;
      }
    }
  }
  &-SponsorLinkContainer {
    overflow: visible;
    padding-top: 0.8rem;
    white-space: normal;
    font-size: 0.82rem;
    color: $gray-1;
    & a {
      color: #333;
      text-decoration: none;
    }
    & a:hover {
      opacity: 0.6;
    }
    & img {
      padding-bottom: 0.9rem;
    }
    & img.sakura-internet-logo {
      margin: -6px 0 0 -14px;
      width: 176px;
    }
    & .image-title {
      display: inline-block;
      width: 0;
      height: 1.5rem;
      overflow: hidden;
    }
    & .no-image-title {
      display: inline-block;
      line-height: 1.8rem;
      color: #444;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
  &-Copyright {
    display: block;
    margin-top: 10px;
    font-size: 8px;
    line-height: 1.2;
    color: $gray-1;
    font-weight: bold;
  }
}
.open {
  @include lessThan($small) {
    position: fixed;
    overflow: auto;
    top: 0;
    bottom: 0;
    left: 0;
    display: block !important;
    width: 100%;
    z-index: z-index-of(opened-side-navigation);
    background-color: $white;
  }
}
@include largerThan($small) {
  .pc-none {
    display: none;
  }
}
@include lessThan($small) {
  .sp-flex {
    display: flex;
  }
  .sp-none {
    display: none;
  }
}
</style>
