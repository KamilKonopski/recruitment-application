import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: "#4F46E5";
      primaryHover: "#4338CA";
      secondary: "#D946EF";
      secondaryHover: "#C026D3";
      background: "#E5E7EB";
      backgroundAlt: "#1E293B";
      card: "#FFFFFF";
      border: "#C8C9CC";

      text: "#111827";
      textMuted: "#6B7280";

      buttonLight: "#111827";
      buttonBgLight: "#F3F4F6";
      buttonDark: "#F9FAFB";
      buttonBgDark: "#111827";

      hoverLight: "#E5E7EB";
      hoverDark: "#1F2937";

      success: "#10B981";
      danger: "#EF4444";

      application: "#4F46E5";
      interview: "#3B82F6";
      rejected: "#EF4444";
    };
    fonts: {
      base: string;
    };
  }
}
