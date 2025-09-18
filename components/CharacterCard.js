import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text, IconButton } from "react-native-paper";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
           
            <MaterialIcons
                name={character.recruited ? "star" : "person-add"}
                size={28}
                color={character.recruited ? "#E69A28" : "#C5282F"}
                style={styles.status}
                onPress={() => onToggleRecruit(character)}
                accessibilityLabel={character.recruited ? "Dispensar" : "Recrutar"}
            />
         
            <FontAwesome
                name="trash"
                size={28}
                color="#C5282F"
                style={styles.status}
                onPress={() => onRemove(character)}
                accessibilityLabel="Remover"
            />
        </Card.Content>
    </Card>
);
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#2C1810",
        marginBottom: 16, 
        borderRadius: 12, 
        borderWidth: 1,
        borderColor: "#58180D",
        minHeight: 60,
        padding: 10, 
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
        paddingVertical: 8, 
    },
    characterText: {
        flex: 1,
        fontSize: 18, 
        color: "#F4E4BC",
        fontWeight: "500",
    },
    characterRecruitedText: {
        color: "#E69A28",
        fontWeight: "bold",
    },
    status: {
        marginLeft: 14, 
    },
});
