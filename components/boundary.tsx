// @ts-ignore
class ErrorBoundary extends React.Component {
  constructor(props: unknown ) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown ): {hasError: boolean;
}  {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: unknown , errorInfo: unknown ): void  {
    //
  }

  render() {
    // @ts-ignore

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
