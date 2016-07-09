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
    <ul *ngIf="!data.loading">
      <li *ngFor="let post of data.posts"></li>
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

  // define reply
  reply(raw: string) {
    const topicId = this.topicId;

    return this.apolo.mutate({
      // define mutation of reply
      mutation: gql`
        mutation postReply(
          $topic_id: ID!
          $raw: String!
        ) {
          createPost(
            topic_id: $topic_id
            raw: $raw
          ) {
            id
          }
        }
      `,
      // define variables of reply
      variables: {
        topic_id: topicId,
        raw,
      }
    })
  }
}
