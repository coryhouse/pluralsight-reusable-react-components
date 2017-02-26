// HOC declaration

function withLoadingSpinner(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (!isLoading) {
      return <Component { ...props } />;
    }

    return <LoadingSpinner />;
  };
}

// Usage

const ListItemsWithLoadingIndicator = withLoadingSpinner(ListItems);

<ListItemsWithLoadingIndicator
  isLoading={props.isLoading}
  list={props.list}
/>
