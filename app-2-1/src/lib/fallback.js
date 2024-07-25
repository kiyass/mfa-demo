import React from "react";
const withVersions = (
  Original,
  remoteVersion,
  hostVersion,
  remoteReactDOMVersion,
  remoteReactVersion
) => {
  const ReactDOM = remoteReactDOMVersion();
  console.log("xxxx");
  const React = remoteReactVersion();

  class WrappedComponent extends React.Component {
    containerRef = React.createRef();

    componentDidMount() {
      this.mountOriginalComponent(true);
    }

    componentDidUpdate() {
      this.mountOriginalComponent();
    }

    componentWillUnmount() {
      if (this.containerRef.current) {
        ReactDOM.unmountComponentAtNode(this.containerRef.current);
      }
    }

    mountOriginalComponent(shouldRender = false) {
      const element = React.createElement(Original, this.props);
      const renderMethod = shouldRender ? ReactDOM.render : ReactDOM.hydrate;
      renderMethod(element, this.containerRef.current);
    }

    render() {
      return <div ref={this.containerRef} />;
    }
  }

  return WrappedComponent;
};

export default withVersions;
