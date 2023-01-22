import { Realm } from "@realm/react";
import { Section } from "./Section";

export class Cubby extends Realm.Object<Cubby> {
  _id: Realm.BSON.ObjectId = new Realm.BSON.ObjectId();
  name!: string;
  description!: string;
  sections!: Realm.List<Section>;
  userId!: string;

  static primaryKey = "_id";

  constructor(
    realm: Realm,
    name: string,
    description: string,
    userId?: string,
  ) {
    super(
      realm,
      {
        name,
        description,
        userId: userId || '_SYNC_DISABLED_'
      }
    );
  }
}
