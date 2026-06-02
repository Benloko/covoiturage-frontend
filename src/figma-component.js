const Jy = () => Promise.resolve().then(() => Yy), od = globalThis.__GLOBALS__.ReactJSXRuntime, { Fragment: Xr, jsx: l, jsxs: f } = od;
"use" in globalThis.__GLOBALS__.React || (globalThis.__GLOBALS__.React.use = () => {
  throw new Error("`use` is not available in this version of React. Make currently only supports React 18, but `use` is only available in React 19+.");
});
function No(e) {
  const t = e?.props?._fgT, n = typeof t == "function" || typeof t == "string" || typeof t == "object" && t !== null && "$$typeof" in t;
  return globalThis.__GLOBALS__.React.isValidElement(e) && n;
}
function cn(e) {
  return globalThis.__GLOBALS__.React.isValidElement(e) && e.type === "fg-txt";
}
function Po(e) {
  const { _fgT: t, _fgS: n, _fgB: r, _fgD: i, ...a } = e.props;
  return globalThis.__GLOBALS__.React.createElement(t, {
    ...a,
    key: e.key
  }, a.children);
}
function Xn(e) {
  return No(e) ? Po(e) : cn(e) ? e.props.children : e;
}
const rn = globalThis.__GLOBALS__.React.Children, To = {
  map(e, t, n) {
    return rn.map(e, (r, i) => {
      const a = Xn(r);
      return cn(r) ? null : t.call(n, a, i);
    });
  },
  forEach(e, t, n) {
    rn.forEach(e, (r, i) => {
      if (cn(r))
        return;
      const a = Xn(r);
      t.call(n, a, i);
    });
  },
  count(e) {
    let t = 0;
    return rn.forEach(e, (n) => {
      cn(n) || t++;
    }), t;
  },
  toArray(e) {
    const t = [];
    return rn.forEach(e, (n) => {
      cn(n) || t.push(Xn(n));
    }), t;
  },
  only(e) {
    const t = rn.only(e);
    return Xn(t);
  }
}, Sr = [
  "_fgT",
  "_fgS",
  "_fgB",
  "_fgD"
];
function ld(e) {
  if (e == null || typeof e != "object") return e;
  const t = Object.keys(e);
  let n = !1;
  for (let i = 0; i < Sr.length; i++)
    if (Sr[i] in e) {
      n = !0;
      break;
    }
  if (!n) return e;
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    Sr.indexOf(a) === -1 && (r[a] = e[a]);
  }
  return r;
}
const Ea = globalThis.__GLOBALS__.React.cloneElement, Co = (e, ...t) => {
  if (No(e)) {
    const n = Po(e), r = t[0];
    return r != null && typeof r == "object" && (t = [
      ld(r),
      ...t.slice(1)
    ]), Ea(n, ...t);
  }
  return Ea(e, ...t);
}, cd = {
  ...globalThis.__GLOBALS__.React,
  Children: To,
  cloneElement: Co
}, { Component: Ni, createContext: me, createElement: $, createFactory: dd, createRef: ud, forwardRef: Vt, Fragment: ft, isValidElement: hd, lazy: fd, memo: So, Profiler: md, PureComponent: pd, startTransition: xn, StrictMode: gd, Suspense: yd, use: vd, useCallback: ot, useContext: B, useDebugValue: bd, useDeferredValue: xd, useEffect: _e, useId: Ro, useImperativeHandle: wd, useInsertionEffect: Mo, useLayoutEffect: mr, useMemo: ve, useReducer: Nd, useRef: He, useState: Q, useSyncExternalStore: Pd, useTransition: Td, version: Cd, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Sd } = globalThis.__GLOBALS__.React, Rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Children: To,
  Component: Ni,
  Fragment: ft,
  Profiler: md,
  PureComponent: pd,
  StrictMode: gd,
  Suspense: yd,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Sd,
  cloneElement: Co,
  createContext: me,
  createElement: $,
  createFactory: dd,
  createRef: ud,
  default: cd,
  forwardRef: Vt,
  isValidElement: hd,
  lazy: fd,
  memo: So,
  startTransition: xn,
  use: vd,
  useCallback: ot,
  useContext: B,
  useDebugValue: bd,
  useDeferredValue: xd,
  useEffect: _e,
  useId: Ro,
  useImperativeHandle: wd,
  useInsertionEffect: Mo,
  useLayoutEffect: mr,
  useMemo: ve,
  useReducer: Nd,
  useRef: He,
  useState: Q,
  useSyncExternalStore: Pd,
  useTransition: Td,
  version: Cd
}, Symbol.toStringTag, { value: "Module" }));
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Ao = (e) => {
  throw TypeError(e);
}, Md = (e, t, n) => t.has(e) || Ao("Cannot " + n), Rr = (e, t, n) => (Md(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ad = (e, t, n) => t.has(e) ? Ao("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Da = "popstate";
function Ed(e = {}) {
  function t(r, i) {
    let { pathname: a, search: s, hash: o } = r.location;
    return wn(
      "",
      { pathname: a, search: s, hash: o },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Ze(i);
  }
  return kd(
    t,
    n,
    null,
    e
  );
}
function H(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function he(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Dd() {
  return Math.random().toString(36).substring(2, 10);
}
function ka(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function wn(e, t, n = null, r) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof t == "string" ? vt(t) : t,
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || Dd()
  };
}
function Ze({
  pathname: e = "/",
  search: t = "",
  hash: n = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function vt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
  }
  return t;
}
function kd(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = r, s = i.history, o = "POP", c = null, d = u();
  d == null && (d = 0, s.replaceState({ ...s.state, idx: d }, ""));
  function u() {
    return (s.state || { idx: null }).idx;
  }
  function h() {
    o = "POP";
    let P = u(), T = P == null ? null : P - d;
    d = P, c && c({ action: o, location: N.location, delta: T });
  }
  function m(P, T) {
    o = "PUSH";
    let w = wn(N.location, P, T);
    d = u() + 1;
    let C = ka(w, d), k = N.createHref(w);
    try {
      s.pushState(C, "", k);
    } catch (A) {
      if (A instanceof DOMException && A.name === "DataCloneError")
        throw A;
      i.location.assign(k);
    }
    a && c && c({ action: o, location: N.location, delta: 1 });
  }
  function g(P, T) {
    o = "REPLACE";
    let w = wn(N.location, P, T);
    d = u();
    let C = ka(w, d), k = N.createHref(w);
    s.replaceState(C, "", k), a && c && c({ action: o, location: N.location, delta: 0 });
  }
  function v(P) {
    return Eo(P);
  }
  let N = {
    get action() {
      return o;
    },
    get location() {
      return e(i, s);
    },
    listen(P) {
      if (c)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(Da, h), c = P, () => {
        i.removeEventListener(Da, h), c = null;
      };
    },
    createHref(P) {
      return t(i, P);
    },
    createURL: v,
    encodeLocation(P) {
      let T = v(P);
      return {
        pathname: T.pathname,
        search: T.search,
        hash: T.hash
      };
    },
    push: m,
    replace: g,
    go(P) {
      return s.go(P);
    }
  };
  return N;
}
function Eo(e, t = !1) {
  let n = "http://localhost";
  typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href), H(n, "No window.location.(origin|href) available to create URL");
  let r = typeof e == "string" ? e : Ze(e);
  return r = r.replace(/ $/, "%20"), !t && r.startsWith("//") && (r = n + r), new URL(r, n);
}
var dn, La = class {
  /**
   * Create a new `RouterContextProvider` instance
   * @param init An optional initial context map to populate the provider with
   */
  constructor(e) {
    if (Ad(this, dn, /* @__PURE__ */ new Map()), e)
      for (let [t, n] of e)
        this.set(t, n);
  }
  /**
   * Access a value from the context. If no value has been set for the context,
   * it will return the context's `defaultValue` if provided, or throw an error
   * if no `defaultValue` was set.
   * @param context The context to get the value for
   * @returns The value for the context, or the context's `defaultValue` if no
   * value was set
   */
  get(e) {
    if (Rr(this, dn).has(e))
      return Rr(this, dn).get(e);
    if (e.defaultValue !== void 0)
      return e.defaultValue;
    throw new Error("No value found for context");
  }
  /**
   * Set a value for the context. If the context already has a value set, this
   * will overwrite it.
   *
   * @param context The context to set the value for
   * @param value The value to set for the context
   * @returns {void}
   */
  set(e, t) {
    Rr(this, dn).set(e, t);
  }
};
dn = /* @__PURE__ */ new WeakMap();
var Ld = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function Vd(e) {
  return Ld.has(
    e
  );
}
var jd = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "middleware",
  "children"
]);
function Fd(e) {
  return jd.has(
    e
  );
}
function Od(e) {
  return e.index === !0;
}
function Nn(e, t, n = [], r = {}, i = !1) {
  return e.map((a, s) => {
    let o = [...n, String(s)], c = typeof a.id == "string" ? a.id : o.join("-");
    if (H(
      a.index !== !0 || !a.children,
      "Cannot specify children on an index route"
    ), H(
      i || !r[c],
      `Found a route id collision on id "${c}".  Route id's must be globally unique within Data Router usages`
    ), Od(a)) {
      let d = {
        ...a,
        id: c
      };
      return r[c] = Va(
        d,
        t(d)
      ), d;
    } else {
      let d = {
        ...a,
        id: c,
        children: void 0
      };
      return r[c] = Va(
        d,
        t(d)
      ), a.children && (d.children = Nn(
        a.children,
        t,
        o,
        r,
        i
      )), d;
    }
  });
}
function Va(e, t) {
  return Object.assign(e, {
    ...t,
    ...typeof t.lazy == "object" && t.lazy != null ? {
      lazy: {
        ...e.lazy,
        ...t.lazy
      }
    } : {}
  });
}
function dt(e, t, n = "/") {
  return un(e, t, n, !1);
}
function un(e, t, n, r) {
  let i = typeof t == "string" ? vt(t) : t, a = $e(i.pathname || "/", n);
  if (a == null)
    return null;
  let s = Do(e);
  Id(s);
  let o = null;
  for (let c = 0; o == null && c < s.length; ++c) {
    let d = Yd(a);
    o = Xd(
      s[c],
      d,
      r
    );
  }
  return o;
}
function _d(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: t[n.id],
    loaderData: t[n.id],
    handle: n.handle
  };
}
function Do(e, t = [], n = [], r = "", i = !1) {
  let a = (s, o, c = i, d) => {
    let u = {
      relativePath: d === void 0 ? s.path || "" : d,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s
    };
    if (u.relativePath.startsWith("/")) {
      if (!u.relativePath.startsWith(r) && c)
        return;
      H(
        u.relativePath.startsWith(r),
        `Absolute route path "${u.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), u.relativePath = u.relativePath.slice(r.length);
    }
    let h = qe([r, u.relativePath]), m = n.concat(u);
    s.children && s.children.length > 0 && (H(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      s.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
    ), Do(
      s.children,
      t,
      m,
      h,
      c
    )), !(s.path == null && !s.index) && t.push({
      path: h,
      score: Kd(h, s.index),
      routesMeta: m
    });
  };
  return e.forEach((s, o) => {
    if (s.path === "" || !s.path?.includes("?"))
      a(s, o);
    else
      for (let c of ko(s.path))
        a(s, o, !0, c);
  }), t;
}
function ko(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [a, ""] : [a];
  let s = ko(r.join("/")), o = [];
  return o.push(
    ...s.map(
      (c) => c === "" ? a : [a, c].join("/")
    )
  ), i && o.push(...s), o.map(
    (c) => e.startsWith("/") && c === "" ? "/" : c
  );
}
function Id(e) {
  e.sort(
    (t, n) => t.score !== n.score ? n.score - t.score : Gd(
      t.routesMeta.map((r) => r.childrenIndex),
      n.routesMeta.map((r) => r.childrenIndex)
    )
  );
}
var Bd = /^:[\w-]+$/, $d = 3, Ud = 2, zd = 1, Hd = 10, Wd = -2, ja = (e) => e === "*";
function Kd(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(ja) && (r += Wd), t && (r += Ud), n.filter((i) => !ja(i)).reduce(
    (i, a) => i + (Bd.test(a) ? $d : a === "" ? zd : Hd),
    r
  );
}
function Gd(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Xd(e, t, n = !1) {
  let { routesMeta: r } = e, i = {}, a = "/", s = [];
  for (let o = 0; o < r.length; ++o) {
    let c = r[o], d = o === r.length - 1, u = a === "/" ? t : t.slice(a.length) || "/", h = lr(
      { path: c.relativePath, caseSensitive: c.caseSensitive, end: d },
      u
    ), m = c.route;
    if (!h && d && n && !r[r.length - 1].route.index && (h = lr(
      {
        path: c.relativePath,
        caseSensitive: c.caseSensitive,
        end: !1
      },
      u
    )), !h)
      return null;
    Object.assign(i, h.params), s.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: qe([a, h.pathname]),
      pathnameBase: Qd(
        qe([a, h.pathnameBase])
      ),
      route: m
    }), h.pathnameBase !== "/" && (a = qe([a, h.pathnameBase]));
  }
  return s;
}
function lr(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = qd(
    e.path,
    e.caseSensitive,
    e.end
  ), i = t.match(n);
  if (!i) return null;
  let a = i[0], s = a.replace(/(.)\/+$/, "$1"), o = i.slice(1);
  return {
    params: r.reduce(
      (d, { paramName: u, isOptional: h }, m) => {
        if (u === "*") {
          let v = o[m] || "";
          s = a.slice(0, a.length - v.length).replace(/(.)\/+$/, "$1");
        }
        const g = o[m];
        return h && !g ? d[u] = void 0 : d[u] = (g || "").replace(/%2F/g, "/"), d;
      },
      {}
    ),
    pathname: a,
    pathnameBase: s,
    pattern: e
  };
}
function qd(e, t = !1, n = !0) {
  he(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (s, o, c) => (r.push({ paramName: o, isOptional: c != null }), c ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function Yd(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return he(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function $e(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Jd({
  basename: e,
  pathname: t
}) {
  return t === "/" ? e : qe([e, t]);
}
var Lo = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Pi = (e) => Lo.test(e);
function Zd(e, t = "/") {
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? vt(e) : e, a;
  return n ? (n = n.replace(/\/\/+/g, "/"), n.startsWith("/") ? a = Fa(n.substring(1), "/") : a = Fa(n, t)) : a = t, {
    pathname: a,
    search: eu(r),
    hash: tu(i)
  };
}
function Fa(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function Mr(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    r
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Vo(e) {
  return e.filter(
    (t, n) => n === 0 || t.route.path && t.route.path.length > 0
  );
}
function Ti(e) {
  let t = Vo(e);
  return t.map(
    (n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase
  );
}
function Ci(e, t, n, r = !1) {
  let i;
  typeof e == "string" ? i = vt(e) : (i = { ...e }, H(
    !i.pathname || !i.pathname.includes("?"),
    Mr("?", "pathname", "search", i)
  ), H(
    !i.pathname || !i.pathname.includes("#"),
    Mr("#", "pathname", "hash", i)
  ), H(
    !i.search || !i.search.includes("#"),
    Mr("#", "search", "hash", i)
  ));
  let a = e === "" || i.pathname === "", s = a ? "/" : i.pathname, o;
  if (s == null)
    o = n;
  else {
    let h = t.length - 1;
    if (!r && s.startsWith("..")) {
      let m = s.split("/");
      for (; m[0] === ".."; )
        m.shift(), h -= 1;
      i.pathname = m.join("/");
    }
    o = h >= 0 ? t[h] : "/";
  }
  let c = Zd(i, o), d = s && s !== "/" && s.endsWith("/"), u = (a || s === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (d || u) && (c.pathname += "/"), c;
}
var qe = (e) => e.join("/").replace(/\/\/+/g, "/"), Qd = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), eu = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, tu = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Dn = class {
  constructor(e, t, n, r = !1) {
    this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
  }
};
function Pn(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function kn(e) {
  return e.map((t) => t.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var jo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Fo(e, t) {
  let n = e;
  if (typeof n != "string" || !Lo.test(n))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: n
    };
  let r = n, i = !1;
  if (jo)
    try {
      let a = new URL(window.location.href), s = n.startsWith("//") ? new URL(a.protocol + n) : new URL(n), o = $e(s.pathname, t);
      s.origin === a.origin && o != null ? n = o + s.search + s.hash : i = !0;
    } catch {
      he(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: r,
    isExternal: i,
    to: n
  };
}
var ht = Symbol("Uninstrumented");
function nu(e, t) {
  let n = {
    lazy: [],
    "lazy.loader": [],
    "lazy.action": [],
    "lazy.middleware": [],
    middleware: [],
    loader: [],
    action: []
  };
  e.forEach(
    (i) => i({
      id: t.id,
      index: t.index,
      path: t.path,
      instrument(a) {
        let s = Object.keys(n);
        for (let o of s)
          a[o] && n[o].push(a[o]);
      }
    })
  );
  let r = {};
  if (typeof t.lazy == "function" && n.lazy.length > 0) {
    let i = It(n.lazy, t.lazy, () => {
    });
    i && (r.lazy = i);
  }
  if (typeof t.lazy == "object") {
    let i = t.lazy;
    ["middleware", "loader", "action"].forEach((a) => {
      let s = i[a], o = n[`lazy.${a}`];
      if (typeof s == "function" && o.length > 0) {
        let c = It(o, s, () => {
        });
        c && (r.lazy = Object.assign(r.lazy || {}, {
          [a]: c
        }));
      }
    });
  }
  return ["loader", "action"].forEach((i) => {
    let a = t[i];
    if (typeof a == "function" && n[i].length > 0) {
      let s = a[ht] ?? a, o = It(
        n[i],
        s,
        (...c) => Oa(c[0])
      );
      o && (i === "loader" && s.hydrate === !0 && (o.hydrate = !0), o[ht] = s, r[i] = o);
    }
  }), t.middleware && t.middleware.length > 0 && n.middleware.length > 0 && (r.middleware = t.middleware.map((i) => {
    let a = i[ht] ?? i, s = It(
      n.middleware,
      a,
      (...o) => Oa(o[0])
    );
    return s ? (s[ht] = a, s) : i;
  })), r;
}
function ru(e, t) {
  let n = {
    navigate: [],
    fetch: []
  };
  if (t.forEach(
    (r) => r({
      instrument(i) {
        let a = Object.keys(i);
        for (let s of a)
          i[s] && n[s].push(i[s]);
      }
    })
  ), n.navigate.length > 0) {
    let r = e.navigate[ht] ?? e.navigate, i = It(
      n.navigate,
      r,
      (...a) => {
        let [s, o] = a;
        return {
          to: typeof s == "number" || typeof s == "string" ? s : s ? Ze(s) : ".",
          ..._a(e, o ?? {})
        };
      }
    );
    i && (i[ht] = r, e.navigate = i);
  }
  if (n.fetch.length > 0) {
    let r = e.fetch[ht] ?? e.fetch, i = It(n.fetch, r, (...a) => {
      let [s, , o, c] = a;
      return {
        href: o ?? ".",
        fetcherKey: s,
        ..._a(e, c ?? {})
      };
    });
    i && (i[ht] = r, e.fetch = i);
  }
  return e;
}
function It(e, t, n) {
  return e.length === 0 ? null : async (...r) => {
    let i = await Oo(
      e,
      n(...r),
      () => t(...r),
      e.length - 1
    );
    if (i.type === "error")
      throw i.value;
    return i.value;
  };
}
async function Oo(e, t, n, r) {
  let i = e[r], a;
  if (i) {
    let s, o = async () => (s ? console.error("You cannot call instrumented handlers more than once") : s = Oo(e, t, n, r - 1), a = await s, H(a, "Expected a result"), a.type === "error" && a.value instanceof Error ? { status: "error", error: a.value } : { status: "success", error: void 0 });
    try {
      await i(o, t);
    } catch (c) {
      console.error("An instrumentation function threw an error:", c);
    }
    s || await o(), await s;
  } else
    try {
      a = { type: "success", value: await n() };
    } catch (s) {
      a = { type: "error", value: s };
    }
  return a || {
    type: "error",
    value: new Error("No result assigned in instrumentation chain.")
  };
}
function Oa(e) {
  let { request: t, context: n, params: r, unstable_pattern: i } = e;
  return {
    request: iu(t),
    params: { ...r },
    unstable_pattern: i,
    context: au(n)
  };
}
function _a(e, t) {
  return {
    currentUrl: Ze(e.state.location),
    ..."formMethod" in t ? { formMethod: t.formMethod } : {},
    ..."formEncType" in t ? { formEncType: t.formEncType } : {},
    ..."formData" in t ? { formData: t.formData } : {},
    ..."body" in t ? { body: t.body } : {}
  };
}
function iu(e) {
  return {
    method: e.method,
    url: e.url,
    headers: {
      get: (...t) => e.headers.get(...t)
    }
  };
}
function au(e) {
  if (ou(e)) {
    let t = { ...e };
    return Object.freeze(t), t;
  } else
    return {
      get: (t) => e.get(t)
    };
}
var su = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function ou(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === su;
}
var _o = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
], lu = new Set(
  _o
), cu = [
  "GET",
  ..._o
], du = new Set(cu), Io = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), uu = /* @__PURE__ */ new Set([307, 308]), Ar = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, hu = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, an = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, fu = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary
}), Bo = "remix-router-transitions", $o = Symbol("ResetLoaderData");
function mu(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0, n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u";
  H(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let r = e.hydrationRouteProperties || [], i = e.mapRouteProperties || fu, a = i;
  if (e.unstable_instrumentations) {
    let p = e.unstable_instrumentations;
    a = (y) => ({
      ...i(y),
      ...nu(
        p.map((x) => x.route).filter(Boolean),
        y
      )
    });
  }
  let s = {}, o = Nn(
    e.routes,
    a,
    void 0,
    s
  ), c, d = e.basename || "/";
  d.startsWith("/") || (d = `/${d}`);
  let u = e.dataStrategy || bu, h = {
    ...e.future
  }, m = null, g = /* @__PURE__ */ new Set(), v = null, N = null, P = null, T = e.hydrationData != null, w = dt(o, e.history.location, d), C = !1, k = null, A;
  if (w == null && !e.patchRoutesOnNavigation) {
    let p = Oe(404, {
      pathname: e.history.location.pathname
    }), { matches: y, route: x } = qn(o);
    A = !0, w = y, k = { [x.id]: p };
  } else if (w && !e.hydrationData && zn(
    w,
    o,
    e.history.location.pathname
  ).active && (w = null), w)
    if (w.some((p) => p.route.lazy))
      A = !1;
    else if (!w.some((p) => Si(p.route)))
      A = !0;
    else {
      let p = e.hydrationData ? e.hydrationData.loaderData : null, y = e.hydrationData ? e.hydrationData.errors : null;
      if (y) {
        let x = w.findIndex(
          (S) => y[S.route.id] !== void 0
        );
        A = w.slice(0, x + 1).every(
          (S) => !Yr(S.route, p, y)
        );
      } else
        A = w.every(
          (x) => !Yr(x.route, p, y)
        );
    }
  else {
    A = !1, w = [];
    let p = zn(
      null,
      o,
      e.history.location.pathname
    );
    p.active && p.matches && (C = !0, w = p.matches);
  }
  let O, b = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: w,
    initialized: A,
    navigation: Ar,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || k,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, M = "POP", U = null, W = !1, X, ce = !1, Me = /* @__PURE__ */ new Map(), se = null, J = !1, re = !1, Z = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Map(), ne = 0, de = -1, Ae = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Set(), wt = /* @__PURE__ */ new Map(), $n, Qt = null;
  function zc() {
    if (m = e.history.listen(
      ({ action: p, location: y, delta: x }) => {
        if ($n) {
          $n(), $n = void 0;
          return;
        }
        he(
          wt.size === 0 || x != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let S = Ca({
          currentLocation: b.location,
          nextLocation: y,
          historyAction: p
        });
        if (S && x != null) {
          let R = new Promise((L) => {
            $n = L;
          });
          e.history.go(x * -1), Un(S, {
            state: "blocked",
            location: y,
            proceed() {
              Un(S, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: y
              }), R.then(() => e.history.go(x));
            },
            reset() {
              let L = new Map(b.blockers);
              L.set(S, an), be({ blockers: L });
            }
          }), U?.resolve(), U = null;
          return;
        }
        return Nt(p, y);
      }
    ), n) {
      Ou(t, Me);
      let p = () => _u(t, Me);
      t.addEventListener("pagehide", p), se = () => t.removeEventListener("pagehide", p);
    }
    return b.initialized || Nt("POP", b.location, {
      initialHydration: !0
    }), O;
  }
  function Hc() {
    m && m(), se && se(), g.clear(), X && X.abort(), b.fetchers.forEach((p, y) => Pr(y)), b.blockers.forEach((p, y) => Ta(y));
  }
  function Wc(p) {
    return g.add(p), () => g.delete(p);
  }
  function be(p, y = {}) {
    p.matches && (p.matches = p.matches.map((R) => {
      let L = s[R.route.id], E = R.route;
      return E.element !== L.element || E.errorElement !== L.errorElement || E.hydrateFallbackElement !== L.hydrateFallbackElement ? {
        ...R,
        route: L
      } : R;
    })), b = {
      ...b,
      ...p
    };
    let x = [], S = [];
    b.fetchers.forEach((R, L) => {
      R.state === "idle" && (Ee.has(L) ? x.push(L) : S.push(L));
    }), Ee.forEach((R) => {
      !b.fetchers.has(R) && !z.has(R) && x.push(R);
    }), [...g].forEach(
      (R) => R(b, {
        deletedFetchers: x,
        newErrors: p.errors ?? null,
        viewTransitionOpts: y.viewTransitionOpts,
        flushSync: y.flushSync === !0
      })
    ), x.forEach((R) => Pr(R)), S.forEach((R) => b.fetchers.delete(R));
  }
  function Ft(p, y, { flushSync: x } = {}) {
    let S = b.actionData != null && b.navigation.formMethod != null && we(b.navigation.formMethod) && b.navigation.state === "loading" && p.state?._isRedirect !== !0, R;
    y.actionData ? Object.keys(y.actionData).length > 0 ? R = y.actionData : R = null : S ? R = b.actionData : R = null;
    let L = y.loaderData ? Xa(
      b.loaderData,
      y.loaderData,
      y.matches || [],
      y.errors
    ) : b.loaderData, E = b.blockers;
    E.size > 0 && (E = new Map(E), E.forEach((_, j) => E.set(j, an)));
    let D = J ? !1 : Ra(p, y.matches || b.matches), V = W === !0 || b.navigation.formMethod != null && we(b.navigation.formMethod) && p.state?._isRedirect !== !0;
    c && (o = c, c = void 0), J || M === "POP" || (M === "PUSH" ? e.history.push(p, p.state) : M === "REPLACE" && e.history.replace(p, p.state));
    let F;
    if (M === "POP") {
      let _ = Me.get(b.location.pathname);
      _ && _.has(p.pathname) ? F = {
        currentLocation: b.location,
        nextLocation: p
      } : Me.has(p.pathname) && (F = {
        currentLocation: p,
        nextLocation: b.location
      });
    } else if (ce) {
      let _ = Me.get(b.location.pathname);
      _ ? _.add(p.pathname) : (_ = /* @__PURE__ */ new Set([p.pathname]), Me.set(b.location.pathname, _)), F = {
        currentLocation: b.location,
        nextLocation: p
      };
    }
    be(
      {
        ...y,
        // matches, errors, fetchers go through as-is
        actionData: R,
        loaderData: L,
        historyAction: M,
        location: p,
        initialized: !0,
        navigation: Ar,
        revalidation: "idle",
        restoreScrollPosition: D,
        preventScrollReset: V,
        blockers: E
      },
      {
        viewTransitionOpts: F,
        flushSync: x === !0
      }
    ), M = "POP", W = !1, ce = !1, J = !1, re = !1, U?.resolve(), U = null, Qt?.resolve(), Qt = null;
  }
  async function ya(p, y) {
    if (U?.resolve(), U = null, typeof p == "number") {
      U || (U = Za());
      let Y = U.promise;
      return e.history.go(p), Y;
    }
    let x = qr(
      b.location,
      b.matches,
      d,
      p,
      y?.fromRouteId,
      y?.relative
    ), { path: S, submission: R, error: L } = Ia(
      !1,
      x,
      y
    ), E = b.location, D = wn(b.location, S, y && y.state);
    D = {
      ...D,
      ...e.history.encodeLocation(D)
    };
    let V = y && y.replace != null ? y.replace : void 0, F = "PUSH";
    V === !0 ? F = "REPLACE" : V === !1 || R != null && we(R.formMethod) && R.formAction === b.location.pathname + b.location.search && (F = "REPLACE");
    let _ = y && "preventScrollReset" in y ? y.preventScrollReset === !0 : void 0, j = (y && y.flushSync) === !0, q = Ca({
      currentLocation: E,
      nextLocation: D,
      historyAction: F
    });
    if (q) {
      Un(q, {
        state: "blocked",
        location: D,
        proceed() {
          Un(q, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: D
          }), ya(p, y);
        },
        reset() {
          let Y = new Map(b.blockers);
          Y.set(q, an), be({ blockers: Y });
        }
      });
      return;
    }
    await Nt(F, D, {
      submission: R,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: L,
      preventScrollReset: _,
      replace: y && y.replace,
      enableViewTransition: y && y.viewTransition,
      flushSync: j,
      callSiteDefaultShouldRevalidate: y && y.unstable_defaultShouldRevalidate
    });
  }
  function Kc() {
    Qt || (Qt = Za()), Nr(), be({ revalidation: "loading" });
    let p = Qt.promise;
    return b.navigation.state === "submitting" ? p : b.navigation.state === "idle" ? (Nt(b.historyAction, b.location, {
      startUninterruptedRevalidation: !0
    }), p) : (Nt(
      M || b.historyAction,
      b.navigation.location,
      {
        overrideNavigation: b.navigation,
        // Proxy through any rending view transition
        enableViewTransition: ce === !0
      }
    ), p);
  }
  async function Nt(p, y, x) {
    X && X.abort(), X = null, M = p, J = (x && x.startUninterruptedRevalidation) === !0, rd(b.location, b.matches), W = (x && x.preventScrollReset) === !0, ce = (x && x.enableViewTransition) === !0;
    let S = c || o, R = x && x.overrideNavigation, L = x?.initialHydration && b.matches && b.matches.length > 0 && !C ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      b.matches
    ) : dt(S, y, d), E = (x && x.flushSync) === !0;
    if (L && b.initialized && !re && Ru(b.location, y) && !(x && x.submission && we(x.submission.formMethod))) {
      Ft(y, { matches: L }, { flushSync: E });
      return;
    }
    let D = zn(L, S, y.pathname);
    if (D.active && D.matches && (L = D.matches), !L) {
      let { error: pe, notFoundMatches: Te, route: te } = Tr(
        y.pathname
      );
      Ft(
        y,
        {
          matches: Te,
          loaderData: {},
          errors: {
            [te.id]: pe
          }
        },
        { flushSync: E }
      );
      return;
    }
    X = new AbortController();
    let V = _t(
      e.history,
      y,
      X.signal,
      x && x.submission
    ), F = e.getContext ? await e.getContext() : new La(), _;
    if (x && x.pendingError)
      _ = [
        ut(L).route.id,
        { type: "error", error: x.pendingError }
      ];
    else if (x && x.submission && we(x.submission.formMethod)) {
      let pe = await Gc(
        V,
        y,
        x.submission,
        L,
        F,
        D.active,
        x && x.initialHydration === !0,
        { replace: x.replace, flushSync: E }
      );
      if (pe.shortCircuited)
        return;
      if (pe.pendingActionResult) {
        let [Te, te] = pe.pendingActionResult;
        if (De(te) && Pn(te.error) && te.error.status === 404) {
          X = null, Ft(y, {
            matches: pe.matches,
            loaderData: {},
            errors: {
              [Te]: te.error
            }
          });
          return;
        }
      }
      L = pe.matches || L, _ = pe.pendingActionResult, R = Er(y, x.submission), E = !1, D.active = !1, V = _t(
        e.history,
        V.url,
        V.signal
      );
    }
    let {
      shortCircuited: j,
      matches: q,
      loaderData: Y,
      errors: ge
    } = await Xc(
      V,
      y,
      L,
      F,
      D.active,
      R,
      x && x.submission,
      x && x.fetcherSubmission,
      x && x.replace,
      x && x.initialHydration === !0,
      E,
      _,
      x && x.callSiteDefaultShouldRevalidate
    );
    j || (X = null, Ft(y, {
      matches: q || L,
      ...qa(_),
      loaderData: Y,
      errors: ge
    }));
  }
  async function Gc(p, y, x, S, R, L, E, D = {}) {
    Nr();
    let V = ju(y, x);
    if (be({ navigation: V }, { flushSync: D.flushSync === !0 }), L) {
      let j = await Hn(
        S,
        y.pathname,
        p.signal
      );
      if (j.type === "aborted")
        return { shortCircuited: !0 };
      if (j.type === "error") {
        if (j.partialMatches.length === 0) {
          let { matches: Y, route: ge } = qn(o);
          return {
            matches: Y,
            pendingActionResult: [
              ge.id,
              {
                type: "error",
                error: j.error
              }
            ]
          };
        }
        let q = ut(j.partialMatches).route.id;
        return {
          matches: j.partialMatches,
          pendingActionResult: [
            q,
            {
              type: "error",
              error: j.error
            }
          ]
        };
      } else if (j.matches)
        S = j.matches;
      else {
        let { notFoundMatches: q, error: Y, route: ge } = Tr(
          y.pathname
        );
        return {
          matches: q,
          pendingActionResult: [
            ge.id,
            {
              type: "error",
              error: Y
            }
          ]
        };
      }
    }
    let F, _ = tr(S, y);
    if (!_.route.action && !_.route.lazy)
      F = {
        type: "error",
        error: Oe(405, {
          method: p.method,
          pathname: y.pathname,
          routeId: _.route.id
        })
      };
    else {
      let j = Wt(
        a,
        s,
        p,
        S,
        _,
        E ? [] : r,
        R
      ), q = await en(
        p,
        j,
        R,
        null
      );
      if (F = q[_.route.id], !F) {
        for (let Y of S)
          if (q[Y.route.id]) {
            F = q[Y.route.id];
            break;
          }
      }
      if (p.signal.aborted)
        return { shortCircuited: !0 };
    }
    if (At(F)) {
      let j;
      return D && D.replace != null ? j = D.replace : j = Wa(
        F.response.headers.get("Location"),
        new URL(p.url),
        d,
        e.history
      ) === b.location.pathname + b.location.search, await Pt(p, F, !0, {
        submission: x,
        replace: j
      }), { shortCircuited: !0 };
    }
    if (De(F)) {
      let j = ut(S, _.route.id);
      return (D && D.replace) !== !0 && (M = "PUSH"), {
        matches: S,
        pendingActionResult: [
          j.route.id,
          F,
          _.route.id
        ]
      };
    }
    return {
      matches: S,
      pendingActionResult: [_.route.id, F]
    };
  }
  async function Xc(p, y, x, S, R, L, E, D, V, F, _, j, q) {
    let Y = L || Er(y, E), ge = E || D || Ja(Y), pe = !J && !F;
    if (R) {
      if (pe) {
        let xe = va(j);
        be(
          {
            navigation: Y,
            ...xe !== void 0 ? { actionData: xe } : {}
          },
          {
            flushSync: _
          }
        );
      }
      let G = await Hn(
        x,
        y.pathname,
        p.signal
      );
      if (G.type === "aborted")
        return { shortCircuited: !0 };
      if (G.type === "error") {
        if (G.partialMatches.length === 0) {
          let { matches: Ot, route: St } = qn(o);
          return {
            matches: Ot,
            loaderData: {},
            errors: {
              [St.id]: G.error
            }
          };
        }
        let xe = ut(G.partialMatches).route.id;
        return {
          matches: G.partialMatches,
          loaderData: {},
          errors: {
            [xe]: G.error
          }
        };
      } else if (G.matches)
        x = G.matches;
      else {
        let { error: xe, notFoundMatches: Ot, route: St } = Tr(
          y.pathname
        );
        return {
          matches: Ot,
          loaderData: {},
          errors: {
            [St.id]: xe
          }
        };
      }
    }
    let Te = c || o, { dsMatches: te, revalidatingFetchers: Ve } = Ba(
      p,
      S,
      a,
      s,
      e.history,
      b,
      x,
      ge,
      y,
      F ? [] : r,
      F === !0,
      re,
      Z,
      Ee,
      ke,
      Se,
      Te,
      d,
      e.patchRoutesOnNavigation != null,
      j,
      q
    );
    if (de = ++ne, !e.dataStrategy && !te.some((G) => G.shouldLoad) && !te.some(
      (G) => G.route.middleware && G.route.middleware.length > 0
    ) && Ve.length === 0) {
      let G = Na();
      return Ft(
        y,
        {
          matches: x,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: j && De(j[1]) ? { [j[0]]: j[1].error } : null,
          ...qa(j),
          ...G ? { fetchers: new Map(b.fetchers) } : {}
        },
        { flushSync: _ }
      ), { shortCircuited: !0 };
    }
    if (pe) {
      let G = {};
      if (!R) {
        G.navigation = Y;
        let xe = va(j);
        xe !== void 0 && (G.actionData = xe);
      }
      Ve.length > 0 && (G.fetchers = qc(Ve)), be(G, { flushSync: _ });
    }
    Ve.forEach((G) => {
      tt(G.key), G.controller && z.set(G.key, G.controller);
    });
    let Tt = () => Ve.forEach((G) => tt(G.key));
    X && X.signal.addEventListener(
      "abort",
      Tt
    );
    let { loaderResults: tn, fetcherResults: lt } = await ba(
      te,
      Ve,
      p,
      S
    );
    if (p.signal.aborted)
      return { shortCircuited: !0 };
    X && X.signal.removeEventListener(
      "abort",
      Tt
    ), Ve.forEach((G) => z.delete(G.key));
    let Xe = Yn(tn);
    if (Xe)
      return await Pt(p, Xe.result, !0, {
        replace: V
      }), { shortCircuited: !0 };
    if (Xe = Yn(lt), Xe)
      return Se.add(Xe.key), await Pt(p, Xe.result, !0, {
        replace: V
      }), { shortCircuited: !0 };
    let { loaderData: Cr, errors: nn } = Ga(
      b,
      x,
      tn,
      j,
      Ve,
      lt
    );
    F && b.errors && (nn = { ...b.errors, ...nn });
    let Ct = Na(), Wn = Pa(de), Kn = Ct || Wn || Ve.length > 0;
    return {
      matches: x,
      loaderData: Cr,
      errors: nn,
      ...Kn ? { fetchers: new Map(b.fetchers) } : {}
    };
  }
  function va(p) {
    if (p && !De(p[1]))
      return {
        [p[0]]: p[1].data
      };
    if (b.actionData)
      return Object.keys(b.actionData).length === 0 ? null : b.actionData;
  }
  function qc(p) {
    return p.forEach((y) => {
      let x = b.fetchers.get(y.key), S = sn(
        void 0,
        x ? x.data : void 0
      );
      b.fetchers.set(y.key, S);
    }), new Map(b.fetchers);
  }
  async function Yc(p, y, x, S) {
    tt(p);
    let R = (S && S.flushSync) === !0, L = c || o, E = qr(
      b.location,
      b.matches,
      d,
      x,
      y,
      S?.relative
    ), D = dt(L, E, d), V = zn(D, L, E);
    if (V.active && V.matches && (D = V.matches), !D) {
      et(
        p,
        y,
        Oe(404, { pathname: E }),
        { flushSync: R }
      );
      return;
    }
    let { path: F, submission: _, error: j } = Ia(
      !0,
      E,
      S
    );
    if (j) {
      et(p, y, j, { flushSync: R });
      return;
    }
    let q = e.getContext ? await e.getContext() : new La(), Y = (S && S.preventScrollReset) === !0;
    if (_ && we(_.formMethod)) {
      await Jc(
        p,
        y,
        F,
        D,
        q,
        V.active,
        R,
        Y,
        _,
        S && S.unstable_defaultShouldRevalidate
      );
      return;
    }
    ke.set(p, { routeId: y, path: F }), await Zc(
      p,
      y,
      F,
      D,
      q,
      V.active,
      R,
      Y,
      _
    );
  }
  async function Jc(p, y, x, S, R, L, E, D, V, F) {
    Nr(), ke.delete(p);
    let _ = b.fetchers.get(p);
    Qe(p, Fu(V, _), {
      flushSync: E
    });
    let j = new AbortController(), q = _t(
      e.history,
      x,
      j.signal,
      V
    );
    if (L) {
      let oe = await Hn(
        S,
        new URL(q.url).pathname,
        q.signal,
        p
      );
      if (oe.type === "aborted")
        return;
      if (oe.type === "error") {
        et(p, y, oe.error, { flushSync: E });
        return;
      } else if (oe.matches)
        S = oe.matches;
      else {
        et(
          p,
          y,
          Oe(404, { pathname: x }),
          { flushSync: E }
        );
        return;
      }
    }
    let Y = tr(S, x);
    if (!Y.route.action && !Y.route.lazy) {
      let oe = Oe(405, {
        method: V.formMethod,
        pathname: x,
        routeId: y
      });
      et(p, y, oe, { flushSync: E });
      return;
    }
    z.set(p, j);
    let ge = ne, pe = Wt(
      a,
      s,
      q,
      S,
      Y,
      r,
      R
    ), Te = await en(
      q,
      pe,
      R,
      p
    ), te = Te[Y.route.id];
    if (!te) {
      for (let oe of pe)
        if (Te[oe.route.id]) {
          te = Te[oe.route.id];
          break;
        }
    }
    if (q.signal.aborted) {
      z.get(p) === j && z.delete(p);
      return;
    }
    if (Ee.has(p)) {
      if (At(te) || De(te)) {
        Qe(p, nt(void 0));
        return;
      }
    } else {
      if (At(te))
        if (z.delete(p), de > ge) {
          Qe(p, nt(void 0));
          return;
        } else
          return Se.add(p), Qe(p, sn(V)), Pt(q, te, !1, {
            fetcherSubmission: V,
            preventScrollReset: D
          });
      if (De(te)) {
        et(p, y, te.error);
        return;
      }
    }
    let Ve = b.navigation.location || b.location, Tt = _t(
      e.history,
      Ve,
      j.signal
    ), tn = c || o, lt = b.navigation.state !== "idle" ? dt(tn, b.navigation.location, d) : b.matches;
    H(lt, "Didn't find any matches after fetcher action");
    let Xe = ++ne;
    Ae.set(p, Xe);
    let Cr = sn(V, te.data);
    b.fetchers.set(p, Cr);
    let { dsMatches: nn, revalidatingFetchers: Ct } = Ba(
      Tt,
      R,
      a,
      s,
      e.history,
      b,
      lt,
      V,
      Ve,
      r,
      !1,
      re,
      Z,
      Ee,
      ke,
      Se,
      tn,
      d,
      e.patchRoutesOnNavigation != null,
      [Y.route.id, te],
      F
    );
    Ct.filter((oe) => oe.key !== p).forEach((oe) => {
      let Gn = oe.key, Aa = b.fetchers.get(Gn), sd = sn(
        void 0,
        Aa ? Aa.data : void 0
      );
      b.fetchers.set(Gn, sd), tt(Gn), oe.controller && z.set(Gn, oe.controller);
    }), be({ fetchers: new Map(b.fetchers) });
    let Wn = () => Ct.forEach((oe) => tt(oe.key));
    j.signal.addEventListener(
      "abort",
      Wn
    );
    let { loaderResults: Kn, fetcherResults: G } = await ba(
      nn,
      Ct,
      Tt,
      R
    );
    if (j.signal.aborted)
      return;
    if (j.signal.removeEventListener(
      "abort",
      Wn
    ), Ae.delete(p), z.delete(p), Ct.forEach((oe) => z.delete(oe.key)), b.fetchers.has(p)) {
      let oe = nt(te.data);
      b.fetchers.set(p, oe);
    }
    let xe = Yn(Kn);
    if (xe)
      return Pt(
        Tt,
        xe.result,
        !1,
        { preventScrollReset: D }
      );
    if (xe = Yn(G), xe)
      return Se.add(xe.key), Pt(
        Tt,
        xe.result,
        !1,
        { preventScrollReset: D }
      );
    let { loaderData: Ot, errors: St } = Ga(
      b,
      lt,
      Kn,
      void 0,
      Ct,
      G
    );
    Pa(Xe), b.navigation.state === "loading" && Xe > de ? (H(M, "Expected pending action"), X && X.abort(), Ft(b.navigation.location, {
      matches: lt,
      loaderData: Ot,
      errors: St,
      fetchers: new Map(b.fetchers)
    })) : (be({
      errors: St,
      loaderData: Xa(
        b.loaderData,
        Ot,
        lt,
        St
      ),
      fetchers: new Map(b.fetchers)
    }), re = !1);
  }
  async function Zc(p, y, x, S, R, L, E, D, V) {
    let F = b.fetchers.get(p);
    Qe(
      p,
      sn(
        V,
        F ? F.data : void 0
      ),
      { flushSync: E }
    );
    let _ = new AbortController(), j = _t(
      e.history,
      x,
      _.signal
    );
    if (L) {
      let te = await Hn(
        S,
        new URL(j.url).pathname,
        j.signal,
        p
      );
      if (te.type === "aborted")
        return;
      if (te.type === "error") {
        et(p, y, te.error, { flushSync: E });
        return;
      } else if (te.matches)
        S = te.matches;
      else {
        et(
          p,
          y,
          Oe(404, { pathname: x }),
          { flushSync: E }
        );
        return;
      }
    }
    let q = tr(S, x);
    z.set(p, _);
    let Y = ne, ge = Wt(
      a,
      s,
      j,
      S,
      q,
      r,
      R
    ), Te = (await en(
      j,
      ge,
      R,
      p
    ))[q.route.id];
    if (z.get(p) === _ && z.delete(p), !j.signal.aborted) {
      if (Ee.has(p)) {
        Qe(p, nt(void 0));
        return;
      }
      if (At(Te))
        if (de > Y) {
          Qe(p, nt(void 0));
          return;
        } else {
          Se.add(p), await Pt(j, Te, !1, {
            preventScrollReset: D
          });
          return;
        }
      if (De(Te)) {
        et(p, y, Te.error);
        return;
      }
      Qe(p, nt(Te.data));
    }
  }
  async function Pt(p, y, x, {
    submission: S,
    fetcherSubmission: R,
    preventScrollReset: L,
    replace: E
  } = {}) {
    x || (U?.resolve(), U = null), y.response.headers.has("X-Remix-Revalidate") && (re = !0);
    let D = y.response.headers.get("Location");
    H(D, "Expected a Location header on the redirect Response"), D = Wa(
      D,
      new URL(p.url),
      d,
      e.history
    );
    let V = wn(b.location, D, {
      _isRedirect: !0
    });
    if (n) {
      let ge = !1;
      if (y.response.headers.has("X-Remix-Reload-Document"))
        ge = !0;
      else if (Pi(D)) {
        const pe = Eo(D, !0);
        ge = // Hard reload if it's an absolute URL to a new origin
        pe.origin !== t.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        $e(pe.pathname, d) == null;
      }
      if (ge) {
        E ? t.location.replace(D) : t.location.assign(D);
        return;
      }
    }
    X = null;
    let F = E === !0 || y.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: _, formAction: j, formEncType: q } = b.navigation;
    !S && !R && _ && j && q && (S = Ja(b.navigation));
    let Y = S || R;
    if (uu.has(y.response.status) && Y && we(Y.formMethod))
      await Nt(F, V, {
        submission: {
          ...Y,
          formAction: D
        },
        // Preserve these flags across redirects
        preventScrollReset: L || W,
        enableViewTransition: x ? ce : void 0
      });
    else {
      let ge = Er(
        V,
        S
      );
      await Nt(F, V, {
        overrideNavigation: ge,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: R,
        // Preserve these flags across redirects
        preventScrollReset: L || W,
        enableViewTransition: x ? ce : void 0
      });
    }
  }
  async function en(p, y, x, S) {
    let R, L = {};
    try {
      R = await wu(
        u,
        p,
        y,
        S,
        x,
        !1
      );
    } catch (E) {
      return y.filter((D) => D.shouldLoad).forEach((D) => {
        L[D.route.id] = {
          type: "error",
          error: E
        };
      }), L;
    }
    if (p.signal.aborted)
      return L;
    if (!we(p.method))
      for (let E of y) {
        if (R[E.route.id]?.type === "error")
          break;
        !R.hasOwnProperty(E.route.id) && !b.loaderData.hasOwnProperty(E.route.id) && (!b.errors || !b.errors.hasOwnProperty(E.route.id)) && E.shouldCallHandler() && (R[E.route.id] = {
          type: "error",
          result: new Error(
            `No result returned from dataStrategy for route ${E.route.id}`
          )
        });
      }
    for (let [E, D] of Object.entries(R))
      if (Du(D)) {
        let V = D.result;
        L[E] = {
          type: "redirect",
          response: Cu(
            V,
            p,
            E,
            y,
            d
          )
        };
      } else
        L[E] = await Tu(D);
    return L;
  }
  async function ba(p, y, x, S) {
    let R = en(
      x,
      p,
      S,
      null
    ), L = Promise.all(
      y.map(async (V) => {
        if (V.matches && V.match && V.request && V.controller) {
          let _ = (await en(
            V.request,
            V.matches,
            S,
            V.key
          ))[V.match.route.id];
          return { [V.key]: _ };
        } else
          return Promise.resolve({
            [V.key]: {
              type: "error",
              error: Oe(404, {
                pathname: V.path
              })
            }
          });
      })
    ), E = await R, D = (await L).reduce(
      (V, F) => Object.assign(V, F),
      {}
    );
    return {
      loaderResults: E,
      fetcherResults: D
    };
  }
  function Nr() {
    re = !0, ke.forEach((p, y) => {
      z.has(y) && Z.add(y), tt(y);
    });
  }
  function Qe(p, y, x = {}) {
    b.fetchers.set(p, y), be(
      { fetchers: new Map(b.fetchers) },
      { flushSync: (x && x.flushSync) === !0 }
    );
  }
  function et(p, y, x, S = {}) {
    let R = ut(b.matches, y);
    Pr(p), be(
      {
        errors: {
          [R.route.id]: x
        },
        fetchers: new Map(b.fetchers)
      },
      { flushSync: (S && S.flushSync) === !0 }
    );
  }
  function xa(p) {
    return Le.set(p, (Le.get(p) || 0) + 1), Ee.has(p) && Ee.delete(p), b.fetchers.get(p) || hu;
  }
  function Qc(p, y) {
    tt(p, y?.reason), Qe(p, nt(null));
  }
  function Pr(p) {
    let y = b.fetchers.get(p);
    z.has(p) && !(y && y.state === "loading" && Ae.has(p)) && tt(p), ke.delete(p), Ae.delete(p), Se.delete(p), Ee.delete(p), Z.delete(p), b.fetchers.delete(p);
  }
  function ed(p) {
    let y = (Le.get(p) || 0) - 1;
    y <= 0 ? (Le.delete(p), Ee.add(p)) : Le.set(p, y), be({ fetchers: new Map(b.fetchers) });
  }
  function tt(p, y) {
    let x = z.get(p);
    x && (x.abort(y), z.delete(p));
  }
  function wa(p) {
    for (let y of p) {
      let x = xa(y), S = nt(x.data);
      b.fetchers.set(y, S);
    }
  }
  function Na() {
    let p = [], y = !1;
    for (let x of Se) {
      let S = b.fetchers.get(x);
      H(S, `Expected fetcher: ${x}`), S.state === "loading" && (Se.delete(x), p.push(x), y = !0);
    }
    return wa(p), y;
  }
  function Pa(p) {
    let y = [];
    for (let [x, S] of Ae)
      if (S < p) {
        let R = b.fetchers.get(x);
        H(R, `Expected fetcher: ${x}`), R.state === "loading" && (tt(x), Ae.delete(x), y.push(x));
      }
    return wa(y), y.length > 0;
  }
  function td(p, y) {
    let x = b.blockers.get(p) || an;
    return wt.get(p) !== y && wt.set(p, y), x;
  }
  function Ta(p) {
    b.blockers.delete(p), wt.delete(p);
  }
  function Un(p, y) {
    let x = b.blockers.get(p) || an;
    H(
      x.state === "unblocked" && y.state === "blocked" || x.state === "blocked" && y.state === "blocked" || x.state === "blocked" && y.state === "proceeding" || x.state === "blocked" && y.state === "unblocked" || x.state === "proceeding" && y.state === "unblocked",
      `Invalid blocker state transition: ${x.state} -> ${y.state}`
    );
    let S = new Map(b.blockers);
    S.set(p, y), be({ blockers: S });
  }
  function Ca({
    currentLocation: p,
    nextLocation: y,
    historyAction: x
  }) {
    if (wt.size === 0)
      return;
    wt.size > 1 && he(!1, "A router only supports one blocker at a time");
    let S = Array.from(wt.entries()), [R, L] = S[S.length - 1], E = b.blockers.get(R);
    if (!(E && E.state === "proceeding") && L({ currentLocation: p, nextLocation: y, historyAction: x }))
      return R;
  }
  function Tr(p) {
    let y = Oe(404, { pathname: p }), x = c || o, { matches: S, route: R } = qn(x);
    return { notFoundMatches: S, route: R, error: y };
  }
  function nd(p, y, x) {
    if (v = p, P = y, N = x || null, !T && b.navigation === Ar) {
      T = !0;
      let S = Ra(b.location, b.matches);
      S != null && be({ restoreScrollPosition: S });
    }
    return () => {
      v = null, P = null, N = null;
    };
  }
  function Sa(p, y) {
    return N && N(
      p,
      y.map((S) => _d(S, b.loaderData))
    ) || p.key;
  }
  function rd(p, y) {
    if (v && P) {
      let x = Sa(p, y);
      v[x] = P();
    }
  }
  function Ra(p, y) {
    if (v) {
      let x = Sa(p, y), S = v[x];
      if (typeof S == "number")
        return S;
    }
    return null;
  }
  function zn(p, y, x) {
    if (e.patchRoutesOnNavigation)
      if (p) {
        if (Object.keys(p[0].params).length > 0)
          return { active: !0, matches: un(
            y,
            x,
            d,
            !0
          ) };
      } else
        return { active: !0, matches: un(
          y,
          x,
          d,
          !0
        ) || [] };
    return { active: !1, matches: null };
  }
  async function Hn(p, y, x, S) {
    if (!e.patchRoutesOnNavigation)
      return { type: "success", matches: p };
    let R = p;
    for (; ; ) {
      let L = c == null, E = c || o, D = s;
      try {
        await e.patchRoutesOnNavigation({
          signal: x,
          path: y,
          matches: R,
          fetcherKey: S,
          patch: (_, j) => {
            x.aborted || $a(
              _,
              j,
              E,
              D,
              a,
              !1
            );
          }
        });
      } catch (_) {
        return { type: "error", error: _, partialMatches: R };
      } finally {
        L && !x.aborted && (o = [...o]);
      }
      if (x.aborted)
        return { type: "aborted" };
      let V = dt(E, y, d), F = null;
      if (V) {
        if (Object.keys(V[0].params).length === 0)
          return { type: "success", matches: V };
        if (F = un(
          E,
          y,
          d,
          !0
        ), !(F && R.length < F.length && Ma(
          R,
          F.slice(0, R.length)
        )))
          return { type: "success", matches: V };
      }
      if (F || (F = un(
        E,
        y,
        d,
        !0
      )), !F || Ma(R, F))
        return { type: "success", matches: null };
      R = F;
    }
  }
  function Ma(p, y) {
    return p.length === y.length && p.every((x, S) => x.route.id === y[S].route.id);
  }
  function id(p) {
    s = {}, c = Nn(
      p,
      a,
      void 0,
      s
    );
  }
  function ad(p, y, x = !1) {
    let S = c == null;
    $a(
      p,
      y,
      c || o,
      s,
      a,
      x
    ), S && (o = [...o], be({}));
  }
  return O = {
    get basename() {
      return d;
    },
    get future() {
      return h;
    },
    get state() {
      return b;
    },
    get routes() {
      return o;
    },
    get window() {
      return t;
    },
    initialize: zc,
    subscribe: Wc,
    enableScrollRestoration: nd,
    navigate: ya,
    fetch: Yc,
    revalidate: Kc,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (p) => e.history.createHref(p),
    encodeLocation: (p) => e.history.encodeLocation(p),
    getFetcher: xa,
    resetFetcher: Qc,
    deleteFetcher: ed,
    dispose: Hc,
    getBlocker: td,
    deleteBlocker: Ta,
    patchRoutes: ad,
    _internalFetchControllers: z,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: id,
    _internalSetStateDoNotUseOrYouWillBreakYourApp(p) {
      be(p);
    }
  }, e.unstable_instrumentations && (O = ru(
    O,
    e.unstable_instrumentations.map((p) => p.router).filter(Boolean)
  )), O;
}
function pu(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function qr(e, t, n, r, i, a) {
  let s, o;
  if (i) {
    s = [];
    for (let d of t)
      if (s.push(d), d.route.id === i) {
        o = d;
        break;
      }
  } else
    s = t, o = t[t.length - 1];
  let c = Ci(
    r || ".",
    Ti(s),
    $e(e.pathname, n) || e.pathname,
    a === "path"
  );
  if (r == null && (c.search = e.search, c.hash = e.hash), (r == null || r === "" || r === ".") && o) {
    let d = Mi(c.search);
    if (o.route.index && !d)
      c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
    else if (!o.route.index && d) {
      let u = new URLSearchParams(c.search), h = u.getAll("index");
      u.delete("index"), h.filter((g) => g).forEach((g) => u.append("index", g));
      let m = u.toString();
      c.search = m ? `?${m}` : "";
    }
  }
  return n !== "/" && (c.pathname = Jd({ basename: n, pathname: c.pathname })), Ze(c);
}
function Ia(e, t, n) {
  if (!n || !pu(n))
    return { path: t };
  if (n.formMethod && !Vu(n.formMethod))
    return {
      path: t,
      error: Oe(405, { method: n.formMethod })
    };
  let r = () => ({
    path: t,
    error: Oe(400, { type: "invalid-body" })
  }), a = (n.formMethod || "get").toUpperCase(), s = Go(t);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!we(a))
        return r();
      let h = typeof n.body == "string" ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(n.body.entries()).reduce(
          (m, [g, v]) => `${m}${g}=${v}
`,
          ""
        )
      ) : String(n.body);
      return {
        path: t,
        submission: {
          formMethod: a,
          formAction: s,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: h
        }
      };
    } else if (n.formEncType === "application/json") {
      if (!we(a))
        return r();
      try {
        let h = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: t,
          submission: {
            formMethod: a,
            formAction: s,
            formEncType: n.formEncType,
            formData: void 0,
            json: h,
            text: void 0
          }
        };
      } catch {
        return r();
      }
    }
  }
  H(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let o, c;
  if (n.formData)
    o = Zr(n.formData), c = n.formData;
  else if (n.body instanceof FormData)
    o = Zr(n.body), c = n.body;
  else if (n.body instanceof URLSearchParams)
    o = n.body, c = Ka(o);
  else if (n.body == null)
    o = new URLSearchParams(), c = new FormData();
  else
    try {
      o = new URLSearchParams(n.body), c = Ka(o);
    } catch {
      return r();
    }
  let d = {
    formMethod: a,
    formAction: s,
    formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
    formData: c,
    json: void 0,
    text: void 0
  };
  if (we(d.formMethod))
    return { path: t, submission: d };
  let u = vt(t);
  return e && u.search && Mi(u.search) && o.append("index", ""), u.search = `?${o}`, { path: Ze(u), submission: d };
}
function Ba(e, t, n, r, i, a, s, o, c, d, u, h, m, g, v, N, P, T, w, C, k) {
  let A = C ? De(C[1]) ? C[1].error : C[1].data : void 0, O = i.createURL(a.location), b = i.createURL(c), M;
  if (u && a.errors) {
    let J = Object.keys(a.errors)[0];
    M = s.findIndex((re) => re.route.id === J);
  } else if (C && De(C[1])) {
    let J = C[0];
    M = s.findIndex((re) => re.route.id === J) - 1;
  }
  let U = C ? C[1].statusCode : void 0, W = U && U >= 400, X = {
    currentUrl: O,
    currentParams: a.matches[0]?.params || {},
    nextUrl: b,
    nextParams: s[0].params,
    ...o,
    actionResult: A,
    actionStatus: U
  }, ce = kn(s), Me = s.map((J, re) => {
    let { route: Z } = J, z = null;
    if (M != null && re > M ? z = !1 : Z.lazy ? z = !0 : Si(Z) ? u ? z = Yr(
      Z,
      a.loaderData,
      a.errors
    ) : gu(a.loaderData, a.matches[re], J) && (z = !0) : z = !1, z !== null)
      return Jr(
        n,
        r,
        e,
        ce,
        J,
        d,
        t,
        z
      );
    let ne = !1;
    typeof k == "boolean" ? ne = k : W ? ne = !1 : (h || O.pathname + O.search === b.pathname + b.search || O.search !== b.search || yu(a.matches[re], J)) && (ne = !0);
    let de = {
      ...X,
      defaultShouldRevalidate: ne
    }, Ae = fn(J, de);
    return Jr(
      n,
      r,
      e,
      ce,
      J,
      d,
      t,
      Ae,
      de,
      k
    );
  }), se = [];
  return v.forEach((J, re) => {
    if (u || !s.some((Le) => Le.route.id === J.routeId) || g.has(re))
      return;
    let Z = a.fetchers.get(re), z = Z && Z.state !== "idle" && Z.data === void 0, ne = dt(P, J.path, T);
    if (!ne) {
      if (w && z)
        return;
      se.push({
        key: re,
        routeId: J.routeId,
        path: J.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (N.has(re))
      return;
    let de = tr(ne, J.path), Ae = new AbortController(), Se = _t(
      i,
      J.path,
      Ae.signal
    ), ke = null;
    if (m.has(re))
      m.delete(re), ke = Wt(
        n,
        r,
        Se,
        ne,
        de,
        d,
        t
      );
    else if (z)
      h && (ke = Wt(
        n,
        r,
        Se,
        ne,
        de,
        d,
        t
      ));
    else {
      let Le;
      typeof k == "boolean" ? Le = k : W ? Le = !1 : Le = h;
      let Ee = {
        ...X,
        defaultShouldRevalidate: Le
      };
      fn(de, Ee) && (ke = Wt(
        n,
        r,
        Se,
        ne,
        de,
        d,
        t,
        Ee
      ));
    }
    ke && se.push({
      key: re,
      routeId: J.routeId,
      path: J.path,
      matches: ke,
      match: de,
      request: Se,
      controller: Ae
    });
  }), { dsMatches: Me, revalidatingFetchers: se };
}
function Si(e) {
  return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function Yr(e, t, n) {
  if (e.lazy)
    return !0;
  if (!Si(e))
    return !1;
  let r = t != null && e.id in t, i = n != null && n[e.id] !== void 0;
  return !r && i ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !r && !i;
}
function gu(e, t, n) {
  let r = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    n.route.id !== t.route.id
  ), i = !e.hasOwnProperty(n.route.id);
  return r || i;
}
function yu(e, t) {
  let n = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function fn(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean")
      return n;
  }
  return t.defaultShouldRevalidate;
}
function $a(e, t, n, r, i, a) {
  let s;
  if (e) {
    let d = r[e];
    H(
      d,
      `No route found to patch children into: routeId = ${e}`
    ), d.children || (d.children = []), s = d.children;
  } else
    s = n;
  let o = [], c = [];
  if (t.forEach((d) => {
    let u = s.find(
      (h) => Uo(d, h)
    );
    u ? c.push({ existingRoute: u, newRoute: d }) : o.push(d);
  }), o.length > 0) {
    let d = Nn(
      o,
      i,
      [e || "_", "patch", String(s?.length || "0")],
      r
    );
    s.push(...d);
  }
  if (a && c.length > 0)
    for (let d = 0; d < c.length; d++) {
      let { existingRoute: u, newRoute: h } = c[d], m = u, [g] = Nn(
        [h],
        i,
        [],
        // Doesn't matter for mutated routes since they already have an id
        {},
        // Don't touch the manifest here since we're updating in place
        !0
      );
      Object.assign(m, {
        element: g.element ? g.element : m.element,
        errorElement: g.errorElement ? g.errorElement : m.errorElement,
        hydrateFallbackElement: g.hydrateFallbackElement ? g.hydrateFallbackElement : m.hydrateFallbackElement
      });
    }
}
function Uo(e, t) {
  return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every(
    (n, r) => t.children?.some((i) => Uo(n, i))
  ) : !1;
}
var Ua = /* @__PURE__ */ new WeakMap(), zo = ({
  key: e,
  route: t,
  manifest: n,
  mapRouteProperties: r
}) => {
  let i = n[t.id];
  if (H(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object")
    return;
  let a = i.lazy[e];
  if (!a)
    return;
  let s = Ua.get(i);
  s || (s = {}, Ua.set(i, s));
  let o = s[e];
  if (o)
    return o;
  let c = (async () => {
    let d = Vd(e), h = i[e] !== void 0 && e !== "hasErrorBoundary";
    if (d)
      he(
        !d,
        "Route property " + e + " is not a supported lazy route property. This property will be ignored."
      ), s[e] = Promise.resolve();
    else if (h)
      he(
        !1,
        `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`
      );
    else {
      let m = await a();
      m != null && (Object.assign(i, { [e]: m }), Object.assign(i, r(i)));
    }
    typeof i.lazy == "object" && (i.lazy[e] = void 0, Object.values(i.lazy).every((m) => m === void 0) && (i.lazy = void 0));
  })();
  return s[e] = c, c;
}, za = /* @__PURE__ */ new WeakMap();
function vu(e, t, n, r, i) {
  let a = n[e.id];
  if (H(a, "No route found in manifest"), !e.lazy)
    return {
      lazyRoutePromise: void 0,
      lazyHandlerPromise: void 0
    };
  if (typeof e.lazy == "function") {
    let u = za.get(a);
    if (u)
      return {
        lazyRoutePromise: u,
        lazyHandlerPromise: u
      };
    let h = (async () => {
      H(
        typeof e.lazy == "function",
        "No lazy route function found"
      );
      let m = await e.lazy(), g = {};
      for (let v in m) {
        let N = m[v];
        if (N === void 0)
          continue;
        let P = Fd(v), w = a[v] !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        v !== "hasErrorBoundary";
        P ? he(
          !P,
          "Route property " + v + " is not a supported property to be returned from a lazy route function. This property will be ignored."
        ) : w ? he(
          !w,
          `Route "${a.id}" has a static property "${v}" defined but its lazy function is also returning a value for this property. The lazy route property "${v}" will be ignored.`
        ) : g[v] = N;
      }
      Object.assign(a, g), Object.assign(a, {
        // To keep things framework agnostic, we use the provided `mapRouteProperties`
        // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
        // since the logic will differ between frameworks.
        ...r(a),
        lazy: void 0
      });
    })();
    return za.set(a, h), h.catch(() => {
    }), {
      lazyRoutePromise: h,
      lazyHandlerPromise: h
    };
  }
  let s = Object.keys(e.lazy), o = [], c;
  for (let u of s) {
    if (i && i.includes(u))
      continue;
    let h = zo({
      key: u,
      route: e,
      manifest: n,
      mapRouteProperties: r
    });
    h && (o.push(h), u === t && (c = h));
  }
  let d = o.length > 0 ? Promise.all(o).then(() => {
  }) : void 0;
  return d?.catch(() => {
  }), c?.catch(() => {
  }), {
    lazyRoutePromise: d,
    lazyHandlerPromise: c
  };
}
async function Ha(e) {
  let t = e.matches.filter((i) => i.shouldLoad), n = {};
  return (await Promise.all(t.map((i) => i.resolve()))).forEach((i, a) => {
    n[t[a].route.id] = i;
  }), n;
}
async function bu(e) {
  return e.matches.some((t) => t.route.middleware) ? Ho(e, () => Ha(e)) : Ha(e);
}
function Ho(e, t) {
  return xu(
    e,
    t,
    (r) => {
      if (Lu(r))
        throw r;
      return r;
    },
    Au,
    n
  );
  function n(r, i, a) {
    if (a)
      return Promise.resolve(
        Object.assign(a.value, {
          [i]: { type: "error", result: r }
        })
      );
    {
      let { matches: s } = e, o = Math.min(
        // Throwing route
        Math.max(
          s.findIndex((d) => d.route.id === i),
          0
        ),
        // or the shallowest route that needs to load data
        Math.max(
          s.findIndex((d) => d.shouldCallHandler()),
          0
        )
      ), c = ut(
        s,
        s[o].route.id
      ).route.id;
      return Promise.resolve({
        [c]: { type: "error", result: r }
      });
    }
  }
}
async function xu(e, t, n, r, i) {
  let { matches: a, request: s, params: o, context: c, unstable_pattern: d } = e, u = a.flatMap(
    (m) => m.route.middleware ? m.route.middleware.map((g) => [m.route.id, g]) : []
  );
  return await Wo(
    {
      request: s,
      params: o,
      context: c,
      unstable_pattern: d
    },
    u,
    t,
    n,
    r,
    i
  );
}
async function Wo(e, t, n, r, i, a, s = 0) {
  let { request: o } = e;
  if (o.signal.aborted)
    throw o.signal.reason ?? new Error(`Request aborted: ${o.method} ${o.url}`);
  let c = t[s];
  if (!c)
    return await n();
  let [d, u] = c, h, m = async () => {
    if (h)
      throw new Error("You may only call `next()` once per middleware");
    try {
      return h = { value: await Wo(
        e,
        t,
        n,
        r,
        i,
        a,
        s + 1
      ) }, h.value;
    } catch (g) {
      return h = { value: await a(g, d, h) }, h.value;
    }
  };
  try {
    let g = await u(e, m), v = g != null ? r(g) : void 0;
    return i(v) ? v : h ? v ?? h.value : (h = { value: await m() }, h.value);
  } catch (g) {
    return await a(g, d, h);
  }
}
function Ko(e, t, n, r, i) {
  let a = zo({
    key: "middleware",
    route: r.route,
    manifest: t,
    mapRouteProperties: e
  }), s = vu(
    r.route,
    we(n.method) ? "action" : "loader",
    t,
    e,
    i
  );
  return {
    middleware: a,
    route: s.lazyRoutePromise,
    handler: s.lazyHandlerPromise
  };
}
function Jr(e, t, n, r, i, a, s, o, c = null, d) {
  let u = !1, h = Ko(
    e,
    t,
    n,
    i,
    a
  );
  return {
    ...i,
    _lazyPromises: h,
    shouldLoad: o,
    shouldRevalidateArgs: c,
    shouldCallHandler(m) {
      return u = !0, c ? typeof d == "boolean" ? fn(i, {
        ...c,
        defaultShouldRevalidate: d
      }) : typeof m == "boolean" ? fn(i, {
        ...c,
        defaultShouldRevalidate: m
      }) : fn(i, c) : o;
    },
    resolve(m) {
      let { lazy: g, loader: v, middleware: N } = i.route, P = u || o || m && !we(n.method) && (g || v), T = N && N.length > 0 && !v && !g;
      return P && (we(n.method) || !T) ? Nu({
        request: n,
        unstable_pattern: r,
        match: i,
        lazyHandlerPromise: h?.handler,
        lazyRoutePromise: h?.route,
        handlerOverride: m,
        scopedContext: s
      }) : Promise.resolve({ type: "data", result: void 0 });
    }
  };
}
function Wt(e, t, n, r, i, a, s, o = null) {
  return r.map((c) => c.route.id !== i.route.id ? {
    ...c,
    shouldLoad: !1,
    shouldRevalidateArgs: o,
    shouldCallHandler: () => !1,
    _lazyPromises: Ko(
      e,
      t,
      n,
      c,
      a
    ),
    resolve: () => Promise.resolve({ type: "data", result: void 0 })
  } : Jr(
    e,
    t,
    n,
    kn(r),
    c,
    a,
    s,
    !0,
    o
  ));
}
async function wu(e, t, n, r, i, a) {
  n.some((d) => d._lazyPromises?.middleware) && await Promise.all(n.map((d) => d._lazyPromises?.middleware));
  let s = {
    request: t,
    unstable_pattern: kn(n),
    params: n[0].params,
    context: i,
    matches: n
  }, c = await e({
    ...s,
    fetcherKey: r,
    runClientMiddleware: (d) => {
      let u = s;
      return Ho(u, () => d({
        ...u,
        fetcherKey: r,
        runClientMiddleware: () => {
          throw new Error(
            "Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler"
          );
        }
      }));
    }
  });
  try {
    await Promise.all(
      n.flatMap((d) => [
        d._lazyPromises?.handler,
        d._lazyPromises?.route
      ])
    );
  } catch {
  }
  return c;
}
async function Nu({
  request: e,
  unstable_pattern: t,
  match: n,
  lazyHandlerPromise: r,
  lazyRoutePromise: i,
  handlerOverride: a,
  scopedContext: s
}) {
  let o, c, d = we(e.method), u = d ? "action" : "loader", h = (m) => {
    let g, v = new Promise((T, w) => g = w);
    c = () => g(), e.signal.addEventListener("abort", c);
    let N = (T) => typeof m != "function" ? Promise.reject(
      new Error(
        `You cannot call the handler for a route which defines a boolean "${u}" [routeId: ${n.route.id}]`
      )
    ) : m(
      {
        request: e,
        unstable_pattern: t,
        params: n.params,
        context: s
      },
      ...T !== void 0 ? [T] : []
    ), P = (async () => {
      try {
        return { type: "data", result: await (a ? a((w) => N(w)) : N()) };
      } catch (T) {
        return { type: "error", result: T };
      }
    })();
    return Promise.race([P, v]);
  };
  try {
    let m = d ? n.route.action : n.route.loader;
    if (r || i)
      if (m) {
        let g, [v] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          h(m).catch((N) => {
            g = N;
          }),
          // Ensure all lazy route promises are resolved before continuing
          r,
          i
        ]);
        if (g !== void 0)
          throw g;
        o = v;
      } else {
        await r;
        let g = d ? n.route.action : n.route.loader;
        if (g)
          [o] = await Promise.all([h(g), i]);
        else if (u === "action") {
          let v = new URL(e.url), N = v.pathname + v.search;
          throw Oe(405, {
            method: e.method,
            pathname: N,
            routeId: n.route.id
          });
        } else
          return { type: "data", result: void 0 };
      }
    else if (m)
      o = await h(m);
    else {
      let g = new URL(e.url), v = g.pathname + g.search;
      throw Oe(404, {
        pathname: v
      });
    }
  } catch (m) {
    return { type: "error", result: m };
  } finally {
    c && e.signal.removeEventListener("abort", c);
  }
  return o;
}
async function Pu(e) {
  let t = e.headers.get("Content-Type");
  return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function Tu(e) {
  let { result: t, type: n } = e;
  if (Ri(t)) {
    let r;
    try {
      r = await Pu(t);
    } catch (i) {
      return { type: "error", error: i };
    }
    return n === "error" ? {
      type: "error",
      error: new Dn(t.status, t.statusText, r),
      statusCode: t.status,
      headers: t.headers
    } : {
      type: "data",
      data: r,
      statusCode: t.status,
      headers: t.headers
    };
  }
  return n === "error" ? Ya(t) ? t.data instanceof Error ? {
    type: "error",
    error: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: Mu(t),
    statusCode: Pn(t) ? t.status : void 0,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: t,
    statusCode: Pn(t) ? t.status : void 0
  } : Ya(t) ? {
    type: "data",
    data: t.data,
    statusCode: t.init?.status,
    headers: t.init?.headers ? new Headers(t.init.headers) : void 0
  } : { type: "data", data: t };
}
function Cu(e, t, n, r, i) {
  let a = e.headers.get("Location");
  if (H(
    a,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  ), !Pi(a)) {
    let s = r.slice(
      0,
      r.findIndex((o) => o.route.id === n) + 1
    );
    a = qr(
      new URL(t.url),
      s,
      i,
      a
    ), e.headers.set("Location", a);
  }
  return e;
}
function Wa(e, t, n, r) {
  let i = [
    "about:",
    "blob:",
    "chrome:",
    "chrome-untrusted:",
    "content:",
    "data:",
    "devtools:",
    "file:",
    "filesystem:",
    // eslint-disable-next-line no-script-url
    "javascript:"
  ];
  if (Pi(e)) {
    let a = e, s = a.startsWith("//") ? new URL(t.protocol + a) : new URL(a);
    if (i.includes(s.protocol))
      throw new Error("Invalid redirect location");
    let o = $e(s.pathname, n) != null;
    if (s.origin === t.origin && o)
      return s.pathname + s.search + s.hash;
  }
  try {
    let a = r.createURL(e);
    if (i.includes(a.protocol))
      throw new Error("Invalid redirect location");
  } catch {
  }
  return e;
}
function _t(e, t, n, r) {
  let i = e.createURL(Go(t)).toString(), a = { signal: n };
  if (r && we(r.formMethod)) {
    let { formMethod: s, formEncType: o } = r;
    a.method = s.toUpperCase(), o === "application/json" ? (a.headers = new Headers({ "Content-Type": o }), a.body = JSON.stringify(r.json)) : o === "text/plain" ? a.body = r.text : o === "application/x-www-form-urlencoded" && r.formData ? a.body = Zr(r.formData) : a.body = r.formData;
  }
  return new Request(i, a);
}
function Zr(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Ka(e) {
  let t = new FormData();
  for (let [n, r] of e.entries())
    t.append(n, r);
  return t;
}
function Su(e, t, n, r = !1, i = !1) {
  let a = {}, s = null, o, c = !1, d = {}, u = n && De(n[1]) ? n[1].error : void 0;
  return e.forEach((h) => {
    if (!(h.route.id in t))
      return;
    let m = h.route.id, g = t[m];
    if (H(
      !At(g),
      "Cannot handle redirect results in processLoaderData"
    ), De(g)) {
      let v = g.error;
      if (u !== void 0 && (v = u, u = void 0), s = s || {}, i)
        s[m] = v;
      else {
        let N = ut(e, m);
        s[N.route.id] == null && (s[N.route.id] = v);
      }
      r || (a[m] = $o), c || (c = !0, o = Pn(g.error) ? g.error.status : 500), g.headers && (d[m] = g.headers);
    } else
      a[m] = g.data, g.statusCode && g.statusCode !== 200 && !c && (o = g.statusCode), g.headers && (d[m] = g.headers);
  }), u !== void 0 && n && (s = { [n[0]]: u }, n[2] && (a[n[2]] = void 0)), {
    loaderData: a,
    errors: s,
    statusCode: o || 200,
    loaderHeaders: d
  };
}
function Ga(e, t, n, r, i, a) {
  let { loaderData: s, errors: o } = Su(
    t,
    n,
    r
  );
  return i.filter((c) => !c.matches || c.matches.some((d) => d.shouldLoad)).forEach((c) => {
    let { key: d, match: u, controller: h } = c;
    if (h && h.signal.aborted)
      return;
    let m = a[d];
    if (H(m, "Did not find corresponding fetcher result"), De(m)) {
      let g = ut(e.matches, u?.route.id);
      o && o[g.route.id] || (o = {
        ...o,
        [g.route.id]: m.error
      }), e.fetchers.delete(d);
    } else if (At(m))
      H(!1, "Unhandled fetcher revalidation redirect");
    else {
      let g = nt(m.data);
      e.fetchers.set(d, g);
    }
  }), { loaderData: s, errors: o };
}
function Xa(e, t, n, r) {
  let i = Object.entries(t).filter(([, a]) => a !== $o).reduce((a, [s, o]) => (a[s] = o, a), {});
  for (let a of n) {
    let s = a.route.id;
    if (!t.hasOwnProperty(s) && e.hasOwnProperty(s) && a.route.loader && (i[s] = e[s]), r && r.hasOwnProperty(s))
      break;
  }
  return i;
}
function qa(e) {
  return e ? De(e[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [e[0]]: e[1].data
    }
  } : {};
}
function ut(e, t) {
  return (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e]).reverse().find((r) => r.route.hasErrorBoundary === !0) || e[0];
}
function qn(e) {
  let t = e.length === 1 ? e[0] : e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route: t
      }
    ],
    route: t
  };
}
function Oe(e, {
  pathname: t,
  routeId: n,
  method: r,
  type: i,
  message: a
} = {}) {
  let s = "Unknown Server Error", o = "Unknown @remix-run/router error";
  return e === 400 ? (s = "Bad Request", r && t && n ? o = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.` : i === "invalid-body" && (o = "Unable to encode submission body")) : e === 403 ? (s = "Forbidden", o = `Route "${n}" does not match URL "${t}"`) : e === 404 ? (s = "Not Found", o = `No route matches URL "${t}"`) : e === 405 && (s = "Method Not Allowed", r && t && n ? o = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.` : r && (o = `Invalid request method "${r.toUpperCase()}"`)), new Dn(
    e || 500,
    s,
    new Error(o),
    !0
  );
}
function Yn(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, i] = t[n];
    if (At(i))
      return { key: r, result: i };
  }
}
function Go(e) {
  let t = typeof e == "string" ? vt(e) : e;
  return Ze({ ...t, hash: "" });
}
function Ru(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function Mu(e) {
  return new Dn(
    e.init?.status ?? 500,
    e.init?.statusText ?? "Internal Server Error",
    e.data
  );
}
function Au(e) {
  return e != null && typeof e == "object" && Object.entries(e).every(
    ([t, n]) => typeof t == "string" && Eu(n)
  );
}
function Eu(e) {
  return e != null && typeof e == "object" && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function Du(e) {
  return Ri(e.result) && Io.has(e.result.status);
}
function De(e) {
  return e.type === "error";
}
function At(e) {
  return (e && e.type) === "redirect";
}
function Ya(e) {
  return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function Ri(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function ku(e) {
  return Io.has(e);
}
function Lu(e) {
  return Ri(e) && ku(e.status) && e.headers.has("Location");
}
function Vu(e) {
  return du.has(e.toUpperCase());
}
function we(e) {
  return lu.has(e.toUpperCase());
}
function Mi(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function tr(e, t) {
  let n = typeof t == "string" ? vt(t).search : t.search;
  if (e[e.length - 1].route.index && Mi(n || ""))
    return e[e.length - 1];
  let r = Vo(e);
  return r[r.length - 1];
}
function Ja(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: i, formData: a, json: s } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i
      };
    if (a != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: a,
        json: void 0,
        text: void 0
      };
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: s,
        text: void 0
      };
  }
}
function Er(e, t) {
  return t ? {
    state: "loading",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  } : {
    state: "loading",
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function ju(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function sn(e, t) {
  return e ? {
    state: "loading",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t
  };
}
function Fu(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function nt(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function Ou(e, t) {
  try {
    let n = e.sessionStorage.getItem(
      Bo
    );
    if (n) {
      let r = JSON.parse(n);
      for (let [i, a] of Object.entries(r || {}))
        a && Array.isArray(a) && t.set(i, new Set(a || []));
    }
  } catch {
  }
}
function _u(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, i] of t)
      n[r] = [...i];
    try {
      e.sessionStorage.setItem(
        Bo,
        JSON.stringify(n)
      );
    } catch (r) {
      he(
        !1,
        `Failed to save applied view transitions in sessionStorage (${r}).`
      );
    }
  }
}
function Za() {
  let e, t, n = new Promise((r, i) => {
    e = async (a) => {
      r(a);
      try {
        await n;
      } catch {
      }
    }, t = async (a) => {
      i(a);
      try {
        await n;
      } catch {
      }
    };
  });
  return {
    promise: n,
    //@ts-ignore
    resolve: e,
    //@ts-ignore
    reject: t
  };
}
var jt = me(null);
jt.displayName = "DataRouter";
var Ln = me(null);
Ln.displayName = "DataRouterState";
var Xo = me(!1);
function Iu() {
  return B(Xo);
}
var Ai = me({
  isTransitioning: !1
});
Ai.displayName = "ViewTransition";
var qo = me(
  /* @__PURE__ */ new Map()
);
qo.displayName = "Fetchers";
var Bu = me(null);
Bu.displayName = "Await";
var Ue = me(
  null
);
Ue.displayName = "Navigation";
var pr = me(
  null
);
pr.displayName = "Location";
var Ke = me({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Ke.displayName = "Route";
var Ei = me(null);
Ei.displayName = "RouteError";
var Yo = "REACT_ROUTER_ERROR", $u = "REDIRECT", Uu = "ROUTE_ERROR_RESPONSE";
function zu(e) {
  if (e.startsWith(`${Yo}:${$u}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean")
        return t;
    } catch {
    }
}
function Hu(e) {
  if (e.startsWith(
    `${Yo}:${Uu}:{`
  ))
    try {
      let t = JSON.parse(e.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string")
        return new Dn(
          t.status,
          t.statusText,
          t.data
        );
    } catch {
    }
}
function Wu(e, { relative: t } = {}) {
  H(
    Vn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: n, navigator: r } = B(Ue), { hash: i, pathname: a, search: s } = jn(e, { relative: t }), o = a;
  return n !== "/" && (o = a === "/" ? n : qe([n, a])), r.createHref({ pathname: o, search: s, hash: i });
}
function Vn() {
  return B(pr) != null;
}
function bt() {
  return H(
    Vn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), B(pr).location;
}
var Jo = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Zo(e) {
  B(Ue).static || mr(e);
}
function Pe() {
  let { isDataRoute: e } = B(Ke);
  return e ? sh() : Ku();
}
function Ku() {
  H(
    Vn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = B(jt), { basename: t, navigator: n } = B(Ue), { matches: r } = B(Ke), { pathname: i } = bt(), a = JSON.stringify(Ti(r)), s = He(!1);
  return Zo(() => {
    s.current = !0;
  }), ot(
    (c, d = {}) => {
      if (he(s.current, Jo), !s.current) return;
      if (typeof c == "number") {
        n.go(c);
        return;
      }
      let u = Ci(
        c,
        JSON.parse(a),
        i,
        d.relative === "path"
      );
      e == null && t !== "/" && (u.pathname = u.pathname === "/" ? t : qe([t, u.pathname])), (d.replace ? n.replace : n.push)(
        u,
        d.state,
        d
      );
    },
    [
      t,
      n,
      a,
      i,
      e
    ]
  );
}
var Gu = me(null);
function Xu(e) {
  let t = B(Ke).outlet;
  return ve(
    () => t && /* @__PURE__ */ $(Gu.Provider, { value: e }, t),
    [t, e]
  );
}
function Qo() {
  let { matches: e } = B(Ke), t = e[e.length - 1];
  return t ? t.params : {};
}
function jn(e, { relative: t } = {}) {
  let { matches: n } = B(Ke), { pathname: r } = bt(), i = JSON.stringify(Ti(n));
  return ve(
    () => Ci(
      e,
      JSON.parse(i),
      r,
      t === "path"
    ),
    [e, i, r, t]
  );
}
function qu(e, t, n, r, i) {
  H(
    Vn(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: a } = B(Ue), { matches: s } = B(Ke), o = s[s.length - 1], c = o ? o.params : {}, d = o ? o.pathname : "/", u = o ? o.pathnameBase : "/", h = o && o.route;
  {
    let w = h && h.path || "";
    tl(
      d,
      !h || w.endsWith("*") || w.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w === "/" ? "*" : `${w}/*`}">.`
    );
  }
  let m = bt(), g;
  g = m;
  let v = g.pathname || "/", N = v;
  if (u !== "/") {
    let w = u.replace(/^\//, "").split("/");
    N = "/" + v.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let P = dt(e, { pathname: N });
  return he(
    h || P != null,
    `No routes matched location "${g.pathname}${g.search}${g.hash}" `
  ), he(
    P == null || P[P.length - 1].route.element !== void 0 || P[P.length - 1].route.Component !== void 0 || P[P.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), eh(
    P && P.map(
      (w) => Object.assign({}, w, {
        params: Object.assign({}, c, w.params),
        pathname: qe([
          u,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          a.encodeLocation ? a.encodeLocation(
            w.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : w.pathname
        ]),
        pathnameBase: w.pathnameBase === "/" ? u : qe([
          u,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          a.encodeLocation ? a.encodeLocation(
            w.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : w.pathnameBase
        ])
      })
    ),
    s,
    n,
    r,
    i
  );
}
function Yu() {
  let e = ah(), t = Pn(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = { padding: "0.5rem", backgroundColor: r }, a = { padding: "2px 4px", backgroundColor: r }, s = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), s = /* @__PURE__ */ $(ft, null, /* @__PURE__ */ $("p", null, "?? Hey developer ??"), /* @__PURE__ */ $("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ $("code", { style: a }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ $("code", { style: a }, "errorElement"), " prop on your route.")), /* @__PURE__ */ $(ft, null, /* @__PURE__ */ $("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ $("h3", { style: { fontStyle: "italic" } }, t), n ? /* @__PURE__ */ $("pre", { style: i }, n) : null, s);
}
var Ju = /* @__PURE__ */ $(Yu, null), el = class extends Ni {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    this.props.onError ? this.props.onError(e, t) : console.error(
      "React Router caught the following error during render",
      e
    );
  }
  render() {
    let e = this.state.error;
    if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      const n = Hu(e.digest);
      n && (e = n);
    }
    let t = e !== void 0 ? /* @__PURE__ */ $(Ke.Provider, { value: this.props.routeContext }, /* @__PURE__ */ $(
      Ei.Provider,
      {
        value: e,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ $(Zu, { error: e }, t) : t;
  }
};
el.contextType = Xo;
var Dr = /* @__PURE__ */ new WeakMap();
function Zu({
  children: e,
  error: t
}) {
  let { basename: n } = B(Ue);
  if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
    let r = zu(t.digest);
    if (r) {
      let i = Dr.get(t);
      if (i) throw i;
      let a = Fo(r.location, n);
      if (jo && !Dr.get(t))
        if (a.isExternal || r.reloadDocument)
          window.location.href = a.absoluteURL || a.to;
        else {
          const s = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(a.to, {
              replace: r.replace
            })
          );
          throw Dr.set(t, s), s;
        }
      return /* @__PURE__ */ $(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${a.absoluteURL || a.to}`
        }
      );
    }
  }
  return e;
}
function Qu({ routeContext: e, match: t, children: n }) {
  let r = B(jt);
  return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ $(Ke.Provider, { value: e }, n);
}
function eh(e, t = [], n = null, r = null, i = null) {
  if (e == null) {
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let a = e, s = n?.errors;
  if (s != null) {
    let u = a.findIndex(
      (h) => h.route.id && s?.[h.route.id] !== void 0
    );
    H(
      u >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        s
      ).join(",")}`
    ), a = a.slice(
      0,
      Math.min(a.length, u + 1)
    );
  }
  let o = !1, c = -1;
  if (n)
    for (let u = 0; u < a.length; u++) {
      let h = a[u];
      if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = u), h.route.id) {
        let { loaderData: m, errors: g } = n, v = h.route.loader && !m.hasOwnProperty(h.route.id) && (!g || g[h.route.id] === void 0);
        if (h.route.lazy || v) {
          o = !0, c >= 0 ? a = a.slice(0, c + 1) : a = [a[0]];
          break;
        }
      }
    }
  let d = n && r ? (u, h) => {
    r(u, {
      location: n.location,
      params: n.matches?.[0]?.params ?? {},
      unstable_pattern: kn(n.matches),
      errorInfo: h
    });
  } : void 0;
  return a.reduceRight(
    (u, h, m) => {
      let g, v = !1, N = null, P = null;
      n && (g = s && h.route.id ? s[h.route.id] : void 0, N = h.route.errorElement || Ju, o && (c < 0 && m === 0 ? (tl(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), v = !0, P = null) : c === m && (v = !0, P = h.route.hydrateFallbackElement || null)));
      let T = t.concat(a.slice(0, m + 1)), w = () => {
        let C;
        return g ? C = N : v ? C = P : h.route.Component ? C = /* @__PURE__ */ $(h.route.Component, null) : h.route.element ? C = h.route.element : C = u, /* @__PURE__ */ $(
          Qu,
          {
            match: h,
            routeContext: {
              outlet: u,
              matches: T,
              isDataRoute: n != null
            },
            children: C
          }
        );
      };
      return n && (h.route.ErrorBoundary || h.route.errorElement || m === 0) ? /* @__PURE__ */ $(
        el,
        {
          location: n.location,
          revalidation: n.revalidation,
          component: N,
          error: g,
          children: w(),
          routeContext: { outlet: null, matches: T, isDataRoute: !0 },
          onError: d
        }
      ) : w();
    },
    null
  );
}
function Di(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function th(e) {
  let t = B(jt);
  return H(t, Di(e)), t;
}
function nh(e) {
  let t = B(Ln);
  return H(t, Di(e)), t;
}
function rh(e) {
  let t = B(Ke);
  return H(t, Di(e)), t;
}
function ki(e) {
  let t = rh(e), n = t.matches[t.matches.length - 1];
  return H(
    n.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), n.route.id;
}
function ih() {
  return ki(
    "useRouteId"
    /* UseRouteId */
  );
}
function ah() {
  let e = B(Ei), t = nh(
    "useRouteError"
    /* UseRouteError */
  ), n = ki(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : t.errors?.[n];
}
function sh() {
  let { router: e } = th(
    "useNavigate"
    /* UseNavigateStable */
  ), t = ki(
    "useNavigate"
    /* UseNavigateStable */
  ), n = He(!1);
  return Zo(() => {
    n.current = !0;
  }), ot(
    async (i, a = {}) => {
      he(n.current, Jo), n.current && (typeof i == "number" ? await e.navigate(i) : await e.navigate(i, { fromRouteId: t, ...a }));
    },
    [e, t]
  );
}
var Qa = {};
function tl(e, t, n) {
  !t && !Qa[e] && (Qa[e] = !0, he(!1, n));
}
var es = {};
function ts(e, t) {
  !e && !es[t] && (es[t] = !0, console.warn(t));
}
var oh = "useOptimistic", ns = Rd[oh], lh = () => {
};
function ch(e) {
  return ns ? ns(e) : [e, lh];
}
function dh(e) {
  let t = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && (e.element && he(
    !1,
    "You should not include both `Component` and `element` on your route - `Component` will be used."
  ), Object.assign(t, {
    element: $(e.Component),
    Component: void 0
  })), e.HydrateFallback && (e.hydrateFallbackElement && he(
    !1,
    "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
  ), Object.assign(t, {
    hydrateFallbackElement: $(e.HydrateFallback),
    HydrateFallback: void 0
  })), e.ErrorBoundary && (e.errorElement && he(
    !1,
    "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
  ), Object.assign(t, {
    errorElement: $(e.ErrorBoundary),
    ErrorBoundary: void 0
  })), t;
}
var uh = [
  "HydrateFallback",
  "hydrateFallbackElement"
], hh = class {
  constructor() {
    this.status = "pending", this.promise = new Promise((e, t) => {
      this.resolve = (n) => {
        this.status === "pending" && (this.status = "resolved", e(n));
      }, this.reject = (n) => {
        this.status === "pending" && (this.status = "rejected", t(n));
      };
    });
  }
};
function fh({
  router: e,
  flushSync: t,
  onError: n,
  unstable_useTransitions: r
}) {
  r = Iu() || r;
  let [a, s] = Q(e.state), [o, c] = ch(a), [d, u] = Q(), [h, m] = Q({
    isTransitioning: !1
  }), [g, v] = Q(), [N, P] = Q(), [T, w] = Q(), C = He(/* @__PURE__ */ new Map()), k = ot(
    (M, { deletedFetchers: U, newErrors: W, flushSync: X, viewTransitionOpts: ce }) => {
      W && n && Object.values(W).forEach(
        (se) => n(se, {
          location: M.location,
          params: M.matches[0]?.params ?? {},
          unstable_pattern: kn(M.matches)
        })
      ), M.fetchers.forEach((se, J) => {
        se.data !== void 0 && C.current.set(J, se.data);
      }), U.forEach((se) => C.current.delete(se)), ts(
        X === !1 || t != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let Me = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
      if (ts(
        ce == null || Me,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      ), !ce || !Me) {
        t && X ? t(() => s(M)) : r === !1 ? s(M) : xn(() => {
          r === !0 && c((se) => rs(se, M)), s(M);
        });
        return;
      }
      if (t && X) {
        t(() => {
          N && (g?.resolve(), N.skipTransition()), m({
            isTransitioning: !0,
            flushSync: !0,
            currentLocation: ce.currentLocation,
            nextLocation: ce.nextLocation
          });
        });
        let se = e.window.document.startViewTransition(() => {
          t(() => s(M));
        });
        se.finished.finally(() => {
          t(() => {
            v(void 0), P(void 0), u(void 0), m({ isTransitioning: !1 });
          });
        }), t(() => P(se));
        return;
      }
      N ? (g?.resolve(), N.skipTransition(), w({
        state: M,
        currentLocation: ce.currentLocation,
        nextLocation: ce.nextLocation
      })) : (u(M), m({
        isTransitioning: !0,
        flushSync: !1,
        currentLocation: ce.currentLocation,
        nextLocation: ce.nextLocation
      }));
    },
    [
      e.window,
      t,
      N,
      g,
      r,
      c,
      n
    ]
  );
  mr(() => e.subscribe(k), [e, k]), _e(() => {
    h.isTransitioning && !h.flushSync && v(new hh());
  }, [h]), _e(() => {
    if (g && d && e.window) {
      let M = d, U = g.promise, W = e.window.document.startViewTransition(async () => {
        r === !1 ? s(M) : xn(() => {
          r === !0 && c((X) => rs(X, M)), s(M);
        }), await U;
      });
      W.finished.finally(() => {
        v(void 0), P(void 0), u(void 0), m({ isTransitioning: !1 });
      }), P(W);
    }
  }, [
    d,
    g,
    e.window,
    r,
    c
  ]), _e(() => {
    g && d && o.location.key === d.location.key && g.resolve();
  }, [g, N, o.location, d]), _e(() => {
    !h.isTransitioning && T && (u(T.state), m({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: T.currentLocation,
      nextLocation: T.nextLocation
    }), w(void 0));
  }, [h.isTransitioning, T]);
  let A = ve(() => ({
    createHref: e.createHref,
    encodeLocation: e.encodeLocation,
    go: (M) => e.navigate(M),
    push: (M, U, W) => e.navigate(M, {
      state: U,
      preventScrollReset: W?.preventScrollReset
    }),
    replace: (M, U, W) => e.navigate(M, {
      replace: !0,
      state: U,
      preventScrollReset: W?.preventScrollReset
    })
  }), [e]), O = e.basename || "/", b = ve(
    () => ({
      router: e,
      navigator: A,
      static: !1,
      basename: O,
      onError: n
    }),
    [e, A, O, n]
  );
  return /* @__PURE__ */ $(ft, null, /* @__PURE__ */ $(jt.Provider, { value: b }, /* @__PURE__ */ $(Ln.Provider, { value: o }, /* @__PURE__ */ $(qo.Provider, { value: C.current }, /* @__PURE__ */ $(Ai.Provider, { value: h }, /* @__PURE__ */ $(
    yh,
    {
      basename: O,
      location: o.location,
      navigationType: o.historyAction,
      navigator: A,
      unstable_useTransitions: r
    },
    /* @__PURE__ */ $(
      mh,
      {
        routes: e.routes,
        future: e.future,
        state: o,
        onError: n
      }
    )
  ))))), null);
}
function rs(e, t) {
  return {
    // Don't surface "current location specific" stuff mid-navigation
    // (historyAction, location, matches, loaderData, errors, initialized,
    // restoreScroll, preventScrollReset, blockers, etc.)
    ...e,
    // Only surface "pending/in-flight stuff"
    // (navigation, revalidation, actionData, fetchers, )
    navigation: t.navigation.state !== "idle" ? t.navigation : e.navigation,
    revalidation: t.revalidation !== "idle" ? t.revalidation : e.revalidation,
    actionData: t.navigation.state !== "submitting" ? t.actionData : e.actionData,
    fetchers: t.fetchers
  };
}
var mh = So(ph);
function ph({
  routes: e,
  future: t,
  state: n,
  onError: r
}) {
  return qu(e, void 0, n, r, t);
}
function gh(e) {
  return Xu(e.context);
}
function yh({
  basename: e = "/",
  children: t = null,
  location: n,
  navigationType: r = "POP",
  navigator: i,
  static: a = !1,
  unstable_useTransitions: s
}) {
  H(
    !Vn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let o = e.replace(/^\/*/, "/"), c = ve(
    () => ({
      basename: o,
      navigator: i,
      static: a,
      unstable_useTransitions: s,
      future: {}
    }),
    [o, i, a, s]
  );
  typeof n == "string" && (n = vt(n));
  let {
    pathname: d = "/",
    search: u = "",
    hash: h = "",
    state: m = null,
    key: g = "default"
  } = n, v = ve(() => {
    let N = $e(d, o);
    return N == null ? null : {
      location: {
        pathname: N,
        search: u,
        hash: h,
        state: m,
        key: g
      },
      navigationType: r
    };
  }, [o, d, u, h, m, g, r]);
  return he(
    v != null,
    `<Router basename="${o}"> is not able to match the URL "${d}${u}${h}" because it does not start with the basename, so the <Router> won't render anything.`
  ), v == null ? null : /* @__PURE__ */ $(Ue.Provider, { value: c }, /* @__PURE__ */ $(pr.Provider, { children: t, value: v }));
}
var nr = "get", rr = "application/x-www-form-urlencoded";
function gr(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function vh(e) {
  return gr(e) && e.tagName.toLowerCase() === "button";
}
function bh(e) {
  return gr(e) && e.tagName.toLowerCase() === "form";
}
function xh(e) {
  return gr(e) && e.tagName.toLowerCase() === "input";
}
function wh(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Nh(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !wh(e);
}
function Qr(e = "") {
  return new URLSearchParams(
    typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
      let r = e[n];
      return t.concat(
        Array.isArray(r) ? r.map((i) => [n, i]) : [[n, r]]
      );
    }, [])
  );
}
function Ph(e, t) {
  let n = Qr(e);
  return t && t.forEach((r, i) => {
    n.has(i) || t.getAll(i).forEach((a) => {
      n.append(i, a);
    });
  }), n;
}
var Jn = null;
function Th() {
  if (Jn === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Jn = !1;
    } catch {
      Jn = !0;
    }
  return Jn;
}
var Ch = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function kr(e) {
  return e != null && !Ch.has(e) ? (he(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rr}"`
  ), null) : e;
}
function Sh(e, t) {
  let n, r, i, a, s;
  if (bh(e)) {
    let o = e.getAttribute("action");
    r = o ? $e(o, t) : null, n = e.getAttribute("method") || nr, i = kr(e.getAttribute("enctype")) || rr, a = new FormData(e);
  } else if (vh(e) || xh(e) && (e.type === "submit" || e.type === "image")) {
    let o = e.form;
    if (o == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let c = e.getAttribute("formaction") || o.getAttribute("action");
    if (r = c ? $e(c, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || nr, i = kr(e.getAttribute("formenctype")) || kr(o.getAttribute("enctype")) || rr, a = new FormData(o, e), !Th()) {
      let { name: d, type: u, value: h } = e;
      if (u === "image") {
        let m = d ? `${d}.` : "";
        a.append(`${m}x`, "0"), a.append(`${m}y`, "0");
      } else d && a.append(d, h);
    }
  } else {
    if (gr(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    n = nr, r = null, i = rr, s = e;
  }
  return a && i === "text/plain" && (s = a, a = void 0), { action: r, method: n.toLowerCase(), encType: i, formData: a, body: s };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Li(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Rh(e, t, n, r) {
  let i = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return n ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === "/" ? i.pathname = `_root.${r}` : t && $e(i.pathname, t) === "/" ? i.pathname = `${t.replace(/\/$/, "")}/_root.${r}` : i.pathname = `${i.pathname.replace(/\/$/, "")}.${r}`, i;
}
async function Mh(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let n = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = n, n;
  } catch (n) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Ah(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Eh(e, t, n) {
  let r = await Promise.all(
    e.map(async (i) => {
      let a = t.routes[i.route.id];
      if (a) {
        let s = await Mh(a, n);
        return s.links ? s.links() : [];
      }
      return [];
    })
  );
  return Vh(
    r.flat(1).filter(Ah).filter((i) => i.rel === "stylesheet" || i.rel === "preload").map(
      (i) => i.rel === "stylesheet" ? { ...i, rel: "prefetch", as: "style" } : { ...i, rel: "prefetch" }
    )
  );
}
function is(e, t, n, r, i, a) {
  let s = (c, d) => n[d] ? c.route.id !== n[d].route.id : !0, o = (c, d) => (
    // param change, /users/123 -> /users/456
    n[d].pathname !== c.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    n[d].route.path?.endsWith("*") && n[d].params["*"] !== c.params["*"]
  );
  return a === "assets" ? t.filter(
    (c, d) => s(c, d) || o(c, d)
  ) : a === "data" ? t.filter((c, d) => {
    let u = r.routes[c.route.id];
    if (!u || !u.hasLoader)
      return !1;
    if (s(c, d) || o(c, d))
      return !0;
    if (c.route.shouldRevalidate) {
      let h = c.route.shouldRevalidate({
        currentUrl: new URL(
          i.pathname + i.search + i.hash,
          window.origin
        ),
        currentParams: n[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: c.params,
        defaultShouldRevalidate: !0
      });
      if (typeof h == "boolean")
        return h;
    }
    return !0;
  }) : [];
}
function Dh(e, t, { includeHydrateFallback: n } = {}) {
  return kh(
    e.map((r) => {
      let i = t.routes[r.route.id];
      if (!i) return [];
      let a = [i.module];
      return i.clientActionModule && (a = a.concat(i.clientActionModule)), i.clientLoaderModule && (a = a.concat(i.clientLoaderModule)), n && i.hydrateFallbackModule && (a = a.concat(i.hydrateFallbackModule)), i.imports && (a = a.concat(i.imports)), a;
    }).flat(1)
  );
}
function kh(e) {
  return [...new Set(e)];
}
function Lh(e) {
  let t = {}, n = Object.keys(e).sort();
  for (let r of n)
    t[r] = e[r];
  return t;
}
function Vh(e, t) {
  let n = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((r, i) => {
    let a = JSON.stringify(Lh(i));
    return n.has(a) || (n.add(a), r.push({ key: a, link: i })), r;
  }, []);
}
function nl() {
  let e = B(jt);
  return Li(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function jh() {
  let e = B(Ln);
  return Li(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var Vi = me(void 0);
Vi.displayName = "FrameworkContext";
function rl() {
  let e = B(Vi);
  return Li(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function Fh(e, t) {
  let n = B(Vi), [r, i] = Q(!1), [a, s] = Q(!1), { onFocus: o, onBlur: c, onMouseEnter: d, onMouseLeave: u, onTouchStart: h } = t, m = He(null);
  _e(() => {
    if (e === "render" && s(!0), e === "viewport") {
      let N = (T) => {
        T.forEach((w) => {
          s(w.isIntersecting);
        });
      }, P = new IntersectionObserver(N, { threshold: 0.5 });
      return m.current && P.observe(m.current), () => {
        P.disconnect();
      };
    }
  }, [e]), _e(() => {
    if (r) {
      let N = setTimeout(() => {
        s(!0);
      }, 100);
      return () => {
        clearTimeout(N);
      };
    }
  }, [r]);
  let g = () => {
    i(!0);
  }, v = () => {
    i(!1), s(!1);
  };
  return n ? e !== "intent" ? [a, m, {}] : [
    a,
    m,
    {
      onFocus: on(o, g),
      onBlur: on(c, v),
      onMouseEnter: on(d, g),
      onMouseLeave: on(u, v),
      onTouchStart: on(h, g)
    }
  ] : [!1, m, {}];
}
function on(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function Oh({ page: e, ...t }) {
  let { router: n } = nl(), r = ve(
    () => dt(n.routes, e, n.basename),
    [n.routes, e, n.basename]
  );
  return r ? /* @__PURE__ */ $(Ih, { page: e, matches: r, ...t }) : null;
}
function _h(e) {
  let { manifest: t, routeModules: n } = rl(), [r, i] = Q([]);
  return _e(() => {
    let a = !1;
    return Eh(e, t, n).then(
      (s) => {
        a || i(s);
      }
    ), () => {
      a = !0;
    };
  }, [e, t, n]), r;
}
function Ih({
  page: e,
  matches: t,
  ...n
}) {
  let r = bt(), { future: i, manifest: a, routeModules: s } = rl(), { basename: o } = nl(), { loaderData: c, matches: d } = jh(), u = ve(
    () => is(
      e,
      t,
      d,
      a,
      r,
      "data"
    ),
    [e, t, d, a, r]
  ), h = ve(
    () => is(
      e,
      t,
      d,
      a,
      r,
      "assets"
    ),
    [e, t, d, a, r]
  ), m = ve(() => {
    if (e === r.pathname + r.search + r.hash)
      return [];
    let N = /* @__PURE__ */ new Set(), P = !1;
    if (t.forEach((w) => {
      let C = a.routes[w.route.id];
      !C || !C.hasLoader || (!u.some((k) => k.route.id === w.route.id) && w.route.id in c && s[w.route.id]?.shouldRevalidate || C.hasClientLoader ? P = !0 : N.add(w.route.id));
    }), N.size === 0)
      return [];
    let T = Rh(
      e,
      o,
      i.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return P && N.size > 0 && T.searchParams.set(
      "_routes",
      t.filter((w) => N.has(w.route.id)).map((w) => w.route.id).join(",")
    ), [T.pathname + T.search];
  }, [
    o,
    i.unstable_trailingSlashAwareDataRequests,
    c,
    r,
    a,
    u,
    t,
    e,
    s
  ]), g = ve(
    () => Dh(h, a),
    [h, a]
  ), v = _h(h);
  return /* @__PURE__ */ $(ft, null, m.map((N) => /* @__PURE__ */ $("link", { key: N, rel: "prefetch", as: "fetch", href: N, ...n })), g.map((N) => /* @__PURE__ */ $("link", { key: N, rel: "modulepreload", href: N, ...n })), v.map(({ key: N, link: P }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ $(
      "link",
      {
        key: N,
        nonce: n.nonce,
        ...P,
        crossOrigin: P.crossOrigin ?? n.crossOrigin
      }
    )
  )));
}
function Bh(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
var $h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  $h && (window.__reactRouterVersion = // @ts-expect-error
  "7.13.0");
} catch {
}
function Uh(e, t) {
  return mu({
    basename: t?.basename,
    getContext: t?.getContext,
    future: t?.future,
    history: Ed({ window: t?.window }),
    hydrationData: zh(),
    routes: e,
    mapRouteProperties: dh,
    hydrationRouteProperties: uh,
    dataStrategy: t?.dataStrategy,
    patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
    window: t?.window,
    unstable_instrumentations: t?.unstable_instrumentations
  }).initialize();
}
function zh() {
  let e = window?.__staticRouterHydrationData;
  return e && e.errors && (e = {
    ...e,
    errors: Hh(e.errors)
  }), e;
}
function Hh(e) {
  if (!e) return null;
  let t = Object.entries(e), n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new Dn(
        i.status,
        i.statusText,
        i.data,
        i.internal === !0
      );
    else if (i && i.__type === "Error") {
      if (i.__subType) {
        let a = window[i.__subType];
        if (typeof a == "function")
          try {
            let s = new a(i.message);
            s.stack = "", n[r] = s;
          } catch {
          }
      }
      if (n[r] == null) {
        let a = new Error(i.message);
        a.stack = "", n[r] = a;
      }
    } else
      n[r] = i;
  return n;
}
var il = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, al = Vt(
  function({
    onClick: t,
    discover: n = "render",
    prefetch: r = "none",
    relative: i,
    reloadDocument: a,
    replace: s,
    state: o,
    target: c,
    to: d,
    preventScrollReset: u,
    viewTransition: h,
    unstable_defaultShouldRevalidate: m,
    ...g
  }, v) {
    let { basename: N, unstable_useTransitions: P } = B(Ue), T = typeof d == "string" && il.test(d), w = Fo(d, N);
    d = w.to;
    let C = Wu(d, { relative: i }), [k, A, O] = Fh(
      r,
      g
    ), b = Xh(d, {
      replace: s,
      state: o,
      target: c,
      preventScrollReset: u,
      relative: i,
      viewTransition: h,
      unstable_defaultShouldRevalidate: m,
      unstable_useTransitions: P
    });
    function M(W) {
      t && t(W), W.defaultPrevented || b(W);
    }
    let U = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ $(
        "a",
        {
          ...g,
          ...O,
          href: w.absoluteURL || C,
          onClick: w.isExternal || a ? t : M,
          ref: Bh(v, A),
          target: c,
          "data-discover": !T && n === "render" ? "true" : void 0
        }
      )
    );
    return k && !T ? /* @__PURE__ */ $(ft, null, U, /* @__PURE__ */ $(Oh, { page: C })) : U;
  }
);
al.displayName = "Link";
var Wh = Vt(
  function({
    "aria-current": t = "page",
    caseSensitive: n = !1,
    className: r = "",
    end: i = !1,
    style: a,
    to: s,
    viewTransition: o,
    children: c,
    ...d
  }, u) {
    let h = jn(s, { relative: d.relative }), m = bt(), g = B(Ln), { navigator: v, basename: N } = B(Ue), P = g != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ef(h) && o === !0, T = v.encodeLocation ? v.encodeLocation(h).pathname : h.pathname, w = m.pathname, C = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
    n || (w = w.toLowerCase(), C = C ? C.toLowerCase() : null, T = T.toLowerCase()), C && N && (C = $e(C, N) || C);
    const k = T !== "/" && T.endsWith("/") ? T.length - 1 : T.length;
    let A = w === T || !i && w.startsWith(T) && w.charAt(k) === "/", O = C != null && (C === T || !i && C.startsWith(T) && C.charAt(T.length) === "/"), b = {
      isActive: A,
      isPending: O,
      isTransitioning: P
    }, M = A ? t : void 0, U;
    typeof r == "function" ? U = r(b) : U = [
      r,
      A ? "active" : null,
      O ? "pending" : null,
      P ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let W = typeof a == "function" ? a(b) : a;
    return /* @__PURE__ */ $(
      al,
      {
        ...d,
        "aria-current": M,
        className: U,
        ref: u,
        style: W,
        to: s,
        viewTransition: o
      },
      typeof c == "function" ? c(b) : c
    );
  }
);
Wh.displayName = "NavLink";
var Kh = Vt(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: n,
    reloadDocument: r,
    replace: i,
    state: a,
    method: s = nr,
    action: o,
    onSubmit: c,
    relative: d,
    preventScrollReset: u,
    viewTransition: h,
    unstable_defaultShouldRevalidate: m,
    ...g
  }, v) => {
    let { unstable_useTransitions: N } = B(Ue), P = Zh(), T = Qh(o, { relative: d }), w = s.toLowerCase() === "get" ? "get" : "post", C = typeof o == "string" && il.test(o);
    return /* @__PURE__ */ $(
      "form",
      {
        ref: v,
        method: w,
        action: T,
        onSubmit: r ? c : (A) => {
          if (c && c(A), A.defaultPrevented) return;
          A.preventDefault();
          let O = A.nativeEvent.submitter, b = O?.getAttribute("formmethod") || s, M = () => P(O || A.currentTarget, {
            fetcherKey: t,
            method: b,
            navigate: n,
            replace: i,
            state: a,
            relative: d,
            preventScrollReset: u,
            viewTransition: h,
            unstable_defaultShouldRevalidate: m
          });
          N && n !== !1 ? xn(() => M()) : M();
        },
        ...g,
        "data-discover": !C && e === "render" ? "true" : void 0
      }
    );
  }
);
Kh.displayName = "Form";
function Gh(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function sl(e) {
  let t = B(jt);
  return H(t, Gh(e)), t;
}
function Xh(e, {
  target: t,
  replace: n,
  state: r,
  preventScrollReset: i,
  relative: a,
  viewTransition: s,
  unstable_defaultShouldRevalidate: o,
  unstable_useTransitions: c
} = {}) {
  let d = Pe(), u = bt(), h = jn(e, { relative: a });
  return ot(
    (m) => {
      if (Nh(m, t)) {
        m.preventDefault();
        let g = n !== void 0 ? n : Ze(u) === Ze(h), v = () => d(e, {
          replace: g,
          state: r,
          preventScrollReset: i,
          relative: a,
          viewTransition: s,
          unstable_defaultShouldRevalidate: o
        });
        c ? xn(() => v()) : v();
      }
    },
    [
      u,
      d,
      h,
      n,
      r,
      t,
      e,
      i,
      a,
      s,
      o,
      c
    ]
  );
}
function qh(e) {
  he(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
  );
  let t = He(Qr(e)), n = He(!1), r = bt(), i = ve(
    () => (
      // Only merge in the defaults if we haven't yet called setSearchParams.
      // Once we call that we want those to take precedence, otherwise you can't
      // remove a param with setSearchParams({}) if it has an initial value
      Ph(
        r.search,
        n.current ? null : t.current
      )
    ),
    [r.search]
  ), a = Pe(), s = ot(
    (o, c) => {
      const d = Qr(
        typeof o == "function" ? o(new URLSearchParams(i)) : o
      );
      n.current = !0, a("?" + d, c);
    },
    [a, i]
  );
  return [i, s];
}
var Yh = 0, Jh = () => `__${String(++Yh)}__`;
function Zh() {
  let { router: e } = sl(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = B(Ue), n = ih(), r = e.fetch, i = e.navigate;
  return ot(
    async (a, s = {}) => {
      let { action: o, method: c, encType: d, formData: u, body: h } = Sh(
        a,
        t
      );
      if (s.navigate === !1) {
        let m = s.fetcherKey || Jh();
        await r(m, n, s.action || o, {
          unstable_defaultShouldRevalidate: s.unstable_defaultShouldRevalidate,
          preventScrollReset: s.preventScrollReset,
          formData: u,
          body: h,
          formMethod: s.method || c,
          formEncType: s.encType || d,
          flushSync: s.flushSync
        });
      } else
        await i(s.action || o, {
          unstable_defaultShouldRevalidate: s.unstable_defaultShouldRevalidate,
          preventScrollReset: s.preventScrollReset,
          formData: u,
          body: h,
          formMethod: s.method || c,
          formEncType: s.encType || d,
          replace: s.replace,
          state: s.state,
          fromRouteId: n,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition
        });
    },
    [r, i, t, n]
  );
}
function Qh(e, { relative: t } = {}) {
  let { basename: n } = B(Ue), r = B(Ke);
  H(r, "useFormAction must be used inside a RouteContext");
  let [i] = r.matches.slice(-1), a = { ...jn(e || ".", { relative: t }) }, s = bt();
  if (e == null) {
    a.search = s.search;
    let o = new URLSearchParams(a.search), c = o.getAll("index");
    if (c.some((u) => u === "")) {
      o.delete("index"), c.filter((h) => h).forEach((h) => o.append("index", h));
      let u = o.toString();
      a.search = u ? `?${u}` : "";
    }
  }
  return (!e || e === ".") && i.route.index && (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (a.pathname = a.pathname === "/" ? n : qe([n, a.pathname])), Ze(a);
}
function ef(e, { relative: t } = {}) {
  let n = B(Ai);
  H(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: r } = sl(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), i = jn(e, { relative: t });
  if (!n.isTransitioning)
    return !1;
  let a = $e(n.currentLocation.pathname, r) || n.currentLocation.pathname, s = $e(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return lr(i.pathname, s) != null || lr(i.pathname, a) != null;
}
function tf() {
  return /* @__PURE__ */ l("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ l(gh, {}) });
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), rf = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), as = (e) => {
  const t = rf(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, ol = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var af = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sf = Vt(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: a,
    iconNode: s,
    ...o
  }, c) => $(
    "svg",
    {
      ref: c,
      ...af,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: ol("lucide", i),
      ...o
    },
    [
      ...s.map(([d, u]) => $(d, u)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K = (e, t) => {
  const n = Vt(
    ({ className: r, ...i }, a) => $(sf, {
      ref: a,
      iconNode: t,
      className: ol(
        `lucide-${nf(as(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return n.displayName = as(e), n;
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const of = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Ge = K("arrow-left", of);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lf = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], ss = K("arrow-right", lf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cf = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
], df = K("award", cf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uf = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
], ji = K("bell", uf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hf = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
], it = K("calendar", hf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ff = [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
], mt = K("car", ff);
const zyMotoIconNode = [
  ["circle", { cx: "7", cy: "17", r: "2", key: "moto-wheel-left" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "moto-wheel-right" }],
  ["path", { d: "M7 17h4l4-6h2", key: "moto-frame" }],
  ["path", { d: "M5 13h4l2 4", key: "moto-body" }],
  ["path", { d: "M14 11h4", key: "moto-handle" }]
], zyMotoIcon = K("motorbike", zyMotoIconNode);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mf = [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
], pf = K("check-check", mf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gf = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], os = K("check", gf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yf = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Tn = K("circle-alert", yf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vf = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
], ls = K("circle-check-big", vf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bf = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
], Fn = K("clock", bf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xf = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
], ll = K("credit-card", xf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wf = [
  [
    "path",
    {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
], Nf = K("crown", wf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pf = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
], yr = K("dollar-sign", Pf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tf = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
], cl = K("eye-off", Tf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cf = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], dl = K("eye", Cf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sf = [
  [
    "path",
    {
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
], ul = K("funnel", Sf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rf = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
], Fi = K("lock", Rf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mf = [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
], Af = K("log-out", Mf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ef = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
], Oi = K("mail", Ef);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Df = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
], rt = K("map-pin", Df);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kf = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
], Lf = K("message-circle", kf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
], _i = K("phone", Vf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jf = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
], cs = K("plus", jf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ff = [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
], Of = K("route", Ff);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _f = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
], ei = K("search", _f);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const If = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
], Bf = K("settings", If);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $f = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
], mn = K("shield", $f);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uf = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
], zf = K("sliders-horizontal", Uf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hf = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
], Wf = K("smartphone", Hf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kf = [
  ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2"
    }
  ]
], Gf = K("square-pen", Kf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xf = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
], We = K("star", Xf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qf = [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
], vr = K("trending-up", qf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yf = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
], pt = K("user", Yf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jf = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
], Gt = K("users", Jf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zf = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
], Qf = K("wallet", Zf);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const em = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
], tm = K("zap", em), hl = me({});
function nm(e) {
  const t = He(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ii = typeof window < "u", rm = Ii ? mr : _e, Bi = /* @__PURE__ */ me(null);
function $i(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ui(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const at = (e, t, n) => n > t ? t : n < e ? e : n;
let zi = () => {
};
const st = {}, fl = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function ml(e) {
  return typeof e == "object" && e !== null;
}
const pl = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function Hi(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Be = /* @__NO_SIDE_EFFECTS__ */ (e) => e, im = (e, t) => (n) => t(e(n)), On = (...e) => e.reduce(im), Cn = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class Wi {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return $i(this.subscriptions, t), () => Ui(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let a = 0; a < i; a++) {
          const s = this.subscriptions[a];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Ye = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Ie = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function gl(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const yl = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, am = 1e-7, sm = 12;
function om(e, t, n, r, i) {
  let a, s, o = 0;
  do
    s = t + (n - t) / 2, a = yl(s, r, i) - e, a > 0 ? n = s : t = s;
  while (Math.abs(a) > am && ++o < sm);
  return s;
}
function _n(e, t, n, r) {
  if (e === t && n === r)
    return Be;
  const i = (a) => om(a, 0, 1, e, n);
  return (a) => a === 0 || a === 1 ? a : yl(i(a), t, r);
}
const vl = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, bl = (e) => (t) => 1 - e(1 - t), xl = /* @__PURE__ */ _n(0.33, 1.53, 0.69, 0.99), Ki = /* @__PURE__ */ bl(xl), wl = /* @__PURE__ */ vl(Ki), Nl = (e) => (e *= 2) < 1 ? 0.5 * Ki(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Gi = (e) => 1 - Math.sin(Math.acos(e)), Pl = bl(Gi), Tl = vl(Gi), lm = /* @__PURE__ */ _n(0.42, 0, 1, 1), cm = /* @__PURE__ */ _n(0, 0, 0.58, 1), Cl = /* @__PURE__ */ _n(0.42, 0, 0.58, 1), dm = (e) => Array.isArray(e) && typeof e[0] != "number", Sl = (e) => Array.isArray(e) && typeof e[0] == "number", um = {
  linear: Be,
  easeIn: lm,
  easeInOut: Cl,
  easeOut: cm,
  circIn: Gi,
  circInOut: Tl,
  circOut: Pl,
  backIn: Ki,
  backInOut: wl,
  backOut: xl,
  anticipate: Nl
}, hm = (e) => typeof e == "string", ds = (e) => {
  if (Sl(e)) {
    zi(e.length === 4);
    const [t, n, r, i] = e;
    return _n(t, n, r, i);
  } else if (hm(e))
    return um[e];
  return e;
}, Zn = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function fm(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, a = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function c(u) {
    s.has(u) && (d.schedule(u), e()), u(o);
  }
  const d = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, h = !1, m = !1) => {
      const v = m && i ? n : r;
      return h && s.add(u), v.has(u) || v.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      r.delete(u), s.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (o = u, i) {
        a = !0;
        return;
      }
      i = !0, [n, r] = [r, n], n.forEach(c), n.clear(), i = !1, a && (a = !1, d.process(u));
    }
  };
  return d;
}
const mm = 40;
function Rl(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, a = () => n = !0, s = Zn.reduce((C, k) => (C[k] = fm(a), C), {}), { setup: o, read: c, resolveKeyframes: d, preUpdate: u, update: h, preRender: m, render: g, postRender: v } = s, N = () => {
    const C = st.useManualTiming ? i.timestamp : performance.now();
    n = !1, st.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(C - i.timestamp, mm), 1)), i.timestamp = C, i.isProcessing = !0, o.process(i), c.process(i), d.process(i), u.process(i), h.process(i), m.process(i), g.process(i), v.process(i), i.isProcessing = !1, n && t && (r = !1, e(N));
  }, P = () => {
    n = !0, r = !0, i.isProcessing || e(N);
  };
  return { schedule: Zn.reduce((C, k) => {
    const A = s[k];
    return C[k] = (O, b = !1, M = !1) => (n || P(), A.schedule(O, b, M)), C;
  }, {}), cancel: (C) => {
    for (let k = 0; k < Zn.length; k++)
      s[Zn[k]].cancel(C);
  }, state: i, steps: s };
}
const { schedule: ie, cancel: gt, state: ye, steps: Lr } = /* @__PURE__ */ Rl(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Be, !0);
let ir;
function pm() {
  ir = void 0;
}
const Re = {
  now: () => (ir === void 0 && Re.set(ye.isProcessing || st.useManualTiming ? ye.timestamp : performance.now()), ir),
  set: (e) => {
    ir = e, queueMicrotask(pm);
  }
}, Ml = (e) => (t) => typeof t == "string" && t.startsWith(e), Xi = /* @__PURE__ */ Ml("--"), gm = /* @__PURE__ */ Ml("var(--"), qi = (e) => gm(e) ? ym.test(e.split("/*")[0].trim()) : !1, ym = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Yt = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Sn = {
  ...Yt,
  transform: (e) => at(0, 1, e)
}, Qn = {
  ...Yt,
  default: 1
}, pn = (e) => Math.round(e * 1e5) / 1e5, Yi = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function vm(e) {
  return e == null;
}
const bm = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ji = (e, t) => (n) => !!(typeof n == "string" && bm.test(n) && n.startsWith(e) || t && !vm(n) && Object.prototype.hasOwnProperty.call(n, t)), Al = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, a, s, o] = r.match(Yi);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(a),
    [n]: parseFloat(s),
    alpha: o !== void 0 ? parseFloat(o) : 1
  };
}, xm = (e) => at(0, 255, e), Vr = {
  ...Yt,
  transform: (e) => Math.round(xm(e))
}, Et = {
  test: /* @__PURE__ */ Ji("rgb", "red"),
  parse: /* @__PURE__ */ Al("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Vr.transform(e) + ", " + Vr.transform(t) + ", " + Vr.transform(n) + ", " + pn(Sn.transform(r)) + ")"
};
function wm(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const ti = {
  test: /* @__PURE__ */ Ji("#"),
  parse: wm,
  transform: Et.transform
}, In = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), ct = /* @__PURE__ */ In("deg"), Je = /* @__PURE__ */ In("%"), I = /* @__PURE__ */ In("px"), Nm = /* @__PURE__ */ In("vh"), Pm = /* @__PURE__ */ In("vw"), us = {
  ...Je,
  parse: (e) => Je.parse(e) / 100,
  transform: (e) => Je.transform(e * 100)
}, Bt = {
  test: /* @__PURE__ */ Ji("hsl", "hue"),
  parse: /* @__PURE__ */ Al("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Je.transform(pn(t)) + ", " + Je.transform(pn(n)) + ", " + pn(Sn.transform(r)) + ")"
}, fe = {
  test: (e) => Et.test(e) || ti.test(e) || Bt.test(e),
  parse: (e) => Et.test(e) ? Et.parse(e) : Bt.test(e) ? Bt.parse(e) : ti.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Et.transform(e) : Bt.transform(e),
  getAnimatableNone: (e) => {
    const t = fe.parse(e);
    return t.alpha = 0, fe.transform(t);
  }
}, Tm = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Cm(e) {
  return isNaN(e) && typeof e == "string" && (e.match(Yi)?.length || 0) + (e.match(Tm)?.length || 0) > 0;
}
const El = "number", Dl = "color", Sm = "var", Rm = "var(", hs = "${}", Mm = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Rn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let a = 0;
  const o = t.replace(Mm, (c) => (fe.test(c) ? (r.color.push(a), i.push(Dl), n.push(fe.parse(c))) : c.startsWith(Rm) ? (r.var.push(a), i.push(Sm), n.push(c)) : (r.number.push(a), i.push(El), n.push(parseFloat(c))), ++a, hs)).split(hs);
  return { values: n, split: o, indexes: r, types: i };
}
function kl(e) {
  return Rn(e).values;
}
function Ll(e) {
  const { split: t, types: n } = Rn(e), r = t.length;
  return (i) => {
    let a = "";
    for (let s = 0; s < r; s++)
      if (a += t[s], i[s] !== void 0) {
        const o = n[s];
        o === El ? a += pn(i[s]) : o === Dl ? a += fe.transform(i[s]) : a += i[s];
      }
    return a;
  };
}
const Am = (e) => typeof e == "number" ? 0 : fe.test(e) ? fe.getAnimatableNone(e) : e;
function Em(e) {
  const t = kl(e);
  return Ll(e)(t.map(Am));
}
const yt = {
  test: Cm,
  parse: kl,
  createTransformer: Ll,
  getAnimatableNone: Em
};
function jr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Dm({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, a = 0, s = 0;
  if (!t)
    i = a = s = n;
  else {
    const o = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - o;
    i = jr(c, o, e + 1 / 3), a = jr(c, o, e), s = jr(c, o, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(s * 255),
    alpha: r
  };
}
function cr(e, t) {
  return (n) => n > 0 ? t : e;
}
const ae = (e, t, n) => e + (t - e) * n, Fr = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, km = [ti, Et, Bt], Lm = (e) => km.find((t) => t.test(e));
function fs(e) {
  const t = Lm(e);
  if (!t)
    return !1;
  let n = t.parse(e);
  return t === Bt && (n = Dm(n)), n;
}
const ms = (e, t) => {
  const n = fs(e), r = fs(t);
  if (!n || !r)
    return cr(e, t);
  const i = { ...n };
  return (a) => (i.red = Fr(n.red, r.red, a), i.green = Fr(n.green, r.green, a), i.blue = Fr(n.blue, r.blue, a), i.alpha = ae(n.alpha, r.alpha, a), Et.transform(i));
}, ni = /* @__PURE__ */ new Set(["none", "hidden"]);
function Vm(e, t) {
  return ni.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function jm(e, t) {
  return (n) => ae(e, t, n);
}
function Zi(e) {
  return typeof e == "number" ? jm : typeof e == "string" ? qi(e) ? cr : fe.test(e) ? ms : _m : Array.isArray(e) ? Vl : typeof e == "object" ? fe.test(e) ? ms : Fm : cr;
}
function Vl(e, t) {
  const n = [...e], r = n.length, i = e.map((a, s) => Zi(a)(a, t[s]));
  return (a) => {
    for (let s = 0; s < r; s++)
      n[s] = i[s](a);
    return n;
  };
}
function Fm(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Zi(e[i])(e[i], t[i]));
  return (i) => {
    for (const a in r)
      n[a] = r[a](i);
    return n;
  };
}
function Om(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const a = t.types[i], s = e.indexes[a][r[a]], o = e.values[s] ?? 0;
    n[i] = o, r[a]++;
  }
  return n;
}
const _m = (e, t) => {
  const n = yt.createTransformer(t), r = Rn(e), i = Rn(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? ni.has(e) && !i.values.length || ni.has(t) && !r.values.length ? Vm(e, t) : On(Vl(Om(r, i), i.values), n) : cr(e, t);
};
function jl(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ae(e, t, n) : Zi(e)(e, t);
}
const Im = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => ie.update(t, n),
    stop: () => gt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ye.isProcessing ? ye.timestamp : Re.now()
  };
}, Fl = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let a = 0; a < i; a++)
    r += Math.round(e(a / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, dr = 2e4;
function Qi(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < dr; )
    t += n, r = e.next(t);
  return t >= dr ? 1 / 0 : t;
}
function Bm(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), i = Math.min(Qi(r), dr);
  return {
    type: "keyframes",
    ease: (a) => r.next(i * a).value / t,
    duration: /* @__PURE__ */ Ie(i)
  };
}
const $m = 5;
function Ol(e, t, n) {
  const r = Math.max(t - $m, 0);
  return gl(n - e(r), t - r);
}
const le = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Or = 1e-3;
function Um({ duration: e = le.duration, bounce: t = le.bounce, velocity: n = le.velocity, mass: r = le.mass }) {
  let i, a, s = 1 - t;
  s = at(le.minDamping, le.maxDamping, s), e = at(le.minDuration, le.maxDuration, /* @__PURE__ */ Ie(e)), s < 1 ? (i = (d) => {
    const u = d * s, h = u * e, m = u - n, g = ri(d, s), v = Math.exp(-h);
    return Or - m / g * v;
  }, a = (d) => {
    const h = d * s * e, m = h * n + n, g = Math.pow(s, 2) * Math.pow(d, 2) * e, v = Math.exp(-h), N = ri(Math.pow(d, 2), s);
    return (-i(d) + Or > 0 ? -1 : 1) * ((m - g) * v) / N;
  }) : (i = (d) => {
    const u = Math.exp(-d * e), h = (d - n) * e + 1;
    return -Or + u * h;
  }, a = (d) => {
    const u = Math.exp(-d * e), h = (n - d) * (e * e);
    return u * h;
  });
  const o = 5 / e, c = Hm(i, a, o);
  if (e = /* @__PURE__ */ Ye(e), isNaN(c))
    return {
      stiffness: le.stiffness,
      damping: le.damping,
      duration: e
    };
  {
    const d = Math.pow(c, 2) * r;
    return {
      stiffness: d,
      damping: s * 2 * Math.sqrt(r * d),
      duration: e
    };
  }
}
const zm = 12;
function Hm(e, t, n) {
  let r = n;
  for (let i = 1; i < zm; i++)
    r = r - e(r) / t(r);
  return r;
}
function ri(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Wm = ["duration", "bounce"], Km = ["stiffness", "damping", "mass"];
function ps(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Gm(e) {
  let t = {
    velocity: le.velocity,
    stiffness: le.stiffness,
    damping: le.damping,
    mass: le.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!ps(e, Km) && ps(e, Wm))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * at(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: le.mass,
        stiffness: i,
        damping: a
      };
    } else {
      const n = Um(e);
      t = {
        ...t,
        ...n,
        mass: le.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function ur(e = le.visualDuration, t = le.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: i } = n;
  const a = n.keyframes[0], s = n.keyframes[n.keyframes.length - 1], o = { done: !1, value: a }, { stiffness: c, damping: d, mass: u, duration: h, velocity: m, isResolvedFromDuration: g } = Gm({
    ...n,
    velocity: -/* @__PURE__ */ Ie(n.velocity || 0)
  }), v = m || 0, N = d / (2 * Math.sqrt(c * u)), P = s - a, T = /* @__PURE__ */ Ie(Math.sqrt(c / u)), w = Math.abs(P) < 5;
  r || (r = w ? le.restSpeed.granular : le.restSpeed.default), i || (i = w ? le.restDelta.granular : le.restDelta.default);
  let C;
  if (N < 1) {
    const A = ri(T, N);
    C = (O) => {
      const b = Math.exp(-N * T * O);
      return s - b * ((v + N * T * P) / A * Math.sin(A * O) + P * Math.cos(A * O));
    };
  } else if (N === 1)
    C = (A) => s - Math.exp(-T * A) * (P + (v + T * P) * A);
  else {
    const A = T * Math.sqrt(N * N - 1);
    C = (O) => {
      const b = Math.exp(-N * T * O), M = Math.min(A * O, 300);
      return s - b * ((v + N * T * P) * Math.sinh(M) + A * P * Math.cosh(M)) / A;
    };
  }
  const k = {
    calculatedDuration: g && h || null,
    next: (A) => {
      const O = C(A);
      if (g)
        o.done = A >= h;
      else {
        let b = A === 0 ? v : 0;
        N < 1 && (b = A === 0 ? /* @__PURE__ */ Ye(v) : Ol(C, A, O));
        const M = Math.abs(b) <= r, U = Math.abs(s - O) <= i;
        o.done = M && U;
      }
      return o.value = o.done ? s : O, o;
    },
    toString: () => {
      const A = Math.min(Qi(k), dr), O = Fl((b) => k.next(A * b).value, A, 30);
      return A + "ms " + O;
    },
    toTransition: () => {
    }
  };
  return k;
}
ur.applyToOptions = (e) => {
  const t = Bm(e, 100, ur);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ Ye(t.duration), e.type = "keyframes", e;
};
function ii({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: s, min: o, max: c, restDelta: d = 0.5, restSpeed: u }) {
  const h = e[0], m = {
    done: !1,
    value: h
  }, g = (M) => o !== void 0 && M < o || c !== void 0 && M > c, v = (M) => o === void 0 ? c : c === void 0 || Math.abs(o - M) < Math.abs(c - M) ? o : c;
  let N = n * t;
  const P = h + N, T = s === void 0 ? P : s(P);
  T !== P && (N = T - h);
  const w = (M) => -N * Math.exp(-M / r), C = (M) => T + w(M), k = (M) => {
    const U = w(M), W = C(M);
    m.done = Math.abs(U) <= d, m.value = m.done ? T : W;
  };
  let A, O;
  const b = (M) => {
    g(m.value) && (A = M, O = ur({
      keyframes: [m.value, v(m.value)],
      velocity: Ol(C, M, m.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: a,
      restDelta: d,
      restSpeed: u
    }));
  };
  return b(0), {
    calculatedDuration: null,
    next: (M) => {
      let U = !1;
      return !O && A === void 0 && (U = !0, k(M), b(M)), A !== void 0 && M >= A ? O.next(M - A) : (!U && k(M), m);
    }
  };
}
function Xm(e, t, n) {
  const r = [], i = n || st.mix || jl, a = e.length - 1;
  for (let s = 0; s < a; s++) {
    let o = i(e[s], e[s + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[s] || Be : t;
      o = On(c, o);
    }
    r.push(o);
  }
  return r;
}
function qm(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const a = e.length;
  if (zi(a === t.length), a === 1)
    return () => t[0];
  if (a === 2 && t[0] === t[1])
    return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const o = Xm(t, r, i), c = o.length, d = (u) => {
    if (s && u < e[0])
      return t[0];
    let h = 0;
    if (c > 1)
      for (; h < e.length - 2 && !(u < e[h + 1]); h++)
        ;
    const m = /* @__PURE__ */ Cn(e[h], e[h + 1], u);
    return o[h](m);
  };
  return n ? (u) => d(at(e[0], e[a - 1], u)) : d;
}
function Ym(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = /* @__PURE__ */ Cn(0, t, r);
    e.push(ae(n, 1, i));
  }
}
function Jm(e) {
  const t = [0];
  return Ym(t, e.length - 1), t;
}
function Zm(e, t) {
  return e.map((n) => n * t);
}
function Qm(e, t) {
  return e.map(() => t || Cl).splice(0, e.length - 1);
}
function gn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = dm(r) ? r.map(ds) : ds(r), a = {
    done: !1,
    value: t[0]
  }, s = Zm(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Jm(t),
    e
  ), o = qm(s, t, {
    ease: Array.isArray(i) ? i : Qm(t, i)
  });
  return {
    calculatedDuration: e,
    next: (c) => (a.value = o(c), a.done = c >= e, a)
  };
}
const ep = (e) => e !== null;
function ea(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const a = e.filter(ep), o = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : a.length - 1;
  return !o || r === void 0 ? a[o] : r;
}
const tp = {
  decay: ii,
  inertia: ii,
  tween: gn,
  keyframes: gn,
  spring: ur
};
function _l(e) {
  typeof e.type == "string" && (e.type = tp[e.type]);
}
class ta {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const np = (e) => e / 100;
class na extends ta {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Re.now() && this.tick(Re.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    _l(t);
    const { type: n = gn, repeat: r = 0, repeatDelay: i = 0, repeatType: a, velocity: s = 0 } = t;
    let { keyframes: o } = t;
    const c = n || gn;
    c !== gn && typeof o[0] != "number" && (this.mixKeyframes = On(np, jl(o[0], o[1])), o = [0, 100]);
    const d = c({ ...t, keyframes: o });
    a === "mirror" && (this.mirroredGenerator = c({
      ...t,
      keyframes: [...o].reverse(),
      velocity: -s
    })), d.calculatedDuration === null && (d.calculatedDuration = Qi(d));
    const { calculatedDuration: u } = d;
    this.calculatedDuration = u, this.resolvedDuration = u + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = d;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: r, totalDuration: i, mixKeyframes: a, mirroredGenerator: s, resolvedDuration: o, calculatedDuration: c } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: d = 0, keyframes: u, repeat: h, repeatType: m, repeatDelay: g, type: v, onUpdate: N, finalKeyframe: P } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const T = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1), w = this.playbackSpeed >= 0 ? T < 0 : T > i;
    this.currentTime = Math.max(T, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let C = this.currentTime, k = r;
    if (h) {
      const M = Math.min(this.currentTime, i) / o;
      let U = Math.floor(M), W = M % 1;
      !W && M >= 1 && (W = 1), W === 1 && U--, U = Math.min(U, h + 1), !!(U % 2) && (m === "reverse" ? (W = 1 - W, g && (W -= g / o)) : m === "mirror" && (k = s)), C = at(0, 1, W) * o;
    }
    const A = w ? { done: !1, value: u[0] } : k.next(C);
    a && (A.value = a(A.value));
    let { done: O } = A;
    !w && c !== null && (O = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const b = this.holdTime === null && (this.state === "finished" || this.state === "running" && O);
    return b && v !== ii && (A.value = ea(u, this.options, P, this.speed)), N && N(A.value), b && this.finish(), A;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return /* @__PURE__ */ Ie(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ie(t);
  }
  get time() {
    return /* @__PURE__ */ Ie(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Ye(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Re.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ Ie(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: t = Im, startTime: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Re.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
  }
}
function rp(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const Dt = (e) => e * 180 / Math.PI, ai = (e) => {
  const t = Dt(Math.atan2(e[1], e[0]));
  return si(t);
}, ip = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: ai,
  rotateZ: ai,
  skewX: (e) => Dt(Math.atan(e[1])),
  skewY: (e) => Dt(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, si = (e) => (e = e % 360, e < 0 && (e += 360), e), gs = ai, ys = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), vs = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), ap = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: ys,
  scaleY: vs,
  scale: (e) => (ys(e) + vs(e)) / 2,
  rotateX: (e) => si(Dt(Math.atan2(e[6], e[5]))),
  rotateY: (e) => si(Dt(Math.atan2(-e[2], e[0]))),
  rotateZ: gs,
  rotate: gs,
  skewX: (e) => Dt(Math.atan(e[4])),
  skewY: (e) => Dt(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function oi(e) {
  return e.includes("scale") ? 1 : 0;
}
function li(e, t) {
  if (!e || e === "none")
    return oi(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n)
    r = ap, i = n;
  else {
    const o = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = ip, i = o;
  }
  if (!i)
    return oi(t);
  const a = r[t], s = i[1].split(",").map(op);
  return typeof a == "function" ? a(s) : s[a];
}
const sp = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return li(n, t);
};
function op(e) {
  return parseFloat(e.trim());
}
const Jt = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Zt = new Set(Jt), bs = (e) => e === Yt || e === I, lp = /* @__PURE__ */ new Set(["x", "y", "z"]), cp = Jt.filter((e) => !lp.has(e));
function dp(e) {
  const t = [];
  return cp.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const kt = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => li(t, "x"),
  y: (e, { transform: t }) => li(t, "y")
};
kt.translateX = kt.x;
kt.translateY = kt.y;
const Lt = /* @__PURE__ */ new Set();
let ci = !1, di = !1, ui = !1;
function Il() {
  if (di) {
    const e = Array.from(Lt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = dp(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([a, s]) => {
        r.getValue(a)?.set(s);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  di = !1, ci = !1, Lt.forEach((e) => e.complete(ui)), Lt.clear();
}
function Bl() {
  Lt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (di = !0);
  });
}
function up() {
  ui = !0, Bl(), Il(), ui = !1;
}
class ra {
  constructor(t, n, r, i, a, s = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = a, this.isAsync = s;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Lt.add(this), ci || (ci = !0, ie.read(Bl), ie.resolveKeyframes(Il))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    if (t[0] === null) {
      const a = i?.get(), s = t[t.length - 1];
      if (a !== void 0)
        t[0] = a;
      else if (r && n) {
        const o = r.readValue(n, s);
        o != null && (t[0] = o);
      }
      t[0] === void 0 && (t[0] = s), i && a === void 0 && i.set(t[0]);
    }
    rp(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Lt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Lt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const hp = (e) => e.startsWith("--");
function fp(e, t, n) {
  hp(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const mp = /* @__PURE__ */ Hi(() => window.ScrollTimeline !== void 0), pp = {};
function gp(e, t) {
  const n = /* @__PURE__ */ Hi(e);
  return () => pp[t] ?? n();
}
const $l = /* @__PURE__ */ gp(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), hn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, xs = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ hn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ hn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ hn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ hn([0.33, 1.53, 0.69, 0.99])
};
function Ul(e, t) {
  if (e)
    return typeof e == "function" ? $l() ? Fl(e, t) : "ease-out" : Sl(e) ? hn(e) : Array.isArray(e) ? e.map((n) => Ul(n, t) || xs.easeOut) : xs[e];
}
function yp(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: s = "loop", ease: o = "easeOut", times: c } = {}, d = void 0) {
  const u = {
    [t]: n
  };
  c && (u.offset = c);
  const h = Ul(o, i);
  Array.isArray(h) && (u.easing = h);
  const m = {
    delay: r,
    duration: i,
    easing: Array.isArray(h) ? "linear" : h,
    fill: "both",
    iterations: a + 1,
    direction: s === "reverse" ? "alternate" : "normal"
  };
  return d && (m.pseudoElement = d), e.animate(u, m);
}
function zl(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function vp({ type: e, ...t }) {
  return zl(e) && $l() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class bp extends ta {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: i, pseudoElement: a, allowFlatten: s = !1, finalKeyframe: o, onComplete: c } = t;
    this.isPseudoElement = !!a, this.allowFlatten = s, this.options = t, zi(typeof t.type != "string");
    const d = vp(t);
    this.animation = yp(n, r, i, d, a), d.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !a) {
        const u = ea(i, this.options, o, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : fp(n, r, u), this.animation.cancel();
      }
      c?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const t = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ Ie(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Ie(t);
  }
  get time() {
    return /* @__PURE__ */ Ie(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Ye(t);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, observe: n }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, t && mp() ? (this.animation.timeline = t, Be) : n(this);
  }
}
const Hl = {
  anticipate: Nl,
  backInOut: wl,
  circInOut: Tl
};
function xp(e) {
  return e in Hl;
}
function wp(e) {
  typeof e.ease == "string" && xp(e.ease) && (e.ease = Hl[e.ease]);
}
const ws = 10;
class Np extends bp {
  constructor(t) {
    wp(t), _l(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: r, onComplete: i, element: a, ...s } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const o = new na({
      ...s,
      autoplay: !1
    }), c = /* @__PURE__ */ Ye(this.finishedTime ?? this.time);
    n.setWithVelocity(o.sample(c - ws).value, o.sample(c).value, ws), o.stop();
  }
}
const Ns = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(yt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function Pp(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function Tp(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const a = e[e.length - 1], s = Ns(i, t), o = Ns(a, t);
  return !s || !o ? !1 : Pp(e) || (n === "spring" || zl(n)) && r;
}
function hi(e) {
  e.duration = 0, e.type = "keyframes";
}
const Cp = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), Sp = /* @__PURE__ */ Hi(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Rp(e) {
  const { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: s } = e;
  if (!(t?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: c, transformTemplate: d } = t.owner.getProps();
  return Sp() && n && Cp.has(n) && (n !== "transform" || !d) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !r && i !== "mirror" && a !== 0 && s !== "inertia";
}
const Mp = 40;
class Ap extends ta {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", keyframes: o, name: c, motionValue: d, element: u, ...h }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Re.now();
    const m = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: a,
      repeatType: s,
      name: c,
      motionValue: d,
      element: u,
      ...h
    }, g = u?.KeyframeResolver || ra;
    this.keyframeResolver = new g(o, (v, N, P) => this.onKeyframesResolved(v, N, m, !P), c, d, u), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const { name: a, type: s, velocity: o, delay: c, isHandoff: d, onUpdate: u } = r;
    this.resolvedAt = Re.now(), Tp(t, a, s, o) || ((st.instantAnimations || !c) && u?.(ea(t, r, n)), t[0] = t[t.length - 1], hi(r), r.repeat = 0);
    const m = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Mp ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, g = !d && Rp(m) ? new Np({
      ...m,
      element: m.motionValue.owner.current
    }) : new na(m);
    g.finished.then(() => this.notifyFinished()).catch(Be), this.pendingTimeline && (this.stopTimeline = g.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = g;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), up()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const Ep = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Dp(e) {
  const t = Ep.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Wl(e, t, n = 1) {
  const [r, i] = Dp(e);
  if (!r)
    return;
  const a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    const s = a.trim();
    return fl(s) ? parseFloat(s) : s;
  }
  return qi(i) ? Wl(i, t, n + 1) : i;
}
function ia(e, t) {
  return e?.[t] ?? e?.default ?? e;
}
const Kl = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Jt
]), kp = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Gl = (e) => (t) => t.test(e), Xl = [Yt, I, Je, ct, Pm, Nm, kp], Ps = (e) => Xl.find(Gl(e));
function Lp(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || pl(e) : !0;
}
const Vp = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function jp(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Yi) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let a = Vp.has(t) ? 1 : 0;
  return r !== n && (a *= 100), t + "(" + a + i + ")";
}
const Fp = /\b([a-z-]*)\(.*?\)/gu, fi = {
  ...yt,
  getAnimatableNone: (e) => {
    const t = e.match(Fp);
    return t ? t.map(jp).join(" ") : e;
  }
}, Ts = {
  ...Yt,
  transform: Math.round
}, Op = {
  rotate: ct,
  rotateX: ct,
  rotateY: ct,
  rotateZ: ct,
  scale: Qn,
  scaleX: Qn,
  scaleY: Qn,
  scaleZ: Qn,
  skew: ct,
  skewX: ct,
  skewY: ct,
  distance: I,
  translateX: I,
  translateY: I,
  translateZ: I,
  x: I,
  y: I,
  z: I,
  perspective: I,
  transformPerspective: I,
  opacity: Sn,
  originX: us,
  originY: us,
  originZ: I
}, aa = {
  // Border props
  borderWidth: I,
  borderTopWidth: I,
  borderRightWidth: I,
  borderBottomWidth: I,
  borderLeftWidth: I,
  borderRadius: I,
  radius: I,
  borderTopLeftRadius: I,
  borderTopRightRadius: I,
  borderBottomRightRadius: I,
  borderBottomLeftRadius: I,
  // Positioning props
  width: I,
  maxWidth: I,
  height: I,
  maxHeight: I,
  top: I,
  right: I,
  bottom: I,
  left: I,
  // Spacing props
  padding: I,
  paddingTop: I,
  paddingRight: I,
  paddingBottom: I,
  paddingLeft: I,
  margin: I,
  marginTop: I,
  marginRight: I,
  marginBottom: I,
  marginLeft: I,
  // Misc
  backgroundPositionX: I,
  backgroundPositionY: I,
  ...Op,
  zIndex: Ts,
  // SVG
  fillOpacity: Sn,
  strokeOpacity: Sn,
  numOctaves: Ts
}, _p = {
  ...aa,
  // Color props
  color: fe,
  backgroundColor: fe,
  outlineColor: fe,
  fill: fe,
  stroke: fe,
  // Border props
  borderColor: fe,
  borderTopColor: fe,
  borderRightColor: fe,
  borderBottomColor: fe,
  borderLeftColor: fe,
  filter: fi,
  WebkitFilter: fi
}, ql = (e) => _p[e];
function Yl(e, t) {
  let n = ql(e);
  return n !== fi && (n = yt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const Ip = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Bp(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const a = e[r];
    typeof a == "string" && !Ip.has(a) && Rn(a).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const a of t)
      e[a] = Yl(n, i);
}
class $p extends ra {
  constructor(t, n, r, i, a) {
    super(t, n, r, i, a, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let d = t[c];
      if (typeof d == "string" && (d = d.trim(), qi(d))) {
        const u = Wl(d, n.current);
        u !== void 0 && (t[c] = u), c === t.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !Kl.has(r) || t.length !== 2)
      return;
    const [i, a] = t, s = Ps(i), o = Ps(a);
    if (s !== o)
      if (bs(s) && bs(o))
        for (let c = 0; c < t.length; c++) {
          const d = t[c];
          typeof d == "string" && (t[c] = parseFloat(d));
        }
      else kt[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      (t[i] === null || Lp(t[i])) && r.push(i);
    r.length && Bp(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = kt[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current)
      return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const a = r.length - 1, s = r[a];
    r[a] = kt[n](t.measureViewportBox(), window.getComputedStyle(t.current)), s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s), this.removedTransforms?.length && this.removedTransforms.forEach(([o, c]) => {
      t.getValue(o).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function Up(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let r = document;
    const i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const Jl = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function zp(e) {
  return ml(e) && "offsetHeight" in e;
}
const Cs = 30, Hp = (e) => !isNaN(parseFloat(e));
class Wp {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      const i = Re.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const a of this.dependents)
          a.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Re.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Hp(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Wi());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), ie.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = Re.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Cs)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Cs);
    return gl(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Xt(e, t) {
  return new Wp(e, t);
}
const { schedule: sa } = /* @__PURE__ */ Rl(queueMicrotask, !1), ze = {
  x: !1,
  y: !1
};
function Zl() {
  return ze.x || ze.y;
}
function Kp(e) {
  return e === "x" || e === "y" ? ze[e] ? null : (ze[e] = !0, () => {
    ze[e] = !1;
  }) : ze.x || ze.y ? null : (ze.x = ze.y = !0, () => {
    ze.x = ze.y = !1;
  });
}
function Ql(e, t) {
  const n = Up(e), r = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function Ss(e) {
  return !(e.pointerType === "touch" || Zl());
}
function Gp(e, t, n = {}) {
  const [r, i, a] = Ql(e, n), s = (o) => {
    if (!Ss(o))
      return;
    const { target: c } = o, d = t(c, o);
    if (typeof d != "function" || !c)
      return;
    const u = (h) => {
      Ss(h) && (d(h), c.removeEventListener("pointerleave", u));
    };
    c.addEventListener("pointerleave", u, i);
  };
  return r.forEach((o) => {
    o.addEventListener("pointerenter", s, i);
  }), a;
}
const ec = (e, t) => t ? e === t ? !0 : ec(e, t.parentElement) : !1, oa = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Xp = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function qp(e) {
  return Xp.has(e.tagName) || e.tabIndex !== -1;
}
const ar = /* @__PURE__ */ new WeakSet();
function Rs(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function _r(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const Yp = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Rs(() => {
    if (ar.has(n))
      return;
    _r(n, "down");
    const i = Rs(() => {
      _r(n, "up");
    }), a = () => _r(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", a, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Ms(e) {
  return oa(e) && !Zl();
}
function Jp(e, t, n = {}) {
  const [r, i, a] = Ql(e, n), s = (o) => {
    const c = o.currentTarget;
    if (!Ms(o))
      return;
    ar.add(c);
    const d = t(c, o), u = (g, v) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", m), ar.has(c) && ar.delete(c), Ms(g) && typeof d == "function" && d(g, { success: v });
    }, h = (g) => {
      u(g, c === window || c === document || n.useGlobalTarget || ec(c, g.target));
    }, m = (g) => {
      u(g, !1);
    };
    window.addEventListener("pointerup", h, i), window.addEventListener("pointercancel", m, i);
  };
  return r.forEach((o) => {
    (n.useGlobalTarget ? window : o).addEventListener("pointerdown", s, i), zp(o) && (o.addEventListener("focus", (d) => Yp(d, i)), !qp(o) && !o.hasAttribute("tabindex") && (o.tabIndex = 0));
  }), a;
}
function tc(e) {
  return ml(e) && "ownerSVGElement" in e;
}
function Zp(e) {
  return tc(e) && e.tagName === "svg";
}
const Ne = (e) => !!(e && e.getVelocity), Qp = [...Xl, fe, yt], e0 = (e) => Qp.find(Gl(e)), nc = me({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function t0(e = !0) {
  const t = B(Bi);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t, a = Ro();
  _e(() => {
    if (e)
      return i(a);
  }, [e]);
  _e(() => {
    const M = shareRideGetSession();
    if (!M?.token || r?.identity_verification_status !== "pending")
      return;
    const A = setInterval(() => {
      B(!0);
    }, 15e3);
    return () => clearInterval(A);
  }, [r?.identity_verification_status]);
  const s = ot(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const rc = me({ strict: !1 }), As = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, qt = {};
for (const e in As)
  qt[e] = {
    isEnabled: (t) => As[e].some((n) => !!t[n])
  };
function n0(e) {
  for (const t in e)
    qt[t] = {
      ...qt[t],
      ...e[t]
    };
}
const r0 = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function hr(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || r0.has(e);
}
let ic = (e) => !hr(e);
function i0(e) {
  typeof e == "function" && (ic = (t) => t.startsWith("on") ? !hr(t) : e(t));
}
try {
  i0(require("@emotion/is-prop-valid").default);
} catch {
}
function a0(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (ic(i) || n === !0 && hr(i) || !t && !hr(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
const br = /* @__PURE__ */ me({});
function xr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Mn(e) {
  return typeof e == "string" || Array.isArray(e);
}
const la = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ca = ["initial", ...la];
function wr(e) {
  return xr(e.animate) || ca.some((t) => Mn(e[t]));
}
function ac(e) {
  return !!(wr(e) || e.variants);
}
function s0(e, t) {
  if (wr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Mn(n) ? n : void 0,
      animate: Mn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function o0(e) {
  const { initial: t, animate: n } = s0(e, B(br));
  return ve(() => ({ initial: t, animate: n }), [Es(t), Es(n)]);
}
function Es(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const An = {};
function l0(e) {
  for (const t in e)
    An[t] = e[t], Xi(t) && (An[t].isCSSVariable = !0);
}
function sc(e, { layout: t, layoutId: n }) {
  return Zt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!An[e] || e === "opacity");
}
const c0 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, d0 = Jt.length;
function u0(e, t, n) {
  let r = "", i = !0;
  for (let a = 0; a < d0; a++) {
    const s = Jt[a], o = e[s];
    if (o === void 0)
      continue;
    let c = !0;
    if (typeof o == "number" ? c = o === (s.startsWith("scale") ? 1 : 0) : c = parseFloat(o) === 0, !c || n) {
      const d = Jl(o, aa[s]);
      if (!c) {
        i = !1;
        const u = c0[s] || s;
        r += `${u}(${d}) `;
      }
      n && (t[s] = d);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function da(e, t, n) {
  const { style: r, vars: i, transformOrigin: a } = e;
  let s = !1, o = !1;
  for (const c in t) {
    const d = t[c];
    if (Zt.has(c)) {
      s = !0;
      continue;
    } else if (Xi(c)) {
      i[c] = d;
      continue;
    } else {
      const u = Jl(d, aa[c]);
      c.startsWith("origin") ? (o = !0, a[c] = u) : r[c] = u;
    }
  }
  if (t.transform || (s || n ? r.transform = u0(t, e.transform, n) : r.transform && (r.transform = "none")), o) {
    const { originX: c = "50%", originY: d = "50%", originZ: u = 0 } = a;
    r.transformOrigin = `${c} ${d} ${u}`;
  }
}
const ua = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function oc(e, t, n) {
  for (const r in t)
    !Ne(t[r]) && !sc(r, n) && (e[r] = t[r]);
}
function h0({ transformTemplate: e }, t) {
  return ve(() => {
    const n = ua();
    return da(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function f0(e, t) {
  const n = e.style || {}, r = {};
  return oc(r, n, e), Object.assign(r, h0(e, t)), r;
}
function m0(e, t) {
  const n = {}, r = f0(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const p0 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, g0 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function y0(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const a = i ? p0 : g0;
  e[a.offset] = I.transform(-r);
  const s = I.transform(t), o = I.transform(n);
  e[a.array] = `${s} ${o}`;
}
function lc(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: i,
  pathSpacing: a = 1,
  pathOffset: s = 0,
  // This is object creation, which we try to avoid per-frame.
  ...o
}, c, d, u) {
  if (da(e, o, d), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: h, style: m } = e;
  h.transform && (m.transform = h.transform, delete h.transform), (m.transform || h.transformOrigin) && (m.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), m.transform && (m.transformBox = u?.transformBox ?? "fill-box", delete h.transformBox), t !== void 0 && (h.x = t), n !== void 0 && (h.y = n), r !== void 0 && (h.scale = r), i !== void 0 && y0(h, i, a, s, !1);
}
const cc = () => ({
  ...ua(),
  attrs: {}
}), dc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function v0(e, t, n, r) {
  const i = ve(() => {
    const a = cc();
    return lc(a, t, dc(r), e.transformTemplate, e.style), {
      ...a.attrs,
      style: { ...a.style }
    };
  }, [t]);
  if (e.style) {
    const a = {};
    oc(a, e.style, e), i.style = { ...a, ...i.style };
  }
  return i;
}
const b0 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function ha(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(b0.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function x0(e, t, n, { latestValues: r }, i, a = !1) {
  const o = (ha(e) ? v0 : m0)(t, r, i, e), c = a0(t, typeof e == "string", a), d = e !== ft ? { ...c, ...o, ref: n } : {}, { children: u } = t, h = ve(() => Ne(u) ? u.get() : u, [u]);
  return $(e, {
    ...d,
    children: h
  });
}
function Ds(e) {
  const t = [{}, {}];
  return e?.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function fa(e, t, n, r) {
  if (typeof t == "function") {
    const [i, a] = Ds(r);
    t = t(n !== void 0 ? n : e.custom, i, a);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, a] = Ds(r);
    t = t(n !== void 0 ? n : e.custom, i, a);
  }
  return t;
}
function sr(e) {
  return Ne(e) ? e.get() : e;
}
function w0({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return {
    latestValues: N0(n, r, i, e),
    renderState: t()
  };
}
function N0(e, t, n, r) {
  const i = {}, a = r(e, {});
  for (const m in a)
    i[m] = sr(a[m]);
  let { initial: s, animate: o } = e;
  const c = wr(e), d = ac(e);
  t && d && !c && e.inherit !== !1 && (s === void 0 && (s = t.initial), o === void 0 && (o = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || s === !1;
  const h = u ? o : s;
  if (h && typeof h != "boolean" && !xr(h)) {
    const m = Array.isArray(h) ? h : [h];
    for (let g = 0; g < m.length; g++) {
      const v = fa(e, m[g]);
      if (v) {
        const { transitionEnd: N, transition: P, ...T } = v;
        for (const w in T) {
          let C = T[w];
          if (Array.isArray(C)) {
            const k = u ? C.length - 1 : 0;
            C = C[k];
          }
          C !== null && (i[w] = C);
        }
        for (const w in N)
          i[w] = N[w];
      }
    }
  }
  return i;
}
const uc = (e) => (t, n) => {
  const r = B(br), i = B(Bi), a = () => w0(e, t, r, i);
  return n ? a() : nm(a);
};
function ma(e, t, n) {
  const { style: r } = e, i = {};
  for (const a in r)
    (Ne(r[a]) || t.style && Ne(t.style[a]) || sc(a, e) || n?.getValue(a)?.liveStyle !== void 0) && (i[a] = r[a]);
  return i;
}
const P0 = /* @__PURE__ */ uc({
  scrapeMotionValuesFromProps: ma,
  createRenderState: ua
});
function hc(e, t, n) {
  const r = ma(e, t, n);
  for (const i in e)
    if (Ne(e[i]) || Ne(t[i])) {
      const a = Jt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[a] = e[i];
    }
  return r;
}
const T0 = /* @__PURE__ */ uc({
  scrapeMotionValuesFromProps: hc,
  createRenderState: cc
}), C0 = Symbol.for("motionComponentSymbol");
function $t(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function S0(e, t, n) {
  return ot(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : $t(n) && (n.current = r));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [t]
  );
}
const pa = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), R0 = "framerAppearId", fc = "data-" + pa(R0), mc = me({});
function M0(e, t, n, r, i) {
  const { visualElement: a } = B(br), s = B(rc), o = B(Bi), c = B(nc).reducedMotion, d = He(null);
  r = r || s.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: a,
    props: n,
    presenceContext: o,
    blockInitialAnimation: o ? o.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const u = d.current, h = B(mc);
  u && !u.projection && i && (u.type === "html" || u.type === "svg") && A0(d.current, n, i, h);
  const m = He(!1);
  Mo(() => {
    u && m.current && u.update(n, o);
  });
  const g = n[fc], v = He(!!g && !window.MotionHandoffIsComplete?.(g) && window.MotionHasOptimisedAnimation?.(g));
  return rm(() => {
    u && (m.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), u.scheduleRenderMicrotask(), v.current && u.animationState && u.animationState.animateChanges());
  }), _e(() => {
    u && (!v.current && u.animationState && u.animationState.animateChanges(), v.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(g);
    }), v.current = !1), u.enteringChildren = void 0);
  }), u;
}
function A0(e, t, n, r) {
  const { layoutId: i, layout: a, drag: s, dragConstraints: o, layoutScroll: c, layoutRoot: d, layoutCrossfade: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : pc(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: a,
    alwaysMeasureLayout: !!s || o && $t(o),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof a == "string" ? a : "both",
    initialPromotionConfig: r,
    crossfade: u,
    layoutScroll: c,
    layoutRoot: d
  });
}
function pc(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : pc(e.parent);
}
function Ir(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  n && n0(n);
  const i = ha(e) ? T0 : P0;
  function a(o, c) {
    let d;
    const u = {
      ...B(nc),
      ...o,
      layoutId: E0(o)
    }, { isStatic: h } = u, m = o0(o), g = i(o, h);
    if (!h && Ii) {
      D0();
      const v = k0(u);
      d = v.MeasureLayout, m.visualElement = M0(e, g, u, r, v.ProjectionNode);
    }
    return f(br.Provider, { value: m, children: [d && m.visualElement ? l(d, { visualElement: m.visualElement, ...u }) : null, x0(e, o, S0(g, m.visualElement, c), g, h, t)] });
  }
  a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const s = Vt(a);
  return s[C0] = e, s;
}
function E0({ layoutId: e }) {
  const t = B(hl).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function D0(e, t) {
  B(rc).strict;
}
function k0(e) {
  const { drag: t, layout: n } = qt;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function L0(e, t) {
  if (typeof Proxy > "u")
    return Ir;
  const n = /* @__PURE__ */ new Map(), r = (a, s) => Ir(a, s, e, t), i = (a, s) => r(a, s);
  return new Proxy(i, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (a, s) => s === "create" ? r : (n.has(s) || n.set(s, Ir(s, void 0, e, t)), n.get(s))
  });
}
function gc({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function V0({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function j0(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function Br(e) {
  return e === void 0 || e === 1;
}
function mi({ scale: e, scaleX: t, scaleY: n }) {
  return !Br(e) || !Br(t) || !Br(n);
}
function Mt(e) {
  return mi(e) || yc(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function yc(e) {
  return ks(e.x) || ks(e.y);
}
function ks(e) {
  return e && e !== "0%";
}
function fr(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function Ls(e, t, n, r, i) {
  return i !== void 0 && (e = fr(e, i, r)), fr(e, n, r) + t;
}
function pi(e, t = 0, n = 1, r, i) {
  e.min = Ls(e.min, t, n, r, i), e.max = Ls(e.max, t, n, r, i);
}
function vc(e, { x: t, y: n }) {
  pi(e.x, t.translate, t.scale, t.originPoint), pi(e.y, n.translate, n.scale, n.originPoint);
}
const Vs = 0.999999999999, js = 1.0000000000001;
function F0(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let a, s;
  for (let o = 0; o < i; o++) {
    a = n[o], s = a.projectionDelta;
    const { visualElement: c } = a.options;
    c && c.props.style && c.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && zt(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), s && (t.x *= s.x.scale, t.y *= s.y.scale, vc(e, s)), r && Mt(a.latestValues) && zt(e, a.latestValues));
  }
  t.x < js && t.x > Vs && (t.x = 1), t.y < js && t.y > Vs && (t.y = 1);
}
function Ut(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Fs(e, t, n, r, i = 0.5) {
  const a = ae(e.min, e.max, i);
  pi(e, t, n, a, r);
}
function zt(e, t) {
  Fs(e.x, t.x, t.scaleX, t.scale, t.originX), Fs(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function bc(e, t) {
  return gc(j0(e.getBoundingClientRect(), t));
}
function O0(e, t, n) {
  const r = bc(e, n), { scroll: i } = t;
  return i && (Ut(r.x, i.offset.x), Ut(r.y, i.offset.y)), r;
}
const Os = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Ht = () => ({
  x: Os(),
  y: Os()
}), _s = () => ({ min: 0, max: 0 }), ue = () => ({
  x: _s(),
  y: _s()
}), gi = { current: null }, xc = { current: !1 };
function _0() {
  if (xc.current = !0, !!Ii)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => gi.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      gi.current = !1;
}
const I0 = /* @__PURE__ */ new WeakMap();
function B0(e, t, n) {
  for (const r in t) {
    const i = t[r], a = n[r];
    if (Ne(i))
      e.addValue(r, i);
    else if (Ne(a))
      e.addValue(r, Xt(i, { owner: e }));
    else if (a !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Xt(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Is = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class $0 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: a, visualState: s }, o = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ra, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const m = Re.now();
      this.renderScheduledAt < m && (this.renderScheduledAt = m, ie.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: d } = s;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = d, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = o, this.blockInitialAnimation = !!a, this.isControllingVariants = wr(n), this.isVariantNode = ac(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const m in h) {
      const g = h[m];
      c[m] !== void 0 && Ne(g) && g.set(c[m]);
    }
  }
  mount(t) {
    this.current = t, I0.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), xc.current || _0(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : gi.current, this.parent?.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), gt(this.notifyUpdate), gt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Zt.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (s) => {
      this.latestValues[t] = s, this.props.onUpdate && ie.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let a;
    window.MotionCheckAppearSync && (a = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), a && a(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in qt) {
      const n = qt[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const a = this.features[t];
        a.isMounted ? a.update() : (a.mount(), a.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ue();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < Is.length; r++) {
      const i = Is[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const a = "on" + i, s = t[a];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    this.prevMotionValues = B0(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Xt(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (fl(r) || pl(r)) ? r = parseFloat(r) : !e0(r) && yt.test(n) && (r = Yl(t, n)), this.setBaseTarget(t, Ne(r) ? r.get() : r)), Ne(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const a = fa(this.props, n, this.presenceContext?.custom);
      a && (r = a[t]);
    }
    if (n && r !== void 0)
      return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ne(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Wi()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    sa.render(this.render);
  }
}
class wc extends $0 {
  constructor() {
    super(...arguments), this.KeyframeResolver = $p;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ne(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Nc(e, { style: t, vars: n }, r, i) {
  const a = e.style;
  let s;
  for (s in t)
    a[s] = t[s];
  i?.applyProjectionStyles(a, r);
  for (s in n)
    a.setProperty(s, n[s]);
}
function U0(e) {
  return window.getComputedStyle(e);
}
class z0 extends wc {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Nc;
  }
  readValueFromInstance(t, n) {
    if (Zt.has(n))
      return this.projection?.isProjecting ? oi(n) : sp(t, n);
    {
      const r = U0(t), i = (Xi(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return bc(t, n);
  }
  build(t, n, r) {
    da(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ma(t, n, r);
  }
}
const Pc = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function H0(e, t, n, r) {
  Nc(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(Pc.has(i) ? i : pa(i), t.attrs[i]);
}
class W0 extends wc {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ue;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Zt.has(n)) {
      const r = ql(n);
      return r && r.default || 0;
    }
    return n = Pc.has(n) ? n : pa(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return hc(t, n, r);
  }
  build(t, n, r) {
    lc(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    H0(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = dc(t.tagName), super.mount(t);
  }
}
const K0 = (e, t) => ha(e) ? new W0(t) : new z0(t, {
  allowProjection: e !== ft
});
function Kt(e, t, n) {
  const r = e.getProps();
  return fa(r, t, n !== void 0 ? n : r.custom, e);
}
const yi = (e) => Array.isArray(e);
function G0(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Xt(n));
}
function X0(e) {
  return yi(e) ? e[e.length - 1] || 0 : e;
}
function q0(e, t) {
  const n = Kt(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...a } = n || {};
  a = { ...a, ...r };
  for (const s in a) {
    const o = X0(a[s]);
    G0(e, s, o);
  }
}
function Y0(e) {
  return !!(Ne(e) && e.add);
}
function vi(e, t) {
  const n = e.getValue("willChange");
  if (Y0(n))
    return n.add(t);
  if (!n && st.WillChange) {
    const r = new st.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Tc(e) {
  return e.props[fc];
}
const J0 = (e) => e !== null;
function Z0(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(J0), a = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return i[a];
}
const Q0 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, eg = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), tg = {
  type: "keyframes",
  duration: 0.8
}, ng = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, rg = (e, { keyframes: t }) => t.length > 2 ? tg : Zt.has(e) ? e.startsWith("scale") ? eg(t[1]) : Q0 : ng;
function ig({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: a, repeatType: s, repeatDelay: o, from: c, elapsed: d, ...u }) {
  return !!Object.keys(u).length;
}
const ga = (e, t, n, r = {}, i, a) => (s) => {
  const o = ia(r, e) || {}, c = o.delay || r.delay || 0;
  let { elapsed: d = 0 } = r;
  d = d - /* @__PURE__ */ Ye(c);
  const u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...o,
    delay: -d,
    onUpdate: (m) => {
      t.set(m), o.onUpdate && o.onUpdate(m);
    },
    onComplete: () => {
      s(), o.onComplete && o.onComplete();
    },
    name: e,
    motionValue: t,
    element: a ? void 0 : i
  };
  ig(o) || Object.assign(u, rg(e, u)), u.duration && (u.duration = /* @__PURE__ */ Ye(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Ye(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let h = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (hi(u), u.delay === 0 && (h = !0)), (st.instantAnimations || st.skipAnimations) && (h = !0, hi(u), u.delay = 0), u.allowFlatten = !o.type && !o.ease, h && !a && t.get() !== void 0) {
    const m = Z0(u.keyframes, o);
    if (m !== void 0) {
      ie.update(() => {
        u.onUpdate(m), u.onComplete();
      });
      return;
    }
  }
  return o.isSync ? new na(u) : new Ap(u);
};
function ag({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Cc(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: s, ...o } = t;
  r && (a = r);
  const c = [], d = i && e.animationState && e.animationState.getState()[i];
  for (const u in o) {
    const h = e.getValue(u, e.latestValues[u] ?? null), m = o[u];
    if (m === void 0 || d && ag(d, u))
      continue;
    const g = {
      delay: n,
      ...ia(a || {}, u)
    }, v = h.get();
    if (v !== void 0 && !h.isAnimating && !Array.isArray(m) && m === v && !g.velocity)
      continue;
    let N = !1;
    if (window.MotionHandoffAnimation) {
      const T = Tc(e);
      if (T) {
        const w = window.MotionHandoffAnimation(T, u, ie);
        w !== null && (g.startTime = w, N = !0);
      }
    }
    vi(e, u), h.start(ga(u, h, m, e.shouldReduceMotion && Kl.has(u) ? { type: !1 } : g, e, N));
    const P = h.animation;
    P && c.push(P);
  }
  return s && Promise.all(c).then(() => {
    ie.update(() => {
      s && q0(e, s);
    });
  }), c;
}
function Sc(e, t, n, r = 0, i = 1) {
  const a = Array.from(e).sort((d, u) => d.sortNodePosition(u)).indexOf(t), s = e.size, o = (s - 1) * r;
  return typeof n == "function" ? n(a, s) : i === 1 ? a * r : o - a * r;
}
function bi(e, t, n = {}) {
  const r = Kt(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const a = r ? () => Promise.all(Cc(e, r, n)) : () => Promise.resolve(), s = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: d = 0, staggerChildren: u, staggerDirection: h } = i;
    return sg(e, t, c, d, u, h, n);
  } : () => Promise.resolve(), { when: o } = i;
  if (o) {
    const [c, d] = o === "beforeChildren" ? [a, s] : [s, a];
    return c().then(() => d());
  } else
    return Promise.all([a(), s(n.delay)]);
}
function sg(e, t, n = 0, r = 0, i = 0, a = 1, s) {
  const o = [];
  for (const c of e.variantChildren)
    c.notify("AnimationStart", t), o.push(bi(c, t, {
      ...s,
      delay: n + (typeof r == "function" ? 0 : r) + Sc(e.variantChildren, c, r, i, a)
    }).then(() => c.notify("AnimationComplete", t)));
  return Promise.all(o);
}
function og(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((a) => bi(e, a, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = bi(e, t, n);
  else {
    const i = typeof t == "function" ? Kt(e, t, n.custom) : t;
    r = Promise.all(Cc(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Rc(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
const lg = ca.length;
function Mc(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Mc(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < lg; n++) {
    const r = ca[n], i = e.props[r];
    (Mn(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const cg = [...la].reverse(), dg = la.length;
function ug(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => og(e, n, r)));
}
function hg(e) {
  let t = ug(e), n = Bs(), r = !0;
  const i = (c) => (d, u) => {
    const h = Kt(e, u, c === "exit" ? e.presenceContext?.custom : void 0);
    if (h) {
      const { transition: m, transitionEnd: g, ...v } = h;
      d = { ...d, ...v, ...g };
    }
    return d;
  };
  function a(c) {
    t = c(e);
  }
  function s(c) {
    const { props: d } = e, u = Mc(e.parent) || {}, h = [], m = /* @__PURE__ */ new Set();
    let g = {}, v = 1 / 0;
    for (let P = 0; P < dg; P++) {
      const T = cg[P], w = n[T], C = d[T] !== void 0 ? d[T] : u[T], k = Mn(C), A = T === c ? w.isActive : null;
      A === !1 && (v = P);
      let O = C === u[T] && C !== d[T] && k;
      if (O && r && e.manuallyAnimateOnMount && (O = !1), w.protectedKeys = { ...g }, // If it isn't active and hasn't *just* been set as inactive
      !w.isActive && A === null || // If we didn't and don't have any defined prop for this animation type
      !C && !w.prevProp || // Or if the prop doesn't define an animation
      xr(C) || typeof C == "boolean")
        continue;
      const b = fg(w.prevProp, C);
      let M = b || // If we're making this variant active, we want to always make it active
      T === c && w.isActive && !O && k || // If we removed a higher-priority variant (i is in reverse order)
      P > v && k, U = !1;
      const W = Array.isArray(C) ? C : [C];
      let X = W.reduce(i(T), {});
      A === !1 && (X = {});
      const { prevResolvedValues: ce = {} } = w, Me = {
        ...ce,
        ...X
      }, se = (Z) => {
        M = !0, m.has(Z) && (U = !0, m.delete(Z)), w.needsAnimating[Z] = !0;
        const z = e.getValue(Z);
        z && (z.liveStyle = !1);
      };
      for (const Z in Me) {
        const z = X[Z], ne = ce[Z];
        if (g.hasOwnProperty(Z))
          continue;
        let de = !1;
        yi(z) && yi(ne) ? de = !Rc(z, ne) : de = z !== ne, de ? z != null ? se(Z) : m.add(Z) : z !== void 0 && m.has(Z) ? se(Z) : w.protectedKeys[Z] = !0;
      }
      w.prevProp = C, w.prevResolvedValues = X, w.isActive && (g = { ...g, ...X }), r && e.blockInitialAnimation && (M = !1);
      const J = O && b;
      M && (!J || U) && h.push(...W.map((Z) => {
        const z = { type: T };
        if (typeof Z == "string" && r && !J && e.manuallyAnimateOnMount && e.parent) {
          const { parent: ne } = e, de = Kt(ne, Z);
          if (ne.enteringChildren && de) {
            const { delayChildren: Ae } = de.transition || {};
            z.delay = Sc(ne.enteringChildren, e, Ae);
          }
        }
        return {
          animation: Z,
          options: z
        };
      }));
    }
    if (m.size) {
      const P = {};
      if (typeof d.initial != "boolean") {
        const T = Kt(e, Array.isArray(d.initial) ? d.initial[0] : d.initial);
        T && T.transition && (P.transition = T.transition);
      }
      m.forEach((T) => {
        const w = e.getBaseTarget(T), C = e.getValue(T);
        C && (C.liveStyle = !0), P[T] = w ?? null;
      }), h.push({ animation: P });
    }
    let N = !!h.length;
    return r && (d.initial === !1 || d.initial === d.animate) && !e.manuallyAnimateOnMount && (N = !1), r = !1, N ? t(h) : Promise.resolve();
  }
  function o(c, d) {
    if (n[c].isActive === d)
      return Promise.resolve();
    e.variantChildren?.forEach((h) => h.animationState?.setActive(c, d)), n[c].isActive = d;
    const u = s(c);
    for (const h in n)
      n[h].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: s,
    setActive: o,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      n = Bs();
    }
  };
}
function fg(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Rc(t, e) : !1;
}
function Rt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Bs() {
  return {
    animate: Rt(!0),
    whileInView: Rt(),
    whileHover: Rt(),
    whileTap: Rt(),
    whileDrag: Rt(),
    whileFocus: Rt(),
    exit: Rt()
  };
}
class xt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class mg extends xt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = hg(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    xr(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let pg = 0;
class gg extends xt {
  constructor() {
    super(...arguments), this.id = pg++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const yg = {
  animation: {
    Feature: mg
  },
  exit: {
    Feature: gg
  }
};
function En(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Bn(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const vg = (e) => (t) => oa(t) && e(t, Bn(t));
function yn(e, t, n, r) {
  return En(e, t, vg(n), r);
}
const Ac = 1e-4, bg = 1 - Ac, xg = 1 + Ac, Ec = 0.01, wg = 0 - Ec, Ng = 0 + Ec;
function Ce(e) {
  return e.max - e.min;
}
function Pg(e, t, n) {
  return Math.abs(e - t) <= n;
}
function $s(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ae(t.min, t.max, e.origin), e.scale = Ce(n) / Ce(t), e.translate = ae(n.min, n.max, e.origin) - e.originPoint, (e.scale >= bg && e.scale <= xg || isNaN(e.scale)) && (e.scale = 1), (e.translate >= wg && e.translate <= Ng || isNaN(e.translate)) && (e.translate = 0);
}
function vn(e, t, n, r) {
  $s(e.x, t.x, n.x, r ? r.originX : void 0), $s(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Us(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Ce(t);
}
function Tg(e, t, n) {
  Us(e.x, t.x, n.x), Us(e.y, t.y, n.y);
}
function zs(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Ce(t);
}
function bn(e, t, n) {
  zs(e.x, t.x, n.x), zs(e.y, t.y, n.y);
}
function Fe(e) {
  return [e("x"), e("y")];
}
const Dc = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Hs = (e, t) => Math.abs(e - t);
function Cg(e, t) {
  const n = Hs(e.x, t.x), r = Hs(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class kc {
  constructor(t, n, { transformPagePoint: r, contextWindow: i = window, dragSnapToOrigin: a = !1, distanceThreshold: s = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const m = Ur(this.lastMoveEventInfo, this.history), g = this.startEvent !== null, v = Cg(m.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!g && !v)
        return;
      const { point: N } = m, { timestamp: P } = ye;
      this.history.push({ ...N, timestamp: P });
      const { onStart: T, onMove: w } = this.handlers;
      g || (T && T(this.lastMoveEvent, m), this.startEvent = this.lastMoveEvent), w && w(this.lastMoveEvent, m);
    }, this.handlePointerMove = (m, g) => {
      this.lastMoveEvent = m, this.lastMoveEventInfo = $r(g, this.transformPagePoint), ie.update(this.updatePoint, !0);
    }, this.handlePointerUp = (m, g) => {
      this.end();
      const { onEnd: v, onSessionEnd: N, resumeAnimation: P } = this.handlers;
      if (this.dragSnapToOrigin && P && P(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const T = Ur(m.type === "pointercancel" ? this.lastMoveEventInfo : $r(g, this.transformPagePoint), this.history);
      this.startEvent && v && v(m, T), N && N(m, T);
    }, !oa(t))
      return;
    this.dragSnapToOrigin = a, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = s, this.contextWindow = i || window;
    const o = Bn(t), c = $r(o, this.transformPagePoint), { point: d } = c, { timestamp: u } = ye;
    this.history = [{ ...d, timestamp: u }];
    const { onSessionStart: h } = n;
    h && h(t, Ur(c, this.history)), this.removeListeners = On(yn(this.contextWindow, "pointermove", this.handlePointerMove), yn(this.contextWindow, "pointerup", this.handlePointerUp), yn(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), gt(this.updatePoint);
  }
}
function $r(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ws(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ur({ point: e }, t) {
  return {
    point: e,
    delta: Ws(e, Lc(t)),
    offset: Ws(e, Sg(t)),
    velocity: Rg(t, 0.1)
  };
}
function Sg(e) {
  return e[0];
}
function Lc(e) {
  return e[e.length - 1];
}
function Rg(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = Lc(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ Ye(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const a = /* @__PURE__ */ Ie(i.timestamp - r.timestamp);
  if (a === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (i.x - r.x) / a,
    y: (i.y - r.y) / a
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Mg(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ae(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ae(n, e, r.max) : Math.min(e, n)), e;
}
function Ks(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Ag(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: Ks(e.x, n, i),
    y: Ks(e.y, t, r)
  };
}
function Gs(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Eg(e, t) {
  return {
    x: Gs(e.x, t.x),
    y: Gs(e.y, t.y)
  };
}
function Dg(e, t) {
  let n = 0.5;
  const r = Ce(e), i = Ce(t);
  return i > r ? n = /* @__PURE__ */ Cn(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ Cn(e.min, e.max - i, t.min)), at(0, 1, n);
}
function kg(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const xi = 0.35;
function Lg(e = xi) {
  return e === !1 ? e = 0 : e === !0 && (e = xi), {
    x: Xs(e, "left", "right"),
    y: Xs(e, "top", "bottom")
  };
}
function Xs(e, t, n) {
  return {
    min: qs(e, t),
    max: qs(e, n)
  };
}
function qs(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Vg = /* @__PURE__ */ new WeakMap();
class jg {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ue(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const a = (h) => {
      const { dragSnapToOrigin: m } = this.getProps();
      m ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Bn(h).point);
    }, s = (h, m) => {
      const { drag: g, dragPropagation: v, onDragStart: N } = this.getProps();
      if (g && !v && (this.openDragLock && this.openDragLock(), this.openDragLock = Kp(g), !this.openDragLock))
        return;
      this.latestPointerEvent = h, this.latestPanInfo = m, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Fe((T) => {
        let w = this.getAxisMotionValue(T).get() || 0;
        if (Je.test(w)) {
          const { projection: C } = this.visualElement;
          if (C && C.layout) {
            const k = C.layout.layoutBox[T];
            k && (w = Ce(k) * (parseFloat(w) / 100));
          }
        }
        this.originPoint[T] = w;
      }), N && ie.postRender(() => N(h, m)), vi(this.visualElement, "transform");
      const { animationState: P } = this.visualElement;
      P && P.setActive("whileDrag", !0);
    }, o = (h, m) => {
      this.latestPointerEvent = h, this.latestPanInfo = m;
      const { dragPropagation: g, dragDirectionLock: v, onDirectionLock: N, onDrag: P } = this.getProps();
      if (!g && !this.openDragLock)
        return;
      const { offset: T } = m;
      if (v && this.currentDirection === null) {
        this.currentDirection = Fg(T), this.currentDirection !== null && N && N(this.currentDirection);
        return;
      }
      this.updateAxis("x", m.point, T), this.updateAxis("y", m.point, T), this.visualElement.render(), P && P(h, m);
    }, c = (h, m) => {
      this.latestPointerEvent = h, this.latestPanInfo = m, this.stop(h, m), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, d = () => Fe((h) => this.getAnimationState(h) === "paused" && this.getAxisMotionValue(h).animation?.play()), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new kc(t, {
      onSessionStart: a,
      onStart: s,
      onMove: o,
      onSessionEnd: c,
      resumeAnimation: d
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: r,
      contextWindow: Dc(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const r = t || this.latestPointerEvent, i = n || this.latestPanInfo, a = this.isDragging;
    if (this.cancel(), !a || !i || !r)
      return;
    const { velocity: s } = i;
    this.startAnimation(s);
    const { onDragEnd: o } = this.getProps();
    o && ie.postRender(() => o(r, i));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !er(t, i, this.currentDirection))
      return;
    const a = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (s = Mg(s, this.constraints[t], this.elastic[t])), a.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
    t && $t(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Ag(r.layoutBox, t) : this.constraints = !1, this.elastic = Lg(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Fe((a) => {
      this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = kg(r.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !$t(t))
      return !1;
    const r = t.current, { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const a = O0(r, i.root, this.visualElement.getTransformPagePoint());
    let s = Eg(i.layout.layoutBox, a);
    if (n) {
      const o = n(V0(s));
      this.hasMutatedConstraints = !!o, o && (s = gc(o));
    }
    return s;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: a, dragSnapToOrigin: s, onDragTransitionEnd: o } = this.getProps(), c = this.constraints || {}, d = Fe((u) => {
      if (!er(u, n, this.currentDirection))
        return;
      let h = c && c[u] || {};
      s && (h = { min: 0, max: 0 });
      const m = i ? 200 : 1e6, g = i ? 40 : 1e7, v = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: m,
        bounceDamping: g,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...a,
        ...h
      };
      return this.startAxisValueAnimation(u, v);
    });
    return Promise.all(d).then(o);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return vi(this.visualElement, t), r.start(ga(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    Fe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Fe((t) => this.getAxisMotionValue(t).animation?.pause());
  }
  getAnimationState(t) {
    return this.getAxisMotionValue(t).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Fe((n) => {
      const { drag: r } = this.getProps();
      if (!er(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, a = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: o } = i.layout.layoutBox[n];
        a.set(t[n] - ae(s, o, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!$t(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Fe((s) => {
      const o = this.getAxisMotionValue(s);
      if (o && this.constraints !== !1) {
        const c = o.get();
        i[s] = Dg({ min: c, max: c }, this.constraints[s]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Fe((s) => {
      if (!er(s, t, null))
        return;
      const o = this.getAxisMotionValue(s), { min: c, max: d } = this.constraints[s];
      o.set(ae(c, d, i[s]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Vg.set(this.visualElement, this);
    const t = this.visualElement.current, n = yn(t, "pointerdown", (c) => {
      const { drag: d, dragListener: u = !0 } = this.getProps();
      d && u && this.start(c);
    }), r = () => {
      const { dragConstraints: c } = this.getProps();
      $t(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, a = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), ie.read(r);
    const s = En(window, "resize", () => this.scalePositionWithinConstraints()), o = i.addEventListener("didUpdate", (({ delta: c, hasLayoutChanged: d }) => {
      this.isDragging && d && (Fe((u) => {
        const h = this.getAxisMotionValue(u);
        h && (this.originPoint[u] += c[u].translate, h.set(h.get() + c[u].translate));
      }), this.visualElement.render());
    }));
    return () => {
      s(), n(), a(), o && o();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: a = !1, dragElastic: s = xi, dragMomentum: o = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: a,
      dragElastic: s,
      dragMomentum: o
    };
  }
}
function er(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Fg(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Og extends xt {
  constructor(t) {
    super(t), this.removeGroupControls = Be, this.removeListeners = Be, this.controls = new jg(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Be;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ys = (e) => (t, n) => {
  e && ie.postRender(() => e(t, n));
};
class _g extends xt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Be;
  }
  onPointerDown(t) {
    this.session = new kc(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Dc(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: Ys(t),
      onStart: Ys(n),
      onMove: r,
      onEnd: (a, s) => {
        delete this.session, i && ie.postRender(() => i(a, s));
      }
    };
  }
  mount() {
    this.removePointerDownListener = yn(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const or = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Js(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ln = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (I.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Js(e, t.target.x), r = Js(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, Ig = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = yt.parse(e);
    if (i.length > 5)
      return r;
    const a = yt.createTransformer(e), s = typeof i[0] != "number" ? 1 : 0, o = n.x.scale * t.x, c = n.y.scale * t.y;
    i[0 + s] /= o, i[1 + s] /= c;
    const d = ae(o, c, 0.5);
    return typeof i[2 + s] == "number" && (i[2 + s] /= d), typeof i[3 + s] == "number" && (i[3 + s] /= d), a(i);
  }
};
let zr = !1;
class Bg extends Ni {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: a } = t;
    l0($g), a && (n.group && n.group.add(a), r && r.register && i && r.register(a), zr && a.root.didUpdate(), a.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), a.setOptions({
      ...a.options,
      onExitComplete: () => this.safeToRemove()
    })), or.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: a } = this.props, { projection: s } = r;
    return s && (s.isPresent = a, zr = !0, i || t.layoutDependency !== n || n === void 0 || t.isPresent !== a ? s.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? s.promote() : s.relegate() || ie.postRender(() => {
      const o = s.getStack();
      (!o || !o.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), sa.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
    zr = !0, i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Vc(e) {
  const [t, n] = t0(), r = B(hl);
  return l(Bg, { ...e, layoutGroup: r, switchLayoutGroup: B(mc), isPresent: t, safeToRemove: n });
}
const $g = {
  borderRadius: {
    ...ln,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ln,
  borderTopRightRadius: ln,
  borderBottomLeftRadius: ln,
  borderBottomRightRadius: ln,
  boxShadow: Ig
};
function Ug(e, t, n) {
  const r = Ne(e) ? e : Xt(e);
  return r.start(ga("", r, t, n)), r.animation;
}
const zg = (e, t) => e.depth - t.depth;
class Hg {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    $i(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Ui(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(zg), this.isDirty = !1, this.children.forEach(t);
  }
}
function Wg(e, t) {
  const n = Re.now(), r = ({ timestamp: i }) => {
    const a = i - n;
    a >= t && (gt(r), e(a - t));
  };
  return ie.setup(r, !0), () => gt(r);
}
const jc = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Kg = jc.length, Zs = (e) => typeof e == "string" ? parseFloat(e) : e, Qs = (e) => typeof e == "number" || I.test(e);
function Gg(e, t, n, r, i, a) {
  i ? (e.opacity = ae(0, n.opacity ?? 1, Xg(r)), e.opacityExit = ae(t.opacity ?? 1, 0, qg(r))) : a && (e.opacity = ae(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < Kg; s++) {
    const o = `border${jc[s]}Radius`;
    let c = eo(t, o), d = eo(n, o);
    if (c === void 0 && d === void 0)
      continue;
    c || (c = 0), d || (d = 0), c === 0 || d === 0 || Qs(c) === Qs(d) ? (e[o] = Math.max(ae(Zs(c), Zs(d), r), 0), (Je.test(d) || Je.test(c)) && (e[o] += "%")) : e[o] = d;
  }
  (t.rotate || n.rotate) && (e.rotate = ae(t.rotate || 0, n.rotate || 0, r));
}
function eo(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Xg = /* @__PURE__ */ Fc(0, 0.5, Pl), qg = /* @__PURE__ */ Fc(0.5, 0.95, Be);
function Fc(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Cn(e, t, r));
}
function to(e, t) {
  e.min = t.min, e.max = t.max;
}
function je(e, t) {
  to(e.x, t.x), to(e.y, t.y);
}
function no(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function ro(e, t, n, r, i) {
  return e -= t, e = fr(e, 1 / n, r), i !== void 0 && (e = fr(e, 1 / i, r)), e;
}
function Yg(e, t = 0, n = 1, r = 0.5, i, a = e, s = e) {
  if (Je.test(t) && (t = parseFloat(t), t = ae(s.min, s.max, t / 100) - s.min), typeof t != "number")
    return;
  let o = ae(a.min, a.max, r);
  e === a && (o -= t), e.min = ro(e.min, t, n, o, i), e.max = ro(e.max, t, n, o, i);
}
function io(e, t, [n, r, i], a, s) {
  Yg(e, t[n], t[r], t[i], t.scale, a, s);
}
const Jg = ["x", "scaleX", "originX"], Zg = ["y", "scaleY", "originY"];
function ao(e, t, n, r) {
  io(e.x, t, Jg, n ? n.x : void 0, r ? r.x : void 0), io(e.y, t, Zg, n ? n.y : void 0, r ? r.y : void 0);
}
function so(e) {
  return e.translate === 0 && e.scale === 1;
}
function Oc(e) {
  return so(e.x) && so(e.y);
}
function oo(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Qg(e, t) {
  return oo(e.x, t.x) && oo(e.y, t.y);
}
function lo(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function _c(e, t) {
  return lo(e.x, t.x) && lo(e.y, t.y);
}
function co(e) {
  return Ce(e.x) / Ce(e.y);
}
function uo(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class ey {
  constructor() {
    this.members = [];
  }
  add(t) {
    $i(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Ui(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const a = this.members[i];
      if (a.isPresent !== !1) {
        r = a;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ty(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, a = e.y.translate / t.y, s = n?.z || 0;
  if ((i || a || s) && (r = `translate3d(${i}px, ${a}px, ${s}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: d, rotate: u, rotateX: h, rotateY: m, skewX: g, skewY: v } = n;
    d && (r = `perspective(${d}px) ${r}`), u && (r += `rotate(${u}deg) `), h && (r += `rotateX(${h}deg) `), m && (r += `rotateY(${m}deg) `), g && (r += `skewX(${g}deg) `), v && (r += `skewY(${v}deg) `);
  }
  const o = e.x.scale * t.x, c = e.y.scale * t.y;
  return (o !== 1 || c !== 1) && (r += `scale(${o}, ${c})`), r || "none";
}
const Hr = ["", "X", "Y", "Z"], ny = 1e3;
let ry = 0;
function Wr(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ic(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Tc(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: a } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ie, !(i || a));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Ic(r);
}
function Bc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(s = {}, o = t?.()) {
      this.id = ry++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(sy), this.nodes.forEach(dy), this.nodes.forEach(uy), this.nodes.forEach(oy);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = o ? o.root || o : this, this.path = o ? [...o.path, o] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Hg());
    }
    addEventListener(s, o) {
      return this.eventHandlers.has(s) || this.eventHandlers.set(s, new Wi()), this.eventHandlers.get(s).add(o);
    }
    notifyListeners(s, ...o) {
      const c = this.eventHandlers.get(s);
      c && c.notify(...o);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    /**
     * Lifecycles
     */
    mount(s) {
      if (this.instance)
        return;
      this.isSVG = tc(s) && !Zp(s), this.instance = s;
      const { layoutId: o, layout: c, visualElement: d } = this.options;
      if (d && !d.current && d.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (c || o) && (this.isLayoutDirty = !0), e) {
        let u, h = 0;
        const m = () => this.root.updateBlockedByResize = !1;
        ie.read(() => {
          h = window.innerWidth;
        }), e(s, () => {
          const g = window.innerWidth;
          g !== h && (h = g, this.root.updateBlockedByResize = !0, u && u(), u = Wg(m, 250), or.hasAnimatedSinceResize && (or.hasAnimatedSinceResize = !1, this.nodes.forEach(mo)));
        });
      }
      o && this.root.registerSharedNode(o, this), this.options.animate !== !1 && d && (o || c) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: h, hasRelativeLayoutChanged: m, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || d.getDefaultTransition() || gy, { onLayoutAnimationStart: N, onLayoutAnimationComplete: P } = d.getProps(), T = !this.targetLayout || !_c(this.targetLayout, g), w = !h && m;
        if (this.options.layoutRoot || this.resumeFrom || w || h && (T || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const C = {
            ...ia(v, "layout"),
            onPlay: N,
            onComplete: P
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0, C.type = !1), this.startAnimation(C), this.setAnimationOrigin(u, w);
        } else
          h || mo(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), gt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(hy), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ic(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const h = this.path[u];
        h.shouldResetTransform = !0, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(!1);
      }
      const { layoutId: o, layout: c } = this.options;
      if (o === void 0 && !c)
        return;
      const d = this.getTransformTemplate();
      this.prevTransformTemplateValue = d ? d(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ho);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(fo);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(cy), this.nodes.forEach(iy), this.nodes.forEach(ay)) : this.nodes.forEach(fo), this.clearAllSnapshots();
      const o = Re.now();
      ye.delta = at(0, 1e3 / 60, o - ye.timestamp), ye.timestamp = o, ye.isProcessing = !0, Lr.update.process(ye), Lr.preRender.process(ye), Lr.render.process(ye), ye.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, sa.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ly), this.sharedNodes.forEach(fy);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ie.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ie.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Ce(this.snapshot.measuredBox.x) && !Ce(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const s = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ue(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: o } = this.options;
      o && o.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
    }
    updateScroll(s = "measure") {
      let o = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (o = !1), o && this.instance) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, o = this.projectionDelta && !Oc(this.projectionDelta), c = this.getTransformTemplate(), d = c ? c(this.latestValues, "") : void 0, u = d !== this.prevTransformTemplateValue;
      s && this.instance && (o || Mt(this.latestValues) || u) && (i(this.instance, d), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(s = !0) {
      const o = this.measurePageBox();
      let c = this.removeElementScroll(o);
      return s && (c = this.removeTransform(c)), yy(c), {
        animationId: this.root.animationId,
        measuredBox: o,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s)
        return ue();
      const o = s.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(vy))) {
        const { scroll: d } = this.root;
        d && (Ut(o.x, d.offset.x), Ut(o.y, d.offset.y));
      }
      return o;
    }
    removeElementScroll(s) {
      const o = ue();
      if (je(o, s), this.scroll?.wasRoot)
        return o;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c], { scroll: u, options: h } = d;
        d !== this.root && u && h.layoutScroll && (u.wasRoot && je(o, s), Ut(o.x, u.offset.x), Ut(o.y, u.offset.y));
      }
      return o;
    }
    applyTransform(s, o = !1) {
      const c = ue();
      je(c, s);
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        !o && u.options.layoutScroll && u.scroll && u !== u.root && zt(c, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Mt(u.latestValues) && zt(c, u.latestValues);
      }
      return Mt(this.latestValues) && zt(c, this.latestValues), c;
    }
    removeTransform(s) {
      const o = ue();
      je(o, s);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        if (!d.instance || !Mt(d.latestValues))
          continue;
        mi(d.latestValues) && d.updateSnapshot();
        const u = ue(), h = d.measurePageBox();
        je(u, h), ao(o, d.latestValues, d.snapshot ? d.snapshot.layoutBox : void 0, u);
      }
      return Mt(this.latestValues) && ao(o, this.latestValues), o;
    }
    setTargetDelta(s) {
      this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ye.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      const o = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = o.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = o.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== o;
      if (!(s || c && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: h } = this.options;
      if (!(!this.layout || !(u || h))) {
        if (this.resolvedRelativeTargetAt = ye.timestamp, !this.targetDelta && !this.relativeTarget) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ue(), this.relativeTargetOrigin = ue(), bn(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), je(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ue(), this.targetWithTransforms = ue()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Tg(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : je(this.target, this.layout.layoutBox), vc(this.target, this.targetDelta)) : je(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const m = this.getClosestProjectingParent();
          m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ue(), this.relativeTargetOrigin = ue(), bn(this.relativeTargetOrigin, this.target, m.target), je(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || mi(this.parent.latestValues) || yc(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const s = this.getLead(), o = !!this.resumingFrom || this !== s;
      let c = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (c = !1), o && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === ye.timestamp && (c = !1), c)
        return;
      const { layout: d, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || u))
        return;
      je(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, m = this.treeScale.y;
      F0(this.layoutCorrected, this.treeScale, this.path, o), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = ue());
      const { target: g } = s;
      if (!g) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (no(this.prevProjectionDelta.x, this.projectionDelta.x), no(this.prevProjectionDelta.y, this.projectionDelta.y)), vn(this.projectionDelta, this.layoutCorrected, g, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== m || !uo(this.projectionDelta.x, this.prevProjectionDelta.x) || !uo(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if (this.options.visualElement?.scheduleRender(), s) {
        const o = this.getStack();
        o && o.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Ht(), this.projectionDelta = Ht(), this.projectionDeltaWithTransform = Ht();
    }
    setAnimationOrigin(s, o = !1) {
      const c = this.snapshot, d = c ? c.latestValues : {}, u = { ...this.latestValues }, h = Ht();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !o;
      const m = ue(), g = c ? c.source : void 0, v = this.layout ? this.layout.source : void 0, N = g !== v, P = this.getStack(), T = !P || P.members.length <= 1, w = !!(N && !T && this.options.crossfade === !0 && !this.path.some(py));
      this.animationProgress = 0;
      let C;
      this.mixTargetDelta = (k) => {
        const A = k / 1e3;
        po(h.x, s.x, A), po(h.y, s.y, A), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (bn(m, this.layout.layoutBox, this.relativeParent.layout.layoutBox), my(this.relativeTarget, this.relativeTargetOrigin, m, A), C && Qg(this.relativeTarget, C) && (this.isProjectionDirty = !1), C || (C = ue()), je(C, this.relativeTarget)), N && (this.animationValues = u, Gg(u, d, this.latestValues, A, w, T)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = A;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (gt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ie.update(() => {
        or.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Xt(0)), this.currentAnimation = Ug(this.motionValue, [0, 1e3], {
          ...s,
          velocity: 0,
          isSync: !0,
          onUpdate: (o) => {
            this.mixTargetDelta(o), s.onUpdate && s.onUpdate(o);
          },
          onStop: () => {
          },
          onComplete: () => {
            s.onComplete && s.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const s = this.getStack();
      s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(ny), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let { targetWithTransforms: o, target: c, layout: d, latestValues: u } = s;
      if (!(!o || !c || !d)) {
        if (this !== s && this.layout && d && $c(this.options.animationType, this.layout.layoutBox, d.layoutBox)) {
          c = this.target || ue();
          const h = Ce(this.layout.layoutBox.x);
          c.x.min = s.target.x.min, c.x.max = c.x.min + h;
          const m = Ce(this.layout.layoutBox.y);
          c.y.min = s.target.y.min, c.y.max = c.y.min + m;
        }
        je(o, c), zt(o, u), vn(this.projectionDeltaWithTransform, this.layoutCorrected, o, u);
      }
    }
    registerSharedNode(s, o) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new ey()), this.sharedNodes.get(s).add(o);
      const d = o.options.initialPromotionConfig;
      o.promote({
        transition: d ? d.transition : void 0,
        preserveFollowOpacity: d && d.shouldPreserveFollowOpacity ? d.shouldPreserveFollowOpacity(o) : void 0
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      const { layoutId: s } = this.options;
      return s ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: s } = this.options;
      return s ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s)
        return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: o, preserveFollowOpacity: c } = {}) {
      const d = this.getStack();
      d && d.promote(this, c), s && (this.projectionDelta = void 0, this.needsReset = !0), o && this.setOptions({ transition: o });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s)
        return;
      let o = !1;
      const { latestValues: c } = s;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (o = !0), !o)
        return;
      const d = {};
      c.z && Wr("z", s, d, this.animationValues);
      for (let u = 0; u < Hr.length; u++)
        Wr(`rotate${Hr[u]}`, s, d, this.animationValues), Wr(`skew${Hr[u]}`, s, d, this.animationValues);
      s.render();
      for (const u in d)
        s.setStaticValue(u, d[u]), this.animationValues && (this.animationValues[u] = d[u]);
      s.scheduleRender();
    }
    applyProjectionStyles(s, o) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const c = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, s.visibility = "", s.opacity = "", s.pointerEvents = sr(o?.pointerEvents) || "", s.transform = c ? c(this.latestValues, "") : "none";
        return;
      }
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        this.options.layoutId && (s.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, s.pointerEvents = sr(o?.pointerEvents) || ""), this.hasProjected && !Mt(this.latestValues) && (s.transform = c ? c({}, "") : "none", this.hasProjected = !1);
        return;
      }
      s.visibility = "";
      const u = d.animationValues || d.latestValues;
      this.applyTransformsToTarget();
      let h = ty(this.projectionDeltaWithTransform, this.treeScale, u);
      c && (h = c(u, h)), s.transform = h;
      const { x: m, y: g } = this.projectionDelta;
      s.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`, d.animationValues ? s.opacity = d === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : s.opacity = d === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const v in An) {
        if (u[v] === void 0)
          continue;
        const { correct: N, applyTo: P, isCSSVariable: T } = An[v], w = h === "none" ? u[v] : N(u[v], d);
        if (P) {
          const C = P.length;
          for (let k = 0; k < C; k++)
            s[P[k]] = w;
        } else
          T ? this.options.visualElement.renderState.vars[v] = w : s[v] = w;
      }
      this.options.layoutId && (s.pointerEvents = d === this ? sr(o?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((s) => s.currentAnimation?.stop()), this.root.nodes.forEach(ho), this.root.sharedNodes.clear();
    }
  };
}
function iy(e) {
  e.updateLayout();
}
function ay(e) {
  const t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
    i === "size" ? Fe((u) => {
      const h = a ? t.measuredBox[u] : t.layoutBox[u], m = Ce(h);
      h.min = n[u].min, h.max = h.min + m;
    }) : $c(i, t.layoutBox, n) && Fe((u) => {
      const h = a ? t.measuredBox[u] : t.layoutBox[u], m = Ce(n[u]);
      h.max = h.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + m);
    });
    const s = Ht();
    vn(s, n, t.layoutBox);
    const o = Ht();
    a ? vn(o, e.applyTransform(r, !0), t.measuredBox) : vn(o, n, t.layoutBox);
    const c = !Oc(s);
    let d = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: h, layout: m } = u;
        if (h && m) {
          const g = ue();
          bn(g, t.layoutBox, h.layoutBox);
          const v = ue();
          bn(v, n, m.layoutBox), _c(g, v) || (d = !0), u.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = g, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: t,
      delta: o,
      layoutDelta: s,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function sy(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function oy(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function ly(e) {
  e.clearSnapshot();
}
function ho(e) {
  e.clearMeasurements();
}
function fo(e) {
  e.isLayoutDirty = !1;
}
function cy(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function mo(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function dy(e) {
  e.resolveTargetDelta();
}
function uy(e) {
  e.calcProjection();
}
function hy(e) {
  e.resetSkewAndRotation();
}
function fy(e) {
  e.removeLeadSnapshot();
}
function po(e, t, n) {
  e.translate = ae(t.translate, 0, n), e.scale = ae(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function go(e, t, n, r) {
  e.min = ae(t.min, n.min, r), e.max = ae(t.max, n.max, r);
}
function my(e, t, n, r) {
  go(e.x, t.x, n.x, r), go(e.y, t.y, n.y, r);
}
function py(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const gy = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, yo = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), vo = yo("applewebkit/") && !yo("chrome/") ? Math.round : Be;
function bo(e) {
  e.min = vo(e.min), e.max = vo(e.max);
}
function yy(e) {
  bo(e.x), bo(e.y);
}
function $c(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Pg(co(t), co(n), 0.2);
}
function vy(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const by = Bc({
  attachResizeListener: (e, t) => En(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Kr = {
  current: void 0
}, Uc = Bc({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Kr.current) {
      const e = new by({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Kr.current = e;
    }
    return Kr.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), xy = {
  pan: {
    Feature: _g
  },
  drag: {
    Feature: Og,
    ProjectionNode: Uc,
    MeasureLayout: Vc
  }
};
function xo(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, a = r[i];
  a && ie.postRender(() => a(t, Bn(t)));
}
class wy extends xt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Gp(t, (n, r) => (xo(this.node, r, "Start"), (i) => xo(this.node, i, "End"))));
  }
  unmount() {
  }
}
class Ny extends xt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = On(En(this.node.current, "focus", () => this.onFocus()), En(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function wo(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), a = r[i];
  a && ie.postRender(() => a(t, Bn(t)));
}
class Py extends xt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = Jp(t, (n, r) => (wo(this.node, r, "Start"), (i, { success: a }) => wo(this.node, i, a ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const wi = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Ty = (e) => {
  const t = wi.get(e.target);
  t && t(e);
}, Cy = (e) => {
  e.forEach(Ty);
};
function Sy({ root: e, ...t }) {
  const n = e || document;
  Gr.has(n) || Gr.set(n, {});
  const r = Gr.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Cy, { root: e, ...t })), r[i];
}
function Ry(e, t, n) {
  const r = Sy(t);
  return wi.set(e, n), r.observe(e), () => {
    wi.delete(e), r.unobserve(e);
  };
}
const My = {
  some: 0,
  all: 1
};
class Ay extends xt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: a } = t, s = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : My[i]
    }, o = (c) => {
      const { isIntersecting: d } = c;
      if (this.isInView === d || (this.isInView = d, a && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: u, onViewportLeave: h } = this.node.getProps(), m = d ? u : h;
      m && m(c);
    };
    return Ry(this.node.current, s, o);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Ey(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Ey({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Dy = {
  inView: {
    Feature: Ay
  },
  tap: {
    Feature: Py
  },
  focus: {
    Feature: Ny
  },
  hover: {
    Feature: wy
  }
}, ky = {
  layout: {
    ProjectionNode: Uc,
    MeasureLayout: Vc
  }
}, Ly = {
  ...yg,
  ...Dy,
  ...xy,
  ...ky
}, ee = /* @__PURE__ */ L0(Ly, K0);
const SHARE_RIDE_STORAGE_KEY = "covoiturage.auth";
const SHARE_RIDE_API_BASE = `${import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8001"}`.replace(/\/$/, "") + "/api";
const SHARE_RIDE_REALTIME_STATE = {
  echo: null,
  token: null,
  connectPromise: null
};
function shareRideGetSession() {
  try {
    const e = localStorage.getItem(SHARE_RIDE_STORAGE_KEY);
    return e ? JSON.parse(e) : null;
  } catch {
    return null;
  }
}
function shareRideSaveSession(e) {
  const t = {
    token: e.token,
    user: e.user
  };
  localStorage.setItem(SHARE_RIDE_STORAGE_KEY, JSON.stringify(t));
}
function shareRideClearSession() {
  localStorage.removeItem(SHARE_RIDE_STORAGE_KEY), shareRideDisconnectRealtime();
}
function shareRideRealtimeSocketId() {
  const e = SHARE_RIDE_REALTIME_STATE.echo?.connector?.pusher?.connection;
  return e?.socket_id ?? null;
}
function shareRideDisconnectRealtime() {
  try {
    SHARE_RIDE_REALTIME_STATE.echo?.disconnect?.();
  } catch {
  }
  SHARE_RIDE_REALTIME_STATE.echo = null, SHARE_RIDE_REALTIME_STATE.token = null, SHARE_RIDE_REALTIME_STATE.connectPromise = null;
}
async function shareRideEnsureRealtime(e) {
  if (!e)
    return null;
  if (SHARE_RIDE_REALTIME_STATE.echo && SHARE_RIDE_REALTIME_STATE.token === e)
    return SHARE_RIDE_REALTIME_STATE.echo;
  if (SHARE_RIDE_REALTIME_STATE.connectPromise && SHARE_RIDE_REALTIME_STATE.token === e)
    return SHARE_RIDE_REALTIME_STATE.connectPromise;
  SHARE_RIDE_REALTIME_STATE.echo && SHARE_RIDE_REALTIME_STATE.token !== e && shareRideDisconnectRealtime(), SHARE_RIDE_REALTIME_STATE.token = e;
  const t = import.meta.env.VITE_REVERB_APP_KEY;
  if (!t)
    return null;
  SHARE_RIDE_REALTIME_STATE.connectPromise = (async () => {
    try {
      const [n, r] = await Promise.all([
        import("laravel-echo"),
        import("pusher-js")
      ]), i = n.default, a = r.default, s = new URL(SHARE_RIDE_API_BASE), o = import.meta.env.VITE_REVERB_HOST ?? s.hostname, c = Number(import.meta.env.VITE_REVERB_PORT ?? 8080), d = import.meta.env.VITE_REVERB_SCHEME ?? (s.protocol === "https:" ? "https" : "http"), u = import.meta.env.VITE_REVERB_PATH ?? "", h = new i({
        broadcaster: "reverb",
        key: t,
        wsHost: o,
        wsPort: c,
        wssPort: c,
        wsPath: u,
        forceTLS: d === "https",
        enabledTransports: ["ws", "wss"],
        channelAuthorization: {
          endpoint: SHARE_RIDE_API_BASE + "/broadcasting/auth",
          headers: {
            Authorization: `Bearer ${e}`,
            Accept: "application/json"
          }
        },
        disableStats: !0,
        Pusher: a
      });
      return SHARE_RIDE_REALTIME_STATE.echo = h, h;
    } catch {
      return null;
    } finally {
      SHARE_RIDE_REALTIME_STATE.connectPromise = null;
    }
  })();
  return SHARE_RIDE_REALTIME_STATE.connectPromise;
}
async function shareRideApiRequest(e, t = {}) {
  const n = shareRideRealtimeSocketId(), r = {
    method: t.method ?? "GET",
    headers: {
      Accept: "application/json",
      ...!t.formData && t.body ? { "Content-Type": "application/json" } : {},
      ...t.token ? { Authorization: `Bearer ${t.token}` } : {},
      ...n ? { "X-Socket-ID": n } : {}
    },
    ...t.formData ? { body: t.formData } : t.body ? { body: JSON.stringify(t.body) } : {}
  }, i = await fetch(`${SHARE_RIDE_API_BASE}${e}`, r);
  let a = {};
  try {
    a = await i.json();
  } catch {
  }
  if (!i.ok) {
    const s = a.message || (a.errors ? Object.values(a.errors).flat().join(" ") : "Une erreur est survenue.");
    throw new Error(s);
  }
  return a;
}
function Vy() {
  const e = Pe();
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6", children: [
    /* @__PURE__ */ f(
      ee.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ l("div", { className: "bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg", children: /* @__PURE__ */ l(mt, { className: "w-10 h-10 text-purple-600" }) }),
          /* @__PURE__ */ l("h1", { className: "text-4xl font-bold text-white mb-4", children: "ShareRide" }),
          /* @__PURE__ */ l("p", { className: "text-white/90 text-lg", children: "Partagez vos trajets, économisez ensemble" })
        ]
      }
    ),
    /* @__PURE__ */ f(
      ee.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.6, delay: 0.2 },
        className: "w-full max-w-md space-y-4",
        children: [
          /* @__PURE__ */ f(
            "button",
            {
              onClick: () => e("/signup?type=driver"),
              className: "w-full bg-white text-purple-600 py-4 px-6 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-between group",
              children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ l("div", { className: "bg-purple-100 p-2 rounded-lg", children: /* @__PURE__ */ l(mt, { className: "w-6 h-6 text-purple-600" }) }),
                  /* @__PURE__ */ f("div", { className: "text-left", children: [
                    /* @__PURE__ */ l("div", { className: "font-bold", children: "Je suis conducteur" }),
                    /* @__PURE__ */ l("div", { className: "text-sm text-gray-600", children: "Publiez vos trajets" })
                  ] })
                ] }),
                /* @__PURE__ */ l(ss, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
              ]
            }
          ),
          /* @__PURE__ */ f(
            "button",
            {
              onClick: () => e("/signup?type=passenger"),
              className: "w-full bg-white text-blue-600 py-4 px-6 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center justify-between group",
              children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ l("div", { className: "bg-blue-100 p-2 rounded-lg", children: /* @__PURE__ */ l(Gt, { className: "w-6 h-6 text-blue-600" }) }),
                  /* @__PURE__ */ f("div", { className: "text-left", children: [
                    /* @__PURE__ */ l("div", { className: "font-bold", children: "Je suis passager" }),
                    /* @__PURE__ */ l("div", { className: "text-sm text-gray-600", children: "Trouvez un trajet" })
                  ] })
                ] }),
                /* @__PURE__ */ l(ss, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
              ]
            }
          ),
          /* @__PURE__ */ l("div", { className: "text-center pt-6", children: /* @__PURE__ */ l(
            "button",
            {
              onClick: () => e("/login"),
              className: "text-white font-semibold hover:underline",
              children: "J'ai déjà un compte"
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ l(
      ee.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, delay: 0.4 },
        className: "mt-12 text-white/80 text-sm text-center",
        children: /* @__PURE__ */ l("p", { children: "? Économique • Écologique • Convivial" })
      }
    )
  ] });
}
function jy() {
  const e = Pe(), [t, n] = Q(!1), [r, i] = Q(""), [a, s] = Q(""), [o, c] = Q("passenger"), [d, u] = Q(!1), [h, m] = Q(""), [b, k] = Q(""), [p] = qh(), [x, y] = Q(!1), g = async (v) => {
    v.preventDefault(), m(""), k(""), u(!0);
    try {
      const N = await shareRideApiRequest("/auth/login", {
        method: "POST",
        body: {
          email: r,
          password: a,
          role: o
        }
      });
      shareRideSaveSession(N), e(N.user?.role === "driver" ? "/driver/dashboard" : "/passenger/dashboard");
    } catch (N) {
      m(N instanceof Error ? N.message : "Connexion impossible.");
    } finally {
      u(!1);
    }
  };
  _e(() => {
    const v = p.get("type"), N = p.get("email"), P = p.get("registered");
    if (v === "driver" || v === "passenger") {
      c(v), y(!0);
    }
    N && i(N), P === "1" && k("Inscription réussie. Connectez-vous pour continuer.");
  }, [p]);
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col", children: [
    /* @__PURE__ */ l("div", { className: "p-6", children: /* @__PURE__ */ f(
      "button",
      {
        onClick: () => e("/"),
        className: "text-white flex items-center gap-2 hover:gap-3 transition-all",
        children: [
          /* @__PURE__ */ l(Ge, { className: "w-5 h-5" }),
          /* @__PURE__ */ l("span", { children: "Retour" })
        ]
      }
    ) }),
    /* @__PURE__ */ l("div", { className: "flex-1 flex items-center justify-center p-6", children: /* @__PURE__ */ f(
      ee.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "w-full max-w-md bg-white rounded-3xl shadow-2xl p-8",
        children: [
          /* @__PURE__ */ l("h2", { className: "text-3xl font-bold text-gray-800 mb-2", children: "Bon retour !" }),
          /* @__PURE__ */ l("p", { className: "text-gray-600 mb-8", children: "Connectez-vous pour continuer" }),
          x ? /* @__PURE__ */ l("div", { className: "mb-6 bg-gray-100 p-3 rounded-xl text-center text-sm font-semibold text-gray-700", children: o === "driver" ? "Mode conducteur sélectionné" : "Mode passager sélectionné" }) : /* @__PURE__ */ f("div", { className: "flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl", children: [
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => c("passenger"),
                className: `flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${o === "passenger" ? "bg-white shadow text-blue-600" : "text-gray-600"}`,
                children: "Passager"
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => c("driver"),
                className: `flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${o === "driver" ? "bg-white shadow text-purple-600" : "text-gray-600"}`,
                children: "Conducteur"
              }
            )
          ] }),
          /* @__PURE__ */ f("form", { onSubmit: g, className: "space-y-4", children: [
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Email" }),
              /* @__PURE__ */ f("div", { className: "relative", children: [
                /* @__PURE__ */ l(Oi, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "email",
                    value: r,
                    onChange: (v) => i(v.target.value),
                    placeholder: "votre@email.com",
                    className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",
                    required: !0
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Mot de passe" }),
              /* @__PURE__ */ f("div", { className: "relative", children: [
                /* @__PURE__ */ l(Fi, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: t ? "text" : "password",
                    value: a,
                    onChange: (v) => s(v.target.value),
                    placeholder: "••••••••",
                    className: "w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",
                    required: !0
                  }
                ),
                /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    onClick: () => n(!t),
                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
                    children: t ? /* @__PURE__ */ l(cl, { className: "w-5 h-5" }) : /* @__PURE__ */ l(dl, { className: "w-5 h-5" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ l("div", { className: "text-right", children: /* @__PURE__ */ l(
              "button",
              {
                type: "button",
                className: "text-sm text-purple-600 hover:underline",
                children: "Mot de passe oublié ?"
              }
            ) }),
            b && /* @__PURE__ */ l("p", { className: "text-sm text-green-600 font-medium", children: b }),
            h && /* @__PURE__ */ l("p", { className: "text-sm text-red-600 font-medium", children: h }),
            /* @__PURE__ */ l(
              "button",
              {
                type: "submit",
                disabled: d,
                className: `w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all ${d ? "opacity-70 cursor-not-allowed" : ""}`,
                children: d ? "Connexion..." : "Se connecter"
              }
            ),
            /* @__PURE__ */ f("div", { className: "text-center pt-4", children: [
              /* @__PURE__ */ l("span", { className: "text-gray-600", children: "Pas encore de compte ? " }),
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  onClick: () => e(`/signup?type=${o}`),
                  className: "text-purple-600 font-semibold hover:underline",
                  children: "S'inscrire"
                }
              )
            ] })
          ] })
        ]
      }
    ) })
  ] });
}
function Fy() {
  const e = Pe(), [t] = qh(), [n, r] = Q(!1), [i, a] = Q("passenger"), [s, o] = Q({
    name: "",
    email: "",
    phone: "",
    password: "",
    vehicleType: "",
    vehiclePlate: ""
  }), [c, d] = Q(!1), [u, h] = Q(""), [w, C] = Q(!1), P = [
    "0142",
    "0146",
    "0150",
    "0151",
    "0152",
    "0153",
    "0154",
    "0156",
    "0157",
    "0159",
    "0161",
    "0162",
    "0166",
    "0167",
    "0169",
    "0190",
    "0191",
    "0196",
    "0197",
    "0145",
    "0155",
    "0158",
    "0160",
    "0163",
    "0164",
    "0165",
    "0168",
    "0194",
    "0195",
    "0198",
    "0199",
    "0120",
    "0121",
    "0122",
    "0123",
    "0124",
    "0128",
    "0129",
    "0140",
    "0141",
    "0143",
    "0144",
    "0147",
    "0148",
    "0149",
    "0192",
    "0193"
  ], T = (g) => (g || "").replace(/\D+/g, "").slice(0, 10), B = (g) => /^\d{10}$/.test(g) && P.includes(g.slice(0, 4));
  _e(() => {
    const g = t.get("type");
    if (g === "driver" || g === "passenger") {
      a(g), C(!0);
    }
  }, [t]);
  const m = async (g) => {
    g.preventDefault(), h(""), d(!0);
    const v = T(s.phone);
    if (!B(v)) {
      h("Numero invalide. Entrez exactement 10 chiffres avec un prefixe mobile beninois autorise."), d(!1);
      return;
    }
    try {
      await shareRideApiRequest("/auth/register", {
        method: "POST",
        body: {
          name: s.name,
          email: s.email,
          phone: v,
          password: s.password,
          role: i,
          vehicle_type: i === "driver" ? s.vehicleType : null,
          vehicle_plate: i === "driver" ? s.vehiclePlate : null
        }
      });
      e(`/login?type=${i}&email=${encodeURIComponent(s.email)}&registered=1`);
    } catch (N) {
      h(N instanceof Error ? N.message : "Inscription impossible.");
    } finally {
      d(!1);
    }
  };
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col", children: [
    /* @__PURE__ */ l("div", { className: "p-6", children: /* @__PURE__ */ f(
      "button",
      {
        onClick: () => e("/"),
        className: "text-white flex items-center gap-2 hover:gap-3 transition-all",
        children: [
          /* @__PURE__ */ l(Ge, { className: "w-5 h-5" }),
          /* @__PURE__ */ l("span", { children: "Retour" })
        ]
      }
    ) }),
    /* @__PURE__ */ l("div", { className: "flex-1 flex items-center justify-center p-6 pb-12", children: /* @__PURE__ */ f(
      ee.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "w-full max-w-md bg-white rounded-3xl shadow-2xl p-8",
        children: [
          /* @__PURE__ */ l("h2", { className: "text-3xl font-bold text-gray-800 mb-2", children: "Créer un compte" }),
          /* @__PURE__ */ l("p", { className: "text-gray-600 mb-6", children: "Rejoignez la communauté ShareRide" }),
          w ? /* @__PURE__ */ l("div", { className: "mb-6 bg-gray-100 p-3 rounded-xl text-center text-sm font-semibold text-gray-700", children: i === "driver" ? "Mode conducteur sélectionné" : "Mode passager sélectionné" }) : /* @__PURE__ */ f("div", { className: "flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl", children: [
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => a("passenger"),
                className: `flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${i === "passenger" ? "bg-white shadow text-blue-600" : "text-gray-600"}`,
                children: "Passager"
              }
            ),
            /* @__PURE__ */ l(
              "button",
              {
                onClick: () => a("driver"),
                className: `flex-1 py-2 px-4 rounded-lg font-semibold transition-all ${i === "driver" ? "bg-white shadow text-purple-600" : "text-gray-600"}`,
                children: "Conducteur"
              }
            )
          ] }),
          /* @__PURE__ */ f("form", { onSubmit: m, className: "space-y-4", children: [
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Nom complet" }),
              /* @__PURE__ */ f("div", { className: "relative", children: [
                /* @__PURE__ */ l(pt, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "text",
                    value: s.name,
                    onChange: (g) => o({ ...s, name: g.target.value }),
                    placeholder: "Jean Dupont",
                    className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",
                    required: !0
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Email" }),
              /* @__PURE__ */ f("div", { className: "relative", children: [
                /* @__PURE__ */ l(Oi, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "email",
                    value: s.email,
                    onChange: (g) => o({ ...s, email: g.target.value }),
                    placeholder: "votre@email.com",
                    className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",
                    required: !0
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Téléphone" }),
              /* @__PURE__ */ f("div", { className: "relative", children: [
                /* @__PURE__ */ l(_i, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "tel",
                    value: s.phone,
                    onChange: (g) => o({ ...s, phone: T(g.target.value) }),
                    placeholder: "01XXXXXXXX",
                    inputMode: "tel",
                    maxLength: 10,
                    pattern: "^\\d{10}$",
                    title: "Entrez exactement 10 chiffres commencant par un prefixe mobile beninois autorise",
                    className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ l("p", { className: "text-[11px] text-gray-500 mt-1", children: "Format: 10 chiffres (sans +229), prefixe mobile beninois." })
            ] }),
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Mot de passe" }),
              /* @__PURE__ */ f("div", { className: "relative", children: [
                /* @__PURE__ */ l(Fi, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: n ? "text" : "password",
                    value: s.password,
                    onChange: (g) => o({ ...s, password: g.target.value }),
                    placeholder: "••••••••",
                    className: "w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",
                    required: !0
                  }
                ),
                /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    onClick: () => r(!n),
                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600",
                    children: n ? /* @__PURE__ */ l(cl, { className: "w-5 h-5" }) : /* @__PURE__ */ l(dl, { className: "w-5 h-5" })
                  }
                )
              ] })
            ] }),
            i === "driver" && /* @__PURE__ */ f(Xr, { children: [
              /* @__PURE__ */ f("div", { children: [
                /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Type de véhicule" }),
                /* @__PURE__ */ f("div", { className: "relative", children: [
                  /* @__PURE__ */ l(mt, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                  /* @__PURE__ */ f(
                    "select",
                    {
                      value: s.vehicleType,
                      onChange: (g) => o({ ...s, vehicleType: g.target.value }),
                      className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",
                      required: !0,
                      children: [
                        /* @__PURE__ */ l("option", { value: "", children: "Sélectionner" }),
                        /* @__PURE__ */ l("option", { value: "moto", children: "Moto" }),
                        /* @__PURE__ */ l("option", { value: "voiture", children: "Voiture" }),
                        /* @__PURE__ */ l("option", { value: "minibus", children: "Minibus" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ f("div", { children: [
                /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Plaque d'immatriculation" }),
                /* @__PURE__ */ f("div", { className: "relative", children: [
                  /* @__PURE__ */ l(mt, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "text",
                      value: s.vehiclePlate,
                      onChange: (g) => o({ ...s, vehiclePlate: g.target.value.toUpperCase() }),
                      placeholder: "RB-1234-AA",
                      pattern: "^(RB[-\\s]?\\d{4}[-\\s]?[A-Za-z]{1,2}|[A-Za-z]{2}[-\\s]?\\d{4}[-\\s]?RB|\\d{4}[-\\s]?RB[-\\s]?\\d{2})$",
                      title: "Formats acceptes: RB-1234-AA, AA-1234-RB ou 1234-RB-01",
                      className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",
                      required: !0
                    }
                  )
                ] })
              ] })
            ] }),
            u && /* @__PURE__ */ l("p", { className: "text-sm text-red-600 font-medium", children: u }),
            /* @__PURE__ */ l(
              "button",
              {
                type: "submit",
                disabled: c,
                className: `w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all mt-6 ${c ? "opacity-70 cursor-not-allowed" : ""}`,
                children: c ? "Inscription..." : "S'inscrire"
              }
            ),
            /* @__PURE__ */ f("div", { className: "text-center pt-4", children: [
              /* @__PURE__ */ l("span", { className: "text-gray-600", children: "Déjà inscrit ? " }),
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  onClick: () => e(`/login?type=${i}`),
                  className: "text-purple-600 font-semibold hover:underline",
                  children: "Se connecter"
                }
              )
            ] })
          ] })
        ]
      }
    ) })
  ] });
}
function Oy() {
  const e = Pe(), [dashboardLoading, setDashboardLoading] = Q(!0), [dashboardError, setDashboardError] = Q(""), [dashboardUser, setDashboardUser] = Q(shareRideGetSession()?.user ?? null), [dashboardNotificationUnreadCount, setDashboardNotificationUnreadCount] = Q(0), [dashboardStats, setDashboardStats] = Q({
    trips_published: 0,
    passengers_transported: 0,
    average_rating: null,
    revenue_month_fcfa: 0
  }), [dashboardUpcomingTrips, setDashboardUpcomingTrips] = Q([]), loadDriverDashboard = async () => {
    const i = shareRideGetSession();
    if (!i?.token) {
      e("/login?type=driver");
      return;
    }
    if (i.user?.role && i.user.role !== "driver") {
      e(i.user.role === "passenger" ? "/passenger/dashboard" : "/");
      return;
    }
    setDashboardLoading(!0), setDashboardError("");
    try {
      const a = await shareRideApiRequest("/driver/home", {
        token: i.token
      }), s = a?.stats ?? {}, o = Array.isArray(a?.upcoming_trips) ? a.upcoming_trips.map((c) => ({
        id: c.id,
        from: c.from ?? "Non defini",
        to: c.to ?? "Non defini",
        date: c.date ?? "Non defini",
        time: c.time ?? "--:--",
        passengers: Number(c.passengers ?? 0),
        available: Number(c.available ?? 0),
        total: Number(c.total ?? 0),
        price: Number(c.price ?? 0),
        status: c.status ?? "upcoming"
      })) : [];
      setDashboardStats({
        trips_published: Number(s.trips_published ?? 0),
        passengers_transported: Number(s.passengers_transported ?? 0),
        average_rating: s.average_rating ?? null,
        revenue_month_fcfa: Number(s.revenue_month_fcfa ?? 0)
      }), setDashboardUpcomingTrips(o), setDashboardNotificationUnreadCount(Number(a?.notifications?.unread_count ?? 0)), i.user && setDashboardUser(i.user);
    } catch (a) {
      const s = a instanceof Error ? a.message : "Impossible de charger votre accueil conducteur.";
      if (s.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=driver");
        return;
      }
      setDashboardError(s);
    } finally {
      setDashboardLoading(!1);
    }
  };
  _e(() => {
    loadDriverDashboard();
  }, [e]);
  const numberFormatter = new Intl.NumberFormat("fr-FR"), t = [
    { label: "Trajets publies", value: numberFormatter.format(dashboardStats.trips_published ?? 0), icon: rt, color: "bg-blue-500" },
    { label: "Passagers transportes", value: numberFormatter.format(dashboardStats.passengers_transported ?? 0), icon: Gt, color: "bg-green-500" },
    { label: "Note moyenne", value: dashboardStats.average_rating != null ? Number(dashboardStats.average_rating).toFixed(1) : "-", icon: We, color: "bg-yellow-500" },
    { label: "Revenus ce mois", value: `${numberFormatter.format(dashboardStats.revenue_month_fcfa ?? 0)} FCFA`, icon: vr, color: "bg-purple-500" }
  ], n = dashboardUpcomingTrips, driverFirstName = dashboardUser?.name ? dashboardUser.name.split(" ")[0] : "Conducteur", driverStatusLabel = dashboardUser?.identity_verification_status === "verified" ? "Conducteur verifie" : "Espace conducteur";
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 pb-8", children: [
      /* @__PURE__ */ f("div", { className: "flex justify-between items-start mb-6", children: [
        /* @__PURE__ */ f("div", { children: [
          /* @__PURE__ */ f("h1", { className: "text-2xl font-bold mb-1", children: [
            "Bonjour, ",
            driverFirstName
          ] }),
          /* @__PURE__ */ l("p", { className: "text-purple-100", children: driverStatusLabel }),
          dashboardLoading && /* @__PURE__ */ l("p", { className: "text-xs text-purple-100 mt-2", children: "Chargement de vos donnees..." }),
          dashboardError && /* @__PURE__ */ l("p", { className: "text-xs text-red-200 mt-2", children: dashboardError })
        ] }),
        /* @__PURE__ */ f("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ f(
            "button",
            {
              onClick: () => e("/notifications"),
              className: "bg-white/20 backdrop-blur p-2 rounded-lg hover:bg-white/30 transition-colors relative",
              children: [
                /* @__PURE__ */ l(ji, { className: "w-5 h-5" }),
                dashboardNotificationUnreadCount > 0 && /* @__PURE__ */ l("span", { className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-red-500 text-white rounded-full text-[10px] leading-[18px] text-center font-bold", children: dashboardNotificationUnreadCount > 9 ? "9+" : dashboardNotificationUnreadCount })
              ]
            }
          ),
          /* @__PURE__ */ l(
            "button",
            {
              onClick: () => e("/chat"),
              className: "bg-white/20 backdrop-blur p-2 rounded-lg hover:bg-white/30 transition-colors",
              children: /* @__PURE__ */ l(Lf, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ l(
            "button",
            {
              onClick: () => e("/profile"),
              className: "bg-white/20 backdrop-blur p-2 rounded-lg hover:bg-white/30 transition-colors",
              children: /* @__PURE__ */ l(pt, { className: "w-5 h-5" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ l("div", { className: "grid grid-cols-2 gap-3", children: t.map((r, i) => /* @__PURE__ */ f(
        ee.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.1 },
          className: "bg-white/10 backdrop-blur rounded-xl p-4",
          children: [
            /* @__PURE__ */ l("div", { className: `${r.color} w-10 h-10 rounded-lg flex items-center justify-center mb-2`, children: /* @__PURE__ */ l(r.icon, { className: "w-5 h-5 text-white" }) }),
            /* @__PURE__ */ l("div", { className: "text-2xl font-bold", children: r.value }),
            /* @__PURE__ */ l("div", { className: "text-sm text-purple-100", children: r.label })
          ]
        },
        r.label
      )) })
    ] }),
    /* @__PURE__ */ l("div", { className: "px-6 -mt-4", children: /* @__PURE__ */ f(
      ee.button,
      {
        whileTap: { scale: 0.98 },
        onClick: () => e("/driver/publish"),
        className: "w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 font-semibold hover:shadow-xl transition-all",
        children: [
          /* @__PURE__ */ l(cs, { className: "w-5 h-5" }),
          "Publier un nouveau trajet"
        ]
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "px-6 mt-6", children: [
      /* @__PURE__ */ f("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ l("h2", { className: "text-xl font-bold text-gray-800", children: "Prochains trajets" }),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => e("/driver/trips"),
            className: "text-purple-600 font-semibold text-sm",
            children: "Voir tout"
          }
        )
      ] }),
      n.length === 0 && !dashboardLoading && /* @__PURE__ */ l("div", { className: "bg-white rounded-xl p-6 text-center text-sm text-gray-500", children: "Aucun trajet a venir pour le moment." }),
      /* @__PURE__ */ l("div", { className: "space-y-3", children: n.map((r) => /* @__PURE__ */ f(
        ee.div,
        {
          whileTap: { scale: 0.98 },
          onClick: () => e(`/driver/trips/${r.id}`),
          className: "bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer",
          children: [
            /* @__PURE__ */ f("div", { className: "flex justify-between items-start mb-3", children: [
              /* @__PURE__ */ f("div", { className: "flex-1", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ l("div", { className: "w-2 h-2 rounded-full bg-green-500" }),
                  /* @__PURE__ */ l("span", { className: "font-semibold text-gray-800", children: r.from })
                ] }),
                /* @__PURE__ */ l("div", { className: "flex items-center gap-2 pl-1 border-l-2 border-dashed border-gray-300 ml-0.5 py-1", children: /* @__PURE__ */ l(rt, { className: "w-4 h-4 text-gray-400" }) }),
                /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ l("div", { className: "w-2 h-2 rounded-full bg-red-500" }),
                  /* @__PURE__ */ l("span", { className: "font-semibold text-gray-800", children: r.to })
                ] })
              ] }),
              /* @__PURE__ */ f("div", { className: "text-right", children: [
                /* @__PURE__ */ f("div", { className: "text-xl font-bold text-purple-600", children: [
                  numberFormatter.format(Number(r.price ?? 0)),
                  " FCFA"
                ] }),
                /* @__PURE__ */ l("div", { className: "text-sm text-gray-500", children: "/personne" })
              ] })
            ] }),
            /* @__PURE__ */ f("div", { className: "flex items-center justify-between pt-3 border-t border-gray-100", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-4 text-sm text-gray-600", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ l(it, { className: "w-4 h-4" }),
                  /* @__PURE__ */ l("span", { children: r.date })
                ] }),
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ l(Fn, { className: "w-4 h-4" }),
                  /* @__PURE__ */ l("span", { children: r.time })
                ] })
              ] }),
              /* @__PURE__ */ f("div", { className: "flex items-center gap-1 text-sm", children: [
                /* @__PURE__ */ l(Gt, { className: "w-4 h-4 text-gray-600" }),
                /* @__PURE__ */ f("span", { className: "font-semibold text-gray-800", children: [
                  r.passengers,
                  "/",
                  r.total || r.passengers + r.available
                ] })
              ] })
            ] })
          ]
        },
        r.id
      )) })
    ] }),
    /* @__PURE__ */ l("div", { className: "px-6 mt-6", children: /* @__PURE__ */ l(
      "div",
      {
        onClick: () => e("/driver/subscription"),
        className: "bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 text-white cursor-pointer hover:shadow-lg transition-all",
        children: /* @__PURE__ */ f("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ l("div", { className: "font-bold mb-1", children: "Abonnement Premium" }),
            /* @__PURE__ */ l("div", { className: "text-sm text-white/90", children: "Expire dans 15 jours" })
          ] }),
          /* @__PURE__ */ l(ll, { className: "w-8 h-8" })
        ] })
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around", children: [
      /* @__PURE__ */ f("button", { className: "flex flex-col items-center gap-1 text-purple-600", children: [
        /* @__PURE__ */ l(rt, { className: "w-6 h-6" }),
        /* @__PURE__ */ l("span", { className: "text-xs font-semibold", children: "Accueil" })
      ] }),
      /* @__PURE__ */ f(
        "button",
        {
          onClick: () => e("/driver/trips"),
          className: "flex flex-col items-center gap-1 text-gray-400",
          children: [
            /* @__PURE__ */ l(it, { className: "w-6 h-6" }),
            /* @__PURE__ */ l("span", { className: "text-xs", children: "Trajets" })
          ]
        }
      ),
      /* @__PURE__ */ f(
        "button",
        {
          onClick: () => e("/driver/publish"),
          className: "flex flex-col items-center gap-1 text-gray-400",
          children: [
            /* @__PURE__ */ l(cs, { className: "w-6 h-6" }),
            /* @__PURE__ */ l("span", { className: "text-xs", children: "Publier" })
          ]
        }
      ),
      /* @__PURE__ */ f(
        "button",
        {
          onClick: () => e("/profile"),
          className: "flex flex-col items-center gap-1 text-gray-400",
          children: [
            /* @__PURE__ */ l(pt, { className: "w-6 h-6" }),
            /* @__PURE__ */ l("span", { className: "text-xs", children: "Profil" })
          ]
        }
      )
    ] })
  ] });
}
function _y() {
  const e = Pe(), driverSession = shareRideGetSession(), resolvePublishVehicleType = (s) => {
    const o = String(s ?? "").toLowerCase().trim();
    return o === "moto" || o === "voiture" || o === "minibus" ? o : "voiture";
  }, seatLimitsByVehicleType = {
    moto: {
      label: "Moto",
      min: 1,
      max: 1,
      hint: "1 place maximum"
    },
    voiture: {
      label: "Voiture",
      min: 1,
      max: 3,
      hint: "1 a 3 places"
    },
    minibus: {
      label: "Minibus",
      min: 1,
      max: 10,
      hint: "1 a 10 places"
    }
  }, initialVehicleType = resolvePublishVehicleType(driverSession?.user?.vehicle_type), [t, n] = Q(1), [r, i] = Q({
    from: "",
    to: "",
    date: "",
    time: "",
    seats: String((seatLimitsByVehicleType[initialVehicleType] ?? seatLimitsByVehicleType.voiture).min),
    price: "",
    vehicleType: initialVehicleType,
    description: ""
  }), [publishSubmitting, setPublishSubmitting] = Q(!1), [publishError, setPublishError] = Q(""), [publishSuccess, setPublishSuccess] = Q(""), currentSeatLimits = seatLimitsByVehicleType[r.vehicleType] ?? seatLimitsByVehicleType.voiture, todayDate = /* @__PURE__ */ new Date().toISOString().slice(0, 10), validateStep = () => {
    if (t === 1) {
      if (!r.from.trim() || !r.to.trim() || !r.date || !r.time)
        return "Completez les informations du trajet pour continuer.";
      if (r.from.trim().toLowerCase() === r.to.trim().toLowerCase())
        return "Le depart et la destination doivent etre differents.";
      return "";
    }
    if (t === 2) {
      const s = Number(r.seats), o = Number(r.price);
      if (!Number.isFinite(s) || s < currentSeatLimits.min || s > currentSeatLimits.max)
        return currentSeatLimits.min === currentSeatLimits.max ? `Pour ce type de vehicule, le nombre de places doit etre ${currentSeatLimits.min}.` : `Pour ce type de vehicule, le nombre de places doit etre compris entre ${currentSeatLimits.min} et ${currentSeatLimits.max}.`;
      if (!Number.isFinite(o) || o < 100)
        return "Le prix doit etre superieur ou egal a 100 FCFA.";
    }
    return "";
  }, a = async (s) => {
    s.preventDefault(), setPublishError(""), setPublishSuccess("");
    const o = validateStep();
    if (o) {
      setPublishError(o);
      return;
    }
    if (t < 3) {
      n(t + 1);
      return;
    }
    const c = shareRideGetSession();
    if (!c?.token) {
      e("/login?type=driver");
      return;
    }
    if (c.user?.role && c.user.role !== "driver") {
      e(c.user.role === "passenger" ? "/passenger/dashboard" : "/");
      return;
    }
    setPublishSubmitting(!0);
    try {
      const d = resolvePublishVehicleType(c.user?.vehicle_type ?? r.vehicleType), u = seatLimitsByVehicleType[d] ?? seatLimitsByVehicleType.voiture, h = Number(r.seats), m = Number.isFinite(h) ? Math.max(u.min, Math.min(u.max, Math.floor(h))) : u.min;
      await shareRideApiRequest("/driver/trips", {
        method: "POST",
        token: c.token,
        body: {
          from: r.from.trim(),
          to: r.to.trim(),
          date: r.date,
          time: r.time,
          seats: m,
          price: Number(r.price),
          vehicle_type: d,
          description: r.description.trim()
        }
      }), setPublishSuccess("Trajet publie avec succes."), setTimeout(() => {
        e("/driver/trips");
      }, 450);
    } catch (d) {
      const u = d instanceof Error ? d.message : "Impossible de publier votre trajet.";
      if (u.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=driver");
        return;
      }
      setPublishError(u);
    } finally {
      setPublishSubmitting(!1);
    }
  };
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6", children: [
      /* @__PURE__ */ f("div", { className: "flex items-center gap-4 mb-4", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => {
              setPublishError(""), setPublishSuccess(""), t > 1 ? n(t - 1) : e("/driver/dashboard");
            },
            className: "hover:bg-white/20 p-2 rounded-lg transition-colors",
            children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ f("div", { children: [
          /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Publier un trajet" }),
          /* @__PURE__ */ f("p", { className: "text-purple-100 text-sm", children: [
            "Étape ",
            t,
            "/3"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { className: "flex gap-2", children: [1, 2, 3].map((s) => /* @__PURE__ */ l(
        "div",
        {
          className: `flex-1 h-1 rounded-full transition-all ${s <= t ? "bg-white" : "bg-white/30"}`
        },
        s
      )) })
    ] }),
    /* @__PURE__ */ f("form", { onSubmit: a, className: "p-6 pb-24", children: [
      publishError && /* @__PURE__ */ l("div", { className: "mb-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3", children: publishError }),
      publishSuccess && /* @__PURE__ */ l("div", { className: "mb-4 bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-3", children: publishSuccess }),
      t === 1 && /* @__PURE__ */ f(
        ee.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          className: "space-y-4",
          children: [
            /* @__PURE__ */ f("div", { className: "bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3", children: [
              /* @__PURE__ */ l(Tn, { className: "w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ l("div", { className: "text-sm text-blue-800", children: "Définissez votre itinéraire. Les passagers pourront vous trouver en fonction de votre point de départ et destination." })
            ] }),
            /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Point de départ" }),
              /* @__PURE__ */ f("div", { className: "relative", children: [
                /* @__PURE__ */ l("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-green-500" }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "text",
                    value: r.from,
                    onChange: (s) => i({ ...r, from: s.target.value }),
                    placeholder: "Ex: Calavi, Godomey",
                    className: "w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",
                    required: !0
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Destination" }),
              /* @__PURE__ */ f("div", { className: "relative", children: [
                /* @__PURE__ */ l("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500" }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "text",
                    value: r.to,
                    onChange: (s) => i({ ...r, to: s.target.value }),
                    placeholder: "Ex: Cotonou, Akpakpa",
                    className: "w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",
                    required: !0
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ f("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
                /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Date" }),
                /* @__PURE__ */ f("div", { className: "relative", children: [
                  /* @__PURE__ */ l(it, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "date",
                      value: r.date,
                      onChange: (s) => i({ ...r, date: s.target.value }),
                      min: todayDate,
                      className: "w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",
                      required: !0
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
                /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Heure" }),
                /* @__PURE__ */ f("div", { className: "relative", children: [
                  /* @__PURE__ */ l(Fn, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                  /* @__PURE__ */ l(
                    "input",
                    {
                      type: "time",
                      value: r.time,
                      onChange: (s) => i({ ...r, time: s.target.value }),
                      className: "w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",
                      required: !0
                    }
                  )
                ] })
              ] })
            ] })
          ]
        }
      ),
      t === 2 && /* @__PURE__ */ f(
        ee.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          className: "space-y-4",
          children: [
            /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Type de véhicule" }),
              /* @__PURE__ */ f("div", { className: "rounded-xl border-2 border-purple-200 bg-purple-50 p-4", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ l(mt, { className: "w-8 h-8 text-purple-700" }),
                  /* @__PURE__ */ f("div", { children: [
                    /* @__PURE__ */ l("p", { className: "text-sm font-semibold text-purple-900", children: currentSeatLimits.label }),
                    /* @__PURE__ */ l("p", { className: "text-xs text-purple-700", children: "Type defini lors de l'inscription" })
                  ] })
                ] }),
                /* @__PURE__ */ f("p", { className: "text-xs text-purple-700 mt-2", children: [
                  "Places autorisees: ",
                  currentSeatLimits.hint
                ] })
              ] })
            ] }),
            /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Nombre de places disponibles" }),
              /* @__PURE__ */ f("div", { className: "relative", children: [
                /* @__PURE__ */ l(Gt, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "number",
                    min: String(currentSeatLimits.min),
                    max: String(currentSeatLimits.max),
                    value: r.seats,
                    onChange: (s) => {
                      const o = (s.target.value ?? "").replace(/\D+/g, "");
                      if (o === "") {
                        i({ ...r, seats: "" });
                        return;
                      }
                      const c = Math.max(currentSeatLimits.min, Math.min(currentSeatLimits.max, Number(o)));
                      i({ ...r, seats: String(c) });
                    },
                    disabled: currentSeatLimits.min === currentSeatLimits.max,
                    className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ f("p", { className: "mt-2 text-xs text-gray-500", children: [
                "Limite appliquee: ",
                currentSeatLimits.hint
              ] })
            ] }),
            /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Prix par personne (FCFA)" }),
              /* @__PURE__ */ f("div", { className: "relative", children: [
                /* @__PURE__ */ l(yr, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "number",
                    min: "100",
                    step: "50",
                    value: r.price,
                    onChange: (s) => i({ ...r, price: s.target.value }),
                    placeholder: "500",
                    className: "w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors",
                    required: !0
                  }
                )
              ] }),
              /* @__PURE__ */ l("div", { className: "mt-2 text-sm text-gray-600", children: "Prix recommandé: 400-800 FCFA" })
            ] })
          ]
        }
      ),
      t === 3 && /* @__PURE__ */ f(
        ee.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          className: "space-y-4",
          children: [
            /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Description (optionnel)" }),
              /* @__PURE__ */ l(
                "textarea",
                {
                  value: r.description,
                  onChange: (s) => i({ ...r, description: s.target.value }),
                  placeholder: "Ajoutez des détails: point de rencontre, bagages acceptés, climatisation, etc.",
                  rows: 4,
                  className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ f("div", { className: "bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-200", children: [
              /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-3", children: "Récapitulatif" }),
              /* @__PURE__ */ f("div", { className: "space-y-2 text-sm", children: [
                /* @__PURE__ */ f("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ l("span", { className: "text-gray-600", children: "Trajet:" }),
                  /* @__PURE__ */ f("span", { className: "font-semibold text-gray-800", children: [
                    r.from,
                    " -> ",
                    r.to
                  ] })
                ] }),
                /* @__PURE__ */ f("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ l("span", { className: "text-gray-600", children: "Date & Heure:" }),
                  /* @__PURE__ */ f("span", { className: "font-semibold text-gray-800", children: [
                    r.date,
                    " à ",
                    r.time
                  ] })
                ] }),
                /* @__PURE__ */ f("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ l("span", { className: "text-gray-600", children: "Places:" }),
                  /* @__PURE__ */ f("span", { className: "font-semibold text-gray-800", children: [
                    r.seats,
                    " disponibles"
                  ] })
                ] }),
                /* @__PURE__ */ f("div", { className: "flex justify-between", children: [
                  /* @__PURE__ */ l("span", { className: "text-gray-600", children: "Prix:" }),
                  /* @__PURE__ */ f("span", { className: "font-semibold text-purple-600", children: [
                    r.price,
                    " FCFA/pers"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ l("div", { className: "bg-yellow-50 border border-yellow-200 rounded-xl p-4", children: /* @__PURE__ */ f("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ l(Tn, { className: "w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ f("div", { className: "text-sm text-yellow-800", children: [
                /* @__PURE__ */ l("p", { className: "font-semibold mb-1", children: "Rappel important" }),
                /* @__PURE__ */ l("p", { children: "Vous recevrez une notification dès qu'un passager réservera votre trajet. Soyez ponctuel et courtois !" })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ l("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6", children: /* @__PURE__ */ l(
        "button",
        {
          type: "submit",
          disabled: publishSubmitting,
          className: "w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all",
          children: t < 3 ? "Continuer" : publishSubmitting ? "Publication..." : "Publier le trajet"
        }
      ) })
    ] })
  ] });
}
function Iy() {
  const e = Pe(), [t, n] = Q("all"), [driverTrips, setDriverTrips] = Q([]), [tripsLoading, setTripsLoading] = Q(!0), [tripsError, setTripsError] = Q(""), [tripsCounts, setTripsCounts] = Q({
    all: 0,
    upcoming: 0,
    completed: 0,
    cancelled: 0
  }), loadDriverTrips = async (a = t) => {
    const s = shareRideGetSession();
    if (!s?.token) {
      e("/login?type=driver");
      return;
    }
    if (s.user?.role && s.user.role !== "driver") {
      e(s.user.role === "passenger" ? "/passenger/dashboard" : "/");
      return;
    }
    setTripsLoading(!0), setTripsError("");
    try {
      const o = new URLSearchParams();
      a && o.set("status", a);
      const c = o.toString(), d = await shareRideApiRequest(`/driver/trips${c ? `?${c}` : ""}`, {
        token: s.token
      }), u = Array.isArray(d?.data) ? d.data.map((h) => ({
        id: h.id,
        from: h.from ?? "Non defini",
        to: h.to ?? "Non defini",
        date: h.date ?? "Non defini",
        time: h.time ?? "--:--",
        passengers: Number(h.passengers ?? 0),
        total: Number(h.total ?? 0),
        available: Number(h.available ?? 0),
        price: Number(h.price ?? 0),
        status: h.status ?? "upcoming",
        statusLabel: h.status_label ?? (h.status === "completed" ? "Termine" : h.status === "cancelled" ? "Annule" : "A venir")
      })) : [], h = d?.meta?.counts ?? {};
      setDriverTrips(u), setTripsCounts({
        all: Number(h.all ?? 0),
        upcoming: Number(h.upcoming ?? 0),
        completed: Number(h.completed ?? 0),
        cancelled: Number(h.cancelled ?? 0)
      });
    } catch (o) {
      const c = o instanceof Error ? o.message : "Impossible de charger vos trajets.";
      if (c.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=driver");
        return;
      }
      setTripsError(c);
    } finally {
      setTripsLoading(!1);
    }
  };
  _e(() => {
    loadDriverTrips(t);
  }, [e, t]);
  const numberFormatter = new Intl.NumberFormat("fr-FR"), i = [
    { value: "all", label: "Tous", count: tripsCounts.all },
    { value: "upcoming", label: "A venir", count: tripsCounts.upcoming },
    { value: "completed", label: "Termines", count: tripsCounts.completed },
    { value: "cancelled", label: "Annules", count: tripsCounts.cancelled }
  ];
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6", children: [
      /* @__PURE__ */ f("div", { className: "flex items-center gap-4 mb-6", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => e("/driver/dashboard"),
            className: "hover:bg-white/20 p-2 rounded-lg transition-colors",
            children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ f("div", { children: [
          /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Mes trajets" }),
          /* @__PURE__ */ l("p", { className: "text-purple-100 text-sm", children: "Gerez tous vos trajets" })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { className: "flex gap-2 bg-white/10 p-1 rounded-xl overflow-x-auto", children: i.map((a) => /* @__PURE__ */ l(
        "button",
        {
          onClick: () => n(a.value),
          className: `shrink-0 min-w-[88px] py-2 px-3 rounded-lg font-semibold transition-all text-sm ${t === a.value ? "bg-white text-purple-600 shadow" : "text-white/80"}`,
          children: [
            a.label,
            " (",
            a.count,
            ")"
          ]
        },
        a.value
      )) })
    ] }),
    /* @__PURE__ */ f("div", { className: "p-6 space-y-3", children: [
      tripsLoading && /* @__PURE__ */ l("div", { className: "bg-white rounded-xl p-6 text-center text-sm text-gray-500", children: "Chargement de vos trajets..." }),
      tripsError && !tripsLoading && /* @__PURE__ */ f("div", { className: "bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700", children: [
        /* @__PURE__ */ l("p", { children: tripsError }),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => loadDriverTrips(t),
            className: "mt-3 inline-flex items-center justify-center px-3 py-2 rounded-lg bg-red-600 text-white text-xs font-semibold",
            children: "Reessayer"
          }
        )
      ] }),
      !tripsLoading && !tripsError && driverTrips.length === 0 ? /* @__PURE__ */ f("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ l(ul, { className: "w-16 h-16 mx-auto text-gray-300 mb-4" }),
        /* @__PURE__ */ l("p", { className: "text-gray-500", children: "Aucun trajet trouve" })
      ] }) : !tripsLoading && !tripsError && driverTrips.map((a, s) => /* @__PURE__ */ f(
      ee.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: s * 0.05 },
        onClick: () => e(`/driver/trips/${a.id}`),
        className: "bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer",
        children: [
            /* @__PURE__ */ f("div", { className: "flex justify-between items-start mb-3", children: [
              /* @__PURE__ */ f("div", { className: "flex-1", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ l("div", { className: "w-2 h-2 rounded-full bg-green-500" }),
                  /* @__PURE__ */ l("span", { className: "font-semibold text-gray-800", children: a.from })
                ] }),
                /* @__PURE__ */ l("div", { className: "flex items-center gap-2 pl-1 border-l-2 border-dashed border-gray-300 ml-0.5 py-1", children: /* @__PURE__ */ l(rt, { className: "w-4 h-4 text-gray-400" }) }),
                /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ l("div", { className: "w-2 h-2 rounded-full bg-red-500" }),
                  /* @__PURE__ */ l("span", { className: "font-semibold text-gray-800", children: a.to })
                ] })
              ] }),
              /* @__PURE__ */ f("div", { className: "text-right", children: [
                /* @__PURE__ */ f("div", { className: "text-xl font-bold text-purple-600", children: [
                  numberFormatter.format(Number(a.price ?? 0)),
                  " FCFA"
                ] }),
                /* @__PURE__ */ l("div", { className: "text-sm text-gray-500", children: "FCFA" })
              ] })
            ] }),
            /* @__PURE__ */ f("div", { className: "flex items-center justify-between pt-3 border-t border-gray-100", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-3 text-sm text-gray-600", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ l(it, { className: "w-4 h-4" }),
                  /* @__PURE__ */ l("span", { children: a.date })
                ] }),
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ l(Fn, { className: "w-4 h-4" }),
                  /* @__PURE__ */ l("span", { children: a.time })
                ] })
              ] }),
              /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1 text-sm", children: [
                  /* @__PURE__ */ l(Gt, { className: "w-4 h-4 text-gray-600" }),
                  /* @__PURE__ */ f("span", { className: "font-semibold text-gray-800", children: [
                    a.passengers,
                    "/",
                    a.total
                  ] })
                ] }),
                /* @__PURE__ */ l(
                  "span",
                  {
                    className: `text-xs px-2 py-1 rounded-full font-semibold ${a.status === "completed" ? "bg-gray-100 text-gray-600" : a.status === "cancelled" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`,
                    children: a.statusLabel
                  }
                )
              ] })
            ] })
          ]
        },
        a.id
      ))
    ] })
  ] });
}
function ZyDriverTripDetails() {
  const e = Pe(), { id: t } = Qo(), [n, r] = Q(!0), [i, a] = Q(""), [s, o] = Q(""), [d, u] = Q(null), [h, m] = Q([]), [b, k] = Q(!1), [p, x] = Q(null), [conversationBookingId, setConversationBookingId] = Q(null), C = async () => {
    const O = shareRideGetSession();
    if (!O?.token) {
      e("/login?type=driver");
      return;
    }
    if (O.user?.role && O.user.role !== "driver") {
      e(O.user.role === "passenger" ? "/passenger/dashboard" : "/");
      return;
    }
    r(!0), a("");
    try {
      const z = await shareRideApiRequest(`/driver/trips/${t}`, {
        token: O.token
      });
      u(z?.trip ?? null), m(Array.isArray(z?.passengers) ? z.passengers : []);
    } catch (z) {
      const B = z instanceof Error ? z.message : "Impossible de charger les details du trajet.";
      if (B.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=driver");
        return;
      }
      a(B);
    } finally {
      r(!1);
    }
  }, E = async (O) => {
    const z = shareRideGetSession();
    if (!z?.token) {
      e("/login?type=driver");
      return;
    }
    k(!0), a(""), o("");
    try {
      const B = await shareRideApiRequest(`/driver/trips/${t}/status`, {
        method: "PATCH",
        token: z.token,
        body: {
          status: O
        }
      });
      u(B?.trip ?? null), m(Array.isArray(B?.passengers) ? B.passengers : []), o(B?.message ?? "Statut du trajet mis a jour.");
    } catch (B) {
      const U = B instanceof Error ? B.message : "Mise a jour du statut impossible.";
      if (U.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=driver");
        return;
      }
      a(U);
    } finally {
      k(!1);
    }
  }, I = async (O) => {
    const z = shareRideGetSession();
    if (!z?.token) {
      e("/login?type=driver");
      return;
    }
    x(O), a(""), o("");
    try {
      const B = await shareRideApiRequest(`/driver/bookings/${O}/cancel`, {
        method: "PATCH",
        token: z.token
      });
      u(B?.trip ?? null), m(Array.isArray(B?.passengers) ? B.passengers : []), o(B?.message ?? "Reservation annulee avec succes.");
    } catch (B) {
      const U = B instanceof Error ? B.message : "Annulation impossible.";
      if (U.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=driver");
        return;
      }
      a(U);
    } finally {
      x(null);
    }
  }, openConversation = async (O) => {
    const z = shareRideGetSession();
    if (!z?.token) {
      e("/login?type=driver");
      return;
    }
    const B = Number(O?.passenger?.id ?? 0), U = Number(d?.id ?? 0);
    if (!B || !U) {
      a("Conversation indisponible pour ce passager.");
      return;
    }
    setConversationBookingId(O.booking_id), a(""), o("");
    try {
      const q = await shareRideApiRequest("/chat/conversations", {
        method: "POST",
        token: z.token,
        body: {
          target_user_id: B,
          trip_id: U
        }
      }), H = q?.conversation?.id;
      if (!H)
        throw new Error("Conversation indisponible.");
      e(`/chat/${H}`);
    } catch (q) {
      const H = q instanceof Error ? q.message : "Impossible d'ouvrir la conversation.";
      if (H.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=driver");
        return;
      }
      a(H);
    } finally {
      setConversationBookingId(null);
    }
  };
  _e(() => {
    C();
  }, [e, t]);
  const F = new Intl.NumberFormat("fr-FR"), D = d?.status === "completed" ? "bg-gray-100 text-gray-700" : d?.status === "cancelled" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700", M = d?.duration_minutes != null ? `~${d.duration_minutes} min` : "Duree variable";
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6", children: [
      /* @__PURE__ */ f("div", { className: "flex items-center gap-4 mb-4", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => e("/driver/trips"),
            className: "hover:bg-white/20 p-2 rounded-lg transition-colors",
            children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ f("div", { children: [
          /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Detail du trajet" }),
          /* @__PURE__ */ l("p", { className: "text-purple-100 text-sm", children: "Gerer trajet et passagers" })
        ] })
      ] }),
      s && /* @__PURE__ */ l("p", { className: "text-sm text-green-100", children: s }),
      i && /* @__PURE__ */ l("p", { className: "text-sm text-red-200", children: i })
    ] }),
    /* @__PURE__ */ f("div", { className: "p-6 space-y-4", children: [
      n ? /* @__PURE__ */ f("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ l("div", { className: "w-10 h-10 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4" }),
        /* @__PURE__ */ l("p", { className: "text-gray-500", children: "Chargement du trajet..." })
      ] }) : !d ? /* @__PURE__ */ l("div", { className: "bg-white rounded-xl p-6 shadow-sm text-center", children: /* @__PURE__ */ f("div", { className: "space-y-3", children: [
        /* @__PURE__ */ l("p", { className: "text-gray-600", children: "Trajet introuvable ou inaccessible." }),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: C,
            className: "bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors",
            children: "Reessayer"
          }
        )
      ] }) }) : /* @__PURE__ */ f(Xr, { children: [
        /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
          /* @__PURE__ */ f("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ f("div", { className: "space-y-2", children: [
              /* @__PURE__ */ f("div", { className: "font-bold text-gray-800 text-lg", children: [
                d.from ?? "Depart",
                " -> ",
                d.to ?? "Destination"
              ] }),
              /* @__PURE__ */ f("div", { className: "flex items-center gap-3 text-sm text-gray-600", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ l(it, { className: "w-4 h-4" }),
                  /* @__PURE__ */ l("span", { children: d.date ?? "Non defini" })
                ] }),
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ l(Fn, { className: "w-4 h-4" }),
                  /* @__PURE__ */ f("span", { children: [
                    d.departure_time ?? "--:--",
                    " • ",
                    M
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ l("span", { className: "text-xs px-2 py-1 rounded-full font-semibold " + D, children: d.status_label ?? "A venir" })
          ] }),
          /* @__PURE__ */ l("div", { className: "grid grid-cols-2 gap-3 mt-4", children: [
            { label: "Prix", value: `${F.format(Number(d.price ?? 0))} FCFA`, icon: yr },
            { label: "Places totales", value: String(d.seats_total ?? 0), icon: Gt },
            { label: "Places reservees", value: String(d.reserved_seats ?? 0), icon: Gt },
            { label: "Places dispo", value: String(d.seats_available ?? 0), icon: Gt }
          ].map((O) => /* @__PURE__ */ f("div", { className: "bg-gray-50 rounded-xl p-3", children: [
            /* @__PURE__ */ f("div", { className: "flex items-center gap-1 text-xs text-gray-500 mb-1", children: [
              /* @__PURE__ */ l(O.icon, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ l("span", { children: O.label })
            ] }),
            /* @__PURE__ */ l("div", { className: "font-semibold text-gray-800", children: O.value })
          ] }, O.label)) })
        ] }),
        /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
          /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-3", children: "Actions trajet" }),
          /* @__PURE__ */ l("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-2", children: [
            {
              label: "Demarrer",
              value: "in_progress",
              enabled: d.can_start === !0,
              visible: d.can_start === !0,
              className: "bg-blue-600 hover:bg-blue-700"
            },
            {
              label: "Terminer",
              value: "completed",
              enabled: d.can_complete === !0,
              visible: !0,
              className: "bg-green-600 hover:bg-green-700"
            },
            {
              label: "Annuler",
              value: "cancelled",
              enabled: d.can_cancel === !0,
              visible: !0,
              className: "bg-red-600 hover:bg-red-700"
            }
          ].filter((O) => O.visible !== !1).map((O) => /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: () => E(O.value),
              disabled: b || !O.enabled,
              className: `text-white py-2.5 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${O.className}`,
              children: b ? "Mise a jour..." : O.label
            },
            O.value
          )) }),
          d?.status_raw === "scheduled" && d?.can_start !== !0 && /* @__PURE__ */ l("p", { className: "text-xs text-gray-500 mt-2", children: "Le bouton Demarrer apparaitra apres la premiere reservation passager." })
        ] }),
        /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
          /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-3", children: [
            /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800", children: "Passagers et reservations" }),
            /* @__PURE__ */ f("span", { className: "text-sm text-gray-500", children: [
              h.length,
              " reservation(s)"
            ] })
          ] }),
          h.length === 0 ? /* @__PURE__ */ l("p", { className: "text-sm text-gray-500", children: "Aucune reservation sur ce trajet pour le moment." }) : /* @__PURE__ */ l("div", { className: "space-y-3", children: h.map((O) => {
            const z = O?.passenger?.name ?? "Passager", B = O?.passenger?.phone, U = O?.passenger?.avatar ?? (z ? z.charAt(0).toUpperCase() : "P"), q = O.status === "completed" ? "bg-gray-100 text-gray-700" : O.status === "cancelled" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700";
            return /* @__PURE__ */ f("div", { className: "border border-gray-200 rounded-xl p-3", children: [
              /* @__PURE__ */ f("div", { className: "flex items-start justify-between gap-3", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
                  O?.passenger?.avatar_url ? /* @__PURE__ */ l("img", { src: O.passenger.avatar_url, alt: z, className: "w-12 h-12 rounded-full object-cover" }) : /* @__PURE__ */ l("div", { className: "w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center font-bold", children: U }),
                  /* @__PURE__ */ f("div", { children: [
                    /* @__PURE__ */ l("div", { className: "font-semibold text-gray-800", children: z }),
                    /* @__PURE__ */ f("div", { className: "text-sm text-gray-600", children: [
                      O.seats_reserved,
                      " place(s) reservee(s)"
                    ] }),
                    /* @__PURE__ */ l("div", { className: "text-xs text-gray-500", children: B || "Telephone non renseigne" })
                  ] })
                ] }),
                /* @__PURE__ */ l("span", { className: "text-xs px-2 py-1 rounded-full font-semibold " + q, children: O.status_label ?? "Confirmee" })
              ] }),
              /* @__PURE__ */ f("div", { className: "flex items-center gap-2 mt-3", children: [
                B ? /* @__PURE__ */ l(
                  "a",
                  {
                    href: `tel:${B}`,
                    className: "inline-flex items-center justify-center gap-1 bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-xs font-semibold",
                    children: [
                      /* @__PURE__ */ l(_i, { className: "w-3.5 h-3.5" }),
                      "Appeler"
                    ]
                  }
                ) : /* @__PURE__ */ l("button", { type: "button", disabled: !0, className: "inline-flex items-center justify-center gap-1 bg-gray-100 text-gray-400 px-3 py-2 rounded-lg text-xs font-semibold", children: "Appeler" }),
                O?.passenger?.id && /* @__PURE__ */ f(
                  "button",
                  {
                    type: "button",
                    onClick: () => openConversation(O),
                    disabled: conversationBookingId === O.booking_id || b,
                    className: "inline-flex items-center justify-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg text-xs font-semibold disabled:opacity-50",
                    children: [
                      /* @__PURE__ */ l(Lf, { className: "w-3.5 h-3.5" }),
                      conversationBookingId === O.booking_id ? "Ouverture..." : "Message"
                    ]
                  }
                ),
                O.can_cancel && /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    onClick: () => I(O.booking_id),
                    disabled: p === O.booking_id || b,
                    className: "inline-flex items-center justify-center gap-1 bg-red-50 text-red-700 px-3 py-2 rounded-lg text-xs font-semibold disabled:opacity-50",
                    children: p === O.booking_id ? "Annulation..." : "Annuler reservation"
                  }
                )
              ] })
            ] }, O.booking_id);
          }) })
        ] })
      ] })
    ] })
  ] });
}
function By() {
  const e = Pe(), [t, n] = Q("monthly"), r = [
    {
      id: "weekly",
      name: "Hebdomadaire",
      price: "500",
      period: "/ semaine",
      description: "Parfait pour tester",
      features: ["Publier des trajets illimités", "Support par email", "Statistiques basiques"]
    },
    {
      id: "monthly",
      name: "Mensuel",
      price: "1,500",
      period: "/ mois",
      description: "Meilleure valeur",
      savings: "Économisez 500 FCFA",
      features: [
        "Tout du plan hebdomadaire",
        "Badge conducteur premium",
        "Priorité dans les résultats",
        "Support prioritaire",
        "Statistiques avancées"
      ]
    }
  ], i = [
    {
      icon: tm,
      title: "Publication illimitée",
      description: "Publiez autant de trajets que vous voulez"
    },
    {
      icon: Nf,
      title: "Visibilité accrue",
      description: "Apparaissez en premier dans les recherches"
    },
    {
      icon: mn,
      title: "Protection garantie",
      description: "Assurance et support dédié"
    },
    {
      icon: vr,
      title: "Augmentez vos revenus",
      description: "Plus de visibilité = plus de passagers"
    }
  ], a = () => {
    e("/payment/subscription");
  };
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-24", children: [
    /* @__PURE__ */ l("div", { className: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white p-6", children: /* @__PURE__ */ f("div", { className: "flex items-center gap-4 mb-4", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => e("/driver/dashboard"),
          className: "hover:bg-white/20 p-2 rounded-lg transition-colors",
          children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ f("div", { children: [
        /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Abonnement Premium" }),
        /* @__PURE__ */ l("p", { className: "text-orange-100 text-sm", children: "Boostez votre activité" })
      ] })
    ] }) }),
    /* @__PURE__ */ f("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ l("div", { className: "grid grid-cols-2 gap-4", children: i.map((s, o) => /* @__PURE__ */ f(
        ee.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: o * 0.1 },
          className: "bg-white rounded-xl p-4 shadow-sm",
          children: [
            /* @__PURE__ */ l("div", { className: "bg-gradient-to-br from-orange-100 to-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center mb-3", children: /* @__PURE__ */ l(s.icon, { className: "w-6 h-6 text-orange-600" }) }),
            /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 text-sm mb-1", children: s.title }),
            /* @__PURE__ */ l("p", { className: "text-xs text-gray-600", children: s.description })
          ]
        },
        s.title
      )) }),
      /* @__PURE__ */ f("div", { children: [
        /* @__PURE__ */ l("h2", { className: "text-xl font-bold text-gray-800 mb-4", children: "Choisissez votre plan" }),
        /* @__PURE__ */ l("div", { className: "space-y-3", children: r.map((s) => /* @__PURE__ */ f(
          ee.div,
          {
            whileTap: { scale: 0.98 },
            onClick: () => n(s.id),
            className: `bg-white rounded-2xl p-5 cursor-pointer transition-all ${t === s.id ? "ring-4 ring-orange-500 shadow-lg" : "shadow-sm hover:shadow-md"}`,
            children: [
              /* @__PURE__ */ f("div", { className: "flex items-start justify-between mb-3", children: [
                /* @__PURE__ */ f("div", { className: "flex-1", children: [
                  /* @__PURE__ */ f("div", { className: "flex items-center gap-2 mb-1", children: [
                    /* @__PURE__ */ l("h3", { className: "text-lg font-bold text-gray-800", children: s.name }),
                    s.id === "monthly" && /* @__PURE__ */ l("span", { className: "bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold", children: "Populaire" })
                  ] }),
                  /* @__PURE__ */ l("p", { className: "text-sm text-gray-600", children: s.description }),
                  s.savings && /* @__PURE__ */ l("p", { className: "text-sm text-green-600 font-semibold mt-1", children: s.savings })
                ] }),
                /* @__PURE__ */ f("div", { className: "text-right", children: [
                  /* @__PURE__ */ l("div", { className: "text-3xl font-bold text-gray-800", children: s.price }),
                  /* @__PURE__ */ f("div", { className: "text-sm text-gray-500", children: [
                    "FCFA",
                    s.period
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ l("div", { className: "space-y-2 pt-3 border-t border-gray-100", children: s.features.map((o) => /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ l("div", { className: "bg-green-100 rounded-full p-0.5", children: /* @__PURE__ */ l(os, { className: "w-4 h-4 text-green-600" }) }),
                /* @__PURE__ */ l("span", { className: "text-sm text-gray-700", children: o })
              ] }, o)) }),
              t === s.id && /* @__PURE__ */ l("div", { className: "mt-4 pt-3 border-t border-gray-100", children: /* @__PURE__ */ f("div", { className: "flex items-center justify-center gap-2 text-orange-600", children: [
                /* @__PURE__ */ l("div", { className: "w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center", children: /* @__PURE__ */ l(os, { className: "w-3 h-3 text-white" }) }),
                /* @__PURE__ */ l("span", { className: "font-semibold", children: "Sélectionné" })
              ] }) })
            ]
          },
          s.id
        )) })
      ] }),
      /* @__PURE__ */ f("div", { className: "bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-purple-200", children: [
        /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-2", children: "Abonnement actuel" }),
        /* @__PURE__ */ f("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ l("p", { className: "text-sm text-gray-600", children: "Plan: Mensuel Premium" }),
            /* @__PURE__ */ l("p", { className: "text-sm text-gray-600", children: "Expire le: 23 Mai 2026" })
          ] }),
          /* @__PURE__ */ l("div", { className: "bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold", children: "Actif" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6", children: /* @__PURE__ */ l(
      "button",
      {
        onClick: a,
        className: "w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all",
        children: "Renouveler l'abonnement"
      }
    ) })
  ] });
}
function ZyDriverSubscription() {
  const e = Pe(), [t, n] = Q("monthly"), [r, i] = Q(!0), [a, s] = Q(!1), [o, c] = Q(""), [d, u] = Q(""), [h, m] = Q(null), [y, g] = Q(0), b = [
    {
      id: "weekly",
      name: "Hebdomadaire",
      price: 500,
      period: "/ semaine",
      description: "Parfait pour tester",
      features: ["Publier des trajets illimites", "Support par email", "Statistiques basiques"]
    },
    {
      id: "monthly",
      name: "Mensuel",
      price: 1500,
      period: "/ mois",
      description: "Meilleure valeur",
      savings: "Economisez 500 FCFA",
      features: [
        "Tout du plan hebdomadaire",
        "Badge conducteur premium",
        "Priorite dans les resultats",
        "Support prioritaire",
        "Statistiques avancees"
      ]
    }
  ], k = [
    {
      icon: tm,
      title: "Publication illimitee",
      description: "Publiez autant de trajets que vous voulez"
    },
    {
      icon: Nf,
      title: "Visibilite accrue",
      description: "Apparaissez en premier dans les recherches"
    },
    {
      icon: mn,
      title: "Protection garantie",
      description: "Assurance et support dedie"
    },
    {
      icon: vr,
      title: "Augmentez vos revenus",
      description: "Plus de visibilite = plus de passagers"
    }
  ], p = new Intl.NumberFormat("fr-FR"), x = async () => {
    const M = shareRideGetSession();
    if (!M?.token) {
      e("/login?type=driver");
      return;
    }
    if (M.user?.role && M.user.role !== "driver") {
      e(M.user.role === "passenger" ? "/passenger/dashboard" : "/");
      return;
    }
    i(!0), c(""), u("");
    try {
      const A = await shareRideApiRequest("/driver/subscription", {
        token: M.token
      }), L = A?.subscription ?? null;
      m(L), g(Number(A?.wallet?.available_balance_fcfa ?? 0)), (L?.plan === "weekly" || L?.plan === "monthly") && n(L.plan);
    } catch (A) {
      const L = A instanceof Error ? A.message : "Impossible de charger l abonnement.";
      if (L.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=driver");
        return;
      }
      c(L);
    } finally {
      i(!1);
    }
  }, C = async () => {
    const M = shareRideGetSession();
    if (!M?.token) {
      e("/login?type=driver");
      return;
    }
    s(!0), c(""), u("");
    try {
      const A = await shareRideApiRequest("/driver/subscription/renew", {
        method: "POST",
        token: M.token,
        body: {
          plan: t
        }
      });
      m(A?.subscription ?? null), g(Number(A?.wallet?.available_balance_fcfa ?? y)), u(A?.message ?? "Abonnement renouvele avec succes.");
    } catch (A) {
      const L = A instanceof Error ? A.message : "Impossible de renouveler l abonnement.";
      if (L.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=driver");
        return;
      }
      c(L);
    } finally {
      s(!1);
    }
  };
  _e(() => {
    x();
  }, [e]);
  const E = h?.plan === "weekly" ? "Hebdomadaire" : h?.plan === "monthly" ? "Mensuel" : "Aucun", I = h?.expires_at ? new Date(h.expires_at).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }) : null, F = h?.status === "active" ? "Actif" : h?.status === "expired" ? "Expire" : "Inactif", D = h?.status === "active" ? "bg-green-100 text-green-700" : h?.status === "expired" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700", selectedPlan = b.find((M) => M.id === t) ?? b[0], selectedPlanPrice = Number(selectedPlan?.price ?? 0), canRenewByBalance = y >= selectedPlanPrice, renewDisabled = a || r || !canRenewByBalance;
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-24", children: [
    /* @__PURE__ */ l("div", { className: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white p-6", children: /* @__PURE__ */ f("div", { className: "flex items-center gap-4 mb-4", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => e("/driver/dashboard"),
          className: "hover:bg-white/20 p-2 rounded-lg transition-colors",
          children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ f("div", { children: [
        /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Abonnement Premium" }),
        /* @__PURE__ */ l("p", { className: "text-orange-100 text-sm", children: "Boostez votre activite" })
      ] })
    ] }) }),
    /* @__PURE__ */ f("div", { className: "p-6 space-y-6", children: [
      o && /* @__PURE__ */ l("div", { className: "bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl p-4", children: o }),
      d && /* @__PURE__ */ l("div", { className: "bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl p-4", children: d }),
      r ? /* @__PURE__ */ l("div", { className: "bg-white rounded-xl p-6 shadow-sm text-sm text-gray-500", children: "Chargement de l abonnement..." }) : /* @__PURE__ */ f(Xr, { children: [
        /* @__PURE__ */ l("div", { className: "grid grid-cols-2 gap-4", children: k.map((M, A) => /* @__PURE__ */ f(
          ee.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: A * 0.08 },
            className: "bg-white rounded-xl p-4 shadow-sm",
            children: [
              /* @__PURE__ */ l("div", { className: "bg-gradient-to-br from-orange-100 to-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center mb-3", children: /* @__PURE__ */ l(M.icon, { className: "w-6 h-6 text-orange-600" }) }),
              /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 text-sm mb-1", children: M.title }),
              /* @__PURE__ */ l("p", { className: "text-xs text-gray-600", children: M.description })
            ]
          },
          M.title
        )) }),
        /* @__PURE__ */ f("div", { children: [
          /* @__PURE__ */ l("h2", { className: "text-xl font-bold text-gray-800 mb-4", children: "Choisissez votre plan" }),
          /* @__PURE__ */ l("div", { className: "space-y-3", children: b.map((M) => /* @__PURE__ */ f(
            ee.div,
            {
              whileTap: { scale: 0.98 },
              onClick: () => n(M.id),
              className: `bg-white rounded-2xl p-5 cursor-pointer transition-all ${t === M.id ? "ring-4 ring-orange-500 shadow-lg" : "shadow-sm hover:shadow-md"}`,
              children: [
                /* @__PURE__ */ f("div", { className: "flex items-start justify-between mb-3", children: [
                  /* @__PURE__ */ f("div", { className: "flex-1", children: [
                    /* @__PURE__ */ f("div", { className: "flex items-center gap-2 mb-1", children: [
                      /* @__PURE__ */ l("h3", { className: "text-lg font-bold text-gray-800", children: M.name }),
                      M.id === "monthly" && /* @__PURE__ */ l("span", { className: "bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold", children: "Populaire" })
                    ] }),
                    /* @__PURE__ */ l("p", { className: "text-sm text-gray-600", children: M.description }),
                    M.savings && /* @__PURE__ */ l("p", { className: "text-sm text-green-600 font-semibold mt-1", children: M.savings })
                  ] }),
                  /* @__PURE__ */ f("div", { className: "text-right", children: [
                    /* @__PURE__ */ l("div", { className: "text-3xl font-bold text-gray-800", children: p.format(M.price) }),
                    /* @__PURE__ */ f("div", { className: "text-sm text-gray-500", children: [
                      "FCFA",
                      M.period
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ l("div", { className: "space-y-2 pt-3 border-t border-gray-100", children: M.features.map((A) => /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ l("div", { className: "bg-green-100 rounded-full p-0.5", children: /* @__PURE__ */ l(os, { className: "w-4 h-4 text-green-600" }) }),
                  /* @__PURE__ */ l("span", { className: "text-sm text-gray-700", children: A })
                ] }, A)) }),
                t === M.id && /* @__PURE__ */ l("div", { className: "mt-4 pt-3 border-t border-gray-100", children: /* @__PURE__ */ f("div", { className: "flex items-center justify-center gap-2 text-orange-600", children: [
                  /* @__PURE__ */ l("div", { className: "w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center", children: /* @__PURE__ */ l(os, { className: "w-3 h-3 text-white" }) }),
                  /* @__PURE__ */ l("span", { className: "font-semibold", children: "Selectionne" })
                ] }) })
              ]
            },
            M.id
          )) })
        ] }),
        /* @__PURE__ */ f("div", { className: "bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200", children: [
          /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-2", children: "Paiement par solde conducteur" }),
          /* @__PURE__ */ f("div", { className: "space-y-2 text-sm text-gray-700", children: [
            /* @__PURE__ */ f("p", { children: [
              "Solde disponible: ",
              p.format(y),
              " FCFA"
            ] }),
            /* @__PURE__ */ f("p", { children: [
              "Plan selectionne: ",
              selectedPlan?.name ?? "-",
              " (",
              p.format(selectedPlanPrice),
              " FCFA)"
            ] })
          ] }),
          !canRenewByBalance && /* @__PURE__ */ l("p", { className: "text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mt-3", children: "Solde insuffisant pour ce plan. Rechargez votre compte conducteur avant de renouveler." }),
          /* @__PURE__ */ l("button", { type: "button", onClick: () => e("/driver/wallet"), className: "mt-3 w-full bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors", children: "Aller au solde (retrait/recharge)" })
        ] }),
        /* @__PURE__ */ f("div", { className: "bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 border border-purple-200", children: [
          /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-2", children: "Abonnement actuel" }),
          /* @__PURE__ */ f("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("p", { className: "text-sm text-gray-600", children: `Plan: ${E}` }),
              /* @__PURE__ */ l("p", { className: "text-sm text-gray-600", children: I ? `Expire le: ${I}` : "Aucune date d expiration" }),
              h?.status === "active" && /* @__PURE__ */ l("p", { className: "text-xs text-gray-500 mt-1", children: `${h?.remaining_days ?? 0} jour(s) restant(s)` })
            ] }),
            /* @__PURE__ */ l("div", { className: `px-3 py-1 rounded-full text-sm font-semibold ${D}`, children: F })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6", children: /* @__PURE__ */ l(
      "button",
      {
        onClick: C,
        disabled: renewDisabled,
        className: "w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-60",
        children: a ? "Renouvellement..." : canRenewByBalance ? "Renouveler l abonnement" : "Recharger le solde pour continuer"
      }
    ) })
  ] });
}
function $y() {
  const e = Pe(), [dashboardLoading, setDashboardLoading] = Q(!0), [dashboardError, setDashboardError] = Q(""), [dashboardUser, setDashboardUser] = Q(shareRideGetSession()?.user ?? null), [dashboardNotificationUnreadCount, setDashboardNotificationUnreadCount] = Q(0), [dashboardStats, setDashboardStats] = Q({
    trips_completed: 0,
    saved_amount_fcfa: 0,
    average_rating: null,
    upcoming_count: 0
  }), [dashboardPopularRoutes, setDashboardPopularRoutes] = Q([]), [dashboardUpcomingBookings, setDashboardUpcomingBookings] = Q([]), loadPassengerDashboard = async () => {
    const i = shareRideGetSession();
    if (!i?.token) {
      e("/login?type=passenger");
      return;
    }
    if (i.user?.role && i.user.role !== "passenger") {
      e(i.user.role === "driver" ? "/driver/dashboard" : "/");
      return;
    }
    setDashboardLoading(!0), setDashboardError("");
    try {
      const a = await shareRideApiRequest("/passenger/home", {
        token: i.token
      }), s = a?.stats ?? {}, o = Array.isArray(a?.popular_routes) ? a.popular_routes : [], c = Array.isArray(a?.upcoming_bookings) ? a.upcoming_bookings.map((d) => ({
        id: d.trip_id ?? d.id,
        driver: d?.driver?.name ?? "Conducteur",
        rating: d?.driver?.rating ?? "-",
        from: d.from ?? "Non defini",
        to: d.to ?? "Non defini",
        date: d.date ?? "Non defini",
        time: d.time ?? "--:--",
        price: d.price ?? "0",
        vehicle: d.vehicle ?? "Vehicule",
        status: d.status ?? "upcoming",
        avatar: d?.driver?.avatar ?? (d?.driver?.name ? d.driver.name.charAt(0).toUpperCase() : "C")
      })) : [];
      setDashboardStats({
        trips_completed: Number(s.trips_completed ?? 0),
        saved_amount_fcfa: Number(s.saved_amount_fcfa ?? 0),
        average_rating: s.average_rating ?? null,
        upcoming_count: Number(s.upcoming_count ?? 0)
      }), setDashboardPopularRoutes(o), setDashboardUpcomingBookings(c), setDashboardNotificationUnreadCount(Number(a?.notifications?.unread_count ?? 0)), i.user && setDashboardUser(i.user);
    } catch (a) {
      const s = a instanceof Error ? a.message : "Impossible de charger votre accueil passager.";
      if (s.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=passenger");
        return;
      }
      setDashboardError(s);
    } finally {
      setDashboardLoading(!1);
    }
  };
  _e(() => {
    loadPassengerDashboard();
  }, [e]);
  const numberFormatter = new Intl.NumberFormat("fr-FR"), t = [
    { label: "Trajets effectues", value: numberFormatter.format(dashboardStats.trips_completed ?? 0), icon: Of, color: "bg-blue-500" },
    { label: "Economises", value: numberFormatter.format(dashboardStats.saved_amount_fcfa ?? 0), icon: yr, color: "bg-green-500" },
    { label: "Note moyenne", value: dashboardStats.average_rating != null ? Number(dashboardStats.average_rating).toFixed(1) : "-", icon: We, color: "bg-yellow-500" },
    { label: "Trajets a venir", value: numberFormatter.format(dashboardStats.upcoming_count ?? 0), icon: vr, color: "bg-purple-500" }
  ], n = dashboardPopularRoutes, r = dashboardUpcomingBookings, dashboardFirstName = dashboardUser?.name ? dashboardUser.name.split(" ")[0] : "Passager";
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 pb-8", children: [
      /* @__PURE__ */ f("div", { className: "flex justify-between items-start mb-6", children: [
        /* @__PURE__ */ f("div", { children: [
          /* @__PURE__ */ f("h1", { className: "text-2xl font-bold mb-1", children: [
            "Salut, ",
            dashboardFirstName
          ] }),
          /* @__PURE__ */ l("p", { className: "text-blue-100", children: "Ou voulez-vous aller ?" }),
          dashboardLoading && /* @__PURE__ */ l("p", { className: "text-xs text-blue-100 mt-2", children: "Chargement de vos donnees..." }),
          dashboardError && /* @__PURE__ */ l("p", { className: "text-xs text-red-200 mt-2", children: dashboardError })
        ] }),
        /* @__PURE__ */ f("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ f(
            "button",
            {
              onClick: () => e("/notifications"),
              className: "bg-white/20 backdrop-blur p-2 rounded-lg hover:bg-white/30 transition-colors relative",
              children: [
                /* @__PURE__ */ l(ji, { className: "w-5 h-5" }),
                dashboardNotificationUnreadCount > 0 && /* @__PURE__ */ l("span", { className: "absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-red-500 text-white rounded-full text-[10px] leading-[18px] text-center font-bold", children: dashboardNotificationUnreadCount > 9 ? "9+" : dashboardNotificationUnreadCount })
              ]
            }
          ),
          /* @__PURE__ */ l(
            "button",
            {
              onClick: () => e("/chat"),
              className: "bg-white/20 backdrop-blur p-2 rounded-lg hover:bg-white/30 transition-colors",
              children: /* @__PURE__ */ l(Lf, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ l(
            "button",
            {
              onClick: () => e("/profile"),
              className: "bg-white/20 backdrop-blur p-2 rounded-lg hover:bg-white/30 transition-colors",
              children: /* @__PURE__ */ l(pt, { className: "w-5 h-5" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ l("div", { className: "grid grid-cols-2 gap-3", children: t.map((i, a) => /* @__PURE__ */ f(
        ee.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: a * 0.1 },
          className: "bg-white/10 backdrop-blur rounded-xl p-4",
          children: [
            /* @__PURE__ */ l("div", { className: `${i.color} w-10 h-10 rounded-lg flex items-center justify-center mb-2`, children: /* @__PURE__ */ l(i.icon, { className: "w-5 h-5 text-white" }) }),
            /* @__PURE__ */ l("div", { className: "text-2xl font-bold", children: i.value }),
            /* @__PURE__ */ l("div", { className: "text-sm text-blue-100", children: i.label })
          ]
        },
        i.label
      )) })
    ] }),
    /* @__PURE__ */ l("div", { className: "px-6 -mt-4", children: /* @__PURE__ */ f(
      ee.button,
      {
        whileTap: { scale: 0.98 },
        onClick: () => e("/passenger/search"),
        className: "w-full bg-white py-4 px-4 rounded-xl shadow-lg flex items-center gap-3 hover:shadow-xl transition-all",
        children: [
          /* @__PURE__ */ l("div", { className: "bg-blue-100 p-2 rounded-lg", children: /* @__PURE__ */ l(ei, { className: "w-5 h-5 text-blue-600" }) }),
          /* @__PURE__ */ l("span", { className: "text-gray-400", children: "Rechercher un trajet..." })
        ]
      }
    ) }),
    r.length > 0 && /* @__PURE__ */ f("div", { className: "px-6 mt-6", children: [
      /* @__PURE__ */ f("div", { className: "flex justify-between items-center mb-4", children: [
        /* @__PURE__ */ l("h2", { className: "text-xl font-bold text-gray-800", children: "Prochains trajets" }),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => e("/passenger/bookings"),
            className: "text-blue-600 font-semibold text-sm",
            children: "Voir tout"
          }
        )
      ] }),
      r.map((i) => /* @__PURE__ */ f(
        ee.div,
        {
          whileTap: { scale: 0.98 },
          onClick: () => e(`/trip/${i.id}`),
          className: "bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer border border-blue-200",
          children: [
            /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ l("div", { className: "bg-gradient-to-br from-blue-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg", children: i.avatar || i.driver.charAt(0) }),
                /* @__PURE__ */ f("div", { children: [
                  /* @__PURE__ */ l("div", { className: "font-bold text-gray-800", children: i.driver }),
                  /* @__PURE__ */ f("div", { className: "flex items-center gap-1 text-sm text-gray-600", children: [
                    /* @__PURE__ */ l(We, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }),
                    /* @__PURE__ */ l("span", { children: i.rating }),
                    /* @__PURE__ */ l("span", { className: "mx-1", children: "•" }),
                    /* @__PURE__ */ l("span", { children: i.vehicle })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ f("div", { className: "text-right", children: [
                /* @__PURE__ */ l("div", { className: "text-2xl font-bold text-blue-600", children: i.price }),
                /* @__PURE__ */ l("div", { className: "text-xs text-gray-500", children: "FCFA" })
              ] })
            ] }),
            /* @__PURE__ */ f("div", { className: "flex items-start gap-2 mb-3", children: [
              /* @__PURE__ */ f("div", { className: "flex flex-col items-center gap-1 mt-1", children: [
                /* @__PURE__ */ l("div", { className: "w-2 h-2 rounded-full bg-green-500" }),
                /* @__PURE__ */ l("div", { className: "w-0.5 h-8 bg-gray-300" }),
                /* @__PURE__ */ l("div", { className: "w-2 h-2 rounded-full bg-red-500" })
              ] }),
              /* @__PURE__ */ f("div", { className: "flex-1", children: [
                /* @__PURE__ */ l("div", { className: "font-semibold text-gray-800 mb-2", children: i.from }),
                /* @__PURE__ */ l("div", { className: "font-semibold text-gray-800", children: i.to })
              ] })
            ] }),
            /* @__PURE__ */ f("div", { className: "flex items-center justify-between pt-3 border-t border-blue-200", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-3 text-sm text-gray-600", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ l(it, { className: "w-4 h-4" }),
                  /* @__PURE__ */ l("span", { children: i.date })
                ] }),
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ l(Fn, { className: "w-4 h-4" }),
                  /* @__PURE__ */ l("span", { children: i.time })
                ] })
              ] }),
              /* @__PURE__ */ l("div", { className: "bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold", children: i.status === "upcoming" ? "Confirme" : "En attente" })
            ] })
          ]
        },
        i.id
      ))
    ] }),
    /* @__PURE__ */ f("div", { className: "px-6 mt-6", children: [
      /* @__PURE__ */ l("h2", { className: "text-xl font-bold text-gray-800 mb-4", children: "Trajets populaires" }),
      n.length === 0 && !dashboardLoading && /* @__PURE__ */ l("div", { className: "bg-white rounded-xl p-4 text-sm text-gray-500", children: "Aucun trajet populaire disponible pour le moment." }),
      /* @__PURE__ */ l("div", { className: "space-y-3", children: n.map((i, a) => /* @__PURE__ */ f(
        ee.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          transition: { delay: a * 0.1 },
          onClick: () => e("/passenger/search"),
          className: "bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer",
          children: [
            /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-2 flex-1", children: [
                /* @__PURE__ */ l(rt, { className: "w-5 h-5 text-blue-600" }),
                /* @__PURE__ */ f("div", { children: [
                  /* @__PURE__ */ f("div", { className: "font-semibold text-gray-800", children: [
                    i.from,
                    " -> ",
                    i.to
                  ] }),
                  /* @__PURE__ */ l("div", { className: "text-sm text-gray-500", children: i.time })
                ] })
              ] }),
              /* @__PURE__ */ f("div", { className: "text-right", children: [
                /* @__PURE__ */ l("div", { className: "font-bold text-blue-600", children: i.price }),
                /* @__PURE__ */ l("div", { className: "text-xs text-gray-500", children: "FCFA" })
              ] })
            ] }),
            /* @__PURE__ */ f("div", { className: "flex items-center justify-between pt-2 border-t border-gray-100", children: [
              /* @__PURE__ */ f("div", { className: "text-sm text-gray-600", children: [
                i.trips,
                " trajets disponibles"
              ] }),
              /* @__PURE__ */ l("div", { className: "text-sm text-blue-600 font-semibold", children: "Rechercher" })
            ] })
          ]
        },
        a
      )) })
    ] }),
    /* @__PURE__ */ f("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around", children: [
      /* @__PURE__ */ f("button", { className: "flex flex-col items-center gap-1 text-blue-600", children: [
        /* @__PURE__ */ l(rt, { className: "w-6 h-6" }),
        /* @__PURE__ */ l("span", { className: "text-xs font-semibold", children: "Accueil" })
      ] }),
      /* @__PURE__ */ f(
        "button",
        {
          onClick: () => e("/passenger/search"),
          className: "flex flex-col items-center gap-1 text-gray-400",
          children: [
            /* @__PURE__ */ l(ei, { className: "w-6 h-6" }),
            /* @__PURE__ */ l("span", { className: "text-xs", children: "Rechercher" })
          ]
        }
      ),
      /* @__PURE__ */ f(
        "button",
        {
          onClick: () => e("/passenger/bookings"),
          className: "flex flex-col items-center gap-1 text-gray-400",
          children: [
            /* @__PURE__ */ l(it, { className: "w-6 h-6" }),
            /* @__PURE__ */ l("span", { className: "text-xs", children: "Réservations" })
          ]
        }
      ),
      /* @__PURE__ */ f(
        "button",
        {
          onClick: () => e("/profile"),
          className: "flex flex-col items-center gap-1 text-gray-400",
          children: [
            /* @__PURE__ */ l(pt, { className: "w-6 h-6" }),
            /* @__PURE__ */ l("span", { className: "text-xs", children: "Profil" })
          ]
        }
      )
    ] })
  ] });
}
function Uy() {
  const e = Pe(), [t, n] = Q(""), [r, i] = Q(""), [a, s] = Q(""), [sortBy, setSortBy] = Q("soonest"), [sortMenuOpen, setSortMenuOpen] = Q(!1), [d, u] = Q([]), [searchLoading, setSearchLoading] = Q(!0), [searchError, setSearchError] = Q(""), [searchSubmitting, setSearchSubmitting] = Q(!1), [bookingTripId, setBookingTripId] = Q(null), sortOptions = [
    { value: "soonest", label: "Depart le plus proche" },
    { value: "latest", label: "Depart le plus tard" },
    { value: "price_asc", label: "Prix croissant" },
    { value: "price_desc", label: "Prix decroissant" },
    { value: "seats_desc", label: "Plus de places" }
  ], activeSortLabel = sortOptions.find((h) => h.value === sortBy)?.label ?? "Depart le plus proche", loadTrips = async (h = !1, mSort = sortBy, filters = {
    from: t,
    to: r,
    date: a
  }) => {
    const m = shareRideGetSession();
    if (!m?.token) {
      e("/login?type=passenger");
      return;
    }
    if (m.user?.role && m.user.role !== "passenger") {
      e(m.user.role === "driver" ? "/driver/dashboard" : "/");
      return;
    }
    h ? setSearchSubmitting(!0) : setSearchLoading(!0), setSearchError("");
    try {
      const b = new URLSearchParams();
      filters.from.trim() && b.set("from", filters.from.trim()), filters.to.trim() && b.set("to", filters.to.trim()), filters.date && b.set("date", filters.date), mSort && b.set("sort", mSort);
      const k = b.toString(), p = await shareRideApiRequest(`/passenger/trips${k ? `?${k}` : ""}`, {
        token: m.token
      }), x = Array.isArray(p?.data) ? p.data.map((y) => ({
        id: y.id,
        driver: {
          name: y?.driver?.name ?? "Conducteur",
          rating: y?.driver?.rating ?? "-",
          trips: y?.driver?.trips ?? 0,
          avatar: y?.driver?.avatar ?? (y?.driver?.name ? y.driver.name.charAt(0).toUpperCase() : "C")
        },
        from: y.from ?? "Non defini",
        to: y.to ?? "Non defini",
        departureTime: y.departureTime ?? "--:--",
        arrivalTime: y.arrivalTime ?? "--:--",
        date: y.date ?? "Non defini",
        price: y.price ?? "0",
        seatsAvailable: Number(y.seatsAvailable ?? 0),
        vehicleType: y.vehicleType ?? "Vehicule",
        vehicleModel: y.vehicleModel ?? "Vehicule",
        amenities: Array.isArray(y.amenities) ? y.amenities : [],
        durationMinutes: y.durationMinutes
      })) : [];
      u(x);
    } catch (b) {
      const k = b instanceof Error ? b.message : "Impossible de charger les trajets.";
      if (k.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=passenger");
        return;
      }
      setSearchError(k);
    } finally {
      h ? setSearchSubmitting(!1) : setSearchLoading(!1);
    }
  }, reserveTrip = async (h, m) => {
    m.stopPropagation();
    const b = shareRideGetSession();
    if (!b?.token) {
      e("/login?type=passenger");
      return;
    }
    setSearchError(""), setBookingTripId(h);
    try {
      await shareRideApiRequest("/passenger/bookings", {
        method: "POST",
        token: b.token,
        body: {
          trip_id: h
        }
      }), e("/passenger/bookings");
    } catch (k) {
      const p = k instanceof Error ? k.message : "Reservation impossible.";
      if (p.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=passenger");
        return;
      }
      setSearchError(p);
    } finally {
      setBookingTripId(null);
    }
  }, applySort = (h) => {
    setSortBy(h), setSortMenuOpen(!1), loadTrips(!0, h);
  }, handleSearchEnter = (h) => {
    h.key === "Enter" && (h.preventDefault(), loadTrips(!0));
  }, resetFilters = () => {
    n(""), i(""), s(""), loadTrips(!0, sortBy, {
      from: "",
      to: "",
      date: ""
    });
  };
  _e(() => {
    loadTrips();
  }, [e]);
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6", children: [
      /* @__PURE__ */ f("div", { className: "flex items-center gap-4 mb-6", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => e("/passenger/dashboard"),
            className: "hover:bg-white/20 p-2 rounded-lg transition-colors",
            children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ f("div", { children: [
          /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Rechercher un trajet" }),
          /* @__PURE__ */ l("p", { className: "text-blue-100 text-sm", children: "Trouvez le trajet parfait" })
        ] })
      ] }),
      /* @__PURE__ */ f("div", { className: "space-y-3", children: [
        /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-3 flex items-center gap-3", children: [
          /* @__PURE__ */ l("div", { className: "w-3 h-3 rounded-full bg-green-500" }),
          /* @__PURE__ */ l(
            "input",
            {
              type: "text",
              value: t,
              onChange: (h) => n(h.target.value),
              onKeyDown: handleSearchEnter,
              placeholder: "Point de départ",
              className: "flex-1 outline-none text-gray-800"
            }
          )
        ] }),
        /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-3 flex items-center gap-3", children: [
          /* @__PURE__ */ l("div", { className: "w-3 h-3 rounded-full bg-red-500" }),
          /* @__PURE__ */ l(
            "input",
            {
              type: "text",
              value: r,
              onChange: (h) => i(h.target.value),
              onKeyDown: handleSearchEnter,
              placeholder: "Destination",
              className: "flex-1 outline-none text-gray-800"
            }
          )
        ] }),
        /* @__PURE__ */ f("div", { className: "grid grid-cols-3 gap-2", children: [
          /* @__PURE__ */ f("div", { className: "col-span-2 bg-white rounded-xl p-3 flex items-center gap-2", children: [
            /* @__PURE__ */ l(it, { className: "w-5 h-5 text-gray-400" }),
            /* @__PURE__ */ l(
              "input",
              {
                type: "date",
                value: a,
                onChange: (h) => s(h.target.value),
                onKeyDown: handleSearchEnter,
                className: "flex-1 outline-none text-gray-800 text-sm"
              }
            )
          ] }),
          /* @__PURE__ */ l(
            "button",
            {
              onClick: resetFilters,
              className: "bg-white rounded-xl p-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors",
              children: /* @__PURE__ */ l(zf, { className: "w-5 h-5 text-gray-700" })
            }
          )
        ] }),
        /* @__PURE__ */ f(
          "button",
          {
            onClick: () => loadTrips(!0),
            disabled: searchSubmitting,
            className: "w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50",
            children: [
              /* @__PURE__ */ l(ei, { className: "w-5 h-5" }),
              searchSubmitting ? "Recherche..." : "Rechercher"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ f("div", { className: "p-6", children: [
      /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ f("h2", { className: "text-lg font-bold text-gray-800", children: [
          d.length,
          " trajets disponibles"
        ] }),
        /* @__PURE__ */ f("div", { className: "relative", children: [
          /* @__PURE__ */ f("button", { onClick: () => setSortMenuOpen((h) => !h), className: "text-sm text-blue-600 font-semibold", children: [
            "Trier: ",
            activeSortLabel
          ] }),
          sortMenuOpen && /* @__PURE__ */ l("div", { className: "absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-10", children: sortOptions.map((h) => /* @__PURE__ */ l(
            "button",
            {
              onClick: () => applySort(h.value),
              className: `w-full text-left px-3 py-2 text-sm hover:bg-gray-50 first:rounded-t-xl last:rounded-b-xl ${sortBy === h.value ? "text-blue-600 font-semibold" : "text-gray-700"}`,
              children: h.label
            },
            h.value
          )) })
        ] })
      ] }),
      searchError && /* @__PURE__ */ l("div", { className: "mb-4 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700", children: searchError }),
      searchLoading ? /* @__PURE__ */ f("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ l("div", { className: "w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" }),
        /* @__PURE__ */ l("p", { className: "text-gray-500", children: "Chargement des trajets..." })
      ] }) : d.length === 0 ? /* @__PURE__ */ f("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ l(ul, { className: "w-16 h-16 mx-auto text-gray-300 mb-4" }),
        /* @__PURE__ */ l("p", { className: "text-gray-500", children: "Aucun trajet disponible pour ces criteres." })
      ] }) : /* @__PURE__ */ l("div", { className: "space-y-4", children: d.map((h, m) => /* @__PURE__ */ f(
        ee.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: m * 0.1 },
          onClick: () => e(`/trip/${h.id}`),
          className: "bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer",
          children: [
            /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ l("div", { className: "bg-gradient-to-br from-blue-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg", children: h.driver.avatar }),
                /* @__PURE__ */ f("div", { children: [
                  /* @__PURE__ */ l("div", { className: "font-bold text-gray-800", children: h.driver.name }),
                  /* @__PURE__ */ f("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
                    /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ l(We, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }),
                      /* @__PURE__ */ l("span", { children: h.driver.rating })
                    ] }),
                    /* @__PURE__ */ l("span", { children: "•" }),
                    /* @__PURE__ */ f("span", { children: [
                      h.driver.trips,
                      " trajets"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ f("div", { className: "text-right", children: [
                /* @__PURE__ */ l("div", { className: "text-2xl font-bold text-blue-600", children: h.price }),
                /* @__PURE__ */ l("div", { className: "text-xs text-gray-500", children: "FCFA" })
              ] })
            ] }),
            /* @__PURE__ */ l("div", { className: "mb-4", children: /* @__PURE__ */ f("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ f("div", { className: "flex flex-col items-center gap-1 mt-1", children: [
                /* @__PURE__ */ l("div", { className: "w-2 h-2 rounded-full bg-green-500" }),
                /* @__PURE__ */ l("div", { className: "w-0.5 h-12 bg-gray-300" }),
                /* @__PURE__ */ l("div", { className: "w-2 h-2 rounded-full bg-red-500" })
              ] }),
              /* @__PURE__ */ f("div", { className: "flex-1", children: [
                /* @__PURE__ */ f("div", { className: "mb-3", children: [
                  /* @__PURE__ */ l("div", { className: "font-semibold text-gray-800", children: h.from }),
                  /* @__PURE__ */ l("div", { className: "text-sm text-gray-600", children: h.departureTime })
                ] }),
                /* @__PURE__ */ f("div", { children: [
                  /* @__PURE__ */ l("div", { className: "font-semibold text-gray-800", children: h.to }),
                  /* @__PURE__ */ l("div", { className: "text-sm text-gray-600", children: h.arrivalTime })
                ] })
              ] }),
              /* @__PURE__ */ l("div", { className: "text-right text-sm text-gray-500", children: h.durationMinutes != null ? `~${h.durationMinutes}min` : "Duree variable" })
            ] }) }),
            /* @__PURE__ */ f("div", { className: "flex items-center justify-between pt-3 border-t border-gray-100", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-3 text-sm", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1 text-gray-600", children: [
                  /* @__PURE__ */ l(mt, { className: "w-4 h-4" }),
                  /* @__PURE__ */ l("span", { children: h.vehicleModel })
                ] }),
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1 text-gray-600", children: [
                  /* @__PURE__ */ l(Gt, { className: "w-4 h-4" }),
                  /* @__PURE__ */ f("span", { children: [
                    h.seatsAvailable,
                    " places"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: (g) => reserveTrip(h.id, g),
                  disabled: bookingTripId === h.id || h.seatsAvailable <= 0,
                  className: "bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                  children: bookingTripId === h.id ? "Reservation..." : h.seatsAvailable <= 0 ? "Complet" : "Reserver"
                }
              )
            ] }),
            h.amenities.length > 0 && /* @__PURE__ */ l("div", { className: "flex gap-2 mt-3 pt-3 border-t border-gray-100", children: h.amenities.map((g) => /* @__PURE__ */ l(
              "span",
              {
                className: "text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full",
                children: g
              },
              g
            )) })
          ]
        },
        h.id
      )) })
    ] }),
    /* @__PURE__ */ f("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around", children: [
      /* @__PURE__ */ f(
        "button",
        {
          onClick: () => e("/passenger/dashboard"),
          className: "flex flex-col items-center gap-1 text-gray-400",
          children: [
            /* @__PURE__ */ l(rt, { className: "w-6 h-6" }),
            /* @__PURE__ */ l("span", { className: "text-xs", children: "Accueil" })
          ]
        }
      ),
      /* @__PURE__ */ f("button", { className: "flex flex-col items-center gap-1 text-blue-600", children: [
        /* @__PURE__ */ l(ei, { className: "w-6 h-6" }),
        /* @__PURE__ */ l("span", { className: "text-xs font-semibold", children: "Rechercher" })
      ] }),
      /* @__PURE__ */ f(
        "button",
        {
          onClick: () => e("/passenger/bookings"),
          className: "flex flex-col items-center gap-1 text-gray-400",
          children: [
            /* @__PURE__ */ l(it, { className: "w-6 h-6" }),
            /* @__PURE__ */ l("span", { className: "text-xs", children: "Reservations" })
          ]
        }
      ),
      /* @__PURE__ */ f(
        "button",
        {
          onClick: () => e("/profile"),
          className: "flex flex-col items-center gap-1 text-gray-400",
          children: [
            /* @__PURE__ */ l(pt, { className: "w-6 h-6" }),
            /* @__PURE__ */ l("span", { className: "text-xs", children: "Profil" })
          ]
        }
      )
    ] })
  ] });
}
function zy() {
  const e = Pe(), [t, n] = Q("all"), [r, i] = Q([]), [bookingsCounts, setBookingsCounts] = Q({
    all: 0,
    upcoming: 0,
    completed: 0,
    cancelled: 0
  }), [bookingsLoading, setBookingsLoading] = Q(!0), [bookingsRefreshing, setBookingsRefreshing] = Q(!1), [bookingsError, setBookingsError] = Q(""), [cancelBookingId, setCancelBookingId] = Q(null), [completionActionKey, setCompletionActionKey] = Q(null), [ratingModalBooking, setRatingModalBooking] = Q(null), [ratingValue, setRatingValue] = Q(5), [ratingComment, setRatingComment] = Q(""), [ratingSubmitting, setRatingSubmitting] = Q(!1), computeLocalCounts = (a) => ({
    all: a.length,
    upcoming: a.filter((s) => s.status === "upcoming").length,
    completed: a.filter((s) => s.status === "completed").length,
    cancelled: a.filter((s) => s.status === "cancelled").length
  }), loadBookings = async (a = !1) => {
    const s = shareRideGetSession();
    if (!s?.token) {
      e("/login?type=passenger");
      return;
    }
    if (s.user?.role && s.user.role !== "passenger") {
      e(s.user.role === "driver" ? "/driver/dashboard" : "/");
      return;
    }
    a ? setBookingsLoading(!0) : setBookingsRefreshing(!0), setBookingsError("");
    try {
      const o = new URLSearchParams();
      t !== "all" && o.set("status", t);
      const c = o.toString(), d = await shareRideApiRequest(`/passenger/bookings${c ? `?${c}` : ""}`, {
        token: s.token
      }), u = Array.isArray(d?.data) ? d.data.map((h) => ({
        id: h.id,
        tripId: h.trip_id ?? h.id,
        driver: {
          name: h?.driver?.name ?? "Conducteur",
          rating: h?.driver?.rating ?? "-",
          avatar: h?.driver?.avatar ?? (h?.driver?.name ? h.driver.name.charAt(0).toUpperCase() : "C")
        },
        from: h.from ?? "Non defini",
        to: h.to ?? "Non defini",
        date: h.date ?? "Non defini",
        time: h.time ?? "--:--",
        price: h.price ?? "0",
        status: h.status ?? "upcoming",
        vehicle: h.vehicle ?? "Vehicule",
        canCancel: h.can_cancel !== !1 && (h.status ?? "upcoming") === "upcoming",
        canRate: h.can_rate !== !1 && (h.status ?? "upcoming") === "completed",
        canConfirmCompletion: h.can_confirm_completion === !0,
        completionConfirmationStatus: h.completion_confirmation_status ?? null,
        completionConfirmedAt: h.completion_confirmed_at ?? null,
        payoutStatus: h.payout_status ?? null,
        payoutAmountFcfa: h.payout_amount_fcfa != null ? Number(h.payout_amount_fcfa) : null,
        passengerRating: h.passenger_rating != null ? Number(h.passenger_rating) : null,
        passengerReview: h.passenger_review ?? ""
      })) : [], h = d?.meta?.counts ?? {}, m = computeLocalCounts(u);
      i(u), setBookingsCounts({
        all: Number(h.all ?? m.all),
        upcoming: Number(h.upcoming ?? m.upcoming),
        completed: Number(h.completed ?? m.completed),
        cancelled: Number(h.cancelled ?? m.cancelled)
      });
    } catch (o) {
      const c = o instanceof Error ? o.message : "Impossible de charger vos reservations.";
      if (c.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=passenger");
        return;
      }
      setBookingsError(c);
    } finally {
      a ? setBookingsLoading(!1) : setBookingsRefreshing(!1);
    }
  }, cancelBooking = async (a, s) => {
    s.stopPropagation();
    if (!window.confirm("Confirmer l'annulation de cette reservation ?"))
      return;
    const o = shareRideGetSession();
    if (!o?.token) {
      e("/login?type=passenger");
      return;
    }
    setBookingsError(""), setCancelBookingId(a);
    try {
      await shareRideApiRequest(`/passenger/bookings/${a}/cancel`, {
        method: "PATCH",
        token: o.token
      }), await loadBookings();
    } catch (c) {
      const d = c instanceof Error ? c.message : "Annulation impossible.";
      if (d.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=passenger");
        return;
      }
      setBookingsError(d);
    } finally {
      setCancelBookingId(null);
    }
  }, confirmCompletion = async (a, s, o) => {
    o.stopPropagation();
    const c = shareRideGetSession();
    if (!c?.token) {
      e("/login?type=passenger");
      return;
    }
    setBookingsError(""), setCompletionActionKey(`${a}:${s}`);
    try {
      await shareRideApiRequest(`/passenger/bookings/${a}/completion-confirmation`, {
        method: "PATCH",
        token: c.token,
        body: {
          decision: s
        }
      }), await loadBookings();
    } catch (d) {
      const u = d instanceof Error ? d.message : "Confirmation impossible.";
      if (u.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=passenger");
        return;
      }
      setBookingsError(u);
    } finally {
      setCompletionActionKey(null);
    }
  }, openRatingModal = (a, s) => {
    s.stopPropagation(), setRatingModalBooking(a), setRatingValue(a.passengerRating ?? 5), setRatingComment(a.passengerReview ?? "");
  }, closeRatingModal = () => {
    setRatingModalBooking(null), setRatingValue(5), setRatingComment("");
  }, submitRating = async () => {
    if (!ratingModalBooking?.id)
      return;
    const a = shareRideGetSession();
    if (!a?.token) {
      e("/login?type=passenger");
      return;
    }
    setBookingsError(""), setRatingSubmitting(!0);
    try {
      await shareRideApiRequest(`/passenger/bookings/${ratingModalBooking.id}/rating`, {
        method: "PATCH",
        token: a.token,
        body: {
          rating: ratingValue,
          comment: ratingComment.trim() || null
        }
      }), closeRatingModal(), await loadBookings();
    } catch (s) {
      const o = s instanceof Error ? s.message : "Notation impossible.";
      if (o.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=passenger");
        return;
      }
      setBookingsError(o);
    } finally {
      setRatingSubmitting(!1);
    }
  };
  _e(() => {
    loadBookings(r.length === 0);
  }, [e, t]);
  const bookingItems = r, tabs = [
    { value: "all", label: "Tous" },
    { value: "upcoming", label: "A venir" },
    { value: "completed", label: "Termines" },
    { value: "cancelled", label: "Annules" }
  ], emptyMessage = t === "upcoming" ? "Aucune reservation a venir." : t === "completed" ? "Aucune reservation terminee." : t === "cancelled" ? "Aucune reservation annulee." : "Aucune reservation trouvee.";
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6", children: [
      /* @__PURE__ */ f("div", { className: "flex items-center gap-4 mb-6", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => e("/passenger/dashboard"),
            className: "hover:bg-white/20 p-2 rounded-lg transition-colors",
            children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ f("div", { children: [
          /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Mes reservations" }),
          /* @__PURE__ */ l("p", { className: "text-blue-100 text-sm", children: "Gerez vos trajets" }),
          bookingsRefreshing && !bookingsLoading && /* @__PURE__ */ l("p", { className: "text-xs text-blue-100 mt-1", children: "Mise a jour en cours..." })
        ] })
      ] }),
      /* @__PURE__ */ l("div", { className: "bg-white/10 p-1 rounded-xl overflow-x-auto", children: /* @__PURE__ */ l("div", { className: "flex gap-2 min-w-max", children: tabs.map((a) => /* @__PURE__ */ l(
        "button",
        {
          onClick: () => n(a.value),
          className: `px-3 py-2 rounded-lg font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${t === a.value ? "bg-white text-blue-600 shadow" : "text-white/85 hover:bg-white/10"}`,
          children: [
            /* @__PURE__ */ l("span", { className: "text-sm", children: a.label }),
            /* @__PURE__ */ l("span", { className: `text-[10px] px-1.5 py-0.5 rounded-full ${t === a.value ? "bg-blue-100 text-blue-700" : "bg-white/20 text-white"}`, children: bookingsCounts[a.value] ?? 0 })
          ]
        },
        a.value
      )) }) })
    ] }),
    /* @__PURE__ */ f("div", { className: "p-6 space-y-4", children: [
      bookingsError && /* @__PURE__ */ l("div", { className: "bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700", children: bookingsError }),
      bookingsLoading ? /* @__PURE__ */ f("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ l("div", { className: "w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" }),
        /* @__PURE__ */ l("p", { className: "text-gray-500", children: "Chargement de vos reservations..." })
      ] }) : bookingItems.length === 0 ? /* @__PURE__ */ f("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ l(ul, { className: "w-16 h-16 mx-auto text-gray-300 mb-4" }),
        /* @__PURE__ */ l("p", { className: "text-gray-500", children: emptyMessage })
      ] }) : bookingItems.map((a, s) => /* @__PURE__ */ f(
        ee.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: s * 0.05 },
          onClick: () => e(`/trip/${a.tripId}`),
          className: `bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer ${a.status === "upcoming" ? "border-2 border-blue-200" : ""}`,
          children: [
            /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ l("div", { className: "bg-gradient-to-br from-blue-600 to-cyan-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold", children: a.driver.avatar }),
                /* @__PURE__ */ f("div", { children: [
                  /* @__PURE__ */ l("div", { className: "font-bold text-gray-800", children: a.driver.name }),
                  /* @__PURE__ */ f("div", { className: "flex items-center gap-1 text-sm text-gray-600", children: [
                    /* @__PURE__ */ l(We, { className: "w-3 h-3 fill-yellow-400 text-yellow-400" }),
                    /* @__PURE__ */ l("span", { children: a.driver.rating }),
                    /* @__PURE__ */ l("span", { className: "mx-1", children: "•" }),
                    /* @__PURE__ */ l("span", { children: a.vehicle })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ f("div", { className: "text-right", children: [
                /* @__PURE__ */ l("div", { className: "text-xl font-bold text-blue-600", children: a.price }),
                /* @__PURE__ */ l("div", { className: "text-xs text-gray-500", children: "FCFA" })
              ] })
            ] }),
            /* @__PURE__ */ f("div", { className: "flex items-start gap-2 mb-3", children: [
              /* @__PURE__ */ f("div", { className: "flex flex-col items-center gap-1 mt-1", children: [
                /* @__PURE__ */ l("div", { className: "w-2 h-2 rounded-full bg-green-500" }),
                /* @__PURE__ */ l("div", { className: "w-0.5 h-8 bg-gray-300" }),
                /* @__PURE__ */ l("div", { className: "w-2 h-2 rounded-full bg-red-500" })
              ] }),
              /* @__PURE__ */ f("div", { className: "flex-1", children: [
                /* @__PURE__ */ l("div", { className: "font-semibold text-gray-800 mb-2", children: a.from }),
                /* @__PURE__ */ l("div", { className: "font-semibold text-gray-800", children: a.to })
              ] })
            ] }),
            /* @__PURE__ */ f("div", { className: "flex items-center justify-between pt-3 border-t border-gray-100", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-3 text-sm text-gray-600", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ l(it, { className: "w-4 h-4" }),
                  /* @__PURE__ */ l("span", { children: a.date })
                ] }),
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ l(Fn, { className: "w-4 h-4" }),
                  /* @__PURE__ */ l("span", { children: a.time })
                ] })
              ] }),
              /* @__PURE__ */ l(
                "span",
                {
                  className: `text-xs px-3 py-1 rounded-full font-semibold ${a.status === "completed" ? "bg-gray-100 text-gray-600" : a.status === "cancelled" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`,
                  children: a.status === "completed" ? "Termine" : a.status === "cancelled" ? "Annule" : "A venir"
                }
              )
            ] }),
            a.status === "upcoming" && a.canCancel && /* @__PURE__ */ f("div", { className: "flex gap-2 mt-3 pt-3 border-t border-gray-100", children: [
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: (o) => {
                    o.stopPropagation(), e(`/trip/${a.tripId}`);
                  },
                  className: "flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors",
                  children: "Voir details"
                }
              ),
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: (o) => cancelBooking(a.id, o),
                  disabled: cancelBookingId === a.id,
                  className: "flex-1 bg-red-50 text-red-600 py-2 rounded-lg text-sm font-semibold hover:bg-red-100 transition-colors disabled:opacity-50",
                  children: cancelBookingId === a.id ? "Annulation..." : "Annuler"
                }
              )
            ] }),
            a.status === "completed" && /* @__PURE__ */ f("div", { className: "mt-3 pt-3 border-t border-gray-100 space-y-2", children: [
              a.canConfirmCompletion && /* @__PURE__ */ f("div", { className: "bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800", children: [
                /* @__PURE__ */ l("p", { className: "font-semibold mb-2", children: "Le conducteur a indique que la course est terminee." }),
                /* @__PURE__ */ l("p", { className: "mb-2", children: "Confirmez-vous la fin de cette course ?" }),
                /* @__PURE__ */ f("div", { className: "flex gap-2", children: [
                  /* @__PURE__ */ l(
                    "button",
                    {
                      onClick: (o) => confirmCompletion(a.id, "yes", o),
                      disabled: completionActionKey === `${a.id}:yes` || completionActionKey === `${a.id}:no`,
                      className: "flex-1 bg-green-600 text-white py-2 rounded-lg text-xs font-semibold disabled:opacity-50",
                      children: completionActionKey === `${a.id}:yes` ? "Validation..." : "Oui"
                    }
                  ),
                  /* @__PURE__ */ l(
                    "button",
                    {
                      onClick: (o) => confirmCompletion(a.id, "no", o),
                      disabled: completionActionKey === `${a.id}:yes` || completionActionKey === `${a.id}:no`,
                      className: "flex-1 bg-red-600 text-white py-2 rounded-lg text-xs font-semibold disabled:opacity-50",
                      children: completionActionKey === `${a.id}:no` ? "Envoi..." : "Non"
                    }
                  )
                ] })
              ] }),
              !a.canConfirmCompletion && a.completionConfirmationStatus && /* @__PURE__ */ f("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-700", children: [
                /* @__PURE__ */ l("p", { children: a.completionConfirmationStatus === "confirmed" ? "Fin de course confirmee." : a.completionConfirmationStatus === "rejected" ? "Fin de course contestee." : "Confirmation en attente." }),
                a.payoutAmountFcfa != null && /* @__PURE__ */ f("p", { className: "mt-1", children: [
                  "Montant conducteur (montant passager - 5%): ",
                  a.payoutAmountFcfa,
                  " FCFA"
                ] })
              ] }),
              a.passengerRating != null && /* @__PURE__ */ f("div", { className: "text-sm text-gray-700", children: [
                "Votre note: ",
                a.passengerRating,
                "/5",
                a.passengerReview ? ` - ${a.passengerReview}` : ""
              ] }),
              a.canRate && /* @__PURE__ */ l(
                "button",
                {
                  onClick: (o) => openRatingModal(a, o),
                  className: "w-full bg-gray-50 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2",
                  children: a.passengerRating != null ? "Modifier ma note" : "Noter ce trajet"
                }
              )
            ] })
          ]
        },
        a.id
      ))
    ] }),
    ratingModalBooking && /* @__PURE__ */ l("div", { className: "fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4", children: /* @__PURE__ */ f("div", { className: "bg-white rounded-2xl w-full max-w-md p-5", children: [
      /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ l("h3", { className: "text-lg font-bold text-gray-800", children: "Noter ce trajet" }),
        /* @__PURE__ */ l("button", { onClick: closeRatingModal, className: "text-gray-500 hover:text-gray-700", children: "Fermer" })
      ] }),
      /* @__PURE__ */ l("p", { className: "text-sm text-gray-600 mb-3", children: `${ratingModalBooking.from} -> ${ratingModalBooking.to}` }),
      /* @__PURE__ */ l("div", { className: "flex items-center gap-2 mb-4", children: [1, 2, 3, 4, 5].map((a) => /* @__PURE__ */ l(
        "button",
        {
          onClick: () => setRatingValue(a),
          className: "p-1",
          children: /* @__PURE__ */ l(We, { className: `w-7 h-7 ${a <= ratingValue ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}` })
        },
        a
      )) }),
      /* @__PURE__ */ l("textarea", { value: ratingComment, onChange: (a) => setRatingComment(a.target.value), rows: 4, maxLength: 1000, placeholder: "Commentaire (optionnel)", className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" }),
      /* @__PURE__ */ f("div", { className: "flex gap-2 mt-4", children: [
        /* @__PURE__ */ l("button", { onClick: closeRatingModal, disabled: ratingSubmitting, className: "flex-1 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 disabled:opacity-50", children: "Annuler" }),
        /* @__PURE__ */ l("button", { onClick: submitRating, disabled: ratingSubmitting, className: "flex-1 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 disabled:opacity-50", children: ratingSubmitting ? "Envoi..." : "Envoyer" })
      ] })
    ] }) }),
    /* @__PURE__ */ f("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around", children: [
      /* @__PURE__ */ f(
        "button",
        {
          onClick: () => e("/passenger/dashboard"),
          className: "flex flex-col items-center gap-1 text-gray-400",
          children: [
            /* @__PURE__ */ l(rt, { className: "w-6 h-6" }),
            /* @__PURE__ */ l("span", { className: "text-xs", children: "Accueil" })
          ]
        }
      ),
      /* @__PURE__ */ f(
        "button",
        {
          onClick: () => e("/passenger/search"),
          className: "flex flex-col items-center gap-1 text-gray-400",
          children: [
            /* @__PURE__ */ l(ei, { className: "w-6 h-6" }),
            /* @__PURE__ */ l("span", { className: "text-xs", children: "Rechercher" })
          ]
        }
      ),
      /* @__PURE__ */ f("button", { className: "flex flex-col items-center gap-1 text-blue-600", children: [
        /* @__PURE__ */ l(it, { className: "w-6 h-6" }),
        /* @__PURE__ */ l("span", { className: "text-xs font-semibold", children: "Reservations" })
      ] }),
      /* @__PURE__ */ f(
        "button",
        {
          onClick: () => e("/profile"),
          className: "flex flex-col items-center gap-1 text-gray-400",
          children: [
            /* @__PURE__ */ l(pt, { className: "w-6 h-6" }),
            /* @__PURE__ */ l("span", { className: "text-xs", children: "Profil" })
          ]
        }
      )
    ] })
  ] });
}
function Hy() {
  const e = Pe(), { id: t } = Qo(), [n, r] = Q(!0), [i, a] = Q(""), [s, o] = Q(null), [d, u] = Q(!1), [contactingDriver, setContactingDriver] = Q(!1), h = async () => {
    const g = shareRideGetSession();
    if (!g?.token) {
      e("/login?type=passenger");
      return;
    }
    if (g.user?.role && g.user.role !== "passenger") {
      e(g.user.role === "driver" ? "/driver/dashboard" : "/");
      return;
    }
    r(!0), a("");
    try {
      const v = await shareRideApiRequest(`/passenger/trips/${t}`, {
        token: g.token
      });
      o(v?.trip ?? null);
    } catch (v) {
      const N = v instanceof Error ? v.message : "Impossible de charger ce trajet.";
      if (N.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=passenger");
        return;
      }
      a(N);
    } finally {
      r(!1);
    }
  }, m = async () => {
    if (!s?.id || !s?.can_book)
      return;
    const g = shareRideGetSession();
    if (!g?.token) {
      e("/login?type=passenger");
      return;
    }
    u(!0), a("");
    try {
      await shareRideApiRequest("/passenger/bookings", {
        method: "POST",
        token: g.token,
        body: {
          trip_id: s.id
        }
      }), e("/passenger/bookings");
    } catch (v) {
      const N = v instanceof Error ? v.message : "Reservation impossible.";
      if (N.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=passenger");
        return;
      }
      a(N), await h();
    } finally {
      u(!1);
    }
  }, openChatWithDriver = async () => {
    const g = shareRideGetSession();
    if (!g?.token) {
      e("/login?type=passenger");
      return;
    }
    const v = Number(s?.driver?.id ?? 0), N = Number(s?.id ?? 0), P = s?.passenger_booking?.status;
    if (!v || !N || !s?.passenger_booking?.id || P === "cancelled") {
      a("Reservez d'abord ce trajet pour discuter avec le conducteur.");
      return;
    }
    setContactingDriver(!0), a("");
    try {
      const T = await shareRideApiRequest("/chat/conversations", {
        method: "POST",
        token: g.token,
        body: {
          target_user_id: v,
          trip_id: N
        }
      }), w = T?.conversation?.id;
      if (!w)
        throw new Error("Conversation indisponible.");
      e(`/chat/${w}`);
    } catch (T) {
      const w = T instanceof Error ? T.message : "Impossible d'ouvrir la conversation.";
      if (w.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=passenger");
        return;
      }
      a(w);
    } finally {
      setContactingDriver(!1);
    }
  };
  _e(() => {
    h();
  }, [e, t]);
  const b = s?.driver?.isVerified === !0, k = s?.passenger_booking?.status ?? null, p = s?.can_book === !0, x = d ? "Reservation..." : k && k !== "cancelled" ? k === "upcoming" ? "Deja reserve" : k === "completed" ? "Trajet termine" : "Reservation active" : !s ? "Indisponible" : (s?.seatsAvailable ?? 0) <= 0 ? "Complet" : s?.status !== "scheduled" ? "Indisponible" : p ? "Reserver maintenant" : "Reservation indisponible", y = n || !s || !p || d, g = s?.durationMinutes != null ? `~${s.durationMinutes} minutes` : "Duree variable", v = s?.driver?.avatar ?? (s?.driver?.name ? s.driver.name.charAt(0).toUpperCase() : "C"), N = s?.from?.location ?? "Non defini", P = s?.from?.address ?? N, T = s?.from?.time ?? "--:--", w = s?.to?.location ?? "Non defini", C = s?.to?.address ?? w, E = s?.to?.time ?? "--:--", A = s?.vehicle?.model ?? "Vehicule", L = s?.vehicle?.color ?? "Non precise", R = s?.vehicle?.plate ?? "Non renseignee", S = Array.isArray(s?.amenities) ? s.amenities : [], canMessageDriver = !!s?.driver?.id && !!s?.passenger_booking?.id && s?.passenger_booking?.status !== "cancelled";
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-24", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => e(-1),
          className: "hover:bg-white/20 p-2 rounded-lg transition-colors mb-4",
          children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Détails du trajet" })
    ] }),
    /* @__PURE__ */ f("div", { className: "relative h-48 bg-gradient-to-br from-blue-100 to-cyan-100", children: [
      /* @__PURE__ */ l("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ f("div", { className: "text-center", children: [
        /* @__PURE__ */ l(rt, { className: "w-12 h-12 text-blue-600 mx-auto mb-2" }),
        /* @__PURE__ */ l("p", { className: "text-sm text-gray-600", children: "Carte du trajet" })
      ] }) }),
      /* @__PURE__ */ l("div", { className: "absolute top-1/4 left-1/4 w-3 h-3 bg-green-500 rounded-full shadow-lg" }),
      /* @__PURE__ */ l("div", { className: "absolute bottom-1/4 right-1/4 w-3 h-3 bg-red-500 rounded-full shadow-lg" }),
      /* @__PURE__ */ l("svg", { className: "absolute inset-0 w-full h-full pointer-events-none", children: /* @__PURE__ */ l(
        "line",
        {
          x1: "25%",
          y1: "25%",
          x2: "75%",
          y2: "75%",
          stroke: "#3B82F6",
          strokeWidth: "2",
          strokeDasharray: "5,5"
        }
      ) })
    ] }),
    /* @__PURE__ */ f("div", { className: "p-6 space-y-4", children: [
      i && /* @__PURE__ */ l("div", { className: "bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700", children: i }),
      n ? /* @__PURE__ */ f("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ l("div", { className: "w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" }),
        /* @__PURE__ */ l("p", { className: "text-gray-500", children: "Chargement du trajet..." })
      ] }) : !s ? /* @__PURE__ */ l("div", { className: "bg-white rounded-xl p-6 shadow-sm text-center", children: /* @__PURE__ */ f("div", { className: "space-y-3", children: [
        /* @__PURE__ */ l("p", { className: "text-gray-600", children: "Ce trajet est indisponible pour le moment." }),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: h,
            className: "bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors",
            children: "Reessayer"
          }
        )
      ] }) }) : /* @__PURE__ */ f(Xr, { children: [
        /* @__PURE__ */ l("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: /* @__PURE__ */ f("div", { className: "space-y-4", children: [
          /* @__PURE__ */ f("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ f("div", { className: "flex flex-col items-center gap-1 mt-1", children: [
              /* @__PURE__ */ l("div", { className: "w-3 h-3 rounded-full bg-green-500" }),
              /* @__PURE__ */ l("div", { className: "w-0.5 h-16 bg-gray-300" }),
              /* @__PURE__ */ l("div", { className: "w-3 h-3 rounded-full bg-red-500" })
            ] }),
            /* @__PURE__ */ f("div", { className: "flex-1 space-y-4", children: [
              /* @__PURE__ */ f("div", { children: [
                /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-1", children: [
                  /* @__PURE__ */ l("span", { className: "font-bold text-gray-800", children: N }),
                  /* @__PURE__ */ l("span", { className: "text-sm text-gray-600", children: T })
                ] }),
                /* @__PURE__ */ l("p", { className: "text-sm text-gray-500", children: P })
              ] }),
              /* @__PURE__ */ f("div", { children: [
                /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-1", children: [
                  /* @__PURE__ */ l("span", { className: "font-bold text-gray-800", children: w }),
                  /* @__PURE__ */ l("span", { className: "text-sm text-gray-600", children: E })
                ] }),
                /* @__PURE__ */ l("p", { className: "text-sm text-gray-500", children: C })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ f("div", { className: "pt-3 border-t border-gray-100 flex items-center justify-between", children: [
            /* @__PURE__ */ l("span", { className: "text-sm text-gray-600", children: s.date ?? "Non defini" }),
            /* @__PURE__ */ l("span", { className: "text-sm text-gray-600", children: g })
          ] })
        ] }) }),
        /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
          /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-3", children: "Conducteur" }),
          /* @__PURE__ */ l("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ f("div", { className: "bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl relative", children: [
              v,
              b && /* @__PURE__ */ l("div", { className: "absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1", children: /* @__PURE__ */ l(mn, { className: "w-4 h-4 text-white" }) })
            ] }),
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ l("span", { className: "font-bold text-gray-800", children: s.driver?.name ?? "Conducteur" }),
                /* @__PURE__ */ l(
                  "span",
                  {
                    className: `text-xs px-2 py-0.5 rounded-full font-semibold ${b ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`,
                    children: b ? "Verifie" : "Non verifie"
                  }
                )
              ] }),
              /* @__PURE__ */ f("div", { className: "flex items-center gap-1 text-sm text-gray-600 mt-1", children: [
                /* @__PURE__ */ l(We, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }),
                /* @__PURE__ */ l("span", { className: "font-semibold", children: s.driver?.rating ?? "-" }),
                /* @__PURE__ */ l("span", { className: "mx-1", children: "•" }),
                /* @__PURE__ */ f("span", { children: [
                  s.driver?.totalTrips ?? 0,
                  " trajets"
                ] })
              ] }),
              /* @__PURE__ */ f("p", { className: "text-xs text-gray-500 mt-1", children: [
                "Membre depuis ",
                s.driver?.memberSince ?? "-"
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ f("div", { className: "flex gap-2 mt-4", children: [
            /* @__PURE__ */ f("button", { disabled: !0, className: "flex-1 bg-blue-50 text-blue-600 py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 opacity-60 cursor-not-allowed", children: [
              /* @__PURE__ */ l(_i, { className: "w-4 h-4" }),
              "Appeler"
            ] }),
            /* @__PURE__ */ f(
              "button",
              {
                type: "button",
                onClick: openChatWithDriver,
                disabled: contactingDriver || !canMessageDriver || n,
                className: "flex-1 py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors " + (canMessageDriver ? "bg-green-50 text-green-600 hover:bg-green-100" : "bg-gray-100 text-gray-400") + " disabled:opacity-60 disabled:cursor-not-allowed",
                children: [
                  /* @__PURE__ */ l(Lf, { className: "w-4 h-4" }),
                  contactingDriver ? "Ouverture..." : canMessageDriver ? "Message" : "Reservez d'abord"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
          /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-3", children: "Vehicule" }),
          /* @__PURE__ */ f("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ l("div", { className: "bg-blue-100 p-3 rounded-lg", children: /* @__PURE__ */ l(mt, { className: "w-6 h-6 text-blue-600" }) }),
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("div", { className: "font-semibold text-gray-800", children: A }),
              /* @__PURE__ */ f("div", { className: "text-sm text-gray-600", children: [
                L,
                " • ",
                R
              ] })
            ] })
          ] }),
          S.length > 0 ? /* @__PURE__ */ l("div", { className: "flex gap-2 flex-wrap", children: S.map((O) => /* @__PURE__ */ l(
            "span",
            {
              className: "bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full",
              children: O
            },
            O
          )) }) : /* @__PURE__ */ l("p", { className: "text-sm text-gray-500", children: "Aucun service specifie." })
        ] }),
        /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
          /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-2", children: "Description" }),
          /* @__PURE__ */ l("p", { className: "text-gray-600 text-sm", children: s.description ?? "Aucune description." })
        ] }),
        /* @__PURE__ */ l("div", { className: "bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-200", children: /* @__PURE__ */ f("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-1", children: "Places disponibles" }),
            /* @__PURE__ */ f("p", { className: "text-sm text-gray-600", children: [
              s.seatsAvailable ?? 0,
              " sur ",
              s.totalSeats ?? 0,
              " places restantes"
            ] })
          ] }),
          /* @__PURE__ */ l("div", { className: "text-3xl font-bold text-purple-600", children: s.seatsAvailable ?? 0 })
        ] }) }),
        k && k !== "cancelled" && /* @__PURE__ */ l(
          "div",
          {
            className: "bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-700",
            children: k === "upcoming" ? "Vous avez deja reserve ce trajet. Retrouvez-le dans Reservations." : "Vous avez deja une reservation liee a ce trajet."
          }
        ),
        /* @__PURE__ */ l("div", { className: "bg-yellow-50 border border-yellow-200 rounded-xl p-4", children: /* @__PURE__ */ f("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ l(Tn, { className: "w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ f("div", { className: "text-sm text-yellow-800", children: [
            /* @__PURE__ */ l("p", { className: "font-semibold mb-1", children: "Frais de reservation" }),
            /* @__PURE__ */ f("p", { children: [
              "Des frais de reservation de ",
              s.bookingFee ?? 0,
              " FCFA seront appliques. Le montant restant sera paye directement au conducteur."
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ l("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6", children: /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ f("div", { children: [
        /* @__PURE__ */ l("div", { className: "text-sm text-gray-600", children: "Prix par personne" }),
        /* @__PURE__ */ f("div", { className: "text-3xl font-bold text-blue-600", children: [
          s?.price ?? "--",
          " FCFA"
        ] })
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: m,
          disabled: y,
          className: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed",
          children: x
        }
      )
    ] }) })
  ] });
}
function Wy() {
  const e = Pe(), t = He(null), n = shareRideGetSession(), [r, i] = Q(n?.user ?? null), [a, s] = Q(""), [o, c] = Q(""), [d, u] = Q(!1), [h, m] = Q(!1), [b, k] = Q(!1), [p, x] = Q(!1), [avatarPreviewOpen, setAvatarPreviewOpen] = Q(!1), [y, g] = Q({
    name: n?.user?.name ?? "",
    phone: (n?.user?.phone ?? "").replace(/\D+/g, "").slice(-10),
    vehicleType: n?.user?.vehicle_type ?? "",
    vehiclePlate: n?.user?.vehicle_plate ?? ""
  }), [verificationInfo, setVerificationInfo] = Q(n?.user?.latest_verification ?? null), [refreshingVerification, setRefreshingVerification] = Q(!1), [vehicleDocumentsSnapshot, setVehicleDocumentsSnapshot] = Q(null), [vehicleDocumentsType, setVehicleDocumentsType] = Q(null), resolveDriverVehicleType = (M) => {
    const A = String(M ?? "").toLowerCase().trim();
    return A === "moto" || A === "voiture" || A === "minibus" ? A : "voiture";
  }, beninPhonePrefixes = ["0142", "0146", "0150", "0151", "0152", "0153", "0154", "0156", "0157", "0159", "0161", "0162", "0166", "0167", "0169", "0190", "0191", "0196", "0197", "0145", "0155", "0158", "0160", "0163", "0164", "0165", "0168", "0194", "0195", "0198", "0199", "0120", "0121", "0122", "0123", "0124", "0128", "0129", "0140", "0141", "0143", "0144", "0147", "0148", "0149", "0192", "0193"], normalizeBeninPhone = (M) => (M || "").replace(/\D+/g, "").slice(0, 10), isValidBeninPhone = (M) => /^\d{10}$/.test(M) && beninPhonePrefixes.includes(M.slice(0, 4)), v = async () => {
    const M = shareRideGetSession();
    if (!M?.token) {
      e("/login");
      return;
    }
    u(!0), s("");
    try {
      const A = await shareRideApiRequest("/profile", {
        token: M.token
      });
      if (A?.user) {
        i(A.user), g({
          name: A.user.name ?? "",
          phone: (A.user.phone ?? "").replace(/\D+/g, "").slice(-10),
          vehicleType: A.user.vehicle_type ?? "",
          vehiclePlate: A.user.vehicle_plate ?? ""
        }), setVerificationInfo(A.user.latest_verification ?? null), shareRideSaveSession({ token: M.token, user: A.user });
      }
    } catch (A) {
      s(A instanceof Error ? A.message : "Impossible de charger le profil.");
    } finally {
      u(!1);
    }
  }, N = async (M) => {
    M.preventDefault();
    const A = shareRideGetSession();
    if (!A?.token) {
      e("/login");
      return;
    }
    const L = normalizeBeninPhone(y.phone);
    if (!isValidBeninPhone(L)) {
      c(""), s("Numero invalide. Entrez exactement 10 chiffres avec un prefixe mobile beninois autorise."), k(!1);
      return;
    }
    c(""), s(""), k(!0);
    try {
      const R2 = await shareRideApiRequest("/profile", {
        method: "PUT",
        token: A.token,
        body: {
          name: y.name,
          phone: L,
          vehicle_type: r?.role === "driver" ? y.vehicleType : null,
          vehicle_plate: r?.role === "driver" ? y.vehiclePlate : null
        }
      });
      if (R2?.user) {
        i(R2.user), g({
          name: R2.user.name ?? "",
          phone: (R2.user.phone ?? "").replace(/\D+/g, "").slice(-10),
          vehicleType: R2.user.vehicle_type ?? "",
          vehiclePlate: R2.user.vehicle_plate ?? ""
        }), setVerificationInfo(R2.user.latest_verification ?? null), shareRideSaveSession({ token: A.token, user: R2.user });
      }
      c(R2?.message ?? "Profil mis a jour avec succes."), m(!1);
    } catch (R2) {
      s(R2 instanceof Error ? R2.message : "Mise a jour impossible.");
    } finally {
      k(!1);
    }
  }, P = async (M) => {
    const A = M.target.files?.[0];
    if (!A)
      return;
    const L = shareRideGetSession();
    if (!L?.token) {
      e("/login");
      return;
    }
    const R = new FormData();
    R.append("avatar", A), c(""), s(""), x(!0);
    try {
      const S = await shareRideApiRequest("/profile/avatar", {
        method: "POST",
        token: L.token,
        formData: R
      });
      if (S?.user) {
        i(S.user), g({
          name: S.user.name ?? "",
          phone: (S.user.phone ?? "").replace(/\D+/g, "").slice(-10),
          vehicleType: S.user.vehicle_type ?? "",
          vehiclePlate: S.user.vehicle_plate ?? ""
        }), setVerificationInfo(S.user.latest_verification ?? null), shareRideSaveSession({ token: L.token, user: S.user });
      }
      c(S?.message ?? "Photo de profil mise a jour.");
    } catch (S) {
      s(S instanceof Error ? S.message : "Upload impossible.");
    } finally {
      x(!1), M.target.value = "";
    }
  }, T = async () => {
    const M = shareRideGetSession();
    if (!M?.token) {
      e("/login");
      return;
    }
    c(""), s(""), x(!0);
    try {
      const A = await shareRideApiRequest("/profile/avatar", {
        method: "DELETE",
        token: M.token
      });
      if (A?.user) {
        i(A.user), setVerificationInfo(A.user.latest_verification ?? null), shareRideSaveSession({ token: M.token, user: A.user });
      }
      c(A?.message ?? "Photo de profil supprimee.");
    } catch (A) {
      s(A instanceof Error ? A.message : "Suppression impossible.");
    } finally {
      x(!1);
    }
  }, B = async (M = !1) => {
    const A = shareRideGetSession();
    if (!A?.token)
      return;
    !M && setRefreshingVerification(!0);
    try {
      const L = await shareRideApiRequest("/profile/verification/status", {
        token: A.token
      });
      setVerificationInfo(L?.verification ?? null), i((R) => {
        if (!R)
          return R;
        const S = {
          ...R,
          identity_verification_status: L?.status ?? R.identity_verification_status,
          latest_verification: L?.verification ?? R.latest_verification
        };
        return shareRideSaveSession({ token: A.token, user: S }), S;
      });
    } catch (L) {
      !M && s(L instanceof Error ? L.message : "Impossible de charger le statut de verification.");
    } finally {
      !M && setRefreshingVerification(!1);
    }
  }, loadVehicleDocumentsStatus = async (M = !0) => {
    const A = shareRideGetSession();
    if (!A?.token || r?.role !== "driver") {
      setVehicleDocumentsSnapshot(null), setVehicleDocumentsType(null);
      return;
    }
    try {
      const L = await shareRideApiRequest("/driver/vehicle-documents", {
        token: A.token
      });
      setVehicleDocumentsSnapshot(L?.stats ?? null), setVehicleDocumentsType(L?.vehicle_type ?? null);
    } catch (L) {
      !M && s(L instanceof Error ? L.message : "Impossible de charger les papiers du vehicule.");
    }
  };
  _e(() => {
    v(), B(!0);
  }, [e]);
  _e(() => {
    r?.role === "driver" ? loadVehicleDocumentsStatus(!0) : (setVehicleDocumentsSnapshot(null), setVehicleDocumentsType(null));
  }, [r?.role, r?.vehicle_type]);
  _e(() => {
    const M = shareRideGetSession();
    if (!M?.token || r?.identity_verification_status !== "pending")
      return;
    const A = setInterval(() => {
      B(!0);
    }, 15e3);
    return () => clearInterval(A);
  }, [r?.identity_verification_status]);
  const numberFormatter = new Intl.NumberFormat("fr-FR"), w = r?.created_at ? new Date(r.created_at) : null, C = w && !Number.isNaN(w.getTime()) ? w.toLocaleDateString("fr-FR", { month: "long", year: "numeric" }) : "Non defini", wallet = r?.wallet ?? null, walletAvailable = Number(wallet?.available_balance_fcfa ?? 0), walletPending = Number(wallet?.pending_balance_fcfa ?? 0), passengerMinimumDeposit = Number(wallet?.minimum_deposit_fcfa ?? 500), passengerRechargeNetwork = wallet?.recharge_network_label ?? "Non detecte", passengerRechargeSupported = wallet?.recharge_network_supported === !0, E = {
    name: r?.name ?? "Utilisateur",
    email: r?.email ?? "Non renseigne",
    phone: r?.phone ?? "Non renseigne",
    memberSince: C,
    rating: 5,
    totalTrips: 0
  }, A = r?.identity_verification_status ?? "not_started", L = A === "verified" ? "Verifie" : A === "pending" ? "Verification en cours" : A === "rejected" ? "Verification rejetee" : "Non verifie", R = A === "verified" ? "bg-green-100 text-green-700" : A === "pending" ? "bg-yellow-100 text-yellow-700" : A === "rejected" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700", isDriver = r?.role === "driver", isPassenger = r?.role === "passenger", driverVehicleType = resolveDriverVehicleType(vehicleDocumentsType ?? r?.vehicle_type), driverVehicleIsMoto = driverVehicleType === "moto", driverVehicleIcon = driverVehicleIsMoto ? zyMotoIcon : mt, requiredVehicleDocs = Number(vehicleDocumentsSnapshot?.required_count ?? 0), missingVehicleDocs = Number(vehicleDocumentsSnapshot?.missing_count ?? Math.max(0, requiredVehicleDocs - Number(vehicleDocumentsSnapshot?.submitted_count ?? 0))), expiredVehicleDocs = Number(vehicleDocumentsSnapshot?.expired_count ?? 0), vehicleDocumentsUpToDate = isDriver && requiredVehicleDocs > 0 && missingVehicleDocs === 0 && expiredVehicleDocs === 0, vehicleBadgeTitle = vehicleDocumentsUpToDate ? driverVehicleIsMoto ? "Moto renseignee" : "Vehicule renseigne" : "Non renseigne", vehicleBadgeColor = vehicleDocumentsUpToDate ? "text-green-600" : "text-gray-600", vehicleBadgeBg = vehicleDocumentsUpToDate ? "bg-green-100" : "bg-gray-100", vehicleSummaryValue = vehicleDocumentsUpToDate ? "Renseigne" : "Non renseigne", S = isDriver ? [{ label: driverVehicleIsMoto ? "Moto" : "Vehicule", value: vehicleSummaryValue, icon: driverVehicleIcon }, { label: "Solde", value: `${numberFormatter.format(walletAvailable)} FCFA`, icon: yr }, { label: "En attente", value: `${numberFormatter.format(walletPending)} FCFA`, icon: Fn }] : isPassenger ? [{ label: "Solde", value: `${numberFormatter.format(walletAvailable)} FCFA`, icon: yr }] : [], I = [
    { title: r?.role === "driver" ? "Profil conducteur" : "Profil passager", icon: mn, color: "text-blue-600", bgColor: "bg-blue-100" },
    { title: A === "verified" ? "Identite verifiee" : "Identite a verifier", icon: We, color: "text-yellow-600", bgColor: "bg-yellow-100" },
    isDriver ? { title: vehicleBadgeTitle, icon: driverVehicleIcon, color: vehicleBadgeColor, bgColor: vehicleBadgeBg } : { title: "Donnees synchronisees", icon: df, color: "text-purple-600", bgColor: "bg-purple-100" }
  ];
  const verificationFlowStatus = verificationInfo?.status === "approved" ? "Approuvee" : verificationInfo?.status === "rejected" ? "Rejetee" : verificationInfo?.status === "in_review" ? "En revue" : "-", formatVerificationDate = (M) => {
    if (!M)
      return "Non defini";
    const A2 = new Date(M);
    return Number.isNaN(A2.getTime()) ? "Non defini" : A2.toLocaleString("fr-FR");
  };
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 pb-24", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => e(r?.role === "driver" ? "/driver/dashboard" : r?.role === "passenger" ? "/passenger/dashboard" : "/"),
          className: "hover:bg-white/20 p-2 rounded-lg transition-colors mb-4",
          children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Mon Profil" }),
      d && /* @__PURE__ */ l("p", { className: "text-sm text-purple-100 mt-2", children: "Synchronisation du profil..." }),
      a && /* @__PURE__ */ l("p", { className: "text-sm text-red-200 mt-2", children: a }),
      o && /* @__PURE__ */ l("p", { className: "text-sm text-green-100 mt-2", children: o })
    ] }),
    /* @__PURE__ */ f("div", { className: "px-6 -mt-16 space-y-6", children: [
      /* @__PURE__ */ f(
        ee.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "bg-white rounded-2xl shadow-lg p-6",
          children: [
            /* @__PURE__ */ f("div", { className: "flex items-center gap-4 mb-4", children: [
              /* @__PURE__ */ f("div", { className: "relative", children: [
                r?.avatar_url ? /* @__PURE__ */ l(
                  "button",
                  {
                    type: "button",
                    onClick: () => setAvatarPreviewOpen(!0),
                    className: "w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow focus:outline-none focus:ring-2 focus:ring-white/70",
                    children: /* @__PURE__ */ l("img", { src: r.avatar_url, alt: "Avatar", className: "w-20 h-20 object-cover cursor-zoom-in" })
                  }
                ) : /* @__PURE__ */ l("div", { className: "bg-gradient-to-br from-purple-600 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-3xl", children: E.name.charAt(0) }),
                /* @__PURE__ */ l("div", { className: "absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1.5", children: /* @__PURE__ */ l(mn, { className: "w-4 h-4 text-white" }) })
              ] }),
              /* @__PURE__ */ f("div", { className: "flex-1", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
                  /* @__PURE__ */ l("h2", { className: "text-xl font-bold text-gray-800", children: E.name }),
                  /* @__PURE__ */ l("span", { className: "text-xs px-2 py-0.5 rounded-full font-semibold " + R, children: L })
                ] }),
                /* @__PURE__ */ f("div", { className: "flex items-center gap-1 text-sm text-gray-600", children: [
                  /* @__PURE__ */ l(We, { className: "w-4 h-4 fill-yellow-400 text-yellow-400" }),
                  /* @__PURE__ */ l("span", { className: "font-semibold", children: E.rating }),
                  /* @__PURE__ */ l("span", { className: "mx-1", children: "-" }),
                  /* @__PURE__ */ f("span", { children: [
                    E.totalTrips,
                    " trajets"
                  ] })
                ] }),
                /* @__PURE__ */ f("p", { className: "text-sm text-gray-500 mt-1", children: [
                  "Membre depuis ",
                  E.memberSince
                ] })
              ] }),
              /* @__PURE__ */ l(
                "button",
                {
                  onClick: () => m(!h),
                  className: "bg-purple-100 text-purple-600 p-2 rounded-lg hover:bg-purple-200 transition-colors",
                  children: /* @__PURE__ */ l(Gf, { className: "w-5 h-5" })
                }
              )
            ] }),
            /* @__PURE__ */ f("div", { className: "flex gap-2 mb-4", children: [
              /* @__PURE__ */ l("input", { ref: t, type: "file", accept: "image/png,image/jpeg,image/webp", className: "hidden", onChange: P }),
              /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  onClick: () => t.current && t.current.click(),
                  disabled: p,
                  className: "bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50",
                  children: p ? "Upload..." : "Changer la photo"
                }
              ),
              r?.avatar_url && /* @__PURE__ */ l(
                "button",
                {
                  type: "button",
                  onClick: T,
                  disabled: p,
                  className: "bg-red-50 text-red-600 text-sm font-semibold px-3 py-2 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50",
                  children: "Supprimer"
                }
              )
            ] }),
            /* @__PURE__ */ f("div", { className: "space-y-3 pt-4 border-t border-gray-100", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-3 text-gray-700", children: [
                /* @__PURE__ */ l(Oi, { className: "w-5 h-5 text-gray-400" }),
                /* @__PURE__ */ l("span", { className: "text-sm", children: E.email })
              ] }),
              /* @__PURE__ */ f("div", { className: "flex items-center gap-3 text-gray-700", children: [
                /* @__PURE__ */ l(_i, { className: "w-5 h-5 text-gray-400" }),
                /* @__PURE__ */ l("span", { className: "text-sm", children: E.phone })
              ] }),
              isDriver && /* @__PURE__ */ f("button", { type: "button", onClick: () => e("/driver/vehicle-documents"), className: "w-full flex items-center justify-between gap-3 text-gray-700 hover:text-purple-700 transition-colors", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ l(driverVehicleIcon, { className: "w-5 h-5 text-gray-400" }),
                  /* @__PURE__ */ l("span", { className: "text-sm", children: r?.vehicle_type || r?.vehicle_plate ? (r?.vehicle_type ?? "Vehicule") + " - " + (r?.vehicle_plate ?? "-") : "Aucun vehicule renseigne" })
                ] }),
                /* @__PURE__ */ l("span", { className: "text-gray-400", children: ">" })
              ] })
            ] }),
            h && /* @__PURE__ */ l("form", { onSubmit: N, className: "space-y-3 mt-4 pt-4 border-t border-gray-100", children: /* @__PURE__ */ f(Xr, { children: [
              /* @__PURE__ */ f("div", { children: [
                /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Nom complet" }),
                /* @__PURE__ */ l("input", { type: "text", value: y.name, onChange: (M) => g({ ...y, name: M.target.value }), className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none", required: !0 })
              ] }),
              /* @__PURE__ */ f("div", { children: [
                /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Telephone" }),
                /* @__PURE__ */ l("input", { type: "tel", value: y.phone, onChange: (M) => g({ ...y, phone: normalizeBeninPhone(M.target.value) }), placeholder: "01XXXXXXXX", inputMode: "tel", maxLength: 10, pattern: "^\\d{10}$", title: "Entrez exactement 10 chiffres commencant par un prefixe mobile beninois autorise", className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none", required: !0 }),
                /* @__PURE__ */ l("p", { className: "text-[11px] text-gray-500 mt-1", children: "Format: 10 chiffres (sans +229), prefixe mobile beninois." })
              ] }),
              r?.role === "driver" && /* @__PURE__ */ f(Xr, { children: [
                /* @__PURE__ */ f("div", { children: [
                  /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Type de vehicule" }),
                  /* @__PURE__ */ l("input", { type: "text", value: y.vehicleType, onChange: (M) => g({ ...y, vehicleType: M.target.value }), className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none", required: !0 })
                ] }),
                /* @__PURE__ */ f("div", { children: [
                  /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Plaque" }),
                  /* @__PURE__ */ l("input", { type: "text", value: y.vehiclePlate, onChange: (M) => g({ ...y, vehiclePlate: M.target.value.toUpperCase() }), placeholder: "RB-1234-AA", pattern: "^(RB[-\\s]?\\d{4}[-\\s]?[A-Za-z]{1,2}|[A-Za-z]{2}[-\\s]?\\d{4}[-\\s]?RB|\\d{4}[-\\s]?RB[-\\s]?\\d{2})$", title: "Formats acceptes: RB-1234-AA, AA-1234-RB ou 1234-RB-01", className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none", required: !0 })
                ] })
              ] }),
              /* @__PURE__ */ f("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ l("button", { type: "submit", disabled: b, className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold disabled:opacity-50", children: b ? "Sauvegarde..." : "Sauvegarder" }),
                /* @__PURE__ */ l("button", { type: "button", onClick: () => m(!1), className: "bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold", children: "Annuler" })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ l("div", { className: "bg-blue-50 border border-blue-200 rounded-2xl p-4", children: /* @__PURE__ */ l("p", { className: "text-sm text-blue-800", children: 'Pour verifier votre compte, allez dans la rubrique "Securite et verification" ci-dessous.' }) }),
      isDriver && /* @__PURE__ */ f("div", { className: "bg-white rounded-2xl p-4 shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-2", children: "Portefeuille conducteur" }),
        /* @__PURE__ */ f("div", { className: "text-sm text-gray-600 space-y-1 mb-3", children: [
          /* @__PURE__ */ f("p", { children: [
            "Disponible: ",
            numberFormatter.format(walletAvailable),
            " FCFA"
          ] }),
          /* @__PURE__ */ f("p", { children: [
            "En attente de confirmation passager: ",
            numberFormatter.format(walletPending),
            " FCFA"
          ] })
        ] }),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => e("/driver/wallet"),
            className: "w-full bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-100 transition-colors",
            children: "Retrait et recharge"
          }
        )
      ] }),
      isPassenger && /* @__PURE__ */ f("div", { className: "bg-white rounded-2xl p-4 shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-2", children: "Portefeuille passager" }),
        /* @__PURE__ */ f("div", { className: "text-sm text-gray-600 space-y-1 mb-3", children: [
          /* @__PURE__ */ f("p", { children: [
            "Solde disponible: ",
            numberFormatter.format(walletAvailable),
            " FCFA"
          ] }),
          /* @__PURE__ */ f("p", { children: [
            "Recharge minimum: ",
            numberFormatter.format(passengerMinimumDeposit),
            " FCFA"
          ] }),
          /* @__PURE__ */ f("p", { children: [
            "Reseau detecte automatiquement: ",
            passengerRechargeNetwork
          ] })
        ] }),
        !passengerRechargeSupported && /* @__PURE__ */ l("p", { className: "text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-3", children: "Le numero de profil ne correspond pas a un reseau mobile money pris en charge au Benin." }),
        /* @__PURE__ */ l(
          "button",
          {
            type: "button",
            onClick: () => e("/passenger/wallet"),
            className: "w-full bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors",
            children: "Recharger mon compte"
          }
        )
      ] }),
      S.length > 0 && /* @__PURE__ */ l("div", { className: "grid grid-cols-2 gap-3", children: S.map((M, A2) => /* @__PURE__ */ f(
        ee.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { delay: A2 * 0.1 },
          className: "bg-white rounded-xl p-4 shadow-sm",
          children: [
            /* @__PURE__ */ l("div", { className: "bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-2", children: /* @__PURE__ */ l(M.icon, { className: "w-5 h-5 text-purple-600" }) }),
            /* @__PURE__ */ l("div", { className: "text-2xl font-bold text-gray-800", children: M.value }),
            /* @__PURE__ */ l("div", { className: "text-sm text-gray-600", children: M.label })
          ]
        },
        M.label
      )) }),
      /* @__PURE__ */ f("div", { className: "mt-1", children: [
        /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-3", children: "Badges" }),
        /* @__PURE__ */ l("div", { className: "grid grid-cols-3 gap-3", children: I.map((M, A2) => /* @__PURE__ */ f(
          ee.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.4 + A2 * 0.1 },
            className: "bg-white rounded-xl p-4 shadow-sm text-center",
            children: [
              /* @__PURE__ */ l("div", { className: M.bgColor + " w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ l(M.icon, { className: "w-6 h-6 " + M.color }) }),
              /* @__PURE__ */ l("div", { className: "text-xs font-semibold text-gray-700", children: M.title })
            ]
          },
          M.title
        )) })
      ] }),
      /* @__PURE__ */ f("div", { className: "space-y-3", children: [
        /* @__PURE__ */ f("button", { onClick: () => e("/settings"), className: "w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex items-center justify-between", children: [
          /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ l("div", { className: "bg-gray-100 p-2 rounded-lg", children: /* @__PURE__ */ l(Bf, { className: "w-5 h-5 text-gray-600" }) }),
            /* @__PURE__ */ l("span", { className: "font-semibold text-gray-800", children: "Parametres" })
          ] }),
          /* @__PURE__ */ l("span", { className: "text-gray-400", children: ">" })
        ] }),
        isDriver && /* @__PURE__ */ f("button", { onClick: () => e("/driver/wallet"), className: "w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex items-center justify-between", children: [
          /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ l("div", { className: "bg-gray-100 p-2 rounded-lg", children: /* @__PURE__ */ l(yr, { className: "w-5 h-5 text-gray-600" }) }),
            /* @__PURE__ */ l("span", { className: "font-semibold text-gray-800", children: "Solde, retrait et recharge" })
          ] }),
          /* @__PURE__ */ l("span", { className: "text-gray-400", children: ">" })
        ] }),
        isPassenger && /* @__PURE__ */ f("button", { onClick: () => e("/passenger/wallet"), className: "w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex items-center justify-between", children: [
          /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ l("div", { className: "bg-gray-100 p-2 rounded-lg", children: /* @__PURE__ */ l(yr, { className: "w-5 h-5 text-gray-600" }) }),
            /* @__PURE__ */ l("span", { className: "font-semibold text-gray-800", children: "Solde et recharge" })
          ] }),
          /* @__PURE__ */ l("span", { className: "text-gray-400", children: ">" })
        ] }),
        isDriver && /* @__PURE__ */ f("button", { onClick: () => e("/driver/vehicle-documents"), className: "w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex items-center justify-between", children: [
          /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ l("div", { className: "bg-gray-100 p-2 rounded-lg", children: /* @__PURE__ */ l(mt, { className: "w-5 h-5 text-gray-600" }) }),
            /* @__PURE__ */ l("span", { className: "font-semibold text-gray-800", children: "Papiers du véhicule" })
          ] }),
          /* @__PURE__ */ l("span", { className: "text-gray-400", children: ">" })
        ] }),
        /* @__PURE__ */ f("button", { onClick: () => e("/profile/verification"), className: "w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex items-center justify-between", children: [
          /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ l("div", { className: "bg-gray-100 p-2 rounded-lg", children: /* @__PURE__ */ l(mn, { className: "w-5 h-5 text-gray-600" }) }),
            /* @__PURE__ */ l("span", { className: "font-semibold text-gray-800", children: "Securite et verification" })
          ] }),
          /* @__PURE__ */ l("span", { className: "text-gray-400", children: ">" })
        ] }),
        /* @__PURE__ */ f("button", { onClick: () => e("/support"), className: "w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex items-center justify-between", children: [
          /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ l("div", { className: "bg-gray-100 p-2 rounded-lg", children: /* @__PURE__ */ l(pt, { className: "w-5 h-5 text-gray-600" }) }),
            /* @__PURE__ */ l("span", { className: "font-semibold text-gray-800", children: "Aide et support" })
          ] }),
          /* @__PURE__ */ l("span", { className: "text-gray-400", children: ">" })
        ] }),
        /* @__PURE__ */ l(
          "button",
          {
            onClick: async () => {
              const M = shareRideGetSession();
              try {
                M?.token && await shareRideApiRequest("/auth/logout", {
                  method: "POST",
                  token: M.token
                });
              } catch {
              }
              shareRideClearSession(), e("/");
            },
            className: "w-full bg-red-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all flex items-center justify-between",
            children: /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ l("div", { className: "bg-red-100 p-2 rounded-lg", children: /* @__PURE__ */ l(Af, { className: "w-5 h-5 text-red-600" }) }),
              /* @__PURE__ */ l("span", { className: "font-semibold text-red-600", children: "Se deconnecter" })
            ] })
          }
        )
      ] })
    ] }),
    avatarPreviewOpen && r?.avatar_url && /* @__PURE__ */ l(
      "div",
      {
        onClick: () => setAvatarPreviewOpen(!1),
        className: "fixed inset-0 bg-black/80 z-50 p-4 sm:p-8 flex items-center justify-center",
        children: /* @__PURE__ */ f("div", { onClick: (M) => M.stopPropagation(), className: "relative max-w-3xl w-full", children: [
          /* @__PURE__ */ l(
            "button",
            {
              type: "button",
              onClick: (M) => {
                M.stopPropagation(), setAvatarPreviewOpen(!1);
              },
              className: "absolute -top-3 -right-3 bg-white text-gray-700 w-9 h-9 rounded-full shadow flex items-center justify-center",
              children: "x"
            }
          ),
          /* @__PURE__ */ l("img", { src: r.avatar_url, alt: "Photo de profil", className: "w-full max-h-[85vh] object-contain rounded-2xl bg-white" })
        ] })
      }
    )
  ] });
}
function ZyDriverVehicleDocuments() {
  const e = Pe(), [t, n] = Q(!0), [r, i] = Q(""), [a, s] = Q(""), [o, c] = Q(""), [d, u] = Q([]), [h, m] = Q({}), [b, k] = Q({}), [p, x] = Q(null), [y, g] = Q(null), v = async (N = !1) => {
    const P = shareRideGetSession();
    if (!P?.token) {
      e("/login?type=driver");
      return;
    }
    if (P.user?.role && P.user.role !== "driver") {
      e(P.user.role === "passenger" ? "/passenger/dashboard" : "/");
      return;
    }
    N || n(!0), i(""), s("");
    try {
      const T = await shareRideApiRequest("/driver/vehicle-documents", {
        token: P.token
      }), w = Array.isArray(T?.requirements) ? T.requirements : [];
      u(w), x(T?.vehicle_type ?? null), g(T?.stats ?? null), m((C) => {
        const E = { ...C };
        return w.forEach((I) => {
          const F = C[I.type] ?? {};
          E[I.type] = {
            expires_at: I?.document?.expires_at ?? F.expires_at ?? "",
            document_number: I?.document?.document_number ?? F.document_number ?? ""
          };
        }), E;
      });
    } catch (T) {
      const w = T instanceof Error ? T.message : "Impossible de charger les papiers du véhicule.";
      w.toLowerCase().includes("unauthenticated") ? (shareRideClearSession(), e("/login?type=driver")) : i(w);
    } finally {
      N || n(!1);
    }
  }, N = (P, T, w) => {
    m((C) => ({
      ...C,
      [P]: {
        ...(C[P] ?? {}),
        [T]: w
      }
    }));
  }, P = (T, w) => {
    k((C) => ({
      ...C,
      [T]: w
    }));
  }, T = async (w) => {
    const C = shareRideGetSession();
    if (!C?.token) {
      e("/login?type=driver");
      return;
    }
    const E = h[w.type] ?? {}, I = E.expires_at ? String(E.expires_at) : "", F = b[w.type];
    if (!I) {
      i("Veuillez renseigner une date d'expiration."), s("");
      return;
    }
    if (!F && w.missing) {
      i("Ajoutez une photo du document avant l'enregistrement."), s("");
      return;
    }
    const D = new FormData();
    D.append("document_type", w.type), D.append("expires_at", I), E.document_number && String(E.document_number).trim() !== "" && D.append("document_number", String(E.document_number).trim()), F && D.append("document_photo", F), c(w.type), i(""), s("");
    try {
      const M = await shareRideApiRequest("/driver/vehicle-documents", {
        method: "POST",
        token: C.token,
        formData: D
      });
      s(M?.message ?? "Document enregistré avec succès."), k((A) => ({
        ...A,
        [w.type]: null
      })), await v(!0);
    } catch (M) {
      i(M instanceof Error ? M.message : "Enregistrement impossible.");
    } finally {
      c("");
    }
  };
  _e(() => {
    v();
  }, [e]);
  const w = p === "moto" ? "Moto" : p === "minibus" ? "Minibus" : "Véhicule", C = Number(y?.required_count ?? d.length), E = Number(y?.submitted_count ?? 0), I = Number(y?.expired_count ?? 0), F = Number(y?.valid_count ?? Math.max(0, E - I));
  return t ? /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6", children: [
      /* @__PURE__ */ l("button", { onClick: () => e("/profile"), className: "hover:bg-white/20 p-2 rounded-lg transition-colors mb-4", children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Papiers du véhicule" }),
      /* @__PURE__ */ l("p", { className: "text-sm text-purple-100 mt-2", children: "Chargement en cours..." })
    ] }),
    /* @__PURE__ */ l("div", { className: "p-6", children: /* @__PURE__ */ l("div", { className: "h-32 rounded-2xl bg-white shadow-sm animate-pulse" }) })
  ] }) : /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 pb-24", children: [
      /* @__PURE__ */ l("button", { onClick: () => e("/profile"), className: "hover:bg-white/20 p-2 rounded-lg transition-colors mb-4", children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Papiers du véhicule" }),
      /* @__PURE__ */ f("p", { className: "text-sm text-purple-100 mt-2", children: [
        "Type déclaré: ",
        w
      ] }),
      r && /* @__PURE__ */ l("p", { className: "text-sm text-red-200 mt-2", children: r }),
      a && /* @__PURE__ */ l("p", { className: "text-sm text-green-100 mt-2", children: a })
    ] }),
    /* @__PURE__ */ f("div", { className: "px-6 -mt-16 space-y-4", children: [
      /* @__PURE__ */ f("div", { className: "bg-white rounded-2xl p-4 shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ l("h2", { className: "text-base font-bold text-gray-800 mb-2", children: "Suivi des documents" }),
        /* @__PURE__ */ f("div", { className: "text-sm text-gray-600 space-y-1", children: [
          /* @__PURE__ */ f("p", { children: [
            "Documents soumis: ",
            E,
            " / ",
            C
          ] }),
          /* @__PURE__ */ f("p", { children: [
            "Documents valides: ",
            F
          ] }),
          /* @__PURE__ */ f("p", { children: [
            "Documents expirés: ",
            I
          ] })
        ] })
      ] }),
      d.map((D) => {
        const M = h[D.type] ?? {
          expires_at: D?.document?.expires_at ?? "",
          document_number: D?.document?.document_number ?? ""
        }, A = D.document ? D.is_expired ? "Expiré" : "Soumis" : "Manquant", L = D.document ? D.is_expired ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700", R2 = o === D.type, S = b[D.type];
        return /* @__PURE__ */ f("div", { className: "bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-3", children: [
          /* @__PURE__ */ f("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("h3", { className: "font-semibold text-gray-800", children: D.label }),
              /* @__PURE__ */ l("p", { className: "text-xs text-gray-500 mt-1", children: D.description })
            ] }),
            /* @__PURE__ */ l("span", { className: `text-xs px-2 py-1 rounded-full font-semibold ${L}`, children: A })
          ] }),
          /* @__PURE__ */ f("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Date d'expiration" }),
              /* @__PURE__ */ l("input", { type: "date", value: M.expires_at ?? "", onChange: (O) => N(D.type, "expires_at", O.target.value), className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none" })
            ] }),
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Numéro du document" }),
              /* @__PURE__ */ l("input", { type: "text", value: M.document_number ?? "", onChange: (O) => N(D.type, "document_number", O.target.value), placeholder: "Optionnel", className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none" })
            ] })
          ] }),
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Photo du papier" }),
            /* @__PURE__ */ l("input", { type: "file", accept: "image/png,image/jpeg,application/pdf", onChange: (O) => P(D.type, O.target.files?.[0] ?? null), className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none bg-white" }),
            S && /* @__PURE__ */ f("p", { className: "text-xs text-gray-500 mt-1", children: [
              "Nouveau fichier: ",
              S.name
            ] }),
            D?.document?.document_photo_url && /* @__PURE__ */ l("a", { href: D.document.document_photo_url, target: "_blank", rel: "noreferrer", className: "inline-flex text-xs text-purple-700 hover:underline mt-1", children: "Voir la preuve actuelle" })
          ] }),
          D.is_expired && /* @__PURE__ */ l("p", { className: "text-xs text-red-600", children: "Ce document est expiré. Merci de le mettre à jour." }),
          /* @__PURE__ */ l("button", { type: "button", onClick: () => T(D), disabled: R2, className: "w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold disabled:opacity-60", children: R2 ? "Enregistrement..." : "Enregistrer" })
        ] }, D.type);
      }),
      d.length === 0 && !r && /* @__PURE__ */ l("div", { className: "bg-white rounded-2xl p-6 text-center text-sm text-gray-600 shadow-sm border border-gray-100", children: "Aucun document requis pour le moment." })
    ] })
  ] });
}
function ZyDriverWallet() {
  const e = Pe(), [t, n] = Q(!0), [r, i] = Q(!1), [a, s] = Q(!1), [o, c] = Q(""), [d, u] = Q(""), [h, m] = Q(null), [b, k] = Q([]), [p, x] = Q([]), [F, D] = Q({
    amount: "",
    password: ""
  }), [M, A] = Q({
    amount: "",
    password: ""
  }), L = new Intl.NumberFormat("fr-FR"), R = async () => {
    const O = shareRideGetSession();
    if (!O?.token) {
      e("/login?type=driver");
      return;
    }
    if (O.user?.role && O.user.role !== "driver") {
      e(O.user.role === "passenger" ? "/passenger/dashboard" : "/");
      return;
    }
    n(!0), c(""), u("");
    try {
      const z = await shareRideApiRequest("/driver/wallet", {
        token: O.token
      }), B = await shareRideApiRequest("/driver/wallet/withdrawals", {
        token: O.token
      }), U = await shareRideApiRequest("/driver/wallet/deposits", {
        token: O.token
      });
      m(z?.wallet ?? null), k(Array.isArray(B?.data) ? B.data : []), x(Array.isArray(U?.data) ? U.data : []);
    } catch (z) {
      const B = z instanceof Error ? z.message : "Impossible de charger le portefeuille.";
      if (B.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=driver");
        return;
      }
      c(B);
    } finally {
      n(!1);
    }
  }, S = async (O) => {
    O.preventDefault();
    const z = shareRideGetSession();
    if (!z?.token) {
      e("/login?type=driver");
      return;
    }
    const B = Math.floor(Number(F.amount));
    if (!Number.isFinite(B) || B <= 0) {
      c("Montant invalide."), u("");
      return;
    }
    const U = Number(h?.available_balance_fcfa ?? 0), q = h?.withdrawal_network_supported === !0 && !!h?.withdrawal_network;
    if (!q) {
      c("Numero de profil non compatible avec les reseaux mobile money pris en charge. Mettez ce numero a jour dans votre profil."), u("");
      return;
    }
    if (B > U) {
      c("Le montant depasse le solde disponible. Le solde en attente n est pas retirable."), u("");
      return;
    }
    if (!F.password.trim()) {
      c("Entrez votre mot de passe pour securiser le transfert."), u("");
      return;
    }
    i(!0), c(""), u("");
    try {
      const q = await shareRideApiRequest("/driver/wallet/withdraw", {
        method: "POST",
        token: z.token,
        body: {
          amount_fcfa: B,
          current_password: F.password
        }
      });
      m(q?.wallet ?? null), q?.withdrawal && k((H2) => [q.withdrawal, ...H2]), u(q?.message ?? "Retrait effectue avec succes."), D((H2) => ({
        ...H2,
        amount: "",
        password: ""
      }));
    } catch (q) {
      const H2 = q instanceof Error ? q.message : "Retrait impossible.";
      if (H2.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=driver");
        return;
      }
      c(H2);
    } finally {
      i(!1);
    }
  }, I = async (O) => {
    O.preventDefault();
    const z = shareRideGetSession();
    if (!z?.token) {
      e("/login?type=driver");
      return;
    }
    const B = Math.floor(Number(M.amount));
    if (!Number.isFinite(B) || B <= 0) {
      c("Montant invalide."), u("");
      return;
    }
    const U = Number(h?.minimum_deposit_fcfa ?? 500), q = h?.recharge_network_supported === !0 && !!h?.recharge_network;
    if (!q) {
      c("Numero de profil non compatible avec les reseaux mobile money pris en charge. Mettez ce numero a jour dans votre profil."), u("");
      return;
    }
    if (B < U) {
      c(`Le montant minimum de recharge est ${L.format(U)} FCFA.`), u("");
      return;
    }
    if (!M.password.trim()) {
      c("Entrez votre mot de passe pour securiser la recharge."), u("");
      return;
    }
    s(!0), c(""), u("");
    try {
      const q = await shareRideApiRequest("/driver/wallet/deposit", {
        method: "POST",
        token: z.token,
        body: {
          amount_fcfa: B,
          current_password: M.password
        }
      });
      m(q?.wallet ?? null), q?.deposit && x((H2) => [q.deposit, ...H2]), u(q?.message ?? "Recharge effectuee avec succes."), A((H2) => ({
        ...H2,
        amount: "",
        password: ""
      }));
    } catch (q) {
      const H2 = q instanceof Error ? q.message : "Recharge impossible.";
      if (H2.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=driver");
        return;
      }
      c(H2);
    } finally {
      s(!1);
    }
  }, O = (z) => z === "completed" ? "Effectue" : z === "processing" ? "En cours" : z === "failed" ? "Echoue" : z ?? "-", z = (B) => B === "completed" ? "bg-green-100 text-green-700" : B === "processing" ? "bg-yellow-100 text-yellow-700" : B === "failed" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700";
  _e(() => {
    R();
  }, [e]);
  const B = Number(h?.minimum_withdrawal_fcfa ?? 500), U = Number(h?.minimum_deposit_fcfa ?? 500), q = Number(h?.available_balance_fcfa ?? 0), H = Number(h?.pending_balance_fcfa ?? 0), j = Number(h?.total_balance_fcfa ?? q + H), G = Math.floor(Number(F.amount)), V = Number.isFinite(G) && G > q, K = h?.withdrawal_network_supported === !0 && !!h?.withdrawal_network, Y = h?.withdrawal_network_label ?? null, J = Math.floor(Number(M.amount)), X = Number.isFinite(J) && J < U, Z = h?.recharge_network_supported === !0 && !!h?.recharge_network, ee2 = h?.recharge_network_label ?? null, te = r || q < B || V || !K, ne = a || !Z || !Number.isFinite(J) || J < U || !M.password.trim();
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6", children: [
      /* @__PURE__ */ f("div", { className: "flex items-center gap-4 mb-3", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => e("/profile"),
            className: "hover:bg-white/20 p-2 rounded-lg transition-colors",
            children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ f("div", { children: [
          /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Solde conducteur" }),
          /* @__PURE__ */ l("p", { className: "text-green-100 text-sm", children: "Retrait et recharge securises avec votre numero de profil" })
        ] })
      ] }),
      o && /* @__PURE__ */ l("p", { className: "text-sm text-red-100", children: o }),
      d && /* @__PURE__ */ l("p", { className: "text-sm text-green-100", children: d })
    ] }),
    /* @__PURE__ */ f("div", { className: "p-6 space-y-4", children: [
      t ? /* @__PURE__ */ f("div", { className: "text-center py-10", children: [
        /* @__PURE__ */ l("div", { className: "w-10 h-10 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto mb-3" }),
        /* @__PURE__ */ l("p", { className: "text-sm text-gray-500", children: "Chargement du portefeuille..." })
      ] }) : /* @__PURE__ */ f(Xr, { children: [
        /* @__PURE__ */ l("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
          { label: "Disponible", value: q, color: "text-green-600" },
          { label: "En attente", value: H, color: "text-yellow-600" },
          { label: "Total", value: j, color: "text-blue-600" }
        ].map((re2) => /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
          /* @__PURE__ */ l("p", { className: "text-xs text-gray-500 mb-1", children: re2.label }),
          /* @__PURE__ */ f("p", { className: "text-xl font-bold " + re2.color, children: [
            L.format(re2.value),
            " FCFA"
          ] })
        ] }, re2.label)) }),
        /* @__PURE__ */ l("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
            /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-2", children: "Demander un retrait" }),
            /* @__PURE__ */ f("p", { className: "text-sm text-gray-600 mb-3", children: [
              "Numero de retrait: ",
              h?.withdrawal_phone ?? "-"
            ] }),
            /* @__PURE__ */ f("p", { className: "text-sm text-gray-600 mb-3", children: [
              "Reseau detecte automatiquement: ",
              Y ?? "Non detecte"
            ] }),
            /* @__PURE__ */ f("p", { className: "text-xs text-gray-500 mb-3", children: [
              "Montant minimum: ",
              L.format(B),
              " FCFA"
            ] }),
            !K && /* @__PURE__ */ l("p", { className: "text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-3", children: "Le numero de profil ne correspond pas a un reseau mobile money pris en charge au Benin." }),
            H > 0 && /* @__PURE__ */ f("p", { className: "text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-3", children: [
              "Le solde en attente (",
              L.format(H),
              " FCFA) correspond au montant passager - 5% et devient retirable apres confirmation du passager."
            ] }),
            /* @__PURE__ */ f("form", { onSubmit: S, className: "space-y-3", children: [
              /* @__PURE__ */ f("div", { children: [
                /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Montant (FCFA)" }),
                /* @__PURE__ */ l("input", { type: "number", min: String(B), max: q > 0 ? String(q) : void 0, step: "100", value: F.amount, onChange: (re2) => D({ ...F, amount: re2.target.value }), className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500", required: !0 }),
                /* @__PURE__ */ f("p", { className: "text-[11px] text-gray-500 mt-1", children: [
                  "Disponible pour retrait: ",
                  L.format(q),
                  " FCFA"
                ] }),
                V && /* @__PURE__ */ l("p", { className: "text-[11px] text-red-600 mt-1", children: "Le montant depasse le solde disponible." })
              ] }),
              /* @__PURE__ */ f("div", { children: [
                /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Mot de passe" }),
                /* @__PURE__ */ l("input", { type: "password", value: F.password, onChange: (re2) => D({ ...F, password: re2.target.value }), className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500", required: !0 })
              ] }),
              /* @__PURE__ */ l("button", { type: "submit", disabled: te, className: "w-full bg-green-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors disabled:opacity-60", children: r ? "Transfert..." : "Valider le retrait" })
            ] })
          ] }),
          /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
            /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-2", children: "Recharger mon solde" }),
            /* @__PURE__ */ f("p", { className: "text-sm text-gray-600 mb-3", children: [
              "Numero de recharge: ",
              h?.recharge_phone ?? "-"
            ] }),
            /* @__PURE__ */ f("p", { className: "text-sm text-gray-600 mb-3", children: [
              "Reseau detecte automatiquement: ",
              ee2 ?? "Non detecte"
            ] }),
            /* @__PURE__ */ f("p", { className: "text-xs text-gray-500 mb-3", children: [
              "Montant minimum: ",
              L.format(U),
              " FCFA"
            ] }),
            !Z && /* @__PURE__ */ l("p", { className: "text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-3", children: "Le numero de profil ne correspond pas a un reseau mobile money pris en charge au Benin." }),
            /* @__PURE__ */ f("form", { onSubmit: I, className: "space-y-3", children: [
              /* @__PURE__ */ f("div", { children: [
                /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Montant (FCFA)" }),
                /* @__PURE__ */ l("input", { type: "number", min: String(U), step: "100", value: M.amount, onChange: (re2) => A({ ...M, amount: re2.target.value }), className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", required: !0 }),
                /* @__PURE__ */ l("p", { className: "text-[11px] text-gray-500 mt-1", children: "Le solde recharge est utilise pour les retraits disponibles et l abonnement conducteur." }),
                X && /* @__PURE__ */ l("p", { className: "text-[11px] text-red-600 mt-1", children: "Le montant saisi est inferieur au minimum autorise." })
              ] }),
              /* @__PURE__ */ f("div", { children: [
                /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Mot de passe" }),
                /* @__PURE__ */ l("input", { type: "password", value: M.password, onChange: (re2) => A({ ...M, password: re2.target.value }), className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", required: !0 })
              ] }),
              /* @__PURE__ */ l("button", { type: "submit", disabled: ne, className: "w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60", children: a ? "Recharge..." : "Valider la recharge" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ l("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
            /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-3", children: "Historique des retraits" }),
            b.length === 0 ? /* @__PURE__ */ l("p", { className: "text-sm text-gray-500", children: "Aucun retrait pour le moment." }) : /* @__PURE__ */ l("div", { className: "space-y-2", children: b.map((re2) => /* @__PURE__ */ f("div", { className: "border border-gray-200 rounded-lg p-3", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ f("p", { className: "font-semibold text-gray-800 text-sm", children: [
                  L.format(Number(re2.amount_fcfa ?? 0)),
                  " FCFA"
                ] }),
                /* @__PURE__ */ l("span", { className: "text-xs px-2 py-0.5 rounded-full font-semibold " + z(re2.status), children: O(re2.status) })
              ] }),
              /* @__PURE__ */ f("p", { className: "text-xs text-gray-600", children: [
                re2.network_label ?? re2.network,
                " - ",
                re2.phone
              ] }),
              /* @__PURE__ */ f("p", { className: "text-[11px] text-gray-500 mt-1", children: [
                "Ref: ",
                re2.reference ?? "-"
              ] })
            ] }, re2.id)) })
          ] }),
          /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
            /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-3", children: "Historique des recharges" }),
            p.length === 0 ? /* @__PURE__ */ l("p", { className: "text-sm text-gray-500", children: "Aucune recharge pour le moment." }) : /* @__PURE__ */ l("div", { className: "space-y-2", children: p.map((re2) => /* @__PURE__ */ f("div", { className: "border border-gray-200 rounded-lg p-3", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-1", children: [
                /* @__PURE__ */ f("p", { className: "font-semibold text-gray-800 text-sm", children: [
                  L.format(Number(re2.amount_fcfa ?? 0)),
                  " FCFA"
                ] }),
                /* @__PURE__ */ l("span", { className: "text-xs px-2 py-0.5 rounded-full font-semibold " + z(re2.status), children: O(re2.status) })
              ] }),
              /* @__PURE__ */ f("p", { className: "text-xs text-gray-600", children: [
                re2.network_label ?? re2.network,
                " - ",
                re2.phone
              ] }),
              /* @__PURE__ */ f("p", { className: "text-[11px] text-gray-500 mt-1", children: [
                "Ref: ",
                re2.reference ?? "-"
              ] })
            ] }, re2.id)) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function ZyPassengerWallet() {
  const e = Pe(), [t, n] = Q(!0), [r, i] = Q(!1), [a, s] = Q(""), [o, c] = Q(""), [d, u] = Q(null), [b, k] = Q([]), [p, x] = Q({
    amount: "",
    password: ""
  }), F = new Intl.NumberFormat("fr-FR"), D = async () => {
    const A = shareRideGetSession();
    if (!A?.token) {
      e("/login?type=passenger");
      return;
    }
    if (A.user?.role && A.user.role !== "passenger") {
      e(A.user.role === "driver" ? "/driver/dashboard" : "/");
      return;
    }
    n(!0), s(""), c("");
    try {
      const L = await shareRideApiRequest("/passenger/wallet", {
        token: A.token
      }), R = await shareRideApiRequest("/passenger/wallet/deposits", {
        token: A.token
      });
      u(L?.wallet ?? null), k(Array.isArray(R?.data) ? R.data : []);
    } catch (L) {
      const R = L instanceof Error ? L.message : "Impossible de charger le portefeuille.";
      if (R.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=passenger");
        return;
      }
      s(R);
    } finally {
      n(!1);
    }
  }, M = async (A) => {
    A.preventDefault();
    const L = shareRideGetSession();
    if (!L?.token) {
      e("/login?type=passenger");
      return;
    }
    const R = Math.floor(Number(p.amount));
    if (!Number.isFinite(R) || R <= 0) {
      s("Montant invalide."), c("");
      return;
    }
    const S = Number(d?.minimum_deposit_fcfa ?? 500);
    const I = d?.recharge_network_supported === !0 && !!d?.recharge_network;
    if (!I) {
      s("Numero de profil non compatible avec les reseaux mobile money pris en charge. Mettez ce numero a jour dans votre profil."), c("");
      return;
    }
    if (R < S) {
      s(`Le montant minimum de recharge est ${F.format(S)} FCFA.`), c("");
      return;
    }
    if (!p.password.trim()) {
      s("Entrez votre mot de passe pour securiser la recharge."), c("");
      return;
    }
    i(!0), s(""), c("");
    try {
      const O = await shareRideApiRequest("/passenger/wallet/deposit", {
        method: "POST",
        token: L.token,
        body: {
          amount_fcfa: R,
          current_password: p.password
        }
      });
      u(O?.wallet ?? null), O?.deposit && k((z) => [O.deposit, ...z]), c(O?.message ?? "Recharge effectuee avec succes."), x((z) => ({
        ...z,
        amount: "",
        password: ""
      }));
    } catch (O) {
      const z = O instanceof Error ? O.message : "Recharge impossible.";
      if (z.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login?type=passenger");
        return;
      }
      s(z);
    } finally {
      i(!1);
    }
  }, A = (L) => L === "completed" ? "Credite" : L === "processing" ? "En cours" : L === "failed" ? "Echoue" : L ?? "-", L = (R) => R === "completed" ? "bg-green-100 text-green-700" : R === "processing" ? "bg-yellow-100 text-yellow-700" : R === "failed" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700";
  _e(() => {
    D();
  }, [e]);
  const R = Number(d?.minimum_deposit_fcfa ?? 500), S = Number(d?.available_balance_fcfa ?? 0), I = Number(d?.total_balance_fcfa ?? S), O = Math.floor(Number(p.amount)), z = Number.isFinite(O) && O < R, B = d?.recharge_network_supported === !0 && !!d?.recharge_network, U = d?.recharge_network_label ?? null, q = r || !B || !Number.isFinite(O) || O < R || !p.password.trim();
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6", children: [
      /* @__PURE__ */ f("div", { className: "flex items-center gap-4 mb-3", children: [
        /* @__PURE__ */ l(
          "button",
          {
            onClick: () => e("/profile"),
            className: "hover:bg-white/20 p-2 rounded-lg transition-colors",
            children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ f("div", { children: [
          /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Solde passager" }),
          /* @__PURE__ */ l("p", { className: "text-blue-100 text-sm", children: "Recharge securisee de votre compte passager" })
        ] })
      ] }),
      a && /* @__PURE__ */ l("p", { className: "text-sm text-red-100", children: a }),
      o && /* @__PURE__ */ l("p", { className: "text-sm text-green-100", children: o })
    ] }),
    /* @__PURE__ */ f("div", { className: "p-6 space-y-4", children: [
      t ? /* @__PURE__ */ f("div", { className: "text-center py-10", children: [
        /* @__PURE__ */ l("div", { className: "w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-3" }),
        /* @__PURE__ */ l("p", { className: "text-sm text-gray-500", children: "Chargement du portefeuille..." })
      ] }) : /* @__PURE__ */ f(Xr, { children: [
        /* @__PURE__ */ l("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
          { label: "Disponible", value: S, color: "text-green-600" },
          { label: "Total", value: I, color: "text-blue-600" }
        ].map((H2) => /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
          /* @__PURE__ */ l("p", { className: "text-xs text-gray-500 mb-1", children: H2.label }),
          /* @__PURE__ */ f("p", { className: "text-xl font-bold " + H2.color, children: [
            F.format(H2.value),
            " FCFA"
          ] })
        ] }, H2.label)) }),
        /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
          /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-2", children: "Recharger le compte" }),
          /* @__PURE__ */ f("p", { className: "text-sm text-gray-600 mb-3", children: [
            "Numero de recharge: ",
            d?.recharge_phone ?? "-"
          ] }),
          /* @__PURE__ */ f("p", { className: "text-sm text-gray-600 mb-3", children: [
            "Reseau detecte automatiquement: ",
            U ?? "Non detecte"
          ] }),
          /* @__PURE__ */ f("p", { className: "text-xs text-gray-500 mb-3", children: [
            "Montant minimum: ",
            F.format(R),
            " FCFA"
          ] }),
          !B && /* @__PURE__ */ l("p", { className: "text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2 mb-3", children: "Le numero de profil ne correspond pas a un reseau mobile money pris en charge au Benin." }),
          /* @__PURE__ */ f("form", { onSubmit: M, className: "space-y-3", children: [
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Montant (FCFA)" }),
              /* @__PURE__ */ l("input", { type: "number", min: String(R), step: "100", value: p.amount, onChange: (H2) => x({ ...p, amount: H2.target.value }), className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", required: !0 }),
              /* @__PURE__ */ f("p", { className: "text-[11px] text-gray-500 mt-1", children: [
                "Ce solde sera debite automatiquement lors de la confirmation d'une reservation."
              ] }),
              z && /* @__PURE__ */ l("p", { className: "text-[11px] text-red-600 mt-1", children: "Le montant saisi est inferieur au minimum autorise." })
            ] }),
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Mot de passe" }),
              /* @__PURE__ */ l("input", { type: "password", value: p.password, onChange: (H2) => x({ ...p, password: H2.target.value }), className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", required: !0 })
            ] }),
            /* @__PURE__ */ l("button", { type: "submit", disabled: q, className: "w-full bg-blue-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60", children: r ? "Recharge..." : "Valider la recharge" })
          ] })
        ] }),
        /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-4 shadow-sm", children: [
          /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-3", children: "Historique des recharges" }),
          b.length === 0 ? /* @__PURE__ */ l("p", { className: "text-sm text-gray-500", children: "Aucune recharge pour le moment." }) : /* @__PURE__ */ l("div", { className: "space-y-2", children: b.map((H2) => /* @__PURE__ */ f("div", { className: "border border-gray-200 rounded-lg p-3", children: [
            /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ f("p", { className: "font-semibold text-gray-800 text-sm", children: [
                F.format(Number(H2.amount_fcfa ?? 0)),
                " FCFA"
              ] }),
              /* @__PURE__ */ l("span", { className: "text-xs px-2 py-0.5 rounded-full font-semibold " + L(H2.status), children: A(H2.status) })
            ] }),
            /* @__PURE__ */ f("p", { className: "text-xs text-gray-600", children: [
              H2.network_label ?? H2.network,
              " - ",
              H2.phone
            ] }),
            /* @__PURE__ */ f("p", { className: "text-[11px] text-gray-500 mt-1", children: [
              "Ref: ",
              H2.reference ?? "-"
            ] })
          ] }, H2.id)) })
        ] })
      ] })
    ] })
  ] });
}
function ZyPhoneVerificationSection() {
  const e = Pe(), [t, n] = Q(!0), [r, i] = Q(!1), [a, s] = Q(!1), [o, c] = Q(""), [d, u] = Q(""), [h, m] = Q(""), [b, k] = Q(""), [p, x] = Q(null), y = async () => {
    const B = shareRideGetSession();
    if (!B?.token) {
      e("/login");
      return;
    }
    n(!0), c("");
    try {
      const U = await shareRideApiRequest("/profile", {
        token: B.token
      });
      if (U?.user) {
        shareRideSaveSession({ token: B.token, user: U.user });
      }
      x(U?.user?.phone_verification ?? {
        phone: U?.user?.phone ?? "",
        status: U?.user?.phone_verification_status ?? "unverified",
        verified_at: U?.user?.phone_verified_at ?? null,
        required: U?.user?.phone_verification_required ?? !0,
        network: U?.user?.phone_network ?? null,
        network_label: U?.user?.phone_network_label ?? null
      });
    } catch (U) {
      const q = U instanceof Error ? U.message : "Impossible de charger l'etat de verification du numero.";
      if (q.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login");
        return;
      }
      c(q);
    } finally {
      n(!1);
    }
  }, g = async () => {
    const B = shareRideGetSession();
    if (!B?.token) {
      e("/login");
      return;
    }
    i(!0), c(""), u(""), m("");
    try {
      const U = await shareRideApiRequest("/profile/phone-verification/send", {
        method: "POST",
        token: B.token
      });
      U?.phone_verification && x(U.phone_verification), u(U?.message ?? "Code envoye."), typeof U?.debug_code == "string" ? m(U.debug_code) : m("");
    } catch (U) {
      const q = U instanceof Error ? U.message : "Impossible d'envoyer le code.";
      if (q.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login");
        return;
      }
      c(q);
    } finally {
      i(!1);
    }
  }, v = async (B) => {
    B.preventDefault();
    const U = shareRideGetSession();
    if (!U?.token) {
      e("/login");
      return;
    }
    if (!/^\d{6}$/.test(d.trim())) {
      c("Entrez le code a 6 chiffres recu par SMS."), u("");
      return;
    }
    s(!0), c(""), u("");
    try {
      const q = await shareRideApiRequest("/profile/phone-verification/confirm", {
        method: "POST",
        token: U.token,
        body: {
          code: d.trim()
        }
      });
      q?.user && shareRideSaveSession({ token: U.token, user: q.user }), q?.phone_verification && x(q.phone_verification), u(q?.message ?? "Numero verifie avec succes."), k(""), m("");
    } catch (q) {
      const H2 = q instanceof Error ? q.message : "Verification impossible.";
      if (H2.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login");
        return;
      }
      c(H2);
    } finally {
      s(!1);
    }
  };
  _e(() => {
    y();
  }, [e]);
  const N = p?.status === "verified", P = p?.network_label ?? "Non detecte";
  return /* @__PURE__ */ f("div", { className: "mb-6 border-t border-gray-200 pt-5", children: [
    /* @__PURE__ */ l("h2", { className: "text-xl font-bold text-gray-800 mb-2", children: "Verification du numero" }),
    t ? /* @__PURE__ */ l("p", { className: "text-sm text-gray-500", children: "Chargement de l'etat du numero..." }) : /* @__PURE__ */ f(Xr, { children: [
      /* @__PURE__ */ f("div", { className: "text-sm text-gray-700 space-y-1", children: [
        /* @__PURE__ */ f("p", { children: [
          "Numero: ",
          p?.phone ?? "-"
        ] }),
        /* @__PURE__ */ f("p", { children: [
          "Reseau: ",
          P
        ] }),
        /* @__PURE__ */ f("p", { className: N ? "text-green-700 font-semibold" : "text-yellow-700 font-semibold", children: [
          "Statut: ",
          N ? "Verifie" : "Non verifie"
        ] })
      ] }),
      o && /* @__PURE__ */ l("p", { className: "text-sm text-red-600 mt-2", children: o }),
      h && /* @__PURE__ */ l("p", { className: "text-sm text-green-600 mt-2", children: h }),
      b && /* @__PURE__ */ f("p", { className: "text-xs text-gray-600 mt-1", children: [
        "Code de test: ",
        b
      ] }),
      !N && /* @__PURE__ */ f(Xr, { children: [
        /* @__PURE__ */ l("button", { type: "button", onClick: g, disabled: r, className: "mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 disabled:opacity-60", children: r ? "Envoi..." : "Envoyer le code" }),
        /* @__PURE__ */ f("form", { onSubmit: v, className: "mt-3 flex flex-col sm:flex-row gap-2", children: [
          /* @__PURE__ */ l("input", { type: "text", value: d, onChange: (q) => k((q.target.value || "").replace(/\D+/g, "").slice(0, 6)), inputMode: "numeric", pattern: "^\\d{6}$", maxLength: 6, placeholder: "Code a 6 chiffres", className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500", required: !0 }),
          /* @__PURE__ */ l("button", { type: "submit", disabled: a, className: "bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 disabled:opacity-60", children: a ? "Verification..." : "Confirmer" })
        ] })
      ] })
    ] })
  ] });
}
function ZyProfileVerification() {
  const e = Pe(), t = shareRideGetSession(), n = He(null), r = He(null), i = He(null), a = He([]), s = He(null), o = He(null), c = He(null), d = He(!1), u = He({ total: 0, turned: 0, detectorUnavailable: !1 }), h = He(null), m = He(null), [b, k] = Q("national_id"), [p, x] = Q(""), [y, g] = Q(null), [v, N] = Q(null), [P, T] = Q(null), [w, C] = Q(null), [E, I] = Q(!1), [F, D] = Q(""), [M, A] = Q(""), [L, R] = Q(t?.user?.identity_verification_status ?? "not_started"), [S, O] = Q(!1), [z, B] = Q(0), [U, $] = Q(""), [q, H] = Q("pending"), [j, G] = Q(null), [V, K] = Q("pending"), [Y, W] = Q(null), [J, X] = Q(null), Z = b !== "passport", ee2 = L !== "pending" && L !== "verified", te = async () => {
    const ce2 = shareRideGetSession();
    if (!ce2?.token)
      return;
    try {
      const de2 = await shareRideApiRequest("/profile/verification/status", {
        token: ce2.token
      });
      R(de2?.status ?? "not_started");
    } catch {
    }
  }, ne = () => {
    s.current && (clearInterval(s.current), s.current = null), o.current && (clearInterval(o.current), o.current = null);
  }, re = () => {
    const ce2 = r.current?.getTracks?.() ?? [];
    ce2.forEach((de2) => de2.stop()), r.current = null, n.current && (n.current.srcObject = null);
  }, ie = () => {
    h.current && (URL.revokeObjectURL(h.current), h.current = null);
  }, ae = (ce2, de2) => ce2?.find((ue2) => ue2.type === de2)?.location ?? null, se = (ce2) => {
    const de2 = ae(ce2.landmarks, "leftEye"), ue2 = ae(ce2.landmarks, "rightEye"), he2 = ae(ce2.landmarks, "nose");
    if (!de2 || !ue2 || !he2)
      return null;
    const me2 = Math.abs(ue2.x - de2.x);
    if (me2 < 1)
      return null;
    const be2 = (de2.x + ue2.x) / 2;
    return (he2.x - be2) / me2;
  }, oe2 = async () => {
    if (d.current || !n.current)
      return;
    d.current = !0;
    try {
      if (!("FaceDetector" in window)) {
        u.current.detectorUnavailable = !0;
        return;
      }
      c.current || (c.current = new window.FaceDetector({ fastMode: !0, maxDetectedFaces: 1 }));
      const ce2 = await c.current.detect(n.current);
      if (!ce2.length)
        return;
      const de2 = se(ce2[0]);
      if (de2 == null)
        return;
      m.current == null && Math.abs(de2) < 0.35 && (m.current = de2);
      const ue2 = m.current ?? de2, he2 = Math.abs(de2 - ue2);
      u.current.total += 1, he2 > 0.18 && (u.current.turned += 1);
    } catch {
      u.current.detectorUnavailable = !0;
    } finally {
      d.current = !1;
    }
  }, le = async () => {
    if (!n.current || !n.current.videoWidth || !n.current.videoHeight)
      return null;
    const ce2 = document.createElement("canvas");
    ce2.width = n.current.videoWidth, ce2.height = n.current.videoHeight;
    const de2 = ce2.getContext("2d");
    if (!de2)
      return null;
    de2.drawImage(n.current, 0, 0, ce2.width, ce2.height);
    const ue2 = await new Promise((he2) => ce2.toBlob(he2, "image/jpeg", 0.9));
    return ue2 ? new File([ue2], "selfie-auto-" + Date.now() + ".jpg", { type: "image/jpeg" }) : null;
  }, fe = () => {
    const ce2 = u.current;
    if (ce2.detectorUnavailable) {
      H("manual_review"), G(0), $("Detection automatique indisponible sur ce navigateur. Votre dossier sera controle manuellement.");
      return;
    }
    const de2 = ce2.total > 0 ? Math.round(Math.max(0, Math.min(100, ce2.turned / ce2.total * 100))) : 0, ue2 = ce2.turned > 0 ? "passed" : "failed";
    H(ue2), G(de2), $(ue2 === "passed" ? "Mouvement detecte avec succes." : "Mouvement non detecte. Recommencez en tournant bien la tete vers la gauche.");
  }, ve = async () => {
    if (!S)
      return;
    ne(), O(!1);
    const ce2 = await le();
    ce2 && T(ce2), i.current && i.current.state !== "inactive" ? i.current.stop() : (re(), fe());
  }, Ne = async () => {
    if (S)
      return;
    if (!navigator.mediaDevices?.getUserMedia) {
      D("Camera non disponible sur cet appareil."), H("manual_review");
      return;
    }
    D(""), A(""), B(15), $("Regardez la camera puis tournez la tete vers la gauche."), H("pending"), G(null), K("pending"), W(null), ne(), re();
    try {
      const ce2 = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 640 },
          height: { ideal: 480 }
        },
        audio: !1
      });
      r.current = ce2, n.current && (n.current.srcObject = ce2, await n.current.play().catch(() => {
      })), a.current = [], m.current = null, u.current = {
        total: 0,
        turned: 0,
        detectorUnavailable: !("FaceDetector" in window)
      };
      const de2 = ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"], ue2 = de2.find((he2) => window.MediaRecorder?.isTypeSupported?.(he2)) ?? "", he2 = ue2 ? new MediaRecorder(ce2, { mimeType: ue2 }) : new MediaRecorder(ce2);
      i.current = he2, he2.ondataavailable = (me2) => {
        me2.data && me2.data.size > 0 && a.current.push(me2.data);
      }, he2.onstop = () => {
        const me2 = new Blob(a.current, { type: he2.mimeType || "video/webm" });
        if (me2.size > 0) {
          const be2 = new File([me2], "liveness-" + Date.now() + ".webm", { type: me2.type || "video/webm" });
          C(be2), ie();
          const ke2 = URL.createObjectURL(me2);
          h.current = ke2, X(ke2);
        }
        re(), fe();
      }, he2.start(300), O(!0), o.current = setInterval(() => {
        oe2();
      }, 280), s.current = setInterval(() => {
        B((me2) => (me2 <= 1 && ve(), Math.max(0, me2 - 1)));
      }, 1e3);
    } catch (ce2) {
      D(ce2 instanceof Error ? ce2.message : "Impossible d'acceder a la camera."), O(!1), re();
    }
  }, Pe2 = async (ce2) => {
    if (!ce2 || ce2.type === "application/pdf" || !("FaceDetector" in window) || typeof createImageBitmap === "undefined")
      return null;
    const de2 = await createImageBitmap(ce2);
    try {
      c.current || (c.current = new window.FaceDetector({ fastMode: !0, maxDetectedFaces: 1 }));
      const ue2 = await c.current.detect(de2);
      if (!ue2.length)
        return null;
      const he2 = ue2[0], me2 = ae(he2.landmarks, "leftEye"), be2 = ae(he2.landmarks, "rightEye"), ke2 = ae(he2.landmarks, "nose"), pe2 = ae(he2.landmarks, "mouth");
      if (!me2 || !be2 || !ke2 || !pe2)
        return null;
      const xe2 = Math.hypot(be2.x - me2.x, be2.y - me2.y);
      if (xe2 < 1)
        return null;
      const ye2 = (me2.x + be2.x) / 2, ge2 = (me2.y + be2.y) / 2;
      return [
        (ke2.x - ye2) / xe2,
        (ke2.y - ge2) / xe2,
        (pe2.x - ye2) / xe2,
        (pe2.y - ge2) / xe2
      ];
    } catch {
      return null;
    } finally {
      de2.close?.();
    }
  }, Te2 = async (ce2, de2) => {
    if (!ce2 || !de2) {
      K("pending"), W(null);
      return;
    }
    if (ce2.type === "application/pdf") {
      K("manual_review"), W(null);
      return;
    }
    const ue2 = await Pe2(ce2), he2 = await Pe2(de2);
    if (!ue2 || !he2) {
      K("manual_review"), W(null);
      return;
    }
    const me2 = Math.sqrt(ue2.reduce((be2, ke2, pe2) => be2 + Math.pow(ke2 - he2[pe2], 2), 0)), be2 = Math.max(0, Math.min(100, Math.round(100 - me2 * 160)));
    W(be2), K(be2 >= 60 ? "passed" : "failed");
  }, we2 = async (ce2) => {
    ce2.preventDefault();
    if (!ee2) {
      D("Votre verification est deja en cours ou deja approuvee.");
      return;
    }
    const de2 = shareRideGetSession();
    if (!de2?.token) {
      e("/login");
      return;
    }
    if (Z && !v) {
      D("Le verso de la piece est obligatoire pour ce document.");
      return;
    }
    if (!y || !P || !w) {
      D("Lancez la verification camera de 15 secondes pour capturer selfie et video.");
      return;
    }
    if (q === "pending") {
      D("La verification video n'est pas terminee. Lancez la capture puis attendez la fin des 15 secondes.");
      return;
    }
    if (q === "failed") {
      D("Mouvement de tete non detecte. Recommencez la capture video.");
      return;
    }
    D(""), A(""), I(!0);
    try {
      const ue2 = new FormData();
      ue2.append("document_type", b), p && ue2.append("document_number", p), ue2.append("document_front", y), v && ue2.append("document_back", v), ue2.append("selfie", P), ue2.append("liveness_video", w), ue2.append("auto_liveness_status", q), j != null && ue2.append("auto_liveness_score", String(j)), ue2.append("auto_face_match_status", V), Y != null && ue2.append("auto_face_match_score", String(Y));
      const he2 = await shareRideApiRequest("/profile/verification/request", {
        method: "POST",
        token: de2.token,
        formData: ue2
      });
      he2?.user && shareRideSaveSession({ token: de2.token, user: he2.user }), R("pending"), A(he2?.message ?? "Demande envoyee avec succes."), setTimeout(() => {
        e("/profile");
      }, 1200);
    } catch (ue2) {
      D(ue2 instanceof Error ? ue2.message : "Impossible d'envoyer la verification.");
    } finally {
      I(!1);
    }
  };
  return _e(() => {
    t?.token ? te() : e("/login");
  }, [e, t?.token]), _e(() => {
    y && P ? Te2(y, P) : (K("pending"), W(null));
  }, [y, P]), _e(() => () => {
    ne(), re(), ie();
  }, []), /* @__PURE__ */ f("div", { className: "min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6 pb-10", children: [
    /* @__PURE__ */ l("button", { onClick: () => e("/profile"), className: "text-white flex items-center gap-2 hover:gap-3 transition-all mb-6", children: /* @__PURE__ */ f(Xr, { children: [
      /* @__PURE__ */ l(Ge, { className: "w-5 h-5" }),
      /* @__PURE__ */ l("span", { children: "Retour au profil" })
    ] }) }),
    /* @__PURE__ */ f(
      ee.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8",
        children: [
          /* @__PURE__ */ l("h1", { className: "text-3xl font-bold text-gray-800 mb-2", children: "Verification d'identite" }),
          /* @__PURE__ */ l("p", { className: "text-gray-600 mb-4", children: "La camera demarre pendant 15 secondes pour detecter le mouvement et comparer votre visage avec la piece fournie." }),
          /* @__PURE__ */ l("p", { className: "text-sm text-gray-500 mb-6", children: "Statut actuel: " + (L === "verified" ? "Verifie" : L === "pending" ? "En cours" : L === "rejected" ? "Rejete" : "Non verifie") }),
          /* @__PURE__ */ l(ZyPhoneVerificationSection, {}),
          F && /* @__PURE__ */ l("p", { className: "mb-4 text-sm text-red-600 font-medium", children: F }),
          M && /* @__PURE__ */ l("p", { className: "mb-4 text-sm text-green-600 font-medium", children: M }),
          !ee2 && /* @__PURE__ */ l("p", { className: "mb-4 text-sm text-yellow-700 bg-yellow-50 border border-yellow-200 rounded-xl p-3", children: "La soumission est bloquee tant que la verification en cours n'est pas terminee." }),
          /* @__PURE__ */ l("form", { onSubmit: we2, className: "space-y-4", children: /* @__PURE__ */ f(Xr, { children: [
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Type de piece" }),
              /* @__PURE__ */ f("select", { value: b, onChange: (ce2) => k(ce2.target.value), className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none", children: [
                /* @__PURE__ */ l("option", { value: "national_id", children: "Carte nationale d'identite" }),
                /* @__PURE__ */ l("option", { value: "passport", children: "Passeport" }),
                /* @__PURE__ */ l("option", { value: "driver_license", children: "Permis de conduire" })
              ] })
            ] }),
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Numero de piece (optionnel)" }),
              /* @__PURE__ */ l("input", { type: "text", value: p, onChange: (ce2) => x(ce2.target.value), className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none", placeholder: "Ex: BJ123456789" })
            ] }),
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Document - recto" }),
              /* @__PURE__ */ l("input", { type: "file", accept: ".jpg,.jpeg,.png,.pdf", onChange: (ce2) => g(ce2.target.files?.[0] ?? null), className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl", required: !0 })
            ] }),
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Document - verso" }),
              /* @__PURE__ */ l("input", { type: "file", accept: ".jpg,.jpeg,.png,.pdf", onChange: (ce2) => N(ce2.target.files?.[0] ?? null), className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl", required: Z })
            ] }),
            /* @__PURE__ */ l("div", { className: "bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-3", children: /* @__PURE__ */ f(Xr, { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700", children: "Verification anti-robot via camera (15 secondes)" }),
              /* @__PURE__ */ l("video", { ref: n, autoPlay: !0, muted: !0, playsInline: !0, className: "w-full aspect-video rounded-xl bg-gray-900 object-cover" }),
              U && /* @__PURE__ */ l("p", { className: "text-xs text-gray-600", children: U }),
              z > 0 && /* @__PURE__ */ f("p", { className: "text-xs font-semibold text-purple-700", children: ["Temps restant: ", z, "s"] }),
              /* @__PURE__ */ f("div", { className: "flex flex-wrap gap-2", children: [
                /* @__PURE__ */ l("button", { type: "button", onClick: S ? ve : Ne, className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold", children: S ? "Arreter la capture" : "Demarrer capture camera (15s)" }),
                J && /* @__PURE__ */ l("a", { href: J, target: "_blank", rel: "noreferrer", className: "bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold", children: "Voir la video capturee" })
              ] }),
              /* @__PURE__ */ l("p", { className: "text-xs text-gray-500", children: P ? "Selfie capture automatiquement." : "Selfie non capture." }),
              /* @__PURE__ */ l("p", { className: "text-xs text-gray-500", children: w ? "Video de liveness capturee." : "Video non capturee." }),
              /* @__PURE__ */ f("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: [
                /* @__PURE__ */ l("div", { className: "text-xs px-3 py-2 rounded-lg " + (q === "passed" ? "bg-green-100 text-green-700" : q === "failed" ? "bg-red-100 text-red-700" : q === "manual_review" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700"), children: "Liveness auto: " + (q === "passed" ? "Valide" : q === "failed" ? "Echoue" : q === "manual_review" ? "A revoir" : "En attente") + (j != null ? " (" + j + "%)" : "") }),
                /* @__PURE__ */ l("div", { className: "text-xs px-3 py-2 rounded-lg " + (V === "passed" ? "bg-green-100 text-green-700" : V === "failed" ? "bg-red-100 text-red-700" : V === "manual_review" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700"), children: "Match photo-piece: " + (V === "passed" ? "Valide" : V === "failed" ? "Echoue" : V === "manual_review" ? "A revoir" : "En attente") + (Y != null ? " (" + Y + "%)" : "") })
              ] })
            ] }) }),
            /* @__PURE__ */ l("button", { type: "submit", disabled: E || !ee2, className: "w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-60", children: E ? "Envoi en cours..." : "Envoyer pour verification" })
          ] }) })
        ]
      }
    )
  ] });
}
function ZyAdminVerificationConsole() {
  const e = Pe(), t = shareRideGetSession(), [n, r] = Q("in_review"), [i, a] = Q([]), [s, o] = Q(!1), [c, d] = Q(""), [u, h] = Q(""), [m, b] = Q(null), [k, p] = Q(null), x = async () => {
    const S = shareRideGetSession();
    if (!S?.token) {
      e("/login");
      return;
    }
    o(!0), d(""), h("");
    try {
      const I = await shareRideApiRequest("/admin/verifications?status=" + encodeURIComponent(n), {
        token: S.token
      });
      a(I?.data ?? []), p(I?.meta ?? null);
    } catch (I) {
      d(I instanceof Error ? I.message : "Impossible de charger les verifications.");
    } finally {
      o(!1);
    }
  }, y = async (S, I) => {
    const F = shareRideGetSession();
    if (!F?.token) {
      e("/login");
      return;
    }
    let D = "";
    if (I === "rejected") {
      D = window.prompt("Motif du rejet", "") || "";
      if (!D.trim()) {
        d("Le motif est obligatoire pour rejeter une verification.");
        return;
      }
    }
    b(S), d(""), h("");
    try {
      const M = await shareRideApiRequest("/admin/verifications/" + S, {
        method: "PATCH",
        token: F.token,
        body: {
          decision: I,
          review_notes: D || void 0
        }
      });
      h(M?.message ?? "Decision enregistree."), await x();
    } catch (M) {
      d(M instanceof Error ? M.message : "Operation impossible.");
    } finally {
      b(null);
    }
  };
  return _e(() => {
    t?.token ? x() : e("/login");
  }, [e, t?.token, n]), /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-8", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-blue-700 to-cyan-700 text-white p-6", children: [
      /* @__PURE__ */ l("button", { onClick: () => e("/profile"), className: "hover:bg-white/20 p-2 rounded-lg transition-colors mb-4", children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Console Admin - Verifications" }),
      /* @__PURE__ */ l("p", { className: "text-blue-100 text-sm mt-1", children: "Approuvez ou rejetez les demandes KYC" })
    ] }),
    /* @__PURE__ */ f("div", { className: "p-6 space-y-4", children: [
      /* @__PURE__ */ f("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ l("button", { onClick: () => r("in_review"), className: "px-3 py-2 rounded-lg text-sm font-semibold " + (n === "in_review" ? "bg-blue-600 text-white" : "bg-white text-gray-700 border border-gray-200"), children: "En revue" }),
        /* @__PURE__ */ l("button", { onClick: () => r("approved"), className: "px-3 py-2 rounded-lg text-sm font-semibold " + (n === "approved" ? "bg-green-600 text-white" : "bg-white text-gray-700 border border-gray-200"), children: "Approuvees" }),
        /* @__PURE__ */ l("button", { onClick: () => r("rejected"), className: "px-3 py-2 rounded-lg text-sm font-semibold " + (n === "rejected" ? "bg-red-600 text-white" : "bg-white text-gray-700 border border-gray-200"), children: "Rejetees" }),
        /* @__PURE__ */ l("button", { onClick: x, className: "px-3 py-2 rounded-lg text-sm font-semibold bg-gray-100 text-gray-700 border border-gray-200", children: "Actualiser" })
      ] }),
      k && /* @__PURE__ */ f("p", { className: "text-xs text-gray-500", children: ["Total: ", k.total, " - Page ", k.current_page, "/", k.last_page] }),
      c && /* @__PURE__ */ l("p", { className: "text-sm text-red-600 font-medium", children: c }),
      u && /* @__PURE__ */ l("p", { className: "text-sm text-green-600 font-medium", children: u }),
      s ? /* @__PURE__ */ l("p", { className: "text-gray-500", children: "Chargement..." }) : i.length === 0 ? /* @__PURE__ */ l("div", { className: "bg-white rounded-xl p-5 text-sm text-gray-500", children: "Aucune verification pour ce filtre." }) : i.map((S) => /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-5 shadow-sm space-y-3", children: [
        /* @__PURE__ */ f("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800", children: S.user?.name ?? "Utilisateur" }),
            /* @__PURE__ */ l("p", { className: "text-sm text-gray-600", children: S.user?.email ?? "-" }),
            /* @__PURE__ */ l("p", { className: "text-xs text-gray-500", children: "Document: " + (S.document_type ?? "-") + " - Soumis: " + (S.submitted_at ? new Date(S.submitted_at).toLocaleString("fr-FR") : "-") })
          ] }),
          /* @__PURE__ */ l("span", { className: "text-xs px-2 py-1 rounded-full font-semibold " + (S.status === "approved" ? "bg-green-100 text-green-700" : S.status === "rejected" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"), children: S.status })
        ] }),
        /* @__PURE__ */ f("p", { className: "text-sm text-gray-600", children: ["Liveness: ", S.liveness_check_status ?? "-", S.liveness_score != null ? " (" + S.liveness_score + ")" : ""] }),
        S.status === "in_review" && /* @__PURE__ */ f("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ l("button", { onClick: () => y(S.id, "approved"), disabled: m === S.id, className: "bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-semibold disabled:opacity-60", children: m === S.id ? "Traitement..." : "Approuver" }),
          /* @__PURE__ */ l("button", { onClick: () => y(S.id, "rejected"), disabled: m === S.id, className: "bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-semibold disabled:opacity-60", children: m === S.id ? "Traitement..." : "Rejeter" })
        ] }),
        /* @__PURE__ */ l("a", { href: "/api/admin/verifications/" + S.id, target: "_blank", rel: "noreferrer", className: "text-xs text-blue-600 hover:underline", children: "Voir le detail JSON" })
      ] }, S.id))
    ] })
  ] });
}
function ZySettings() {
  const e = Pe(), [t, n] = Q({
    pushTrips: !0,
    pushPayments: !0,
    newsletter: !1,
    smsAlerts: !1
  }), [r, i] = Q(!0), [a, s] = Q(!1), [o, c] = Q(""), [d, u] = Q(""), [passwordFormOpen, setPasswordFormOpen] = Q(!1), [passwordSaving, setPasswordSaving] = Q(!1), [passwordForm, setPasswordForm] = Q({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  }), h = async () => {
    const m = shareRideGetSession();
    if (!m?.token) {
      e("/login");
      return;
    }
    i(!0), c(""), u("");
    try {
      const b = await shareRideApiRequest("/settings", {
        token: m.token
      }), k = b?.settings?.notifications ?? {};
      n({
        pushTrips: k.push_trips ?? !0,
        pushPayments: k.push_payments ?? !0,
        newsletter: k.newsletter ?? !1,
        smsAlerts: k.sms_alerts ?? !1
      });
    } catch (b) {
      c(b instanceof Error ? b.message : "Impossible de charger les parametres.");
    } finally {
      i(!1);
    }
  }, m = (b) => n({
    ...t,
    [b]: !t[b]
  }), togglePasswordForm = () => {
    setPasswordFormOpen((b) => !b), c(""), u(""), setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  }, updatePasswordField = (b, k) => setPasswordForm({
    ...passwordForm,
    [b]: k
  }), submitPasswordChange = async (b) => {
    b.preventDefault();
    const k = shareRideGetSession();
    if (!k?.token) {
      e("/login");
      return;
    }
    if (passwordForm.newPassword.length < 8) {
      c("Le nouveau mot de passe doit contenir au moins 8 caracteres.");
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      c("La confirmation du nouveau mot de passe ne correspond pas.");
      return;
    }
    setPasswordSaving(!0), c(""), u("");
    try {
      const p = await shareRideApiRequest("/settings/password", {
        method: "PUT",
        token: k.token,
        body: {
          current_password: passwordForm.currentPassword,
          new_password: passwordForm.newPassword,
          new_password_confirmation: passwordForm.confirmPassword
        }
      });
      u(p?.message ?? "Mot de passe mis a jour avec succes."), setPasswordFormOpen(!1), setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    } catch (p) {
      c(p instanceof Error ? p.message : "Impossible de modifier le mot de passe.");
    } finally {
      setPasswordSaving(!1);
    }
  }, b = async () => {
    const k = shareRideGetSession();
    if (!k?.token) {
      e("/login");
      return;
    }
    s(!0), c(""), u("");
    try {
      const p = await shareRideApiRequest("/settings", {
        method: "PUT",
        token: k.token,
        body: {
          notifications: {
            push_trips: t.pushTrips,
            push_payments: t.pushPayments,
            newsletter: t.newsletter,
            sms_alerts: t.smsAlerts
          }
        }
      }), x = p?.settings?.notifications ?? {};
      n({
        pushTrips: x.push_trips ?? t.pushTrips,
        pushPayments: x.push_payments ?? t.pushPayments,
        newsletter: x.newsletter ?? t.newsletter,
        smsAlerts: x.sms_alerts ?? t.smsAlerts
      }), u(p?.message ?? "Parametres mis a jour avec succes.");
    } catch (p) {
      c(p instanceof Error ? p.message : "Impossible d'enregistrer les parametres.");
    } finally {
      s(!1);
    }
  };
  _e(() => {
    h();
  }, [e]);
  const k = [
    {
      id: "pushTrips",
      title: "Notifications trajets",
      description: "Alerte quand une reservation, annulation ou modification se produit."
    },
    {
      id: "pushPayments",
      title: "Notifications paiements",
      description: "Recu de paiement, statut de versement et rappels de factures."
    },
    {
      id: "newsletter",
      title: "Promotions",
      description: "Recevoir les offres, coupons et nouveautes ShareRide."
    },
    {
      id: "smsAlerts",
      title: "Alertes SMS",
      description: "Recevoir les alertes critiques meme sans internet."
    }
  ];
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 pb-24", children: [
      /* @__PURE__ */ l("button", { onClick: () => e("/profile"), className: "hover:bg-white/20 p-2 rounded-lg transition-colors mb-4", children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Parametres" }),
      /* @__PURE__ */ l("p", { className: "text-purple-100 text-sm mt-1", children: "Gerez vos preferences de compte et notifications." }),
      r && /* @__PURE__ */ l("p", { className: "text-sm text-purple-100 mt-2", children: "Chargement des parametres..." }),
      o && /* @__PURE__ */ l("p", { className: "text-sm text-red-200 mt-2", children: o }),
      d && /* @__PURE__ */ l("p", { className: "text-sm text-green-100 mt-2", children: d })
    ] }),
    /* @__PURE__ */ f("div", { className: "px-6 -mt-16 space-y-4", children: [
      /* @__PURE__ */ f("div", { className: "bg-white rounded-2xl p-5 shadow-sm space-y-3", children: [
        /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800", children: "Compte" }),
        /* @__PURE__ */ l("p", { className: "text-sm text-gray-600", children: "Ces parametres sont synchronises avec votre compte et appliques sur tous vos appareils." }),
        /* @__PURE__ */ l("div", { className: "flex gap-2", children: /* @__PURE__ */ l("button", { onClick: togglePasswordForm, className: "bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-2 rounded-lg hover:bg-gray-200", children: passwordFormOpen ? "Fermer" : "Changer mot de passe" }) }),
        passwordFormOpen && /* @__PURE__ */ l("form", { onSubmit: submitPasswordChange, className: "space-y-3 pt-2", children: /* @__PURE__ */ f(Xr, { children: [
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Mot de passe actuel" }),
            /* @__PURE__ */ l("input", { type: "password", value: passwordForm.currentPassword, onChange: (b) => updatePasswordField("currentPassword", b.target.value), className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none", required: !0 })
          ] }),
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Nouveau mot de passe" }),
            /* @__PURE__ */ l("input", { type: "password", value: passwordForm.newPassword, onChange: (b) => updatePasswordField("newPassword", b.target.value), className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none", minLength: 8, required: !0 })
          ] }),
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-1", children: "Confirmer le nouveau mot de passe" }),
            /* @__PURE__ */ l("input", { type: "password", value: passwordForm.confirmPassword, onChange: (b) => updatePasswordField("confirmPassword", b.target.value), className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none", minLength: 8, required: !0 })
          ] }),
          /* @__PURE__ */ l("button", { type: "submit", disabled: passwordSaving, className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg disabled:opacity-60", children: passwordSaving ? "Mise a jour..." : "Mettre a jour" })
        ] }) })
      ] }),
      /* @__PURE__ */ l("div", { className: "bg-white rounded-2xl p-5 shadow-sm", children: /* @__PURE__ */ f("div", { className: "space-y-3", children: [
        /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800", children: "Notifications" }),
        k.map((x) => /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-3 border-b border-gray-100 pb-3 last:border-b-0 last:pb-0", children: [
          /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ l("p", { className: "font-semibold text-gray-800 text-sm", children: x.title }),
            /* @__PURE__ */ l("p", { className: "text-xs text-gray-600", children: x.description })
          ] }),
          /* @__PURE__ */ l("button", { onClick: () => m(x.id), className: "px-3 py-1.5 rounded-full text-xs font-semibold " + (t[x.id] ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"), children: t[x.id] ? "Active" : "Inactif" })
        ] }, x.id))
      ] }) }),
      /* @__PURE__ */ l("button", { onClick: b, disabled: a || r, className: "w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all disabled:opacity-60 disabled:cursor-not-allowed", children: a ? "Sauvegarde..." : "Enregistrer les parametres" }),
      /* @__PURE__ */ l("div", { className: "bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-800", children: "Conseil: activez les alertes trajets et paiements pour ne rater aucune action importante." })
    ] })
  ] });
}
function ZySupport() {
  const e = Pe(), [t, n] = Q("general"), [r, i] = Q(""), [a, s] = Q(""), [o, c] = Q(""), [d, u] = Q(!1), [h, m] = Q(!0), [b, k] = Q([]), categoryLabel = {
    general: "Question generale",
    payment: "Paiement",
    account: "Compte",
    safety: "Securite"
  }, formatSupportDate = (x) => {
    if (!x)
      return "-";
    const y = new Date(x);
    return Number.isNaN(y.getTime()) ? "-" : y.toLocaleString("fr-FR");
  }, loadSupportTickets = async () => {
    const x = shareRideGetSession();
    if (!x?.token) {
      e("/login");
      return;
    }
    m(!0), c("");
    try {
      const y = await shareRideApiRequest("/support/tickets", {
        token: x.token
      }), g = Array.isArray(y?.data) ? y.data.map((v) => ({
        id: v.id,
        category: v.category ?? "general",
        message: v.message ?? "",
        status: v.status ?? "open",
        createdAt: v.created_at,
        adminNote: v.admin_note ?? ""
      })) : [];
      k(g);
    } catch (y) {
      const g = y instanceof Error ? y.message : "Impossible de charger vos demandes support.";
      if (g.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login");
        return;
      }
      c(g);
    } finally {
      m(!1);
    }
  }, submitSupport = async (x) => {
    x.preventDefault();
    const y = shareRideGetSession();
    if (!y?.token) {
      e("/login");
      return;
    }
    if (r.trim().length < 10) {
      c("Le message doit contenir au moins 10 caracteres.");
      return;
    }
    u(!0), c(""), s("");
    try {
      const g = await shareRideApiRequest("/support/tickets", {
        method: "POST",
        token: y.token,
        body: {
          category: t,
          message: r.trim()
        }
      }), v = g?.ticket;
      v && k((N) => [{
        id: v.id,
        category: v.category ?? t,
        message: v.message ?? r.trim(),
        status: v.status ?? "open",
        createdAt: v.created_at,
        adminNote: v.admin_note ?? ""
      }, ...N]), s(g?.message ?? "Message envoye. Un agent vous repond sous 24h."), i("");
    } catch (g) {
      const v = g instanceof Error ? g.message : "Envoi impossible.";
      if (v.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login");
        return;
      }
      c(v);
    } finally {
      u(!1);
    }
  };
  _e(() => {
    loadSupportTickets();
  }, [e]);
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ f("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 pb-24", children: [
      /* @__PURE__ */ l("button", { onClick: () => e("/profile"), className: "hover:bg-white/20 p-2 rounded-lg transition-colors mb-4", children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" }) }),
      /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Aide et support" }),
      /* @__PURE__ */ l("p", { className: "text-purple-100 text-sm mt-1", children: "FAQ, contact rapide et assistance securite." }),
      h && /* @__PURE__ */ l("p", { className: "text-xs text-purple-100 mt-2", children: "Chargement de vos demandes..." })
    ] }),
    /* @__PURE__ */ f("div", { className: "px-6 -mt-16 space-y-4", children: [
      /* @__PURE__ */ l("div", { className: "bg-white rounded-2xl p-5 shadow-sm", children: /* @__PURE__ */ f("div", { className: "space-y-2", children: [
        /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800", children: "FAQ rapide" }),
        /* @__PURE__ */ l("p", { className: "text-sm text-gray-700", children: "1. Comment annuler un trajet ? Ouvrez Mes reservations puis selectionnez le trajet." }),
        /* @__PURE__ */ l("p", { className: "text-sm text-gray-700", children: "2. Quand le paiement est-il confirme ? Generalement en moins de 2 minutes." }),
        /* @__PURE__ */ l("p", { className: "text-sm text-gray-700", children: "3. Que faire si mon compte est bloque ? Contactez le support via le formulaire ci-dessous." })
      ] }) }),
      /* @__PURE__ */ l("div", { className: "bg-white rounded-2xl p-5 shadow-sm", children: /* @__PURE__ */ f("div", { className: "space-y-3", children: [
        /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800", children: "Contacter le support" }),
        o && /* @__PURE__ */ l("p", { className: "text-sm text-red-600", children: o }),
        a && /* @__PURE__ */ l("p", { className: "text-sm text-green-600", children: a }),
        /* @__PURE__ */ l("form", { onSubmit: submitSupport, className: "space-y-3", children: /* @__PURE__ */ f(Xr, { children: [
          /* @__PURE__ */ f("select", { value: t, onChange: (x) => n(x.target.value), className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none", children: [
            /* @__PURE__ */ l("option", { value: "general", children: "Question generale" }),
            /* @__PURE__ */ l("option", { value: "payment", children: "Paiement" }),
            /* @__PURE__ */ l("option", { value: "account", children: "Compte" }),
            /* @__PURE__ */ l("option", { value: "safety", children: "Securite" })
          ] }),
          /* @__PURE__ */ l("textarea", { value: r, onChange: (x) => i(x.target.value), rows: 4, placeholder: "Decrivez votre probleme...", className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none", required: !0 }),
          /* @__PURE__ */ l("button", { type: "submit", disabled: d, className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold disabled:opacity-60", children: d ? "Envoi..." : "Envoyer" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ l("div", { className: "bg-white rounded-2xl p-5 shadow-sm", children: /* @__PURE__ */ f("div", { className: "space-y-3", children: [
        /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800", children: "Mes demandes recentes" }),
        b.length === 0 ? /* @__PURE__ */ l("p", { className: "text-sm text-gray-500", children: "Aucune demande support envoyee." }) : b.map((x) => /* @__PURE__ */ f("div", { className: "border border-gray-100 rounded-xl p-3", children: [
          /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-2 mb-1", children: [
            /* @__PURE__ */ l("span", { className: "text-xs font-semibold text-gray-700", children: categoryLabel[x.category] ?? "Support" }),
            /* @__PURE__ */ l("span", { className: `text-xs px-2 py-0.5 rounded-full ${x.status === "resolved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`, children: x.status === "resolved" ? "Resolu" : "Ouvert" })
          ] }),
          /* @__PURE__ */ l("p", { className: "text-sm text-gray-700", children: x.message }),
          x.adminNote && /* @__PURE__ */ f("p", { className: "text-xs text-gray-600 mt-1", children: [
            "Reponse support: ",
            x.adminNote
          ] }),
          /* @__PURE__ */ l("p", { className: "text-xs text-gray-500 mt-1", children: formatSupportDate(x.createdAt) })
        ] }, x.id))
      ] }) }),
      /* @__PURE__ */ l("div", { className: "bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-sm text-yellow-800", children: "Urgence securite: appelez le +229 01 90 00 00 00 ou ecrivez a urgence@shareride.bj" })
    ] })
  ] });
}
function chatRelativeTimeLabel(e) {
  if (!e)
    return "";
  const t = new Date(e);
  if (Number.isNaN(t.getTime()))
    return "";
  const n = Math.max(0, Math.floor((Date.now() - t.getTime()) / 1e3));
  if (n < 60)
    return "A l'instant";
  if (n < 3600)
    return "Il y a " + Math.floor(n / 60) + " min";
  if (n < 86400)
    return "Il y a " + Math.floor(n / 3600) + " h";
  if (n < 172800)
    return "Hier";
  return t.toLocaleDateString("fr-FR");
}
function chatClockLabel(e) {
  if (!e)
    return "--:--";
  const t = new Date(e);
  if (Number.isNaN(t.getTime()))
    return "--:--";
  return t.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit"
  });
}
function ZyChatList() {
  const e = Pe(), [t, n] = Q([]), [r, i] = Q(!0), [a, s] = Q(""), [o, c] = Q(0), d = async (u = !1) => {
    const h = shareRideGetSession();
    if (!h?.token) {
      e("/login");
      return;
    }
    !u && i(!0), !u && s("");
    try {
      const m = await shareRideApiRequest("/chat/conversations", {
        token: h.token
      }), g = Array.isArray(m?.data) ? m.data : [], v = g.map((N) => ({
        id: N?.id,
        counterpart_name: N?.counterpart?.name ?? "Utilisateur",
        counterpart_avatar: N?.counterpart?.avatar ?? "U",
        counterpart_avatar_url: N?.counterpart?.avatar_url ?? null,
        route_label: (N?.trip?.from ?? "Depart") + " -> " + (N?.trip?.to ?? "Destination"),
        trip_date: N?.trip?.date ?? "",
        last_message_text: N?.last_message?.text ?? "",
        last_message_at: N?.last_message?.created_at ?? N?.last_message_at ?? null,
        unread_count: Number(N?.unread_count ?? 0)
      })), N = Number(m?.meta?.unread_total ?? v.reduce((P, T) => P + T.unread_count, 0));
      n(v), c(N);
    } catch (m) {
      const g = m instanceof Error ? m.message : "Impossible de charger vos conversations.";
      if (g.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login");
        return;
      }
      s(g);
    } finally {
      !u && i(!1);
    }
  }, u = () => {
    const h = shareRideGetSession();
    h?.user?.role === "driver" ? e("/driver/dashboard") : h?.user?.role === "passenger" ? e("/passenger/dashboard") : e(-1);
  };
  _e(() => {
    d();
    const h = setInterval(() => {
      d(!0);
    }, 15e3);
    return () => clearInterval(h);
  }, [e]);
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ l("div", { className: "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-6", children: /* @__PURE__ */ f("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: u,
          className: "hover:bg-white/20 p-2 rounded-lg transition-colors",
          children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ f("div", { className: "flex-1", children: [
        /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Messages" }),
        o > 0 && /* @__PURE__ */ f("p", { className: "text-emerald-100 text-sm", children: [
          o,
          " non lus"
        ] })
      ] }),
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => e("/notifications"),
          className: "bg-white/20 backdrop-blur p-2 rounded-lg hover:bg-white/30 transition-colors",
          children: /* @__PURE__ */ l(ji, { className: "w-5 h-5" })
        }
      )
    ] }) }),
    /* @__PURE__ */ f("div", { className: "p-6 space-y-3", children: [
      a && /* @__PURE__ */ l("div", { className: "bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700", children: a }),
      r ? /* @__PURE__ */ f("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ l("div", { className: "w-10 h-10 border-4 border-cyan-200 border-t-cyan-600 rounded-full animate-spin mx-auto mb-4" }),
        /* @__PURE__ */ l("p", { className: "text-gray-500", children: "Chargement des conversations..." })
      ] }) : t.length === 0 ? /* @__PURE__ */ f("div", { className: "bg-white rounded-xl p-8 text-center shadow-sm", children: [
        /* @__PURE__ */ l(Lf, { className: "w-12 h-12 text-gray-300 mx-auto mb-3" }),
        /* @__PURE__ */ l("p", { className: "text-gray-600 font-semibold", children: "Aucune conversation" }),
        /* @__PURE__ */ l("p", { className: "text-sm text-gray-500 mt-1", children: "Utilisez le bouton Message depuis un trajet pour commencer." })
      ] }) : t.map((h, m) => /* @__PURE__ */ l(
        ee.button,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: m * 0.04 },
          type: "button",
          onClick: () => e("/chat/" + h.id),
          className: "w-full bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all text-left",
          children: /* @__PURE__ */ f("div", { className: "flex items-start gap-3", children: [
            h.counterpart_avatar_url ? /* @__PURE__ */ l("img", { src: h.counterpart_avatar_url, alt: h.counterpart_name, className: "w-12 h-12 rounded-full object-cover flex-shrink-0" }) : /* @__PURE__ */ l("div", { className: "w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-cyan-600 text-white flex items-center justify-center font-bold flex-shrink-0", children: h.counterpart_avatar }),
            /* @__PURE__ */ f("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ f("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ l("h3", { className: "font-semibold text-gray-800 truncate", children: h.counterpart_name }),
                /* @__PURE__ */ l("span", { className: "text-xs text-gray-500 whitespace-nowrap", children: chatRelativeTimeLabel(h.last_message_at) })
              ] }),
              /* @__PURE__ */ f("p", { className: "text-xs text-gray-500 mt-0.5", children: [
                h.route_label,
                h.trip_date ? " - " + h.trip_date : ""
              ] }),
              /* @__PURE__ */ l("p", { className: "text-sm text-gray-600 truncate mt-1", children: h.last_message_text || "Aucun message pour le moment." })
            ] }),
            h.unread_count > 0 && /* @__PURE__ */ l("span", { className: "min-w-[22px] h-[22px] px-1 bg-red-500 text-white rounded-full text-[11px] leading-[22px] text-center font-bold", children: h.unread_count > 9 ? "9+" : h.unread_count })
          ] })
        },
        h.id
      ))
    ] })
  ] });
}
function ZyChatConversation() {
  const e = Pe(), { conversationId: t } = Qo(), [n, r] = Q(!0), [i, a] = Q(""), [s, o] = Q(null), [d, u] = Q([]), [h, m] = Q(""), [b, k] = Q(!1), [p, x] = Q(!1), y = He(null), g = He(null), mapApiMessages = (C) => Array.isArray(C) ? C.map((E) => ({
    id: E?.id,
    message: E?.message ?? "",
    created_at: E?.created_at ?? null,
    is_mine: E?.is_mine === !0,
    sender: E?.sender ?? null
  })) : [], mapRealtimeMessage = (C, E) => {
    if (!C?.id)
      return null;
    const I = Number(E ?? 0), F = Number(C?.sender?.id ?? 0);
    return {
      id: C.id,
      message: C?.message ?? "",
      created_at: C?.created_at ?? null,
      is_mine: I > 0 && F === I,
      sender: C?.sender ?? null
    };
  }, mergeMessages = (C, E) => {
    if (!Array.isArray(E) || E.length === 0)
      return C;
    const I = new Set(C.map((F) => F.id)), F = [...C];
    return E.forEach((D) => {
      D?.id && !I.has(D.id) && (I.add(D.id), F.push(D));
    }), F;
  }, loadConversation = async ({ silent: C = !1, afterId: E = null } = {}) => {
    const I = shareRideGetSession();
    if (!I?.token) {
      e("/login");
      return;
    }
    !C && r(!0), !C && a("");
    const F = E != null && Number(E) > 0;
    try {
      const D = F ? "?after_id=" + encodeURIComponent(String(E)) + "&limit=100" : "", M = await shareRideApiRequest("/chat/conversations/" + encodeURIComponent(t) + D, {
        token: I.token
      }), A = mapApiMessages(M?.messages);
      o(M?.conversation ?? null), u((L) => F ? mergeMessages(L, A) : A);
    } catch (D) {
      const M = D instanceof Error ? D.message : "Impossible de charger cette conversation.";
      if (M.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login");
        return;
      }
      C || a(M);
    } finally {
      !C && r(!1);
    }
  }, sendMessage = async (C) => {
    C.preventDefault();
    const E = h.trim();
    if (E === "" || b)
      return;
    const I = shareRideGetSession();
    if (!I?.token) {
      e("/login");
      return;
    }
    k(!0), a("");
    try {
      const F = await shareRideApiRequest("/chat/conversations/" + encodeURIComponent(t) + "/messages", {
        method: "POST",
        token: I.token,
        body: {
          message: E
        }
      });
      if (m(""), o((M) => F?.conversation ?? M), F?.chat_message) {
        const D = mapApiMessages([F.chat_message]);
        u((M) => mergeMessages(M, D));
      } else
        await loadConversation({
          silent: !0,
          afterId: g.current
        });
    } catch (F) {
      const D = F instanceof Error ? F.message : "Envoi impossible.";
      if (D.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login");
        return;
      }
      a(D);
    } finally {
      k(!1);
    }
  };
  _e(() => {
    loadConversation();
    const C = setInterval(() => {
      loadConversation({
        silent: !0,
        afterId: g.current
      });
    }, 15e3);
    return () => clearInterval(C);
  }, [e, t]);
  _e(() => {
    g.current = d.length > 0 ? d[d.length - 1].id : null;
  }, [d]);
  _e(() => {
    let C = !1;
    const E = async () => {
      const I = shareRideGetSession();
      if (!I?.token) {
        x(!1);
        return;
      }
      const F = await shareRideEnsureRealtime(I.token);
      if (!F || C) {
        x(!1);
        return;
      }
      x(!0);
      const D = "conversation." + t;
      F.private(D).listen(".chat.message.sent", (M) => {
        if (C)
          return;
        const A = mapRealtimeMessage(M?.message, I?.user?.id);
        A && u((L) => mergeMessages(L, [A]));
      });
    };
    E();
    return () => {
      C = !0, x(!1);
      try {
        SHARE_RIDE_REALTIME_STATE.echo?.leave("conversation." + t);
      } catch {
      }
    };
  }, [t]);
  _e(() => {
    y.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, [d.length]);
  const C = s?.counterpart?.name ?? "Conversation", E = (s?.trip?.from ?? "Depart") + " -> " + (s?.trip?.to ?? "Destination"), I = s?.trip?.date ? s.trip.date + (s?.trip?.time ? " a " + s.trip.time : "") : "";
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-24", children: [
    /* @__PURE__ */ l("div", { className: "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-6", children: /* @__PURE__ */ f("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => e("/chat"),
          className: "hover:bg-white/20 p-2 rounded-lg transition-colors",
          children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ f("div", { className: "flex-1", children: [
        /* @__PURE__ */ l("h1", { className: "text-xl font-bold", children: C }),
        /* @__PURE__ */ l("p", { className: "text-emerald-100 text-sm", children: E }),
        /* @__PURE__ */ f("p", { className: "text-emerald-100/90 text-xs", children: [
          I,
          I ? " • " : "",
          p ? "Temps reel actif" : "Mise a jour auto"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ f("div", { className: "p-4 space-y-3", children: [
      i && /* @__PURE__ */ l("div", { className: "bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700", children: i }),
      n ? /* @__PURE__ */ f("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ l("div", { className: "w-10 h-10 border-4 border-cyan-200 border-t-cyan-600 rounded-full animate-spin mx-auto mb-4" }),
        /* @__PURE__ */ l("p", { className: "text-gray-500", children: "Chargement de la conversation..." })
      ] }) : d.length === 0 ? /* @__PURE__ */ l("p", { className: "text-center text-sm text-gray-500 py-8", children: "Aucun message pour le moment." }) : d.map((F) => /* @__PURE__ */ l("div", { className: "flex " + (F.is_mine ? "justify-end" : "justify-start"), children: /* @__PURE__ */ f("div", { className: (F.is_mine ? "bg-blue-600 text-white" : "bg-white text-gray-800") + " max-w-[85%] rounded-2xl px-4 py-2 shadow-sm", children: [
        /* @__PURE__ */ l("p", { className: "text-sm whitespace-pre-wrap break-words", children: F.message }),
        /* @__PURE__ */ l("p", { className: "text-[11px] mt-1 " + (F.is_mine ? "text-blue-100" : "text-gray-500"), children: chatClockLabel(F.created_at) })
      ] }) }, F.id)),
      /* @__PURE__ */ l("div", { ref: y })
    ] }),
    /* @__PURE__ */ l("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4", children: /* @__PURE__ */ f("form", { onSubmit: sendMessage, className: "flex items-end gap-2", children: [
      /* @__PURE__ */ l("textarea", { value: h, onChange: (F) => m(F.target.value), rows: 1, maxLength: 2e3, placeholder: "Ecrivez votre message...", className: "flex-1 resize-none border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" }),
      /* @__PURE__ */ l("button", { type: "submit", disabled: b || h.trim() === "", className: "bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed", children: b ? "Envoi..." : "Envoyer" })
    ] }) })
  ] });
}
function Ky() {
  const e = Pe(), [t, n] = Q([]), [r, i] = Q(0), [a, s] = Q(!0), [o, c] = Q(""), [d, u] = Q(!1), [h, m] = Q(!1), [b, k] = Q(null), [completionDecisionKey, setCompletionDecisionKey] = Q(null), iconByType = {
    booking_confirmed: { icon: pf, iconBg: "bg-teal-100", iconColor: "text-teal-600" },
    new_booking: { icon: pt, iconBg: "bg-blue-100", iconColor: "text-blue-600" },
    booking_cancelled: { icon: Tn, iconBg: "bg-orange-100", iconColor: "text-orange-600" },
    booking_cancelled_passenger: { icon: Tn, iconBg: "bg-orange-100", iconColor: "text-orange-600" },
    trip_completion_confirmation_required: { icon: Tn, iconBg: "bg-yellow-100", iconColor: "text-yellow-700" },
    trip_completion_confirmed_credit: { icon: yr, iconBg: "bg-green-100", iconColor: "text-green-600" },
    trip_completion_disputed: { icon: Tn, iconBg: "bg-red-100", iconColor: "text-red-600" },
    trip_completion_confirmed: { icon: mn, iconBg: "bg-green-100", iconColor: "text-green-600" },
    trip_completion_rejected: { icon: Tn, iconBg: "bg-red-100", iconColor: "text-red-600" },
    driver_withdrawal_completed: { icon: yr, iconBg: "bg-emerald-100", iconColor: "text-emerald-700" },
    phone_verification_code_sent: { icon: _i, iconBg: "bg-blue-100", iconColor: "text-blue-600" },
    phone_verified: { icon: mn, iconBg: "bg-green-100", iconColor: "text-green-700" },
    payment: { icon: yr, iconBg: "bg-green-100", iconColor: "text-green-600" },
    rating: { icon: We, iconBg: "bg-yellow-100", iconColor: "text-yellow-600" },
    trip: { icon: rt, iconBg: "bg-purple-100", iconColor: "text-purple-600" },
    chat_message: { icon: Lf, iconBg: "bg-emerald-100", iconColor: "text-emerald-600" },
    system: { icon: ji, iconBg: "bg-gray-100", iconColor: "text-gray-600" }
  }, goBack = () => {
    const g = shareRideGetSession();
    g?.user?.role === "passenger" ? e("/passenger/dashboard") : g?.user?.role === "driver" ? e("/driver/dashboard") : e(-1);
  }, isPassengerViewer = shareRideGetSession()?.user?.role === "passenger", canConfirmFromNotification = (g) => isPassengerViewer && g?.data?.action === "passenger_completion_confirmation" && !!g?.data?.booking_id,
  confirmCompletionFromNotification = async (g, v, N) => {
    N.stopPropagation();
    const P = Number(g?.data?.booking_id ?? 0);
    if (!P)
      return;
    const T = shareRideGetSession();
    if (!T?.token) {
      e("/login");
      return;
    }
    setCompletionDecisionKey(`${g.id}:${v}`), c("");
    try {
      await shareRideApiRequest(`/passenger/bookings/${P}/completion-confirmation`, {
        method: "PATCH",
        token: T.token,
        body: {
          decision: v
        }
      }), await loadNotifications();
    } catch (w) {
      const C = w instanceof Error ? w.message : "Confirmation impossible.";
      if (C.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login");
        return;
      }
      c(C);
    } finally {
      setCompletionDecisionKey(null);
    }
  }, formatTimeLabel = (g) => {
    if (!g)
      return "A l'instant";
    const v = new Date(g);
    if (Number.isNaN(v.getTime()))
      return "A l'instant";
    const N = Math.max(0, Math.floor((Date.now() - v.getTime()) / 1e3));
    if (N < 60)
      return "A l'instant";
    if (N < 3600)
      return `Il y a ${Math.floor(N / 60)} min`;
    if (N < 86400)
      return `Il y a ${Math.floor(N / 3600)} h`;
    if (N < 604800)
      return `Il y a ${Math.floor(N / 86400)} j`;
    return v.toLocaleDateString("fr-FR");
  }, mapNotification = (g) => {
    const v = iconByType[g?.type] ?? iconByType.system;
    return {
      id: g.id,
      type: g.type,
      icon: v.icon,
      iconBg: v.iconBg,
      iconColor: v.iconColor,
      title: g.title ?? "Notification",
      message: g.message ?? "",
      time: formatTimeLabel(g.created_at),
      read: !!g.read_at,
      data: g.data ?? null
    };
  }, loadNotifications = async () => {
    const g = shareRideGetSession();
    if (!g?.token) {
      e("/login");
      return;
    }
    s(!0), c("");
    try {
      const v = await shareRideApiRequest("/notifications", {
        token: g.token
      }), N = Array.isArray(v?.data) ? v.data.map(mapNotification) : [], P = Number(v?.meta?.unread_count ?? N.filter((T) => !T.read).length);
      n(N), i(P);
    } catch (v) {
      const N = v instanceof Error ? v.message : "Impossible de charger les notifications.";
      if (N.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login");
        return;
      }
      c(N);
    } finally {
      s(!1);
    }
  }, markOneAsRead = async (g) => {
    if (!g || g.read)
      return;
    const v = shareRideGetSession();
    if (!v?.token) {
      e("/login");
      return;
    }
    k(g.id), c("");
    try {
      const N = await shareRideApiRequest(`/notifications/${g.id}/read`, {
        method: "PATCH",
        token: v.token
      });
      n((P) => P.map((T) => T.id === g.id ? { ...T, read: !0 } : T)), i((P) => Number(N?.unread_count ?? Math.max(0, P - 1)));
    } catch (N) {
      const P = N instanceof Error ? N.message : "Impossible de marquer cette notification comme lue.";
      if (P.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login");
        return;
      }
      c(P);
    } finally {
      k(null);
    }
  }, markAllRead = async () => {
    const g = shareRideGetSession();
    if (!g?.token) {
      e("/login");
      return;
    }
    u(!0), c("");
    try {
      await shareRideApiRequest("/notifications/read-all", {
        method: "POST",
        token: g.token
      }), n((v) => v.map((N) => ({ ...N, read: !0 }))), i(0);
    } catch (v) {
      const N = v instanceof Error ? v.message : "Impossible de marquer les notifications lues.";
      if (N.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login");
        return;
      }
      c(N);
    } finally {
      u(!1);
    }
  }, clearAll = async () => {
    if (t.length === 0 || !window.confirm("Voulez-vous vraiment effacer toutes vos notifications ?"))
      return;
    const g = shareRideGetSession();
    if (!g?.token) {
      e("/login");
      return;
    }
    m(!0), c("");
    try {
      await shareRideApiRequest("/notifications", {
        method: "DELETE",
        token: g.token
      }), n([]), i(0);
    } catch (v) {
      const N = v instanceof Error ? v.message : "Suppression impossible.";
      if (N.toLowerCase().includes("unauthenticated")) {
        shareRideClearSession(), e("/login");
        return;
      }
      c(N);
    } finally {
      m(!1);
    }
  }, openTrip = (g, v) => {
    v.stopPropagation();
    const N = g?.data?.trip_id;
    N && e(`/trip/${N}`);
  }, openConversation = (g, v) => {
    v.stopPropagation();
    const N = g?.data?.conversation_id;
    N && e(`/chat/${N}`);
  }, handleNotificationClick = async (g) => {
    !g.read && await markOneAsRead(g);
  };
  _e(() => {
    loadNotifications();
  }, [e]);
  return /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-20", children: [
    /* @__PURE__ */ l("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6", children: /* @__PURE__ */ f("div", { className: "flex items-center gap-4 mb-4", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: goBack,
          className: "hover:bg-white/20 p-2 rounded-lg transition-colors",
          children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ f("div", { className: "flex-1", children: [
        /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: "Notifications" }),
        r > 0 && /* @__PURE__ */ f("p", { className: "text-purple-100 text-sm", children: [
          r,
          " non lues"
        ] })
      ] }),
      r > 0 && /* @__PURE__ */ l("button", { onClick: markAllRead, disabled: d, className: "text-sm font-semibold hover:underline disabled:opacity-60", children: d ? "Mise a jour..." : "Tout marquer lu" })
    ] }) }),
    /* @__PURE__ */ f("div", { className: "p-6 space-y-3", children: [
      o && /* @__PURE__ */ l("div", { className: "bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700", children: o }),
      a ? /* @__PURE__ */ f("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ l("div", { className: "w-10 h-10 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4" }),
        /* @__PURE__ */ l("p", { className: "text-gray-500", children: "Chargement des notifications..." })
      ] }) : t.length === 0 ? /* @__PURE__ */ f("div", { className: "text-center py-12", children: [
      /* @__PURE__ */ l(ji, { className: "w-16 h-16 mx-auto text-gray-300 mb-4" }),
      /* @__PURE__ */ l("p", { className: "text-gray-500", children: "Aucune notification" })
    ] }) : t.map((g, v) => /* @__PURE__ */ l(
      ee.div,
      {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: v * 0.05 },
        onClick: () => handleNotificationClick(g),
        className: `bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer ${g.read ? "" : "border-2 border-blue-200"}`,
        children: /* @__PURE__ */ f("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ l("div", { className: `${g.iconBg} p-2 rounded-lg flex-shrink-0`, children: /* @__PURE__ */ l(g.icon, { className: `w-5 h-5 ${g.iconColor}` }) }),
          /* @__PURE__ */ f("div", { className: "flex-1", children: [
            /* @__PURE__ */ f("div", { className: "flex items-start justify-between mb-1", children: [
              /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800", children: g.title }),
              !g.read && /* @__PURE__ */ l("div", { className: "w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1.5" })
            ] }),
            /* @__PURE__ */ l("p", { className: "text-sm text-gray-600 mb-2", children: g.message }),
            /* @__PURE__ */ f("div", { className: "flex items-center justify-between gap-3", children: [
              /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ l(it, { className: "w-3 h-3 text-gray-400" }),
                /* @__PURE__ */ l("span", { className: "text-xs text-gray-500", children: g.time })
              ] }),
              /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
                canConfirmFromNotification(g) && /* @__PURE__ */ f(Xr, { children: [
                  /* @__PURE__ */ l(
                    "button",
                    {
                      onClick: (N) => confirmCompletionFromNotification(g, "yes", N),
                      disabled: completionDecisionKey === `${g.id}:yes` || completionDecisionKey === `${g.id}:no`,
                      className: "text-xs font-semibold text-green-600 hover:underline disabled:opacity-60",
                      children: completionDecisionKey === `${g.id}:yes` ? "Validation..." : "Oui"
                    }
                  ),
                  /* @__PURE__ */ l(
                    "button",
                    {
                      onClick: (N) => confirmCompletionFromNotification(g, "no", N),
                      disabled: completionDecisionKey === `${g.id}:yes` || completionDecisionKey === `${g.id}:no`,
                      className: "text-xs font-semibold text-red-600 hover:underline disabled:opacity-60",
                      children: completionDecisionKey === `${g.id}:no` ? "Envoi..." : "Non"
                    }
                  )
                ] }),
                !g.read && /* @__PURE__ */ l(
                  "button",
                  {
                    onClick: (N) => {
                      N.stopPropagation(), markOneAsRead(g);
                    },
                    disabled: b === g.id,
                    className: "text-xs font-semibold text-blue-600 hover:underline disabled:opacity-60",
                    children: b === g.id ? "Mise a jour..." : "Marquer lu"
                  }
                ),
                g?.data?.conversation_id && /* @__PURE__ */ l(
                  "button",
                  {
                    onClick: (N) => openConversation(g, N),
                    className: "text-xs font-semibold text-emerald-600 hover:underline",
                    children: "Voir message"
                  }
                ),
                g?.data?.trip_id && /* @__PURE__ */ l(
                  "button",
                  {
                    onClick: (N) => openTrip(g, N),
                    className: "text-xs font-semibold text-purple-600 hover:underline",
                    children: "Voir trajet"
                  }
                )
              ] })
            ] })
          ] })
        ] })
      },
      g.id
    )),
      t.length > 0 && /* @__PURE__ */ l("div", { className: "px-6 pb-6", children: /* @__PURE__ */ l("button", { onClick: clearAll, disabled: h, className: "w-full bg-white text-gray-700 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all disabled:opacity-60", children: h ? "Suppression..." : "Effacer toutes les notifications" }) })
    ] })
  ] });
}
function Gy() {
  const e = Pe(), { type: t } = Qo(), [n, r] = Q("mobile"), [i, a] = Q(!1), [s, o] = Q(!1), c = t === "booking" ? {
    title: "Frais de réservation",
    amount: "300",
    description: "Calavi ? Cotonou",
    details: [
      { label: "Frais de réservation", value: "300 FCFA" },
      { label: "Prix du trajet", value: "500 FCFA (à payer au conducteur)" }
    ]
  } : {
    title: "Abonnement Premium",
    amount: "1,500",
    description: "Plan Mensuel",
    details: [
      { label: "Abonnement mensuel", value: "1,500 FCFA" },
      { label: "Économie vs hebdomadaire", value: "500 FCFA" },
      { label: "Validité", value: "30 jours" }
    ]
  }, d = [
    {
      id: "mobile",
      name: "Mobile Money",
      icon: Wf,
      description: "MTN, Moov, Celtiis",
      popular: !0
    },
    {
      id: "card",
      name: "Carte bancaire",
      icon: ll,
      description: "Visa, Mastercard",
      popular: !1
    },
    {
      id: "cash",
      name: "Espèces",
      icon: Qf,
      description: "Payer au point de rencontre",
      popular: !1,
      disabled: t === "subscription"
    }
  ], u = () => {
    a(!0), setTimeout(() => {
      a(!1), o(!0), setTimeout(() => {
        e(t === "booking" ? "/passenger/bookings" : "/driver/dashboard");
      }, 2e3);
    }, 2e3);
  };
  return s ? /* @__PURE__ */ l("div", { className: "min-h-screen bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center p-6", children: /* @__PURE__ */ f(
    ee.div,
    {
      initial: { scale: 0 },
      animate: { scale: 1 },
      className: "text-center text-white",
      children: [
        /* @__PURE__ */ l(
          ee.div,
          {
            initial: { scale: 0 },
            animate: { scale: 1 },
            transition: { delay: 0.2, type: "spring" },
            className: "bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6",
            children: /* @__PURE__ */ l(ls, { className: "w-16 h-16 text-green-500" })
          }
        ),
        /* @__PURE__ */ l("h1", { className: "text-3xl font-bold mb-2", children: "Paiement réussi !" }),
        /* @__PURE__ */ l("p", { className: "text-white/90 mb-6", children: t === "booking" ? "Votre réservation est confirmée" : "Votre abonnement a été renouvelé" }),
        /* @__PURE__ */ l("div", { className: "bg-white/20 backdrop-blur rounded-xl p-4 inline-block", children: /* @__PURE__ */ f("div", { className: "text-4xl font-bold", children: [
          c.amount,
          " FCFA"
        ] }) })
      ]
    }
  ) }) : /* @__PURE__ */ f("div", { className: "min-h-screen bg-gray-50 pb-24", children: [
    /* @__PURE__ */ l("div", { className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6", children: /* @__PURE__ */ f("div", { className: "flex items-center gap-4 mb-4", children: [
      /* @__PURE__ */ l(
        "button",
        {
          onClick: () => e(-1),
          className: "hover:bg-white/20 p-2 rounded-lg transition-colors",
          children: /* @__PURE__ */ l(Ge, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ f("div", { children: [
        /* @__PURE__ */ l("h1", { className: "text-2xl font-bold", children: c.title }),
        /* @__PURE__ */ l("p", { className: "text-purple-100 text-sm", children: c.description })
      ] })
    ] }) }),
    /* @__PURE__ */ f("div", { className: "p-6 space-y-6", children: [
      /* @__PURE__ */ f("div", { className: "bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200", children: [
        /* @__PURE__ */ f("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ l("span", { className: "text-gray-700 font-semibold", children: "Montant à payer" }),
          /* @__PURE__ */ f("div", { className: "text-right", children: [
            /* @__PURE__ */ l("div", { className: "text-4xl font-bold text-purple-600", children: c.amount }),
            /* @__PURE__ */ l("div", { className: "text-sm text-gray-600", children: "FCFA" })
          ] })
        ] }),
        /* @__PURE__ */ l("div", { className: "space-y-2 pt-4 border-t border-purple-200", children: c.details.map((h) => /* @__PURE__ */ f("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ l("span", { className: "text-gray-600", children: h.label }),
          /* @__PURE__ */ l("span", { className: "font-semibold text-gray-800", children: h.value })
        ] }, h.label)) })
      ] }),
      /* @__PURE__ */ f("div", { children: [
        /* @__PURE__ */ l("h3", { className: "font-bold text-gray-800 mb-3", children: "Méthode de paiement" }),
        /* @__PURE__ */ l("div", { className: "space-y-3", children: d.map((h) => /* @__PURE__ */ l(
          ee.button,
          {
            whileTap: { scale: h.disabled ? 1 : 0.98 },
            onClick: () => !h.disabled && r(h.id),
            disabled: h.disabled,
            className: `w-full bg-white rounded-xl p-4 shadow-sm transition-all ${h.disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-md cursor-pointer"} ${n === h.id ? "ring-4 ring-purple-500 shadow-lg" : ""}`,
            children: /* @__PURE__ */ f("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ l("div", { className: `${h.popular ? "bg-purple-100" : "bg-gray-100"} p-3 rounded-lg`, children: /* @__PURE__ */ l(
                h.icon,
                {
                  className: `w-6 h-6 ${h.popular ? "text-purple-600" : "text-gray-600"}`
                }
              ) }),
              /* @__PURE__ */ f("div", { className: "flex-1 text-left", children: [
                /* @__PURE__ */ f("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ l("span", { className: "font-semibold text-gray-800", children: h.name }),
                  h.popular && /* @__PURE__ */ l("span", { className: "bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full", children: "Populaire" }),
                  h.disabled && /* @__PURE__ */ l("span", { className: "bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full", children: "Non disponible" })
                ] }),
                /* @__PURE__ */ l("p", { className: "text-sm text-gray-600", children: h.description })
              ] }),
              n === h.id && /* @__PURE__ */ l("div", { className: "w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ l(ls, { className: "w-4 h-4 text-white" }) })
            ] })
          },
          h.id
        )) })
      ] }),
      n === "mobile" && /* @__PURE__ */ f(
        ee.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "bg-white rounded-xl p-4 shadow-sm space-y-4",
          children: [
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Opérateur" }),
              /* @__PURE__ */ f("select", { className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none", children: [
                /* @__PURE__ */ l("option", { children: "MTN Mobile Money" }),
                /* @__PURE__ */ l("option", { children: "Moov Money" }),
                /* @__PURE__ */ l("option", { children: "Celtiis Cash" })
              ] })
            ] }),
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Numéro de téléphone" }),
              /* @__PURE__ */ l(
                "input",
                {
                  type: "tel",
                  placeholder: "+229 XX XX XX XX",
                  className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                }
              )
            ] })
          ]
        }
      ),
      n === "card" && /* @__PURE__ */ f(
        ee.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          className: "bg-white rounded-xl p-4 shadow-sm space-y-4",
          children: [
            /* @__PURE__ */ f("div", { children: [
              /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Numéro de carte" }),
              /* @__PURE__ */ l(
                "input",
                {
                  type: "text",
                  placeholder: "1234 5678 9012 3456",
                  className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                }
              )
            ] }),
            /* @__PURE__ */ f("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ f("div", { children: [
                /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Expiration" }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "text",
                    placeholder: "MM/AA",
                    className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  }
                )
              ] }),
              /* @__PURE__ */ f("div", { children: [
                /* @__PURE__ */ l("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "CVV" }),
                /* @__PURE__ */ l(
                  "input",
                  {
                    type: "text",
                    placeholder: "123",
                    className: "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ l("div", { className: "bg-blue-50 border border-blue-200 rounded-xl p-4", children: /* @__PURE__ */ f("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ l(Fi, { className: "w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ f("div", { className: "text-sm text-blue-800", children: [
          /* @__PURE__ */ l("p", { className: "font-semibold mb-1", children: "Paiement sécurisé" }),
          /* @__PURE__ */ l("p", { children: "Vos informations de paiement sont cryptées et sécurisées. Nous ne stockons pas vos données bancaires." })
        ] })
      ] }) }),
      n === "cash" && t === "booking" && /* @__PURE__ */ l("div", { className: "bg-yellow-50 border border-yellow-200 rounded-xl p-4", children: /* @__PURE__ */ f("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ l(Tn, { className: "w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ f("div", { className: "text-sm text-yellow-800", children: [
          /* @__PURE__ */ l("p", { className: "font-semibold mb-1", children: "Paiement en espèces" }),
          /* @__PURE__ */ f("p", { children: [
            "Vous devrez payer le montant total (",
            parseInt(c.amount) + 500,
            " FCFA) directement au conducteur avant le départ."
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ l("div", { className: "fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6", children: /* @__PURE__ */ l(
      "button",
      {
        onClick: u,
        disabled: i,
        className: "w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        children: i ? /* @__PURE__ */ f(Xr, { children: [
          /* @__PURE__ */ l("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }),
          /* @__PURE__ */ l("span", { children: "Traitement en cours..." })
        ] }) : /* @__PURE__ */ f(Xr, { children: [
          /* @__PURE__ */ l(yr, { className: "w-5 h-5" }),
          /* @__PURE__ */ f("span", { children: [
            "Payer ",
            c.amount,
            " FCFA"
          ] })
        ] })
      }
    ) })
  ] });
}
const Xy = Uh([
  {
    path: "/",
    Component: tf,
    children: [
      { index: !0, Component: Vy },
      { path: "login", Component: jy },
      { path: "signup", Component: Fy },
      // Driver routes
      { path: "driver/dashboard", Component: Oy },
      { path: "driver/publish", Component: _y },
      { path: "driver/trips", Component: Iy },
      { path: "driver/trips/:id", Component: ZyDriverTripDetails },
      { path: "driver/subscription", Component: ZyDriverSubscription },
      { path: "driver/wallet", Component: ZyDriverWallet },
      { path: "driver/vehicle-documents", Component: ZyDriverVehicleDocuments },
      // Passenger routes
      { path: "passenger/dashboard", Component: $y },
      { path: "passenger/search", Component: Uy },
      { path: "passenger/bookings", Component: zy },
      { path: "passenger/wallet", Component: ZyPassengerWallet },
      // Shared routes
      { path: "trip/:id", Component: Hy },
      { path: "profile", Component: Wy },
      { path: "profile/verification", Component: ZyProfileVerification },
      { path: "settings", Component: ZySettings },
      { path: "support", Component: ZySupport },
      { path: "chat", Component: ZyChatList },
      { path: "chat/:conversationId", Component: ZyChatConversation },
      { path: "notifications", Component: Ky },
      { path: "payment/:type", Component: Gy }
    ]
  }
]);
function qy() {
  return /* @__PURE__ */ l(fh, { router: Xy });
}
const Yy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qy
}, Symbol.toStringTag, { value: "Module" }));
export {
  Jy as Code0_8
};



























