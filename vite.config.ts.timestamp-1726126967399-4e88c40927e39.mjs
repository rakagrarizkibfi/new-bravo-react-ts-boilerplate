// vite.config.ts
import react from "file:///C:/Users/PHOENIX/Documents/Work/new-bravo-react-ts-boilerplate/.yarn/__virtual__/@vitejs-plugin-react-virtual-c6a692639b/4/AppData/Local/Yarn/Berry/cache/@vitejs-plugin-react-npm-4.3.1-cbe92983ea-10c0.zip/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig, loadEnv } from "file:///C:/Users/PHOENIX/Documents/Work/new-bravo-react-ts-boilerplate/.yarn/__virtual__/vite-virtual-5b595a1718/4/AppData/Local/Yarn/Berry/cache/vite-npm-5.4.4-274ee22b4e-10c0.zip/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///C:/Users/PHOENIX/Documents/Work/new-bravo-react-ts-boilerplate/.yarn/__virtual__/vite-tsconfig-paths-virtual-c2a60649d8/4/AppData/Local/Yarn/Berry/cache/vite-tsconfig-paths-npm-3.6.0-11c8402342-10c0.zip/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const serverPort = parseInt(`${process.env.VITE_PORT}`, 10) || 3e3;
  return defineConfig({
    build: {
      outDir: "./build",
      sourcemap: false
    },
    plugins: [react(), tsconfigPaths()],
    resolve: {
      preserveSymlinks: true
    },
    server: {
      port: serverPort
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQSE9FTklYXFxcXERvY3VtZW50c1xcXFxXb3JrXFxcXG5ldy1icmF2by1yZWFjdC10cy1ib2lsZXJwbGF0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcUEhPRU5JWFxcXFxEb2N1bWVudHNcXFxcV29ya1xcXFxuZXctYnJhdm8tcmVhY3QtdHMtYm9pbGVycGxhdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1BIT0VOSVgvRG9jdW1lbnRzL1dvcmsvbmV3LWJyYXZvLXJlYWN0LXRzLWJvaWxlcnBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyBDb25maWdFbnYgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9OiBDb25maWdFbnYpID0+IHtcclxuXHRwcm9jZXNzLmVudiA9IHsgLi4ucHJvY2Vzcy5lbnYsIC4uLmxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSkgfTtcclxuXHJcblx0Y29uc3Qgc2VydmVyUG9ydDogbnVtYmVyID0gcGFyc2VJbnQoYCR7cHJvY2Vzcy5lbnYuVklURV9QT1JUfWAsIDEwKSB8fCAzMDAwO1xyXG5cclxuXHRyZXR1cm4gZGVmaW5lQ29uZmlnKHtcclxuXHRcdGJ1aWxkOiB7XHJcblx0XHRcdG91dERpcjogXCIuL2J1aWxkXCIsXHJcblx0XHRcdHNvdXJjZW1hcDogZmFsc2UsXHJcblx0XHR9LFxyXG5cdFx0cGx1Z2luczogW3JlYWN0KCksIHRzY29uZmlnUGF0aHMoKV0sXHJcblx0XHRyZXNvbHZlOiB7XHJcblx0XHRcdHByZXNlcnZlU3ltbGlua3M6IHRydWUsXHJcblx0XHR9LFxyXG5cdFx0c2VydmVyOiB7XHJcblx0XHRcdHBvcnQ6IHNlcnZlclBvcnQsXHJcblx0XHR9LFxyXG5cdH0pO1xyXG59O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdYLE9BQU8sV0FBVztBQUUxWSxTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLG1CQUFtQjtBQUUxQixJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQWlCO0FBQ3ZDLFVBQVEsTUFBTSxFQUFFLEdBQUcsUUFBUSxLQUFLLEdBQUcsUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDLEVBQUU7QUFFaEUsUUFBTSxhQUFxQixTQUFTLEdBQUcsUUFBUSxJQUFJLFNBQVMsSUFBSSxFQUFFLEtBQUs7QUFFdkUsU0FBTyxhQUFhO0FBQUEsSUFDbkIsT0FBTztBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLElBQ1o7QUFBQSxJQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO0FBQUEsSUFDbEMsU0FBUztBQUFBLE1BQ1Isa0JBQWtCO0FBQUEsSUFDbkI7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNQO0FBQUEsRUFDRCxDQUFDO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
