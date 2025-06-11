import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isAuthenticated = false;
  private token! : string;


  constructor() {}

    getToken(): string {
        return this.token;
    }

  login() {
    // Simulate a login process
 this.token = "MyFakeToken123";
  }

  logout(): void {
    this.isAuthenticated = false;
    this.token = "";
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}