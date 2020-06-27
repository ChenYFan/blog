interface Log {
	levelArray: Log.Level[];

	Log: Log.Levels;

	verbose(message: any, ...messages: any[]): Log;
	debug(message: any, ...messages: any[]): Log;
	info(message: any, ...messages: any[]): Log;
	warn(message: any, ...messages: any[]): Log;
	error(message: any, ...messages: any[]): Log;

	find(key: string, value: number|string): Log.Level;
	setLevel(level: number|string): Log;
	setDateFormat(dateFormat: string): Log;
}

declare namespace Log {

	interface Level {
		level: number;
		string: string;
		color: string;
	}

	interface Levels {
		VERBOSE: number;
		DEBUG: number;
		INFO: number;
		WARN: number;
		ERROR: number;
	}
}

export = <Log>{};
