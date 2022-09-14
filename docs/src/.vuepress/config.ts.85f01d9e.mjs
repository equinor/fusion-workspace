// src/.vuepress/config.ts
import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";
var theme_default = hopeTheme({
  logo: "/fusion.png",
  repo: "equinor/fusion-workspace",
  hostname: "#",
  docsBranch: "main",
  docsDir: "vue-press/src",
  darkmode: "auto",
  themeColor: {
    default: "red"
  },
  navbar: [
    {
      text: "Tech-Spec",
      link: "/tech-spec/"
    },
    {
      text: "Projects",
      link: "/projects/"
    }
  ],
  sidebar: [
    {
      text: "Tech-Spec",
      link: "/tech-spec/",
      collapsable: true,
      children: [
        {
          text: "Workspace Core Spec",
          link: "/tech-spec/workspace-core"
        }
      ]
    },
    {
      text: "Projects",
      link: "/projects/",
      collapsable: true,
      children: [
        {
          text: "Workspace Core",
          link: "/projects/workspace-core/",
          collapsable: false,
          children: [
            {
              text: "Observable",
              link: "/projects/workspace-core/observable"
            },
            {
              text: "Mediator",
              link: "/projects/workspace-core/mediator"
            },
            {
              text: "Services",
              link: "/projects/workspace-core/services"
            }
          ]
        }
      ]
    }
  ],
  plugins: {
    mdEnhance: {
      mermaid: true,
      codetabs: true,
      container: true,
      tasklist: true,
      vuePlayground: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      }
    }
  }
});

