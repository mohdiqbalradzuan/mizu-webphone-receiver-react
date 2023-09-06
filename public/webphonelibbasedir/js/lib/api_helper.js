function HLog(e, n) {
  try {
    ("undefined" == typeof webphone_api.parameters ||
      null === webphone_api.parameters ||
      ("false" != webphone_api.parameters.logtoconsole &&
        0 != webphone_api.parameters.logtoconsole &&
        "0" != webphone_api.parameters.loglevel &&
        0 != webphone_api.parameters.loglevel &&
        "1" != webphone_api.parameters.loglevel &&
        1 != webphone_api.parameters.loglevel)) &&
      ((e = "ERROR, webphone_api api_helper " + e),
      (void 0 !== n && null !== n) || (n = " "),
      webphone_api.LogEx(e, n));
  } catch (n) {
    console.error(e);
  }
}
function onInit() {
  webphone_api.flashapi.onInit();
}
function onEvent(e) {
  webphone_api.flashapi.onEvent(e);
}
function onDebug(e) {
  webphone_api.flashapi.onDebug(e);
}
function onConnected(e) {
  webphone_api.flashapi.onConnected(e);
}
function onDisconnected() {
  webphone_api.flashapi.onDisconnected();
}
function onLogin(e, n, p) {
  webphone_api.flashapi.onLogin(e, n, p);
}
function onLogout(e, n) {
  webphone_api.flashapi.onLogout(e, n);
}
function onCallState(e, n) {
  webphone_api.flashapi.onCallState(e, n);
}
function onIncomingCall(e, n, p, o, i) {
  webphone_api.flashapi.onIncomingCall(e, n, p, o, i);
}
function onHangup(e, n) {
  webphone_api.flashapi.onHangup(e, n);
}
function onDisplayUpdate(e, n, p) {
  webphone_api.flashapi.onDisplayUpdate(e, n, p);
}
function onMakeCall(e, n, p) {
  webphone_api.flashapi.onMakeCall(e, n, p);
}
function onAttach(e) {
  webphone_api.flashapi.onAttach(e);
}
function webphonetojs(e) {
  try {
    (webphone_api.global.webphone_started = !0),
      (webphone_api.webphone_pollstatus = !1),
      "undefined" != typeof webphone_api.common && null !== webphone_api.common
        ? webphone_api.common.ReceiveNotifications(e)
        : alert(
            "ERROR: webphonetojs webphone_api.common is not defined. maybe the webphone files were not deployed correctly.",
          );
  } catch (err) {
    try {
      "undefined" != typeof webphone_api.common &&
        null !== webphone_api.common &&
        webphone_api.common.PutToDebugLogException(
          2,
          "wphone webphonetojs: ",
          err,
        );
    } catch (n) {
      HLog("webphonetojs", n);
    }
  }
}
function webphone_api_getlogs() {
  try {
    return webphone_api.getlogs();
  } catch (e) {
    HLog("webphone_api_getlogs", e);
  }
  return "";
}
function webphone_api_getstringresource(e) {
  try {
    return webphone_api.getstringresource(e);
  } catch (n) {
    HLog("webphone_api_getstringresource", n);
  }
  return "";
}
function webphone_api_listcontacts(e) {
  try {
    return webphone_api.listcontacts(e);
  } catch (n) {
    HLog("webphone_api_listcontacts", n);
  }
  return "";
}
window.addEventListener
  ? window.addEventListener(
      "load",
      function () {
        webphone_api.document_loaded = !0;
      },
      !1,
    )
  : window.attachEvent
  ? window.attachEvent("onload", function () {
      webphone_api.document_loaded = !0;
    })
  : HLog("cannot add API listener");
