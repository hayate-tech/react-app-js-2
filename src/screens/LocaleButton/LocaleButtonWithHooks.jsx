import React from "react";
import { Button } from "antd";

const LocaleButton = () => {
  const [locale, setLocale] = React.useState("cn");

  const toggleLocale = () => {
    setLocale((prevState) => (prevState.locale === "cn" ? "en" : "cn"));
  };

  // Generates random colours any time it's called
  const randomColour = () =>
    "#" + ((Math.random() * 0xffffff) << 0).toString(16);

  return (
    <Button onClick={toggleLocale} style={{ background: randomColour() }}>
      {locale}
    </Button>
  );
};

export default LocaleButton;
