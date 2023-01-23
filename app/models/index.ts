import { createRealmContext } from '@realm/react';
import { Book } from './Book';
import { Cubby } from './Cubby';
import { Author, Link, Publisher, Subject, TableOfContents } from './EmbeddedModels';

export const RealmContext = createRealmContext({
  schema: [
    Book,
    Cubby,
    Author,
    Link,
    Publisher,
    Subject,
    TableOfContents
  ],
});
