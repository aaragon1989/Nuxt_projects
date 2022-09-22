import * as msal from '@azure/msal-browser';

export default class Authentication {
	private auth;

	constructor(configOptions : msal.Configuration) {
		this.auth = new msal.PublicClientApplication(configOptions);
	}
	
	// public signUp() { 

	// }   
	
	public async login() { 
		try {
						const loginRequest: msal.RedirectRequest = {
								scopes: ["openid", "profile"]
						};
						const response = await this.auth.loginRedirect(loginRequest);
						console.log('login response from msal: ', response);
						// do something with this?
				} catch (err:any) {
						// handle error
						// if (err.errorMessage && err.errorMessage.indexOf("AADB2C90118") > -1) {
						//     try {
						//         const passwordResetResponse: msal.AuthenticationResult = await msalInstance.loginPopup({
						//             scopes: ["openid", "profile", "offline_access", "<The scope for your API>"],
						//             authority: this.pluginOptions.passwordAuthority
						//         });
						//         //  this.isAuthenticated = !!passwordResetResponse.account;
						//     } catch (passwordResetError) {
						//         console.error(passwordResetError);
						//     }
						// } else {
						//     this.isAuthenticated = false;
						// }
			console.error('authentication class error: ', err);
				}
		}
	
	
	public async logout() {
		await this.auth.logoutRedirect();
	}
}