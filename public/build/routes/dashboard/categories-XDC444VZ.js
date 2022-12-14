import {
  require_ssr
} from "/build/_shared/chunk-KI6VKGMH.js";
import {
  DashHeader
} from "/build/_shared/chunk-7DW34RNL.js";
import "/build/_shared/chunk-IPP4XDWJ.js";
import {
  Form,
  React,
  __commonJS,
  __toESM,
  init_esm,
  init_react,
  require_react,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-PQV6DCII.js";

// empty-module:~/db/category.server
var require_category = __commonJS({
  "empty-module:~/db/category.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:routes/dashboard/categories.tsx?browser
init_react();

// app/routes/dashboard/categories.tsx
init_react();
var import_ssr = __toESM(require_ssr());
init_esm();
var import_react3 = __toESM(require_react());

// node_modules/react-toastify/dist/react-toastify.esm.mjs
init_react();
var import_react = __toESM(require_react(), 1);

// node_modules/clsx/dist/clsx.m.js
init_react();
function r(e) {
  var t, f, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// node_modules/react-toastify/dist/react-toastify.esm.mjs
function isNum(v) {
  return typeof v === "number" && !isNaN(v);
}
function isBool(v) {
  return typeof v === "boolean";
}
function isStr(v) {
  return typeof v === "string";
}
function isFn(v) {
  return typeof v === "function";
}
function parseClassName(v) {
  return isStr(v) || isFn(v) ? v : null;
}
function isToastIdValid(toastId) {
  return toastId != null;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
  return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
function canBeRendered(content) {
  return (0, import_react.isValidElement)(content) || isStr(content) || isFn(content) || isNum(content);
}
var POSITION = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
};
var TYPE = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  DEFAULT: "default"
};
function collapseToast(node, done, duration) {
  if (duration === void 0) {
    duration = 300;
  }
  const {
    scrollHeight,
    style
  } = node;
  requestAnimationFrame(() => {
    style.minHeight = "initial";
    style.height = scrollHeight + "px";
    style.transition = "all " + duration + "ms";
    requestAnimationFrame(() => {
      style.height = "0";
      style.padding = "0";
      style.margin = "0";
      setTimeout(done, duration);
    });
  });
}
function cssTransition(_ref) {
  let {
    enter,
    exit,
    appendPosition = false,
    collapse = true,
    collapseDuration = 300
  } = _ref;
  return function ToastTransition(_ref2) {
    let {
      children,
      position,
      preventExitTransition,
      done,
      nodeRef,
      isIn
    } = _ref2;
    const enterClassName = appendPosition ? enter + "--" + position : enter;
    const exitClassName = appendPosition ? exit + "--" + position : exit;
    const animationStep = (0, import_react.useRef)(0);
    (0, import_react.useLayoutEffect)(() => {
      const node = nodeRef.current;
      const classToToken = enterClassName.split(" ");
      const onEntered = (e) => {
        if (e.target !== nodeRef.current)
          return;
        node.dispatchEvent(new Event("d"));
        node.removeEventListener("animationend", onEntered);
        node.removeEventListener("animationcancel", onEntered);
        if (animationStep.current === 0 && e.type !== "animationcancel") {
          node.classList.remove(...classToToken);
        }
      };
      const onEnter = () => {
        node.classList.add(...classToToken);
        node.addEventListener("animationend", onEntered);
        node.addEventListener("animationcancel", onEntered);
      };
      onEnter();
    }, []);
    (0, import_react.useEffect)(() => {
      const node = nodeRef.current;
      const onExited = () => {
        node.removeEventListener("animationend", onExited);
        collapse ? collapseToast(node, done, collapseDuration) : done();
      };
      const onExit = () => {
        animationStep.current = 1;
        node.className += " " + exitClassName;
        node.addEventListener("animationend", onExited);
      };
      if (!isIn)
        preventExitTransition ? onExited() : onExit();
    }, [isIn]);
    return import_react.default.createElement(import_react.default.Fragment, null, children);
  };
}
function toToastItem(toast2, status) {
  return {
    content: toast2.content,
    containerId: toast2.props.containerId,
    id: toast2.props.toastId,
    theme: toast2.props.theme,
    type: toast2.props.type,
    data: toast2.props.data || {},
    isLoading: toast2.props.isLoading,
    icon: toast2.props.icon,
    status
  };
}
var eventManager = {
  list: /* @__PURE__ */ new Map(),
  emitQueue: /* @__PURE__ */ new Map(),
  on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off(event, callback) {
    if (callback) {
      const cb = this.list.get(event).filter((cb2) => cb2 !== callback);
      this.list.set(event, cb);
      return this;
    }
    this.list.delete(event);
    return this;
  },
  cancelEmit(event) {
    const timers = this.emitQueue.get(event);
    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue.delete(event);
    }
    return this;
  },
  emit(event) {
    this.list.has(event) && this.list.get(event).forEach((callback) => {
      const timer = setTimeout(() => {
        callback(...[].slice.call(arguments, 1));
      }, 0);
      this.emitQueue.has(event) || this.emitQueue.set(event, []);
      this.emitQueue.get(event).push(timer);
    });
  }
};
var Svg = (_ref) => {
  let {
    theme,
    type,
    ...rest
  } = _ref;
  return import_react.default.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "100%",
    height: "100%",
    fill: theme === "colored" ? "currentColor" : "var(--toastify-icon-color-" + type + ")",
    ...rest
  });
};
function Warning(props) {
  return import_react.default.createElement(Svg, {
    ...props
  }, import_react.default.createElement("path", {
    d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
  }));
}
function Info(props) {
  return import_react.default.createElement(Svg, {
    ...props
  }, import_react.default.createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
  }));
}
function Success(props) {
  return import_react.default.createElement(Svg, {
    ...props
  }, import_react.default.createElement("path", {
    d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
  }));
}
function Error(props) {
  return import_react.default.createElement(Svg, {
    ...props
  }, import_react.default.createElement("path", {
    d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
  }));
}
function Spinner() {
  return import_react.default.createElement("div", {
    className: "Toastify__spinner"
  });
}
var Icons = {
  info: Info,
  warning: Warning,
  success: Success,
  error: Error,
  spinner: Spinner
};
var maybeIcon = (type) => type in Icons;
function getIcon(_ref2) {
  let {
    theme,
    type,
    isLoading,
    icon
  } = _ref2;
  let Icon = null;
  const iconProps = {
    theme,
    type
  };
  if (icon === false)
    ;
  else if (isFn(icon)) {
    Icon = icon(iconProps);
  } else if ((0, import_react.isValidElement)(icon)) {
    Icon = (0, import_react.cloneElement)(icon, iconProps);
  } else if (isStr(icon) || isNum(icon)) {
    Icon = icon;
  } else if (isLoading) {
    Icon = Icons.spinner();
  } else if (maybeIcon(type)) {
    Icon = Icons[type](iconProps);
  }
  return Icon;
}
function useToastContainer(props) {
  const [, forceUpdate] = (0, import_react.useReducer)((x) => x + 1, 0);
  const [toastIds, setToastIds] = (0, import_react.useState)([]);
  const containerRef = (0, import_react.useRef)(null);
  const toastToRender = (0, import_react.useRef)(/* @__PURE__ */ new Map()).current;
  const isToastActive = (id) => toastIds.indexOf(id) !== -1;
  const instance = (0, import_react.useRef)({
    toastKey: 1,
    displayedToast: 0,
    count: 0,
    queue: [],
    props,
    containerId: null,
    isToastActive,
    getToast: (id) => toastToRender.get(id)
  }).current;
  (0, import_react.useEffect)(() => {
    instance.containerId = props.containerId;
    eventManager.cancelEmit(3).on(0, buildToast).on(1, (toastId) => containerRef.current && removeToast(toastId)).on(5, clearWaitingQueue).emit(2, instance);
    return () => {
      toastToRender.clear();
      eventManager.emit(3, instance);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    instance.props = props;
    instance.isToastActive = isToastActive;
    instance.displayedToast = toastIds.length;
  });
  function clearWaitingQueue(_ref) {
    let {
      containerId
    } = _ref;
    const {
      limit
    } = instance.props;
    if (limit && (!containerId || instance.containerId === containerId)) {
      instance.count -= instance.queue.length;
      instance.queue = [];
    }
  }
  function removeToast(toastId) {
    setToastIds((state) => isToastIdValid(toastId) ? state.filter((id) => id !== toastId) : []);
  }
  function dequeueToast() {
    const {
      toastContent,
      toastProps,
      staleId
    } = instance.queue.shift();
    appendToast(toastContent, toastProps, staleId);
  }
  function isNotValid(options) {
    return !containerRef.current || instance.props.enableMultiContainer && options.containerId !== instance.props.containerId || toastToRender.has(options.toastId) && options.updateId == null;
  }
  function buildToast(content, _ref2) {
    let {
      delay,
      staleId,
      ...options
    } = _ref2;
    if (!canBeRendered(content) || isNotValid(options))
      return;
    const {
      toastId,
      updateId,
      data
    } = options;
    const {
      props: props2
    } = instance;
    const closeToast = () => removeToast(toastId);
    const isNotAnUpdate = updateId == null;
    if (isNotAnUpdate)
      instance.count++;
    const toastProps = {
      toastId,
      updateId,
      data,
      containerId: options.containerId,
      isLoading: options.isLoading,
      theme: options.theme || props2.theme,
      icon: options.icon != null ? options.icon : props2.icon,
      isIn: false,
      key: options.key || instance.toastKey++,
      type: options.type,
      closeToast,
      closeButton: options.closeButton,
      rtl: props2.rtl,
      position: options.position || props2.position,
      transition: options.transition || props2.transition,
      className: parseClassName(options.className || props2.toastClassName),
      bodyClassName: parseClassName(options.bodyClassName || props2.bodyClassName),
      style: options.style || props2.toastStyle,
      bodyStyle: options.bodyStyle || props2.bodyStyle,
      onClick: options.onClick || props2.onClick,
      pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props2.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props2.pauseOnFocusLoss,
      draggable: isBool(options.draggable) ? options.draggable : props2.draggable,
      draggablePercent: options.draggablePercent || props2.draggablePercent,
      draggableDirection: options.draggableDirection || props2.draggableDirection,
      closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props2.closeOnClick,
      progressClassName: parseClassName(options.progressClassName || props2.progressClassName),
      progressStyle: options.progressStyle || props2.progressStyle,
      autoClose: options.isLoading ? false : getAutoCloseDelay(options.autoClose, props2.autoClose),
      hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props2.hideProgressBar,
      progress: options.progress,
      role: options.role || props2.role,
      deleteToast() {
        const removed = toToastItem(toastToRender.get(toastId), "removed");
        toastToRender.delete(toastId);
        eventManager.emit(4, removed);
        const queueLen = instance.queue.length;
        instance.count = isToastIdValid(toastId) ? instance.count - 1 : instance.count - instance.displayedToast;
        if (instance.count < 0)
          instance.count = 0;
        if (queueLen > 0) {
          const freeSlot = isToastIdValid(toastId) ? 1 : instance.props.limit;
          if (queueLen === 1 || freeSlot === 1) {
            instance.displayedToast++;
            dequeueToast();
          } else {
            const toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
            instance.displayedToast = toDequeue;
            for (let i = 0; i < toDequeue; i++)
              dequeueToast();
          }
        } else {
          forceUpdate();
        }
      }
    };
    toastProps.iconOut = getIcon(toastProps);
    if (isFn(options.onOpen))
      toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose))
      toastProps.onClose = options.onClose;
    toastProps.closeButton = props2.closeButton;
    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      toastProps.closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      toastProps.closeButton = canBeRendered(props2.closeButton) ? props2.closeButton : true;
    }
    let toastContent = content;
    if ((0, import_react.isValidElement)(content) && !isStr(content.type)) {
      toastContent = (0, import_react.cloneElement)(content, {
        closeToast,
        toastProps,
        data
      });
    } else if (isFn(content)) {
      toastContent = content({
        closeToast,
        toastProps,
        data
      });
    }
    if (props2.limit && props2.limit > 0 && instance.count > props2.limit && isNotAnUpdate) {
      instance.queue.push({
        toastContent,
        toastProps,
        staleId
      });
    } else if (isNum(delay)) {
      setTimeout(() => {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }
  function appendToast(content, toastProps, staleId) {
    const {
      toastId
    } = toastProps;
    if (staleId)
      toastToRender.delete(staleId);
    const toast2 = {
      content,
      props: toastProps
    };
    toastToRender.set(toastId, toast2);
    setToastIds((state) => [...state, toastId].filter((id) => id !== staleId));
    eventManager.emit(4, toToastItem(toast2, toast2.props.updateId == null ? "added" : "updated"));
  }
  function getToastToRender(cb) {
    const toRender = /* @__PURE__ */ new Map();
    const collection = Array.from(toastToRender.values());
    if (props.newestOnTop)
      collection.reverse();
    collection.forEach((toast2) => {
      const {
        position
      } = toast2.props;
      toRender.has(position) || toRender.set(position, []);
      toRender.get(position).push(toast2);
    });
    return Array.from(toRender, (p) => cb(p[0], p[1]));
  }
  return {
    getToastToRender,
    containerRef,
    isToastActive
  };
}
function getX(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}
function getY(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY;
}
function useToast(props) {
  const [isRunning, setIsRunning] = (0, import_react.useState)(false);
  const [preventExitTransition, setPreventExitTransition] = (0, import_react.useState)(false);
  const toastRef = (0, import_react.useRef)(null);
  const drag = (0, import_react.useRef)({
    start: 0,
    x: 0,
    y: 0,
    delta: 0,
    removalDistance: 0,
    canCloseOnClick: true,
    canDrag: false,
    boundingRect: null,
    didMove: false
  }).current;
  const syncProps = (0, import_react.useRef)(props);
  const {
    autoClose,
    pauseOnHover,
    closeToast,
    onClick,
    closeOnClick
  } = props;
  (0, import_react.useEffect)(() => {
    syncProps.current = props;
  });
  (0, import_react.useEffect)(() => {
    if (toastRef.current)
      toastRef.current.addEventListener("d", playToast, {
        once: true
      });
    if (isFn(props.onOpen))
      props.onOpen((0, import_react.isValidElement)(props.children) && props.children.props);
    return () => {
      const props2 = syncProps.current;
      if (isFn(props2.onClose))
        props2.onClose((0, import_react.isValidElement)(props2.children) && props2.children.props);
    };
  }, []);
  (0, import_react.useEffect)(() => {
    props.pauseOnFocusLoss && bindFocusEvents();
    return () => {
      props.pauseOnFocusLoss && unbindFocusEvents();
    };
  }, [props.pauseOnFocusLoss]);
  function onDragStart(e) {
    if (props.draggable) {
      bindDragEvents();
      const toast2 = toastRef.current;
      drag.canCloseOnClick = true;
      drag.canDrag = true;
      drag.boundingRect = toast2.getBoundingClientRect();
      toast2.style.transition = "";
      drag.x = getX(e.nativeEvent);
      drag.y = getY(e.nativeEvent);
      if (props.draggableDirection === "x") {
        drag.start = drag.x;
        drag.removalDistance = toast2.offsetWidth * (props.draggablePercent / 100);
      } else {
        drag.start = drag.y;
        drag.removalDistance = toast2.offsetHeight * (props.draggablePercent === 80 ? props.draggablePercent * 1.5 : props.draggablePercent / 100);
      }
    }
  }
  function onDragTransitionEnd() {
    if (drag.boundingRect) {
      const {
        top,
        bottom,
        left,
        right
      } = drag.boundingRect;
      if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
        pauseToast();
      } else {
        playToast();
      }
    }
  }
  function playToast() {
    setIsRunning(true);
  }
  function pauseToast() {
    setIsRunning(false);
  }
  function bindFocusEvents() {
    if (!document.hasFocus())
      pauseToast();
    window.addEventListener("focus", playToast);
    window.addEventListener("blur", pauseToast);
  }
  function unbindFocusEvents() {
    window.removeEventListener("focus", playToast);
    window.removeEventListener("blur", pauseToast);
  }
  function bindDragEvents() {
    drag.didMove = false;
    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup", onDragEnd);
    document.addEventListener("touchmove", onDragMove);
    document.addEventListener("touchend", onDragEnd);
  }
  function unbindDragEvents() {
    document.removeEventListener("mousemove", onDragMove);
    document.removeEventListener("mouseup", onDragEnd);
    document.removeEventListener("touchmove", onDragMove);
    document.removeEventListener("touchend", onDragEnd);
  }
  function onDragMove(e) {
    const toast2 = toastRef.current;
    if (drag.canDrag && toast2) {
      drag.didMove = true;
      if (isRunning)
        pauseToast();
      drag.x = getX(e);
      drag.y = getY(e);
      if (props.draggableDirection === "x") {
        drag.delta = drag.x - drag.start;
      } else {
        drag.delta = drag.y - drag.start;
      }
      if (drag.start !== drag.x)
        drag.canCloseOnClick = false;
      toast2.style.transform = "translate" + props.draggableDirection + "(" + drag.delta + "px)";
      toast2.style.opacity = "" + (1 - Math.abs(drag.delta / drag.removalDistance));
    }
  }
  function onDragEnd() {
    unbindDragEvents();
    const toast2 = toastRef.current;
    if (drag.canDrag && drag.didMove && toast2) {
      drag.canDrag = false;
      if (Math.abs(drag.delta) > drag.removalDistance) {
        setPreventExitTransition(true);
        props.closeToast();
        return;
      }
      toast2.style.transition = "transform 0.2s, opacity 0.2s";
      toast2.style.transform = "translate" + props.draggableDirection + "(0)";
      toast2.style.opacity = "1";
    }
  }
  const eventHandlers = {
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    onMouseUp: onDragTransitionEnd,
    onTouchEnd: onDragTransitionEnd
  };
  if (autoClose && pauseOnHover) {
    eventHandlers.onMouseEnter = pauseToast;
    eventHandlers.onMouseLeave = playToast;
  }
  if (closeOnClick) {
    eventHandlers.onClick = (e) => {
      onClick && onClick(e);
      drag.canCloseOnClick && closeToast();
    };
  }
  return {
    playToast,
    pauseToast,
    isRunning,
    preventExitTransition,
    toastRef,
    eventHandlers
  };
}
function CloseButton(_ref) {
  let {
    closeToast,
    theme,
    ariaLabel = "close"
  } = _ref;
  return import_react.default.createElement("button", {
    className: "Toastify__close-button Toastify__close-button--" + theme,
    type: "button",
    onClick: (e) => {
      e.stopPropagation();
      closeToast(e);
    },
    "aria-label": ariaLabel
  }, import_react.default.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, import_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}
function ProgressBar(_ref) {
  let {
    delay,
    isRunning,
    closeToast,
    type,
    hide,
    className,
    style: userStyle,
    controlledProgress,
    progress,
    rtl,
    isIn,
    theme
  } = _ref;
  const style = {
    ...userStyle,
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? "running" : "paused",
    opacity: hide ? 0 : 1
  };
  if (controlledProgress)
    style.transform = "scaleX(" + progress + ")";
  const defaultClassName = clsx_m_default("Toastify__progress-bar", controlledProgress ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar-theme--" + theme, "Toastify__progress-bar--" + type, {
    ["Toastify__progress-bar--rtl"]: rtl
  });
  const classNames = isFn(className) ? className({
    rtl,
    type,
    defaultClassName
  }) : clsx_m_default(defaultClassName, className);
  const animationEvent = {
    [controlledProgress && progress >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: controlledProgress && progress < 1 ? null : () => {
      isIn && closeToast();
    }
  };
  return import_react.default.createElement("div", {
    role: "progressbar",
    "aria-hidden": hide ? "true" : "false",
    "aria-label": "notification timer",
    className: classNames,
    style,
    ...animationEvent
  });
}
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};
var Toast = (props) => {
  const {
    isRunning,
    preventExitTransition,
    toastRef,
    eventHandlers
  } = useToast(props);
  const {
    closeButton,
    children,
    autoClose,
    onClick,
    type,
    hideProgressBar,
    closeToast,
    transition: Transition,
    position,
    className,
    style,
    bodyClassName,
    bodyStyle,
    progressClassName,
    progressStyle,
    updateId,
    role,
    progress,
    rtl,
    toastId,
    deleteToast,
    isIn,
    isLoading,
    iconOut,
    theme
  } = props;
  const defaultClassName = clsx_m_default("Toastify__toast", "Toastify__toast-theme--" + theme, "Toastify__toast--" + type, {
    ["Toastify__toast--rtl"]: rtl
  });
  const cssClasses = isFn(className) ? className({
    rtl,
    position,
    type,
    defaultClassName
  }) : clsx_m_default(defaultClassName, className);
  const isProgressControlled = !!progress;
  const closeButtonProps = {
    closeToast,
    type,
    theme
  };
  let Close = null;
  if (closeButton === false)
    ;
  else if (isFn(closeButton)) {
    Close = closeButton(closeButtonProps);
  } else if (import_react.default.isValidElement(closeButton)) {
    Close = import_react.default.cloneElement(closeButton, closeButtonProps);
  } else {
    Close = CloseButton(closeButtonProps);
  }
  return import_react.default.createElement(Transition, {
    isIn,
    done: deleteToast,
    position,
    preventExitTransition,
    nodeRef: toastRef
  }, import_react.default.createElement("div", {
    id: toastId,
    onClick,
    className: cssClasses,
    ...eventHandlers,
    style,
    ref: toastRef
  }, import_react.default.createElement("div", {
    ...isIn && {
      role
    },
    className: isFn(bodyClassName) ? bodyClassName({
      type
    }) : clsx_m_default("Toastify__toast-body", bodyClassName),
    style: bodyStyle
  }, iconOut != null && import_react.default.createElement("div", {
    className: clsx_m_default("Toastify__toast-icon", {
      ["Toastify--animate-icon Toastify__zoom-enter"]: !isLoading
    })
  }, iconOut), import_react.default.createElement("div", null, children)), Close, (autoClose || isProgressControlled) && import_react.default.createElement(ProgressBar, {
    ...updateId && !isProgressControlled ? {
      key: "pb-" + updateId
    } : {},
    rtl,
    theme,
    delay: autoClose,
    isRunning,
    isIn,
    closeToast,
    hide: hideProgressBar,
    type,
    style: progressStyle,
    className: progressClassName,
    controlledProgress: isProgressControlled,
    progress
  })));
};
var Bounce = cssTransition({
  enter: "Toastify--animate Toastify__bounce-enter",
  exit: "Toastify--animate Toastify__bounce-exit",
  appendPosition: true
});
var Slide = cssTransition({
  enter: "Toastify--animate Toastify__slide-enter",
  exit: "Toastify--animate Toastify__slide-exit",
  appendPosition: true
});
var Zoom = cssTransition({
  enter: "Toastify--animate Toastify__zoom-enter",
  exit: "Toastify--animate Toastify__zoom-exit"
});
var Flip = cssTransition({
  enter: "Toastify--animate Toastify__flip-enter",
  exit: "Toastify--animate Toastify__flip-exit"
});
var ToastContainer = (0, import_react.forwardRef)((props, ref) => {
  const {
    getToastToRender,
    containerRef,
    isToastActive
  } = useToastContainer(props);
  const {
    className,
    style,
    rtl,
    containerId
  } = props;
  function getClassName(position) {
    const defaultClassName = clsx_m_default("Toastify__toast-container", "Toastify__toast-container--" + position, {
      ["Toastify__toast-container--rtl"]: rtl
    });
    return isFn(className) ? className({
      position,
      rtl,
      defaultClassName
    }) : clsx_m_default(defaultClassName, parseClassName(className));
  }
  (0, import_react.useEffect)(() => {
    if (ref) {
      ref.current = containerRef.current;
    }
  }, []);
  return import_react.default.createElement("div", {
    ref: containerRef,
    className: "Toastify",
    id: containerId
  }, getToastToRender((position, toastList) => {
    const containerStyle = !toastList.length ? {
      ...style,
      pointerEvents: "none"
    } : {
      ...style
    };
    return import_react.default.createElement("div", {
      className: getClassName(position),
      style: containerStyle,
      key: "container-" + position
    }, toastList.map((_ref, i) => {
      let {
        content,
        props: toastProps
      } = _ref;
      return import_react.default.createElement(Toast, {
        ...toastProps,
        isIn: isToastActive(toastProps.toastId),
        style: {
          ...toastProps.style,
          "--nth": i + 1,
          "--len": toastList.length
        },
        key: "toast-" + toastProps.key
      }, content);
    }));
  }));
});
ToastContainer.displayName = "ToastContainer";
ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5e3,
  hideProgressBar: false,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert",
  theme: "light"
};
var containers = /* @__PURE__ */ new Map();
var latestInstance;
var queue = [];
function getToast(toastId, _ref) {
  let {
    containerId
  } = _ref;
  const container = containers.get(containerId || latestInstance);
  if (!container)
    return null;
  return container.getToast(toastId);
}
function generateToastId() {
  return Math.random().toString(36).substring(2, 9);
}
function getToastId(options) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }
  return generateToastId();
}
function dispatchToast(content, options) {
  if (containers.size > 0) {
    eventManager.emit(0, content, options);
  } else {
    queue.push({
      content,
      options
    });
  }
  return options.toastId;
}
function mergeOptions(type, options) {
  return {
    ...options,
    type: options && options.type || type,
    toastId: getToastId(options)
  };
}
function createToastByType(type) {
  return (content, options) => dispatchToast(content, mergeOptions(type, options));
}
function toast(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
}
toast.loading = (content, options) => dispatchToast(content, mergeOptions(TYPE.DEFAULT, {
  isLoading: true,
  autoClose: false,
  closeOnClick: false,
  closeButton: false,
  draggable: false,
  ...options
}));
function handlePromise(promise, _ref2, options) {
  let {
    pending,
    error,
    success
  } = _ref2;
  let id;
  if (pending) {
    id = isStr(pending) ? toast.loading(pending, options) : toast.loading(pending.render, {
      ...options,
      ...pending
    });
  }
  const resetParams = {
    isLoading: null,
    autoClose: null,
    closeOnClick: null,
    closeButton: null,
    draggable: null,
    delay: 100
  };
  const resolver = (type, input, result) => {
    if (input == null) {
      toast.dismiss(id);
      return;
    }
    const baseParams = {
      type,
      ...resetParams,
      ...options,
      data: result
    };
    const params = isStr(input) ? {
      render: input
    } : input;
    if (id) {
      toast.update(id, {
        ...baseParams,
        ...params
      });
    } else {
      toast(params.render, {
        ...baseParams,
        ...params
      });
    }
    return result;
  };
  const p = isFn(promise) ? promise() : promise;
  p.then((result) => resolver("success", success, result)).catch((err) => resolver("error", error, err));
  return p;
}
toast.promise = handlePromise;
toast.success = createToastByType(TYPE.SUCCESS);
toast.info = createToastByType(TYPE.INFO);
toast.error = createToastByType(TYPE.ERROR);
toast.warning = createToastByType(TYPE.WARNING);
toast.warn = toast.warning;
toast.dark = (content, options) => dispatchToast(content, mergeOptions(TYPE.DEFAULT, {
  theme: "dark",
  ...options
}));
toast.dismiss = (id) => {
  if (containers.size > 0) {
    eventManager.emit(1, id);
  } else {
    queue = queue.filter((t) => isToastIdValid(id) && t.options.toastId !== id);
  }
};
toast.clearWaitingQueue = function(params) {
  if (params === void 0) {
    params = {};
  }
  return eventManager.emit(5, params);
};
toast.isActive = (id) => {
  let isToastActive = false;
  containers.forEach((container) => {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });
  return isToastActive;
};
toast.update = function(toastId, options) {
  if (options === void 0) {
    options = {};
  }
  setTimeout(() => {
    const toast2 = getToast(toastId, options);
    if (toast2) {
      const {
        props: oldOptions,
        content: oldContent
      } = toast2;
      const nextOptions = {
        ...oldOptions,
        ...options,
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      };
      if (nextOptions.toastId !== toastId)
        nextOptions.staleId = toastId;
      const content = nextOptions.render || oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
toast.done = (id) => {
  toast.update(id, {
    progress: 1
  });
};
toast.onChange = (callback) => {
  eventManager.on(4, callback);
  return () => {
    eventManager.off(4, callback);
  };
};
toast.POSITION = POSITION;
toast.TYPE = TYPE;
eventManager.on(2, (containerInstance) => {
  latestInstance = containerInstance.containerId || containerInstance;
  containers.set(latestInstance, containerInstance);
  queue.forEach((item) => {
    eventManager.emit(0, item.content, item.options);
  });
  queue = [];
}).on(3, (containerInstance) => {
  containers.delete(containerInstance.containerId || containerInstance);
  if (containers.size === 0) {
    eventManager.off(0).off(1).off(5);
  }
});

// app/components/category-list.tsx
init_react();

// app/components/category-item.tsx
init_react();
function CategoryItem({ category }) {
  const { name, slug } = category;
  return /* @__PURE__ */ React.createElement("tr", {
    className: "bg-white border-b"
  }, /* @__PURE__ */ React.createElement("th", {
    scope: "row",
    className: "py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
  }, name), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, slug), /* @__PURE__ */ React.createElement("td", {
    className: "py-4 px-6"
  }, "-"));
}

// app/components/category-list.tsx
function CategoryList({ categories }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto relative mt-6"
  }, /* @__PURE__ */ React.createElement("table", {
    className: "w-full text-sm text-left text-gray-500 dark:text-gray-400"
  }, /* @__PURE__ */ React.createElement("thead", {
    className: "text-xs text-gray-700 uppercase bg-gray-50"
  }, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Name"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Slug"), /* @__PURE__ */ React.createElement("th", {
    scope: "col",
    className: "py-3 px-6"
  }, "Actions"))), /* @__PURE__ */ React.createElement("tbody", null, categories.map((category) => /* @__PURE__ */ React.createElement(CategoryItem, {
    category,
    key: category.entityId
  })))));
}

