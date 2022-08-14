var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }), {
      onShellReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(new import_node.Response(body, {
          headers: responseHeaders,
          status: didError ? 500 : responseStatusCode
        })), pipe(body);
      },
      onShellError: (err) => {
        reject(err);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    });
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix = require("@clerk/remix"), import_remix2 = require("@clerk/remix");

// app/styles/app.css
var app_default = "/build/_assets/app-E7U3LWH6.css";

// app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "Tip Land",
  viewport: "width=device-width,initial-scale=1"
}), CatchBoundary = (0, import_remix2.ClerkCatchBoundary)(), loader = (args) => (0, import_ssr.rootAuthLoader)(args);
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}
var root_default = (0, import_remix.ClerkApp)(App);

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => DashboardRoute,
  loader: () => loader2
});
var import_ssr2 = require("@clerk/remix/ssr.server"), import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/components/dash-navbar.tsx
var import_react3 = require("@remix-run/react");

// app/utils/menu.ts
var menuItems = [
  {
    id: "home",
    title: "Home",
    path: "",
    completePath: "/dashboard"
  },
  {
    id: "tip",
    title: "Tips",
    path: "tips",
    completePath: "/dashboard/tips"
  },
  {
    id: "cat",
    title: "Categories",
    path: "categories",
    completePath: "/dashboard/categories"
  },
  {
    id: "stats",
    title: "Stats",
    path: "stats",
    completePath: "/dashboard/stats"
  },
  {
    id: "dev",
    title: "Developer",
    path: "developer",
    completePath: "/dashboard/developer"
  },
  {
    id: "perfil",
    title: "Perfil",
    path: "perfil",
    completePath: "/dashboard/perfil"
  }
];

// app/components/dash-navbar.tsx
function DashNavbar() {
  let { pathname } = (0, import_react3.useLocation)();
  return /* @__PURE__ */ React.createElement("nav", {
    className: "bg-gray-100 p-3 shadow md:w-56 md:px-6 md:py-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center md:gap-2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/forest.png",
    alt: "logo",
    width: "30"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "hidden uppercase font-extrabold md:block"
  }, "Tip Land")), /* @__PURE__ */ React.createElement("hr", {
    className: "mt-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "hidden mt-3 font-bold px-2 md:block"
  }, "Menu"), /* @__PURE__ */ React.createElement("ul", {
    className: "mt-3"
  }, menuItems.map(({ id, title, path, completePath }) => {
    let isSelected = pathname == completePath;
    return /* @__PURE__ */ React.createElement("li", {
      key: id,
      className: "mt-2 px-2 py-1 rounded hover:bg-gray-200"
    }, /* @__PURE__ */ React.createElement(import_react3.Link, {
      to: path,
      className: "flex items-center md:gap-2"
    }, /* @__PURE__ */ React.createElement("img", {
      src: `/images/${id}-${isSelected ? "fill" : "out"}.png`,
      alt: title,
      className: "w-6 h-6 md:w-4 md:h-4"
    }), /* @__PURE__ */ React.createElement("span", {
      className: `hidden text-sm ${isSelected ? "font-semibold" : "font-light"} md:block`
    }, title)));
  }), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "mt-6 px-2 py-1"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/logout.png",
    alt: "Logout",
    className: "w-6 h-6 md:hidden md:w-4 md:h-4"
  })))));
}

// app/db/user.server.ts
var import_redis_om3 = require("redis-om");

// app/db/category.server.ts
var import_redis_om2 = require("redis-om");

// app/db/redis.server.ts
var import_redis_om = require("redis-om"), redisClient = new import_redis_om.Client(), redisConnect = async () => {
  console.log("conctando"), redisClient.isOpen() || (console.log("...abriando conexion"), await redisClient.open(process.env.REDIS_URL));
};

// app/db/category.server.ts
var Category = class extends import_redis_om2.Entity {
}, categorySchema = new import_redis_om2.Schema(Category, {
  name: { type: "string" },
  slug: { type: "string", indexed: !0 },
  userId: { type: "string", indexed: !0 },
  createAt: { type: "date" }
});
async function getCategoryRepository() {
  await redisConnect();
  let repository = redisClient.fetchRepository(categorySchema);
  return await repository.createIndex(), repository;
}
async function createCategory({ userId, name, slug }) {
  return (await getCategoryRepository()).createAndSave({ userId, name, slug, createAt: new Date() });
}
async function getAllCategoriesByUser({ userId, offset = 0, perPage = 1 }) {
  return await (await getCategoryRepository()).search().where("userId").equals(userId).return.page(offset, perPage);
}

