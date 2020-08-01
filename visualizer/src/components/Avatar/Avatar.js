import React from "react";

import styling from "./Avatar.module.scss";

function stringToHslColor(str, s, l) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  var h = hash % 360;
  return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

const Avatar = ({
  firstName = "",
  lastName = "",
  size = "standard",
  stacked,
}) => {
  let style =
    styling.avatar + " " + styling[size] + " " + (stacked && styling.stacked);

  let color = stringToHslColor(firstName + lastName, 40, 30);

  return (
    <div className={style} style={{ backgroundColor: color }}>
      {firstName[0].toUpperCase()}
      {lastName[0].toUpperCase()}
    </div>
  );
};

export const AvatarPlaceholder = ({ number, size = "standard" }) => (
  <div className={styling.placeholder + " " + styling[size]}>+{number}</div>
);

export default Avatar;
