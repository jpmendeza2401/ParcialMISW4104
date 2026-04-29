/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
        "colors": {
                "surface-container": "#1c2026",
                "on-primary-fixed": "#001a43",
                "error": "#ffb4ab",
                "primary": "#aec6ff",
                "secondary-container": "#6807ba",
                "on-tertiary-fixed": "#360f00",
                "secondary-fixed-dim": "#dbb8ff",
                "on-secondary": "#470083",
                "tertiary-container": "#ca4e00",
                "surface-tint": "#aec6ff",
                "surface-variant": "#31353c",
                "on-secondary-container": "#d0a6ff",
                "surface-dim": "#10141a",
                "outline": "#8b90a0",
                "inverse-on-surface": "#2d3137",
                "tertiary-fixed-dim": "#ffb596",
                "surface-container-lowest": "#0a0e14",
                "on-primary-fixed-variant": "#004397",
                "surface-container-highest": "#31353c",
                "on-surface": "#dfe2eb",
                "primary-fixed": "#d8e2ff",
                "outline-variant": "#414754",
                "secondary-fixed": "#efdbff",
                "on-error": "#690005",
                "on-primary-container": "#ffffff",
                "on-primary": "#002e6b",
                "on-background": "#dfe2eb",
                "surface-bright": "#353940",
                "inverse-surface": "#dfe2eb",
                "on-error-container": "#ffdad6",
                "inverse-primary": "#0059c5",
                "surface": "#10141a",
                "primary-fixed-dim": "#aec6ff",
                "on-tertiary": "#581e00",
                "on-tertiary-container": "#fffeff",
                "on-secondary-fixed": "#2b0052",
                "on-tertiary-fixed-variant": "#7d2d00",
                "on-surface-variant": "#c1c6d7",
                "surface-container-high": "#262a31",
                "tertiary-fixed": "#ffdbcd",
                "primary-container": "#0070f3",
                "surface-container-low": "#181c22",
                "on-secondary-fixed-variant": "#6600b7",
                "error-container": "#93000a",
                "tertiary": "#ffb596",
                "background": "#10141a",
                "secondary": "#dbb8ff"
        },
        "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
        },
        "spacing": {
                "sm": "8px",
                "lg": "24px",
                "md": "16px",
                "container-max": "1280px",
                "xl": "40px",
                "gutter": "16px",
                "xs": "4px",
                "unit": "4px"
        },
        "fontFamily": {
                "h2": ["Inter"],
                "label-caps": ["Space Grotesk"],
                "body-sm": ["Inter"],
                "body-lg": ["Inter"],
                "h1": ["Inter"],
                "code": ["Roboto Mono"]
        },
        "fontSize": {
                "h2": ["24px", {"lineHeight": "1.3", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                "label-caps": ["12px", {"lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700"}],
                "body-sm": ["14px", {"lineHeight": "1.5", "fontWeight": "400"}],
                "body-lg": ["16px", {"lineHeight": "1.5", "fontWeight": "400"}],
                "h1": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600"}],
                "code": ["13px", {"lineHeight": "1.6", "fontWeight": "400"}]
        }
      }
  },
  plugins: [],
};