try {
  ("undefined" == typeof webphone_api.parameters ||
    null === webphone_api.parameters ||
    ("false" != webphone_api.parameters.logtoconsole &&
      0 != webphone_api.parameters.logtoconsole &&
      "0" != webphone_api.parameters.loglevel &&
      0 != webphone_api.parameters.loglevel &&
      "1" != webphone_api.parameters.loglevel &&
      1 != webphone_api.parameters.loglevel)) &&
    console &&
    console.log &&
    console.log("EVENT, Loading webphone API...");
} catch (e) {}
(webphone_api.helper = (function () {
  function n(n, arguments) {
    try {
      return (
        !(a(n) || n.length < 1) &&
        (p(),
        a(s) && (s = []),
        a(arguments) && (arguments = []),
        arguments.unshift(n),
        arguments.unshift(i().toString()),
        s.push(arguments),
        !0)
      );
    } catch (e) {
      HLog("AddToQueue", e);
    }
    return !1;
  }
  function p() {
    try {
      if (!a(_)) return;
      _ = setInterval(function () {
        if (
          ++w > 1e4 ||
          (w > 1e4 &&
            (a(s) || s.length < 1 || !0 === webphone_api.webphone_loaded))
        )
          return (
            void 0 !== _ && null !== _ && clearInterval(_),
            (_ = null),
            (s = []),
            void (w = 0)
          );
        if (!(a(s) || s.length < 1) && !0 === webphone_api.webphone_loaded) {
          var e = s.shift();
          if (a(e) || e.length < 2) return;
          var n = 0;
          try {
            n = r(e[0]);
          } catch (h) {}
          e.shift();
          var p = e[0];
          if (a(p) || p.length < 1)
            return void webphone_api.Log(
              "ERROR, handle API function queue invalid name: " + p,
            );
          if (i() - n > 6e5)
            return void webphone_api.Log(
              "ERROR, handle API function queue: " + p + " (too late)",
            );
          e.shift();
          var t = "";
          a(e) || (t = e.toString()),
            webphone_api.Log(
              "EVENT, handle API function queue: " + p + " (" + t + ");",
            ),
            o(p, e);
        }
      }, 15);
    } catch (e) {
      HLog("RunTimer", e);
    }
  }
  function o(n, arguments) {
    try {
      var p = window.webphone_api.plhandler[n];
      if ("function" != typeof p) return;
      p.apply(window, arguments);
    } catch (e) {
      HLog("CallFunction", e);
    }
  }
  function i() {
    try {
      var n = new Date();
      return void 0 !== n && null !== n ? n.getTime() : 0;
    } catch (e) {
      HLog("GetTickCount", e);
    }
  }
  function a(e) {
    try {
      return void 0 === e || null === e;
    } catch (err) {}
    return !0;
  }
  function t(e) {
    try {
      return (
        void 0 !== e &&
        null != e &&
        ((e = e.toString()),
        !(null == (e = e.replace(/\s+/g, "")) || e.length < 1) && !isNaN(e))
      );
    } catch (err) {}
    return !1;
  }
  function r(e) {
    try {
      return a(e) || !t(e) ? null : ((e = l(e, " ", "")), parseInt(e, 10));
    } catch (err) {}
    return null;
  }
  function h(e, n) {
    try {
      return a(e) || !t(e) ? n : ((e = l(e, " ", "")), parseInt(e, 10));
    } catch (err) {}
    return n;
  }
  function l(n, p, o) {
    try {
      return a(n) || a(p) || a(o)
        ? ""
        : ((n = n.toString()), n.split(p).join(o));
    } catch (e) {
      HLog("ReplaceAll", e);
    }
    return "";
  }
  function b(n) {
    try {
      return a(n) || n.length < 1
        ? ""
        : ((n = n.toString()), n.replace(/^\s+|\s+$/g, ""));
    } catch (e) {
      HLog("Trim", e);
    }
    return n;
  }
  var s = [],
    _ = null,
    w = 0;
  return {
    AddToQueue: n,
    StrToInt: r,
    StrToIntDef: h,
    Trim: b,
    IsNumber: t,
    isNull: a,
  };
})()),
  (webphone_api.parameters.issdk = !0),
  "undefined" == typeof window.pageissdk ||
    null === window.pageissdk ||
    (0 != window.pageissdk && "false" != window.pageissdk) ||
    (webphone_api.parameters.issdk = !1),
  (webphone_api.document_loaded = !1),
  (webphone_api.loadwebrtc_timestamp = 0),
  (webphone_api.webrtc_socket = null),
  (webphone_api.websocketstopped = !1),
  (webphone_api.webrtc_peerconnection = null),
  (webphone_api.webphone_loaded = !1),
  (webphone_api.dont_remove_remote_stream = !1),
  (webphone_api.rt_loaded = !1),
  (webphone_api.rt_canplay = !1),
  (webphone_api.rbt_loaded = !1),
  (webphone_api.rbt_canplay = !1),
  (webphone_api.isscreensharecall = !1),
  (webphone_api.iswebrtcengineworking = 0),
  (webphone_api.webrtcMicVolume = 1),
  (webphone_api.startInner = function (n) {
    try {
      return "undefined" == typeof webphone_api.plhandler ||
        null === webphone_api.plhandler
        ? (void 0 === n || null === n
            ? webphone_api.addtoqueue("Start", [webphone_api.parameters, !1])
            : webphone_api.addtoqueue("Start", [n, !1]),
          !1)
        : void 0 === n || null === n
        ? webphone_api.plhandler.Start(webphone_api.parameters, !1)
        : webphone_api.plhandler.Start(n, !1);
    } catch (e) {
      HLog("startInner", e);
    }
    return !1;
  }),
  (webphone_api.getEvents = function (n) {
    try {
      if (!n || "function" != typeof n) return;
      webphone_api.evcb.push(n);
    } catch (e) {
      HLog("getEvents", e);
    }
  }),
  (webphone_api.stopengine = function (n) {
    try {
      return "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
        ? webphone_api.plhandler.StopEngine(n)
        : "";
    } catch (e) {
      HLog("stopengine", e);
    }
  }),
  (webphone_api.isserviceinstalled = function (n) {
    try {
      if (!n || "function" != typeof n)
        return void webphone_api.Log(
          "ERROR, webphone_api: isserviceinstalled callback not defined",
        );
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.IsServiceInstalled(n, !0)
        : (webphone_api.Log(
            "ERROR, webphone_api: isserviceinstalled webphone_api.plhandler is not defined",
          ),
          n(!1));
    } catch (e) {
      HLog("isserviceinstalled", e);
    }
  }),
  (webphone_api.getrtcsocket = function () {
    try {
      return "undefined" == typeof webphone_api.webrtc_socket
        ? null
        : webphone_api.webrtc_socket;
    } catch (e) {
      HLog("getrtcsocket", e);
    }
    return null;
  }),
  (webphone_api.getrtcpeerconnection = function (n, p, o) {
    try {
      if (
        null === webphone_api.webrtc_peerconnection ||
        "undefined" == typeof webphone_api.webrtc_peerconnection
      )
        return (
          webphone_api.Log("WARNING, webphone_api: no RTCPeerconnection found"),
          null
        );
      if (
        (webphone_api.helper.isNull(n) &&
          (n = webphone_api.common.GetLineForJavaAPI()),
        (!webphone_api.helper.isNull(n) && n > 0) ||
          (!webphone_api.helper.isNull(p) && p.length > 0) ||
          (!webphone_api.helper.isNull(o) && o.length > 0))
      ) {
        var i = webphone_api.common.GetCallEpIdx(99, !1, n, p, o);
        if (i >= 0) {
          var a = webphone_api.global.ep[i][17];
          if (!webphone_api.helper.isNull(a)) return a;
        }
      }
      return webphone_api.webrtc_peerconnection;
    } catch (e) {
      HLog("getrtcpeerconnection", e);
    }
    return null;
  }),
  (webphone_api.getcallsession = function (n, p, o) {
    try {
      return webphone_api.common.GetCallSession(20, !1, n, p, o);
    } catch (e) {
      HLog("getcallsession", e);
    }
    return null;
  }),
  (webphone_api.get_version = function () {
    try {
      return webphone_api.global.versionstr;
    } catch (e) {
      HLog("get_version", e);
    }
    return "";
  }),
  (webphone_api.get_version_webrtc = function () {
    try {
      return webphone_api.get_version();
    } catch (e) {
      HLog("get_version_webrtc", e);
    }
    return "";
  }),
  (webphone_api.get_version_flash = function () {
    try {
      return webphone_api.get_version();
    } catch (e) {
      HLog("get_version_flash", e);
    }
    return "";
  }),
  (webphone_api.get_version_ns_num = function (n) {
    try {
      if (!n || "function" != typeof n) return "ERROR, no callback specified";
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.GetVersionNSNum(n);
      n(0);
    } catch (e) {
      HLog("get_version_ns_num", e);
    }
    return "";
  }),
  (webphone_api.get_version_sip = function () {
    try {
      return webphone_api.get_version_java();
    } catch (e) {
      HLog("get_version_sip", e);
    }
    return "";
  }),
  (webphone_api.get_version_ns = function (n) {
    try {
      if (!n || "function" != typeof n) return "ERROR, no callback specified";
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.GetVersionNS(n);
      n(0);
    } catch (e) {
      HLog("get_version_ns", e);
    }
    return "";
  }),
  (webphone_api.get_version_java = function () {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.GetVersionJava();
    } catch (e) {
      HLog("get_version_java", e);
    }
    return 0;
  }),
  (webphone_api.caniusewebrtc = function () {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.CanIUseWebrtc();
    } catch (e) {
      HLog("caniusewebrtc", e);
    }
    return !1;
  }),
  (webphone_api.getcallto = function () {
    try {
      if (
        "undefined" != typeof webphone_api.parameters.callto &&
        null !== webphone_api.parameters.callto
      )
        return webphone_api.parameters.callto;
    } catch (e) {
      HLog("getcallto", e);
    }
    return "";
  }),
  (webphone_api.sendchatiscomposing = function (n) {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.SendChatIsComposing(n);
    } catch (e) {
      HLog("sendchatiscomposing", e);
    }
    return "";
  }),
  (webphone_api.GetIncomingDisplay = function (n) {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.GetIncomingDisplay(n);
    } catch (e) {
      HLog("GetIncomingDisplay", e);
    }
    return "";
  }),
  (webphone_api.HTTPKeepAlive = function () {
    try {
      "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler &&
        webphone_api.plhandler.HTTPKeepAlive();
    } catch (e) {
      HLog("HTTPKeepAlive", e);
    }
  }),
  (webphone_api.GetOneStunSrv = function () {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.GetOneStunSrv();
    } catch (e) {
      HLog("GetOneStunSrv", e);
    }
    return "";
  }),
  (webphone_api.HandleWebrtcCodecs = function (n) {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.HandleWebrtcCodecs(n);
    } catch (e) {
      HLog("HandleWebrtcCodecs", e);
    }
    return n;
  }),
  (webphone_api.HandleWebrtcPrefCodec = function (n) {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.HandleWebrtcPrefCodec(n);
    } catch (e) {
      HLog("HandleWebrtcPrefCodec", e);
    }
    return n;
  }),
  (webphone_api.HandleWebrtcFirefoxHold = function (n) {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.HandleWebrtcFirefoxHold(n);
    } catch (e) {
      HLog("HandleWebrtcFirefoxHold", e);
    }
    return n;
  }),
  (webphone_api.HandleWebrtcFirefoxHold_RemoveDuplicateHeader = function (n) {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.HandleWebrtcFirefoxHold_RemoveDuplicateHeader(
          n,
        );
    } catch (e) {
      HLog("HandleWebrtcFirefoxHold_RemoveDuplicateHeader", e);
    }
    return n;
  }),
  (webphone_api.InsertApplet = function (n) {
    try {
      "undefined" == typeof webphone_api.plhandler ||
      null === webphone_api.plhandler
        ? webphone_api.addtoqueue("InsertApplet", [n])
        : webphone_api.plhandler.InsertApplet(n);
    } catch (e) {
      HLog("InsertApplet", e);
    }
  }),
  (webphone_api.audiodevice = function () {
    try {
      "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler &&
        webphone_api.plhandler.DevicePopup();
    } catch (e) {
      HLog("audiodevice", e);
    }
  }),
  (webphone_api.getaudiodevicelist = function (n, p) {
    try {
      "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler &&
        ((void 0 === n || null === n || n.length < 1) && (n = "-16"),
        webphone_api.plhandler.GetDeviceList(n, p));
    } catch (e) {
      HLog("getaudiodevicelist", e);
    }
  }),
  (webphone_api.getaudiodevice = function (n, p) {
    try {
      "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler &&
        ((void 0 === n || null === n || n.length < 1) && (n = "-17"),
        webphone_api.plhandler.GetDevice(n, p));
    } catch (e) {
      HLog("getaudiodevice", e);
    }
  }),
  (webphone_api.setaudiodevice = function (n, p, o) {
    try {
      "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler &&
        ((void 0 === n || null === n || n.length < 1) && (n = "-18"),
        webphone_api.plhandler.SetDevice(n, p, o));
    } catch (e) {
      HLog("setaudiodevice", e);
    }
  }),
  (webphone_api.browserwindowisactive = function () {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.BrowserWindowIsActive();
    } catch (e) {
      HLog("browserwindowisactive", e);
    }
    return !0;
  }),
  (webphone_api.onEventCb = function (n, p, o) {
    var i = 0;
    try {
      if (
        ((i = 1),
        "undefined" == typeof webphone_api.eventcb ||
          null === webphone_api.eventcb ||
          webphone_api.eventcb.length < 1)
      )
        return;
      var a = 0;
      for (i = 2; a < webphone_api.eventcb.length; )
        (i = 3),
          webphone_api.eventcb[a] &&
          "function" == typeof webphone_api.eventcb[a]
            ? ((i = 5), webphone_api.eventcb[a](n, p, o), a++, (i = 6))
            : ((i = 4), webphone_api.eventcb.splice(a, 1));
    } catch (e) {
      HLog("onEventCb " + i.toString(), e);
    }
  }),
  (webphone_api.onLog = function (n) {
    try {
      if (!n || "function" != typeof n) return;
      webphone_api.logcb.push(n);
    } catch (e) {
      HLog("onLog", e);
    }
  }),
  (webphone_api.RecEvt = function (n) {
    var p = 0;
    try {
      if (
        ((p = 1),
        "undefined" == typeof webphone_api.evcb ||
          null === webphone_api.evcb ||
          webphone_api.evcb.length < 1)
      )
        return;
      p = 2;
      for (var o = 0; o < webphone_api.evcb.length; )
        (p = 3),
          webphone_api.evcb[o] && "function" == typeof webphone_api.evcb[o]
            ? ((p = 5), webphone_api.evcb[o](n), o++, (p = 6))
            : ((p = 4), webphone_api.evcb.splice(o, 1));
    } catch (e) {
      HLog("RecEvt " + p.toString(), e);
    }
  }),
  (webphone_api.onAppStateChangeCb = function (n) {
    try {
      if (
        "undefined" == typeof webphone_api.appstatechangecb ||
        null === webphone_api.appstatechangecb ||
        webphone_api.appstatechangecb.length < 1
      )
        return;
      for (var p = 0; p < webphone_api.appstatechangecb.length; )
        webphone_api.appstatechangecb[p] &&
        "function" == typeof webphone_api.appstatechangecb[p]
          ? (webphone_api.appstatechangecb[p](n), p++)
          : webphone_api.appstatechangecb.splice(p, 1);
    } catch (e) {
      HLog("onAppStateChangeCb", e);
    }
  }),
  (webphone_api.onStart = function (n) {
    try {
      if (!n || "function" != typeof n) return;
      webphone_api.startcb.push(n);
    } catch (e) {
      HLog("onStart", e);
    }
  }),
  (webphone_api.onStop = function (n) {
    try {
      if (!n || "function" != typeof n) return;
      webphone_api.stopcb.push(n);
    } catch (e) {
      HLog("onStop", e);
    }
  }),
  (webphone_api.onLoadedCb = function () {
    try {
      if (
        "undefined" == typeof webphone_api.loadedcb ||
        null === webphone_api.loadedcb ||
        webphone_api.loadedcb.length < 1
      )
        return;
      for (var n = 0; n < webphone_api.loadedcb.length; )
        webphone_api.loadedcb[n] &&
        "function" == typeof webphone_api.loadedcb[n]
          ? (webphone_api.loadedcb[n](), n++)
          : webphone_api.loadedcb.splice(n, 1);
    } catch (e) {
      HLog("onLoadedCb", e);
    }
  }),
  (webphone_api.onStartCb = function () {
    try {
      if (
        "undefined" == typeof webphone_api.startcb ||
        null === webphone_api.startcb ||
        webphone_api.startcb.length < 1
      )
        return;
      for (var n = 0; n < webphone_api.startcb.length; )
        webphone_api.startcb[n] && "function" == typeof webphone_api.startcb[n]
          ? (webphone_api.startcb[n](), n++)
          : webphone_api.startcb.splice(n, 1);
    } catch (e) {
      HLog("onStartCb", e);
    }
  }),
  (webphone_api.onStopCb = function () {
    try {
      if (
        "undefined" == typeof webphone_api.stopcb ||
        null === webphone_api.stopcb ||
        webphone_api.stopcb.length < 1
      )
        return;
      for (var n = 0; n < webphone_api.stopcb.length; )
        webphone_api.stopcb[n] && "function" == typeof webphone_api.stopcb[n]
          ? (webphone_api.stopcb[n](), n++)
          : webphone_api.stopcb.splice(n, 1);
    } catch (e) {
      HLog("onStopCb", e);
    }
  }),
  (webphone_api.onRegStateChangeCb = function (n, p) {
    try {
      if (
        "undefined" == typeof webphone_api.regstatechangecb ||
        null === webphone_api.regstatechangecb ||
        webphone_api.regstatechangecb.length < 1
      )
        return;
      for (var o = 0; o < webphone_api.regstatechangecb.length; )
        webphone_api.regstatechangecb[o] &&
        "function" == typeof webphone_api.regstatechangecb[o]
          ? (webphone_api.regstatechangecb[o](n, p), o++)
          : webphone_api.regstatechangecb.splice(o, 1);
    } catch (e) {
      HLog("onRegStateChangeCb", e);
    }
  }),
  (webphone_api.onRegistered = function (n) {
    try {
      if (!n || "function" != typeof n) return;
      webphone_api.registeredcb.push(n);
    } catch (e) {
      HLog("onRegistered", e);
    }
  }),
  (webphone_api.onUnRegistered = function (n) {
    try {
      if (!n || "function" != typeof n) return;
      webphone_api.unregisteredcb.push(n);
    } catch (e) {
      HLog("onUnRegistered", e);
    }
  }),
  (webphone_api.onRegisterFailed = function (n) {
    try {
      if (!n || "function" != typeof n) return;
      webphone_api.registerfailedcb.push(n);
    } catch (e) {
      HLog("onRegisterFailed", e);
    }
  }),
  (webphone_api.onRegisteredCb = function () {
    try {
      if (
        "undefined" == typeof webphone_api.registeredcb ||
        null === webphone_api.registeredcb ||
        webphone_api.registeredcb.length < 1
      )
        return;
      for (var n = 0; n < webphone_api.registeredcb.length; )
        webphone_api.registeredcb[n] &&
        "function" == typeof webphone_api.registeredcb[n]
          ? (webphone_api.registeredcb[n](), n++)
          : webphone_api.registeredcb.splice(n, 1);
    } catch (e) {
      HLog("onRegisteredCb", e);
    }
  }),
  (webphone_api.onUnRegisteredCb = function (n) {
    try {
      if (
        "undefined" == typeof webphone_api.unregisteredcb ||
        null === webphone_api.unregisteredcb ||
        webphone_api.unregisteredcb.length < 1
      )
        return;
      for (var p = 0; p < webphone_api.unregisteredcb.length; )
        webphone_api.unregisteredcb[p] &&
        "function" == typeof webphone_api.unregisteredcb[p]
          ? (webphone_api.unregisteredcb[p](), p++)
          : webphone_api.unregisteredcb.splice(p, 1);
    } catch (e) {
      HLog("onUnRegisteredCb", e);
    }
  }),
  (webphone_api.onRegisterFailedCb = function (n) {
    try {
      if (
        "undefined" == typeof webphone_api.registerfailedcb ||
        null === webphone_api.registerfailedcb ||
        webphone_api.registerfailedcb.length < 1
      )
        return;
      for (var p = 0; p < webphone_api.registerfailedcb.length; )
        webphone_api.registerfailedcb[p] &&
        "function" == typeof webphone_api.registerfailedcb[p]
          ? (webphone_api.registerfailedcb[p](n), p++)
          : webphone_api.registerfailedcb.splice(p, 1);
    } catch (e) {
      HLog("onRegisterFailedCb", e);
    }
  }),
  (webphone_api.onCallStateChangeCb = function (n, p, o, i, a, t) {
    var r = 0;
    try {
      if (
        ((r = 1),
        webphone_api.helper.isNull(n) && (n = "unknown"),
        webphone_api.helper.isNull(p) && (p = 0),
        webphone_api.helper.isNull(o) && (o = ""),
        webphone_api.helper.isNull(i) && (i = ""),
        webphone_api.helper.isNull(a) && (a = -1),
        webphone_api.helper.isNull(t) && (t = ""),
        (r = 2),
        "undefined" == typeof webphone_api.callstatechangecb ||
          null === webphone_api.callstatechangecb ||
          webphone_api.callstatechangecb.length < 1)
      ) {
        r = 3;
        try {
          0 === webphone_api.common.nocallbackwarningdone &&
            ((webphone_api.common.nocallbackwarningdone = 1),
            webphone_api.Log(
              "EVENT, no onCallStateChange callback was set : " +
                n +
                "," +
                a +
                "," +
                o +
                "," +
                i +
                "," +
                p +
                "," +
                t,
            ));
        } catch (e) {}
        return;
      }
      r = 4;
      for (var h = 0, l = !1; h < webphone_api.callstatechangecb.length; )
        if (
          ((r = 5),
          webphone_api.callstatechangecb[h] &&
            "function" == typeof webphone_api.callstatechangecb[h])
        ) {
          if (((r = 11), !l))
            try {
              l = !0;
            } catch (e) {}
          webphone_api.callstatechangecb[h](n, p, o, i, a, t), (r = 12), h++;
        } else {
          r = 6;
          var b = "";
          "undefined" != typeof webphone_api.callstatechangecb[h] &&
            null !== webphone_api.callstatechangecb[h] &&
            ((r = 7), (b = webphone_api.callstatechangecb[h].toString()));
          try {
            (r = 8),
              webphone_api.Log(
                "webphone: ERROR, onCallStateChange invalid function object: " +
                  b +
                  "; " +
                  n +
                  "," +
                  p +
                  "," +
                  o +
                  "," +
                  i +
                  "," +
                  a +
                  "," +
                  t,
              );
          } catch (e) {}
          (r = 9), webphone_api.callstatechangecb.splice(h, 1), (r = 10);
        }
      if (!l)
        try {
          (r = 13),
            0 === webphone_api.common.nocallbackwarningdone &&
              ((webphone_api.common.nocallbackwarningdone = 1),
              webphone_api.Log(
                "EVENT, no onCallStateChange callback was called : " +
                  webphone_api.callstatechangecb.length.toString() +
                  "," +
                  n +
                  "," +
                  a +
                  "," +
                  o +
                  "," +
                  i +
                  "," +
                  p +
                  "," +
                  t,
              ));
        } catch (e) {}
    } catch (e) {
      HLog("onCallStateChangeCb " + r.toString(), e);
    }
  }),
  (webphone_api.onChatCb = function (n, p, o, i) {
    try {
      if (
        "undefined" == typeof webphone_api.chatcb ||
        null === webphone_api.chatcb ||
        webphone_api.chatcb.length < 1
      )
        return;
      for (var a = 0; a < webphone_api.chatcb.length; )
        webphone_api.chatcb[a] && "function" == typeof webphone_api.chatcb[a]
          ? (webphone_api.chatcb[a](n, p, o, i), a++)
          : webphone_api.chatcb.splice(a, 1);
    } catch (e) {
      HLog("onChatCb", e);
    }
  }),
  (webphone_api.onSmsCb = function (n, p) {
    try {
      if (
        "undefined" == typeof webphone_api.smscb ||
        null === webphone_api.smscb ||
        webphone_api.smscb.length < 1
      )
        return;
      for (var o = 0; o < webphone_api.smscb.length; )
        webphone_api.smscb[o] && "function" == typeof webphone_api.smscb[o]
          ? (webphone_api.smscb[o](n, p), o++)
          : webphone_api.smscb.splice(o, 1);
    } catch (e) {
      HLog("onSmsCb", e);
    }
  }),
  (webphone_api.onPresenceCb = function (n, p, o, i) {
    try {
      if (
        "undefined" == typeof webphone_api.presencecb ||
        null === webphone_api.presencecb ||
        webphone_api.presencecb.length < 1
      )
        return;
      for (var a = 0; a < webphone_api.presencecb.length; )
        webphone_api.presencecb[a] &&
        "function" == typeof webphone_api.presencecb[a]
          ? (webphone_api.presencecb[a](n, p, o, i), a++)
          : webphone_api.presencecb.splice(a, 1);
    } catch (e) {
      HLog("onPresenceCb", e);
    }
  }),
  (webphone_api.onBLFCb = function (n, p, o, i) {
    try {
      if (
        "undefined" == typeof webphone_api.blfcb ||
        null === webphone_api.blfcb ||
        webphone_api.blfcb.length < 1
      )
        return;
      for (var a = 0; a < webphone_api.blfcb.length; )
        webphone_api.blfcb[a] && "function" == typeof webphone_api.blfcb[a]
          ? (webphone_api.blfcb[a](n, p, o, i), a++)
          : webphone_api.blfcb.splice(a, 1);
    } catch (e) {
      HLog("onBLFCb", e);
    }
  }),
  (webphone_api.onCdrCb = function (n, p, o, i, a, t, r, h, l) {
    try {
      if (
        "undefined" == typeof webphone_api.cdrcb ||
        null === webphone_api.cdrcb ||
        webphone_api.cdrcb.length < 1
      )
        return;
      for (var b = 0; b < webphone_api.cdrcb.length; )
        webphone_api.cdrcb[b] && "function" == typeof webphone_api.cdrcb[b]
          ? (webphone_api.cdrcb[b](n, p, o, i, a, t, r, h, l), b++)
          : webphone_api.cdrcb.splice(b, 1);
    } catch (e) {
      HLog("onCdrCb", e);
    }
  }),
  (webphone_api.onDTMFCb = function (n, p) {
    try {
      if (
        "undefined" == typeof webphone_api.cddtmf ||
        null === webphone_api.cddtmf ||
        webphone_api.cddtmf.length < 1
      )
        return;
      for (var o = 0; o < webphone_api.cddtmf.length; )
        webphone_api.cddtmf[o] && "function" == typeof webphone_api.cddtmf[o]
          ? (webphone_api.cddtmf[o](n, p), o++)
          : webphone_api.cddtmf.splice(o, 1);
    } catch (e) {
      HLog("onDTMFCb", e);
    }
  }),
  (webphone_api.onLogCb = function (n) {
    try {
      if (
        "undefined" == typeof webphone_api.logcb ||
        null === webphone_api.logcb ||
        webphone_api.logcb.length < 1
      )
        return;
      for (var p = 0; p < webphone_api.logcb.length; )
        webphone_api.logcb[p] && "function" == typeof webphone_api.logcb[p]
          ? (webphone_api.logcb[p](n), p++)
          : webphone_api.logcb.splice(p, 1);
    } catch (e) {
      HLog("onLogCb", e);
    }
  }),
  (webphone_api.onDisplayAddCb = function (n) {
    try {
      if (!n || "function" != typeof n) return;
      webphone_api.displaycb.push(n);
    } catch (e) {
      HLog("onDisplayAddCb", e);
    }
  }),
  (webphone_api.onDisplay = function (n) {
    try {
      if (!n || "function" != typeof n) return;
      webphone_api.onDisplayAddCb(n);
    } catch (e) {
      HLog("onDisplay", e);
    }
  }),
  (webphone_api.onDisplayCb = function (n, p) {
    try {
      if (
        "undefined" == typeof webphone_api.displaycb ||
        null === webphone_api.displaycb ||
        webphone_api.displaycb.length < 1
      )
        return;
      for (var o = 0; o < webphone_api.displaycb.length; )
        webphone_api.displaycb[o] &&
        "function" == typeof webphone_api.displaycb[o]
          ? (webphone_api.displaycb[o](n, p), o++)
          : webphone_api.displaycb.splice(o, 1);
    } catch (e) {
      HLog("onDisplayCb", e);
    }
  }),
  (webphone_api.dnotcb = null),
  (webphone_api.GetDisplayableNotifications = function (n) {
    try {
      if (!n || "function" != typeof n) return;
      webphone_api.dnotcb = n;
    } catch (e) {
      HLog("GetDisplayableNotifications", e);
    }
  }),
  (webphone_api.RecDisplayableNotifications = function (n) {
    try {
      if (!webphone_api.dnotcb || "function" != typeof webphone_api.dnotcb)
        return;
      webphone_api.dnotcb(n);
    } catch (e) {
      HLog("RecDisplayableNotifications", e);
    }
  }),
  (webphone_api.enterkeypress = function () {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.EnterKeyPress()
        : webphone_api.Log(
            "ERROR, webphone_api: enterkeypress webphone_api.plhandler is not defined",
          );
    } catch (e) {
      HLog("enterkeypress", e);
    }
  }),
  (webphone_api.filetransfercallback = function (n) {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.FileTransferCallback(n)
        : webphone_api.Log(
            "ERROR, webphone_api: filetransfercallback webphone_api.plhandler is not defined",
          );
    } catch (e) {
      HLog("filetransfercallback", e);
    }
  }),
  (webphone_api.gettelsearchname = function (n, p) {
    try {
      return "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
        ? webphone_api.plhandler.GetTelsearchName(n, p)
        : (webphone_api.Log(
            "ERROR, webphone_api: gettelsearchname webphone_api.plhandler is not defined",
          ),
          "");
    } catch (e) {
      HLog("gettelsearchname", e);
    }
  }),
  (webphone_api.bwanswer = function (n) {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.bwanswer(n)
        : webphone_api.Log(
            "ERROR, webphone_api: bwanswer webphone_api.plhandler is not defined",
          );
    } catch (e) {
      HLog("bwanswer", e);
    }
  }),
  (webphone_api.onappexit = function () {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.onappexit()
        : webphone_api.Log(
            "ERROR, webphone_api: onappexit webphone_api.plhandler is not defined",
          );
    } catch (e) {
      HLog("onappexit", e);
    }
  }),
  (webphone_api.needratingrequest = function (n) {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.needratingrequest(n)
        : webphone_api.Log(
            "ERROR, webphone_api: needratingrequest webphone_api.plhandler is not defined",
          );
    } catch (e) {
      HLog("needratingrequest", e);
    }
  }),
  (webphone_api.ismobilebrowser = function () {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.IsMobileBrowser();
      webphone_api.Log(
        "ERROR, webphone_api: ismobilebrowser webphone_api.plhandler is not defined",
      );
    } catch (e) {
      HLog("ismobilebrowser", e);
    }
    return !1;
  }),
  (webphone_api.helpwindow = function () {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.HelpWindow()
        : webphone_api.Log(
            "ERROR, webphone_api: helpwindow webphone_api.plhandler is not defined",
          );
    } catch (e) {
      HLog("helpwindow", e);
    }
  }),
  (webphone_api.settingspage = function () {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.SettingsPage()
        : webphone_api.Log(
            "ERROR, webphone_api: settingspage webphone_api.plhandler is not defined",
          );
    } catch (e) {
      HLog("settingspage", e);
    }
  }),
  (webphone_api.dialpage = function () {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.DialPage()
        : webphone_api.Log(
            "ERROR, webphone_api: dialpage webphone_api.plhandler is not defined",
          );
    } catch (e) {
      HLog("dialpage", e);
    }
  }),
  (webphone_api.messageinboxpage = function () {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.MessageInboxPage()
        : webphone_api.Log(
            "ERROR, webphone_api: messageinboxpage webphone_api.plhandler is not defined",
          );
    } catch (e) {
      HLog("messageinboxpage", e);
    }
  }),
  (webphone_api.messagepage = function () {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.MessagePage()
        : webphone_api.Log(
            "ERROR, webphone_api: messagepage webphone_api.plhandler is not defined",
          );
    } catch (e) {
      HLog("messagepage", e);
    }
  }),
  (webphone_api.addcontactpage = function () {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.AddContactPage()
        : webphone_api.Log(
            "ERROR, webphone_api: addcontactpage webphone_api.plhandler is not defined",
          );
    } catch (e) {
      HLog("addcontactpage", e);
    }
  }),
  (webphone_api.unregisterEngine = function (n) {
    try {
      "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler &&
        webphone_api.plhandler.UnregisterEngine(n);
    } catch (e) {
      HLog("unregisterEngine", e);
    }
  }),
  (webphone_api.GetBrowser = function () {
    try {
      var n = null,
        p = navigator.userAgent.toLowerCase();
      -1 !== p.indexOf("edge")
        ? ("Edge", (n = "Edge"))
        : -1 !== p.indexOf("msie") && -1 === p.indexOf("opera")
        ? ("MSIE", (n = "MSIE"))
        : -1 !== p.indexOf("trident") || -1 !== p.indexOf("Trident")
        ? ("MSIE", (n = "MSIE"))
        : -1 !== p.indexOf("iphone")
        ? ((n =
            -1 !== p.indexOf("fxios") || -1 !== p.indexOf("firefox")
              ? "Firefox"
              : -1 !== p.indexOf("crios") || -1 !== p.indexOf("chrome")
              ? "Chrome"
              : "iPhone"),
          "Netscape Family")
        : -1 !== p.indexOf("firefox") && -1 === p.indexOf("opera")
        ? ("Netscape Family", (n = "Firefox"))
        : -1 !== p.indexOf("chrome")
        ? ("Netscape Family", (n = "Chrome"))
        : -1 !== p.indexOf("safari")
        ? ("Netscape Family", (n = "Safari"))
        : -1 !== p.indexOf("mozilla") && -1 === p.indexOf("opera")
        ? ("Netscape Family", (n = "Other"))
        : -1 !== p.indexOf("opera")
        ? ("Netscape Family", (n = "Opera"))
        : ("?", (n = "unknown"));
    } catch (e) {
      HLog("GetBrowser", e);
    }
    return n;
  }),
  (webphone_api.GetBrowserVersion = function () {
    try {
      var e = -1,
        n = webphone_api.GetBrowser(),
        p = navigator.userAgent.toLowerCase();
      if ("Chrome" === n) {
        var o = p.indexOf("chrome");
        o > 0 && (p = p.substring(o + 6)),
          null != p && (p = p.replace("/", "")),
          (o = p.indexOf(".")),
          o > 0 && (p = p.substring(0, o)),
          null != p &&
            ((p = webphone_api.helper.Trim(p)),
            webphone_api.helper.IsNumber(p) &&
              (e = webphone_api.helper.StrToInt(p)));
      } else if ("Firefox" === n) {
        var o = p.indexOf("firefox");
        o > 0 && (p = p.substring(o + 7)),
          webphone_api.helper.isNull(p) || (p = p.replace("/", "")),
          (o = p.indexOf(".")),
          o > 0 && (p = p.substring(0, o)),
          webphone_api.helper.isNull(p) ||
            ((p = webphone_api.helper.Trim(p)),
            webphone_api.helper.IsNumber(p) &&
              (e = webphone_api.helper.StrToInt(p)));
      } else if ("Safari" === n || "iPhone" === n) {
        var o = p.indexOf("version");
        o > 0
          ? (p = p.substring(o + 7))
          : p.indexOf("_") > 0 &&
            ((p = p.substring(0, p.indexOf("_"))),
            (p = webphone_api.helper.Trim(p)),
            (p = p.substring(p.lastIndexOf(" ")))),
          webphone_api.helper.isNull(p) || (p = p.replace("/", "")),
          (o = p.indexOf(".")),
          o > 0 && (p = p.substring(0, o)),
          webphone_api.helper.isNull(p) ||
            ((p = webphone_api.helper.Trim(p)),
            webphone_api.helper.IsNumber(p) &&
              (e = webphone_api.helper.StrToInt(p)));
      } else if ("MSIE" === n) {
        var i = window.navigator.userAgent,
          a = i.indexOf("MSIE ");
        a > 0 && (e = parseInt(i.substring(a + 5, i.indexOf(".", a)), 10));
        var t = i.indexOf("Trident/");
        if (t > 0) {
          var r = i.indexOf("rv:");
          e = parseInt(i.substring(r + 3, i.indexOf(".", r)), 10);
        }
        var h = i.indexOf("Edge/");
        h > 0 && (e = parseInt(i.substring(h + 5, i.indexOf(".", h)), 10));
      } else if ("Edge" === n) {
        var o = p.indexOf("edge");
        o > 0 && (p = p.substring(o + 4)),
          webphone_api.helper.isNull(p) || (p = p.replace("/", "")),
          (o = p.indexOf(".")),
          o > 0 && (p = p.substring(0, o)),
          webphone_api.helper.isNull(p) ||
            ((p = webphone_api.helper.Trim(p)),
            webphone_api.helper.IsNumber(p) &&
              (e = webphone_api.helper.StrToInt(p)));
      }
      (!webphone_api.helper.isNull(e) && webphone_api.helper.IsNumber(e)) ||
        (e = -1);
    } catch (e) {
      HLog("GetBrowserversion", err);
    }
    return e;
  }),
  (webphone_api.IsHttps = function () {
    try {
      var e = !1,
        n = window.location.protocol;
      return (
        ((void 0 !== n && null !== n) ||
          !(void 0 === (n = location.href) || null === n || n.length < 2)) &&
        ((n = n.toLowerCase()),
        ((n.indexOf("https") >= 0 && n.indexOf("https") < 10) ||
          (n.indexOf("extension") >= 0 && n.indexOf("extension") < 12)) &&
          (e = !0),
        e)
      );
    } catch (err) {
      HLog("wphone: IsHttps", err);
    }
    return !1;
  }),
  (webphone_api.SupportHtml5 = function () {
    try {
      return !!document.createElement("canvas").getContext;
    } catch (err) {
      HLog("wphone: SupportHtml5", err);
    }
    return !1;
  }),
  (webphone_api.SupportHtml5 = function () {
    try {
      return !!document.createElement("canvas").getContext;
    } catch (err) {
      HLog("wphone: SupportHtml5", err);
    }
    return !1;
  }),
  (webphone_api.SetCookie = function (e, n, p) {
    try {
      if (void 0 === e || null === e || void 0 === n || null === n) return !1;
      var o = "";
      if (void 0 !== p && null !== p) {
        var i = new Date();
        i.setTime(i.getTime() + 24 * p * 60 * 60 * 1e3),
          (o = "; expires=" + i.toGMTString());
      } else o = "";
      0 == e.indexOf("wp_") ||
        0 == e.indexOf("MZwebPhone_") ||
        0 == e.indexOf("wpdemosett_") ||
        0 == e.indexOf("webphone_") ||
        0 == e.indexOf("notincoockie") ||
        (e.indexOf("_backup") >= 0 && e.indexOf("_backup") == e.length - 7) ||
        (e.indexOf("webphone") >= 0 && e.indexOf("webphone") == e.length - 8) ||
        (webphone_api.common &&
          0 == e.indexOf(webphone_api.common.GetBrandName())) ||
        (e = "wp_" + e),
        webphone_api.common &&
          (n = webphone_api.common.StrEc(
            n,
            webphone_api.common.GetPassphrase(),
            !1,
          )),
        (document.cookie = e + "=" + n + o + "; path=/;SameSite=Lax"),
        webphone_api.Log2("EVENT, apicookie saved to cookie: " + e + "=" + n);
    } catch (err) {
      HLog("ERROR, file: SetCookie: ", err);
    }
  }),
  (webphone_api.GetCookie = function (e) {
    try {
      if (void 0 === e || null === e) return "";
      if (
        0 == e.indexOf("wp_") ||
        0 == e.indexOf("MZwebPhone_") ||
        0 == e.indexOf("wpdemosett_") ||
        0 == e.indexOf("webphone_") ||
        0 == e.indexOf("notincoockie") ||
        (e.indexOf("_backup") >= 0 && e.indexOf("_backup") == e.length - 7) ||
        (e.indexOf("webphone") >= 0 && e.indexOf("webphone") == e.length - 8) ||
        (webphone_api.common &&
          0 == e.indexOf(webphone_api.common.GetBrandName()))
      );
      else
        for (
          var n = "wp_" + e + "=", p = document.cookie.split(";"), o = 0;
          o < p.length;
          o++
        ) {
          for (var i = p[o]; " " === i.charAt(0); )
            i = i.substring(1, i.length);
          if (0 === i.indexOf(n)) {
            var a = i.substring(n.length, i.length);
            return (
              webphone_api.Log2("EVENT, apicookie read: " + e + "=" + a), a
            );
          }
        }
      for (
        var n = e + "=", p = document.cookie.split(";"), o = 0;
        o < p.length;
        o++
      ) {
        for (var i = p[o]; " " === i.charAt(0); ) i = i.substring(1, i.length);
        if (0 === i.indexOf(n)) {
          var a = i.substring(n.length, i.length);
          return webphone_api.Log2("EVENT, apicookie read: " + e + "=" + a), a;
        }
      }
    } catch (err) {
      HLog("ERROR, file: GetCookie ", err);
    }
    return "";
  }),
  (webphone_api.getlogsex = function () {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.getlogsex()
        : webphone_api.Log(
            "ERROR, webphone_api: getlogsex webphone_api.plhandler is not defined",
          );
    } catch (e) {
      HLog("getlogsex", e);
    }
  }),
  (webphone_api.putlogs = function (n) {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.putlogs(n);
      webphone_api.Log(
        "ERROR, webphone_api: putlogs webphone_api.plhandler is not defined",
      );
    } catch (e) {
      HLog("putlogs", e);
    }
  }),
  (webphone_api.importcontacts = function () {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.ImportContacts()
        : webphone_api.Log(
            "ERROR, webphone_api: importcontacts webphone_api.plhandler is not defined",
          );
    } catch (e) {
      HLog("importcontacts", e);
    }
  }),
  (webphone_api.getmaxchromeversionforjava = function () {
    try {
      var n = webphone_api.parameters.javamaxchromeversion;
      (void 0 === n ||
        null === n ||
        n.length < 1 ||
        !1 === webphone_api.helper.IsNumber(n)) &&
        (n = "42");
      return webphone_api.helper.StrToInt(n);
    } catch (e) {
      HLog("getmaxchromeversionforjava", e);
    }
    return 42;
  }),
  (webphone_api.getstringresource = function (e) {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.getstringresource(e);
      webphone_api.Log(
        "ERROR, webphone_api: getstringresource webphone_api.plhandler is not defined",
      );
    } catch (err) {
      HLog("getstringresource ", err);
    }
    return "";
  }),
  (webphone_api.getlastinvite = function (e) {
    try {
      if (!e || "function" != typeof e) return;
      return "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
        ? webphone_api.plhandler.GetLastInvite(e)
        : "ERROR, getlastinvite webphone_api.plhandler is not defined";
    } catch (err) {
      HLog("getlastinvite ", err);
    }
    return "";
  }),
  (webphone_api.playsound = function (e, n, p, o, i, a, t, r, h) {
    try {
      if (
        "undefined" != typeof webphone_api.plhandler &&
        null !== webphone_api.plhandler
      )
        return webphone_api.plhandler.PlaySound(e, n, p, a);
      webphone_api.Log(
        "ERROR, webphone_api: playsound webphone_api.plhandler is not defined",
      );
    } catch (err) {
      HLog("getlastinvite ", err);
    }
    return !1;
  }),
  (webphone_api.ShowToast = function (e, n, p) {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.ShowToast(e, n, p)
        : webphone_api.Log(
            "ERROR, webphone_api: ShowToast webphone_api.plhandler is not defined",
          );
    } catch (err) {
      HLog("ShowToast ", err);
    }
  }),
  (webphone_api.AlertDialog = function (e, n, p) {
    try {
      "undefined" != typeof webphone_api.plhandler &&
      null !== webphone_api.plhandler
        ? webphone_api.plhandler.AlertDialog(e, n, p)
        : webphone_api.Log(
            "ERROR, webphone_api: AlertDialog webphone_api.plhandler is not defined",
          );
    } catch (err) {
      HLog("AlertDialog ", err);
    }
  }),
  (webphone_api.flagrestartwebrtc = !0),
  (webphone_api.flashdeepdetect = !1),
  (webphone_api.parent_page_i = null),
  (webphone_api.origindomain_i = ""),
  (webphone_api.HandleEventMessage = function (event) {
    try {
      var res = event.data;
      if (webphone_api.helper.isNull(res))
        return void webphone_api.Log(
          "ERROR, webphone_api window.onmessage message is NULL",
        );
      if (((res = res.toString()), res.length < 1)) return;
      if (
        ((res.indexOf("webphone_api.") >= 0 ||
          "initialize_connection" === res) &&
          ((webphone_api.parent_page_i = event.source),
          (webphone_api.origindomain_i = event.origin)),
        "webphone_api.getEvents" === res)
      )
        return void webphone_api.getEvents(function (e) {
          webphone_api.WebphoneSendMessageToParent(
            'getEvents_IFRAME("' + e + '")',
          );
        });
      if ("webphone_api.onLoaded" === res)
        return void webphone_api.onLoaded(function () {
          webphone_api.WebphoneSendMessageToParent("onLoaded_IFRAME()");
        });
      if ("webphone_api.onStart" === res)
        return void webphone_api.onStart(function () {
          webphone_api.WebphoneSendMessageToParent("onStart_IFRAME()");
        });
      if ("webphone_api.onRegistered" === res)
        return void webphone_api.onRegistered(function () {
          webphone_api.WebphoneSendMessageToParent("onRegistered_IFRAME()");
        });
      if ("webphone_api.onUnRegistered" === res)
        return void webphone_api.onUnRegistered(function () {
          webphone_api.WebphoneSendMessageToParent("onUnRegistered_IFRAME()");
        });
      if ("webphone_api.onCallStateChange" === res)
        return void webphone_api.onCallStateChange(function (e, n, p, o, i, a) {
          webphone_api.WebphoneSendMessageToParent(
            'onCallStateChange_IFRAME("' +
              e +
              '", "' +
              n +
              '", "' +
              p +
              '", "' +
              o +
              '", "' +
              i +
              '", "' +
              a +
              '")',
          );
        });
      if ("webphone_api.onChat" === res)
        return void webphone_api.onChat(function (e, n, p) {
          webphone_api.WebphoneSendMessageToParent(
            'onChat_IFRAME("' + e + '", "' + n + '", "' + p + '")',
          );
        });
      if ("webphone_api.onCdr" === res)
        return void webphone_api.onCdr(function (e, n, p, o, i, a, t, r, h) {
          webphone_api.WebphoneSendMessageToParent(
            'onCdr_IFRAME("' +
              e +
              '", "' +
              n +
              '", "' +
              p +
              '", "' +
              o +
              '", "' +
              i +
              '", "' +
              a +
              '", "' +
              t +
              '", "' +
              r +
              '", "' +
              h +
              '")',
          );
        });
      if (res.indexOf("webphone_api.getaudiodevicelist") >= 0) {
        var dev = "",
          pos = res.indexOf("#");
        return (
          pos > 0 && (dev = res.substring(pos + 1)),
          webphone_api.helper.isNull(dev) && (dev = ""),
          (dev = webphone_api.helper.Trim(dev)),
          dev.length < 1 && (dev = "-22"),
          void webphone_api.getaudiodevicelist(dev, function (e) {
            webphone_api.WebphoneSendMessageToParent(
              'getaudiodevicelist_IFRAME("' + e + '" )',
            );
          })
        );
      }
      if (res.indexOf("webphone_api.getdevicelist") >= 0) {
        var dev = "",
          pos = res.indexOf("#");
        return (
          pos > 0 && (dev = res.substring(pos + 1)),
          webphone_api.helper.isNull(dev) && (dev = ""),
          (dev = webphone_api.helper.Trim(dev)),
          dev.length < 1 && (dev = "-11"),
          void webphone_api.getdevicelist(dev, function (e) {
            webphone_api.WebphoneSendMessageToParent(
              'getdevicelist_IFRAME("' + e + '")',
            );
          })
        );
      }
      if (res.indexOf("webphone_api.getaudiodevice") >= 0) {
        var dev = "",
          pos = res.indexOf("#");
        return (
          pos > 0 && (dev = res.substring(pos + 1)),
          webphone_api.helper.isNull(dev) && (dev = ""),
          (dev = webphone_api.helper.Trim(dev)),
          dev.length < 1 && (dev = "-18"),
          void webphone_api.getaudiodevice(dev, function (e) {
            webphone_api.WebphoneSendMessageToParent(
              'getaudiodevice_IFRAME("' + e + '")',
            );
          })
        );
      }
      if (res.indexOf("webphone_api.getdevice") >= 0) {
        var dev = "",
          pos = res.indexOf("#");
        return (
          pos > 0 && (dev = res.substring(pos + 1)),
          webphone_api.helper.isNull(dev) && (dev = ""),
          (dev = webphone_api.helper.Trim(dev)),
          dev.length < 1 && (dev = "-19"),
          void webphone_api.getdevice(dev, function (e) {
            webphone_api.WebphoneSendMessageToParent(
              'getdevice_IFRAME("' + e + '")',
            );
          })
        );
      }
      if (res.indexOf("webphone_api.getvolume") >= 0) {
        var dev = "",
          pos = res.indexOf("#");
        return (
          pos > 0 && (dev = res.substring(pos + 1)),
          webphone_api.helper.isNull(dev) && (dev = ""),
          (dev = webphone_api.helper.Trim(dev)),
          dev.length < 1 && (dev = "-21"),
          void webphone_api.getvolume(dev, function (e) {
            webphone_api.WebphoneSendMessageToParent(
              'getvolume_IFRAME("' + e + '")',
            );
          })
        );
      }
      if (res.indexOf("webphone_api.getsipheader") >= 0) {
        var header = "",
          pos = res.indexOf("#");
        return (
          pos > 0 && (header = res.substring(pos + 1)),
          webphone_api.helper.isNull(header) && (header = ""),
          (header = webphone_api.helper.Trim(header)),
          void webphone_api.getsipheader(header, function (e) {
            webphone_api.WebphoneSendMessageToParent(
              'getsipheader_IFRAME("' + e + '")',
            );
          })
        );
      }
      if (res.indexOf("webphone_api.getsipmessage") >= 0) {
        var params = "",
          pos = res.indexOf("#");
        return (
          pos > 0 && (params = res.substring(pos + 1)),
          void webphone_api.getsipmessage(params[0], params[1], function (e) {
            webphone_api.WebphoneSendMessageToParent(
              'getsipmessage_IFRAME("' + e + '")',
            );
          })
        );
      }
      if ("webphone_api.ondisplay" === res)
        return void webphone_api.ondisplay(function (e, n) {
          webphone_api.WebphoneSendMessageToParent(
            'ondisplay_IFRAME("' + e + '", "' + n + '")',
          );
        });
      if ("webphone_api.getworkdir" === res)
        return void webphone_api.getworkdir(function (e) {
          webphone_api.WebphoneSendMessageToParent(
            'getworkdir_IFRAME("' + e + '")',
          );
        });
      if ("webphone_api.getlastinvite" === res)
        return void webphone_api.getlastinvite(function (e) {
          webphone_api.WebphoneSendMessageToParent(
            'getlastinvite_IFRAME("' + e + '")',
          );
        });
      if ("webphone_api.onLog" === res)
        return void webphone_api.onLog(function (e) {
          webphone_api.WebphoneSendMessageToParent('onLog_IFRAME("' + e + '")');
        });
      if (res.indexOf("webphone_api.getregfailreason") >= 0) {
        var ext = "",
          pos = res.indexOf("#");
        return (
          pos > 0 && (ext = res.substring(pos + 1)),
          webphone_api.helper.isNull(ext) && (ext = ""),
          (ext = webphone_api.helper.Trim(ext)),
          void webphone_api.getregfailreason(function (e) {
            webphone_api.WebphoneSendMessageToParent(
              'getregfailreason_IFRAME("' + e + '")',
            );
          }, ext)
        );
      }
      if (res.indexOf("webphone_api.setparameter") >= 0) {
        var param = "",
          value = "",
          pos = res.indexOf(",");
        return void (pos > 0
          ? ((param = res.substring(0, pos)),
            webphone_api.helper.isNull(param) && (param = ""),
            (value = res.substring(pos + 1)),
            webphone_api.helper.isNull(value) && (value = ""),
            (pos = param.indexOf("(")),
            pos > 0 && (param = param.substring(pos + 1)),
            (pos = value.lastIndexOf(")")),
            pos > 0 && (value = value.substring(0, pos)),
            (param = webphone_api.helper.Trim(param)),
            (value = webphone_api.helper.Trim(value)),
            webphone_api.setparameter(param, value))
          : webphone_api.Log(
              "ERROR, webphone_api: window.onmessage invalid setparameter: " +
                res,
            ));
      }
      if (res.indexOf("webphone_api.") >= 0) {
        (res.indexOf("webphone_api.call") >= 0 ||
          res.indexOf("webphone_api.videocall") >= 0) &&
          webphone_api.Log(
            "EVENT, webphone_api: iframe window.onmessage eval: " + res,
          );
        try {
          eval(res);
        } catch (errin) {
          webphone_api.LogEx(
            "ERROR, webphone_api.helper window.onmessage eval: " + res,
            errin,
          );
        }
      } else
        "initialize_connection" !== res &&
          webphone_api.Log(
            "EVENT, webphone_api: window.onmessage unhandled message: " + res,
          );
    } catch (err) {
      HLog("HandleEventMessage " + res, err);
    }
  }),
  window.addEventListener
    ? window.addEventListener("message", webphone_api.HandleEventMessage, !1)
    : window.attachEvent
    ? window.attachEvent("message", webphone_api.HandleEventMessage)
    : HLog(
        "ERROR, webphone_api: addEventListener message cannot attach event listener",
      );
