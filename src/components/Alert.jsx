export default function Alert() {
  const samsung = navigator.userAgent.match(/samsung/i);
  return samsung
    ? alert(
        "You are using a defective browser (Samsung Internet) that " +
          "might not be configured to display this website properly. " +
          "Please consider using a proper standards-compliant " +
          "browser instead. \n\n" +
          "We recommend using Google Chrome, Firefox, Edge or Safari."
      )
    : null;
}
