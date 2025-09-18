import React, { useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, Alert, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider as PaperProvider } from "react-native-paper";
import CharacterCard from "./components/CharacterCard";
import AddCharacterForm from "./components/AddCharacterForm";
import Header from "./components/Header";
import { Snackbar, Button, SegmentedButtons } from "react-native-paper";

export default function App() {
  const [characters, setCharacters] = useState([
    { id: 1, name: "🧙‍♂️ Gandalf o Mago", recruited: 0 },
    { id: 2, name: "⚔️ Aragorn o Guerreiro", recruited: 1 },
    { id: 3, name: "🏹 Legolas o Arqueiro", recruited: 0 }
  ]);
  const [newCharacter, setNewCharacter] = useState("");
  const [snackbar, setSnackbar] = useState({ visible: false, message: "" });
  const [filter, setFilter] = useState("all");

  function addCharacter() {
    if (newCharacter === "") return;
    const newId = characters.length + 1;
    const newCharacterObj = {
      id: newId,
      name: newCharacter,
      recruited: 0
    };
    const newList = [newCharacterObj];
    const allCharacters = newList.concat(characters);
    setCharacters(allCharacters);
    setNewCharacter("");
    setSnackbar({ visible: true, message: "Personagem adicionado!" });
  }

  function toggleRecruit(character) {
    const newCharacters = characters.map((c) =>
      c.id === character.id ? { ...c, recruited: c.recruited ? 0 : 1 } : c
    );
    setCharacters(newCharacters);
    setSnackbar({ visible: true, message: character.recruited ? "Personagem dispensado!" : "Personagem recrutado!" });
  }

  function removeCharacter(character) {
    Alert.alert(
      "Remover Personagem",
      `Remover "${character.name}" da party?`,
      [
        { text: "Não" },
        {
          text: "Sim",
          onPress: () => {
            setCharacters(characters.filter((c) => c.id !== character.id));
            setSnackbar({ visible: true, message: "Personagem removido!" });
          }
        }
      ]
    );
  }

  const filteredCharacters =
    filter === "all"
      ? characters
      : characters.filter((c) => (filter === "recruited" ? c.recruited : !c.recruited));

  const segmentedButtonTheme = {
    colors: {
      primary: "#C5282F",
      onPrimary: "#E69A28",
      secondary: "#E69A28",
      onSecondary: "#C5282F",
      surface: "#1A0E0A",
      onSurface: "#E69A28",
    },
  };

  return (
    <PaperProvider theme={{
      colors: {
        primary: "#C5282F",
        onPrimary: "#fff",
        secondary: "#E69A28",
        onSecondary: "#fff",
        background: "#1A0E0A",
        surface: "#1A0E0A",
        onSurface: "#E69A28",
        error: "#C5282F",
        text: "#E69A28",
        outline: "#E69A28",
      },
    }}>
      <SafeAreaView style={[styles.container, { backgroundColor: "#1A0E0A" }]}>
        <StatusBar style="light" backgroundColor="#1A0E0A" />
        <Header />
        <AddCharacterForm
          value={newCharacter}
          onChangeText={setNewCharacter}
          onSubmit={addCharacter}
        />
        <View style={{ marginBottom: 10 }}>
          <SegmentedButtons
            value={filter}
            onValueChange={setFilter}
            buttons={[
              { value: "all", label: "Todos" },
              { value: "recruited", label: "Recrutados" },
              { value: "available", label: "Disponíveis" },
            ]}
            theme={{
              colors: {
                primary: "#C5282F",
                onPrimary: "#fff",
                secondary: "#E69A28",
                onSecondary: "#fff",
                surface: "#1A0E0A",
                onSurface: "#E69A28",
              }
            }}
          />
        </View>
        <FlatList
          data={filteredCharacters}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CharacterCard
              character={item}
              onToggleRecruit={toggleRecruit}
              onRemove={removeCharacter}
            />
          )}
          style={styles.list}
        />
        <Snackbar
          visible={snackbar.visible}
          onDismiss={() => setSnackbar({ ...snackbar, visible: false })}
          duration={2000}
          style={{ backgroundColor: '#C5282F' }}
          theme={{
            colors: {
              surface: "#C5282F",
              onSurface: "#fff"
            }
          }}
        >
          {snackbar.message}
        </Snackbar>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A0E0A",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  list: {
    flex: 1,
  },
});