// app/db/user.server.ts
var User = class extends import_redis_om3.Entity {
}, userSchema = new import_redis_om3.Schema(User, {
  clerkId: { type: "string" },
  provider: { type: "string" },
  active: { type: "boolean" },
  createAt: { type: "date" }
});
async function getUserRepository() {
  await redisConnect();
  let repository = redisClient.fetchRepository(userSchema);
  return await repository.createIndex(), repository;
}
async function checkUser(userId) {
  let repository = await getUserRepository();
  await repository.search().where("clerkId").equals(userId).first() || (await repository.createAndSave({
    clerkId: userId,
    active: !0,
    createAt: new Date()
  }), await createCategory({
    userId,
    name: "Default",
    slug: "default"
  }));
}

// app/routes/dashboard.tsx
async function loader2({ request }) {
  let { userId } = await (0, import_ssr2.getAuth)(request);
  return userId ? (await checkUser(userId), (0, import_node2.json)({ userId })) : (0, import_node2.redirect)("/sign-up");
}
function DashboardRoute() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex min-h-screen"
  }, /* @__PURE__ */ React.createElement(DashNavbar, null), /* @__PURE__ */ React.createElement("section", {
    className: "flex-1 px-4 py-4 md:px-6"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null))));
}

// app/routes/dashboard/categories.tsx
var categories_exports = {};
__export(categories_exports, {
  default: () => DashboardCategoryRoute,
  loader: () => loader3
});
var import_ssr3 = require("@clerk/remix/ssr.server"), import_node3 = require("@remix-run/node"), import_react6 = require("@remix-run/react");

// app/components/dash-header.tsx
var import_react5 = require("react"), import_remix3 = require("@clerk/remix");
function DashHeader({ title }) {
  let { signOut } = (0, import_remix3.useClerk)(), [isDisabled, setIsDisabled] = (0, import_react5.useState)(!1);
  return /* @__PURE__ */ React.createElement("section", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-extrabold md:text-3xl"
  }, title), /* @__PURE__ */ React.createElement("button", {
    disabled: isDisabled,
    type: "button",
    onClick: async () => {
      setIsDisabled(!0), await signOut(), setIsDisabled(!1), window.location.href = "/";
    },
    className: "text-gray-900 hover:text-white border-2 border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hidden md:block disabled:opacity-50"
  }, "Logout"));
}

// app/routes/dashboard/categories.tsx
async function loader3({ request }) {
  let { userId } = await (0, import_ssr3.getAuth)(request);
  if (!userId)
    return (0, import_node3.redirect)("/sign-up");
  let categories = await getAllCategoriesByUser({ userId });
  return (0, import_node3.json)({ categories });
}
function DashboardCategoryRoute() {
  let { categories } = (0, import_react6.useLoaderData)();
  return console.log(categories), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Categories"
  }));
}

// app/routes/dashboard/developer.tsx
var developer_exports = {};
__export(developer_exports, {
  default: () => DashboardDeveloperRoute
});
function DashboardDeveloperRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Developer"
  }));
}

// app/routes/dashboard/perfil.tsx
var perfil_exports = {};
__export(perfil_exports, {
  default: () => DashboardPerfilRoute
});
function DashboardPerfilRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Perfil"
  }));
}

// app/routes/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => DashboardIndexRoute
});
function DashboardIndexRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Home"
  }));
}

// app/routes/dashboard/stats.tsx
var stats_exports = {};
__export(stats_exports, {
  default: () => DashboardStatsRoute
});
function DashboardStatsRoute() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Stats"
  }));
}

// app/routes/dashboard/tips.tsx
var tips_exports = {};
__export(tips_exports, {
  default: () => DashboardTipsRoute,
  loader: () => loader4
});
var import_node4 = require("@remix-run/node"), import_react7 = require("@remix-run/react");

// app/utils/params.server.ts
function getQueryIntParameter(request, name, defaultValue) {
  let url = new URL(request.url), param = parseInt(url.searchParams.get(name) ?? "", 10);
  return isNaN(param) ? defaultValue : param;
}

// app/routes/dashboard/tips.tsx
function loader4({ request }) {
  let offset = getQueryIntParameter(request, "offset", 0);
  return (0, import_node4.json)({ offset });
}
function DashboardTipsRoute() {
  let { offset } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Tips"
  }), /* @__PURE__ */ React.createElement("h1", null, "products dash"), /* @__PURE__ */ React.createElement("p", null, "Offset: ", offset), /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/dashboard/tips?offset=2"
  }, "Next"));
}

