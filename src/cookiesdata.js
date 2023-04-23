// check if cookies are disabled
import React from 'react';

function App() {
  const isCookieEnabled = navigator.cookieEnabled;

  return (
    <div>
      {isCookieEnabled ? (
        <p>Cookies are enabled</p>
      ) : (
        <p>Cookies are disabled</p>
      )}
    </div>
  );
}

export default App;
//check if 3rd part cookies are disabled 
function areThirdPartyCookiesEnabled() {
    // Attempt to set a cookie
    document.cookie = 'test_cookie=1';
  
    // Check if the cookie was set
    const cookieExists = document.cookie.indexOf('test_cookie=') !== -1;
  
    // Delete the test cookie
    document.cookie = 'test_cookie=1; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  
    // Return the result
    return cookieExists;
  }
//
import React from 'react';

function App() {
  const isThirdPartyCookiesEnabled = areThirdPartyCookiesEnabled();

  return (
    <div>
      {isThirdPartyCookiesEnabled ? (
        <p>Third-party cookies are enabled</p>
      ) : (
        <p>Third-party cookies are disabled</p>
      )}
    </div>
  );
}

export default App;
