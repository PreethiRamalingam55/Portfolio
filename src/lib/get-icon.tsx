
type Props = {
  iconList: { [key: string]: React.ElementType };
  iconName: string;
  [key: string]: unknown;
};

export const getIcon = ({ iconList, iconName, ...rest }: Props) => {
  const IconComponent = iconList[iconName];
  return IconComponent ? <IconComponent {...rest} /> : null;
};
