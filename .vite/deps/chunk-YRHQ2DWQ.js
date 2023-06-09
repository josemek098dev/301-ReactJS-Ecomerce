import {
  _extends,
  _objectWithoutPropertiesLoose,
  init_extends,
  init_objectWithoutPropertiesLoose
} from "./chunk-O56RX22H.js";
import {
  __toESM,
  require_react
} from "./chunk-HS7GO4I2.js";

// node_modules/@mui/material/useScrollTrigger/useScrollTrigger.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var _excluded = ["getTrigger", "target"];
function defaultTrigger(store, options) {
  const {
    disableHysteresis = false,
    threshold = 100,
    target
  } = options;
  const previous = store.current;
  if (target) {
    store.current = target.pageYOffset !== void 0 ? target.pageYOffset : target.scrollTop;
  }
  if (!disableHysteresis && previous !== void 0) {
    if (store.current < previous) {
      return false;
    }
  }
  return store.current > threshold;
}
var defaultTarget = typeof window !== "undefined" ? window : null;
function useScrollTrigger(options = {}) {
  const {
    getTrigger = defaultTrigger,
    target = defaultTarget
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded);
  const store = React.useRef();
  const [trigger, setTrigger] = React.useState(() => getTrigger(store, other));
  React.useEffect(() => {
    const handleScroll = () => {
      setTrigger(getTrigger(store, _extends({
        target
      }, other)));
    };
    handleScroll();
    target.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => {
      target.removeEventListener("scroll", handleScroll, {
        passive: true
      });
    };
  }, [target, getTrigger, JSON.stringify(other)]);
  return trigger;
}

export {
  useScrollTrigger
};
//# sourceMappingURL=chunk-YRHQ2DWQ.js.map