// app/routes/sign-in/$.tsx
var __exports = {};
__export(__exports, {
  default: () => SignInRoute
});
var import_remix4 = require("@clerk/remix");
function SignInRoute() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "auth flex justify-center p-2 md:p-8"
  }, /* @__PURE__ */ React.createElement(import_remix4.SignIn, {
    routing: "path",
    path: "/sign-in"
  }));
}

// app/routes/sign-up/$.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => SignUpRoute
});
var import_remix5 = require("@clerk/remix");
function SignUpRoute() {
  return /* @__PURE__ */ React.createElement("main", {
    className: "auth flex justify-center p-2 md:p-8"
  }, /* @__PURE__ */ React.createElement(import_remix5.SignUp, {
    routing: "path",
    path: "/sign-up"
  }));
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  loader: () => loader5
});
var import_ssr4 = require("@clerk/remix/ssr.server"), import_node5 = require("@remix-run/node"), import_react8 = require("@remix-run/react");
async function loader5({ request }) {
  let { userId } = await (0, import_ssr4.getAuth)(request);
  return userId ? (0, import_node5.redirect)("/dashboard") : null;
}
function IndexRoute() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Datos"), /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/sign-in"
  }, "Sign In"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/sign-up"
  }, "Sign Up"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "93f34529", entry: { module: "/build/entry.client-ZOWPDQRC.js", imports: ["/build/_shared/chunk-27P3YZSQ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AOCHGQ2W.js", imports: ["/build/_shared/chunk-ZI376TGU.js", "/build/_shared/chunk-5647L2W7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-SZZBU2KR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/categories": { id: "routes/dashboard/categories", parentId: "routes/dashboard", path: "categories", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/categories-GBSBDDVQ.js", imports: ["/build/_shared/chunk-ZI376TGU.js", "/build/_shared/chunk-JYLYC35L.js", "/build/_shared/chunk-5647L2W7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/developer": { id: "routes/dashboard/developer", parentId: "routes/dashboard", path: "developer", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/developer-I352W4UF.js", imports: ["/build/_shared/chunk-JYLYC35L.js", "/build/_shared/chunk-5647L2W7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-JYD2MGJS.js", imports: ["/build/_shared/chunk-JYLYC35L.js", "/build/_shared/chunk-5647L2W7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/perfil": { id: "routes/dashboard/perfil", parentId: "routes/dashboard", path: "perfil", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/perfil-PJCLV4QI.js", imports: ["/build/_shared/chunk-JYLYC35L.js", "/build/_shared/chunk-5647L2W7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/stats": { id: "routes/dashboard/stats", parentId: "routes/dashboard", path: "stats", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/stats-5ZVDJRNE.js", imports: ["/build/_shared/chunk-JYLYC35L.js", "/build/_shared/chunk-5647L2W7.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/tips": { id: "routes/dashboard/tips", parentId: "routes/dashboard", path: "tips", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/tips-COJRNPTO.js", imports: ["/build/_shared/chunk-JYLYC35L.js", "/build/_shared/chunk-5647L2W7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-34ZRR64R.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in/$": { id: "routes/sign-in/$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in/$-WEAHFZ2I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up/$": { id: "routes/sign-up/$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up/$-2V7D34YO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-93F34529.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/categories": {
    id: "routes/dashboard/categories",
    parentId: "routes/dashboard",
    path: "categories",
    index: void 0,
    caseSensitive: void 0,
    module: categories_exports
  },
  "routes/dashboard/developer": {
    id: "routes/dashboard/developer",
    parentId: "routes/dashboard",
    path: "developer",
    index: void 0,
    caseSensitive: void 0,
    module: developer_exports
  },
  "routes/dashboard/perfil": {
    id: "routes/dashboard/perfil",
    parentId: "routes/dashboard",
    path: "perfil",
    index: void 0,
    caseSensitive: void 0,
    module: perfil_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/dashboard/stats": {
    id: "routes/dashboard/stats",
    parentId: "routes/dashboard",
    path: "stats",
    index: void 0,
    caseSensitive: void 0,
    module: stats_exports
  },
  "routes/dashboard/tips": {
    id: "routes/dashboard/tips",
    parentId: "routes/dashboard",
    path: "tips",
    index: void 0,
    caseSensitive: void 0,
    module: tips_exports
  },
  "routes/sign-in/$": {
    id: "routes/sign-in/$",
    parentId: "root",
    path: "sign-in/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/sign-up/$": {
    id: "routes/sign-up/$",
    parentId: "root",
    path: "sign-up/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