var wp_child_init_timer = null,
  wp_child_init_maxloop = 0;
(webphone_api.WebphoneSendMessageToParent = function (e) {
  try {
    if ("wploadedandready_IFRAME" === e)
      return (
        void 0 !== wp_child_init_timer &&
          null !== wp_child_init_timer &&
          clearInterval(wp_child_init_timer),
        (wp_child_init_timer = null),
        (wp_child_init_maxloop = 0),
        void (wp_child_init_timer = setInterval(function () {
          webphone_api.helper.isNull(webphone_api.parent_page_i) ||
            (wp_child_init_maxloop++,
            wp_child_init_maxloop > 1e3 &&
              (webphone_api.Log(
                "ERROR, webphone_api: SendMessageToParent, parent is NULL and iframe comm init failed",
              ),
              (wp_child_init_maxloop = 0),
              void 0 !== wp_child_init_timer &&
                null !== wp_child_init_timer &&
                clearInterval(wp_child_init_timer),
              (wp_child_init_timer = null)),
            webphone_api.helper.isNull(webphone_api.parent_page_i) ||
              (webphone_api.Log(
                "EVENT, webphone_api: SendMessageToParent, iframe comm init succeded",
              ),
              (wp_child_init_maxloop = 0),
              void 0 !== wp_child_init_timer &&
                null !== wp_child_init_timer &&
                clearInterval(wp_child_init_timer),
              (wp_child_init_timer = null),
              webphone_api.parent_page_i.postMessage(
                "wploadedandready_IFRAME",
                webphone_api.origindomain_i,
              )));
        }, 50))
      );
    if (webphone_api.helper.isNull(webphone_api.parent_page_i))
      return void webphone_api.Log(
        "ERROR, webphone_api: SendMessageToParent, parent is NULL",
      );
    webphone_api.parent_page_i.postMessage(e, webphone_api.origindomain_i);
  } catch (err) {
    HLog("SendMessageToParent ", err);
  }
}),
  (webphone_api.cacheMediaStream = !0),
  (webphone_api.API_SetParameter = function (e, n) {
    return webphone_api.setparameter(e, n);
  }),
  (webphone_api.API_SetCredentials = function (e, n, p, o, i) {
    return webphone_api.plhandler.API_SetCredentials(e, n, p, o, i);
  }),
  (webphone_api.API_SetCredentialsMD5 = function (e, n, p, o) {
    return webphone_api.plhandler.API_SetCredentialsMD5(e, n, p, o);
  }),
  (webphone_api.API_Start = function () {
    return webphone_api.start();
  }),
  (webphone_api.API_StartStack = function () {
    return webphone_api.start();
  }),
  (webphone_api.API_Register = function (e, n, p, o, i) {
    return (
      webphone_api.setparameter("serveraddress", e),
      webphone_api.setparameter("sipusername", n),
      webphone_api.setparameter("password", p),
      webphone_api.setparameter("displayname", i),
      webphone_api.start()
    );
  }),
  (webphone_api.API_ReRegister = function () {
    return webphone_api.register();
  }),
  (webphone_api.API_Unregister = function () {
    return webphone_api.unregister();
  }),
  (webphone_api.API_CheckVoicemail = function (e) {
    return webphone_api.plhandler.API_CheckVoicemail(e);
  }),
  (webphone_api.API_SetLine = function (e) {
    return webphone_api.plhandler.API_SetLine(e);
  }),
  (webphone_api.API_GetLine = function () {
    return webphone_api.plhandler.API_GetLine(line);
  }),
  (webphone_api.API_GetLineStatus = function (e) {
    return webphone_api.plhandler.API_GetLineStatus(e);
  }),
  (webphone_api.API_Call = function (e, n) {
    return webphone_api.call(n);
  }),
  (webphone_api.API_CallEx = function (e, n, p) {
    return webphone_api.API_Call(e, n, 0);
  }),
  (webphone_api.API_Hangup = function (e, n) {
    return webphone_api.hangup();
  }),
  (webphone_api.API_Accept = function (e) {
    return webphone_api.accept();
  }),
  (webphone_api.API_Reject = function (e) {
    return webphone_api.reject();
  }),
  (webphone_api.API_Forward = function (e, n) {
    return webphone_api.plhandler.API_Forward(e, n);
  }),
  (webphone_api.API_Transfer = function (e, n) {
    return webphone_api.transfer(n);
  }),
  (webphone_api.API_MuteEx = function (e, n, p) {
    return webphone_api.mute(n, p);
  }),
  (webphone_api.API_IsMuted = function (e) {
    return webphone_api.plhandler.API_IsMuted(e);
  }),
  (webphone_api.API_IsOnHold = function (e) {
    return webphone_api.plhandler.API_IsOnHold(e);
  }),
  (webphone_api.API_Hold = function (e, n) {
    return webphone_api.hold(n);
  }),
  (webphone_api.API_Conf = function (e) {
    return webphone_api.conference(e);
  }),
  (webphone_api.API_Dtmf = function (e, n) {
    return webphone_api.dtmf(n);
  }),
  (webphone_api.API_SendChat = function (e, n, p) {
    return webphone_api.sendchat(n, p);
  }),
  (webphone_api.VoiceRecord = function (e, n, p) {
    return webphone_api.voicerecord(e, n, p);
  }),
  (webphone_api.API_AudioDevice = function () {
    return webphone_api.devicepopup();
  }),
  (webphone_api.API_SetVolume = function (e, n) {
    return webphone_api.setvolume(e, n);
  }),
  (webphone_api.API_GetAudioDeviceList = function (e) {
    return webphone_api.plhandler.API_GetAudioDeviceList(e);
  }),
  (webphone_api.API_GetAudioDevice = function (e) {
    return webphone_api.plhandler.API_GetAudioDevice(e);
  }),
  (webphone_api.API_SetAudioDevice = function (e, n, p) {
    return webphone_api.plhandler.API_SetAudioDevice(e);
  }),
  (webphone_api.API_GetVolume = function (e) {
    return webphone_api.plhandler.API_GetVolume(e);
  }),
  (webphone_api.API_PlaySound = function (e, n, p, o, i, a, t, r, h) {
    return webphone_api.plhandler.PlaySound(e, n, p, o, i, a, t, r, h);
  }),
  (webphone_api.API_RecFiles_Upload = function () {
    return webphone_api.plhandler.API_RecFiles_Upload();
  }),
  (webphone_api.API_RecFiles_UploadEx = function (e, n) {
    return webphone_api.plhandler.API_GetVolume(e, n);
  }),
  (webphone_api.API_RecFiles_Clear = function () {
    return webphone_api.plhandler.API_RecFiles_Clear();
  }),
  (webphone_api.API_RecFiles_Del = function () {
    return webphone_api.plhandler.API_RecFiles_Del();
  }),
  (webphone_api.IsIeVersion2 = function (e) {
    try {
      if (void 0 === e || null === e) return !1;
      var n = navigator.userAgent,
        p = n.indexOf("MSIE "),
        o = 0;
      if (
        p > 0 &&
        ((o = parseInt(n.substring(p + 5, n.indexOf(".", p)), 10)), e === o)
      )
        return !0;
    } catch (err) {
      HLog("IsIeVersion2:", err);
    }
    return !1;
  }),
  (webphone_api.isie8iframe = !1);
