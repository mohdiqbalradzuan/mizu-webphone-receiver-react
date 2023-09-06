var adapter_helperhref = window.location.href;
webphone_api.helper.isNull(adapter_helperhref) && (adapter_helperhref = ""),
  (adapter_helperhref = adapter_helperhref.toLowerCase()),
  (function (e) {
    if ("object" == typeof exports && "undefined" != typeof module)
      module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
      var t;
      (t =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : this),
        (t.adapter = e());
    }
  })(function () {
    return (function () {
      function e(t, r, n) {
        function i(a, s) {
          if (!r[a]) {
            if (!t[a]) {
              var c = "function" == typeof require && require;
              if (!s && c) return c(a, !0);
              if (o) return o(a, !0);
              var p = new Error("Cannot find module '" + a + "'");
              throw ((p.code = "MODULE_NOT_FOUND"), p);
            }
            var d = (r[a] = { exports: {} });
            t[a][0].call(
              d.exports,
              function (e) {
                return i(t[a][1][e] || e);
              },
              d,
              d.exports,
              e,
              t,
              r,
              n,
            );
          }
          return r[a].exports;
        }
        for (
          var o = "function" == typeof require && require, a = 0;
          a < n.length;
          a++
        )
          i(n[a]);
        return i;
      }
      return e;
    })()(
      {
        1: [
          function (e, t, r) {
            "use strict";
            var n = e("./adapter_factory.js"),
              i = (0, n.adapterFactory)({
                window: "undefined" == typeof window ? undefined : window,
              });
            t.exports = i;
          },
          { "./adapter_factory.js": 2 },
        ],
        2: [
          function (e, t, r) {
            "use strict";
            function n(e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return (t["default"] = e), t;
            }
            function i() {
              var e =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : {},
                t = e.window,
                r =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : { shimChrome: !0, shimFirefox: !0, shimSafari: !0 },
                n = a.log,
                i = a.detectBrowser(t),
                o = {
                  browserDetails: i,
                  commonShim: l,
                  extractVersion: a.extractVersion,
                  disableLog: a.disableLog,
                  disableWarnings: a.disableWarnings,
                  sdp: v,
                };
              switch (i.browser) {
                case "chrome":
                  if (!c || !c.shimPeerConnection || !r.shimChrome)
                    return (
                      n("Chrome shim is not included in this adapter release."),
                      o
                    );
                  if (null === i.version)
                    return (
                      n("Chrome shim can not determine version, not shimming."),
                      o
                    );
                  n("adapter.js shimming chrome."),
                    (o.browserShim = c),
                    l.shimAddIceCandidateNullOrEmpty(t, i),
                    c.shimGetUserMedia(t, i),
                    c.shimMediaStream(t, i),
                    c.shimPeerConnection(t, i),
                    c.shimOnTrack(t, i),
                    c.shimAddTrackRemoveTrack(t, i),
                    c.shimGetSendersWithDtmf(t, i),
                    c.shimGetStats(t, i),
                    c.shimSenderReceiverGetStats(t, i),
                    c.fixNegotiationNeeded(t, i),
                    l.shimRTCIceCandidate(t, i),
                    l.shimConnectionState(t, i),
                    l.shimMaxMessageSize(t, i),
                    l.shimSendThrowTypeError(t, i),
                    l.removeExtmapAllowMixed(t, i);
                  break;
                case "firefox":
                  if (!d || !d.shimPeerConnection || !r.shimFirefox)
                    return (
                      n(
                        "Firefox shim is not included in this adapter release.",
                      ),
                      o
                    );
                  n("adapter.js shimming firefox."),
                    (o.browserShim = d),
                    l.shimAddIceCandidateNullOrEmpty(t, i),
                    d.shimGetUserMedia(t, i),
                    d.shimPeerConnection(t, i),
                    d.shimOnTrack(t, i),
                    d.shimRemoveStream(t, i),
                    d.shimSenderGetStats(t, i),
                    d.shimReceiverGetStats(t, i),
                    d.shimRTCDataChannel(t, i),
                    d.shimAddTransceiver(t, i),
                    d.shimGetParameters(t, i),
                    d.shimCreateOffer(t, i),
                    d.shimCreateAnswer(t, i),
                    l.shimRTCIceCandidate(t, i),
                    l.shimConnectionState(t, i),
                    l.shimMaxMessageSize(t, i),
                    l.shimSendThrowTypeError(t, i);
                  break;
                case "safari":
                  if (!f || !r.shimSafari)
                    return (
                      n("Safari shim is not included in this adapter release."),
                      o
                    );
                  n("adapter.js shimming safari."),
                    (o.browserShim = f),
                    l.shimAddIceCandidateNullOrEmpty(t, i),
                    f.shimRTCIceServerUrls(t, i),
                    f.shimCreateOfferLegacy(t, i),
                    f.shimCallbacksAPI(t, i),
                    f.shimLocalStreamsAPI(t, i),
                    f.shimRemoteStreamsAPI(t, i),
                    f.shimTrackEventTransceiver(t, i),
                    f.shimGetUserMedia(t, i),
                    f.shimAudioContext(t, i),
                    l.shimRTCIceCandidate(t, i),
                    l.shimMaxMessageSize(t, i),
                    l.shimSendThrowTypeError(t, i),
                    l.removeExtmapAllowMixed(t, i);
                  break;
                default:
                  n("Unsupported browser!");
              }
              return o;
            }
            Object.defineProperty(r, "__esModule", { value: !0 }),
              (r.adapterFactory = i);
            var o = e("./utils"),
              a = n(o),
              s = e("./chrome/chrome_shim"),
              c = n(s),
              p = e("./firefox/firefox_shim"),
              d = n(p),
              u = e("./safari/safari_shim"),
              f = n(u),
              m = e("./common_shim"),
              l = n(m),
              h = e("sdp"),
              v = n(h);
          },
          {
            "./chrome/chrome_shim": 3,
            "./common_shim": 6,
            "./firefox/firefox_shim": 7,
            "./safari/safari_shim": 10,
            "./utils": 11,
            sdp: 12,
          },
        ],
        3: [
          function (e, t, r) {
            "use strict";
            function n(e, t, r) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = r),
                e
              );
            }
            function i(e) {
              e.MediaStream = e.MediaStream || e.webkitMediaStream;
            }
            function o(e) {
              if (
                "object" !== (void 0 === e ? "undefined" : m(e)) ||
                !e.RTCPeerConnection ||
                "ontrack" in e.RTCPeerConnection.prototype
              )
                y.wrapPeerConnectionEvent(e, "track", function (e) {
                  return (
                    e.transceiver ||
                      Object.defineProperty(e, "transceiver", {
                        value: { receiver: e.receiver },
                      }),
                    e
                  );
                });
              else {
                Object.defineProperty(
                  e.RTCPeerConnection.prototype,
                  "ontrack",
                  {
                    get: function () {
                      return this._ontrack;
                    },
                    set: function (e) {
                      this._ontrack &&
                        this.removeEventListener("track", this._ontrack),
                        this.addEventListener("track", (this._ontrack = e));
                    },
                    enumerable: !0,
                    configurable: !0,
                  },
                );
                var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                e.RTCPeerConnection.prototype.setRemoteDescription =
                  function () {
                    var r = this;
                    return (
                      this._ontrackpoly ||
                        ((this._ontrackpoly = function (t) {
                          t.stream.addEventListener("addtrack", function (n) {
                            var i = void 0;
                            i = e.RTCPeerConnection.prototype.getReceivers
                              ? r.getReceivers().find(function (e) {
                                  return e.track && e.track.id === n.track.id;
                                })
                              : { track: n.track };
                            var o = new Event("track");
                            (o.track = n.track),
                              (o.receiver = i),
                              (o.transceiver = { receiver: i }),
                              (o.streams = [t.stream]),
                              r.dispatchEvent(o);
                          }),
                            t.stream.getTracks().forEach(function (n) {
                              var i = void 0;
                              i = e.RTCPeerConnection.prototype.getReceivers
                                ? r.getReceivers().find(function (e) {
                                    return e.track && e.track.id === n.id;
                                  })
                                : { track: n };
                              var o = new Event("track");
                              (o.track = n),
                                (o.receiver = i),
                                (o.transceiver = { receiver: i }),
                                (o.streams = [t.stream]),
                                r.dispatchEvent(o);
                            });
                        }),
                        this.addEventListener("addstream", this._ontrackpoly)),
                      t.apply(this, arguments)
                    );
                  };
              }
            }
            function a(e) {
              if (
                "object" === (void 0 === e ? "undefined" : m(e)) &&
                e.RTCPeerConnection &&
                !("getSenders" in e.RTCPeerConnection.prototype) &&
                "createDTMFSender" in e.RTCPeerConnection.prototype
              ) {
                var t = function (e, t) {
                  return {
                    track: t,
                    get dtmf() {
                      return (
                        this._dtmf === undefined &&
                          ("audio" === t.kind
                            ? (this._dtmf = e.createDTMFSender(t))
                            : (this._dtmf = null)),
                        this._dtmf
                      );
                    },
                    _pc: e,
                  };
                };
                if (!e.RTCPeerConnection.prototype.getSenders) {
                  e.RTCPeerConnection.prototype.getSenders = function () {
                    return (
                      (this._senders = this._senders || []),
                      this._senders.slice()
                    );
                  };
                  var r = e.RTCPeerConnection.prototype.addTrack;
                  e.RTCPeerConnection.prototype.addTrack = function (e, n) {
                    var i = r.apply(this, arguments);
                    return i || ((i = t(this, e)), this._senders.push(i)), i;
                  };
                  var n = e.RTCPeerConnection.prototype.removeTrack;
                  e.RTCPeerConnection.prototype.removeTrack = function (e) {
                    n.apply(this, arguments);
                    var t = this._senders.indexOf(e);
                    -1 !== t && this._senders.splice(t, 1);
                  };
                }
                var i = e.RTCPeerConnection.prototype.addStream;
                e.RTCPeerConnection.prototype.addStream = function (e) {
                  var r = this;
                  (this._senders = this._senders || []),
                    i.apply(this, [e]),
                    e.getTracks().forEach(function (e) {
                      r._senders.push(t(r, e));
                    });
                };
                var o = e.RTCPeerConnection.prototype.removeStream;
                e.RTCPeerConnection.prototype.removeStream = function (e) {
                  var t = this;
                  (this._senders = this._senders || []),
                    o.apply(this, [e]),
                    e.getTracks().forEach(function (e) {
                      var r = t._senders.find(function (t) {
                        return t.track === e;
                      });
                      r && t._senders.splice(t._senders.indexOf(r), 1);
                    });
                };
              } else if (
                "object" === (void 0 === e ? "undefined" : m(e)) &&
                e.RTCPeerConnection &&
                "getSenders" in e.RTCPeerConnection.prototype &&
                "createDTMFSender" in e.RTCPeerConnection.prototype &&
                e.RTCRtpSender &&
                !("dtmf" in e.RTCRtpSender.prototype)
              ) {
                var a = e.RTCPeerConnection.prototype.getSenders;
                (e.RTCPeerConnection.prototype.getSenders = function () {
                  var e = this,
                    t = a.apply(this, []);
                  return (
                    t.forEach(function (t) {
                      return (t._pc = e);
                    }),
                    t
                  );
                }),
                  Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                    get: function () {
                      return (
                        this._dtmf === undefined &&
                          ("audio" === this.track.kind
                            ? (this._dtmf = this._pc.createDTMFSender(
                                this.track,
                              ))
                            : (this._dtmf = null)),
                        this._dtmf
                      );
                    },
                  });
              }
            }
            function s(e) {
              if (e.RTCPeerConnection) {
                var t = e.RTCPeerConnection.prototype.getStats;
                e.RTCPeerConnection.prototype.getStats = function () {
                  var e = this,
                    r = Array.prototype.slice.call(arguments),
                    n = r[0],
                    i = r[1],
                    o = r[2];
                  if (arguments.length > 0 && "function" == typeof n)
                    return t.apply(this, arguments);
                  if (
                    0 === t.length &&
                    (0 === arguments.length || "function" != typeof n)
                  )
                    return t.apply(this, []);
                  var a = function (e) {
                      var t = {};
                      return (
                        e.result().forEach(function (e) {
                          var r = {
                            id: e.id,
                            timestamp: e.timestamp,
                            type:
                              {
                                localcandidate: "local-candidate",
                                remotecandidate: "remote-candidate",
                              }[e.type] || e.type,
                          };
                          e.names().forEach(function (t) {
                            r[t] = e.stat(t);
                          }),
                            (t[r.id] = r);
                        }),
                        t
                      );
                    },
                    s = function (e) {
                      return new Map(
                        Object.keys(e).map(function (t) {
                          return [t, e[t]];
                        }),
                      );
                    };
                  if (arguments.length >= 2) {
                    var c = function (e) {
                      i(s(a(e)));
                    };
                    return t.apply(this, [c, n]);
                  }
                  return new Promise(function (r, n) {
                    t.apply(e, [
                      function (e) {
                        r(s(a(e)));
                      },
                      n,
                    ]);
                  }).then(i, o);
                };
              }
            }
            function c(e) {
              if (
                "object" === (void 0 === e ? "undefined" : m(e)) &&
                e.RTCPeerConnection &&
                e.RTCRtpSender &&
                e.RTCRtpReceiver
              ) {
                if (!("getStats" in e.RTCRtpSender.prototype)) {
                  var t = e.RTCPeerConnection.prototype.getSenders;
                  t &&
                    (e.RTCPeerConnection.prototype.getSenders = function () {
                      var e = this,
                        r = t.apply(this, []);
                      return (
                        r.forEach(function (t) {
                          return (t._pc = e);
                        }),
                        r
                      );
                    });
                  var r = e.RTCPeerConnection.prototype.addTrack;
                  r &&
                    (e.RTCPeerConnection.prototype.addTrack = function () {
                      var e = r.apply(this, arguments);
                      return (e._pc = this), e;
                    }),
                    (e.RTCRtpSender.prototype.getStats = function () {
                      var e = this;
                      return this._pc.getStats().then(function (t) {
                        return y.filterStats(t, e.track, !0);
                      });
                    });
                }
                if (!("getStats" in e.RTCRtpReceiver.prototype)) {
                  var n = e.RTCPeerConnection.prototype.getReceivers;
                  n &&
                    (e.RTCPeerConnection.prototype.getReceivers = function () {
                      var e = this,
                        t = n.apply(this, []);
                      return (
                        t.forEach(function (t) {
                          return (t._pc = e);
                        }),
                        t
                      );
                    }),
                    y.wrapPeerConnectionEvent(e, "track", function (e) {
                      return (e.receiver._pc = e.srcElement), e;
                    }),
                    (e.RTCRtpReceiver.prototype.getStats = function () {
                      var e = this;
                      return this._pc.getStats().then(function (t) {
                        return y.filterStats(t, e.track, !1);
                      });
                    });
                }
                if (
                  "getStats" in e.RTCRtpSender.prototype &&
                  "getStats" in e.RTCRtpReceiver.prototype
                ) {
                  var i = e.RTCPeerConnection.prototype.getStats;
                  e.RTCPeerConnection.prototype.getStats = function () {
                    if (
                      arguments.length > 0 &&
                      arguments[0] instanceof e.MediaStreamTrack
                    ) {
                      var t = arguments[0],
                        r = void 0,
                        n = void 0,
                        o = void 0;
                      return (
                        this.getSenders().forEach(function (e) {
                          e.track === t && (r ? (o = !0) : (r = e));
                        }),
                        this.getReceivers().forEach(function (e) {
                          return (
                            e.track === t && (n ? (o = !0) : (n = e)),
                            e.track === t
                          );
                        }),
                        o || (r && n)
                          ? Promise.reject(
                              new DOMException(
                                "There are more than one sender or receiver for the track.",
                                "InvalidAccessError",
                              ),
                            )
                          : r
                          ? r.getStats()
                          : n
                          ? n.getStats()
                          : Promise.reject(
                              new DOMException(
                                "There is no sender or receiver for the track.",
                                "InvalidAccessError",
                              ),
                            )
                      );
                    }
                    return i.apply(this, arguments);
                  };
                }
              }
            }
            function p(e) {
              e.RTCPeerConnection.prototype.getLocalStreams = function () {
                var e = this;
                return (
                  (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                  Object.keys(this._shimmedLocalStreams).map(function (t) {
                    return e._shimmedLocalStreams[t][0];
                  })
                );
              };
              var t = e.RTCPeerConnection.prototype.addTrack;
              e.RTCPeerConnection.prototype.addTrack = function (e, r) {
                if (!r) return t.apply(this, arguments);
                this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                var n = t.apply(this, arguments);
                return (
                  this._shimmedLocalStreams[r.id]
                    ? -1 === this._shimmedLocalStreams[r.id].indexOf(n) &&
                      this._shimmedLocalStreams[r.id].push(n)
                    : (this._shimmedLocalStreams[r.id] = [r, n]),
                  n
                );
              };
              var r = e.RTCPeerConnection.prototype.addStream;
              e.RTCPeerConnection.prototype.addStream = function (e) {
                var t = this;
                (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                  e.getTracks().forEach(function (e) {
                    if (
                      t.getSenders().find(function (t) {
                        return t.track === e;
                      })
                    )
                      return (
                        webphone_api.Log2(
                          "EVENT, adapterjs (warn) Track already exists",
                        ),
                        !0
                      );
                  });
                var n = this.getSenders();
                r.apply(this, arguments);
                var i = this.getSenders().filter(function (e) {
                  return -1 === n.indexOf(e);
                });
                this._shimmedLocalStreams[e.id] = [e].concat(i);
              };
              var n = e.RTCPeerConnection.prototype.removeStream;
              e.RTCPeerConnection.prototype.removeStream = function (e) {
                return (
                  (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                  delete this._shimmedLocalStreams[e.id],
                  n.apply(this, arguments)
                );
              };
              var i = e.RTCPeerConnection.prototype.removeTrack;
              e.RTCPeerConnection.prototype.removeTrack = function (e) {
                var t = this;
                return (
                  (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
                  e &&
                    Object.keys(this._shimmedLocalStreams).forEach(
                      function (r) {
                        var n = t._shimmedLocalStreams[r].indexOf(e);
                        -1 !== n && t._shimmedLocalStreams[r].splice(n, 1),
                          1 === t._shimmedLocalStreams[r].length &&
                            delete t._shimmedLocalStreams[r];
                      },
                    ),
                  i.apply(this, arguments)
                );
              };
            }
            function d(e, t) {
              function r(e, t) {
                var r = t.sdp;
                return (
                  Object.keys(e._reverseStreams || []).forEach(function (t) {
                    var n = e._reverseStreams[t],
                      i = e._streams[n.id];
                    r = r.replace(new RegExp(i.id, "g"), n.id);
                  }),
                  new RTCSessionDescription({ type: t.type, sdp: r })
                );
              }
              function i(e, t) {
                var r = t.sdp;
                return (
                  Object.keys(e._reverseStreams || []).forEach(function (t) {
                    var n = e._reverseStreams[t],
                      i = e._streams[n.id];
                    r = r.replace(new RegExp(n.id, "g"), i.id);
                  }),
                  new RTCSessionDescription({ type: t.type, sdp: r })
                );
              }
              if (e.RTCPeerConnection) {
                if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65)
                  return p(e);
                var o = e.RTCPeerConnection.prototype.getLocalStreams;
                e.RTCPeerConnection.prototype.getLocalStreams = function () {
                  var e = this,
                    t = o.apply(this);
                  return (
                    (this._reverseStreams = this._reverseStreams || {}),
                    t.map(function (t) {
                      return e._reverseStreams[t.id];
                    })
                  );
                };
                var a = e.RTCPeerConnection.prototype.addStream;
                e.RTCPeerConnection.prototype.addStream = function (t) {
                  var r = this;
                  if (
                    ((this._streams = this._streams || {}),
                    (this._reverseStreams = this._reverseStreams || {}),
                    t.getTracks().forEach(function (e) {
                      if (
                        r.getSenders().find(function (t) {
                          return t.track === e;
                        })
                      )
                        return (
                          webphone_api.Log2(
                            "EVENT, adapterjs (warn) Track already exists2",
                          ),
                          !0
                        );
                    }),
                    !this._reverseStreams[t.id])
                  ) {
                    var n = new e.MediaStream(t.getTracks());
                    (this._streams[t.id] = n),
                      (this._reverseStreams[n.id] = t),
                      (t = n);
                  }
                  a.apply(this, [t]);
                };
                var s = e.RTCPeerConnection.prototype.removeStream;
                (e.RTCPeerConnection.prototype.removeStream = function (e) {
                  (this._streams = this._streams || {}),
                    (this._reverseStreams = this._reverseStreams || {}),
                    s.apply(this, [this._streams[e.id] || e]),
                    delete this._reverseStreams[
                      this._streams[e.id] ? this._streams[e.id].id : e.id
                    ],
                    delete this._streams[e.id];
                }),
                  (e.RTCPeerConnection.prototype.addTrack = function (t, r) {
                    var n = this;
                    if ("closed" === this.signalingState)
                      return (
                        webphone_api.Log2(
                          "ERROR, adapterjs RTCPeerConnection signalingState is closed",
                        ),
                        !1
                      );
                    var i = [].slice.call(arguments, 1);
                    if (
                      1 !== i.length ||
                      !i[0].getTracks().find(function (e) {
                        return e === t;
                      })
                    )
                      return (
                        webphone_api.Log2(
                          "ERROR, adapterjs polyfill only supports a single stream which is associated with the specified track",
                        ),
                        !1
                      );
                    if (
                      this.getSenders().find(function (e) {
                        return e.track === t;
                      })
                    )
                      return (
                        webphone_api.Log2(
                          "WARNING, adapterjs Track already exists3",
                        ),
                        !0
                      );
                    (this._streams = this._streams || {}),
                      (this._reverseStreams = this._reverseStreams || {});
                    var o = this._streams[r.id];
                    if (o)
                      o.addTrack(t),
                        Promise.resolve().then(function () {
                          n.dispatchEvent(new Event("negotiationneeded"));
                        });
                    else {
                      var a = new e.MediaStream([t]);
                      (this._streams[r.id] = a),
                        (this._reverseStreams[a.id] = r),
                        this.addStream(a);
                    }
                    return this.getSenders().find(function (e) {
                      return e.track === t;
                    });
                  }),
                  ["createOffer", "createAnswer"].forEach(function (t) {
                    var i = e.RTCPeerConnection.prototype[t],
                      o = n({}, t, function () {
                        var e = this,
                          t = arguments;
                        return arguments.length &&
                          "function" == typeof arguments[0]
                          ? i.apply(this, [
                              function (n) {
                                var i = r(e, n);
                                t[0].apply(null, [i]);
                              },
                              function (e) {
                                t[1] && t[1].apply(null, e);
                              },
                              arguments[2],
                            ])
                          : i.apply(this, arguments).then(function (t) {
                              return r(e, t);
                            });
                      });
                    e.RTCPeerConnection.prototype[t] = o[t];
                  });
                var c = e.RTCPeerConnection.prototype.setLocalDescription;
                e.RTCPeerConnection.prototype.setLocalDescription =
                  function () {
                    return arguments.length && arguments[0].type
                      ? ((arguments[0] = i(this, arguments[0])),
                        c.apply(this, arguments))
                      : c.apply(this, arguments);
                  };
                var d = Object.getOwnPropertyDescriptor(
                  e.RTCPeerConnection.prototype,
                  "localDescription",
                );
                Object.defineProperty(
                  e.RTCPeerConnection.prototype,
                  "localDescription",
                  {
                    get: function () {
                      var e = d.get.apply(this);
                      return "" === e.type ? e : r(this, e);
                    },
                  },
                ),
                  (e.RTCPeerConnection.prototype.removeTrack = function (e) {
                    var t = this;
                    if ("closed" === this.signalingState)
                      return (
                        webphone_api.Log2(
                          "ERROR, adapterjs RTCPeerConnection signalingState is closed2",
                        ),
                        !1
                      );
                    if (!e._pc)
                      return (
                        webphone_api.Log2(
                          "ERROR, adapterjs Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender",
                        ),
                        !1
                      );
                    if (e._pc !== this)
                      return (
                        webphone_api.Log2(
                          "ERROR, adapterjs Sender was not created by this connection",
                        ),
                        !1
                      );
                    this._streams = this._streams || {};
                    var r = void 0;
                    Object.keys(this._streams).forEach(function (n) {
                      t._streams[n].getTracks().find(function (t) {
                        return e.track === t;
                      }) && (r = t._streams[n]);
                    }),
                      r &&
                        (1 === r.getTracks().length
                          ? this.removeStream(this._reverseStreams[r.id])
                          : r.removeTrack(e.track),
                        this.dispatchEvent(new Event("negotiationneeded")));
                  });
              }
            }
            function u(e, t) {
              !e.RTCPeerConnection &&
                e.webkitRTCPeerConnection &&
                (e.RTCPeerConnection = e.webkitRTCPeerConnection),
                e.RTCPeerConnection &&
                  t.version < 53 &&
                  [
                    "setLocalDescription",
                    "setRemoteDescription",
                    "addIceCandidate",
                  ].forEach(function (t) {
                    var r = e.RTCPeerConnection.prototype[t],
                      i = n({}, t, function () {
                        return (
                          (arguments[0] = new (
                            "addIceCandidate" === t
                              ? e.RTCIceCandidate
                              : e.RTCSessionDescription
                          )(arguments[0])),
                          r.apply(this, arguments)
                        );
                      });
                    e.RTCPeerConnection.prototype[t] = i[t];
                  });
            }
            function f(e, t) {
              y.wrapPeerConnectionEvent(e, "negotiationneeded", function (e) {
                var r = e.target;
                if (
                  !(
                    t.version < 72 ||
                    (r.getConfiguration &&
                      "plan-b" === r.getConfiguration().sdpSemantics)
                  ) ||
                  "stable" === r.signalingState
                )
                  return e;
              });
            }
            Object.defineProperty(r, "__esModule", { value: !0 }),
              (r.shimGetDisplayMedia = r.shimGetUserMedia = undefined);
            var m =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              l = e("./getusermedia");
            Object.defineProperty(r, "shimGetUserMedia", {
              enumerable: !0,
              get: function () {
                return l.shimGetUserMedia;
              },
            });
            var h = e("./getdisplaymedia");
            Object.defineProperty(r, "shimGetDisplayMedia", {
              enumerable: !0,
              get: function () {
                return h.shimGetDisplayMedia;
              },
            }),
              (r.shimMediaStream = i),
              (r.shimOnTrack = o),
              (r.shimGetSendersWithDtmf = a),
              (r.shimGetStats = s),
              (r.shimSenderReceiverGetStats = c),
              (r.shimAddTrackRemoveTrackWithNative = p),
              (r.shimAddTrackRemoveTrack = d),
              (r.shimPeerConnection = u),
              (r.fixNegotiationNeeded = f);
            var v = e("../utils.js"),
              y = (function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return (t["default"] = e), t;
              })(v);
          },
          { "../utils.js": 11, "./getdisplaymedia": 4, "./getusermedia": 5 },
        ],
        4: [
          function (e, t, r) {
            "use strict";
            function n(e, t) {
              if (
                !(
                  e.navigator.mediaDevices &&
                  "getDisplayMedia" in e.navigator.mediaDevices
                ) &&
                e.navigator.mediaDevices
              )
                return "function" != typeof t
                  ? void console.error(
                      "shimGetDisplayMedia: getSourceId argument is not a function",
                    )
                  : void (e.navigator.mediaDevices.getDisplayMedia = function (
                      r,
                    ) {
                      return t(r).then(function (t) {
                        var n = r.video && r.video.width,
                          i = r.video && r.video.height,
                          o = r.video && r.video.frameRate;
                        return (
                          (r.video = {
                            mandatory: {
                              chromeMediaSource: "desktop",
                              chromeMediaSourceId: t,
                              maxFrameRate: o || 3,
                            },
                          }),
                          n && (r.video.mandatory.maxWidth = n),
                          i && (r.video.mandatory.maxHeight = i),
                          e.navigator.mediaDevices.getUserMedia(r)
                        );
                      });
                    });
            }
            Object.defineProperty(r, "__esModule", { value: !0 }),
              (r.shimGetDisplayMedia = n);
          },
          {},
        ],
        5: [
          function (e, t, r) {
            "use strict";
            function n(e, t) {
              var r = e && e.navigator;
              if (r.mediaDevices) {
                var n = function (e) {
                    if (
                      "object" !== (void 0 === e ? "undefined" : i(e)) ||
                      e.mandatory ||
                      e.optional
                    )
                      return e;
                    var t = {};
                    return (
                      Object.keys(e).forEach(function (r) {
                        if (
                          "require" !== r &&
                          "advanced" !== r &&
                          "mediaSource" !== r
                        ) {
                          var n = "object" === i(e[r]) ? e[r] : { ideal: e[r] };
                          n.exact !== undefined &&
                            "number" == typeof n.exact &&
                            (n.min = n.max = n.exact);
                          var o = function (e, t) {
                            return e
                              ? e + t.charAt(0).toUpperCase() + t.slice(1)
                              : "deviceId" === t
                              ? "sourceId"
                              : t;
                          };
                          if (n.ideal !== undefined) {
                            t.optional = t.optional || [];
                            var a = {};
                            "number" == typeof n.ideal
                              ? ((a[o("min", r)] = n.ideal),
                                t.optional.push(a),
                                (a = {}),
                                (a[o("max", r)] = n.ideal),
                                t.optional.push(a))
                              : ((a[o("", r)] = n.ideal), t.optional.push(a));
                          }
                          n.exact !== undefined && "number" != typeof n.exact
                            ? ((t.mandatory = t.mandatory || {}),
                              (t.mandatory[o("", r)] = n.exact))
                            : ["min", "max"].forEach(function (e) {
                                n[e] !== undefined &&
                                  ((t.mandatory = t.mandatory || {}),
                                  (t.mandatory[o(e, r)] = n[e]));
                              });
                        }
                      }),
                      e.advanced &&
                        (t.optional = (t.optional || []).concat(e.advanced)),
                      t
                    );
                  },
                  o = function (e, o) {
                    if (t.version >= 61) return o(e);
                    if (
                      (e = JSON.parse(JSON.stringify(e))) &&
                      "object" === i(e.audio)
                    ) {
                      var a = function (e, t, r) {
                        t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
                      };
                      (e = JSON.parse(JSON.stringify(e))),
                        a(e.audio, "autoGainControl", "googAutoGainControl"),
                        a(e.audio, "noiseSuppression", "googNoiseSuppression"),
                        (e.audio = n(e.audio));
                    }
                    if (e && "object" === i(e.video)) {
                      var c = e.video.facingMode;
                      c =
                        c &&
                        ("object" === (void 0 === c ? "undefined" : i(c))
                          ? c
                          : { ideal: c });
                      var p = t.version < 66;
                      if (
                        c &&
                        ("user" === c.exact ||
                          "environment" === c.exact ||
                          "user" === c.ideal ||
                          "environment" === c.ideal) &&
                        (!r.mediaDevices.getSupportedConstraints ||
                          !r.mediaDevices.getSupportedConstraints()
                            .facingMode ||
                          p)
                      ) {
                        delete e.video.facingMode;
                        var d = void 0;
                        if (
                          ("environment" === c.exact ||
                          "environment" === c.ideal
                            ? (d = ["back", "rear"])
                            : ("user" !== c.exact && "user" !== c.ideal) ||
                              (d = ["front"]),
                          d)
                        )
                          return r.mediaDevices
                            .enumerateDevices()
                            .then(function (t) {
                              t = t.filter(function (e) {
                                return "videoinput" === e.kind;
                              });
                              var r = t.find(function (e) {
                                return d.some(function (t) {
                                  return e.label.toLowerCase().includes(t);
                                });
                              });
                              return (
                                !r &&
                                  t.length &&
                                  d.includes("back") &&
                                  (r = t[t.length - 1]),
                                r &&
                                  (e.video.deviceId = c.exact
                                    ? { exact: r.deviceId }
                                    : { ideal: r.deviceId }),
                                (e.video = n(e.video)),
                                s("chrome: " + JSON.stringify(e)),
                                o(e)
                              );
                            });
                      }
                      e.video = n(e.video);
                    }
                    return s("chrome: " + JSON.stringify(e)), o(e);
                  },
                  a = function (e) {
                    return t.version >= 64
                      ? e
                      : {
                          name:
                            {
                              PermissionDeniedError: "NotAllowedError",
                              PermissionDismissedError: "NotAllowedError",
                              InvalidStateError: "NotAllowedError",
                              DevicesNotFoundError: "NotFoundError",
                              ConstraintNotSatisfiedError:
                                "OverconstrainedError",
                              TrackStartError: "NotReadableError",
                              MediaDeviceFailedDueToShutdown: "NotAllowedError",
                              MediaDeviceKillSwitchOn: "NotAllowedError",
                              TabCaptureError: "AbortError",
                              ScreenCaptureError: "AbortError",
                              DeviceCaptureError: "AbortError",
                            }[e.name] || e.name,
                          message: e.message,
                          constraint: e.constraint || e.constraintName,
                          toString: function () {
                            return (
                              this.name + (this.message && ": ") + this.message
                            );
                          },
                        };
                  },
                  c = function (e, t, n) {
                    o(e, function (e) {
                      r.webkitGetUserMedia(e, t, function (e) {
                        n && n(a(e));
                      });
                    });
                  };
                if (
                  ((r.getUserMedia = c.bind(r)), r.mediaDevices.getUserMedia)
                ) {
                  var p = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                  r.mediaDevices.getUserMedia = function (e) {
                    return o(e, function (e) {
                      return p(e).then(
                        function (t) {
                          return (e.audio && !t.getAudioTracks().length) ||
                            (e.video && !t.getVideoTracks().length)
                            ? (t.getTracks().forEach(function (e) {
                                e.stop();
                              }),
                              webphone_api.Log(
                                "ERROR, adapterjs device not found",
                              ),
                              null)
                            : t;
                        },
                        function (e) {
                          return Promise.reject(a(e));
                        },
                      );
                    });
                  };
                }
              }
            }
            Object.defineProperty(r, "__esModule", { value: !0 });
            var i =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  };
            r.shimGetUserMedia = n;
            var o = e("../utils.js"),
              a = (function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return (t["default"] = e), t;
              })(o),
              s = a.log;
          },
          { "../utils.js": 11 },
        ],
        6: [
          function (e, t, r) {
            "use strict";
            function n(e) {
              if (
                e.RTCIceCandidate &&
                !(
                  e.RTCIceCandidate &&
                  "foundation" in e.RTCIceCandidate.prototype
                )
              ) {
                var t = e.RTCIceCandidate;
                (e.RTCIceCandidate = function (e) {
                  if (
                    ("object" === (void 0 === e ? "undefined" : p(e)) &&
                      e.candidate &&
                      0 === e.candidate.indexOf("a=") &&
                      ((e = JSON.parse(JSON.stringify(e))),
                      (e.candidate = e.candidate.substr(2))),
                    e.candidate && e.candidate.length)
                  ) {
                    var r = new t(e),
                      n = u["default"].parseCandidate(e.candidate),
                      i = Object.assign(r, n);
                    return (
                      (i.toJSON = function () {
                        return {
                          candidate: i.candidate,
                          sdpMid: i.sdpMid,
                          sdpMLineIndex: i.sdpMLineIndex,
                          usernameFragment: i.usernameFragment,
                        };
                      }),
                      i
                    );
                  }
                  return new t(e);
                }),
                  (e.RTCIceCandidate.prototype = t.prototype),
                  m.wrapPeerConnectionEvent(e, "icecandidate", function (t) {
                    return (
                      t.candidate &&
                        Object.defineProperty(t, "candidate", {
                          value: new e.RTCIceCandidate(t.candidate),
                          writable: "false",
                        }),
                      t
                    );
                  });
              }
            }
            function i(e, t) {
              if (e.RTCPeerConnection) {
                "sctp" in e.RTCPeerConnection.prototype ||
                  Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
                    get: function () {
                      return "undefined" == typeof this._sctp
                        ? null
                        : this._sctp;
                    },
                  });
                var r = function (e) {
                    if (!e || !e.sdp) return !1;
                    var t = u["default"].splitSections(e.sdp);
                    return (
                      t.shift(),
                      t.some(function (e) {
                        var t = u["default"].parseMLine(e);
                        return (
                          t &&
                          "application" === t.kind &&
                          -1 !== t.protocol.indexOf("SCTP")
                        );
                      })
                    );
                  },
                  n = function (e) {
                    var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                    if (null === t || t.length < 2) return -1;
                    var r = parseInt(t[1], 10);
                    return r !== r ? -1 : r;
                  },
                  i = function (e) {
                    var r = 65536;
                    return (
                      "firefox" === t.browser &&
                        (r =
                          t.version < 57
                            ? -1 === e
                              ? 16384
                              : 2147483637
                            : t.version < 60
                            ? 57 === t.version
                              ? 65535
                              : 65536
                            : 2147483637),
                      r
                    );
                  },
                  o = function (e, r) {
                    var n = 65536;
                    "firefox" === t.browser && 57 === t.version && (n = 65535);
                    var i = u["default"].matchPrefix(
                      e.sdp,
                      "a=max-message-size:",
                    );
                    return (
                      i.length > 0
                        ? (n = parseInt(i[0].substr(19), 10))
                        : "firefox" === t.browser &&
                          -1 !== r &&
                          (n = 2147483637),
                      n
                    );
                  },
                  a = e.RTCPeerConnection.prototype.setRemoteDescription;
                e.RTCPeerConnection.prototype.setRemoteDescription =
                  function () {
                    if (
                      ((this._sctp = null),
                      "chrome" === t.browser && t.version >= 76)
                    ) {
                      "plan-b" === this.getConfiguration().sdpSemantics &&
                        Object.defineProperty(this, "sctp", {
                          get: function () {
                            return "undefined" == typeof this._sctp
                              ? null
                              : this._sctp;
                          },
                          enumerable: !0,
                          configurable: !0,
                        });
                    }
                    if (r(arguments[0])) {
                      var e = n(arguments[0]),
                        s = i(e),
                        c = o(arguments[0], e),
                        p = void 0;
                      p =
                        0 === s && 0 === c
                          ? Number.POSITIVE_INFINITY
                          : 0 === s || 0 === c
                          ? Math.max(s, c)
                          : Math.min(s, c);
                      var d = {};
                      Object.defineProperty(d, "maxMessageSize", {
                        get: function () {
                          return p;
                        },
                      }),
                        (this._sctp = d);
                    }
                    return a.apply(this, arguments);
                  };
              }
            }
            function o(e) {
              function t(e, t) {
                var r = e.send;
                e.send = function () {
                  var n = arguments[0],
                    i = n.length || n.size || n.byteLength;
                  return "open" === e.readyState &&
                    t.sctp &&
                    i > t.sctp.maxMessageSize
                    ? (webphone_api.Log(
                        "ERROR, adapterjs Message too large (can send a maximum of " +
                          t.sctp.maxMessageSize +
                          " bytes)",
                      ),
                      !1)
                    : r.apply(e, arguments);
                };
              }
              if (
                e.RTCPeerConnection &&
                "createDataChannel" in e.RTCPeerConnection.prototype
              ) {
                var r = e.RTCPeerConnection.prototype.createDataChannel;
                (e.RTCPeerConnection.prototype.createDataChannel = function () {
                  var e = r.apply(this, arguments);
                  return t(e, this), e;
                }),
                  m.wrapPeerConnectionEvent(e, "datachannel", function (e) {
                    return t(e.channel, e.target), e;
                  });
              }
            }
            function a(e) {
              if (
                e.RTCPeerConnection &&
                !("connectionState" in e.RTCPeerConnection.prototype)
              ) {
                var t = e.RTCPeerConnection.prototype;
                Object.defineProperty(t, "connectionState", {
                  get: function () {
                    return (
                      { completed: "connected", checking: "connecting" }[
                        this.iceConnectionState
                      ] || this.iceConnectionState
                    );
                  },
                  enumerable: !0,
                  configurable: !0,
                }),
                  Object.defineProperty(t, "onconnectionstatechange", {
                    get: function () {
                      return this._onconnectionstatechange || null;
                    },
                    set: function (e) {
                      this._onconnectionstatechange &&
                        (this.removeEventListener(
                          "connectionstatechange",
                          this._onconnectionstatechange,
                        ),
                        delete this._onconnectionstatechange),
                        e &&
                          this.addEventListener(
                            "connectionstatechange",
                            (this._onconnectionstatechange = e),
                          );
                    },
                    enumerable: !0,
                    configurable: !0,
                  }),
                  ["setLocalDescription", "setRemoteDescription"].forEach(
                    function (e) {
                      var r = t[e];
                      t[e] = function () {
                        return (
                          this._connectionstatechangepoly ||
                            ((this._connectionstatechangepoly = function (e) {
                              var t = e.target;
                              if (
                                t._lastConnectionState !== t.connectionState
                              ) {
                                t._lastConnectionState = t.connectionState;
                                var r = new Event("connectionstatechange", e);
                                t.dispatchEvent(r);
                              }
                              return e;
                            }),
                            this.addEventListener(
                              "iceconnectionstatechange",
                              this._connectionstatechangepoly,
                            )),
                          r.apply(this, arguments)
                        );
                      };
                    },
                  );
              }
            }
            function s(e, t) {
              if (
                e.RTCPeerConnection &&
                !(
                  ("chrome" === t.browser && t.version >= 71) ||
                  ("safari" === t.browser && t.version >= 605)
                )
              ) {
                var r = e.RTCPeerConnection.prototype.setRemoteDescription;
                e.RTCPeerConnection.prototype.setRemoteDescription = function (
                  t,
                ) {
                  if (
                    t &&
                    t.sdp &&
                    -1 !== t.sdp.indexOf("\na=extmap-allow-mixed")
                  ) {
                    var n = t.sdp
                      .split("\n")
                      .filter(function (e) {
                        return "a=extmap-allow-mixed" !== e.trim();
                      })
                      .join("\n");
                    e.RTCSessionDescription &&
                    t instanceof e.RTCSessionDescription
                      ? (arguments[0] = new e.RTCSessionDescription({
                          type: t.type,
                          sdp: n,
                        }))
                      : (t.sdp = n);
                  }
                  return r.apply(this, arguments);
                };
              }
            }
            function c(e, t) {
              if (e.RTCPeerConnection && e.RTCPeerConnection.prototype) {
                var r = e.RTCPeerConnection.prototype.addIceCandidate;
                r &&
                  0 !== r.length &&
                  (e.RTCPeerConnection.prototype.addIceCandidate = function () {
                    return arguments[0]
                      ? (("chrome" === t.browser && t.version < 78) ||
                          ("firefox" === t.browser && t.version < 68) ||
                          "safari" === t.browser) &&
                        arguments[0] &&
                        "" === arguments[0].candidate
                        ? Promise.resolve()
                        : r.apply(this, arguments)
                      : (arguments[1] && arguments[1].apply(null),
                        Promise.resolve());
                  });
              }
            }
            Object.defineProperty(r, "__esModule", { value: !0 });
            var p =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  };
            (r.shimRTCIceCandidate = n),
              (r.shimMaxMessageSize = i),
              (r.shimSendThrowTypeError = o),
              (r.shimConnectionState = a),
              (r.removeExtmapAllowMixed = s),
              (r.shimAddIceCandidateNullOrEmpty = c);
            var d = e("sdp"),
              u = (function (e) {
                return e && e.__esModule ? e : { default: e };
              })(d),
              f = e("./utils"),
              m = (function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return (t["default"] = e), t;
              })(f);
          },
          { "./utils": 11, sdp: 12 },
        ],
        7: [
          function (e, t, r) {
            "use strict";
            function n(e, t, r) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = r),
                e
              );
            }
            function i(e) {
              "object" === (void 0 === e ? "undefined" : l(e)) &&
                e.RTCTrackEvent &&
                "receiver" in e.RTCTrackEvent.prototype &&
                !("transceiver" in e.RTCTrackEvent.prototype) &&
                Object.defineProperty(
                  e.RTCTrackEvent.prototype,
                  "transceiver",
                  {
                    get: function () {
                      return { receiver: this.receiver };
                    },
                  },
                );
            }
            function o(e, t) {
              if (
                "object" === (void 0 === e ? "undefined" : l(e)) &&
                (e.RTCPeerConnection || e.mozRTCPeerConnection)
              ) {
                !e.RTCPeerConnection &&
                  e.mozRTCPeerConnection &&
                  (e.RTCPeerConnection = e.mozRTCPeerConnection),
                  t.version < 53 &&
                    [
                      "setLocalDescription",
                      "setRemoteDescription",
                      "addIceCandidate",
                    ].forEach(function (t) {
                      var r = e.RTCPeerConnection.prototype[t],
                        i = n({}, t, function () {
                          return (
                            (arguments[0] = new (
                              "addIceCandidate" === t
                                ? e.RTCIceCandidate
                                : e.RTCSessionDescription
                            )(arguments[0])),
                            r.apply(this, arguments)
                          );
                        });
                      e.RTCPeerConnection.prototype[t] = i[t];
                    });
                var r = {
                    inboundrtp: "inbound-rtp",
                    outboundrtp: "outbound-rtp",
                    candidatepair: "candidate-pair",
                    localcandidate: "local-candidate",
                    remotecandidate: "remote-candidate",
                  },
                  i = e.RTCPeerConnection.prototype.getStats;
                e.RTCPeerConnection.prototype.getStats = function () {
                  var e = Array.prototype.slice.call(arguments),
                    n = e[0],
                    o = e[1],
                    a = e[2];
                  return i
                    .apply(this, [n || null])
                    .then(function (e) {
                      if (t.version < 53 && !o)
                        try {
                          e.forEach(function (e) {
                            e.type = r[e.type] || e.type;
                          });
                        } catch (n) {
                          if ("TypeError" !== n.name)
                            return (
                              webphone_api.Log("ERROR, adapterjs TypeError"),
                              null
                            );
                          e.forEach(function (t, n) {
                            e.set(
                              n,
                              Object.assign({}, t, {
                                type: r[t.type] || t.type,
                              }),
                            );
                          });
                        }
                      return e;
                    })
                    .then(o, a);
                };
              }
            }
            function a(e) {
              if (
                "object" === (void 0 === e ? "undefined" : l(e)) &&
                e.RTCPeerConnection &&
                e.RTCRtpSender &&
                !(e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype)
              ) {
                var t = e.RTCPeerConnection.prototype.getSenders;
                t &&
                  (e.RTCPeerConnection.prototype.getSenders = function () {
                    var e = this,
                      r = t.apply(this, []);
                    return (
                      r.forEach(function (t) {
                        return (t._pc = e);
                      }),
                      r
                    );
                  });
                var r = e.RTCPeerConnection.prototype.addTrack;
                r &&
                  (e.RTCPeerConnection.prototype.addTrack = function () {
                    var e = r.apply(this, arguments);
                    return (e._pc = this), e;
                  }),
                  (e.RTCRtpSender.prototype.getStats = function () {
                    return this.track
                      ? this._pc.getStats(this.track)
                      : Promise.resolve(new Map());
                  });
              }
            }
            function s(e) {
              if (
                "object" === (void 0 === e ? "undefined" : l(e)) &&
                e.RTCPeerConnection &&
                e.RTCRtpSender &&
                !(e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype)
              ) {
                var t = e.RTCPeerConnection.prototype.getReceivers;
                t &&
                  (e.RTCPeerConnection.prototype.getReceivers = function () {
                    var e = this,
                      r = t.apply(this, []);
                    return (
                      r.forEach(function (t) {
                        return (t._pc = e);
                      }),
                      r
                    );
                  }),
                  C.wrapPeerConnectionEvent(e, "track", function (e) {
                    return (e.receiver._pc = e.srcElement), e;
                  }),
                  (e.RTCRtpReceiver.prototype.getStats = function () {
                    return this._pc.getStats(this.track);
                  });
              }
            }
            function c(e) {
              !e.RTCPeerConnection ||
                "removeStream" in e.RTCPeerConnection.prototype ||
                (e.RTCPeerConnection.prototype.removeStream = function (e) {
                  var t = this;
                  C.deprecated("removeStream", "removeTrack"),
                    this.getSenders().forEach(function (r) {
                      r.track &&
                        e.getTracks().includes(r.track) &&
                        t.removeTrack(r);
                    });
                });
            }
            function p(e) {
              e.DataChannel &&
                !e.RTCDataChannel &&
                (e.RTCDataChannel = e.DataChannel);
            }
            function d(e) {
              if (
                "object" === (void 0 === e ? "undefined" : l(e)) &&
                e.RTCPeerConnection
              ) {
                var t = e.RTCPeerConnection.prototype.addTransceiver;
                t &&
                  (e.RTCPeerConnection.prototype.addTransceiver = function () {
                    this.setParametersPromises = [];
                    var e = arguments[1],
                      r = e && "sendEncodings" in e;
                    r &&
                      e.sendEncodings.forEach(function (e) {
                        if ("rid" in e) {
                          if (!/^[a-z0-9]{0,16}$/i.test(e.rid))
                            return (
                              webphone_api.Log(
                                "ERROR, adapterjs Invalid RID value provided",
                              ),
                              null
                            );
                        }
                        return "scaleResolutionDownBy" in e &&
                          !(parseFloat(e.scaleResolutionDownBy) >= 1)
                          ? (webphone_api.Log(
                              "ERROR, adapterjs scale_resolution_down_by must be >= 1.0",
                            ),
                            null)
                          : "maxFramerate" in e &&
                            !(parseFloat(e.maxFramerate) >= 0)
                          ? (webphone_api.Log(
                              "ERROR, adapterjs max_framerate must be >= 0.0",
                            ),
                            null)
                          : void 0;
                      });
                    var n = t.apply(this, arguments);
                    if (r) {
                      var i = n.sender,
                        o = i.getParameters();
                      ("encodings" in o &&
                        (1 !== o.encodings.length ||
                          0 !== Object.keys(o.encodings[0]).length)) ||
                        ((o.encodings = e.sendEncodings),
                        (i.sendEncodings = e.sendEncodings),
                        this.setParametersPromises.push(
                          i
                            .setParameters(o)
                            .then(function () {
                              delete i.sendEncodings;
                            })
                            ["catch"](function () {
                              delete i.sendEncodings;
                            }),
                        ));
                    }
                    return n;
                  });
              }
            }
            function u(e) {
              if (
                "object" === (void 0 === e ? "undefined" : l(e)) &&
                e.RTCRtpSender
              ) {
                var t = e.RTCRtpSender.prototype.getParameters;
                t &&
                  (e.RTCRtpSender.prototype.getParameters = function () {
                    var e = t.apply(this, arguments);
                    return (
                      "encodings" in e ||
                        (e.encodings = [].concat(this.sendEncodings || [{}])),
                      e
                    );
                  });
              }
            }
            function f(e) {
              if (
                "object" === (void 0 === e ? "undefined" : l(e)) &&
                e.RTCPeerConnection
              ) {
                var t = e.RTCPeerConnection.prototype.createOffer;
                e.RTCPeerConnection.prototype.createOffer = function () {
                  var e = this,
                    r = arguments;
                  return this.setParametersPromises &&
                    this.setParametersPromises.length
                    ? Promise.all(this.setParametersPromises)
                        .then(function () {
                          return t.apply(e, r);
                        })
                        ["finally"](function () {
                          e.setParametersPromises = [];
                        })
                    : t.apply(this, arguments);
                };
              }
            }
            function m(e) {
              if (
                "object" === (void 0 === e ? "undefined" : l(e)) &&
                e.RTCPeerConnection
              ) {
                var t = e.RTCPeerConnection.prototype.createAnswer;
                e.RTCPeerConnection.prototype.createAnswer = function () {
                  var e = this,
                    r = arguments;
                  return this.setParametersPromises &&
                    this.setParametersPromises.length
                    ? Promise.all(this.setParametersPromises)
                        .then(function () {
                          return t.apply(e, r);
                        })
                        ["finally"](function () {
                          e.setParametersPromises = [];
                        })
                    : t.apply(this, arguments);
                };
              }
            }
            Object.defineProperty(r, "__esModule", { value: !0 }),
              (r.shimGetDisplayMedia = r.shimGetUserMedia = undefined);
            var l =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              h = e("./getusermedia");
            Object.defineProperty(r, "shimGetUserMedia", {
              enumerable: !0,
              get: function () {
                return h.shimGetUserMedia;
              },
            });
            var v = e("./getdisplaymedia");
            Object.defineProperty(r, "shimGetDisplayMedia", {
              enumerable: !0,
              get: function () {
                return v.shimGetDisplayMedia;
              },
            }),
              (r.shimOnTrack = i),
              (r.shimPeerConnection = o),
              (r.shimSenderGetStats = a),
              (r.shimReceiverGetStats = s),
              (r.shimRemoveStream = c),
              (r.shimRTCDataChannel = p),
              (r.shimAddTransceiver = d),
              (r.shimGetParameters = u),
              (r.shimCreateOffer = f),
              (r.shimCreateAnswer = m);
            var y = e("../utils"),
              C = (function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return (t["default"] = e), t;
              })(y);
          },
          { "../utils": 11, "./getdisplaymedia": 8, "./getusermedia": 9 },
        ],
        8: [
          function (e, t, r) {
            "use strict";
            function n(e, t) {
              (e.navigator.mediaDevices &&
                "getDisplayMedia" in e.navigator.mediaDevices) ||
                (e.navigator.mediaDevices &&
                  (e.navigator.mediaDevices.getDisplayMedia = function (r) {
                    if (!r || !r.video) {
                      var n = new DOMException(
                        "getDisplayMedia without video constraints is undefined",
                      );
                      return (
                        (n.name = "NotFoundError"),
                        (n.code = 8),
                        Promise.reject(n)
                      );
                    }
                    return (
                      !0 === r.video
                        ? (r.video = { mediaSource: t })
                        : (r.video.mediaSource = t),
                      e.navigator.mediaDevices.getUserMedia(r)
                    );
                  }));
            }
            Object.defineProperty(r, "__esModule", { value: !0 }),
              (r.shimGetDisplayMedia = n);
          },
          {},
        ],
        9: [
          function (e, t, r) {
            "use strict";
            function n(e, t) {
              var r = e && e.navigator,
                n = e && e.MediaStreamTrack;
              if (
                ((r.getUserMedia = function (e, t, n) {
                  a.deprecated(
                    "navigator.getUserMedia",
                    "navigator.mediaDevices.getUserMedia",
                  ),
                    r.mediaDevices.getUserMedia(e).then(t, n);
                }),
                !(
                  t.version > 55 &&
                  "autoGainControl" in r.mediaDevices.getSupportedConstraints()
                ))
              ) {
                var o = function (e, t, r) {
                    t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
                  },
                  s = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
                if (
                  ((r.mediaDevices.getUserMedia = function (e) {
                    return (
                      "object" === (void 0 === e ? "undefined" : i(e)) &&
                        "object" === i(e.audio) &&
                        ((e = JSON.parse(JSON.stringify(e))),
                        o(e.audio, "autoGainControl", "mozAutoGainControl"),
                        o(e.audio, "noiseSuppression", "mozNoiseSuppression")),
                      s(e)
                    );
                  }),
                  n && n.prototype.getSettings)
                ) {
                  var c = n.prototype.getSettings;
                  n.prototype.getSettings = function () {
                    var e = c.apply(this, arguments);
                    return (
                      o(e, "mozAutoGainControl", "autoGainControl"),
                      o(e, "mozNoiseSuppression", "noiseSuppression"),
                      e
                    );
                  };
                }
                if (n && n.prototype.applyConstraints) {
                  var p = n.prototype.applyConstraints;
                  n.prototype.applyConstraints = function (e) {
                    return (
                      "audio" === this.kind &&
                        "object" === (void 0 === e ? "undefined" : i(e)) &&
                        ((e = JSON.parse(JSON.stringify(e))),
                        o(e, "autoGainControl", "mozAutoGainControl"),
                        o(e, "noiseSuppression", "mozNoiseSuppression")),
                      p.apply(this, [e])
                    );
                  };
                }
              }
            }
            Object.defineProperty(r, "__esModule", { value: !0 });
            var i =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  };
            r.shimGetUserMedia = n;
            var o = e("../utils"),
              a = (function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return (t["default"] = e), t;
              })(o);
          },
          { "../utils": 11 },
        ],
        10: [
          function (e, t, r) {
            "use strict";
            function n(e) {
              if (
                "object" === (void 0 === e ? "undefined" : f(e)) &&
                e.RTCPeerConnection
              ) {
                if (
                  ("getLocalStreams" in e.RTCPeerConnection.prototype ||
                    (e.RTCPeerConnection.prototype.getLocalStreams =
                      function () {
                        return (
                          this._localStreams || (this._localStreams = []),
                          this._localStreams
                        );
                      }),
                  !("addStream" in e.RTCPeerConnection.prototype))
                ) {
                  var t = e.RTCPeerConnection.prototype.addTrack;
                  (e.RTCPeerConnection.prototype.addStream = function (e) {
                    var r = this;
                    this._localStreams || (this._localStreams = []),
                      this._localStreams.includes(e) ||
                        this._localStreams.push(e),
                      e.getAudioTracks().forEach(function (n) {
                        return t.call(r, n, e);
                      }),
                      e.getVideoTracks().forEach(function (n) {
                        return t.call(r, n, e);
                      });
                  }),
                    (e.RTCPeerConnection.prototype.addTrack = function (e) {
                      for (
                        var r = this,
                          n = arguments.length,
                          i = Array(n > 1 ? n - 1 : 0),
                          o = 1;
                        o < n;
                        o++
                      )
                        i[o - 1] = arguments[o];
                      return (
                        i &&
                          i.forEach(function (e) {
                            r._localStreams
                              ? r._localStreams.includes(e) ||
                                r._localStreams.push(e)
                              : (r._localStreams = [e]);
                          }),
                        t.apply(this, arguments)
                      );
                    });
                }
                "removeStream" in e.RTCPeerConnection.prototype ||
                  (e.RTCPeerConnection.prototype.removeStream = function (e) {
                    var t = this;
                    this._localStreams || (this._localStreams = []);
                    var r = this._localStreams.indexOf(e);
                    if (-1 !== r) {
                      this._localStreams.splice(r, 1);
                      var n = e.getTracks();
                      this.getSenders().forEach(function (e) {
                        n.includes(e.track) && t.removeTrack(e);
                      });
                    }
                  });
              }
            }
            function i(e) {
              if (
                "object" === (void 0 === e ? "undefined" : f(e)) &&
                e.RTCPeerConnection &&
                ("getRemoteStreams" in e.RTCPeerConnection.prototype ||
                  (e.RTCPeerConnection.prototype.getRemoteStreams =
                    function () {
                      return this._remoteStreams ? this._remoteStreams : [];
                    }),
                !("onaddstream" in e.RTCPeerConnection.prototype))
              ) {
                Object.defineProperty(
                  e.RTCPeerConnection.prototype,
                  "onaddstream",
                  {
                    get: function () {
                      return this._onaddstream;
                    },
                    set: function (e) {
                      var t = this;
                      this._onaddstream &&
                        (this.removeEventListener(
                          "addstream",
                          this._onaddstream,
                        ),
                        this.removeEventListener(
                          "track",
                          this._onaddstreampoly,
                        )),
                        this.addEventListener(
                          "addstream",
                          (this._onaddstream = e),
                        ),
                        this.addEventListener(
                          "track",
                          (this._onaddstreampoly = function (e) {
                            e.streams.forEach(function (e) {
                              if (
                                (t._remoteStreams || (t._remoteStreams = []),
                                !t._remoteStreams.includes(e))
                              ) {
                                t._remoteStreams.push(e);
                                var r = new Event("addstream");
                                (r.stream = e), t.dispatchEvent(r);
                              }
                            });
                          }),
                        );
                    },
                  },
                );
                var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                e.RTCPeerConnection.prototype.setRemoteDescription =
                  function () {
                    var e = this;
                    return (
                      this._onaddstreampoly ||
                        this.addEventListener(
                          "track",
                          (this._onaddstreampoly = function (t) {
                            t.streams.forEach(function (t) {
                              if (
                                (e._remoteStreams || (e._remoteStreams = []),
                                !(e._remoteStreams.indexOf(t) >= 0))
                              ) {
                                e._remoteStreams.push(t);
                                var r = new Event("addstream");
                                (r.stream = t), e.dispatchEvent(r);
                              }
                            });
                          }),
                        ),
                      t.apply(e, arguments)
                    );
                  };
              }
            }
            function o(e) {
              if (
                "object" === (void 0 === e ? "undefined" : f(e)) &&
                e.RTCPeerConnection
              ) {
                var t = e.RTCPeerConnection.prototype,
                  r = t.createOffer,
                  n = t.createAnswer,
                  i = t.setLocalDescription,
                  o = t.setRemoteDescription,
                  a = t.addIceCandidate;
                (t.createOffer = function (e, t) {
                  var n = arguments.length >= 2 ? arguments[2] : arguments[0],
                    i = r.apply(this, [n]);
                  return t ? (i.then(e, t), Promise.resolve()) : i;
                }),
                  (t.createAnswer = function (e, t) {
                    var r = arguments.length >= 2 ? arguments[2] : arguments[0],
                      i = n.apply(this, [r]);
                    return t ? (i.then(e, t), Promise.resolve()) : i;
                  });
                var s = function (e, t, r) {
                  var n = i.apply(this, [e]);
                  return r ? (n.then(t, r), Promise.resolve()) : n;
                };
                (t.setLocalDescription = s),
                  (s = function (e, t, r) {
                    var n = o.apply(this, [e]);
                    return r ? (n.then(t, r), Promise.resolve()) : n;
                  }),
                  (t.setRemoteDescription = s),
                  (s = function (e, t, r) {
                    var n = a.apply(this, [e]);
                    return r ? (n.then(t, r), Promise.resolve()) : n;
                  }),
                  (t.addIceCandidate = s);
              }
            }
            function a(e) {
              var t = e && e.navigator;
              if (t.mediaDevices && t.mediaDevices.getUserMedia) {
                var r = t.mediaDevices,
                  n = r.getUserMedia.bind(r);
                t.mediaDevices.getUserMedia = function (e) {
                  return n(s(e));
                };
              }
              !t.getUserMedia &&
                t.mediaDevices &&
                t.mediaDevices.getUserMedia &&
                (t.getUserMedia = function (e, r, n) {
                  t.mediaDevices.getUserMedia(e).then(r, n);
                }.bind(t));
            }
            function s(e) {
              return e && e.video !== undefined
                ? Object.assign({}, e, { video: l.compactObject(e.video) })
                : e;
            }
            function c(e) {
              if (e.RTCPeerConnection) {
                var t = e.RTCPeerConnection;
                (e.RTCPeerConnection = function (e, r) {
                  if (e && e.iceServers) {
                    for (var n = [], i = 0; i < e.iceServers.length; i++) {
                      var o = e.iceServers[i];
                      !o.hasOwnProperty("urls") && o.hasOwnProperty("url")
                        ? (l.deprecated(
                            "RTCIceServer.url",
                            "RTCIceServer.urls",
                          ),
                          (o = JSON.parse(JSON.stringify(o))),
                          (o.urls = o.url),
                          delete o.url,
                          n.push(o))
                        : n.push(e.iceServers[i]);
                    }
                    e.iceServers = n;
                  }
                  return new t(e, r);
                }),
                  (e.RTCPeerConnection.prototype = t.prototype),
                  "generateCertificate" in t &&
                    Object.defineProperty(
                      e.RTCPeerConnection,
                      "generateCertificate",
                      {
                        get: function () {
                          return t.generateCertificate;
                        },
                      },
                    );
              }
            }
            function p(e) {
              "object" === (void 0 === e ? "undefined" : f(e)) &&
                e.RTCTrackEvent &&
                "receiver" in e.RTCTrackEvent.prototype &&
                !("transceiver" in e.RTCTrackEvent.prototype) &&
                Object.defineProperty(
                  e.RTCTrackEvent.prototype,
                  "transceiver",
                  {
                    get: function () {
                      return { receiver: this.receiver };
                    },
                  },
                );
            }
            function d(e) {
              var t = e.RTCPeerConnection.prototype.createOffer;
              e.RTCPeerConnection.prototype.createOffer = function (e) {
                if (e) {
                  "undefined" != typeof e.offerToReceiveAudio &&
                    (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
                  var r = this.getTransceivers().find(function (e) {
                    return "audio" === e.receiver.track.kind;
                  });
                  !1 === e.offerToReceiveAudio && r
                    ? "sendrecv" === r.direction
                      ? r.setDirection
                        ? r.setDirection("sendonly")
                        : (r.direction = "sendonly")
                      : "recvonly" === r.direction &&
                        (r.setDirection
                          ? r.setDirection("inactive")
                          : (r.direction = "inactive"))
                    : !0 !== e.offerToReceiveAudio ||
                      r ||
                      this.addTransceiver("audio"),
                    "undefined" != typeof e.offerToReceiveVideo &&
                      (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
                  var n = this.getTransceivers().find(function (e) {
                    return "video" === e.receiver.track.kind;
                  });
                  !1 === e.offerToReceiveVideo && n
                    ? "sendrecv" === n.direction
                      ? n.setDirection
                        ? n.setDirection("sendonly")
                        : (n.direction = "sendonly")
                      : "recvonly" === n.direction &&
                        (n.setDirection
                          ? n.setDirection("inactive")
                          : (n.direction = "inactive"))
                    : !0 !== e.offerToReceiveVideo ||
                      n ||
                      this.addTransceiver("video");
                }
                return t.apply(this, arguments);
              };
            }
            function u(e) {
              "object" !== (void 0 === e ? "undefined" : f(e)) ||
                e.AudioContext ||
                (e.AudioContext = e.webkitAudioContext);
            }
            Object.defineProperty(r, "__esModule", { value: !0 });
            var f =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  };
            (r.shimLocalStreamsAPI = n),
              (r.shimRemoteStreamsAPI = i),
              (r.shimCallbacksAPI = o),
              (r.shimGetUserMedia = a),
              (r.shimConstraints = s),
              (r.shimRTCIceServerUrls = c),
              (r.shimTrackEventTransceiver = p),
              (r.shimCreateOfferLegacy = d),
              (r.shimAudioContext = u);
            var m = e("../utils"),
              l = (function (e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return (t["default"] = e), t;
              })(m);
          },
          { "../utils": 11 },
        ],
        11: [
          function (e, t, r) {
            "use strict";
            function n(e, t, r) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = r),
                e
              );
            }
            function i(e, t, r) {
              var n = e.match(t);
              return n && n.length >= r && parseInt(n[r], 10);
            }
            function o(e, t, r) {
              if (e.RTCPeerConnection) {
                var n = e.RTCPeerConnection.prototype,
                  i = n.addEventListener;
                n.addEventListener = function (e, n) {
                  if (e !== t) return i.apply(this, arguments);
                  var o = function (e) {
                    var t = r(e);
                    t && (n.handleEvent ? n.handleEvent(t) : n(t));
                  };
                  return (
                    (this._eventMap = this._eventMap || {}),
                    this._eventMap[t] || (this._eventMap[t] = new Map()),
                    this._eventMap[t].set(n, o),
                    i.apply(this, [e, o])
                  );
                };
                var o = n.removeEventListener;
                (n.removeEventListener = function (e, r) {
                  if (e !== t || !this._eventMap || !this._eventMap[t])
                    return o.apply(this, arguments);
                  if (!this._eventMap[t].has(r))
                    return o.apply(this, arguments);
                  var n = this._eventMap[t].get(r);
                  return (
                    this._eventMap[t]["delete"](r),
                    0 === this._eventMap[t].size && delete this._eventMap[t],
                    0 === Object.keys(this._eventMap).length &&
                      delete this._eventMap,
                    o.apply(this, [e, n])
                  );
                }),
                  Object.defineProperty(n, "on" + t, {
                    get: function () {
                      return this["_on" + t];
                    },
                    set: function (e) {
                      this["_on" + t] &&
                        (this.removeEventListener(t, this["_on" + t]),
                        delete this["_on" + t]),
                        e && this.addEventListener(t, (this["_on" + t] = e));
                    },
                    enumerable: !0,
                    configurable: !0,
                  });
              }
            }
            function a(e) {
              return "boolean" != typeof e
                ? new Error(
                    "Argument type: " +
                      (void 0 === e ? "undefined" : h(e)) +
                      ". Please use a boolean.",
                  )
                : ((v = e),
                  e
                    ? "adapter.js logging disabled"
                    : "adapter.js logging enabled");
            }
            function s(e) {
              return "boolean" != typeof e
                ? new Error(
                    "Argument type: " +
                      (void 0 === e ? "undefined" : h(e)) +
                      ". Please use a boolean.",
                  )
                : ((y = !e),
                  "adapter.js deprecation warnings " +
                    (e ? "disabled" : "enabled"));
            }
            function c() {
              if (
                "object" ===
                ("undefined" == typeof window ? "undefined" : h(window))
              ) {
                if (v) return;
                "undefined" != typeof console &&
                  "function" == typeof console.log &&
                  console.log.apply(console, arguments);
              }
            }
            function p(e, t) {
              y &&
                console.warn(
                  e + " is deprecated, please use " + t + " instead.",
                );
            }
            function d(e) {
              var t = { browser: null, version: null };
              if (void 0 === e || !e.navigator)
                return (t.browser = "Not a browser."), t;
              var r = e.navigator;
              if (r.mozGetUserMedia)
                (t.browser = "firefox"),
                  (t.version = i(r.userAgent, /Firefox\/(\d+)\./, 1));
              else if (
                r.webkitGetUserMedia ||
                (!1 === e.isSecureContext &&
                  e.webkitRTCPeerConnection &&
                  !e.RTCIceGatherer)
              )
                (t.browser = "chrome"),
                  (t.version = i(r.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
              else {
                if (
                  !e.RTCPeerConnection ||
                  !r.userAgent.match(/AppleWebKit\/(\d+)\./)
                )
                  return (t.browser = "Not a supported browser."), t;
                (t.browser = "safari"),
                  (t.version = i(r.userAgent, /AppleWebKit\/(\d+)\./, 1)),
                  (t.supportsUnifiedPlan =
                    e.RTCRtpTransceiver &&
                    "currentDirection" in e.RTCRtpTransceiver.prototype);
              }
              return t;
            }
            function u(e) {
              return "[object Object]" === Object.prototype.toString.call(e);
            }
            function f(e) {
              return u(e)
                ? Object.keys(e).reduce(function (t, r) {
                    var i = u(e[r]),
                      o = i ? f(e[r]) : e[r],
                      a = i && !Object.keys(o).length;
                    return o === undefined || a
                      ? t
                      : Object.assign(t, n({}, r, o));
                  }, {})
                : e;
            }
            function m(e, t, r) {
              t &&
                !r.has(t.id) &&
                (r.set(t.id, t),
                Object.keys(t).forEach(function (n) {
                  n.endsWith("Id")
                    ? m(e, e.get(t[n]), r)
                    : n.endsWith("Ids") &&
                      t[n].forEach(function (t) {
                        m(e, e.get(t), r);
                      });
                }));
            }
            function l(e, t, r) {
              var n = r ? "outbound-rtp" : "inbound-rtp",
                i = new Map();
              if (null === t) return i;
              var o = [];
              return (
                e.forEach(function (e) {
                  "track" === e.type && e.trackIdentifier === t.id && o.push(e);
                }),
                o.forEach(function (t) {
                  e.forEach(function (r) {
                    r.type === n && r.trackId === t.id && m(e, r, i);
                  });
                }),
                i
              );
            }
            Object.defineProperty(r, "__esModule", { value: !0 });
            var h =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  };
            (r.extractVersion = i),
              (r.wrapPeerConnectionEvent = o),
              (r.disableLog = a),
              (r.disableWarnings = s),
              (r.log = c),
              (r.deprecated = p),
              (r.detectBrowser = d),
              (r.compactObject = f),
              (r.walkStats = m),
              (r.filterStats = l);
            var v = !0,
              y = !0;
          },
          {},
        ],
        12: [
          function (e, t, r) {
            "use strict";
            var n =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              i = {};
            (i.generateIdentifier = function () {
              return Math.random().toString(36).substr(2, 10);
            }),
              (i.localCName = i.generateIdentifier()),
              (i.splitLines = function (e) {
                return e
                  .trim()
                  .split("\n")
                  .map(function (e) {
                    return e.trim();
                  });
              }),
              (i.splitSections = function (e) {
                return e.split("\nm=").map(function (e, t) {
                  return (t > 0 ? "m=" + e : e).trim() + "\r\n";
                });
              }),
              (i.getDescription = function (e) {
                var t = i.splitSections(e);
                return t && t[0];
              }),
              (i.getMediaSections = function (e) {
                var t = i.splitSections(e);
                return t.shift(), t;
              }),
              (i.matchPrefix = function (e, t) {
                return i.splitLines(e).filter(function (e) {
                  return 0 === e.indexOf(t);
                });
              }),
              (i.parseCandidate = function (e) {
                var t = void 0;
                t =
                  0 === e.indexOf("a=candidate:")
                    ? e.substring(12).split(" ")
                    : e.substring(10).split(" ");
                for (
                  var r = {
                      foundation: t[0],
                      component: { 1: "rtp", 2: "rtcp" }[t[1]],
                      protocol: t[2].toLowerCase(),
                      priority: parseInt(t[3], 10),
                      ip: t[4],
                      address: t[4],
                      port: parseInt(t[5], 10),
                      type: t[7],
                    },
                    n = 8;
                  n < t.length;
                  n += 2
                )
                  switch (t[n]) {
                    case "raddr":
                      r.relatedAddress = t[n + 1];
                      break;
                    case "rport":
                      r.relatedPort = parseInt(t[n + 1], 10);
                      break;
                    case "tcptype":
                      r.tcpType = t[n + 1];
                      break;
                    case "ufrag":
                      (r.ufrag = t[n + 1]), (r.usernameFragment = t[n + 1]);
                      break;
                    default:
                      r[t[n]] === undefined && (r[t[n]] = t[n + 1]);
                  }
                return r;
              }),
              (i.writeCandidate = function (e) {
                var t = [];
                t.push(e.foundation);
                var r = e.component;
                "rtp" === r ? t.push(1) : "rtcp" === r ? t.push(2) : t.push(r),
                  t.push(e.protocol.toUpperCase()),
                  t.push(e.priority),
                  t.push(e.address || e.ip),
                  t.push(e.port);
                var n = e.type;
                return (
                  t.push("typ"),
                  t.push(n),
                  "host" !== n &&
                    e.relatedAddress &&
                    e.relatedPort &&
                    (t.push("raddr"),
                    t.push(e.relatedAddress),
                    t.push("rport"),
                    t.push(e.relatedPort)),
                  e.tcpType &&
                    "tcp" === e.protocol.toLowerCase() &&
                    (t.push("tcptype"), t.push(e.tcpType)),
                  (e.usernameFragment || e.ufrag) &&
                    (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)),
                  "candidate:" + t.join(" ")
                );
              }),
              (i.parseIceOptions = function (e) {
                return e.substr(14).split(" ");
              }),
              (i.parseRtpMap = function (e) {
                var t = e.substr(9).split(" "),
                  r = { payloadType: parseInt(t.shift(), 10) };
                return (
                  (t = t[0].split("/")),
                  (r.name = t[0]),
                  (r.clockRate = parseInt(t[1], 10)),
                  (r.channels = 3 === t.length ? parseInt(t[2], 10) : 1),
                  (r.numChannels = r.channels),
                  r
                );
              }),
              (i.writeRtpMap = function (e) {
                var t = e.payloadType;
                e.preferredPayloadType !== undefined &&
                  (t = e.preferredPayloadType);
                var r = e.channels || e.numChannels || 1;
                return (
                  "a=rtpmap:" +
                  t +
                  " " +
                  e.name +
                  "/" +
                  e.clockRate +
                  (1 !== r ? "/" + r : "") +
                  "\r\n"
                );
              }),
              (i.parseExtmap = function (e) {
                var t = e.substr(9).split(" ");
                return {
                  id: parseInt(t[0], 10),
                  direction:
                    t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
                  uri: t[1],
                };
              }),
              (i.writeExtmap = function (e) {
                return (
                  "a=extmap:" +
                  (e.id || e.preferredId) +
                  (e.direction && "sendrecv" !== e.direction
                    ? "/" + e.direction
                    : "") +
                  " " +
                  e.uri +
                  "\r\n"
                );
              }),
              (i.parseFmtp = function (e) {
                for (
                  var t = {},
                    r = void 0,
                    n = e.substr(e.indexOf(" ") + 1).split(";"),
                    i = 0;
                  i < n.length;
                  i++
                )
                  (r = n[i].trim().split("=")), (t[r[0].trim()] = r[1]);
                return t;
              }),
              (i.writeFmtp = function (e) {
                var t = "",
                  r = e.payloadType;
                if (
                  (e.preferredPayloadType !== undefined &&
                    (r = e.preferredPayloadType),
                  e.parameters && Object.keys(e.parameters).length)
                ) {
                  var n = [];
                  Object.keys(e.parameters).forEach(function (t) {
                    e.parameters[t]
                      ? n.push(t + "=" + e.parameters[t])
                      : n.push(t);
                  }),
                    (t += "a=fmtp:" + r + " " + n.join(";") + "\r\n");
                }
                return t;
              }),
              (i.parseRtcpFb = function (e) {
                var t = e.substr(e.indexOf(" ") + 1).split(" ");
                return { type: t.shift(), parameter: t.join(" ") };
              }),
              (i.writeRtcpFb = function (e) {
                var t = "",
                  r = e.payloadType;
                return (
                  e.preferredPayloadType !== undefined &&
                    (r = e.preferredPayloadType),
                  e.rtcpFeedback &&
                    e.rtcpFeedback.length &&
                    e.rtcpFeedback.forEach(function (e) {
                      t +=
                        "a=rtcp-fb:" +
                        r +
                        " " +
                        e.type +
                        (e.parameter && e.parameter.length
                          ? " " + e.parameter
                          : "") +
                        "\r\n";
                    }),
                  t
                );
              }),
              (i.parseSsrcMedia = function (e) {
                var t = e.indexOf(" "),
                  r = { ssrc: parseInt(e.substr(7, t - 7), 10) },
                  n = e.indexOf(":", t);
                return (
                  n > -1
                    ? ((r.attribute = e.substr(t + 1, n - t - 1)),
                      (r.value = e.substr(n + 1)))
                    : (r.attribute = e.substr(t + 1)),
                  r
                );
              }),
              (i.parseSsrcGroup = function (e) {
                var t = e.substr(13).split(" ");
                return {
                  semantics: t.shift(),
                  ssrcs: t.map(function (e) {
                    return parseInt(e, 10);
                  }),
                };
              }),
              (i.getMid = function (e) {
                var t = i.matchPrefix(e, "a=mid:")[0];
                if (t) return t.substr(6);
              }),
              (i.parseFingerprint = function (e) {
                var t = e.substr(14).split(" ");
                return { algorithm: t[0].toLowerCase(), value: t[1] };
              }),
              (i.getDtlsParameters = function (e, t) {
                return {
                  role: "auto",
                  fingerprints: i
                    .matchPrefix(e + t, "a=fingerprint:")
                    .map(i.parseFingerprint),
                };
              }),
              (i.writeDtlsParameters = function (e, t) {
                var r = "a=setup:" + t + "\r\n";
                return (
                  e.fingerprints.forEach(function (e) {
                    r +=
                      "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
                  }),
                  r
                );
              }),
              (i.parseCryptoLine = function (e) {
                var t = e.substr(9).split(" ");
                return {
                  tag: parseInt(t[0], 10),
                  cryptoSuite: t[1],
                  keyParams: t[2],
                  sessionParams: t.slice(3),
                };
              }),
              (i.writeCryptoLine = function (e) {
                return (
                  "a=crypto:" +
                  e.tag +
                  " " +
                  e.cryptoSuite +
                  " " +
                  ("object" === n(e.keyParams)
                    ? i.writeCryptoKeyParams(e.keyParams)
                    : e.keyParams) +
                  (e.sessionParams ? " " + e.sessionParams.join(" ") : "") +
                  "\r\n"
                );
              }),
              (i.parseCryptoKeyParams = function (e) {
                if (0 !== e.indexOf("inline:")) return null;
                var t = e.substr(7).split("|");
                return {
                  keyMethod: "inline",
                  keySalt: t[0],
                  lifeTime: t[1],
                  mkiValue: t[2] ? t[2].split(":")[0] : undefined,
                  mkiLength: t[2] ? t[2].split(":")[1] : undefined,
                };
              }),
              (i.writeCryptoKeyParams = function (e) {
                return (
                  e.keyMethod +
                  ":" +
                  e.keySalt +
                  (e.lifeTime ? "|" + e.lifeTime : "") +
                  (e.mkiValue && e.mkiLength
                    ? "|" + e.mkiValue + ":" + e.mkiLength
                    : "")
                );
              }),
              (i.getCryptoParameters = function (e, t) {
                return i.matchPrefix(e + t, "a=crypto:").map(i.parseCryptoLine);
              }),
              (i.getIceParameters = function (e, t) {
                var r = i.matchPrefix(e + t, "a=ice-ufrag:")[0],
                  n = i.matchPrefix(e + t, "a=ice-pwd:")[0];
                return r && n
                  ? { usernameFragment: r.substr(12), password: n.substr(10) }
                  : null;
              }),
              (i.writeIceParameters = function (e) {
                var t =
                  "a=ice-ufrag:" +
                  e.usernameFragment +
                  "\r\na=ice-pwd:" +
                  e.password +
                  "\r\n";
                return e.iceLite && (t += "a=ice-lite\r\n"), t;
              }),
              (i.parseRtpParameters = function (e) {
                for (
                  var t = {
                      codecs: [],
                      headerExtensions: [],
                      fecMechanisms: [],
                      rtcp: [],
                    },
                    r = i.splitLines(e),
                    n = r[0].split(" "),
                    o = 3;
                  o < n.length;
                  o++
                ) {
                  var a = n[o],
                    s = i.matchPrefix(e, "a=rtpmap:" + a + " ")[0];
                  if (s) {
                    var c = i.parseRtpMap(s),
                      p = i.matchPrefix(e, "a=fmtp:" + a + " ");
                    switch (
                      ((c.parameters = p.length ? i.parseFmtp(p[0]) : {}),
                      (c.rtcpFeedback = i
                        .matchPrefix(e, "a=rtcp-fb:" + a + " ")
                        .map(i.parseRtcpFb)),
                      t.codecs.push(c),
                      c.name.toUpperCase())
                    ) {
                      case "RED":
                      case "ULPFEC":
                        t.fecMechanisms.push(c.name.toUpperCase());
                    }
                  }
                }
                return (
                  i.matchPrefix(e, "a=extmap:").forEach(function (e) {
                    t.headerExtensions.push(i.parseExtmap(e));
                  }),
                  t
                );
              }),
              (i.writeRtpDescription = function (e, t) {
                var r = "";
                (r += "m=" + e + " "),
                  (r += t.codecs.length > 0 ? "9" : "0"),
                  (r += " UDP/TLS/RTP/SAVPF "),
                  (r +=
                    t.codecs
                      .map(function (e) {
                        return e.preferredPayloadType !== undefined
                          ? e.preferredPayloadType
                          : e.payloadType;
                      })
                      .join(" ") + "\r\n"),
                  (r += "c=IN IP4 0.0.0.0\r\n"),
                  (r += "a=rtcp:9 IN IP4 0.0.0.0\r\n"),
                  t.codecs.forEach(function (e) {
                    (r += i.writeRtpMap(e)),
                      (r += i.writeFmtp(e)),
                      (r += i.writeRtcpFb(e));
                  });
                var n = 0;
                return (
                  t.codecs.forEach(function (e) {
                    e.maxptime > n && (n = e.maxptime);
                  }),
                  n > 0 && (r += "a=maxptime:" + n + "\r\n"),
                  t.headerExtensions &&
                    t.headerExtensions.forEach(function (e) {
                      r += i.writeExtmap(e);
                    }),
                  r
                );
              }),
              (i.parseRtpEncodingParameters = function (e) {
                var t = [],
                  r = i.parseRtpParameters(e),
                  n = -1 !== r.fecMechanisms.indexOf("RED"),
                  o = -1 !== r.fecMechanisms.indexOf("ULPFEC"),
                  a = i
                    .matchPrefix(e, "a=ssrc:")
                    .map(function (e) {
                      return i.parseSsrcMedia(e);
                    })
                    .filter(function (e) {
                      return "cname" === e.attribute;
                    }),
                  s = a.length > 0 && a[0].ssrc,
                  c = void 0,
                  p = i.matchPrefix(e, "a=ssrc-group:FID").map(function (e) {
                    return e
                      .substr(17)
                      .split(" ")
                      .map(function (e) {
                        return parseInt(e, 10);
                      });
                  });
                p.length > 0 &&
                  p[0].length > 1 &&
                  p[0][0] === s &&
                  (c = p[0][1]),
                  r.codecs.forEach(function (e) {
                    if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                      var r = {
                        ssrc: s,
                        codecPayloadType: parseInt(e.parameters.apt, 10),
                      };
                      s && c && (r.rtx = { ssrc: c }),
                        t.push(r),
                        n &&
                          ((r = JSON.parse(JSON.stringify(r))),
                          (r.fec = {
                            ssrc: s,
                            mechanism: o ? "red+ulpfec" : "red",
                          }),
                          t.push(r));
                    }
                  }),
                  0 === t.length && s && t.push({ ssrc: s });
                var d = i.matchPrefix(e, "b=");
                return (
                  d.length &&
                    ((d =
                      0 === d[0].indexOf("b=TIAS:")
                        ? parseInt(d[0].substr(7), 10)
                        : 0 === d[0].indexOf("b=AS:")
                        ? 1e3 * parseInt(d[0].substr(5), 10) * 0.95 - 16e3
                        : undefined),
                    t.forEach(function (e) {
                      e.maxBitrate = d;
                    })),
                  t
                );
              }),
              (i.parseRtcpParameters = function (e) {
                var t = {},
                  r = i
                    .matchPrefix(e, "a=ssrc:")
                    .map(function (e) {
                      return i.parseSsrcMedia(e);
                    })
                    .filter(function (e) {
                      return "cname" === e.attribute;
                    })[0];
                r && ((t.cname = r.value), (t.ssrc = r.ssrc));
                var n = i.matchPrefix(e, "a=rtcp-rsize");
                (t.reducedSize = n.length > 0), (t.compound = 0 === n.length);
                var o = i.matchPrefix(e, "a=rtcp-mux");
                return (t.mux = o.length > 0), t;
              }),
              (i.writeRtcpParameters = function (e) {
                var t = "";
                return (
                  e.reducedSize && (t += "a=rtcp-rsize\r\n"),
                  e.mux && (t += "a=rtcp-mux\r\n"),
                  e.ssrc !== undefined &&
                    e.cname &&
                    (t += "a=ssrc:" + e.ssrc + " cname:" + e.cname + "\r\n"),
                  t
                );
              }),
              (i.parseMsid = function (e) {
                var t = void 0,
                  r = i.matchPrefix(e, "a=msid:");
                if (1 === r.length)
                  return (
                    (t = r[0].substr(7).split(" ")),
                    { stream: t[0], track: t[1] }
                  );
                var n = i
                  .matchPrefix(e, "a=ssrc:")
                  .map(function (e) {
                    return i.parseSsrcMedia(e);
                  })
                  .filter(function (e) {
                    return "msid" === e.attribute;
                  });
                return n.length > 0
                  ? ((t = n[0].value.split(" ")), { stream: t[0], track: t[1] })
                  : void 0;
              }),
              (i.parseSctpDescription = function (e) {
                var t = i.parseMLine(e),
                  r = i.matchPrefix(e, "a=max-message-size:"),
                  n = void 0;
                r.length > 0 && (n = parseInt(r[0].substr(19), 10)),
                  isNaN(n) && (n = 65536);
                var o = i.matchPrefix(e, "a=sctp-port:");
                if (o.length > 0)
                  return {
                    port: parseInt(o[0].substr(12), 10),
                    protocol: t.fmt,
                    maxMessageSize: n,
                  };
                var a = i.matchPrefix(e, "a=sctpmap:");
                if (a.length > 0) {
                  var s = a[0].substr(10).split(" ");
                  return {
                    port: parseInt(s[0], 10),
                    protocol: s[1],
                    maxMessageSize: n,
                  };
                }
              }),
              (i.writeSctpDescription = function (e, t) {
                var r = [];
                return (
                  (r =
                    "DTLS/SCTP" !== e.protocol
                      ? [
                          "m=" +
                            e.kind +
                            " 9 " +
                            e.protocol +
                            " " +
                            t.protocol +
                            "\r\n",
                          "c=IN IP4 0.0.0.0\r\n",
                          "a=sctp-port:" + t.port + "\r\n",
                        ]
                      : [
                          "m=" +
                            e.kind +
                            " 9 " +
                            e.protocol +
                            " " +
                            t.port +
                            "\r\n",
                          "c=IN IP4 0.0.0.0\r\n",
                          "a=sctpmap:" +
                            t.port +
                            " " +
                            t.protocol +
                            " 65535\r\n",
                        ]),
                  t.maxMessageSize !== undefined &&
                    r.push("a=max-message-size:" + t.maxMessageSize + "\r\n"),
                  r.join("")
                );
              }),
              (i.generateSessionId = function () {
                return Math.random().toString().substr(2, 21);
              }),
              (i.writeSessionBoilerplate = function (e, t, r) {
                var n = void 0,
                  o = t !== undefined ? t : 2;
                return (
                  (n = e || i.generateSessionId()),
                  "v=0\r\no=" +
                    (r || "thisisadapterortc") +
                    " " +
                    n +
                    " " +
                    o +
                    " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
                );
              }),
              (i.getDirection = function (e, t) {
                for (var r = i.splitLines(e), n = 0; n < r.length; n++)
                  switch (r[n]) {
                    case "a=sendrecv":
                    case "a=sendonly":
                    case "a=recvonly":
                    case "a=inactive":
                      return r[n].substr(2);
                  }
                return t ? i.getDirection(t) : "sendrecv";
              }),
              (i.getKind = function (e) {
                return i.splitLines(e)[0].split(" ")[0].substr(2);
              }),
              (i.isRejected = function (e) {
                return "0" === e.split(" ", 2)[1];
              }),
              (i.parseMLine = function (e) {
                var t = i.splitLines(e),
                  r = t[0].substr(2).split(" ");
                return {
                  kind: r[0],
                  port: parseInt(r[1], 10),
                  protocol: r[2],
                  fmt: r.slice(3).join(" "),
                };
              }),
              (i.parseOLine = function (e) {
                var t = i.matchPrefix(e, "o=")[0],
                  r = t.substr(2).split(" ");
                return {
                  username: r[0],
                  sessionId: r[1],
                  sessionVersion: parseInt(r[2], 10),
                  netType: r[3],
                  addressType: r[4],
                  address: r[5],
                };
              }),
              (i.isValidSDP = function (e) {
                if ("string" != typeof e || 0 === e.length) return !1;
                for (var t = i.splitLines(e), r = 0; r < t.length; r++)
                  if (t[r].length < 2 || "=" !== t[r].charAt(1)) return !1;
                return !0;
              }),
              "object" === (void 0 === t ? "undefined" : n(t)) &&
                (t.exports = i);
          },
          {},
        ],
      },
      {},
      [1],
    )(1);
  });
