import type { Config } from "@react-router/dev/config";

export default {
  // Tells the framework your code is in "src"
  appDirectory: "src", 
  ssr: false, 
  async prerender() {
    return ["/", "/about", "/services", "/contact"];
  },
} satisfies Config;
