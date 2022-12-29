import { buildLegacyTheme } from "sanity";

const props = {
    "--brand-white": "#FFF",
    "--brand-black": "#0F0F0F",
    "--brand-gray": "#8c8c8c",
    "--brand-primary": "#d29cd6",
    "--brand-red": "#ef477d",
    "--brand-green": "#06D6A0",
    "--brand-yellow": "#fff766",
  };
  
  export const myTheme = buildLegacyTheme({
    /* Base theme colors */
    "--black": props["--brand-black"],
    "--white": props["--brand-white"],
  
    "--gray": props["--brand-gray"],
    "--gray-base": props["--brand-gray"],
  
    "--component-bg": props["--brand-black"],
    "--component-text-color": props["--brand-white"],
  
    /* Brand */
    "--brand-primary": props["--brand-primary"],
  
    /* Default button */
    "--default-button-color": props["--brand-gray"],
    "--default-button-primary-color": props["--brand-primary"],
    "--default-button-success-color": props["--brand-green"],
    "--default-button-warning-color": props["--brand-yellow"],
    "--default-button-danger-color": props["--brand-red"],
  
    /* State */
    "--state-info-color": props["--brand-primary"],
    "--state-success-color": props["--brand-green"],
    "--state-warning-color": props["--brand-yellow"],
    "--state-danger-color": props["--brand-red"],
  
    /* Navbar */
    "--main-navigation-color": props["--brand-black"],
    "--main-navigation-color--inverted": props["--brand-white"],
  
    "--focus-color": props["--brand-primary"],
  });