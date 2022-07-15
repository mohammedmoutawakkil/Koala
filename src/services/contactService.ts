import { reactive, ref } from "vue";
import { required, email } from "@vuelidate/validators";
export default function ContactService() {
  const state = reactive({
    email: "",
    fullname: "",
    message: "",
  });
  
  //use you own Key
  const recaptchaKey = 'example';
  const globalerror = ref("");
  const rules = reactive({
    email: { required, email },
    fullname: { required },
    message: { required },
  });
  return {
    state,
    rules,
    recaptchaKey,
    globalerror
  };
}
