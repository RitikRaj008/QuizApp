import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../../services/question.service';


@Component({
  standalone: true,   // Add this if using standalone component
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule] // Add CommonModule for *ngFor directive
})
export class HomeComponent {
  questions: any[] = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService.getAllQuestions().subscribe((data) => {
      this.questions = data;
    });
  }
}
