Worker 4752 is alive.
DTRACE_NET_SERVER_CONNECTION -> function () { [native code] }
DTRACE_NET_STREAM_END -> function () { [native code] }
DTRACE_HTTP_SERVER_REQUEST -> function () { [native code] }
DTRACE_HTTP_SERVER_RESPONSE -> function () { [native code] }
DTRACE_HTTP_CLIENT_REQUEST -> function () { [native code] }
DTRACE_HTTP_CLIENT_RESPONSE -> function () { [native code] }
COUNTER_NET_SERVER_CONNECTION -> function () { [native code] }
COUNTER_NET_SERVER_CONNECTION_CLOSE -> function () { [native code] }
COUNTER_HTTP_SERVER_REQUEST -> function () { [native code] }
COUNTER_HTTP_SERVER_RESPONSE -> function () { [native code] }
COUNTER_HTTP_CLIENT_REQUEST -> function () { [native code] }
COUNTER_HTTP_CLIENT_RESPONSE -> function () { [native code] }
global -> [object global]
process -> [object process]
Buffer -> function Buffer(arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      );
    }
    return Buffer.allocUnsafe(arg);
  }
  return Buffer.from(arg, encodingOrOffset, length);
}
clearImmediate -> function (immediate) {
  if (!immediate) return;

  immediate._onImmediate = undefined;

  L.remove(immediate);

  if (L.isEmpty(immediateQueue)) {
    process._needImmediateCallback = false;
  }
}
clearInterval -> function (timer) {
  if (timer && timer._repeat) {
    timer._repeat = null;
    clearTimeout(timer);
  }
}
clearTimeout -> function (timer) {
  if (timer && (timer[kOnTimeout] || timer._onTimeout)) {
    timer[kOnTimeout] = timer._onTimeout = null;
    if (timer instanceof Timeout) {
      timer.close(); // for after === 0
    } else {
      unenroll(timer);
    }
  }
}
setImmediate -> function (callback, arg1, arg2, arg3) {
  if (typeof callback !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }

  var i, args;
  var len = arguments.length;
  var immediate = new Immediate();

  L.init(immediate);

  switch (len) {
    // fast cases
    case 0:
    case 1:
      immediate._onImmediate = callback;
      break;
    case 2:
      immediate._onImmediate = function() {
        callback.call(immediate, arg1);
      };
      break;
    case 3:
      immediate._onImmediate = function() {
        callback.call(immediate, arg1, arg2);
      };
      break;
    case 4:
      immediate._onImmediate = function() {
        callback.call(immediate, arg1, arg2, arg3);
      };
      break;
    // slow case
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];

      immediate._onImmediate = function() {
        callback.apply(immediate, args);
      };
      break;
  }

  if (!process._needImmediateCallback) {
    process._needImmediateCallback = true;
    process._immediateCallback = processImmediate;
  }

  if (process.domain)
    immediate.domain = process.domain;

  L.append(immediateQueue, immediate);

  return immediate;
}
setInterval -> function (callback, repeat) {
  if (typeof callback !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }

  repeat *= 1; // coalesce to number or NaN

  if (!(repeat >= 1 && repeat <= TIMEOUT_MAX)) {
    repeat = 1; // schedule on next tick, follows browser behaviour
  }

  var timer = new Timeout(repeat);
  var length = arguments.length;
  var ontimeout = callback;
  switch (length) {
    case 0:
    case 1:
    case 2:
      break;
    case 3:
      ontimeout = () => callback.call(timer, arguments[2]);
      break;
    case 4:
      ontimeout = () => callback.call(timer, arguments[2], arguments[3]);
      break;
    case 5:
      ontimeout =
        () => callback.call(timer, arguments[2], arguments[3], arguments[4]);
      break;
    default:
      var args = new Array(length - 2);
      for (var i = 2; i < length; i += 1)
        args[i - 2] = arguments[i];
      ontimeout = () => callback.apply(timer, args);
      break;
  }
  timer._onTimeout = wrapper;
  timer._repeat = ontimeout;

  if (process.domain) timer.domain = process.domain;
  active(timer);

  return timer;

  function wrapper() {
    timer._repeat();

    // Timer might be closed - no point in restarting it
    if (!timer._repeat)
      return;

    // If timer is unref'd (or was - it's permanently removed from the list.)
    if (this._handle) {
      this._handle.start(repeat, 0);
    } else {
      timer._idleTimeout = repeat;
      active(timer);
    }
  }
}
setTimeout -> function (callback, after) {
  if (typeof callback !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }

  after *= 1; // coalesce to number or NaN

  if (!(after >= 1 && after <= TIMEOUT_MAX)) {
    after = 1; // schedule on next tick, follows browser behaviour
  }

  var timer = new Timeout(after);
  var length = arguments.length;
  var ontimeout = callback;
  switch (length) {
    // fast cases
    case 0:
    case 1:
    case 2:
      break;
    case 3:
      ontimeout = () => callback.call(timer, arguments[2]);
      break;
    case 4:
      ontimeout = () => callback.call(timer, arguments[2], arguments[3]);
      break;
    case 5:
      ontimeout =
        () => callback.call(timer, arguments[2], arguments[3], arguments[4]);
      break;
    // slow case
    default:
      var args = new Array(length - 2);
      for (var i = 2; i < length; i++)
        args[i - 2] = arguments[i];
      ontimeout = () => callback.apply(timer, args);
      break;
  }
  timer._onTimeout = ontimeout;

  if (process.domain) timer.domain = process.domain;

  active(timer);

  return timer;
}
console -> [object Object]
APP_PATH_ROOT -> C:\wamp\www\steamjs
APP_PATH_SITE -> C:\wamp\www\steamjs
APP_PATH_ADMIN -> C:\wamp\www\steamjs
APP_PATH_CONFIG -> C:\wamp\www\steamjs\config
APP_PATH_INIT -> C:\wamp\www\steamjs\init
APP_PATH_PUBLIC -> C:\wamp\www\steamjs\public
APP_PATH_PUBLIC_ASSETS -> C:\wamp\www\steamjs\public\assets
APP_PATH_STATIC -> C:\wamp\www\steamjs\public
APP_PATH_STATIC_PREFIX -> /static
APP_PATH_FAVICON -> C:\wamp\www\steamjs\public\favicon.ico
APP_PATH_SERVICES -> C:\wamp\www\steamjs\services
APP_PATH_SERVICES_DB -> C:\wamp\www\steamjs\services\database
APP_PATH_ROUTES -> C:\wamp\www\steamjs\routes
APP_PATH_MIDDLEWARES -> C:\wamp\www\steamjs\app\middlewares
APP_PATH_CONTROLLERS -> C:\wamp\www\steamjs\app\controllers
APP_PATH_MODELS -> C:\wamp\www\steamjs\app\models
APP_PATH_HELPERS -> C:\wamp\www\steamjs\app\helpers
APP_PATH_VIEWS -> C:\wamp\www\steamjs\app\views
APP_PATH_VIEW_LAYOUTS -> C:\wamp\www\steamjs\app\views\layouts
APP_PATH_VIEW_PARTIALS -> C:\wamp\www\steamjs\app\views\partials
APP_PATH_VIEW_HELPERS -> C:\wamp\www\steamjs\app\views\helpers
APP_VIEW_ENGINE -> handlebars
APP_PATH_PUBLIC_WEB -> /static
APP_PATH_PUBLIC_WEB_ASSETS -> /static/assets
APP_PATH_PUBLIC_WEB_ASSETS_CSS -> /static/assets/css
APP_PATH_PUBLIC_WEB_ASSETS_JS -> /static/assets/js
APP_PATH_PUBLIC_WEB_ASSETS_IMAGES -> /static/assets/images
APP_PATH_PUBLIC_WEB_ASSETS_FONTS -> /static/assets/fonts
x -> function (text) { 
	return 'X';
}
Connected to mongodb://localhost:27017/db_dev_steamjs DB!
Successfully connected to database
Express server listening on port 8000
Time: 1464681589736
::1 - - [31/May/2016:07:59:49 +0000] "GET /static/assets/js/jquery-1.10.2.min.map HTTP/1.1" 404 51 "-" "Mozilla/5.0 (Windows NT 6.1; rv:46.0) Gecko/20100101 Firefox/46.0"
