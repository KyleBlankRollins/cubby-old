import { useState, useCallback } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	View
} from "react-native";

import { AddCubbyForm } from "./AddCubbyForm";
import { IntroText } from './IntroText';
import CubbyList from './CubbyList';

import { Cubby } from "../models/Cubby";
import { Section } from "../models/Section";
import { Book } from "../models/Book";

// import { useUser } from "@realm/react"; //TODO: Enable for Sync
import { RealmContext } from "../models";

const { useRealm } = RealmContext;

type CubbyManagerProps = {
	cubbies: Realm.Results<Cubby & Realm.Object>;
	userId?: string;
};

export const CubbyManager: React.FC<CubbyManagerProps> = ({ cubbies, userId }) => {

	// const user = useUser(); //TODO: Enable for Sync
	const realm = useRealm();

	const handleAddCubby = useCallback((
		description: string,
		name: string,
	): void => {

		if (!description || !name) {
			return;
		}

		realm.write(() => {
			// const defaultSection = new Section(
			// 	realm,
			// 	name = "First section",
			// );

			const newCubby = new Cubby(
				realm,
				name,
				description,
				userId,
			)

			// newCubby.sections.push(defaultSection);

			return newCubby;
		});
	},
		[realm, userId],
	);

	// TODO: Show a confirm delete modal before deleting
	// TODO: Investigate a soft delete vs hard delete
	const handleDeleteCubby = useCallback(
		(cubby: Cubby & Realm.Object): void => {
			realm.write(() => {
				realm.delete(cubby);
			});
		},
		[realm],
	);

	return (
		<View style={styles.container}>
			{cubbies.length === 0 ? (
				<IntroText />
			) : (
				<CubbyList
					cubbies={cubbies}
					onDeleteCubby={handleDeleteCubby}
				/>
			)}
			{/* TODO: Don't show this all the time */}
			<AddCubbyForm onSubmit={handleAddCubby} />
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		margin: 12,
		borderWidth: 1,
		padding: 10
	},
	container: {
		flex: 1
	},
	buttonGroup: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		marginVertical: 8
	}
});