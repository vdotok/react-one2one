import React from 'react'
import Icons from "utils/icons";

const GetIcon = (props) => {
  const { iconName, ...rest } = props;
  const Icon = Icons[iconName];
  return <Icon {...rest} />;
};

export default GetIcon;
