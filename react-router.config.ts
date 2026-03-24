import type { Config } from "@react-router/dev/config";

export default {
  // We set ssr to false because you're deploying as a Static Site (SSG)
  ssr: false, 
  
  // List the pages you want to be pre-rendered for SEO
  async prerender() {
    return ["/", "/about", "/services", "/contact"];
  },
} satisfies Config;
