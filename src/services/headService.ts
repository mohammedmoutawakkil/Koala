import { ref } from "vue";

export default function HeaderService() {
    const links = ref([
        {
          id: 1,
          href: "#",
          icon: "twitter",
        },
        {
          id: 1,
          href: "#",
          icon: "discord",
        },
        {
          id: 1,
          href: "#",
          icon: "instagram",
        },
        {
          id: 1,
          href: "#",
          icon: "facebook",
        },
        {
          id: 1,
          href: "#",
          icon: "github",
        },
      ]);
  return {
    links,
  };
}
