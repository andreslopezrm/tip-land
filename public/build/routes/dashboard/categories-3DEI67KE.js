import {
  React,
  init_react
} from "/build/_shared/chunk-SPRLBSB7.js";

// browser-route-module:routes/dashboard/categories.tsx?browser
init_react();

// app/routes/dashboard/categories.tsx
init_react();

// app/components/dash-header.tsx
init_react();
function DashHeader({ title }) {
  return /* @__PURE__ */ React.createElement("section", {
    className: "flex justify-between px-2 py-3"
  }, /* @__PURE__ */ React.createElement("h1", null, title), /* @__PURE__ */ React.createElement("button", null, "Logout"));
}

// app/routes/dashboard/categories.tsx
function DashboardCategoryRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Categories"
  }));
}
export {
  DashboardCategoryRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/categories-3DEI67KE.js.map