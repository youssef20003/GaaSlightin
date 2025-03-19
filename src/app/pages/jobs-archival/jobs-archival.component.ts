import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Job, JobResponse } from '../../models/job.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobs-archival',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './jobs-archival.component.html',
  styleUrl: './jobs-archival.component.css'
})
export class JobsArchivalComponent implements OnInit{
  baseUrl = 'https://localhost:3000';
  // token will be updated
  token = sessionStorage.getItem('Accesstoken')
  jobResponse : Job[] = [];
  jobUrl: string = '';
  isSaving: boolean = false;
  sampleJobUrl: string = 'https://careers.procore.com/jobs/sr-manager-software-engineering-bengaluru-ka-india-ae9acb81-dbd7-48ce-9be1-1033d0e29964'; // Sample URL
  isCopied: boolean = false; // Track if copied
  isLoading: boolean = true;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchJobs();
    console.log(this.jobResponse);
  }

  fetchJobs(): void {
    // Set up headers with the token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    // Make the API call
    this.http
      .get<Job[]>(`${this.baseUrl}/api/v0/jobs`, { headers })
      .subscribe({
        next: (response) => {
          this.jobResponse = response; // Store the response
          console.log('Jobs fetched:', this.jobResponse);
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error fetching jobs:', error);
          this.isLoading = false;
        }
      });
  }

  saveJob(): void {
    if (!this.jobUrl) {
      console.error('Job URL is required');
      return;
    }

    this.isSaving = true; // Start loading

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });

    const body = { url: this.jobUrl };

    this.http
      .post<JobResponse>(`${this.baseUrl}/api/v0/jobs`, body, { headers })
      .subscribe({
        next: (response) => {
          console.log('Job created:', response);
          const jobId = response.job._id; // Extract the job ID
          console.log(jobId);
          this.router.navigate(['/jobs', jobId]); // Navigate to jobs/<id>
          this.isSaving = false;
        },
        error: (error) => {
          console.error('Error creating job:', error);
          this.isSaving = false;
        }
      });
  }

  copySampleUrl(): void {
    navigator.clipboard.writeText(this.sampleJobUrl).then(() => {
      this.isCopied = true;
      console.log('Sample URL copied:', this.sampleJobUrl);
      // Reset "Copied" feedback after 2 seconds
      setTimeout(() => {
        this.isCopied = false;
        this.jobUrl = this.sampleJobUrl
      }, 1000);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }
}
