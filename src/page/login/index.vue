<script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import Setting from '@/page/setting/index.vue';
  import logo from '@/assets/logo.png';
  import useLoginStore from './store';
  import { FieldType } from 'vant';

  const store = useLoginStore();
  const username = ref(store.username);
  const password = ref(store.password);
  const rememberPwd = ref(store.rememberPwd);
  const type = ref<FieldType>('password');
  const rigthIcon = computed(() => {
    if (type.value === 'password') {
      return 'closed-eye';
    } else {
      return 'eye-o';
    }
  });
  const router = useRouter();
  const onSubmit = () => {
    console.log('Login onSubmit');
    if (rememberPwd.value) {
      const form = {
        username: username.value,
        password: password.value,
        rememberPwd: rememberPwd.value
      };
      store
        .change({
          form
        })
        .finally(() => {
          router.push('/index');
        });
    } else {
      router.push('/index');
    }
  };
  const handleSwitchChange = (value: boolean) => {
    console.log('Login handleSwitchChange');
    if (value) {
      const form = {
        username: username.value,
        password: password.value,
        rememberPwd: value
      };
      store.change({
        form
      });
    } else {
      store.removeRemember();
    }
  };
  const handleClickRightIcon = () => {
    console.log('Login handleClickRightIcon');
    type.value = type.value === 'password' ? 'text' : 'password';
  };
  const settingShow = ref(false);
  const handleSettingClick = () => {
    console.log('Login handleSettingClick');
    settingShow.value = true;
  };
  const handlePopupOk = () => {
    console.log('Login handlePopupOk');
    settingShow.value = false;
  };
  const goToHelp = () => {
    router.push('/help');
  };
</script>
<template>
  <div class="login-container">
    <div class="tool-wrap">
      <van-icon name="question-o" size="20" @click="goToHelp" />
      <span style="margin: 0 5px"></span>
      <van-icon name="setting-o" size="20" @click="handleSettingClick" />
    </div>
    <div><img alt="Vue logo" :src="logo" /></div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          :name="$t('login.username')"
          :label="$t('login.username')"
          :placeholder="$t('login.username')"
          :rules="[{ required: true, message: $t('login.usernameMessage') }]"
        />
        <van-field
          v-model="password"
          :type="type"
          :name="$t('login.password')"
          :label="$t('login.password')"
          :placeholder="$t('login.password')"
          :right-icon="rigthIcon"
          :rules="[{ required: true, message: $t('login.passwordMessage') }]"
          @click-right-icon="handleClickRightIcon"
        />
        <van-field name="switch" :label="$t('login.remember')">
          <template #input>
            <van-switch
              v-model="rememberPwd"
              size="20"
              @change="handleSwitchChange"
            />
          </template>
        </van-field>
      </van-cell-group>
      <div class="btn-wrap">
        <van-button block type="primary" native-type="submit">
          {{ $t('common.submit') }}
        </van-button>
      </div>
      <Setting
        :show="settingShow"
        @ok="handlePopupOk"
        @cancel="settingShow = false"
      />
    </van-form>
  </div>
</template>
<style lang="less" scoped>
  .login-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .tool-wrap {
      position: absolute;
      top: 0;
      right: 0;
      padding: 10px;
    }
    .btn-wrap {
      margin: 25px 16px 0 16px;
    }
  }
</style>
