import {
  Component
} from '@angular/core';

import {
  Apollo
} from 'angular2-apollo';

import {
  QueryObservable
} from 'apollo-client/QueryManager';

import {
  Subject
} from 'rxjs/Subject';

@Component({
  selector: 'app',
  template: `
    <ul>
      <li *ngFor="let post of posts"></li>
    </ul>
  `
})
class App {
  tag: Subject<string>;
  data: QueryObservable;
  posts: any;

  constructor(
    private apollo: Apollo;
  ) {
    this.data = this.apollo.watchQuery({
      query: gql`
        query getPosts($tag: String) {
          posts(tag: $tag) {
            title
          }
        }
      `,
      variables: {
        tag: this.tag
      }
    });
  }

  ngOnInit() {
    this.data.subscribe(({ data }) => {
      this.posts = this.data.posts;
    });
  }

  filterByTag(tag: string) {
    this.tag.next(tag); // rebuilds the query
  }
}