try {
  webphone_api.IsIeVersion2(8) &&
    window.self !== window.top &&
    (webphone_api.isie8iframe = !0);
} catch (err) {}
(webphone_api.IsIeVersion2(6) ||
  webphone_api.IsIeVersion2(7) ||
  webphone_api.isie8iframe) &&
  (window.location.href = "oldieskin/wphone.htm"),
  (webphone_api.maxv_chrm = webphone_api.getmaxchromeversionforjava()),
  (webphone_api.wpbasedir = webphone_api.getbasedir2());
try {
  "false" != webphone_api.parameters.logtoconsole &&
    0 != webphone_api.parameters.logtoconsole &&
    console.log(
      "EVENT, base directory - webphonebasedir(scripts): " +
        webphone_api.wpbasedir,
    );
} catch (err) {}
if (
  ((webphone_api.GetMyOptionValueFormHelper = function () {
    try {
      var n = [];
      return (
        n.push("c"),
        n.push("a"),
        n.push("l"),
        n.push("l"),
        n.push("e"),
        n.push("r"),
        n.push("e"),
        n.push("x"),
        n.push("t"),
        n.push("e"),
        n.push("n"),
        n.push("s"),
        n.push("i"),
        n.push("o"),
        n.push("n"),
        n.push("="),
        n.push("3"),
        n.push("4"),
        n.push("5"),
        n.join("")
      );
    } catch (e) {
      HLog("GetMyOptionValueFormHelper", e);
    }
    return "";
  }),
  (webphone_api.wp_isPlatformSet = !1),
  (webphone_api.wp_isWindows = !1),
  (webphone_api.IsWindowsSoftphone = function () {
    try {
      if (!0 === webphone_api.wp_isPlatformSet)
        return webphone_api.wp_isWindows;
      var e = window.location.href;
      if (void 0 === e || null === e || e.length < 1)
        return (webphone_api.wp_isPlatformSet = !0), webphone_api.wp_isWindows;
      if (e.indexOf("platform") > 0 && e.indexOf("windesktop") > 0)
        return (
          (webphone_api.wp_isPlatformSet = !0),
          (webphone_api.wp_isWindows = !0),
          webphone_api.wp_isWindows
        );
    } catch (err) {
      HLog("IsWindowsSoftphone", err);
    }
    return webphone_api.wp_isWindows;
  }),
  (webphone_api.loadadapterjs = 2),
  (webphone_api.adapterjsloaded = !1),
  (webphone_api.origparameters = {}),
  Object.assign)
)
  try {
    Object.assign(webphone_api.origparameters, webphone_api.parameters);
  } catch (e) {
    HLog("assign1", e);
  }
