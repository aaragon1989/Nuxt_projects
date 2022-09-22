import Vue from 'vue';
import * as Msal from '@azure/msal-browser';
import { LogLevel } from '@azure/msal-browser';
import Authentication from '~/utils/authentication';


function msalLoggingCallback (level: LogLevel, message: string, containsPii: boolean): void {
  if (containsPii) {
    return
  }
  switch (level) {
    case LogLevel.Error:
      console.error(message)
      return
    case LogLevel.Info:
      console.info(message)
      return
    case LogLevel.Verbose:
      console.debug(message)
      return
    case LogLevel.Warning:
      console.warn(message)
  }
}

export default function AuthPlugin ({ $config } : {$config:Record<string, string>}) {
  const msalConfig : Msal.Configuration = {
    auth: {
      // 'Application (client) ID' of app registration in Azure portal - this value is a GUID
      clientId: $config.authorizationClientId,
      // Full directory URL, in the form of https://login.microsoftonline.com/<tenant-id>
      authority: $config.authorizationEndpoint,
      knownAuthorities: [$config.b2cDomainName],
      // URI where the authorization code response is sent back to.
      redirectUri: $config.redirectUri,
      // URI that is redirected to after a logout() call is made.
      postLogoutRedirectUri: 'http://localhost:3000',
      navigateToLoginRequestUrl: true
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false
    },
    system: {
      loggerOptions: {
        loggerCallback: msalLoggingCallback,
        piiLoggingEnabled: false
      },
      windowHashTimeout: 60000,
      iframeHashTimeout: 6000,
      loadFrameTimeout: 0
    }
  }
  console.log('MSAL CONFIG object', {...msalConfig});
   // Create a global instance of auth
  Vue.prototype.$auth = new Authentication(msalConfig);
}

