import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { JobResponse } from '../../models/job.model'; // Adjust path as needed
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-descreption',
  imports: [CommonModule, FormsModule],
  templateUrl: './job-descreption.component.html',
  styleUrl: './job-descreption.component.css'
})
export class JobDescreptionComponent implements OnInit{
  baseUrl = 'https://localhost:3000';
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlNTJiZGVkMy1lOTZkLTQ4NTYtODg3YS00NjkwMDc3NDMxZTIiLCJpYXQiOjE3NDI0MDU1MjEsImV4cCI6MTc0MzAxMDMyMX0._o4KbnSFhG3RCYVUx1ta42EH0LBklReUt30ChADc2Uc";
  jobResponse: JobResponse | null = null; // Store the API response
  jobId: string | null = null;
  activeTab: 'fulltext' | 'skills' = 'fulltext';
  showDeleteConfirm: boolean = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

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
        },
        error: (error) => {
          console.error('Error fetching job:', error);
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