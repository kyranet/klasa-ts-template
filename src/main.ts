import { KlasaClient, KlasaClientOptions } from 'klasa';
import { config, token } from '../config';

class MyKlasaClient extends KlasaClient {

	constructor(options: KlasaClientOptions) {
		super(options);

		// Add any properties to your Klasa Client
	}

	// Add any methods to your Klasa Client

}

new MyKlasaClient(config).login(token);
