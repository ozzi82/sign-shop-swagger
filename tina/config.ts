import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "heroContent",
        label: "Hero Content",
        path: "content/hero",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "string",
            name: "tagline",
            label: "Tagline",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image_url",
            label: "Background Image",
          },
          {
            type: "string",
            name: "button_text",
            label: "Primary Button Text",
          },
          {
            type: "string",
            name: "button_url",
            label: "Primary Button URL",
          },
          {
            type: "string",
            name: "secondary_button_text",
            label: "Secondary Button Text",
          },
          {
            type: "string",
            name: "secondary_button_url",
            label: "Secondary Button URL",
          },
          {
            type: "object",
            name: "stats",
            label: "Statistics",
            list: true,
            fields: [
              {
                type: "string",
                name: "icon",
                label: "Icon",
                options: ["Factory", "Truck", "Award", "Zap"],
              },
              {
                type: "string",
                name: "value",
                label: "Value",
              },
              {
                type: "string",
                name: "label",
                label: "Label",
              },
            ],
          },
        ],
      },
    ],
  },
});