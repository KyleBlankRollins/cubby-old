import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { Realm } from "@realm/react";

import { Cubby } from "../models/Cubby";
// import { CubbyOverview } from "./CubbyOverview";

type CubbyListProps = {
  cubbies: Realm.Results<Cubby>;
  onDeleteCubby: (cubby: Cubby) => void;
};

export const CubbyList: React.FC<CubbyListProps> = ({
  cubbies,
  onDeleteCubby
}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={cubbies}
        keyExtractor={cubby => cubby._id.toString()}
        renderItem={({ item }) => (
          <Text> {item.name} </Text>
          // <CubbyOverview
          //   cubby={item}
          //   onDelete={() => onDeleteCubby(item)}
          // // Don't spread the Realm item as such: {...item}
          // />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

export default CubbyList;