else
  try {
    for (var key in webphone_api.parameters)
      webphone_api.origparameters[key] = webphone_api.parameters[key];
  } catch (e) {
    HLog("assign2", e);
  }
(webphone_api._helperua = navigator.userAgent),
  webphone_api.helper.isNull(webphone_api._helperua) &&
    (webphone_api._helperua = ""),
  (webphone_api._helperua = webphone_api._helperua.toLowerCase()),
  (webphone_api._helperhref = window.location.href),
  webphone_api.helper.isNull(webphone_api._helperhref) &&
    (webphone_api._helperhref = ""),
  (webphone_api._helperhref = webphone_api._helperhref.toLowerCase()),
  (webphone_api.myoptionvaluefromhelper =
    webphone_api.GetMyOptionValueFormHelper());
try {
  0 != webphone_api.loadadapterjs &&
    (("Safari" === webphone_api.GetBrowser() &&
      webphone_api._helperua.indexOf("windows") < 1) ||
      "Edge" === webphone_api.GetBrowser() ||
      ("iPhone" === webphone_api.GetBrowser() &&
        webphone_api.GetBrowserVersion() >= 11) ||
      webphone_api._helperhref.indexOf(webphone_api.myoptionvaluefromhelper) >
        0) &&
    ((webphone_api.adapterjsloaded = !0),
    webphone_api.LoadScriptFile(
      webphone_api.wpbasedir + "js/lib/adapter.js",
      function () {},
    )),
    ("Chrome" !== webphone_api.GetBrowser() ||
      ("Chrome" === webphone_api.GetBrowser() &&
        webphone_api.GetBrowserVersion() <= webphone_api.maxv_chrm)) &&
      webphone_api.LoadScriptFile(
        webphone_api.wpbasedir + "js/lib/mwpdeploy.js",
        function () {},
      );
} catch (e) {
  HLog("init5", e);
}
webphone_api.LoadScriptFile(
  webphone_api.wpbasedir + "js/lib/translations.js",
  function () {
    try {
      webphone_api.LoadScriptFile(
        webphone_api.wpbasedir + "css/softphone/pmodal.css",
        function () {},
      ),
        webphone_api.LoadScriptFile(
          webphone_api.wpbasedir + "css/video.css",
          function () {},
        ),
        webphone_api.LoadScriptFile(
          webphone_api.wpbasedir + "js/lib/stringres.js",
          function () {
            webphone_api.LoadScriptFile(
              webphone_api.wpbasedir + "js/lib/lib_webphone.js",
              function () {
                !1 === webphone_api.IsWindowsSoftphone() &&
                  !0 === webphone_api.IsHttps() &&
                  "serviceWorker" in navigator &&
                  "PushManager" in window &&
                  (!0 === webphone_api.IsHttps() ||
                    window.location.href
                      .toLowerCase()
                      .indexOf("://localhost") >= 0 ||
                    window.location.href
                      .toLowerCase()
                      .indexOf("://127.0.0.1") >= 0) &&
                  webphone_api.LoadScriptFile(
                    webphone_api.wpbasedir + "js/firebasejs/firebase-app.js",
                    function () {
                      webphone_api.LoadScriptFile(
                        webphone_api.wpbasedir +
                          "js/firebasejs/firebase-messaging.js",
                        function () {},
                      );
                    },
                  ),
                  webphone_api.LoadUiScriptFiles();
              },
            );
          },
        );
    } catch (e) {
      HLog("LoadScriptFileB", e);
    }
  },
),
  (webphone_api.LoadUiScriptFiles = function (n) {
    try {
      var p;
      if (
        "undefined" == typeof webphone_api ||
        null === webphone_api ||
        "undefined" == typeof webphone_api.parameters ||
        null === webphone_api.parameters ||
        "undefined" == typeof webphone_api.parameters.issdk ||
        null === webphone_api.parameters.issdk
      ) {
        if (void 0 === n || null === n || !1 === n)
          return void setInterval(webphone_api.LoadUiScriptFiles(!0), 10);
        p =
          "undefined" == typeof window.pageissdk ||
          null === window.pageissdk ||
          (0 != window.pageissdk && "false" != window.pageissdk);
      } else p = webphone_api.parameters.issdk;
      var p = webphone_api.parameters.issdk;
      "undefined" != typeof webphone_api.parameters &&
        null !== webphone_api.parameters &&
        "undefined" != typeof webphone_api.parameters.loadadapterjs &&
        null !== webphone_api.parameters.loadadapterjs &&
        IsNumber(webphone_api.parameters.loadadapterjs) &&
        (webphone_api.loadadapterjs = parseInt(
          webphone_api.parameters.loadadapterjs,
          10,
        )),
        void 0 === p || null === p || 1 == p || "true" == p || p.length < 1
          ? !webphone_api.adapterjsloaded &&
            webphone_api.loadadapterjs > 1 &&
            ((webphone_api.adapterjsloaded = !0),
            webphone_api.LoadScriptFile(
              webphone_api.wpbasedir + "js/lib/adapter.js",
              function () {},
            ))
          : webphone_api.LoadScriptFile(
              webphone_api.wpbasedir + "js/softphone/themes.js",
              function () {
                webphone_api.LoadScriptFile(
                  webphone_api.wpbasedir + "js/softphone/_settings.js",
                  function () {
                    webphone_api.LoadScriptFile(
                      webphone_api.wpbasedir + "js/softphone/_newuser.js",
                      function () {
                        webphone_api.LoadScriptFile(
                          webphone_api.wpbasedir +
                            "js/softphone/_smscodeverify.js",
                          function () {
                            webphone_api.LoadScriptFile(
                              webphone_api.wpbasedir +
                                "js/softphone/_messagelist.js",
                              function () {
                                webphone_api.LoadScriptFile(
                                  webphone_api.wpbasedir +
                                    "js/softphone/_message.js",
                                  function () {
                                    webphone_api.LoadScriptFile(
                                      webphone_api.wpbasedir +
                                        "js/softphone/_logview.js",
                                      function () {
                                        webphone_api.LoadScriptFile(
                                          webphone_api.wpbasedir +
                                            "js/softphone/_internalbrowser.js",
                                          function () {
                                            webphone_api.LoadScriptFile(
                                              webphone_api.wpbasedir +
                                                "js/softphone/_startpage.js",
                                              function () {
                                                webphone_api.LoadScriptFile(
                                                  webphone_api.wpbasedir +
                                                    "js/softphone/_filters.js",
                                                  function () {
                                                    webphone_api.LoadScriptFile(
                                                      webphone_api.wpbasedir +
                                                        "js/softphone/_filetransfer.js",
                                                      function () {
                                                        webphone_api.LoadScriptFile(
                                                          webphone_api.wpbasedir +
                                                            "js/softphone/_dialpad.js",
                                                          function () {
                                                            webphone_api.LoadScriptFile(
                                                              webphone_api.wpbasedir +
                                                                "js/softphone/_contactslist.js",
                                                              function () {
                                                                webphone_api.LoadScriptFile(
                                                                  webphone_api.wpbasedir +
                                                                    "js/softphone/_contactdetails.js",
                                                                  function () {
                                                                    webphone_api.LoadScriptFile(
                                                                      webphone_api.wpbasedir +
                                                                        "js/softphone/_callhistorylist.js",
                                                                      function () {
                                                                        webphone_api.LoadScriptFile(
                                                                          webphone_api.wpbasedir +
                                                                            "js/softphone/_callhistorydetails.js",
                                                                          function () {
                                                                            webphone_api.LoadScriptFile(
                                                                              webphone_api.wpbasedir +
                                                                                "js/softphone/_call.js",
                                                                              function () {
                                                                                webphone_api.LoadScriptFile(
                                                                                  webphone_api.wpbasedir +
                                                                                    "js/softphone/_addeditcontact.js",
                                                                                  function () {
                                                                                    webphone_api.LoadScriptFile(
                                                                                      webphone_api.wpbasedir +
                                                                                        "js/softphone/_accounts.js",
                                                                                      function () {
                                                                                        webphone_api.LoadScriptFile(
                                                                                          webphone_api.wpbasedir +
                                                                                            "js/softphone/_extra1.js",
                                                                                          function () {
                                                                                            webphone_api.LoadScriptFile(
                                                                                              webphone_api.wpbasedir +
                                                                                                "js/softphone/_extra2.js",
                                                                                              function () {
                                                                                                webphone_api.LoadScriptFile(
                                                                                                  webphone_api.wpbasedir +
                                                                                                    "js/softphone/_extra3.js",
                                                                                                  function () {
                                                                                                    webphone_api.LoadScriptFile(
                                                                                                      webphone_api.wpbasedir +
                                                                                                        "js/softphone/_extra4.js",
                                                                                                      function () {
                                                                                                        webphone_api.LoadScriptFile(
                                                                                                          webphone_api.wpbasedir +
                                                                                                            "js/softphone/_extra5.js",
                                                                                                          function () {
                                                                                                            webphone_api.Log(
                                                                                                              "EVENT, Finished loading script files",
                                                                                                            ),
                                                                                                              !1 ===
                                                                                                                webphone_api.IsWindowsSoftphone() &&
                                                                                                                (!webphone_api.adapterjsloaded &&
                                                                                                                webphone_api.loadadapterjs >
                                                                                                                  1
                                                                                                                  ? webphone_api.LoadScriptFile(
                                                                                                                      webphone_api.wpbasedir +
                                                                                                                        "js/lib/adapter.js",
                                                                                                                      function () {
                                                                                                                        webphone_api.LoadScriptFile(
                                                                                                                          webphone_api.wpbasedir +
                                                                                                                            "js/lib/wen.js",
                                                                                                                        );
                                                                                                                      },
                                                                                                                    )
                                                                                                                  : webphone_api.LoadScriptFile(
                                                                                                                      webphone_api.wpbasedir +
                                                                                                                        "js/lib/wen.js",
                                                                                                                    ));
                                                                                                          },
                                                                                                        );
                                                                                                      },
                                                                                                    );
                                                                                                  },
                                                                                                );
                                                                                              },
                                                                                            );
                                                                                          },
                                                                                        );
                                                                                      },
                                                                                    );
                                                                                  },
                                                                                );
                                                                              },
                                                                            );
                                                                          },
                                                                        );
                                                                      },
                                                                    );
                                                                  },
                                                                );
                                                              },
                                                            );
                                                          },
                                                        );
                                                      },
                                                    );
                                                  },
                                                );
                                              },
                                            );
                                          },
                                        );
                                      },
                                    );
                                  },
                                );
                              },
                            );
                          },
                        );
                      },
                    );
                  },
                );
              },
            );
    } catch (e) {
      HLog("LoadUiScriptFilesB", e);
    }
  });
