if (self.CavalryLogger) { CavalryLogger.start_js(["GmSc7eT"]); }

__d("CometVisualCompletionConstants",[],(function(a,b,c,d,e,f){"use strict";a="data-visualcompletion";f.ATTRIBUTE_NAME=a;b="HeroTracing";f.HERO_TRACING_HOLD=b;c="InteractionTracing";f.INTERACTION_TRACING_HOLD=c;d="ignore";f.IGNORE=d;e="ignore-dynamic";f.IGNORE_DYNAMIC=e;a="ignore-late-mutation";f.IGNORE_LATE_MUTATION=a;b="loading-state";f.LOADING_STATE=b;c="media-vc-image";f.MEDIA_VC_IMAGE=c;d="css-img";f.CSS_IMG=d}),null);
__d("CometVisualCompletionAttributes",["CometVisualCompletionConstants"],(function(a,b,c,d,e,f){"use strict";c=(a=b("CometVisualCompletionConstants")).ATTRIBUTE_NAME;d={CSS_IMG:(d={},d[c]=a.CSS_IMG,d),IGNORE:(f={},f[c]=a.IGNORE,f),IGNORE_DYNAMIC:(b={},b[c]=a.IGNORE_DYNAMIC,b),IGNORE_LATE_MUTATION:(d={},d[c]=a.IGNORE_LATE_MUTATION,d),LOADING_STATE:(f={},f[c]=a.LOADING_STATE,f),MEDIA_VC_IMAGE:(b={},b[c]=a.MEDIA_VC_IMAGE,b)};e.exports=d}),null);
__d("CometLruCache",["recoverableViolation"],(function(a,b,c,d,e,f){"use strict";f.create=a;var g=function(){function a(a){this.$1=a,a<=0&&b("recoverableViolation")("CometLruCache: Unable to create instance of cache with zero or negative capacity.","CometLruCache"),this.$2=new Map()}var c=a.prototype;c.set=function(a,b){this.$2["delete"](a);this.$2.set(a,b);if(this.$2.size>this.$1){a=this.$2.keys().next();a.done||this.$2["delete"](a.value)}};c.get=function(a){var b=this.$2.get(a);b!=null&&(this.$2["delete"](a),this.$2.set(a,b));return b};c.has=function(a){return this.$2.has(a)};c["delete"]=function(a){this.$2["delete"](a)};c.size=function(){return this.$2.size};c.capacity=function(){return this.$1-this.$2.size};c.clear=function(){this.$2.clear()};return a}();function a(a){return new g(a)}}),null);
__d("ConstUriUtils",["CometLruCache","FBLogger","PHPQuerySerializer","PHPQuerySerializerNoEncoding","URIRFC3986","URISchemes","UriNeedRawQuerySVConfig","gkx","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";f.isSubdomainOfDomain=s;f.isConstUri=a;f.registerDomainFilter=c;var g,h,i,j=b("CometLruCache").create(5e3),k=new RegExp("(^|\\.)facebook\\.com$","i"),l=new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),m=new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),n=b("UriNeedRawQuerySVConfig").uris.map(function(a){return{domain:a,valid:t(a)}}),o=[];function p(a,c){var d={};if(a!=null)for(var a=a.entries(),e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=a.length)break;g=a[f++]}else{f=a.next();if(f.done)break;g=f.value}g=g;d[g[0]]=g[1]}else b("FBLogger")("ConstUri").warn("Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue.");return c.serialize(d)}function q(a,c,d){var e=g||(g=b("PHPQuerySerializer"));if(["http","https"].includes(c)&&r(a)){if(b("gkx")("176")&&a.includes("doubleclick.net")&&d!=null&&!d.startsWith("http"))return e;e=b("PHPQuerySerializerNoEncoding")}return e}function r(a){return a!=null&&n.some(function(b){return b.valid&&s(a,b.domain)})}function s(a,b){if(b===""||a==="")return!1;if(a.endsWith(b)){b=a.length-b.length-1;if(b===-1||a[b]===".")return!0}return!1}function t(a){return!m.test(a)}function u(a,b){var c=b.protocol!=null&&b.protocol!==""?b.protocol:a.getProtocol();c=b.domain!=null?q(b.domain,c):a.getSerializer();c={domain:a.getDomain(),fragment:a.getFragment(),fragmentSeparator:a.hasFragmentSeparator(),isGeneric:a.isGeneric(),originalRawQuery:a.getOriginalRawQuery(),path:a.getPath(),port:a.getPort(),protocol:a.getProtocol(),queryParams:a.getQueryParams(),serializer:c,subdomain:a.getSubdomain()};a=babelHelpers["extends"]({},c,b);c=b.queryParams!=null&&b.queryParams.size!==0;return z.getUribyObject(a,c)}function v(a,b,c,d){c===void 0&&(c=!1);var e=a.protocol!==""?a.protocol+":"+(a.isGeneric?"":"//"):"",f=a.domain!==""?a.domain:"",g=a.port!==""?":"+a.port:"",h=a.path!==""?a.path:e!==""||f!==""||g!==""?"/":"";c=w(f,a.originalRawQuery,a.queryParams,b,c,(b=d)!=null?b:a.serializer);d=c.length>0?"?":"";b=a.fragment!==""?"#"+a.fragment:"";a=a.fragment===""&&a.fragmentSeparator?"#":"";return""+e+f+g+h+d+c+a+b}function w(a,b,c,d,e,f){e===void 0&&(e=!1);if(!d&&(e||r(a))){return(d=b)!=null?d:""}return p(c,f)}function x(a){var c=a.trim();c=(h||(h=b("URIRFC3986"))).parse(c)||{fragment:null,host:null,isGenericURI:!1,query:null,scheme:null,userinfo:null};var d=c.host||"",e=d.split(".");e=e.length>=3?e[0]:"";var f=q(d,c.scheme||"",c.query),g=f.deserialize(c.query||"")||{};g=new Map(Object.entries(g));g=y({domain:d,fragment:c.fragment||"",fragmentSeparator:c.fragment==="",isGeneric:c.isGenericURI,originalRawQuery:c.query,path:c.path||"",port:c.port!=null?String(c.port):"",protocol:(c.scheme||"").toLowerCase(),queryParams:g,serializer:f,subdomain:e,userInfo:(d=c==null?void 0:c.userinfo)!=null?d:""},a);return g}function y(a,c){var d={components:babelHelpers["extends"]({},a),error:"",valid:!0},e=d.components;if(!(i||(i=b("URISchemes"))).isAllowed(a.protocol)){d.valid=!1;d.error='The URI protocol "'+String(a.protocol)+'" is not allowed.';return d}if(!t(a.domain||"")){d.valid=!1;d.error="This is an unsafe domain "+String(a.domain);return d}e.port=a.port!=null&&String(a.port)||"";if(Boolean(a.userInfo)){d.valid=!1;d.error="Invalid URI: (userinfo is not allowed in a URI "+String(a.userInfo)+")";return d}a=c!=null&&c!==""?c:v(e,!1);if(e.domain===""&&e.path.indexOf("\\")!==-1){d.valid=!1;d.error="Invalid URI: (no domain but multiple back-slashes "+a+")";return d}if(!e.protocol&&l.test(a)){d.valid=!1;d.error="Invalid URI: (unsafe protocol-relative URI "+a+")";return d}if(e.domain!==""&&e.path!==""&&!e.path.startsWith("/")){d.valid=!1;d.error="Invalid URI: (domain and pathwhere path lacks leading slash "+a+")";return d}return d}var z=function(){function a(a){this.queryParams=new Map(),this.domain=a.domain,this.fragment=a.fragment,this.fragmentSeparator=Boolean(a.fragmentSeparator),this.isGenericProtocol=Boolean(a.isGeneric),this.path=a.path,this.originalRawQuery=a.originalRawQuery,this.port=a.port,this.protocol=a.protocol,this.queryParams=a.queryParams,this.serializer=a.serializer,this.subdomain=a.subdomain}var c=a.prototype;c.addQueryParam=function(a,b){if(Boolean(a)){var c=this.getQueryParams();c.set(a,b);return u(this,{queryParams:c})}return this};c.addQueryParams=function(a){if(a.size>0){var b=this.getQueryParams();a.forEach(function(a,c){b.set(c,a)});return u(this,{queryParams:b})}return this};c.addQueryParamString=function(a){if(Boolean(a)){a=a.startsWith("?")?a.slice(1):a;var b=this.getQueryParams();a.split("&").map(function(a){a=a.split("=");var c=a[0];a=a[1];b.set(c,a)});return u(this,{queryParams:b})}return this};c.addTrailingSlash=function(){var a=this.getPath();return a.length>0&&a[a.length-1]!=="/"?this.setPath(a+"/"):this};c.getDomain=function(){return this.domain};c.getFragment=function(){return this.fragment};c.getOrigin=function(){var a=this.getPort();return this.getProtocol()+"://"+this.getDomain()+(a?":"+a:"")};c.getOriginalRawQuery=function(){return this.originalRawQuery};c.getPath=function(){return this.path};c.getPort=function(){return this.port};c.getProtocol=function(){return this.protocol.toLowerCase()};c.getQualifiedUri=function(){if(!this.getDomain()){var b=String(window.location.href);b=b.slice(0,b.indexOf("/",b.indexOf(":")+3));return a.getUri(b+this.toString())}return this};c.getQueryParam=function(a){a=this.queryParams.get(a);if(typeof a==="string")return a;else{a=JSON.stringify(a);return a==null?a:JSON.parse(a)}};c.getQueryParams=function(){return new Map(JSON.parse(JSON.stringify(Array.from(this.queryParams))))};c.getQueryString=function(a){a===void 0&&(a=!1);return w(this.domain,this.originalRawQuery,this.queryParams,!1,a,this.serializer)};c.getRegisteredDomain=function(){if(!this.getDomain())return"";if(!this.isFacebookUri())return null;var a=this.getDomain().split("."),b=a.indexOf("facebook");b===-1&&(b=a.indexOf("workplace"));return a.slice(b).join(".")};c.getSerializer=function(){return this.serializer};c.getSubdomain=function(){return this.subdomain};c.getUnqualifiedUri=function(){if(this.getDomain()){var b=this.toString();return a.getUri(b.slice(b.indexOf("/",b.indexOf(":")+3)))}return this};a.getUri=function(c){c=c.trim();var d=j.get(c);if(d==null){var e=x(c);if(e.valid)d=new a(e.components),j.set(c,d);else{b("recoverableViolation")(e.error,"ConstUri");return null}}return d};a.getUribyObject=function(c,d){var e=v(c,d),f=j.get(e);if(f==null){d&&(c.originalRawQuery=p(c.queryParams,c.serializer));d=y(c);if(d.valid)f=new a(d.components),j.set(e,f);else{b("recoverableViolation")(d.error,"ConstUri");return null}}return f};c.hasFragmentSeparator=function(){return this.fragmentSeparator};c.isEmpty=function(){return!(this.getPath()||this.getProtocol()||this.getDomain()||this.getPort()||this.queryParams.size>0||this.getFragment())};c.isFacebookUri=function(){var a=this.toString();if(a==="")return!1;return!this.getDomain()&&!this.getProtocol()?!0:["https","http"].indexOf(this.getProtocol())!==-1&&k.test(this.getDomain())};c.isGeneric=function(){return this.isGenericProtocol};c.isSameOrigin=function(a){if(this.getProtocol()&&this.getProtocol()!==a.getProtocol())return!1;if(this.getDomain()&&this.getDomain()!==a.getDomain())return!1;if(this.getPort()&&this.getPort()!==a.getPort())return!1;return this.toString()===""||a.toString()===""?!1:!0};c.isSubdomainOfDomain=function(b){var c=a.getUri(b);return c!=null&&s(this.domain,b)};c.isSecure=function(){return this.getProtocol()==="https"};c.removeQueryParams=function(a){if(Array.isArray(a)&&a.length>0){var b=this.getQueryParams();a.map(function(a){return b["delete"](a)});return u(this,{queryParams:b})}return this};c.removeQueryParam=function(a){if(Boolean(a)){var b=this.getQueryParams();b["delete"](a);return u(this,{queryParams:b})}return this};c.replaceQueryParam=function(a,b){if(Boolean(a)){var c=this.getQueryParams();c.set(a,b);return u(this,{queryParams:c})}return this};c.replaceQueryParams=function(a){return u(this,{queryParams:a})};c.replaceQueryParamString=function(a){if(a!=null){a=a.startsWith("?")?a.slice(1):a;var b=this.getQueryParams();a.split("&").map(function(a){a=a.split("=");var c=a[0];a=a[1];b.set(c,a)});return u(this,{queryParams:b})}return this};c.setDomain=function(a){if(Boolean(a)){var b=a.split(".");b=b.length>=3?b[0]:"";return u(this,{domain:a,subdomain:b})}return this};c.setFragment=function(a){return a==="#"?u(this,{fragment:"",fragmentSeparator:!0}):u(this,{fragment:a,fragmentSeparator:a!==""})};c.setPath=function(a){return a!=null?u(this,{path:a}):this};c.setPort=function(a){return Boolean(a)?u(this,{port:a}):this};c.setProtocol=function(a){return Boolean(a)?u(this,{protocol:a}):this};c.setSecure=function(a){return this.setProtocol(a?"https":"http")};c.setSubDomain=function(a){if(Boolean(a)){var b=this.domain.split(".");b.length>=3?b[0]=a:b.unshift(a);return u(this,{domain:b.join("."),subdomain:a})}return this};c.stripTrailingSlash=function(){return this.setPath(this.getPath().replace(/\/$/,""))};a.$1=function(a){a=a;for(var b=0;b<o.length;b++){var c=o[b];a=c(a)}return a};c.$2=function(b,c){c===void 0&&(c=!1);return v({domain:a.$1(this.domain),fragment:this.fragment,fragmentSeparator:this.fragmentSeparator,isGeneric:this.isGenericProtocol,originalRawQuery:this.originalRawQuery,path:this.path,port:this.port,protocol:this.protocol,queryParams:this.queryParams,serializer:b,subdomain:this.subdomain,userInfo:""},!1,c)};c.toStringRawQuery=function(){this.rawStringValue==null&&(this.rawStringValue=this.$2(b("PHPQuerySerializerNoEncoding")));return this.rawStringValue};c.toString=function(){this.stringValue==null&&(this.stringValue=this.$2(this.serializer));return this.stringValue};c.toStringPreserveQuery=function(){return this.$2(this.serializer,!0)};a.isValidUri=function(b){var c=j.get(b);if(c!=null)return!0;c=x(b);if(c.valid){j.set(b,new a(c.components));return!0}return!1};return a}();function a(a){if(a instanceof z)return a;else return null}function c(a){o.push(a)}d=z.getUri;f.getUri=d;e=z.isValidUri;f.isValidUri=e}),null);
__d("routeBuilderUtils",[],(function(a,b,c,d,e,f){"use strict";f.getPathParts=a;function a(a){a=a.split("/");return a.filter(function(a){return a!==""}).map(function(a){var b=a.split(/{|}/);if(b.length<3)return{isToken:!1,part:a};else{a=b[0];var c=b[1];b=b[2];var d=c[0]==="?",e=c[d?1:0]==="*";c=c.substring((d?1:0)+(e?1:0));return{isToken:!0,optional:d,prefix:a,suffix:b,token:c}}})}}),null);
__d("jsRouteBuilder",["ConstUriUtils","FBLogger","routeBuilderUtils"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g="#";function a(a,c,d,e,f){f===void 0&&(f=!1);var h=b("routeBuilderUtils").getPathParts(a);function i(i){try{var j=e!=null?babelHelpers["extends"]({},e,i):i,k={};i="";var l=!1;i=h.reduce(function(a,b){if(!b.isToken)return a+"/"+b.part;else{var d,e=b.optional,f=b.prefix,g=b.suffix;b=b.token;if(e&&l)return a;d=(d=j[b])!=null?d:c[b];if(d==null&&e){l=!0;return a}if(d==null)throw new Error("Missing required template parameter: "+b);if(d==="")throw new Error("Required template parameter is an empty string: "+b);k[b]=!0;return a+"/"+f+d+g}},"");a.slice(-1)==="/"&&(i+="/");i===""&&(i="/");var m=b("ConstUriUtils").getUri(i);for(var n in j){var o=j[n];!k[n]&&o!=null&&m!=null&&(d!=null&&d.has(n)?o!==!1&&(m=m.addQueryParam(n,null)):m=m.addQueryParam(n,o))}return[m,i]}catch(c){o=c==null?void 0:c.message;m=b("FBLogger")("JSRouteBuilder").blameToPreviousFrame();f&&(m=m.blameToPreviousFrame());m.mustfix("Failed building URI for base path: %s message: %s",a,o);return[null,g]}}return{buildUri:function(a){a=(a=i(a)[0])!=null?a:b("ConstUriUtils").getUri(g);if(a==null)throw new Error("Not even the fallback URL parsed validly!");return a},buildUriNullable:function(a){return i(a)[0]},buildURLStringDEPRECATED:function(a){a=i(a);var b=a[0];a=a[1];return(b=b==null?void 0:b.toString())!=null?b:a},buildURL:function(a){a=i(a);var b=a[0];a=a[1];return(b=b==null?void 0:b.toString())!=null?b:a}}}}),null);
__d("isLinkshimURI",["isFacebookURI","isMessengerDotComURI"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){var c=a.getPath();return(c==="/l.php"||c.indexOf("/si/ajax/l/")===0||c.indexOf("/l/")===0||c.indexOf("l/")===0)&&(b("isFacebookURI")(a)||b("isMessengerDotComURI")(a))?!0:!1}}),null);
__d("debounceCore",["TimeSlice"],(function(a,b,c,d,e,f){e.exports=a;function a(a,c,d,e,f,g){d===void 0&&(d=null);e===void 0&&(e=setTimeout);f===void 0&&(f=clearTimeout);g===void 0&&(g=!1);var h,i=!0;function j(){for(var k=arguments.length,l=new Array(k),m=0;m<k;m++)l[m]=arguments[m];var n;if(g){n=b("TimeSlice").guard(function(){i=!0,h=null},"debounceCore");if(!i){f(h);h=e(n,c);return}i=!1;a.apply(d,l)}else j.reset(),n=b("TimeSlice").guard(function(){h=null,a.apply(d,l)},"debounceCore");n.__SMmeta=a.__SMmeta;h=e(n,c)}j.reset=function(){f(h),h=null,i=!0};j.isPending=function(){return h!=null};return j}}),null);
__d("debounce",["clearTimeout","debounceCore","setTimeout"],(function(a,b,c,d,e,f){e.exports=a;function a(a,c,d,e,f){c===void 0&&(c=100);var g=function(a,c,d){return b("setTimeout")(a,c,d,!e)};return b("debounceCore")(a,c,d,g,b("clearTimeout"),f)}}),null);
__d("DGWRequestStreamDeferredClient",["Promise","nullthrows","requireDeferred"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1=null}var c=a.prototype;c.createStream=function(a,c,d,e,f){this.$2();return b("nullthrows")(this.$1).then(function(b){return b.createStream(a,c,d,e,f)})};c.$2=function(){this.$1==null&&(this.$1=new(b("Promise"))(function(a){b("requireDeferred")("DGWRequestStreamClient").__setRef("DGWRequestStreamDeferredClient").onReady(function(b){a(new b())})}))};return a}();c=new a();e.exports=c}),null);
__d("MemoizationInstrumentation",["invariant"],(function(a,b,c,d,e,f,g){"use strict";f.inject=a;f.onFunctionCall=b;var h=null;function a(a){h==null||g(0,2221),h=a}function b(a,b){return h?h.functionCall(a,b):null}}),null);
__d("coerceImageishSprited",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){if(!a||typeof a!=="object"||!a.sprited)return null;return a.sprited===!0||a.sprited===1?{type:"css",className:a.spriteMapCssClass+" "+a.spriteCssClass,identifier:a.loggingID}:{type:"cssless",style:{backgroundImage:"url('"+a.spi+"')",backgroundPosition:a.p,backgroundSize:a.sz,width:a.w+"px",height:a.h+"px",backgroundRepeat:"no-repeat",display:"inline-block"},identifier:a.loggingID}}}),null);
__d("coerceImageishURL",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){if(a&&typeof a==="object"&&!a.sprited&&typeof a.uri==="string"&&a.width!==void 0&&a.height!==void 0)return a;else return null}}),null);
__d("memoizeWithArgs",["MemoizationInstrumentation"],(function(a,b,c,d,e,f){e.exports=a;var g=Object.prototype.hasOwnProperty;function a(a,c,d){var e,f=d||a.name||"unknown";d=function(){e||(e={});var d=b("MemoizationInstrumentation").onFunctionCall("memoizeWithArgs",f),h=c.apply(void 0,arguments),i=!0;g.call(e,h)||(i=!1,e[h]=a.apply(void 0,arguments));d&&d(i);return e[h]};return d}}),null);
__d("isClickIDBlacklistSVDomainURI",["ClickIDDomainBlacklistSVConfig"],(function(a,b,c,d,e,f){"use strict";var g=["http","https"];function a(a){return!g.includes(a.getProtocol())?!1:b("ClickIDDomainBlacklistSVConfig").domains.some(function(b){if(a.isSubdomainOfDomain(b))return!0;if(!b.includes(".")){var c=a.getDomain().split(".");return c.includes(b)}return!1})}e.exports=a}),null);
__d("isFacebookSVDomainURI",["FBDomainsSVConfig"],(function(a,b,c,d,e,f){"use strict";var g=["http","https"];function a(a){if(g.indexOf(a.getProtocol())===-1)return!1;a=b("FBDomainsSVConfig").domains.get(a.getDomain());return a!=null}e.exports=a}),null);
__d("isFbDotComURI",[],(function(a,b,c,d,e,f){e.exports=a;var g=new RegExp("(^|\\.)fb\\.com?$","i"),h=["http","https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}}),null);
__d("asset",[],(function(a,b,c,d,e,f){function a(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];throw new Error("asset("+b.join(",")+"): Unexpected asset reference")}e.exports=a}),null);
__d("throttle",["TimeSlice","TimeSliceInteractionSV","setTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){function a(a,c,d){return g(a,c,d,b("setTimeout"),!1)}Object.assign(a,{acrossTransitions:function(a,c,d){return g(a,c,d,b("setTimeoutAcrossTransitions"),!1)},withBlocking:function(a,c,d){return g(a,c,d,b("setTimeout"),!0)},acrossTransitionsWithBlocking:function(a,c,d){return g(a,c,d,b("setTimeoutAcrossTransitions"),!0)}});function g(a,c,d,e,f){var g=c==null?100:c,h,i=null,j=0,k=null,l=[],m=b("TimeSlice").guard(function(){j=Date.now();if(i){var b=function(b){a.apply(h,b)}.bind(null,i),c=l.length;while(--c>=0)b=l[c].bind(null,b);l=[];b();i=null;k=e(m,g)}else k=null},"throttle_"+g+"_ms",{propagationType:b("TimeSlice").PropagationType.EXECUTION,registerCallStack:!0});m.__SMmeta=a.__SMmeta;return function(){b("TimeSliceInteractionSV").ref_counting_fix&&l.push(b("TimeSlice").getGuardedContinuation("throttleWithContinuation"));for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];i=c;h=this;d!==void 0&&(h=d);(k===null||Date.now()-j>g)&&(f===!0?m():k=e(m,0))}}c=a;e.exports=c}),null);