import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function Starfield() {
  const customInit = async (engine) => {
    await loadStarsPreset(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={customInit}
      options={{
        preset: "stars",
        background: {
          color: "#000"
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        }
      }}
    />
  );
}
