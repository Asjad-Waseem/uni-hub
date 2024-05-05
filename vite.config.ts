import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
// });

export default defineConfig((props) => {
  const env = loadEnv(props.mode, process.cwd(), "VITE_APP");
  const envWithProcessPrefix = {
    "process.env": `${JSON.stringify(env)}`,
  };

  return {
    plugins: [react(), tsconfigPaths()],
    define: envWithProcessPrefix,
  };
});
