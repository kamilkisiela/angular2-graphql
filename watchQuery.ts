import {
  Component
} from '@angular/core';

import {
  Apollo,
  ApolloQueryPipe
} from 'angular2-apollo';

@Component({
  selector: 'app',
  pipes: [
    ApolloQueryPipe
  ],
  template: `
    <ul>
      <li *ngFor="let post of data | async | apolloQuery: 'posts'"></li>
    </ul>
  `
})
class App {
  constructor(
    private apollo: Apollo;
  ) {}

  ngOnInit() {
    this.apollo.watchQuery({
      query: gql`
        query getPosts($tag: String) {
          posts(tag: $tag) {
            title
          }
        }
      `,
      variables: {
        tag: '1234'
      }
    });
  }
}
