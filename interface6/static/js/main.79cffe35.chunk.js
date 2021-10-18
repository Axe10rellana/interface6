(this["webpackJsonp07-practica"] = this["webpackJsonp07-practica"] || []).push([
  [0],
  {
    11: function (e, c, a) {
      "use strict";
      a.r(c);
      var i = a(1),
        t = a.n(i),
        s = a(3),
        r = a.n(s),
        j = (a(8), a(0)),
        n = function () {
          return Object(j.jsxs)("div", {
            className: "header",
            children: [
              Object(j.jsx)("div", {
                children: Object(j.jsxs)("h3", {
                  children: [
                    "EXPLORAR ",
                    Object(j.jsx)("i", { className: "fas fa-chevron-down" }),
                  ],
                }),
              }),
              Object(j.jsxs)("div", {
                className: "header__right",
                children: [
                  Object(j.jsx)("i", { className: "fas fa-search" }),
                  Object(j.jsx)("i", { className: "fas fa-shopping-cart" }),
                  Object(j.jsx)("a", {
                    href: "#iniciarsesion",
                    children: "INICIAR SESI\xd3N",
                  }),
                ],
              }),
            ],
          });
        },
        l = function () {
          return Object(j.jsxs)("div", {
            className: "new__letters",
            children: [
              Object(j.jsx)("h2", {
                children: "Vaya de compras en Square Market",
              }),
              Object(j.jsx)("p", {
                children:
                  "Compre en comercios locales increibles, Square Market le ofrece articulos unicos de todos lugares en un solo lugar.",
              }),
              Object(j.jsxs)("form", {
                children: [
                  Object(j.jsx)("input", {
                    type: "email",
                    name: "email",
                    id: "email",
                    placeholder: "Direcci\xf3n de correo electr\xf3nico",
                    required: !0,
                  }),
                  Object(j.jsx)("button", {
                    children: Object(j.jsx)("i", {
                      className: "fas fa-chevron-right",
                    }),
                  }),
                ],
              }),
              Object(j.jsx)("small", {
                children:
                  "Ingresa tu direcci\xf3n de correo electr\xf3nico para recibir actualizaciones sobre articulos increibles.",
              }),
            ],
          });
        },
        d = a.p + "interface6/interface6/static/media/image1.a11682b9.jpg",
        m = a.p + "interface6/interface6/static/media/image2.b33ca36b.jpg",
        b = a.p + "interface6/interface6/static/media/image3.cff5bb5f.jpg",
        o = a.p + "interface6/interface6/static/media/image4.0b7f6808.jpg",
        x = a.p + "interface6/interface6/static/media/image5.e69f598d.jpg",
        O = a.p + "interface6/interface6/static/media/image6.85cb8042.jpg",
        h = a.p + "interface6/interface6/static/media/image7.8ea1904c.jpg",
        g = function () {
          return Object(j.jsxs)("div", {
            children: [
              Object(j.jsxs)("div", {
                className: "gallery",
                children: [
                  Object(j.jsx)("img", { src: d, alt: "imagen" }),
                  Object(j.jsx)("img", { src: m, alt: "imagen" }),
                  Object(j.jsx)("img", { src: b, alt: "imagen" }),
                  Object(j.jsx)("img", { src: o, alt: "imagen" }),
                  Object(j.jsx)("img", { src: x, alt: "imagen" }),
                  Object(j.jsx)("img", { src: O, alt: "imagen" }),
                  Object(j.jsx)("img", { src: h, alt: "imagen" }),
                ],
              }),
              Object(j.jsx)("button", {
                className: "gallery__button",
                children: "Cargar M\xe1s",
              }),
            ],
          });
        },
        f = function (e) {
          var c = e.text,
            a = e.image;
          return Object(j.jsx)("section", {
            children: Object(j.jsxs)("div", {
              className: "card text-center",
              children: [
                Object(j.jsx)("div", {
                  className: "overflow",
                  children: Object(j.jsx)("img", {
                    src: a,
                    alt: c,
                    className: "card__img",
                  }),
                }),
                Object(j.jsx)("div", {
                  className: "card-body",
                  children: Object(j.jsx)("p", {
                    className: "card-text",
                    children: c,
                  }),
                }),
              ],
            }),
          });
        },
        p = [
          {
            id: 1,
            text: "HOGAR",
            image:
              a.p + "interface6/interface6/static/media/icon1.4f346a41.jpg",
          },
          {
            id: 2,
            text: "ARTE Y DISE\xd1O",
            image:
              a.p + "interface6/interface6/static/media/icon2.de09722f.png",
          },
          {
            id: 3,
            text: "TECNOLOG\xcdA",
            image:
              a.p + "interface6/interface6/static/media/icon3.069ca679.png",
          },
          {
            id: 4,
            text: "MODA",
            image:
              a.p + "interface6/interface6/static/media/icon4.bdf27915.png",
          },
          {
            id: 5,
            text: "ACCESORIOS",
            image:
              a.p + "interface6/interface6/static/media/icon5.1ee1f4a5.jpg",
          },
          {
            id: 6,
            text: "JOYER\xcdA",
            image:
              a.p + "interface6/interface6/static/media/icon6.818040eb.png",
          },
          {
            id: 7,
            text: "BEB\xc9 Y NI\xd1OS",
            image:
              a.p + "interface6/interface6/static/media/icon7.884cded4.png",
          },
          {
            id: 8,
            text: "ALIMENTOS",
            image:
              a.p + "interface6/interface6/static/media/icon8.ca57c555.png",
          },
          {
            id: 9,
            text: "SALUD Y BELLEZA",
            image:
              a.p + "interface6/interface6/static/media/icon9.720dcbe2.png",
          },
          {
            id: 10,
            text: "M\xc1S",
            image:
              a.p + "interface6/interface6/static/media/icon10.fe63450a.png",
          },
        ],
        u = function () {
          return Object(j.jsx)("div", {
            className: "container",
            children: Object(j.jsx)("div", {
              className: "row",
              children: p.map(function (e, c) {
                return Object(j.jsx)(
                  "div",
                  {
                    className: "col-lg-2 col-sm-6 col-md-4",
                    children: Object(j.jsx)(f, {
                      image: e.image,
                      text: e.text,
                    }),
                  },
                  c
                );
              }),
            }),
          });
        },
        N = function () {
          return Object(j.jsxs)("div", {
            className: "main",
            children: [
              Object(j.jsx)(l, {}),
              Object(j.jsx)(g, {}),
              Object(j.jsx)("div", {
                className: "cards",
                children: Object(j.jsx)(u, {}),
              }),
            ],
          });
        },
        A = function () {
          return Object(j.jsxs)("div", {
            className: "footer",
            children: [
              Object(j.jsxs)("div", {
                className: "footer__top",
                children: [
                  Object(j.jsxs)("div", {
                    className: "footer__top__left",
                    children: [
                      Object(j.jsx)("h3", {
                        children:
                          "RECIBA ACTUALIZACIONES DE SQUARE MARKETSIGA A SQUARE",
                      }),
                      Object(j.jsx)("p", {
                        children:
                          "Ingrese su correo electr\xf3nico para recibir avisos sobre articulos increibles en Square Market.",
                      }),
                      Object(j.jsxs)("form", {
                        children: [
                          Object(j.jsx)("input", {
                            type: "email",
                            name: "email",
                            id: "email",
                            placeholder:
                              "Direcci\xf3n de correo electr\xf3nico",
                            required: !0,
                          }),
                          Object(j.jsx)("button", {
                            children: Object(j.jsx)("i", {
                              className: "fas fa-chevron-right",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(j.jsxs)("div", {
                    className: "footer__top__center",
                    children: [
                      Object(j.jsxs)("a", {
                        href: "#facebook",
                        children: [
                          Object(j.jsx)("i", {
                            className: "fab fa-facebook-square",
                          }),
                          " Facebook",
                        ],
                      }),
                      Object(j.jsxs)("a", {
                        href: "#twitter",
                        children: [
                          Object(j.jsx)("i", {
                            className: "fab fa-twitter-square",
                          }),
                          " Twitter",
                        ],
                      }),
                      Object(j.jsxs)("a", {
                        href: "#pinterest",
                        children: [
                          Object(j.jsx)("i", {
                            className: "fab fa-pinterest-square",
                          }),
                          " Pinterest",
                        ],
                      }),
                      Object(j.jsxs)("a", {
                        href: "#instagram",
                        children: [
                          Object(j.jsx)("i", {
                            className: "fab fa-instagram-square",
                          }),
                          " Instagram",
                        ],
                      }),
                    ],
                  }),
                  Object(j.jsxs)("div", {
                    className: "footer__top__right",
                    children: [
                      Object(j.jsx)("h3", { children: "ACERCA DE SQUARE" }),
                      Object(j.jsx)("a", {
                        href: "#cajasquare",
                        children: "Caja Square",
                      }),
                      Object(j.jsx)("a", {
                        href: "#atencionalcliente",
                        children: "Atenci\xf3n al cliente",
                      }),
                    ],
                  }),
                ],
              }),
              Object(j.jsx)("hr", {}),
              Object(j.jsxs)("div", {
                className: "footer__bottom",
                children: [
                  Object(j.jsxs)("p", {
                    children: [
                      '[CA "',
                      Object(j.jsx)("i", { className: "far fa-copyright" }),
                      ' 2009-2014 SQUARE, INC", JP "',
                      Object(j.jsx)("i", { className: "far fa-copyright" }),
                      ' 2014 SQUAREUP PTE, LTD", US "',
                      Object(j.jsx)("i", { className: "far fa-copyright" }),
                      ' 2009-2014 SQUARE, INC"]',
                    ],
                  }),
                  Object(j.jsx)("a", {
                    href: "#privacidad",
                    children: "PRIVACIDAD",
                  }),
                  "|",
                  Object(j.jsx)("a", { href: "#legal", children: "LEGAL" }),
                  "|",
                  Object(j.jsx)("a", { href: "#idioma", children: "IDIOMA" }),
                ],
              }),
            ],
          });
        },
        v = function () {
          return Object(j.jsxs)("div", {
            children: [
              Object(j.jsx)(n, {}),
              Object(j.jsx)(N, {}),
              Object(j.jsx)(A, {}),
            ],
          });
        };
      a(10);
      r.a.render(
        Object(j.jsx)(t.a.StrictMode, { children: Object(j.jsx)(v, {}) }),
        document.getElementById("root")
      );
    },
    8: function (e, c, a) {},
  },
  [[11, 1, 2]],
]);
//# sourceMappingURL=main.79cffe35.chunk.js.map
