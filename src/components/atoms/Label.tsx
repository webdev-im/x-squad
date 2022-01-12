import React from "react";

// interface
interface Props {
  label: string;
}

const Label: React.FC<Props> = ({ label }) => {
  return <label>{label}</label>;
};

export default Label;
