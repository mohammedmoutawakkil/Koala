import { ref } from "vue";

export default function FooterService() {
  function scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }
  const socials = ref([
    {
      id: 2,
      name: "Twitter",
      url: "#",
      class: "hover:text-Sky-500 duration-600",
    },
    {
      id: 3,
      name: "discord",
      url: "#",
      class: "hover:text-Sky-500 duration-600",
    },
    {
      id: 4,
      name: "instagram",
      url: "#",
      class: "hover:text-Sky-500 duration-600",
    },
    {
      id: 4,
      name: "facebook",
      url: "#",
      class: "hover:text-Sky-500 duration-600",
    },
    {
      id: 1,
      name: "GitHub",
      url: "#",
      class: "hover:text-Sky-800 duration-600",
    },
  ]);
  return {
    socials,
    scrollToTop
  };
}
