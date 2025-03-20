import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JobResponse } from '../../models/job.model'; // Adjust path as needed
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-job-descreption',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './job-descreption.component.html',
  styleUrl: './job-descreption.component.css'
})
export class JobDescreptionComponent implements OnInit{
  baseUrl = 'http://localhost:3000';
  token = sessionStorage.getItem('Accesstoken');
  jobResponse: JobResponse | null = null; // Store the API response
  jobId: string | null = null;
  activeTab: 'fulltext' | 'skills' = 'fulltext';
  showDeleteConfirm: boolean = false;
  notFound: boolean = false;
  
  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id');
    if (this.jobId) {
      this.fetchJob(this.jobId);
    }
  }

  fetchJob(id: string): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    this.http
      .get<JobResponse>(`${this.baseUrl}/api/v0/jobs/${id}`, { headers })
      .subscribe({
        next: (response) => {
          this.jobResponse = response;
          console.log('Job fetched:', this.jobResponse);
          this.titleService.setTitle(this.jobResponse.job.title || '404 Error')
        },
        error: (error) => {
          console.error('Error fetching job:', error);
          this.notFound = true;
          console.log(this.notFound, 'job not found')
          this.titleService.setTitle("Not Found Job");
        }
      });
  }

  // Show confirmation popup
  confirmDelete(): void {
    this.showDeleteConfirm = true;
  }

  // Cancel deletion
  cancelDelete(): void {
    this.showDeleteConfirm = false;
  }

  // Delete the job and navigate
  deleteJob(): void {
    if (!this.jobId) return;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    this.http
      .delete(`${this.baseUrl}/api/v0/jobs/${this.jobId}`, { headers })
      .subscribe({
        next: () => {
          console.log('Job deleted successfully');
          this.showDeleteConfirm = false;
          this.router.navigate(['/jobs']);
        },
        error: (error) => {
          console.error('Error deleting job:', error);
          this.showDeleteConfirm = false;
          alert('Failed to delete job. Please try again.');
        }
      });
  }
}