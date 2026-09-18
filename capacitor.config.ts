import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.p4b5e95125a3b4c3890520ff46ee2f79e',
  appName: 'Voxia',
  webDir: 'dist',
  // Hot-reload from the Lovable sandbox while testing on a real device.
  // Remove the `server` block for a store build so the app loads `dist`.
  server: {
    url: 'https://4b5e9512-5a3b-4c38-9052-0ff46ee2f79e.lovableproject.com?forceHideBadge=true',
    cleartext: true,
  },
  android: {
    backgroundColor: '#FAF7F2',
  },
  ios: {
    backgroundColor: '#FAF7F2',
    contentInset: 'always',
  },
};

export default config;