// app/components/modal.tsx
init_react();
function Modal({ children, onClose }) {
  return /* @__PURE__ */ React.createElement("div", {
    id: "modal",
    "aria-hidden": "true",
    className: " bg-white bg-opacity-80 flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-10 w-full md:inset-0 h-modal md:h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-2xl m-8 relative inline-flex items-center justify-center p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-black"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative p-8 transition-all ease-in duration-75 bg-white rounded-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-4 flex justify-between"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "font-bold text-xl"
  }, "Tip Land"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: () => onClose()
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/close.png",
    width: "20"
  }))), /* @__PURE__ */ React.createElement("div", null, children))));
}

// app/routes/dashboard/categories.tsx
var import_category = __toESM(require_category());
function DashboardCategoryRoute() {
  const { categories } = useLoaderData();
  const data = useActionData();
  const [showCreateModal, setShowCreateModal] = (0, import_react3.useState)(false);
  const handleOpenShowCreateModal = () => toast("Wow so easy!");
  const handleCloseShowCreateModal = () => setShowCreateModal(false);
  (0, import_react3.useEffect)(() => {
    if ((data == null ? void 0 : data.intent) === "create" && (data == null ? void 0 : data.category)) {
      handleCloseShowCreateModal();
    }
  }, [data]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DashHeader, {
    title: "Categories"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: handleOpenShowCreateModal
  }, "New Category")), /* @__PURE__ */ React.createElement(CategoryList, {
    categories
  }), showCreateModal ? /* @__PURE__ */ React.createElement(Modal, {
    onClose: handleCloseShowCreateModal
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "md:w-96"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name",
    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  }, "Name"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-end gap-2 mt-5"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    onClick: handleCloseShowCreateModal,
    className: "text-gray-900 border-2 border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2 hover:opacity-80 disabled:opacity-50"
  }, "Cancel"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    name: "intent",
    value: "create",
    className: "text-white border-2 border-gray-800 bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 disabled:opacity-50"
  }, "Acept")))) : null, /* @__PURE__ */ React.createElement(ToastContainer, {
    position: "bottom-right",
    autoClose: 4996,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: false,
    draggable: true,
    pauseOnHover: false
  }));
}
export {
  DashboardCategoryRoute as default
};
//# sourceMappingURL=/build/routes/dashboard/categories-XDC444VZ.js.map
