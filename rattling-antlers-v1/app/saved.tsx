import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function Saved() {
  const params = useLocalSearchParams();

  const type = params.type ?? 'Unknown';
  const behavior = params.behavior ?? 'Unknown';
  const age = params.age ?? 'Unknown';
  const callResponse = params.callResponse ?? 'No';

  return (
    <SafeAreaView style={s.safe}>
      <View style={s.wrap}>

        <Text style={s.check}>✓</Text>

        <Text style={s.h1}>OBSERVATION SAVED</Text>

        <Text style={s.meta}>
          {type} · {age} · {behavior}
        </Text>

        <Text style={s.callLabel}>DEER RESPONSE TO CALLS</Text>

        <Text style={s.callValue}>{callResponse}</Text>

        <Pressable
          style={s.primary}
          onPress={() => router.push('/deer')}
        >
          <Text style={s.primaryText}>ADD ANOTHER DEER</Text>
        </Pressable>

        <Pressable
          style={s.secondary}
          onPress={() => router.replace('/hunt')}
        >
          <Text style={s.secondaryText}>BACK TO HUNT</Text>
        </Pressable>

      </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
  },
  check: {
    fontSize: 60,
    color: '#9caf95',
  },
  h1: {
    color: '#fff',
    fontSize: 27,
    fontWeight: '900',
    textAlign: 'center',
  },
  meta: {
    color: '#aaa',
    textAlign: 'center',
    fontSize: 16,
  },
  callLabel: {
    color: '#888',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 8,
  },
  callValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '900',
  },
  primary: {
    backgroundColor: '#eee',
    padding: 17,
    borderRadius: 13,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  secondary: {
    borderWidth: 1,
    borderColor: '#555',
    padding: 17,
    borderRadius: 13,
    width: '100%',
    alignItems: 'center',
  },
  primaryText: {
    color: '#111',
    fontWeight: '900',
  },
  secondaryText: {
    color: '#fff',
    fontWeight: '900',
  },
});