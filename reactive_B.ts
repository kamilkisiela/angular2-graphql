import {
  Component
} from '@angular/core';

import {
  Apollo,
  Query
} from 'angular2-apollo';

/*

interface Query {
  loading: boolean;
  errors: ApolloError;
  refetch: (variables: Object) => any;
  unsubscribe: Function
  stopPolling: Function
  startPolling: (pollInterval: number) => any;
}

 */

interface DataQuery extends Query {
  data: any;
}

@Component({
  selector: 'app',
  template: `
    <ul>
      <li></li>
    </ul>
  `
})
class App {
  data: DataQuery;
  tag: string;

  constructor(
    private apollo: Apollo
  ) {}

  ngOnInit() {
    // data
    this.data = apollo.reactiveQuery((component: App) => ({
      // define query of data
      query: gql`
        query getPosts($tag: String) {
          posts(tag: $tag) {
            title
          }
        }
      `,
      // define variables of data
      variables: {
        tag: component.tag
      }
    }));
  }
}
