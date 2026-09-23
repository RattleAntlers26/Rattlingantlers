# Rattling Antlers — V1 starter

This is the first working mobile-app foundation for the whitetail hunting product.

## Current working flow
Home → Start Hunt → Hunting Method → Active Hunt → Deer → Behavior → Age → Save → Hunt Summary → History

Also includes the Group Observation flow and initial Insights screen.

## Intended stack
- React Native + Expo
- Expo Router
- Supabase/PostgreSQL (next integration)
- Mapbox (next integration)
- Open-Meteo (next integration)

## Business model
- Free core experience
- Premium: $39.99/year

## Next engineering work
1. Connect Supabase authentication/database.
2. Replace demo data with persistent local state and Supabase sync.
3. Add properties/stands and map placement.
4. Add real weather and astronomical conditions.
5. Add offline-first storage and recovery.
6. Add subscription entitlement handling.
7. Add private admin/research dashboard.

## Run
Install Node.js, then:

npm install
npm run start

Use Expo Go for early device testing, or an EAS development build when native features are added.
