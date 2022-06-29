<script setup lang="ts">
  import { toRefs, ref, watch, inject } from 'vue';
  import { AxiosInstance, AxiosResponse } from 'axios';
  import useSettingStore from './store';

  const axios = inject('axios') as AxiosInstance;
  interface Props {
    show: boolean;
  }
  interface Emits {
    (e: 'ok'): void;
    (e: 'cancel'): void;
  }

  const settingStore = useSettingStore(); // 获取到store的实例

  const emit = defineEmits<Emits>();
  const props = defineProps<Props>();
  const { show } = toRefs(props);
  const language = ref(settingStore.language);
  const theme = ref(settingStore.theme);
  const onSubmit = () => {
    console.log('Setting onSubmit', language.value, theme.value);
    settingStore
      .change(
        {
          language: language.value,
          theme: theme.value
        },
        true
      )
      .finally(() => {
        emit('ok');
        // window.location.reload();
      });
  };
  const onCancel = () => {
    emit('cancel');
  };
  const settingOption = ref({});
  watch(show, (nv, ov) => {
    console.log('watch show', nv, ov);
    if (nv) {
      axios
        .get('/setting-options')
        .then((res: AxiosResponse) => {
          console.log('get /setting-options success', res);
          settingOption.value = res.data;
        })
        .catch((err: Error) =>
          console.log('get /setting-options failure', err)
        );
    }
  });
</script>
<template>
  <van-popup
    v-model:show="show"
    position="right"
    class="popup-container"
    :style="{ width: '100%', height: '100%' }"
  >
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-for="(value, key, index) in settingOption"
          :key="index"
          :name="key"
          :label="value['label']"
        >
          <template v-if="key === 'language'" #input>
            <van-radio-group v-model="language" direction="horizontal">
              <van-radio
                v-for="(item, i) in value['options']"
                :key="i"
                :name="item['value']"
                >{{ item['label'] }}
              </van-radio>
            </van-radio-group>
          </template>
          <template v-else-if="key === 'theme'" #input>
            <van-radio-group v-model="theme" direction="horizontal">
              <van-radio
                v-for="(item, i) in value['options']"
                :key="i"
                :name="item['value']"
                >{{ item['label'] }}
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </van-cell-group>
      <div class="btn-wrap">
        <van-button block type="primary" native-type="submit">
          {{ $t('common.confirm') }}
        </van-button>
        <van-button block @click="onCancel">{{
          $t('common.cancel')
        }}</van-button>
      </div>
    </van-form>
  </van-popup>
</template>
<style lang="less" scoped>
  .popup-container {
    position: relative;
    .btn-wrap {
      position: absolute;
      bottom: 10px;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 90%;
      button:not(:first-child) {
        margin-top: 5px;
      }
    }
  }
</style>
