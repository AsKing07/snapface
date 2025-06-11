import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private isAuthenticated = false;
  private token = "MyFakeToken123"

  constructor() {}

    getToken(): string {
        return this.token;
    }

  login(username: string, password: string): boolean {
    // Simulate a login process
    if (username === "user" && password === "password") {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}