import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.itstime.app',
	appName: "It's Time",
	webDir: 'build',
	server: {
		androidScheme: 'https'
	}
};

export default config;