// src/.vuepress/config.ts
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";
var __vite_injected_original_import_meta_url = "file:///C:/Projects/Fusion/fusion-workspace/docs/src/.vuepress/config.ts";
var __dirname = getDirname(__vite_injected_original_import_meta_url);
var config_default = defineUserConfig({
  title: "Fusion Workspace",
  description: "Fusion Workspace is a library built with a controller-based structure in mind. Core functionality tab navigation, data handling, and allowing you to register controllers that react around page change / config change and data changes.",
  theme: theme_default,
  plugins: [
    searchPlugin(),
    registerComponentsPlugin({
      components: {
        TagList: path.resolve(__dirname, "./components/TagList.vue"),
        ModuleBadge: path.resolve(__dirname, "./components/ModuleBadge.vue")
      }
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6L1Byb2plY3RzL0Z1c2lvbi9mdXNpb24td29ya3NwYWNlL2RvY3Mvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcUHJvamVjdHNcXFxcRnVzaW9uXFxcXGZ1c2lvbi13b3Jrc3BhY2VcXFxcZG9jc1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovUHJvamVjdHMvRnVzaW9uL2Z1c2lvbi13b3Jrc3BhY2UvZG9jcy9zcmMvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IHNlYXJjaFBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tc2VhcmNoJztcclxuaW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gJ3Z1ZXByZXNzJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4vdGhlbWUnO1xyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXJDb21wb25lbnRzUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1yZWdpc3Rlci1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgZ2V0RGlybmFtZSwgcGF0aCB9IGZyb20gJ0B2dWVwcmVzcy91dGlscyc7XHJcblxyXG5jb25zdCBfX2Rpcm5hbWUgPSBnZXREaXJuYW1lKGltcG9ydC5tZXRhLnVybCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuXHR0aXRsZTogJ0Z1c2lvbiBXb3Jrc3BhY2UnLFxyXG5cclxuXHRkZXNjcmlwdGlvbjpcclxuXHRcdCdGdXNpb24gV29ya3NwYWNlIGlzIGEgbGlicmFyeSBidWlsdCB3aXRoIGEgY29udHJvbGxlci1iYXNlZCBzdHJ1Y3R1cmUgaW4gbWluZC4gQ29yZSBmdW5jdGlvbmFsaXR5IHRhYiBuYXZpZ2F0aW9uLCBkYXRhIGhhbmRsaW5nLCBhbmQgYWxsb3dpbmcgeW91IHRvIHJlZ2lzdGVyIGNvbnRyb2xsZXJzIHRoYXQgcmVhY3QgYXJvdW5kIHBhZ2UgY2hhbmdlIC8gY29uZmlnIGNoYW5nZSBhbmQgZGF0YSBjaGFuZ2VzLicsXHJcblx0dGhlbWUsXHJcblx0cGx1Z2luczogW1xyXG5cdFx0c2VhcmNoUGx1Z2luKCksXHJcblx0XHRyZWdpc3RlckNvbXBvbmVudHNQbHVnaW4oe1xyXG5cdFx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdFx0VGFnTGlzdDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vY29tcG9uZW50cy9UYWdMaXN0LnZ1ZScpLFxyXG5cdFx0XHRcdE1vZHVsZUJhZGdlOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9jb21wb25lbnRzL01vZHVsZUJhZGdlLnZ1ZScpLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSksXHJcblx0XSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzovUHJvamVjdHMvRnVzaW9uL2Z1c2lvbi13b3Jrc3BhY2UvZG9jcy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxQcm9qZWN0c1xcXFxGdXNpb25cXFxcZnVzaW9uLXdvcmtzcGFjZVxcXFxkb2NzXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1Byb2plY3RzL0Z1c2lvbi9mdXNpb24td29ya3NwYWNlL2RvY3Mvc3JjLy52dWVwcmVzcy90aGVtZS50c1wiO2ltcG9ydCB7IGhvcGVUaGVtZSwgSG9wZVRoZW1lU2lkZWJhckFycmF5Q29uZmlnIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtaG9wZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xyXG5cdGxvZ286ICcvZnVzaW9uLnBuZycsXHJcblx0cmVwbzogJ2VxdWlub3IvZnVzaW9uLXdvcmtzcGFjZScsXHJcblx0aG9zdG5hbWU6ICcjJyxcclxuXHRkb2NzQnJhbmNoOiAnbWFpbicsXHJcblx0ZG9jc0RpcjogJ3Z1ZS1wcmVzcy9zcmMnLFxyXG5cdGRhcmttb2RlOiAnYXV0bycsXHJcblx0dGhlbWVDb2xvcjoge1xyXG5cdFx0ZGVmYXVsdDogJ3JlZCcsXHJcblx0fSxcclxuXHRuYXZiYXI6IFtcclxuXHRcdHtcclxuXHRcdFx0dGV4dDogJ1RlY2gtU3BlYycsXHJcblx0XHRcdGxpbms6ICcvdGVjaC1zcGVjLycsXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHR0ZXh0OiAnUHJvamVjdHMnLFxyXG5cdFx0XHRsaW5rOiAnL3Byb2plY3RzLycsXHJcblx0XHR9LFxyXG5cdFx0Ly8ge1xyXG5cdFx0Ly8gXHR0ZXh0OiAnVGFncycsXHJcblx0XHQvLyBcdGxpbms6ICcvdGFncy8nLFxyXG5cdFx0Ly8gfSxcclxuXHRdLFxyXG5cdHNpZGViYXI6IFtcclxuXHRcdHtcclxuXHRcdFx0dGV4dDogJ1RlY2gtU3BlYycsXHJcblx0XHRcdGxpbms6ICcvdGVjaC1zcGVjLycsXHJcblx0XHRcdGNvbGxhcHNhYmxlOiB0cnVlLFxyXG5cdFx0XHRjaGlsZHJlbjogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHRleHQ6ICdXb3Jrc3BhY2UgQ29yZSBTcGVjJyxcclxuXHRcdFx0XHRcdGxpbms6ICcvdGVjaC1zcGVjL3dvcmtzcGFjZS1jb3JlJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRdLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0dGV4dDogJ1Byb2plY3RzJyxcclxuXHRcdFx0bGluazogJy9wcm9qZWN0cy8nLFxyXG5cdFx0XHRjb2xsYXBzYWJsZTogdHJ1ZSxcclxuXHRcdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHR0ZXh0OiAnV29ya3NwYWNlIENvcmUnLFxyXG5cdFx0XHRcdFx0bGluazogJy9wcm9qZWN0cy93b3Jrc3BhY2UtY29yZS8nLFxyXG5cdFx0XHRcdFx0Y29sbGFwc2FibGU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHRleHQ6ICdPYnNlcnZhYmxlJyxcclxuXHRcdFx0XHRcdFx0XHRsaW5rOiAnL3Byb2plY3RzL3dvcmtzcGFjZS1jb3JlL29ic2VydmFibGUnLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dGV4dDogJ01lZGlhdG9yJyxcclxuXHRcdFx0XHRcdFx0XHRsaW5rOiAnL3Byb2plY3RzL3dvcmtzcGFjZS1jb3JlL21lZGlhdG9yJyxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHRleHQ6ICdTZXJ2aWNlcycsXHJcblx0XHRcdFx0XHRcdFx0bGluazogJy9wcm9qZWN0cy93b3Jrc3BhY2UtY29yZS9zZXJ2aWNlcycsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdF0sXHJcblx0XHR9LFxyXG5cdF0gYXMgSG9wZVRoZW1lU2lkZWJhckFycmF5Q29uZmlnLFxyXG5cdHBsdWdpbnM6IHtcclxuXHRcdG1kRW5oYW5jZToge1xyXG5cdFx0XHRtZXJtYWlkOiB0cnVlLFxyXG5cdFx0XHRjb2RldGFiczogdHJ1ZSxcclxuXHRcdFx0Y29udGFpbmVyOiB0cnVlLFxyXG5cdFx0XHR0YXNrbGlzdDogdHJ1ZSxcclxuXHRcdFx0dnVlUGxheWdyb3VuZDogdHJ1ZSxcclxuXHRcdFx0cHJlc2VudGF0aW9uOiB7XHJcblx0XHRcdFx0cGx1Z2luczogWydoaWdobGlnaHQnLCAnbWF0aCcsICdzZWFyY2gnLCAnbm90ZXMnLCAnem9vbSddLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVixTQUFTLG9CQUFvQjtBQUMvVyxTQUFTLHdCQUF3Qjs7O0FDRCtTLFNBQVMsaUJBQThDO0FBRXZZLElBQU8sZ0JBQVEsVUFBVTtBQUFBLEVBQ3hCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxFQUNaLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxFQUNWLFlBQVk7QUFBQSxJQUNYLFNBQVM7QUFBQSxFQUNWO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUDtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1A7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUDtBQUFBLEVBS0Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1A7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDVDtBQUFBLGNBQ0MsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLFlBQ1A7QUFBQSxZQUNBO0FBQUEsY0FDQyxNQUFNO0FBQUEsY0FDTixNQUFNO0FBQUEsWUFDUDtBQUFBLFlBQ0E7QUFBQSxjQUNDLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxZQUNQO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLFdBQVc7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLGVBQWU7QUFBQSxNQUNmLGNBQWM7QUFBQSxRQUNiLFNBQVMsQ0FBQyxhQUFhLFFBQVEsVUFBVSxTQUFTLE1BQU07QUFBQSxNQUN6RDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzs7O0FEekVELFNBQVMsZ0NBQWdDO0FBQ3pDLFNBQVMsWUFBWSxZQUFZO0FBTHFMLElBQU0sMkNBQTJDO0FBT3ZRLElBQU0sWUFBWSxXQUFXLHdDQUFlO0FBRTVDLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDL0IsT0FBTztBQUFBLEVBRVAsYUFDQztBQUFBLEVBQ0Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLHlCQUF5QjtBQUFBLE1BQ3hCLFlBQVk7QUFBQSxRQUNYLFNBQVMsS0FBSyxRQUFRLFdBQVcsMEJBQTBCO0FBQUEsUUFDM0QsYUFBYSxLQUFLLFFBQVEsV0FBVyw4QkFBOEI7QUFBQSxNQUNwRTtBQUFBLElBQ0QsQ0FBQztBQUFBLEVBQ0Y7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
