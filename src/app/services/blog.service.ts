import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Blog } from '../models/blog.model';
import blogsData from '../data/blogs.json';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getBlogs(): Blog[] {
    return blogsData as Blog[];
  }

  getBlogById(id: string): Blog | undefined {
    return blogsData.find(blog => blog.id === id);
  }

  getBlogContent(filePath: string): Observable<string> {
    return this.http.get(filePath, { responseType: 'text' });
  }
}
