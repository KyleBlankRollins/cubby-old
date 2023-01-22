import { Realm } from '@realm/react';
import { Section } from "./Section";
import {
  Author,
  Link,
  Publisher,
  Subject,
  TableOfContents
} from "./EmbeddedModels";

export class Book extends Realm.Object<Book> {
  _id: Realm.BSON.ObjectId = new Realm.BSON.ObjectId();
  url!: string;
  key!: string;
  title!: string;
  subtitle!: string;
  numberOfPages!: number;
  notes!: string;
  cover!: object;
  // publishDate!: date;
  // dentifiers!: object;
  subjects!: Realm.List<Subject>;
  tableOfContents!: Realm.List<TableOfContents>;
  link!: Realm.List<Link>;
  publisher!: Realm.List<Publisher>;
  authors!: Realm.List<Author>;
  userId!: string;
  assignee!: {
    type: "linkingObjects",
    objectType: Section,
    property: "books"
  }

  static primaryKey = '_id';

  constructor(
    realm: Realm,
    url: string,
    title: string,
    subtitle: string,
    numberOfPages: number,
    notes: string,
    cover: object,
    userId?: string,
    // TODO: add more types to constructor
  ) {
    // TODO: add more data to super
    super(realm, { userId: userId || '_SYNC_DISABLED_' });
  }
}
