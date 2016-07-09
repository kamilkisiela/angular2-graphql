# angular2-graphql

Ideas for new angular2-apollo API and other things (or not).

### Basic methods

- [`watchQuery()`](watchQuery.ts) - same as ApolloClient.watchQuery()
- [`mutate()`](mutate.ts) - same as ApolloClient.mutate()

### Reactive queries

It means they are being rebuilt if their variables change, but only those that came from a component.

- [Using methods](reactive_methods.ts)

- [Using decorator](reactive_decorator.ts)
