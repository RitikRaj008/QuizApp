import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuizService {
  private baseUrl = 'http://localhost:8080/quiz';

  constructor(private http: HttpClient) {}

  createQuiz(category: string, numQ: number, title: string): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/create?category=${category}&numQ=${numQ}&title=${title}`, {});
  }

  getQuiz(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }

  submitQuiz(id: number, responses: any[]): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/submit/${id}`, responses);
  }
}