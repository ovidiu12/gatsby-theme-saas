const defaultBreakpoints = {
  xs: 0,
  sm: 544,
  md: 768,
  lg: 992
};

const em = (value, context = "16px") => {
  const compute = parseFloat(value) / parseFloat(context);
  return `${compute}em`;
};

const withBreakpoints = props => (...args) => {
  const responsive = Object.keys(defaultBreakpoints).map(
    breakpoint =>
      props[breakpoint] &&
      props.theme.mq({ name: breakpoint })`
        ${args}
      `
  );

  return responsive;
};

export default {
  em,
  withBreakpoints
};
