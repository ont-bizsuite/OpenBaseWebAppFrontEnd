import React from 'react';

const dispatchContext = React.createContext();

export const { Provider, Consumer } = dispatchContext;

export const withDispatch = Component => {
  const HOC = props => {
    return (
      <Consumer>
        {value => {
          value = value || 1;
          return <Component {...props} dispatch={value} />;
        }}
      </Consumer>
    );
  };
  HOC.displayName = 'WithDispatch';
  return HOC;
};

export default dispatchContext;
