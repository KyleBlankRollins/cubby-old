import { Realm } from '@realm/react';
import { Book } from './Book';
import { Cubby } from './Cubby';

export class Section extends Realm.Object<Section> {
  _id: Realm.BSON.ObjectId = new Realm.BSON.ObjectId();
  name!: string;
  books!: Realm.List<Book>;
  colors!: object;
  assignee!: {
    type: "linkingObjects",
    objectType: Cubby,
    property: "sections"
  }

  static primaryKey = '_id';

  constructor(
    realm: Realm,
    name: string,
  ) {
    super(
      realm,
      {
        name
      }
    );
  }
}
