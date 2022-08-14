import {
  DashHeader
} from "/build/_shared/chunk-7Q46JD7Y.js";
import {
  require_dist
} from "/build/_shared/chunk-FRO2JKJQ.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-47DFYYCO.js";

// browser-route-module:routes/dashboard/perfil.tsx?browser
init_react();

// app/routes/dashboard/perfil.tsx
init_react();
var import_remix = __toESM(require_dist());
function DashboardPerfilRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Perfil"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "auth auth-perfil mt-8"
  }, /* @__PURE__ */ React.createElement(import_remix.UserProfile, null)));
}
export {
  DashboardPerfilRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/perfil-OHBXYUUX.js.map