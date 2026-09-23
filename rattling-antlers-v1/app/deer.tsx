import { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { DeerType, behaviors, buckAges, doeAges, deerCallResponses } from '@/lib/data';

export default function Deer() {
  const [type, setType] = useState<DeerType>('Buck');
  const [behavior, setBehavior] = useState(behaviors[0]);
  const [age, setAge] = useState('Unknown');
  const [callResponse, setCallResponse] = useState('No');

  const ages = type === 'Buck' ? buckAges : type === 'Doe' ? doeAges : [];

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.wrap}>

        <Text style={s.h1}>WHAT DID YOU SEE?</Text>

        <View style={s.grid}>
          {(['Buck', 'Doe', 'Fawn', 'Unknown'] as DeerType[]).map(x => (
            <Pressable
              key={x}
              style={[s.choice, type === x && s.selected]}
              onPress={() => {
                setType(x);
                setAge('Unknown');
              }}
            >
              <Text style={s.choiceText}>{x.toUpperCase()}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={s.label}>WHAT WAS IT DOING?</Text>

        <View style={s.grid}>
          {behaviors.map(x => (
            <Pressable
              key={x}
              style={[s.choice, behavior === x && s.selected]}
              onPress={() => setBehavior(x)}
            >
              <Text style={s.choiceText}>{x}</Text>
            </Pressable>
          ))}
        </View>

        {ages.length > 0 && (
          <>
            <Text style={s.label}>{type.toUpperCase()} AGE</Text>

            <View style={s.grid}>
              {ages.map(x => (
                <Pressable
                  key={x}
                  style={[s.choice, age === x && s.selected]}
                  onPress={() => setAge(x)}
                >
                  <Text style={s.choiceText}>{x}</Text>
                </Pressable>
              ))}
            </View>
          </>
        )}

        <Text style={s.label}>DEER RESPONSE TO CALLS</Text>

        <View style={s.grid}>
          {deerCallResponses.map(x => (
            <Pressable
              key={x}
              style={[s.choice, callResponse === x && s.selected]}
              onPress={() => setCallResponse(x)}
            >
              <Text style={s.choiceText}>{x}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          style={s.save}
          onPress={() => router.push({
            pathname: '/saved',
            params: {
              type,
              behavior,
              age,
              callResponse,
            },
          })}
        >
          <Text style={s.saveText}>SAVE OBSERVATION</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#111',
  },
  wrap: {
    padding: 24,
    gap: 14,
  },
  h1: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 10,
  },
  label: {
    color: '#aaa',
    fontSize: 13,
    fontWeight: '800',
    marginTop: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  choice: {
    borderWidth: 1,
    borderColor: '#444',
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  selected: {
    backgroundColor: '#eee',
    borderColor: '#eee',
  },
  choiceText: {
    color: '#fff',
    fontWeight: '700',
  },
  save: {
    backgroundColor: '#eee',
    padding: 17,
    borderRadius: 13,
    alignItems: 'center',
    marginTop: 20,
  },
  saveText: {
    color: '#111',
    fontWeight: '900',
  },
});