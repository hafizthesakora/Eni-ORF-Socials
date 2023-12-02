function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 36 36">
      {/* White circle */}
      <circle cx="18" cy="18" r="18" fill="#FFF" />

      {/* Your SVG photo as an image */}
      <image
        href="../../../icons/eni.svg"
        x="4"
        y="4"
        width="28"
        height="28"
        alt=""
      />
    </svg>
  );
}

export default Logo;
