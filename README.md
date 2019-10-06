# Save Utm On Cookie

**Save the user's source data in their first and last session.**

*I used this solution to identify and send along with the forms the sources that influenced on conversion.*

## How it works

In his first session on the site we store in the cookie his origin through the utm parameters in the URL.

From the second session onwards, the user source will always be stored as the last session.

## How to use
Importing the `utm-on-cookie.min.js` file will give you access to a `utmCookie` JS variable which is an object that has the keys: first, last, gclid and source

**first:** contains the data of first session with utm parameters.
**last:** contains the data of last session with utm parameters.
**gclid:** contains the gclid value of the last session with gclid parameter.
**fbclid:** Contains the fbclid value of the last session with fbclid parameter.
**source:** contains current session data with utm parameters.

### Structure

    {
	    "gclid":  "",
	    "fbclid":  "",
	    "utm_source":  "social",
	    "utm_medium":  "cpc",
	    "utm_campaign":  "jokerCampaign"
    }


## In the future
The idea is take the referral where it came from and store
