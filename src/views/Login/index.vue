<template>
  <div class="cq-fixed-image w-screen h-screen">
    <div
      class="position-center-screen cq-theme-card w-300 h-290 p-30 border-radius-5 bg-white"
    >
      <div class="pb-30 pt-10 flex items-center justify-center">
        <span class="text-xl font-bold letter-spacing-2">系统登录</span>
      </div>
      <Form
        :model="formState"
        name="horizontal_login"
        autocomplete="on"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <FormItem
          name="username"
          :rules="[{ required: true, message: '请输入用户名' }]"
        >
          <Input v-model:value="formState.username" placeholder="用户名">
            <template #prefix>
              <UserOutlined />
            </template>
          </Input>
        </FormItem>

        <FormItem
          name="password"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <InputPassword v-model:value="formState.password" placeholder="密码">
            <template #prefix>
              <LockOutlined />
            </template>
          </InputPassword>
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            html-type="submit"
            class="w-full mt-5 border-radius-5 letter-spacing-2"
            :disabled="
              formState.username === '' || formState.password.length < 6
            "
          >
            登录
          </Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import type { ILoginData } from "./type";
import { useRouter } from "vue-router";
import { Form, FormProps, Button, Input, message } from "ant-design-vue";
const InputPassword = Input.Password;
const FormItem = Form.Item;
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { useStore, mapMutations } from "vuex";

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    Form,
    FormItem,
    Button,
    Input,
    InputPassword,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const formState = reactive<ILoginData>({
      username: "",
      password: "",
    });

    /**
     * @description 处理登录
     * @param values - 表单数据
     */
    const handleFinish: FormProps["onFinish"] = async (values: ILoginData) => {
      const { username, password } = values;
      if (username === "jack" && password === "redballoon") {
        store.commit("loginStore/setToken", "success");
        router.push({ name: "Home" });
      } else {
        message.error("用户名必须是:jack。密码必须是:redballoon");
      }
    };

    /**
     * @description 处理失败
     * @param errors - 错误信息
     */
    const handleFinishFailed: FormProps["onFinishFailed"] = errors => {
      console.log("错误信息:", errors);
    };

    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
});
</script>
