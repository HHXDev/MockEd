import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

course: Course;
  constructor(courseService: CourseService) {
    this.course = courseService.curso;
   }


  ngOnInit() {
  }

}
