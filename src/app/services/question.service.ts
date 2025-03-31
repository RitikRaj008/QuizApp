import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private baseUrl = 'http://localhost:8080/question';

  constructor(private http: HttpClient) {}

  getAllQuestions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allQuestions`);
  }

  getQuestionsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/category/${category}`);
  }

  addQuestion(question: any): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/add`, question);
  }
}