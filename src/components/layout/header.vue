<template>
  <header id="header" class="header">
    <div class="inner">
      <logo-area />
      <gnb-list />
      <util-list />
    </div>
  </header>
</template>

<script>
import logoArea from '@/components/logo.vue';
import gnbList from '@/components/gnb-list.vue';
import UtilList from '@/components/util-list.vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'header-wrap',
  components: {
    logoArea,
    gnbList,
    UtilList,
  },
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    return {
      t,
    };
  },
};
</script>

<style lang="scss">
.header {
  position:fixed;
  left:0;
  top:0;
  width:100%;
  background:transparent;
  transition: background-color .1s linear;
  &:hover {
    background:#fff;
    transition: background-color .1s linear;
    .gnb-list{
      > li {
        > a {
          color:#000;
          transition: color .2s ease-out;
        }
      }
    }
  }
  z-index:10;
  &.is-fixed {
    background:rgba(255,255,255,1);
    transition: background-color .2s linear, boxShadow .2s linear;
    box-shadow: 10px 10px 10px rgba(0,0,0,.1);
    .gnb-list {
      > li {
        a {
          color:#000;
          transition: color .2s ease-out;
        }
      }
    }
  }
  .inner {
    display:flex;
    align-items: center;
    justify-content: space-between;
    max-width:1320px;
    width:100%;
    margin:0 auto;
  }
}

.gnb {
  width:100%;
  .gnb-list {
    display:flex;
    align-items: center;
    justify-content: center;
    padding:0;
    > li {
      &.is-on,
      &:hover {
        > a {
          &:before {
            display:block;
            width: 100%;
            transition: width .2s ease-in;
            z-index:1
          }
        }
      }
      > a {
        position: relative;
        display: flex;
        align-items: center;
        text-align: center;
        height: 90px;
        padding: 0 2rem;
        line-height: 1;
        color: #fff;
        transition: color .2s ease-out;

        &:before {
          content: "";
          display:none;
          position: absolute;
          width: 0;
          left: 50%;
          bottom: 0;
          height: 4px;
          background: #333;
          transform: translateX(-50%);
          transition: width .2s ease-out;
          z-index:-1;
        }

      }
      &:hover {
        .sub-list{
          display:flex;
          align-items: center;
          justify-content: center;
          background:#fff;
          z-index:1;
        }
      }
    }

  }
  .sub-list {
    display:none;
    position:absolute;
    left:0;
    top:100%;
    width:100%;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
    z-index:-1;
    > li {
      border-right:1px solid #ddd;
      &:first-child {
        border-right:1px solid #ddd;
      }
      > a {
        display:block;
        width:100%;
        text-align:center;
        padding:1rem;
        box-sizing: border-box;
        min-width:250px;
        line-height:1;
        &:hover {
          background:#ddd;
          color:#ff564d;
        }
      }
    }
  }
}
</style>
