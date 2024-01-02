"use strict";

import {
  EventRequest,
  FacebookAdsApi,
  ServerEvent,
  UserData,
} from "facebook-nodejs-business-sdk";
import { NextRequest } from "next/server";
import sha256 from "sha256";

export class FacebookConversionsAPI {
  public static accessToken: string;
  // public static account: AdAccount;
  public static api: FacebookAdsApi;

  public static _hasInitialized = false;

  public static init() {
    if (this._hasInitialized) return;
    this._hasInitialized = true;
    this.accessToken = process.env.FACEBOOK_CONVERSIONS_API_TOKEN!;
    // this.account = new AdAccount(process.env.FB_AD_ACCOUNT_ID);
    this.api = FacebookAdsApi.init(this.accessToken);
  }

  public static async triggerContactEvent(
    firstname: string,
    lastname: string,
    email: string,
    phonenumber: string,
    request: NextRequest
  ) {
    this.init();
    const userData = new UserData()
      .setFirstName(sha256(firstname))
      .setLastName(sha256(lastname))
      .setEmails([sha256(email.toLowerCase())])
      .setPhones([sha256(phonenumber)])
      // It is recommended to send Client IP and User Agent for Conversions API Events.
      .setClientUserAgent(request.headers.get("user-agent")!);
    const fbp = request.cookies.get("_fbp");
    if (fbp?.value) {
      userData.setFbp(fbp.value);
    }

    if (request.ip) {
      userData.setClientIpAddress(request.ip);
    }

    const fbc = request.cookies.get("_fbc");

    if (fbc?.value) {
      userData.setFbc(fbc.value);
    }

    //@ts-ignore
    let current_timestamp = Math.floor(new Date() / 1000);

    const serverEvent = new ServerEvent()
      .setEventName("Contact")
      .setEventTime(current_timestamp)
      .setUserData(userData)
      .setEventSourceUrl(request.url)
      .setActionSource("website");

    const eventsData = [serverEvent];
    const eventRequest = new EventRequest(
      this.accessToken,
      process.env.FACEBOOK_PIXEL_ID!
    ).setEvents(eventsData);
    eventRequest.execute();
  }
}
