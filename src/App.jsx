import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./App.css";

function App() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "Build/WebGL.loader.js",
    dataUrl: "Build/WebGL.data.unityweb",
    frameworkUrl: "Build/WebGL.framework.js.unityweb",
    codeUrl: "Build/WebGL.wasm.unityweb",
    streamingAssetsUrl: "StreamingAssets",
  });

  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(loadingProgression * 100);

  return (
    <div className="container">
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <div>
            <p className="loading-text">加载中...</p>
            <div
              className="progress"
              style={{ ["--progress"]: loadingPercentage }}
            >
              <p>{loadingPercentage}%</p>
            </div>
          </div>
        </div>
      )}
      <Unity
        className="unity"
        unityProvider={unityProvider}
        devicePixelRatio={window.devicePixelRatio}
      />
    </div>
  );
}

export default App;
