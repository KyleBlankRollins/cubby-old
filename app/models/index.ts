import {createRealmContext} from '@realm/react';
import {Book} from './Book';
import {Section} from './Section';
import {Cubby} from './Cubby';
import {Author, Link, Publisher, Subject, TableOfContents} from './EmbeddedModels';

export const RealmContext = createRealmContext({
  schema: [
    Book, 
    Section, 
    Cubby, 
    Author,
    Link,
    Publisher,
    Subject,
    TableOfContents
  ],
});
