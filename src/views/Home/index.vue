<template>
  <div class="home">
    <div>欢迎光临</div>
    <Button type="primary" @click="toLogin">Login</Button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Button } from "ant-design-vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  components: {
    Button,
  },
  created() {
    const store = useStore();
    const token = computed(() => store.getters["loginStore/getToken"]).value;
    if (token != "success") {
      const router = useRouter();
      router.push({ name: "Login" });
    }
  },
  setup() {
    const router = useRouter();
    const toLogin = () => router.push({ name: "Login" });

    return {
      toLogin,
    };
  },
});
</script>
