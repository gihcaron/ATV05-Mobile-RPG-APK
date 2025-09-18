import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CharacterCard({ character, onToggleRecruit, onRemove }) {
  return (
    <TouchableOpacity
      style={[styles.character, character.recruited && styles.characterRecruited]}
      onPress={() => onToggleRecruit(character)}
      onLongPress={() => onRemove(character)}
    >
      <Text style={[styles.characterText, character.recruited && styles.characterRecruitedText]}>
        {character.name}
      </Text>
      <Text style={styles.status}>
        {character.recruited ? "⭐" : "💤"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  character: {
    backgroundColor: "#2C1810",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#58180D",
  },
  characterRecruited: {
    backgroundColor: "#58180D",
    borderColor: "#E69A28",
    borderWidth: 2,
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
    fontSize: 20,
    marginLeft: 10,
  },
});
