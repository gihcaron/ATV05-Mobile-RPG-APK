import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text, IconButton } from "react-native-paper";

export default function CharacterCard({ character, onToggleRecruit, onRemove }) {
  return (
    <Card
      style={[styles.card, character.recruited && styles.cardRecruited]}
      onPress={() => onToggleRecruit(character)}
      onLongPress={() => onRemove(character)}
      mode="elevated"
    >
      <Card.Content style={styles.content}>
        <Text style={[styles.characterText, character.recruited && styles.characterRecruitedText]}>
          {character.name}
        </Text>
        <IconButton
          icon={character.recruited ? "star" : "sleep"}
          iconColor={character.recruited ? "#E69A28" : "#C5282F"}
          size={28}
          style={styles.status}
        />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2C1810",
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#58180D",
  },
  cardRecruited: {
    backgroundColor: "#58180D",
    borderColor: "#E69A28",
    borderWidth: 2,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 2,
  },
  characterText: {
    flex: 1,
    fontSize: 16,
    color: "#F4E4BC",
    fontWeight: "500",
  },
  characterRecruitedText: {
    color: "#E69A28",
    fontWeight: "bold",
  },
  status: {
    marginLeft: 10,
  },
});
