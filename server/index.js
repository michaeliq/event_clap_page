import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, Link, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  if (request.method.toUpperCase() === "HEAD") {
    return new Response(null, {
      status: responseStatusCode,
      headers: responseHeaders
    });
  }
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function Header() {
  return /* @__PURE__ */ jsxs("div", { className: "header", style: {
    width: "100vw",
    position: "absolute",
    top: "125px",
    left: "0px",
    display: "flex",
    padding: "0px 100px",
    zIndex: 1e3
  }, children: [
    /* @__PURE__ */ jsx("div", { className: "img_logo", style: {
      flex: 1
    } }),
    /* @__PURE__ */ jsx("nav", { className: "menu_container", style: {
      width: "100%",
      flex: 2
    }, children: /* @__PURE__ */ jsxs("ul", { className: "menu_list", style: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      flex: 1,
      columnGap: "40px"
    }, children: [
      /* @__PURE__ */ jsx(Link, { to: "#", children: /* @__PURE__ */ jsx("li", { className: "font-bold uppercase text-white", children: "Nosotros" }) }),
      /* @__PURE__ */ jsx(Link, { to: "#", children: /* @__PURE__ */ jsx("li", { className: "font-bold uppercase text-white", children: "Servicios" }) }),
      /* @__PURE__ */ jsx(Link, { to: "#", children: /* @__PURE__ */ jsx("li", { className: "font-bold uppercase text-white", children: "Música" }) }),
      /* @__PURE__ */ jsx(Link, { to: "#", children: /* @__PURE__ */ jsx("li", { className: "font-bold uppercase text-white", children: "Galería" }) }),
      /* @__PURE__ */ jsx(Link, { to: "#", children: /* @__PURE__ */ jsx("li", { className: "font-bold uppercase text-white", children: "Contacto" }) })
    ] }) })
  ] });
}
const bk_footer_desk = "/event_clap/assets/bk_footer_desk-4BA_xh3Q.webp";
const icon_address = "data:image/webp;base64,UklGRmIEAABXRUJQVlA4WAoAAAAQAAAAGQAAJQAAQUxQSNUBAAABoHNr27E9Vn5esW2js22ns+2ks530tm3b1ti2beOd+zqKRxMRE6CoSTUn7Hr05usvn5nTyGSmeJOqrHrn71wIIeRyXx1oI1mMSQM/JNnhj1UFlUeSyZblICS5w5HCyiNJ88Ed/vnk2smnfwUCHCsok/r+Q3D+O961UpECJRos/xoCrJSp7DsE56sheRRf4xIEfm0hTYfA180kWcRU4DjA8TzFngIYI5mSy7+F81PzXr/j3MwnU7JpTAAWzQXCGJlSlfkA5+JqnG/rKmPeI8CrB4FPSmaxNcD3x/+f1eCsBb6tnSXPbuDPSG6ELF2pd4EPluBwOq8shWmoA69MdJx/+ymlqdSrABf7/AGBT+tKFmPKsx0cNtd9D3A+6CzJJKnMQQjA1HzXcBx+XdO6iFm+apPeAgd+7qLlAO7wy4sndt/5xHEHeKaEWv1J1EkMxG6SCj6IATwm/s+ukqbhcekfFZFU/XM8kzNW0aVkdl4sLpOp4gd4BhirqGkyme8Vlima/zKexvmlnUzx9X4kJLmzUokmTXE8iTuFZHEy2SYSnU+rK4+STUWv4RHnl84ypTWVexXA+Xu4MshU8w1w/hkr5VEW1bgPPw6X8iirSWWe/aufZEoEAFZQOCBmAgAA0A4AnQEqGgAmAD5JHIpEIqGhGq38ACgEhLSACe1/pP4idW8gf/D5yT7iMsv+X6Iz/m/Iz4w/+cf6T0i/6/7QPZ9+Mf2n/Y+4D/Gv5l/lPzg/wHf29Av9NiHAum2ltvCu8XgVNnK6AtCHhHQyGvCHzJdPru/fqbqB04C44oSCAAD+2GSnfJ38FORYm17gGved4hlBeyfTZ/SO3YSskS8AelGGCEbKLi4baxPG/wPQPLxf+RwtX2A3hOn7cDY+GjQuXEGjyHeFZJL37BdC0vz/lde1KXi1aF0f+2x8ujOKf++LRIIIlXAQnUdXDth9LG65eE2A5z/xeyD6th6ol9dsF+WVYu4uyvtaS1sP+78Vq7lFdihY1x4SZfVDB1f3B3dhUa1sDC9vspI5SZ8BkpDEVUqRJGQgNU6xv01huA6iz5MVGZtAD8eiZAHFfYWF2HBd7XczGvng7HadvkHNuVb6rm+LjWKpW6HRHGlvoH7bSxPugfgIEEdGxAYb35PGoK9/bhdD4yP8k/2dvC58fSTYSowcYVRcIbTX9v9K6hA9PtQHpv3H8f4cP7Ufn5tZLoVOqqW0Mvf4C6Pm1FlWatA8JfFMbg8353zgsyx3vDV9iLgVcqxfhW7H5Vvt6J/4kFAxvP/CWHl2Q9STnbe3aqgYLloYZSUuQn/bbRnC+Z1/Ex2uJbXcItVJ+6ZjoSPSE253Mg8f1KMvQNGv5mmhVllfVM8YmwzCh1sZdxQbqC7Pi2upwDoydUv72OcHOsgknv5XRiv7xv2eS/qXxRXkys98C8bSqw7Fb/+cx46JwkH+d8qupaAAAAA=";
const icon_instagram = "data:image/webp;base64,UklGRvgEAABXRUJQVlA4WAoAAAAQAAAAIgAAIwAAQUxQSCgCAAABkCvbtmlbY+5rG8+KzMg2P8B+mW3biGwrs237XTzbuEYPDva5fxAREyCZlNR19Myp7mdM6pUmmSRT5Ij7+UUBLS54MStRZqbUy5Tlk7oyJd8CSjMO7dnvdvehDIA3NaQdwOd+SY65d5L6ZAFHg5vkwJs6CnT521DUdSH8byazAEQMnl1NtX/B+jOwTX6aF/OYC+fDtALuvoSBPkxSeIWKlWIlyW7AzwrqWkpWBkXtZR6O1Hjtw3dv3r3Y0t6k4bmlW4LUKo+Ml+S3kacpYkU+3ot2JCqoeZdIqX0BL19S0M7DFHsCIO9fDsDjSpJkLmT7gPczWzZqMuEZcDVCJrkZAJwtL8+EHcBkefoX/QBuxcokmYKOwtty7prnUdhe5iFT7b+U9HY3Cu6FyeTVnGOwyN0C2G3ycwEcDsiuMhsF98N8mXMMFrlrnk9he5kXU60/lPZ2F/kAbsbKJJmCTsGHdHcaCJwtL8+E3cBkBcDZB3yY17pRk/EZwIUwmStHMScAcv/lADyuIJMf+W08ZIpc8g/vBVsSZX5kUdjei0xqtO7R+3cfMrY0N5m8tsoj4wkM8CaTFFWhUqVoSSZPUxfIPgnbfPht8rkO7i6CnGYyV95NtX/ChiZ58Ka2Al3+NhR3tR3Al76Jjrl3knpnAkeClXwLIOPg7n1udx/KKAXe1pAp9TJleb+mTFL0yNs5xUWBLM5/PiteMplJ8Z3HzJzmfuaYHuUkMwFWUDggqgIAAHAPAJ0BKiMAJAA+USKQRSOiIZVdVKw4BQS0gAipP2v8mcmV9zziv+AyRT6f/hO+zjhtSR/nPRM/qvKh8v/6/+v/sz9An8S/mX+j/tfZG/YD2D/08Dg/8H4DV7T0xt8dPH1WVj7FgmP6Ixd+z3jcdeevF5slG61hFJUVfJ2L/J9ETTTYgAD+4i/tdTVZCV8cDnlJQ4pNBOu/ac25V8mcDyBR4VPc+fSr9x8Fmd/RGlpPzi8x5BhQexzvzmT5lUGqr/DOJbSVzHlPYyWpsQXfsRGj134W4CeISbcu/ST+mGcVUAmFHkBfJALkr6VDZWsMY99VVxs9A7zVfE6WuZPWdELf/p3wRGE/PWGBSUP0Jic3p+lL5Ko9jCMXp/ch6a0m/ywGqCncZc3UOnzJLBoyWeklJDJ5w2PYL+52qsqKZI21556JaCQucyXBX5ttwRTYO6eTvduiovkbdKD9DTcLUwJJze5ef/q9Kl+on59UU32kZkTNyp8Q0KRLSNcCuWVwBTzv+vLbqkTuXfjF+Qc8J1Zmm4QCQePhQYRKnMb4hiH64Wy7w/w1OMCixWP810EJ3tK6/iaamr1kYapjEgnKVdv2BYqpcGPyNd9uPSUlUunyuDFN491jOYHbMziJg+jllyPO7ikEiPi3/OyokhvyNtvrhAMtlB1e/fFr4tgZ1f5+88/9d2WtUEBz3xlb5pvE8GXrtJM6h7zFzadSdBmkLof8pjIYSdD/VcjRG+WG7WLnh8Af1ZgI7mpe2HCMxsh/hBX2fiFa4VsrqhdtNKCWiA8SUsaj2Mxx7DlHhQHuaEY5VCrbN5diNv3NbQvmi+gKfntYL2qLwhrqlpmRKbNZiTfVy7DgqBpeJ//2VSqjb6LPiEdVhq7ULjBMIQot1AzvZxonEwX+pMAAAAA=";
const icon_mail = "data:image/webp;base64,UklGRl4CAABXRUJQVlA4WAoAAAAQAAAAHgAAFAAAQUxQSC8BAAABkHPbtrG9qm3btsLOaW2nNCt2GalsO61tVbZt2+bZq3kUERMQU/zi7c1bwd54+qtn5JpFWQ8I+lebPrvXsSliIZg/cTxxPCeXw5Oyjr+RD4kpMYfh4AoMBmTfxzz950+rqi8Yh1aAxPrQdSA3cT5ppGQ4gLhf0M0wB4k5kbtBuGHQO+cZBvzH2pW9x4QXJFaGrgcT19MH/cNwdANxvWSIYHX2NjD8GYyNaL6kY0RzMPwZXxra/d3dZdq/qYlXkHxInIubjPO+0OWYPAlmRh7BBEi8zO8I5sH426H8JQhHw3oXPcFcjCe5/cR/3A0WRGxH4tByxJbQtUh4lbiSOA44tAxGpd5Fwqf40bLZFw5s/l3T9heG//8wPunurdG1Mwn+aNHgkFV/7ty8FfSX03EAVlA4IAgBAABwBwCdASofABUAPkkcjEQioaGYBgAoBIS0gAJEA9VjME80/7L3A/49/Sf+B6oHUZ/rAOL9WD9nKhLABCykiE+aH3AYkAD+/czK+7suG5EJP/j+19ZxawDQq9DKyXoigiUc6Tkc+E5NbSbyX+DKO3f7GR55ulvEcZKOB//S2vsR9EmYNc+dhzErry4jBHI7dPipWhZX1krccl2fF3Pfdvh8ChH2WJysEH9sgJ/ZgCNYcGvcRM+4EQJSEoNKm2IduGDXii/8P5Tmc1ZsYwLYLMrdDLOhfdEjxk/5njP37KE0OVXstP/nyM8GkX9QO+b/I/i3/CH7Jj/NBf+Qzin/9XP/wCDf+XKiAAA=";
const icon_whatsapp = "data:image/webp;base64,UklGRhwGAABXRUJQVlA4WAoAAAAQAAAAIgAAIgAAQUxQSJYCAAABoHbb2iFJln5udLZt27Ztm2Pbtm3btm3btu1pp+K9HyIyMiImgIqCntvd8lHB9qbXz13SBESVgonX/h3swrp160t2/MkpnSHKJNpeW7Q/unzrke3adZ28352/2H8fVwtVklj4p8PT8+pQudUun9uvdEIV4KDY3y2LyN7gyM3+bQjp4iD7wRYgZYJRP/qPIQgQ84OvzSGRXaLjl/62NRHQ8hc/VINIgJQBQedffI9AXOfvWhHB6juXgzIkZ5W9BphW8jIEq8su7wDKIrjcn9SDm/ykEO3/cHDYnuyi49/elh6/exGCnR0cu7xjNuBi38uu/rRh4lDbjv1Ho2xiRvi12+2+BAH7J4KvoNqGX5aXfeQdSM4o2fbFtVAV3OMjCvkxKU2/tx0mEVHtab7da9umcJqD/WyOqnf3/V7bJq3Tfw7BB4Gq2NP3eGO/FLFfojAdpITS9vb9/5XnVcg97hB73SIQo0eBUs7zTW/4wBREy68dYsenN2TXYn5/UOJJH3yq70AJRJ9/HYL9wTV524eAoMUPpdmzS393Jl2M+sMh2HYcO94xsdzftm7yiQ+qJLq8ZQcnY+dHAA/4SjjVXzVLA9HwnJIdbAd7JozJFydAx299YiUE4x7JO/XMiDov+2FJXOubMiDQ2Cs//HPtZ3sAx3vDEKD+l16VBQTU6TG4DrB17MMAxuT/7Zgt63Yl3x8hONKPCHJNBcpW++TYT9RDwEPeU4MOffH3O3qSucaMN+wH6xEBPX/1o28WbHvtZdObpKnt6idLzh+fIwLYMra99sW9d/nA9hf3nLb77gdc+PgvdvGh4RCRvL/49pXbdq4Jjdbc/WtweuHTSyZFEJG6/ZxGJAV0X3bEjfffc9/VB81oBkKkA1ZQOCBgAwAAsBIAnQEqIwAjAD5RHo1Eo6GhFx38ADgFBLSACeg/ufQIeLvYnJ7/jvmA4Wb0Cv4z/b8lT+Pf5TTIfyz/L8DP1Ef5r/xfQ9/1fJT+Of1j/hf274Av43/Nv8r/af3g/vPzAeqj9RvYR/R8Rwd7NiMInzWN0RV+08j5tYxDi981sDx6zOdmNy4bW/vBaUGCBfd1d4B6sK++jRGerbkmDAAA/sjgT+v7Q6jV7orSdSNrCxTjQuqP8RnohfkVHeMbX4Ez4lFg9y2jptn8VfEt8G854zpDeyL5VWq72HUlFpXNkfD8blRn8OKHvy10hOqAl3zAOApxqNezxz/G2sTL5M9f+TnqPbbzencYTlZXC8hV+JvowXxDi5E2Z/fM73KWc6oRGfbcVgbWfNqqQ3aK9h80cPFbAoXDghuiDzyby4L7ZeH5Hce+o3vx1sz/pZAu+MhCB/ga9olCn/kEMau3HQrvN7OnhW5HfyXLH/xxRAo4L0cC5nwNhCt1v2AVYfjKkSxwDWTK9GbV+mF9DFsOsYiMyGx2u2/8PwVvVskljJzPLkv5QUJb7Gglsk0y7nu5qmEV6WqI4YK6oz4M77P+2OST7KoM0jB9kcV9uxE93pHh8weRYVbAf+Bm1v+uWOBkjaBfJ4Ni7oAhO2g39kXvlOHPyEFayImiyuaSkyBoCZNBSdDYS3/ClKxtIMkpE1BKymRHajPbBM0CwbZUFlsOklnR4cdbCG/alHV6/82iOuNw0qlsgGtTKNlAF3ChJC+oux6B8GPSw0dW4xr141QGRTOJ3W9ABjAfLrkjMGvHI3frtT9NYk5VK0dMecSOMPOm+sRRP21sBcWxR7z/DNK5bkhnm351wJt/Rylu4tvgHw03Vxe5LeY7Oqamr37/q1Sp+5fDpfXm0Ea1/GCY7yJJ7wOcbGcid8Yjc9M1FtS8xarZOpnxFiNLx1Vulm3Nf0FT8KAehIZ9++bf0ErCzXFNZdn6xK+3/jLH1v8af/cqljtchnw0yl98g9f8O8RTLvwAeq+tI7cOdTPcuE/4c9WPhkfVb+6rJ0tuN90x8akaR7hUvAufvbhh+PzEyO0QLzkB0UhlRQ5gnkvg2fuODmJYiP89daD5kawCIzNWs7Ly48rk67oTNEVgIDcEYfOePZ/kqAAA";
function Footer() {
  return /* @__PURE__ */ jsx("div", { className: "footer", style: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${bk_footer_desk})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "500px",
    height: "582px",
    width: "100%",
    backgroundSize: "100% 100%"
  }, children: /* @__PURE__ */ jsx("div", { className: "content_footer", style: {
    width: "77%"
  }, children: /* @__PURE__ */ jsxs("ul", { className: "list_social_network flex flex-col gap-8 text-[22px] font-semibold", children: [
    /* @__PURE__ */ jsx("li", { className: "link_social_footer text-white", children: /* @__PURE__ */ jsxs("a", { href: "", children: [
      /* @__PURE__ */ jsx("img", { className: "inline mr-2", src: icon_whatsapp, alt: "Número teléfonico Event Clap" }),
      " (57) 318 801 6709"
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "link_social_footer text-white", children: /* @__PURE__ */ jsxs("a", { href: "", children: [
      /* @__PURE__ */ jsx("img", { className: "inline mr-2", src: icon_mail, alt: "Correo electrónico Event Clap" }),
      " gerencia@eventclap.com"
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "link_social_footer text-white", children: /* @__PURE__ */ jsxs("a", { href: "", children: [
      /* @__PURE__ */ jsx("img", { className: "inline mr-2", src: icon_address, alt: "Dirección de Event Clap" }),
      " Cr 28B N 72 -12 Bogotá- Colombia"
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "link_social_footer text-white", children: /* @__PURE__ */ jsxs("a", { href: "", children: [
      /* @__PURE__ */ jsx("img", { className: "inline mr-2", src: icon_instagram, alt: "Cuenta de instagram de Event Clap" }),
      " event_clap"
    ] }) }),
    /* @__PURE__ */ jsx("li", { className: "link_social_footer text-white", children: /* @__PURE__ */ jsxs("a", { href: "", children: [
      /* @__PURE__ */ jsx("img", { className: "inline mr-2", src: icon_instagram, alt: "Cuenta de facebook de Event Clap" }),
      " Juan Carlos Giraldo"
    ] }) })
  ] }) }) });
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const image_banner = "/event_clap/assets/banner_hero_homepng-CBBWWn9r.webp";
function HeroSectionHome() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "hero_section_home relative w-screen bg-gray-900",
      id: "hero_section_home",
      style: {
        height: "100vh",
        maxHeight: "901px",
        minHeight: "700px",
        backgroundImage: `url(${image_banner})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "100% 100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "7px solid #F08844"
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "info_section_home",
          style: {
            width: "77%",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "start"
          },
          children: [
            /* @__PURE__ */ jsx("h1", { className: "title_info_section_home w-90 text-[40px] font-bold leading-12 text-white", children: "Donde la emoción se encuentra con la innovación." }),
            /* @__PURE__ */ jsx("h4", { className: "subtitle_info_section_home w-85 text-[26px] font-light leading-8 text-white", children: "Eventos con propósito, emoción y tecnología 4.0." }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "cta_info_section_home cursor-pointer bg-[#BA1B56] transition duration-300 ease-in-out text-white hover:bg-[#fff] hover:text-[#AD0569]",
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "10px 25px",
                  marginTop: "15px",
                  border: "1px solid #D6769A",
                  borderRadius: "25px",
                  boxShadow: "5px 5px 10px #0008"
                },
                children: "Quiero mi evento con alma"
              }
            )
          ]
        }
      )
    }
  );
}
const circle_1 = "/event_clap/assets/circle_1-wD4qezFG.webp";
const circle_2 = "/event_clap/assets/circle_2--vrXafJI.webp";
const circle_3 = "data:image/webp;base64,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";
const img_info_section = "/event_clap/assets/img_info_section-D-fQ7Wpb.webp";
const experiencias_alma = "/event_clap/assets/experiencias%20con%20alma_png-FWV4bFRK.webp";
function WeSectionHome() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "we_section_home relative",
      id: "we_section_home",
      style: {
        backgroundColor: "#fff",
        width: "100%",
        minHeight: "675px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsx("img", { className: "decoration_2_we_section_home absolute top-[129px] left-0", src: circle_3, alt: "Decoración Web Site Event Clap" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "info_we_section_home",
            style: {
              width: "38.5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              gap: "10px"
            },
            children: [
              /* @__PURE__ */ jsx("p", { className: "tag_info_we_section_home text-[#720742] text-[22px] bg-[#EDF0F7] py-1 px-4 rounded-sm", children: "Somos EventClap" }),
              /* @__PURE__ */ jsx("h2", { className: "title_info_we_section_home font-bold text-[40px] text-[#886891] uppercase", children: "más que eventos:" }),
              /* @__PURE__ */ jsx("img", { className: "subtitle_info_we_section_home ", src: experiencias_alma, alt: "Experiencias con alma" }),
              /* @__PURE__ */ jsxs("p", { className: "description_info_we_section_home text-[22px]", style: { width: "80%" }, children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Co–creamos contigo." }),
                " Diseñamos momentos que conectan, transforman y dejan huella. ",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("br", {}),
                "Fusionamos emoción, tecnología y propósito para que cada experiencia cuente una historia que se recuerde y se comparta."
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px 30px",
                    marginTop: "15px",
                    border: "1px solid #D6769A",
                    borderRadius: "25px",
                    boxShadow: "2px 2px 6px #0008"
                  },
                  className: "cta_info_we_section_home cursor-pointer bg-[#9F1A91] transition duration-300 ease-in-out text-white font-bold hover:bg-[#fff] hover:text-[#AD0569]",
                  children: "Conoce nuestra esencia"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              width: "38.5%",
              position: "relative"
            },
            className: "img_we_section_home flex justify-end align-center ",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: circle_2,
                  alt: "Decoración web Event Clap",
                  style: {
                    position: "absolute",
                    left: "4%",
                    bottom: "10%",
                    scale: "1.1"
                  }
                }
              ),
              /* @__PURE__ */ jsx("img", { src: img_info_section, style: { position: "relative", width: "80%", height: "auto", minWidth: "500px" }, alt: "Pareja feliz celebrando eventos con EventClap" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("img", { className: "decoration_1_we_section_home absolute top-0 right-0 ", src: circle_1, alt: "Decoración Web Site Event Clap" })
      ]
    }
  );
}
const bk_img_services_section = "/event_clap/assets/bk_img_services_section-BILVR_Dp.webp";
const img_1_services_section_home = "/event_clap/assets/img_ref_1_services_section-CrMzS2DW.webp";
const img_2_services_section_home = "/event_clap/assets/img_ref_2_services_section-lyijt1TJ.webp";
const img_3_services_section_home = "/event_clap/assets/img_ref_3_services_section-CXLnAu_4.webp";
const img_4_services_section_home = "/event_clap/assets/img_ref_4_services_section-DGRU2SBW.webp";
const cardsServices = [
  {
    title: "bodas & celebraciones",
    link: "",
    img_src: img_1_services_section_home
  },
  {
    title: "eventos corporativos",
    link: "",
    img_src: img_2_services_section_home
  },
  {
    title: "activaciones btl",
    link: "",
    img_src: img_3_services_section_home
  },
  {
    title: "marketing emocional",
    link: "",
    img_src: img_4_services_section_home
  }
];
function ServicesSectionHome() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "services_section_home",
      id: "services_section_home",
      style: {
        backgroundColor: "#fff",
        backgroundImage: `url(${bk_img_services_section})`,
        width: "100%",
        maxHeight: "901px",
        minHeight: "745px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "100% 100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box"
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          style: {
            width: "77%",
            minHeight: "60vh",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
          },
          className: "container_services_section_home",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "header_container_services_section_home flex justify-center items-center gap-5 mb-5", children: [
              /* @__PURE__ */ jsx("div", { className: "line w-[82px] h-[2px] bg-[#720742]" }),
              /* @__PURE__ */ jsx("h2", { className: "title_services_section_home uppercase text-[45px] text-white font-semibold", children: "servicios destacados" }),
              /* @__PURE__ */ jsx("div", { className: "line w-[82px] h-[2px] bg-[#720742]" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "container_card_services_section_home flex justify-center items-center gap-5", children: cardsServices?.map((item, key) => /* @__PURE__ */ jsxs("div", { className: "card_services_section_home flex flex-col justify-center items-center gap-x-6 gap-y-2", children: [
              /* @__PURE__ */ jsx(
                "h4",
                {
                  className: "title_card_services_section_home uppercase text-white text-[26px]",
                  style: {
                    fontFamily: "Bebas Neue"
                  },
                  children: item?.title
                }
              ),
              /* @__PURE__ */ jsx("img", { src: item?.img_src, alt: "Serivicio de bodas y celebraciones" }),
              /* @__PURE__ */ jsx("a", { href: item?.link, children: /* @__PURE__ */ jsx(
                "button",
                {
                  className: "cta_card_services_section_home cursor-pointer bg-[#BA1B56] transition duration-300 ease-in-out text-white hover:bg-[#fff] hover:text-[#AD0569] font-semibold",
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px 25px",
                    marginTop: "15px",
                    border: "1px solid #D6769A",
                    borderRadius: "25px",
                    boxShadow: "2px 2px 5px #0008"
                  },
                  children: "Ver más"
                }
              ) })
            ] })) })
          ]
        }
      )
    }
  );
}
const rectangle_gray = "data:image/webp;base64,UklGRuACAABXRUJQVlA4WAoAAAAQAAAA1wIAbAEAQUxQSK8AAAABb2CQbeTgjeBmcG/0EREZlfKnCri1bauqNm5NvEKwBijF6nAaIHcJPSImc7kdwf87WxH9nwCpugkWb6clRc9g8mNMOgWbFxV9fHaOrYPRczen1R5O672cdgz4H//jf/yP//E//sf/+B//43/8j//xP/7H//gf/+N//I//8T/+x//4H//jf/yP//E//v/mb6ctHk7rXZxWHzqtEH18do7p5LOiFL1dNopJao091klJAFZQOCAKAgAAEDwAnQEq2AJtAT5RKJJHI6KhoSAIAHAKCWlu4XdhG0AJ7APfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ycfwAP7/4BIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
const img_2_gallery = "/event_clap/assets/img_2_gallery_section-B--1H-b9.webp";
const img_3_gallery = "/event_clap/assets/img_3_gallery_section-CH3w-N4f.webp";
const img_4_gallery = "/event_clap/assets/img_4_gallery_section-BRmgD3HD.webp";
const img_5_gallery = "/event_clap/assets/img_5_gallery_section-B0Klt964.webp";
const img_6_gallery = "/event_clap/assets/img_6_gallery_section-ClzOHoU7.webp";
const img_7_gallery = "/event_clap/assets/img_7_gallery_section-D4eohU75.webp";
function GallerySectionHome() {
  return /* @__PURE__ */ jsx("section", { className: "gallery_section_home", id: "gallery_section_home", style: {
    backgroundColor: "#fff",
    width: "100%",
    minHeight: "745px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "100% 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box"
  }, children: /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        width: "77%",
        minHeight: "60vh",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
      },
      className: "container_gallery_section_home mb-20",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "header_container_gallery_section_home flex justify-center items-center gap-5 my-5", children: [
          /* @__PURE__ */ jsx("div", { className: "line w-[82px] h-[2px] bg-[#720742]" }),
          /* @__PURE__ */ jsx("h2", { className: "title_gallery_section_home uppercase text-[45px] text-[#390447] font-bold", children: "servicios destacados" }),
          /* @__PURE__ */ jsx("div", { className: "line w-[82px] h-[2px] bg-[#720742]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "img_content_gallery_section_home flex flex-col gap-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "row_1_content_gallery_section_home flex justify-evenly items-center gap-4", children: [
            /* @__PURE__ */ jsx("img", { src: rectangle_gray, alt: "Image Galery 1" }),
            /* @__PURE__ */ jsx("img", { src: img_2_gallery, alt: "Image Galery 2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "row_1_content_gallery_section_home flex justify-evenly items-center gap-4", children: [
            /* @__PURE__ */ jsx("img", { src: img_3_gallery, alt: "Image Galery 3" }),
            /* @__PURE__ */ jsx("img", { src: img_4_gallery, alt: "Image Galery 4" }),
            /* @__PURE__ */ jsx("img", { src: img_5_gallery, alt: "Image Galery 5" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "row_1_content_gallery_section_home flex justify-evenly items-center gap-4", children: [
            /* @__PURE__ */ jsx("img", { src: img_6_gallery, alt: "Image Galery 6" }),
            /* @__PURE__ */ jsx("img", { src: img_7_gallery, alt: "Image Galery 7" })
          ] })
        ] })
      ]
    }
  ) });
}
const circle_4 = "data:image/webp;base64,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";
const img_bodas = "/event_clap/assets/img_bodas_section-CajKpEkq.webp";
const bodas_celebraciones = "/event_clap/assets/Bodas%20_%20Celebraciones-CMcuThsX.webp";
function WeddingSectionHome() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "wedding_section_home relative",
      id: "wedding_section_home",
      style: {
        backgroundColor: "#F8F1F7",
        width: "100%",
        minHeight: "534px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsx("img", { className: "decoration_2_wedding_section_home absolute -top-40 -left-15", src: circle_4, alt: "Decoración Web Site Event Clap" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "info_wedding_section_home",
            style: {
              width: "38.5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              gap: "20px"
            },
            children: [
              /* @__PURE__ */ jsx("img", { className: "subtitle_info_wedding_section_home ", src: bodas_celebraciones, alt: "Bodas y celebraciones" }),
              /* @__PURE__ */ jsxs("p", { className: "description_info_wedding_section_home text-[22px]", style: { width: "85%" }, children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Historias que se viven con los cinco sentidos." }),
                " Diseño emocional, producción total y acompañamiento real."
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px 30px",
                    marginTop: "15px",
                    border: "1px solid #D6769A",
                    borderRadius: "25px",
                    boxShadow: "2px 2px 6px #0008"
                  },
                  className: "cta_info_wedding_section_home cursor-pointer bg-[#9F1A91] transition duration-300 ease-in-out text-white font-bold hover:bg-[#fff] hover:text-[#AD0569]",
                  children: "Planear mi Boda"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              width: "38.5%",
              position: "relative"
            },
            className: "img_wedding_section_home flex justify-end align-center ",
            children: /* @__PURE__ */ jsx("img", { src: img_bodas, style: { position: "relative", width: "80%", height: "auto", minWidth: "500px" }, alt: "Pareja feliz celebrando eventos con EventClap" })
          }
        ),
        /* @__PURE__ */ jsx("img", { className: "decoration_1_wedding_section_home absolute bottom-0 right-0 ", src: circle_1, alt: "Decoración Web Site Event Clap" })
      ]
    }
  );
}
const img_corporate = "/event_clap/assets/img_evn_coorp_section-CDNzQdsw.webp";
function CorporateSectionHome() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "corporate_section_home relative",
      id: "corporate_section_home",
      style: {
        backgroundColor: "#FFF",
        width: "100%",
        minHeight: "775px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsx("img", { className: "decoration_1_corporate_section_home absolute bottom-[5%] left-0 -rotate-y-[180deg]", src: circle_1, alt: "Decoración Web Site Event Clap" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              width: "38.5%",
              position: "relative"
            },
            className: "img_corporate_section_home flex justify-start align-center ",
            children: /* @__PURE__ */ jsx("img", { src: img_corporate, style: { position: "relative", width: "80%", height: "auto", minWidth: "500px" }, alt: "Pareja feliz celebrando eventos con EventClap" })
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "info_corporate_section_home",
            style: {
              width: "38.5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "space-evenly",
              gap: "30px"
            },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "title_info_corporate_section_home font-normal text-[40px] text-[#390447] uppercase", children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold text-[#390447]", children: "Eventos" }),
                " Corporativos"
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "description_info_corporate_section_home text-[22px] text-right", style: { width: "85%" }, children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Experiencias estratégicas" }),
                /* @__PURE__ */ jsx("br", {}),
                "que impulsan equipos,",
                /* @__PURE__ */ jsx("br", {}),
                "marcas y comunidades."
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px 30px",
                    marginTop: "15px",
                    border: "1px solid #D6769A",
                    borderRadius: "25px",
                    boxShadow: "2px 2px 6px #0008"
                  },
                  className: "cta_info_corporate_section_home cursor-pointer bg-[#9F1A91] transition duration-300 ease-in-out text-white font-bold hover:bg-[#fff] hover:text-[#AD0569]",
                  children: "Quiero un evento corporativo"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("img", { className: "decoration_2_corporate_section_home absolute top-[25%] right-0 rotate-y-[180deg] rotate-x-[180deg]", src: circle_3, alt: "Decoración Web Site Event Clap" })
      ]
    }
  );
}
const btl = "/event_clap/assets/img_act_btl_section-UfcacuJb.webp";
function BTLSectionHome() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "btl_section_home relative",
      id: "btl_section_home",
      style: {
        backgroundColor: "#3C074A",
        background: "linear-gradient(90deg,rgba(60, 7, 74, 1) 36%, rgba(146, 52, 233, 1) 100%)",
        width: "100%",
        minHeight: "535px",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ jsx("img", { className: "decoration_2_btl_section_home absolute top-17 left-0", src: circle_3, alt: "Decoración Web Site Event Clap" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "info_btl_section_home",
            style: {
              width: "38.5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              gap: "20px"
            },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "title_info_we_section_home font-bold text-[50px] text-white uppercase", children: "Activaciones BTL" }),
              /* @__PURE__ */ jsxs("p", { className: "description_info_btl_section_home text-[22px] text-white", style: { width: "85%" }, children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold", children: "Creatividad que se viraliza." }),
                /* @__PURE__ */ jsx("br", {}),
                "Campañas sensoriales,",
                /* @__PURE__ */ jsx("br", {}),
                "temáticas y con propósito."
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px 40px",
                    marginTop: "15px",
                    border: "1px solid #D6769A",
                    borderRadius: "25px",
                    boxShadow: "2px 2px 6px #0008"
                  },
                  className: "cta_info_btl_section_home cursor-pointer bg-white transition duration-300 ease-in-out text-[#390447] font-bold hover:bg-[#fff] hover:text-[#AD0569]",
                  children: "Activar mi marca"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              width: "38.5%",
              position: "relative"
            },
            className: "img_btl_section_home flex justify-end align-center ",
            children: /* @__PURE__ */ jsx("img", { src: btl, style: { position: "relative", width: "80%", height: "auto", minWidth: "500px", scale: "1.2", zIndex: "100" }, alt: "Pareja feliz celebrando eventos con EventClap" })
          }
        )
      ]
    }
  );
}
function meta({}) {
  return [{
    title: "Event Clap"
  }, {
    name: "description",
    content: "Bienvenidos a Event Clap!"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(HeroSectionHome, {}), /* @__PURE__ */ jsx(WeSectionHome, {}), /* @__PURE__ */ jsx(ServicesSectionHome, {}), /* @__PURE__ */ jsx(GallerySectionHome, {}), /* @__PURE__ */ jsx(WeddingSectionHome, {}), /* @__PURE__ */ jsx(CorporateSectionHome, {}), /* @__PURE__ */ jsx(BTLSectionHome, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const services = UNSAFE_withComponentProps(function Services() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: "Sección de servicios"
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: services
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/event_clap/assets/entry.client-DhTvK0pq.js", "imports": ["/event_clap/assets/chunk-WWGJGFF6-CkeObGVN.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/event_clap/assets/root-CQfKOTPP.js", "imports": ["/event_clap/assets/chunk-WWGJGFF6-CkeObGVN.js"], "css": ["/event_clap/assets/root-B3S6jro7.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/event_clap/assets/home-DaGkzLPf.js", "imports": ["/event_clap/assets/chunk-WWGJGFF6-CkeObGVN.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/services": { "id": "routes/services", "parentId": "root", "path": "servicios", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/event_clap/assets/services-CSPqUgVG.js", "imports": ["/event_clap/assets/chunk-WWGJGFF6-CkeObGVN.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/event_clap/assets/manifest-4d81730a.js", "version": "4d81730a", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false, "unstable_subResourceIntegrity": false, "v8_middleware": false, "v8_splitRouteModules": false, "v8_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = ["/", "servicios"];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/event_clap/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/services": {
    id: "routes/services",
    parentId: "root",
    path: "servicios",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
